"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/back-to-top";

/**
 * The AI assistant and the custom cursor are nice-to-haves, not content. Both
 * used to ship in the first JavaScript payload of every page (the assistant
 * alone pulls in a large intent/answer dictionary), which delayed hydration and
 * hurt INP on slower phones.
 *
 * They are now code-split and only loaded once the browser is idle or the
 * visitor interacts — so the first paint, LCP and Total Blocking Time are not
 * paying for them.
 */

const AiChatWidget = dynamic(() => import("@/components/ai-chat-widget").then((m) => m.AiChatWidget), {
  ssr: false,
});

const SiteCursor = dynamic(() => import("@/components/site-cursor").then((m) => m.SiteCursor), {
  ssr: false,
});

const INTERACTIONS = ["pointerdown", "keydown", "touchstart", "scroll", "pointermove"] as const;

function useDeferredMount(idleTimeout = 2500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let cancelled = false;
    const activate = () => {
      if (!cancelled) setReady(true);
    };

    for (const event of INTERACTIONS) {
      window.addEventListener(event, activate, { once: true, passive: true });
    }

    const supportsIdle = typeof window.requestIdleCallback === "function";
    const handle = supportsIdle
      ? window.requestIdleCallback(activate, { timeout: idleTimeout })
      : window.setTimeout(activate, idleTimeout);

    return () => {
      cancelled = true;
      for (const event of INTERACTIONS) window.removeEventListener(event, activate);
      if (supportsIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, [ready, idleTimeout]);

  return ready;
}

export function DeferredWidgets() {
  const ready = useDeferredMount();
  if (!ready) return null;

  return (
    <>
      <SiteCursor />
      <AiChatWidget />
      <BackToTop />
    </>
  );
}
