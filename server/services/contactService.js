import crypto from "node:crypto";
import { contactRepository } from "../repositories/contactRepository.js";
import { logger } from "../utils/logger.js";

export const contactService = {
  async submitContact({ name, email, company = "", message }) {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const record = contactRepository.create({
      id,
      name,
      email,
      company,
      message,
      status: "pending",
      createdAt,
    });

    logger.info("New contact inquiry submitted", { id, email, name, company });

    return {
      id: record.id,
      name: record.name,
      email: record.email,
      createdAt: record.createdAt,
    };
  },

  async listInquiries(limit = 100) {
    return contactRepository.findAll(limit);
  },
};
