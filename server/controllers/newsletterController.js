import { newsletterService } from "../services/newsletterService.js";
import { validateSubscriberPayload } from "../validation/schemas.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { checkRateLimit } from "../middleware/rateLimiter.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

export const newsletterController = {
  async subscribe(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 20, windowMs: 60000, prefix: "newsletter" });
      const body = await request.json().catch(() => ({}));
      const { email, source } = validateSubscriberPayload(body);

      const subscriber = await newsletterService.subscribe({ email, source });

      const message = subscriber.alreadySubscribed
        ? "You are already subscribed to Spartan AI intelligence updates."
        : "Successfully subscribed to Spartan AI updates.";

      return successResponse(
        { message, subscriber },
        201,
        applySecurityHeaders(rateHeaders)
      );
    } catch (error) {
      return errorResponse(error);
    }
  },
};
