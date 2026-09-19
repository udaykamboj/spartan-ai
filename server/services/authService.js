import crypto from "node:crypto";
import { userRepository } from "../repositories/userRepository.js";
import { sessionRepository } from "../repositories/sessionRepository.js";
import {
  hashPassword,
  verifyPassword,
  fakeVerifyWork,
  generateRandomToken,
  sha256,
} from "../utils/crypto.js";
import { ConflictError, UnauthorizedError, NotFoundError } from "../errors/AppError.js";

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const authService = {
  /**
   * Registers a new user account
   */
  async register({ email, password, name = "" }) {
    const existing = userRepository.findByEmail(email);
    if (existing) {
      throw new ConflictError("An account with this email address already exists.");
    }

    const userId = crypto.randomUUID();
    const passwordHash = hashPassword(password);
    const now = new Date().toISOString();
    const displayName = name.trim() || email.split("@")[0];

    const user = userRepository.create({
      id: userId,
      email,
      passwordHash,
      name: displayName,
      role: "user",
      createdAt: now,
      updatedAt: now,
    });

    const session = await this.createSession(userId);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.created_at,
      },
      session,
    };
  },

  /**
   * Authenticates user credentials with timing attack shield
   */
  async login({ email, password }) {
    const user = userRepository.findByEmail(email);

    if (!user) {
      // Fake work to prevent timing attack enumeration
      fakeVerifyWork();
      throw new UnauthorizedError("Invalid email or password.");
    }

    const isValid = verifyPassword(password, user.password_hash);
    if (!isValid) {
      throw new UnauthorizedError("Invalid email or password.");
    }

    const session = await this.createSession(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.created_at,
      },
      session,
    };
  },

  /**
   * Creates a new cryptographically secure session
   */
  async createSession(userId) {
    const rawToken = generateRandomToken(32);
    const tokenHash = sha256(rawToken);
    const sessionId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString();
    const createdAt = new Date().toISOString();

    sessionRepository.create({
      id: sessionId,
      userId,
      tokenHash,
      expiresAt,
      createdAt,
    });

    return {
      rawToken,
      sessionId,
      expiresAt,
      maxAgeSeconds: Math.floor(SESSION_DURATION_MS / 1000),
    };
  },

  /**
   * Validates a session token
   */
  async validateSession(rawToken) {
    if (!rawToken || typeof rawToken !== "string") return null;

    const tokenHash = sha256(rawToken);
    const session = sessionRepository.findByTokenHash(tokenHash);

    if (!session) return null;

    return {
      id: session.id,
      email: session.email,
      name: session.name,
      role: session.role,
      createdAt: session.created_at,
      expiresAt: session.expires_at,
    };
  },

  /**
   * Revokes a session token
   */
  async logout(rawToken) {
    if (!rawToken) return;
    const tokenHash = sha256(rawToken);
    sessionRepository.deleteByTokenHash(tokenHash);
  },
};
