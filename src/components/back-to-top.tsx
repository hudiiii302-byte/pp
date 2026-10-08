"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/icons";

/**
 * Floating "back to top" control.
 *
 * The home page runs to roughly nine screens, and before this the only way
 * back up was to scroll the whole way or click the logo — which did nothing at
 * all until the same-route scroll bug was fixed.
 *
 * Positioning: the AI chat launcher already owns the bottom-right corner at
 * `right-4`, `bottom-[max(1rem,…)]`, 3.5rem square, z-70. This sits directly
 * above it — same right edge, offset by the launcher's height plus a gap — and
 * is deliberately smaller and quieter, because the chat button is a call to
 * action and this is only a convenience. z-60 keeps it under the launcher so
 * an open chat panel always wins.
 *
 * It appears after one and a half viewports rather than a fixed pixel count,
 * so on a short screen it does not hover over content the visitor can still
 * see, and on a tall one it does not appear before scrolling means anything.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    function evaluate() {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight * 1.5);
    }

    function onScroll() {
      // Coalesce scroll events into one read per frame; this listener runs on
      // every page, so it must stay off the main thread's critical path.
      if (frame) return;
      frame = window.requestAnimationFrame(evaluate);
    }

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function toTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Back to top"
      title="Back to top"
      className={`group fixed right-4 bottom-[max(5.25rem,calc(env(safe-area-inset-bottom)+5rem))] z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-navy-900/90 text-slate-200 shadow-[0_18px_35px_-18px_rgba(5,13,33,0.9)] backdrop-blur-sm transition-all duration-300 hover:border-brand-400/60 hover:text-brand-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {/* The arrow icon only points right, so rotate it a quarter turn up. */}
      <ArrowRight className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
