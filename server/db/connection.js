import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { SCHEMA_SQL } from "./schema.js";

let dbInstance = null;

const DEFAULT_DB_PATH = path.join(process.cwd(), "data", "app.db");

/**
 * Returns the singleton SQLite database instance.
 * Automatically runs pragmas for high concurrency:
 * - WAL mode for non-blocking reads during writes
 * - synchronous = NORMAL for optimal NVMe/SSD durability and throughput
 * - busy_timeout = 5000ms for busy handling under concurrent traffic
 * - foreign_keys = ON
 */
export function getDb(customPath = null) {
  if (dbInstance) return dbInstance;

  const dbPath = customPath || process.env.DATABASE_PATH || DEFAULT_DB_PATH;
  const dbDir = path.dirname(dbPath);

  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  dbInstance = new DatabaseSync(dbPath);
  dbInstance.exec("PRAGMA journal_mode = WAL;");
  dbInstance.exec("PRAGMA synchronous = NORMAL;");
  dbInstance.exec("PRAGMA busy_timeout = 5000;");
  dbInstance.exec("PRAGMA foreign_keys = ON;");
  dbInstance.exec(SCHEMA_SQL);

  return dbInstance;
}

/**
 * Execute a write query (INSERT / UPDATE / DELETE)
 */
export function runQuery(sql, params = []) {
  const db = getDb();
  const stmt = db.prepare(sql);
  return stmt.run(...params);
}

/**
 * Fetch a single record
 */
export function getOne(sql, params = []) {
  const db = getDb();
  const stmt = db.prepare(sql);
  return stmt.get(...params);
}

/**
 * Fetch all matching records
 */
export function getAll(sql, params = []) {
  const db = getDb();
  const stmt = db.prepare(sql);
  return stmt.all(...params);
}

/**
 * Helper to run operations inside an atomic transaction
 */
export function withTransaction(callback) {
  const db = getDb();
  db.exec("BEGIN TRANSACTION;");
  try {
    const result = callback(db);
    db.exec("COMMIT;");
    return result;
  } catch (error) {
    db.exec("ROLLBACK;");
    throw error;
  }
}
