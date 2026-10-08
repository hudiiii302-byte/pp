import { drizzle } from "drizzle-orm/node-postgres";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * The database is OPTIONAL.
 *
 * The website must keep working (and the contact form must keep delivering
 * email) on hosts where no PostgreSQL instance is attached — for example a
 * plain Vercel deployment. Importing this module therefore never throws; call
 * sites check `isDatabaseConfigured` before touching `db`.
 */
const databaseUrl = process.env.DATABASE_URL;

export const isDatabaseConfigured = Boolean(databaseUrl && databaseUrl.trim().length > 0);

const globalForDb = globalThis as typeof globalThis & {
  __wordbitxPool?: Pool;
};

function createPool(): Pool | null {
  if (!isDatabaseConfigured) return null;
  if (globalForDb.__wordbitxPool) return globalForDb.__wordbitxPool;

  const created = new Pool({
    connectionString: databaseUrl,
    // Keep the pool small and fail fast so a bad connection string never
    // leaves a serverless request hanging until the platform timeout.
    max: 5,
    connectionTimeoutMillis: 8000,
    idleTimeoutMillis: 30000,
    ...(databaseUrl?.includes("sslmode=require") ? { ssl: { rejectUnauthorized: false } } : {}),
  });

  created.on("error", (error) => {
    console.error("Unexpected PostgreSQL pool error", error);
  });

  globalForDb.__wordbitxPool = created;
  return created;
}

export const pool = createPool();

export const db = (pool ? drizzle(pool) : null) as NodePgDatabase<Record<string, never>>;

/** Returns the Drizzle client, or `null` when no database is configured. */
export function getDb(): NodePgDatabase<Record<string, never>> | null {
  return pool ? db : null;
}
