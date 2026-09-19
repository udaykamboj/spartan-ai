import { getDb } from "../db/connection.js";

export const healthService = {
  check() {
    const startTime = performance.now();
    let dbStatus = "unknown";
    let dbLatencyMs = 0;

    try {
      const db = getDb();
      const row = db.prepare("SELECT 1 as ping").get();
      dbLatencyMs = Math.round((performance.now() - startTime) * 100) / 100;
      dbStatus = row?.ping === 1 ? "connected" : "degraded";
    } catch {
      dbStatus = "disconnected";
    }

    const memoryUsage = process.memoryUsage();

    return {
      status: dbStatus === "connected" ? "healthy" : "unhealthy",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      database: {
        status: dbStatus,
        latencyMs: dbLatencyMs,
      },
      system: {
        heapUsedMb: Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100,
        rssMb: Math.round((memoryUsage.rss / 1024 / 1024) * 100) / 100,
        environment: process.env.NODE_ENV || "development",
        nodeVersion: process.version,
      },
    };
  },
};
