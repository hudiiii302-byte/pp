"use client";

import { useEffect, useState } from "react";
import { MailIcon, CheckIcon } from "@/components/icons";

/**
 * A `mailto:` link only does something when the visitor's device has a mail
 * client registered. On a desktop browser without one — which is most of them
 * now that people live in webmail — clicking it silently does nothing, and the
 * visitor concludes the contact details are broken.
 *
 * So the address is always shown as text and can always be copied, with the
 * mailto kept for the people whose machines do handle it. Nobody leaves the
 * page unable to reach us.
 */
export function CopyEmail({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard is unavailable over plain HTTP and in some locked-down
      // browsers. The address is visible as text either way, so the visitor
      // can still select it by hand.
      setCopied(false);
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 ${className}`}
    >
      <a
        href={`mailto:${email}`}
        className="flex min-w-0 items-center gap-2 text-xs font-medium text-ink-700 transition-colors hover:text-brand-700"
      >
        <MailIcon className="h-3.5 w-3.5 shrink-0 text-brand-600" />
        <span className="truncate">{email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : `Copy ${email} to clipboard`}
        className="shrink-0 rounded-lg px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-400 transition-colors hover:bg-slate-100 hover:text-brand-700"
      >
        {copied ? (
          <span className="flex items-center gap-1 text-brand-700">
            <CheckIcon className="h-3 w-3" /> Copied
          </span>
        ) : (
          "Copy"
        )}
      </button>
    </div>
  );
}
