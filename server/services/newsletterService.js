import crypto from "node:crypto";
import { subscriberRepository } from "../repositories/subscriberRepository.js";
import { logger } from "../utils/logger.js";

export const newsletterService = {
  async subscribe({ email, source = "landing_page" }) {
    const existing = subscriberRepository.findByEmail(email);
    if (existing) {
      return {
        id: existing.id,
        email: existing.email,
        alreadySubscribed: true,
      };
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const record = subscriberRepository.create({
      id,
      email,
      source,
      status: "active",
      createdAt,
    });

    logger.info("New newsletter subscriber registered", { id, email, source });

    return {
      id: record.id,
      email: record.email,
      alreadySubscribed: false,
    };
  },

  async getSubscriberCount() {
    return subscriberRepository.count();
  },
};
