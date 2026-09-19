/**
 * Standard HTTP Security Headers
 */
export const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-DNS-Prefetch-Control": "on",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

/**
 * Applies standard security headers to an existing headers object
 */
export function applySecurityHeaders(headers = {}) {
  return {
    ...headers,
    ...SECURITY_HEADERS,
  };
}
