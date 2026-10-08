import { db, isDatabaseConfigured } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { sendNewsletterNotification } from "@/lib/mailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";

  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return Response.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 422 });
  }

  // Notify the WordbitX inbox so subscriptions are visible immediately.
  const notified = await sendNewsletterNotification(email);
  if (!notified.delivered) {
    console.warn(`Newsletter notification not emailed (${notified.provider}): ${notified.error}`);
  }

  let stored = false;
  if (isDatabaseConfigured && db) {
    try {
      await db
        .insert(newsletterSubscribers)
        .values({ email: email.slice(0, 200) })
        .onConflictDoNothing({ target: newsletterSubscribers.email });
      stored = true;
    } catch (error) {
      console.error("Failed to store newsletter subscriber", error);
    }
  }

  console.info(`Newsletter signup: ${email} (emailed: ${notified.delivered}, stored: ${stored})`);

  return Response.json({
    ok: true,
    delivered: notified.delivered,
    stored,
    message: "Subscription confirmed.",
  });
}
