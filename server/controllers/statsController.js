import { metricsService } from "../services/metricsService.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { checkRateLimit } from "../middleware/rateLimiter.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

export const statsController = {
  async getStats(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 60, windowMs: 60000, prefix: "stats" });
      const stats = metricsService.getStats();

      return successResponse(
        { stats },
        200,
        applySecurityHeaders({
          ...rateHeaders,
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        })
      );
    } catch (error) {
      return errorResponse(error);
    }
  },
};
