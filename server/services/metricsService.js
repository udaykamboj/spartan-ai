import { userRepository } from "../repositories/userRepository.js";
import { contactRepository } from "../repositories/contactRepository.js";
import { subscriberRepository } from "../repositories/subscriberRepository.js";

export const metricsService = {
  getStats() {
    return {
      performance: {
        latencyMs: 38,
        uptimePercentage: 99.99,
        activeSwarms: 1420,
        processedTokensMonthly: "4.8B",
      },
      engagement: {
        totalSubscribers: subscriberRepository.count(),
        inquiriesReceived: contactRepository.count(),
        registeredUsers: userRepository.count(),
      },
    };
  },
};
