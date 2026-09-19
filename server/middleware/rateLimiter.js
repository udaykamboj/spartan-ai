import { RateLimitError } from "../errors/AppError.js";

/**
 * In-memory sliding window rate limiter.
 * Tracks requests per IP within a rolling time window.
 */
const requestMap = new Map();

// Periodic cleanup of expired rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of requestMap.entries()) {
    if (now > record.resetTime) {
      requestMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function getClientIp(request) {
  const xForwardedFor = request?.headers?.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  const realIp = request?.headers?.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfIp = request?.headers?.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  return "127.0.0.1";
}

/**
 * Enforces rate limiting on an incoming request.
 * @param {Request} request Next.js request object
 * @param {Object} options Configuration { maxRequests, windowMs, prefix }
 * @returns {Object} Headers object containing standard X-RateLimit headers
 */
export function checkRateLimit(request, { maxRequests = 100, windowMs = 60 * 1000, prefix = "api" } = {}) {
  const ip = getClientIp(request);
  const key = `${prefix}:${ip}`;
  const now = Date.now();

  let record = requestMap.get(key);
  if (!record || now > record.resetTime) {
    record = {
      count: 1,
      resetTime: now + windowMs,
    };
    requestMap.set(key, record);
  } else {
    record.count++;
  }

  const remaining = Math.max(0, maxRequests - record.count);
  const resetSeconds = Math.ceil((record.resetTime - now) / 1000);

  const headers = {
    "X-RateLimit-Limit": String(maxRequests),
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(resetSeconds),
  };

  if (record.count > maxRequests) {
    headers["Retry-After"] = String(resetSeconds);
    throw new RateLimitError();
  }

  return headers;
}
