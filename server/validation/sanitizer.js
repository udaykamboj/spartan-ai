/**
 * String sanitizer to guard against XSS, HTML injection, and control character abuse.
 */
export function sanitizeString(input) {
  if (typeof input !== "string") return "";

  return input
    .replace(/\0/g, "") // remove null bytes
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // strip script tags
    .replace(/<[^>]+>/g, "") // strip HTML tags
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, "") // remove invisible control chars
    .trim();
}
