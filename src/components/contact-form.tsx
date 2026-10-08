"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon, WhatsAppIcon, MailIcon } from "@/components/icons";
import { budgetOptions, siteConfig, whatsappLink } from "@/lib/site";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm({
  serviceOptions,
  defaultService,
  defaultMessage,
}: {
  serviceOptions: string[];
  defaultService?: string;
  defaultMessage?: string;
}) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    service: defaultService ?? "",
    message: defaultMessage ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "handoff" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  function validate(state: FormState): Errors {
    const next: Errors = {};
    if (state.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email.trim())) next.email = "Please enter a valid email address.";
    if (state.phone.trim().length > 0 && state.phone.trim().length < 7)
      next.phone = "Please enter a valid phone or WhatsApp number.";
    if (!state.service) next.service = "Please choose the service you are interested in.";
    if (state.message.trim().length < 20) next.message = "Please describe your project in at least 20 characters.";
    return next;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setServerMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const form = event.currentTarget;
      const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
        errors?: Errors;
      };
      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message ?? "We could not submit your enquiry.");
      }
      setSubmitted(values);
      setStatus(data.delivered ? "success" : "handoff");
      setValues({ ...initialState, service: defaultService ?? "" });
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  function resetForm() {
    setSubmitted(null);
    setStatus("idle");
  }

  function briefText(data: FormState) {
    return [
      "New project enquiry",
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : "",
      data.company ? `Company: ${data.company}` : "",
      `Service: ${data.service}`,
      data.budget ? `Budget: ${data.budget}` : "",
      "",
      "Project details:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (status === "handoff" && submitted) {
    const brief = briefText(submitted);
    const mailHref = `mailto:${siteConfig.inboxEmail}?subject=${encodeURIComponent(
      `New enquiry: ${submitted.service} — ${submitted.fullName}`,
    )}&body=${encodeURIComponent(brief)}`;

    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-6 sm:p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">Your brief is ready — one tap to send it</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-700">
          We have prepared your enquiry with all the details you entered. Choose how you would like to send it and we
          will reply within one business day.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappLink(brief)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" /> Send on WhatsApp
          </a>
          <a
            href={mailHref}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <MailIcon className="h-4.5 w-4.5" /> Send by Email
          </a>
        </div>

        <details className="mt-6 rounded-xl border border-brand-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-medium text-ink-900">
            Prefer to copy it manually? View your brief
          </summary>
          <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words text-xs leading-relaxed text-ink-700">
            {brief}
          </pre>
          <p className="mt-3 text-xs text-ink-500">
            Or email it directly to{" "}
            <a href={`mailto:${siteConfig.inboxEmail}`} className="font-medium text-brand-600 hover:text-brand-700">
              {siteConfig.inboxEmail}
            </a>{" "}
            · {siteConfig.phoneDisplay}
          </p>
        </details>

        <button
          type="button"
          onClick={resetForm}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-500"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">Thank you — your enquiry is with us</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-700">
          We have recorded your project details and a member of the WordbitX team will reply, usually within one business
          day. For anything urgent, message us on WhatsApp at +92 325 1888841.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-500"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const options =
    defaultService && !serviceOptions.includes(defaultService)
      ? [defaultService, ...serviceOptions]
      : serviceOptions;

  const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none";

  const fieldBorder = (key: keyof FormState) =>
    errors[key] ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-brand-400";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from users, filled only by spam bots. */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website-hp">Do not fill this field</label>
        <input id="website-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-ink-900">
            Full Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`${inputClass} ${fieldBorder("fullName")}`}
            placeholder="Your name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-900">
            Email Address <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputClass} ${fieldBorder("email")}`}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink-900">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={`${inputClass} ${fieldBorder("phone")}`}
            placeholder="+92 300 0000000"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink-900">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className={`${inputClass} ${fieldBorder("company")}`}
            placeholder="Your business"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink-900">
            Service Interested In <span className="text-brand-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            className={`${inputClass} ${fieldBorder("service")}`}
          >
            <option value="">Select a service</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-ink-900">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={`${inputClass} ${fieldBorder("budget")}`}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-900">
          Project Details <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} ${fieldBorder("message")} resize-y`}
          placeholder="What are you building, who is it for, and what does success look like? Timelines and existing systems are helpful too."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && serverMessage ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(28,168,48,0.85)] transition-all hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Submit Inquiry"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-xs text-ink-500">
          We reply within one business day. Your details stay confidential and are never sold.
        </p>
      </div>
    </form>
  );
}
