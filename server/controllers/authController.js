import { cookies } from "next/headers";
import { authService } from "../services/authService.js";
import { validateEmail, validatePassword, validateString } from "../validation/schemas.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { checkRateLimit } from "../middleware/rateLimiter.js";
import { applySecurityHeaders } from "../middleware/securityHeaders.js";

const COOKIE_NAME = "spartan_session";
const isProd = process.env.NODE_ENV === "production";

export const authController = {
  async register(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 10, windowMs: 60000, prefix: "auth_reg" });
      const body = await request.json().catch(() => ({}));

      const email = validateEmail(body.email);
      const password = validatePassword(body.password);
      const name = body.name ? validateString(body.name, "Name", 1, 100) : "";

      const { user, session } = await authService.register({ email, password, name });

      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, session.rawToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: session.maxAgeSeconds,
        path: "/",
      });

      return successResponse(
        { message: "Account registered successfully.", user },
        201,
        applySecurityHeaders(rateHeaders)
      );
    } catch (error) {
      return errorResponse(error);
    }
  },

  async login(request) {
    try {
      const rateHeaders = checkRateLimit(request, { maxRequests: 15, windowMs: 60000, prefix: "auth_login" });
      const body = await request.json().catch(() => ({}));

      const email = validateEmail(body.email);
      const password = validateString(body.password, "Password", 1, 200);

      const { user, session } = await authService.login({ email, password });

      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, session.rawToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: session.maxAgeSeconds,
        path: "/",
      });

      return successResponse(
        { message: "Login successful.", user },
        200,
        applySecurityHeaders(rateHeaders)
      );
    } catch (error) {
      return errorResponse(error);
    }
  },

  async logout(request) {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(COOKIE_NAME)?.value;

      if (token) {
        await authService.logout(token);
        cookieStore.delete(COOKIE_NAME);
      }

      return successResponse({ message: "Logged out successfully." }, 200, applySecurityHeaders());
    } catch (error) {
      return errorResponse(error);
    }
  },

  async me(request) {
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get(COOKIE_NAME)?.value;

      if (!token) {
        const authHeader = request.headers.get("authorization");
        if (authHeader?.startsWith("Bearer ")) {
          token = authHeader.slice(7).trim();
        }
      }

      if (!token) {
        return successResponse({ user: null, authenticated: false }, 200, applySecurityHeaders());
      }

      const user = await authService.validateSession(token);
      return successResponse(
        { user, authenticated: Boolean(user) },
        200,
        applySecurityHeaders()
      );
    } catch (error) {
      return errorResponse(error);
    }
  },
};
