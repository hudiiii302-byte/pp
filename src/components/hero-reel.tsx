"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { HeroSlide } from "@/lib/hero-reel";
import { ArrowRight } from "@/components/icons";

/**
 * The hero's product reel.
 *
 * Behaviour rules this component is held to:
 *  - `prefers-reduced-motion` → no auto-advance at all. The reel freezes on the
 *    team photo and the dots become a manual control. Nothing moves on its own.
 *  - Auto-advance pauses on hover AND on focus-within, so a keyboard user can
 *    never have a link move out from under them.
 *  - It also pauses while the hero is scrolled out of view or the tab is in the
 *    background — no timers burning battery for something nobody is looking at.
 *  - Inactive slides are `aria-hidden` and their links leave the tab order, so
 *    screen-reader and keyboard users only meet the slide that is on screen.
 *    The links stay in the DOM, so they remain real internal links for crawlers.
 *  - Graceful degradation: the hero is the most valuable slot on the site, so a
 *    product screenshot that fails to load removes *its own slide* from the
 *    rotation rather than showing an empty frame. If every screenshot failed,
 *    the reel collapses to the single team photo — exactly the hero we had
 *    before — with no dots and no motion.
 */

const INTERVAL_MS = 4500;

export function HeroReel({ slides }: { slides: HeroSlide[] }) {
  const [activeId, setActiveId] = useState(slides[0]?.id ?? "");
  const [hovered, setHovered] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const rootRef = useRef<HTMLDivElement | null>(null);

  const markFailed = useCallback((id: string) => {
    setFailed((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  }, []);

  /* The team photo is local and always usable; a product slide drops out of
     the reel if its screenshot could not be fetched. */
  const usable = useMemo(
    () => slides.filter((slide) => slide.local || !failed[slide.id]),
    [slides, failed],
  );
  const usableKey = usable.map((slide) => slide.id).join(",");

  /* Reduced motion is read live, not once: users can flip the OS setting. */
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const sync = () => setTabVisible(document.visibilityState === "visible");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* If the slide we are showing just dropped out of the reel, fall back to the
     team photo. Derived during render — no state sync, no cascading render. */
  const effectiveId = usable.some((slide) => slide.id === activeId)
    ? activeId
    : (usable[0]?.id ?? "");

  const running = !reduced && !hovered && onScreen && tabVisible;

  useEffect(() => {
    if (!running) return;
    const ids = usableKey ? usableKey.split(",") : [];
    if (ids.length < 2) return;
    const timer = window.setTimeout(() => {
      setActiveId((current) => {
        const position = ids.indexOf(current);
        return ids[(position + 1) % ids.length];
      });
    }, INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [running, effectiveId, usableKey]);

  if (slides.length === 0) return null;

  const activeIsTeam = effectiveId === slides[0]?.id;

  return (
    <div
      ref={rootRef}
      className="image-sheen relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-900 sm:rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      aria-roledescription="carousel"
      aria-label="The WordbitX team and the software we have built"
    >
      {slides.map((slide) => {
        const active = slide.id === effectiveId;

        return (
          <div
            key={slide.id}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {/* Branded frame, painted immediately — a slow screenshot never
                leaves a blank rectangle. */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`} />

            {slide.local ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={slide.src}
                alt={slide.alt}
                width={1800}
                height={1125}
                loading="eager"
                fetchPriority="low"
                decoding="async"
                draggable={false}
                onError={() => markFailed(slide.id)}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            )}

            {/* Product slides are screenshots, so they get the same "behind
                glass" treatment as the showcase cards — a diagonal glare and a
                whisper of grain. Without it a flat screenshot dropped into the
                hero reads as a pasted image rather than a product on screen.
                The team photo is a photograph already and is left alone. */}
            {!slide.local ? (
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(107deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_20%,transparent_44%)]"
                />
                <div aria-hidden="true" className="showcase-grain pointer-events-none absolute inset-0" />
              </>
            ) : null}

            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/60" />

            <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3 sm:inset-x-5 sm:top-5">
              <div className="max-w-[16rem] sm:max-w-none">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {slide.eyebrow}
                </p>
                {slide.href ? (
                  <Link
                    href={slide.href}
                    tabIndex={active ? undefined : -1}
                    className="group/slide mt-1 inline-flex items-start gap-1.5 text-sm font-medium leading-snug text-white underline-offset-4 hover:underline"
                  >
                    <span>{slide.title}</span>
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover/slide:translate-x-0.5" />
                  </Link>
                ) : (
                  <p className="mt-1 text-sm font-medium leading-snug text-white">{slide.title}</p>
                )}
              </div>
              {slide.badge ? (
                <span className="hidden shrink-0 rounded-full border border-white/20 bg-navy-950/60 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur sm:inline-flex">
                  {slide.badge}
                </span>
              ) : null}
            </div>
          </div>
        );
      })}

      {usable.length > 1 ? (
        <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-3 sm:inset-x-5 sm:bottom-5">
          <p className="rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.7rem] font-medium text-slate-300 backdrop-blur">
            {activeIsTeam ? "The team" : "Software we built"}
          </p>
          <div className="flex items-center gap-1.5">
            {usable.map((slide) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveId(slide.id)}
                aria-current={slide.id === effectiveId}
                aria-label={
                  slide.local
                    ? "Show the WordbitX team"
                    : `Show ${slide.eyebrow.replace("Our product · ", "")}`
                }
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 ${
                  slide.id === effectiveId ? "w-6 bg-brand-400" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
