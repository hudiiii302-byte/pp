import { db, isDatabaseConfigured } from "@/db";
import { inquiries } from "@/db/schema";
import { sendEnquiryEmail, isEmailConfigured } from "@/lib/mailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  /** Honeypot — real users never fill this. */
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  // Silently accept spam bots so they do not retry.
  if (body.website && body.website.trim().length > 0) {
    return Response.json({ ok: true, delivered: true, message: "Thank you — your enquiry has been received." });
  }

  const fullName = (body.fullName ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const phone = (body.phone ?? "").trim();
  const company = (body.company ?? "").trim();
  const service = (body.service ?? "").trim();
  const budget = (body.budget ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (phone.length > 0 && phone.length < 7) errors.phone = "Please enter a valid phone or WhatsApp number.";
  if (service.length < 2) errors.service = "Please choose the service you are interested in.";
  if (message.length < 20) errors.message = "Please describe your project in at least 20 characters.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const payload = {
    fullName: fullName.slice(0, 160),
    email: email.slice(0, 200),
    phone: phone.slice(0, 60),
    company: company.slice(0, 160),
    service: service.slice(0, 120),
    budget: budget.slice(0, 80),
    message: message.slice(0, 5000),
  };

  // 1. Try to deliver the enquiry to the WordBitX inbox.
  const mail = await sendEnquiryEmail(payload);
  if (!mail.delivered && mail.provider !== "none") {
    console.error(`Enquiry email failed via ${mail.provider}: ${mail.error}`);
  }

  // 2. Store a copy when a database is attached. Never let this break delivery.
  let stored = false;
  if (isDatabaseConfigured && db) {
    try {
      await db.insert(inquiries).values({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone || null,
        company: payload.company || null,
        service: payload.service,
        budget: payload.budget || null,
        message: payload.message,
        source: "website-contact-form",
      });
      stored = true;
    } catch (error) {
      console.error("Failed to store contact inquiry", error);
    }
  }

  // 3. Always log so the enquiry is recoverable from server logs.
  if (!mail.delivered) {
    if (mail.needsActivation) {
      console.warn(
        `ACTION REQUIRED: FormSubmit has emailed an "Activate Form" link. Open the inbox and click it once — every future enquiry will then be delivered automatically.`,
      );
    }
    console.warn(
      "ENQUIRY NOT EMAILED:",
      JSON.stringify({ ...payload, emailConfigured: isEmailConfigured(), reason: mail.error }),
    );
  }

  // The submission always succeeds for the visitor. When automatic email is not
  // available the client shows one-tap WhatsApp / email handoff instead of an
  // error, so a lead is never lost because of missing configuration.
  return Response.json({
    ok: true,
    delivered: mail.delivered,
    stored,
    needsActivation: mail.needsActivation ?? false,
    message: mail.delivered
      ? "Thank you — your enquiry has been received."
      : "Almost done — send it to us with one tap.",
  });
}
