import { siteConfig } from "@/lib/site";

/**
 * Email delivery for WordBitX enquiries.
 *
 * IMPORTANT: no application can send email without credentials from a mail
 * provider. One of the options below MUST be set as environment variables on
 * the host (e.g. Vercel → Settings → Environment Variables), then redeployed.
 *
 * ── OPTION A — GMAIL (easiest, works on Vercel) ──────────────────────────────
 *   GMAIL_USER=wordbitx@gmail.com
 *   GMAIL_APP_PASSWORD=abcdefghijklmnop      ← 16-char App Password, NOT your
 *                                              normal Gmail password
 *   How to get it: Google Account → Security → turn on 2-Step Verification →
 *   search "App passwords" → create one for "Mail" → copy the 16 characters.
 *
 * ── OPTION B — RESEND (best deliverability) ──────────────────────────────────
 *   RESEND_API_KEY=re_xxxxxxxx
 *   MAIL_FROM="WordBitX Website <onboarding@resend.dev>"
 *
 * ── OPTION C — CUSTOM SMTP (cPanel mailbox) ──────────────────────────────────
 *   SMTP_HOST=mail.wordbitxtech.com
 *   SMTP_PORT=465
 *   SMTP_USER=info@wordbitxtech.com
 *   SMTP_PASS=your-mailbox-password
 *
 * Optional for all: MAIL_TO (defaults to siteConfig.inboxEmail)
 */

export type MailResult = {
  delivered: boolean;
  provider: string;
  error?: string;
  /** FormSubmit is waiting for the one-time "Activate Form" click in the inbox. */
  needsActivation?: boolean;
};

export type EnquiryPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
};

function env(key: string): string | undefined {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

/** Where enquiries land. Defaults to the Gmail inbox, overridable with MAIL_TO. */
export function recipient(): string {
  return env("MAIL_TO") ?? env("GMAIL_USER") ?? siteConfig.inboxEmail;
}

function senderAddress(): string {
  const configured = env("MAIL_FROM");
  if (configured) return configured;
  const gmail = env("GMAIL_USER");
  if (gmail) return `${siteConfig.name} Website <${gmail}>`;
  const smtpUser = env("SMTP_USER");
  if (smtpUser) return `${siteConfig.name} Website <${smtpUser}>`;
  return `${siteConfig.name} Website <onboarding@resend.dev>`;
}

/** Which provider (if any) is configured. Used by /api/health for diagnostics. */
export function emailProviderName(): "gmail" | "resend" | "smtp" | "formsubmit" {
  if (env("GMAIL_USER") && env("GMAIL_APP_PASSWORD")) return "gmail";
  if (env("RESEND_API_KEY")) return "resend";
  if (env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS")) return "smtp";
  // Always-available zero-configuration relay (requires a one-time inbox activation).
  return "formsubmit";
}

/** True when a provider with credentials is configured (FormSubmit needs none). */
export function isEmailConfigured(): boolean {
  return emailProviderName() !== "formsubmit";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(data: EnquiryPayload) {
  const rows: [string, string][] = [
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone || "—"],
    ["Company", data.company || "—"],
    ["Service", data.service],
    ["Budget", data.budget || "—"],
  ];

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Karachi",
    dateStyle: "full",
    timeStyle: "short",
  });

  const text = [
    `New project enquiry from ${siteConfig.domain}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project details:",
    data.message,
    "",
    `Submitted: ${submittedAt} (PKT)`,
    `Reply directly to this email to respond to ${data.fullName}.`,
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#0b1524">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <tr>
      <td style="background:#0d1b34;padding:24px 28px">
        <div style="font-size:20px;font-weight:700;color:#ffffff">Wordbit<span style="color:#1ca830">X</span></div>
        <div style="margin-top:4px;font-size:13px;color:#93a8c6">New project enquiry from ${escapeHtml(siteConfig.domain)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:28px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) => `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#5a6a80;width:170px">${escapeHtml(label)}</td>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-weight:600;color:#0b1524">${escapeHtml(value)}</td>
          </tr>`,
            )
            .join("")}
        </table>
        <div style="margin-top:24px">
          <div style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:#5a6a80;margin-bottom:8px">Project details</div>
          <div style="padding:16px;background:#f8fafc;border-left:4px solid #1ca830;border-radius:8px;font-size:14px;line-height:1.7;white-space:pre-wrap">${escapeHtml(
            data.message,
          )}</div>
        </div>
        <div style="margin-top:24px">
          <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#1ca830;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:600">Reply to ${escapeHtml(
            data.fullName,
          )}</a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#93a1b3">
        Submitted ${escapeHtml(submittedAt)} (PKT) · Reply directly to this email to respond to the sender.
      </td>
    </tr>
  </table>
</body></html>`;

  return { subject: `New enquiry: ${data.service} — ${data.fullName}`, text, html };
}

type SmtpSettings = { host: string; port: number; user: string; pass: string; provider: string };

async function sendViaSmtp(settings: SmtpSettings, data: EnquiryPayload): Promise<MailResult> {
  const { subject, text, html } = buildEmail(data);

  try {
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: settings.host,
      port: settings.port,
      secure: settings.port === 465,
      auth: { user: settings.user, pass: settings.pass },
      connectionTimeout: 12000,
      greetingTimeout: 12000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: senderAddress(),
      to: recipient(),
      replyTo: `${data.fullName} <${data.email}>`,
      subject,
      text,
      html,
    });

    return { delivered: true, provider: settings.provider };
  } catch (error) {
    return {
      delivered: false,
      provider: settings.provider,
      error: error instanceof Error ? error.message : "Unknown SMTP error",
    };
  }
}

