import { getOne, getAll, runQuery } from "../db/connection.js";

export const contactRepository = {
  create({ id, name, email, company, message, status = "pending", createdAt }) {
    runQuery(
      `INSERT INTO contacts (id, name, email, company, message, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, name, email, company, message, status, createdAt]
    );
    return { id, name, email, company, message, status, createdAt };
  },

  findById(id) {
    return getOne(`SELECT * FROM contacts WHERE id = ?`, [id]);
  },

  findAll(limit = 100) {
    return getAll(`SELECT * FROM contacts ORDER BY created_at DESC LIMIT ?`, [limit]);
  },

  count() {
    const row = getOne(`SELECT COUNT(*) as count FROM contacts`);
    return row?.count || 0;
  },
};
