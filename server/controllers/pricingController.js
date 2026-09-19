import { pricingService } from "../services/pricingService.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { checkRateLimit } from "../middleware/rateLimiter.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

export const pricingController = {
  async getPlans(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 100, windowMs: 60000, prefix: "pricing" });
      const plans = pricingService.getPlans();

      return successResponse(
        { plans },
        200,
        applySecurityHeaders({
          ...rateHeaders,
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        })
      );
    } catch (error) {
      return errorResponse(error);
    }
  },
};
