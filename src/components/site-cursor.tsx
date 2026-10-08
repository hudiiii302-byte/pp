"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, summary, label, [data-cursor='hover']";

export function SiteCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0, has: false });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !motion.matches);
    update();
    fine.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let frame = 0;
    const tick = () => {
      const p = pos.current;
      if (p.has) {
        p.rx += (p.x - p.rx) * 0.18;
        p.ry += (p.y - p.ry) * 0.18;
        dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${p.rx}px, ${p.ry}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      if (!pos.current.has) {
        pos.current.rx = event.clientX;
        pos.current.ry = event.clientY;
        pos.current.has = true;
      }
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      ring.classList.toggle("is-hot", Boolean(target.closest(HOVER_SELECTOR)));
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="site-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="site-cursor-ring" aria-hidden="true" />
    </>
  );
}
