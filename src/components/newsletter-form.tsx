"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Subscription failed");
      setStatus("success");
      setMessage("You are subscribed. Useful posts only, no spam.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6" noValidate>
      <label htmlFor="newsletter-email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-white">
        Get new insights
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {status === "loading" ? "…" : <ArrowRight className="h-4 w-4" />}
          <span className="sr-only">Subscribe</span>
        </button>
      </div>
      {message ? (
        <p
          role="status"
          className={`mt-2 text-xs ${status === "success" ? "text-brand-300" : "text-red-300"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
