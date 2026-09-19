import { getOne, runQuery } from "../db/connection.js";

export const sessionRepository = {
  create({ id, userId, tokenHash, expiresAt, createdAt }) {
    runQuery(
      `INSERT INTO sessions (id, user_id, token_hash, expires_at, created_at)
       VALUES (?, ?, ?, ?, ?)`,
      [id, userId, tokenHash, expiresAt, createdAt]
    );
    return { id, userId, tokenHash, expiresAt, createdAt };
  },

  findByTokenHash(tokenHash) {
    return getOne(
      `SELECT s.id as session_id, s.expires_at, u.id, u.email, u.name, u.role, u.created_at
       FROM sessions s
       JOIN users u ON s.user_id = u.id
       WHERE s.token_hash = ? AND s.expires_at > ?`,
      [tokenHash, new Date().toISOString()]
    );
  },

  deleteByTokenHash(tokenHash) {
    return runQuery(`DELETE FROM sessions WHERE token_hash = ?`, [tokenHash]);
  },

  deleteExpired() {
    return runQuery(`DELETE FROM sessions WHERE expires_at <= ?`, [new Date().toISOString()]);
  },
};
