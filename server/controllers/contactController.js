import { contactService } from "../services/contactService.js";
import { validateContactPayload } from "../validation/schemas.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { checkRateLimit } from "../middleware/rateLimiter.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

export const contactController = {
  async submit(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 20, windowMs: 60000, prefix: "contact" });
      const body = await request.json().catch(() => ({}));
      const validated = validateContactPayload(body);

      const submission = await contactService.submitContact(validated);

      return successResponse(
        {
          message: "Your message has been received. Our solutions engineering team will follow up within 24 hours.",
          submission,
        },
        201,
        applySecurityHeaders(rateHeaders)
      );
    } catch (error) {
      return errorResponse(error);
    }
  },
};
