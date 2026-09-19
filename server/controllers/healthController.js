import { healthService } from "../services/healthService.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

export const healthController = {
  async getHealth() {
    try {
      const health = healthService.check();
      const statusCode = health.status === "healthy" ? 200 : 503;

      return successResponse(
        health,
        statusCode,
        applySecurityHeaders({ "Cache-Control": "no-store, max-age=0" })
      );
    } catch (error) {
      return errorResponse(error, 500);
    }
  },
};
