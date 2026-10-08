"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";
import { ChevronDown } from "@/components/icons";

export function FaqAccordion({ faqs, tone = "light" }: { faqs: Faq[]; tone?: "light" | "dark" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              tone === "dark"
                ? `border-white/10 ${isOpen ? "bg-white/[0.06]" : "bg-white/[0.03]"}`
                : `border-slate-200 ${isOpen ? "bg-slate-50" : "bg-white"}`
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={`text-base font-medium ${tone === "dark" ? "text-white" : "text-ink-900"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${
                    tone === "dark" ? "text-brand-300" : "text-brand-600"
                  }`}
                />
              </button>
            </h3>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className={`px-5 pb-5 text-sm leading-relaxed ${tone === "dark" ? "text-slate-300" : "text-ink-500"}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
