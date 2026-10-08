"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, GlobeIcon, ServiceIcon } from "@/components/icons";
import type { DemoWebsite } from "@/lib/demos";
import { showcaseRel } from "@/lib/demos";

/**
 * A live, framed embed of a WordbitX website — no fabricated screenshot.
 *
 * Performance: the <iframe> is only mounted once the frame scrolls close to the
 * viewport. Embedding a whole third-party page eagerly costs hundreds of
 * kilobytes and blocks the main thread on a page the visitor may never reach,
 * so we defer it behind an IntersectionObserver and keep an instant branded
 * placeholder in the markup.
 */
export function DemoLaptop({ demo }: { demo: DemoWebsite }) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const isLive = demo.kind === "live";
  const rel = showcaseRel(demo.url);

  useEffect(() => {
    const node = holderRef.current;
    if (!node || mount) return;

    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(() => setMount(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mount]);

  return (
    <section className="defer-paint relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-brand-500/15 blur-[110px]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {isLive ? `${demo.name} — Live Project` : "WordbitX Live Demo"}
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] text-white sm:text-4xl">
              {isLive
                ? `${demo.name}: a working ${demo.category.toLowerCase()} platform, live right now`
                : `See a working ${demo.category.toLowerCase()} website in motion`}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {isLive
                ? `${demo.name} is a real, publicly available product designed, built and maintained by WordbitX. What you see in the frame is the production site — layout, search and listing flows included.`
                : "This is a live WordbitX demo, displayed inside a portfolio laptop frame. It demonstrates design direction, responsive layout and browser-ready delivery for this industry — it is not presented as a client case study."}
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-400/12 text-brand-300">
                  <ServiceIcon name="web" className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">Designed &amp; developed by WordbitX</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                    Explore the site, then{" "}
                    <a href="/contact" className="text-brand-300 underline underline-offset-4">
                      talk to us
                    </a>{" "}
                    about a custom build of your own.
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={demo.url}
                target="_blank"
                rel={rel}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(28,168,48,0.85)] transition-all hover:-translate-y-0.5 hover:bg-brand-600"
              >
                {isLive ? `Visit ${demo.host}` : "View Live Demo"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/60"
              >
                <GlobeIcon className="h-4 w-4 text-brand-300" /> Get a build like this
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-[1.75rem] border border-slate-500/50 bg-[#111827] p-2 shadow-[0_45px_100px_-38px_rgba(0,0,0,0.95)]">
              <div className="rounded-[1.25rem] border border-white/10 bg-[#030814] p-2">
                <div className="flex items-center gap-2 rounded-t-xl border-b border-white/10 bg-white/[0.04] px-3 py-2">
                  <span className="flex gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <i className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <i className="h-2.5 w-2.5 rounded-full bg-brand-400/80" />
                  </span>
                  <span className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/[0.07] px-2.5 py-1 text-[0.65rem] text-slate-400">
                    <GlobeIcon className="h-3 w-3 shrink-0" /> <span className="truncate">{demo.host}</span>
                  </span>
                  <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.12em] text-brand-300 sm:block">
                    Live website
                  </span>
                </div>

                <div ref={holderRef} className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-navy-900">
                  {mount && !blocked && (
                    <div className="demo-laptop-scroll absolute inset-0 origin-top-left">
                      <iframe
                        src={demo.url}
                        title={`${demo.name} — live ${demo.category} website by WordbitX`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        onLoad={() => setLoaded(true)}
                        onError={() => setBlocked(true)}
                        className="pointer-events-auto h-[980px] w-[1600px] origin-top-left scale-[0.475] border-0 bg-white [@media(max-width:640px)]:scale-[0.285]"
                      />
                    </div>
                  )}

                  {!loaded && !blocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900 text-center">
                      <span className="h-7 w-7 animate-spin rounded-full border-2 border-brand-400/25 border-t-brand-400" />
                      <span className="mt-3 text-xs text-slate-400">
                        {mount ? "Loading live website…" : "Scroll to load the live website"}
                      </span>
                    </div>
                  )}

                  {blocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900 p-6 text-center">
                      <GlobeIcon className="h-8 w-8 text-brand-300" />
                      <p className="mt-3 text-sm font-semibold text-white">Open this website in a new tab</p>
                      <p className="mt-1 text-xs text-slate-400">This browser does not allow the site in a frame.</p>
                      <a
                        href={demo.url}
                        target="_blank"
                        rel={rel}
                        className="mt-4 text-sm font-semibold text-brand-300 underline underline-offset-4"
                      >
                        Open {demo.host} ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="mx-auto mt-2 h-2.5 w-1/3 rounded-b-full bg-slate-600/80" />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">Hover over the screen to pause the showcase scroll.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
