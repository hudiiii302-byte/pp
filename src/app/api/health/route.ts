import { db, isDatabaseConfigured } from "@/db";
import { emailProviderName, isEmailConfigured, recipient } from "@/lib/mailer";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Health and configuration diagnostics.
 * Open /api/health to confirm where enquiry emails are being delivered.
 */
export async function GET() {
  const provider = emailProviderName();
  const usingFallback = provider === "formsubmit";

  const email = {
    ok: true,
    provider,
    deliversTo: recipient(),
    credentialsConfigured: isEmailConfigured(),
    note: usingFallback
      ? `Using the zero-setup FormSubmit relay. The first enquiry sends an "Activate Form" email to ${recipient()} — click that link once and all future enquiries arrive automatically.`
      : `Enquiries are emailed directly via ${provider}.`,
    upgradeHint: usingFallback
      ? "For direct delivery without activation, set GMAIL_USER + GMAIL_APP_PASSWORD (or RESEND_API_KEY, or SMTP_*) and redeploy."
      : undefined,
  };

  if (!isDatabaseConfigured || !db) {
    return Response.json({ ok: true, database: "not-configured", email });
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, database: "connected", email });
  } catch {
    return Response.json({ ok: false, database: "error", email }, { status: 500 });
  }
}
