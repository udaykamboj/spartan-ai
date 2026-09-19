/**
 * Production-ready structured logger.
 * Emits JSON in production and readable formatting in development.
 */
const isProd = process.env.NODE_ENV === "production";

export const logger = {
  info(message, context = {}) {
    this.log("INFO", message, context);
  },
  warn(message, context = {}) {
    this.log("WARN", message, context);
  },
  error(message, error = null, context = {}) {
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: isProd ? undefined : error.stack,
    } : error;

    this.log("ERROR", message, { ...context, error: errorDetails });
  },
  debug(message, context = {}) {
    if (!isProd) {
      this.log("DEBUG", message, context);
    }
  },
  log(level, message, context = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...context,
    };

    if (isProd) {
      console.log(JSON.stringify(entry));
    } else {
      const color =
        level === "ERROR"
          ? "\x1b[31m"
          : level === "WARN"
            ? "\x1b[33m"
            : level === "DEBUG"
              ? "\x1b[36m"
              : "\x1b[32m";
      console.log(`${color}[${entry.timestamp}] [${level}]\x1b[0m ${message}`, Object.keys(context).length ? context : "");
    }
  },
};
