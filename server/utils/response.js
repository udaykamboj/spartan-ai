import { NextResponse } from "next/server";
import { AppError } from "../errors/AppError.js";
import { logger } from "./logger.js";

/**
 * Standard API success response envelope:
 * {
 *   success: true,
 *   data: ...,
 *   meta: { timestamp, requestId, ... }
 * }
 */
export function successResponse(data, status = 200, headers = {}, meta = {}) {
  return NextResponse.json(
    {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    },
    { status, headers }
  );
}

/**
 * Standard API error response envelope:
 * {
 *   success: false,
 *   error: { code, message, details? },
 *   meta: { timestamp, requestId, ... }
 * }
 */
export function errorResponse(error, customStatus = null, headers = {}, meta = {}) {
  const isAppError = error instanceof AppError;
  const statusCode = customStatus || (isAppError ? error.statusCode : 500);

  if (!isAppError) {
    logger.error("Unhandled Internal Server Error", error);
  }

  const responseBody = {
    success: false,
    error: {
      code: isAppError ? error.code : "INTERNAL_SERVER_ERROR",
      message: isAppError ? error.message : "An unexpected server error occurred.",
      ...(isAppError && error.details ? { details: error.details } : {}),
    },
    meta: {
      timestamp: new Date().toISOString(),
      ...meta,
    },
  };

  return NextResponse.json(responseBody, { status: statusCode, headers });
}
