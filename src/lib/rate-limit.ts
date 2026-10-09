/**
 * Small in-memory fixed-window rate limiter.
 *
 * Good enough to stop a single script from flooding the homepage reviews
 * list. It is per server instance, so on serverless hosts the counter can
 * reset on cold starts — it is a speed bump, not a security boundary.
 */
type Bucket = { count: number; resetAt: number };

const globalForRate = globalThis as typeof globalThis & { __wordbitxRate?: Map<string, Bucket> };

function buckets(): Map<string, Bucket> {
  if (!globalForRate.__wordbitxRate) globalForRate.__wordbitxRate = new Map();
  return globalForRate.__wordbitxRate;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const first = forwarded.split(",")[0]?.trim();
  return first || request.headers.get("x-real-ip") || "unknown";
}

export function checkRateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const map = buckets();

  // Drop expired buckets so the map cannot grow without bound.
  if (map.size > 5000) {
    for (const [mapKey, bucket] of map) if (bucket.resetAt <= now) map.delete(mapKey);
  }

  const current = map.get(key);
  if (!current || current.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSec: 0 };
  }
  if (current.count >= limit) {
    return { ok: false, retryAfterSec: Math.ceil((current.resetAt - now) / 1000) };
  }
  current.count += 1;
  return { ok: true, retryAfterSec: 0 };
}
