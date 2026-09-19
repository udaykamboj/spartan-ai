import { userRepository } from "../repositories/userRepository.js";
import { NotFoundError } from "../errors/AppError.js";

export const userService = {
  async getProfile(userId) {
    const user = userRepository.findById(userId);
    if (!user) {
      throw new NotFoundError("User not found.");
    }
    return user;
  },

  async updateName(userId, name) {
    return userRepository.updateName(userId, name);
  },
};