async function sendWithGmail(data: EnquiryPayload): Promise<MailResult> {
  const user = env("GMAIL_USER");
  const pass = env("GMAIL_APP_PASSWORD");
  if (!user || !pass) return { delivered: false, provider: "gmail", error: "Gmail not configured" };

  // Gmail App Passwords are shown with spaces; strip them so either form works.
  return sendViaSmtp(
    { host: "smtp.gmail.com", port: 465, user, pass: pass.replace(/\s+/g, ""), provider: "gmail" },
    data,
  );
}

async function sendWithSmtp(data: EnquiryPayload): Promise<MailResult> {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!host || !user || !pass) return { delivered: false, provider: "smtp", error: "SMTP not configured" };

  return sendViaSmtp({ host, port: Number(env("SMTP_PORT") ?? 465), user, pass, provider: "smtp" }, data);
}

async function sendWithResend(data: EnquiryPayload): Promise<MailResult> {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) return { delivered: false, provider: "resend", error: "Resend not configured" };

  const { subject, text, html } = buildEmail(data);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: senderAddress(),
        to: [recipient()],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return { delivered: false, provider: "resend", error: `${response.status} ${detail.slice(0, 300)}` };
    }

    return { delivered: true, provider: "resend" };
  } catch (error) {
    return {
      delivered: false,
      provider: "resend",
      error: error instanceof Error ? error.message : "Unknown Resend error",
    };
  }
}


/**
 * Zero-configuration relay. Requires NO API keys or passwords.
 *
 * The very first submission causes FormSubmit to email the recipient an
 * "Activate Form" link. After that single click, every future enquiry is
 * delivered automatically. This guarantees the contact form works out of the
 * box, even before Gmail/Resend/SMTP credentials are added.
 */
async function sendWithFormSubmit(data: EnquiryPayload): Promise<MailResult> {
  const to = recipient();
  const { text } = buildEmail(data);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteConfig.url,
        Referer: `${siteConfig.url}/contact`,
      },
      body: JSON.stringify({
        _subject: `New enquiry: ${data.service} — ${data.fullName}`,
        _template: "table",
        _captcha: "false",
        Name: data.fullName,
        Email: data.email,
        Phone: data.phone || "—",
        Company: data.company || "—",
        Service: data.service,
        Budget: data.budget || "—",
        Details: data.message,
        Summary: text,
      }),
    });

    const body = (await response.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    const success = body.success === true || body.success === "true";

    if (success) return { delivered: true, provider: "formsubmit" };

    const message = body.message ?? `HTTP ${response.status}`;
    const needsActivation = /activat/i.test(message);

    return {
      delivered: false,
      provider: "formsubmit",
      needsActivation,
      error: message,
    };
  } catch (error) {
    return {
      delivered: false,
      provider: "formsubmit",
      error: error instanceof Error ? error.message : "Unknown FormSubmit error",
    };
  }
}

/**
 * Sends the enquiry using whichever provider is configured, trying each in turn
 * so a single misconfiguration does not lose the lead.
 */
export async function sendEnquiryEmail(data: EnquiryPayload): Promise<MailResult> {
  const attempts: MailResult[] = [];

  if (env("GMAIL_USER") && env("GMAIL_APP_PASSWORD")) {
    const result = await sendWithGmail(data);
    if (result.delivered) return result;
    attempts.push(result);
  }

  if (env("RESEND_API_KEY")) {
    const result = await sendWithResend(data);
    if (result.delivered) return result;
    attempts.push(result);
  }

  if (env("SMTP_HOST")) {
    const result = await sendWithSmtp(data);
    if (result.delivered) return result;
    attempts.push(result);
  }

  // Final fallback that needs no credentials at all.
  const relay = await sendWithFormSubmit(data);
  if (relay.delivered) return relay;
  attempts.push(relay);

  return {
    delivered: false,
    provider: attempts.map((a) => a.provider).join("+"),
    needsActivation: attempts.some((a) => a.needsActivation),
    error: attempts.map((a) => `${a.provider}: ${a.error}`).join(" | "),
  };
}

/** Sends a short notification when someone subscribes to the newsletter. */
export async function sendNewsletterNotification(email: string): Promise<MailResult> {
  return sendEnquiryEmail({
    fullName: "Newsletter subscriber",
    email,
    service: "Newsletter subscription",
    message: `New newsletter subscription from ${email} on ${siteConfig.domain}.`,
  });
}
