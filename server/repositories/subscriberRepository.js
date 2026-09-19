import { getOne, getAll, runQuery } from "../db/connection.js";

export const subscriberRepository = {
  create({ id, email, source = "landing_page", status = "active", createdAt }) {
    runQuery(
      `INSERT INTO subscribers (id, email, source, status, created_at)
       VALUES (?, ?, ?, ?, ?)`,
      [id, email, source, status, createdAt]
    );
    return { id, email, source, status, createdAt };
  },

  findByEmail(email) {
    return getOne(`SELECT * FROM subscribers WHERE email = ?`, [email]);
  },

  findAll(limit = 100) {
    return getAll(`SELECT * FROM subscribers ORDER BY created_at DESC LIMIT ?`, [limit]);
  },

  count() {
    const row = getOne(`SELECT COUNT(*) as count FROM subscribers WHERE status = 'active'`);
    return row?.count || 0;
  },
};
