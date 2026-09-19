import crypto from "node:crypto";

/**
 * Generates a high-entropy random string token
 */
export function generateRandomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

/**
 * Generates SHA-256 hash of a string
 */
export function sha256(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

/**
 * Computes salted password hash with 100,000 PBKDF2 iterations
 */
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return `${salt}:${derivedKey}`;
}

/**
 * Verifies a password against a stored hash using constant-time comparison
 */
export function verifyPassword(password, storedHash) {
  if (!password || !storedHash || !storedHash.includes(":")) return false;

  const [salt, key] = storedHash.split(":");
  const keyBuffer = Buffer.from(key, "hex");
  const derivedKey = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512");

  if (keyBuffer.length !== derivedKey.length) return false;
  return crypto.timingSafeEqual(keyBuffer, derivedKey);
}

/**
 * Performs a fake hash computation to defend against timing attacks when a user does not exist
 */
export function fakeVerifyWork() {
  const dummySalt = "00000000000000000000000000000000";
  crypto.pbkdf2Sync("fake-password", dummySalt, 100000, 64, "sha512");
  return false;
}
