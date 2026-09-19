import { getOne, getAll, runQuery } from "../db/connection.js";

export const userRepository = {
  create({ id, email, passwordHash, name, role = "user", createdAt, updatedAt }) {
    runQuery(
      `INSERT INTO users (id, email, password_hash, role, name, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, email, passwordHash, role, name, createdAt, updatedAt]
    );
    return this.findById(id);
  },

  findById(id) {
    return getOne(
      `SELECT id, email, role, name, created_at, updated_at
       FROM users
       WHERE id = ?`,
      [id]
    );
  },

  findByEmail(email) {
    return getOne(
      `SELECT id, email, password_hash, role, name, created_at, updated_at
       FROM users
       WHERE email = ?`,
      [email]
    );
  },

  updateName(id, name) {
    const updatedAt = new Date().toISOString();
    runQuery(`UPDATE users SET name = ?, updated_at = ? WHERE id = ?`, [name, updatedAt, id]);
    return this.findById(id);
  },

  count() {
    const row = getOne(`SELECT COUNT(*) as count FROM users`);
    return row?.count || 0;
  },
};
