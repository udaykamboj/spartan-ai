import { ValidationError } from "../errors/AppError.js";
import { sanitizeString } from "./sanitizer.js";

/**
 * Validates and cleans email addresses
 */
export function validateEmail(email) {
  if (!email || typeof email !== "string") {
    throw new ValidationError("Email address is required.");
  }
  const clean = sanitizeString(email).toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(clean) || clean.length > 255) {
    throw new ValidationError("Invalid email address format.");
  }
  return clean;
}

/**
 * Validates a string within min and max length bounds
 */
export function validateString(value, fieldName, min = 1, max = 500) {
  if (value === undefined || value === null) {
    throw new ValidationError(`${fieldName} is required.`);
  }
  const clean = sanitizeString(String(value));
  if (clean.length < min) {
    throw new ValidationError(`${fieldName} must be at least ${min} character(s).`);
  }
  if (clean.length > max) {
    throw new ValidationError(`${fieldName} cannot exceed ${max} characters.`);
  }
  return clean;
}

/**
 * Validates password strength (minimum 8 characters)
 */
export function validatePassword(password) {
  if (!password || typeof password !== "string" || password.length < 8) {
    throw new ValidationError("Password must be at least 8 characters long.");
  }
  if (password.length > 128) {
    throw new ValidationError("Password cannot exceed 128 characters.");
  }
  return password;
}

/**
 * Validates contact form submission
 */
export function validateContactPayload(body) {
  if (!body || typeof body !== "object") {
    throw new ValidationError("Invalid request body.");
  }

  const name = validateString(body.name, "Name", 2, 100);
  const email = validateEmail(body.email);
  const company = body.company ? sanitizeString(String(body.company)).slice(0, 100) : "";
  const message = validateString(body.message, "Message", 5, 2000);

  return { name, email, company, message };
}

/**
 * Validates newsletter subscription request
 */
export function validateSubscriberPayload(body) {
  if (!body || typeof body !== "object") {
    throw new ValidationError("Invalid request body.");
  }
  const email = validateEmail(body.email);
  const source = body.source ? sanitizeString(String(body.source)).slice(0, 50) : "landing_page";
  return { email, source };
}
