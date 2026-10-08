import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { industries } from "@/lib/industries";

/**
 * Sector rail — the first thing under the hero.
 *
 * Why it exists: "do you understand *my* business?" is the question every
 * visitor arrives with, and the block that answers it properly (the thirteen
 * industry tiles under "Workflows we have already modelled") sits at screen
 * 11 of a 23-screen page. Even after moving that section up, a buyer who
 * does not see their sector in the first few seconds has no reason to keep
 * scrolling to find it.
 *
 * So the *signal* moves to the top while the *section* stays in the funnel.
 * One scannable line of thirteen sector names, each a real link to its own
 * industry page, placed where it costs nothing: the hero is already dark, so
 * this rail is dark too and reads as the hero's base rather than as a new
 * section. No images, no cards, roughly one line of text.
 *
 * Secondary benefit: the thirteen industry pages are among the highest
 * commercial-intent URLs on the site, and until now their only home-page
 * links were ~10,000px down the document. They are now a few hundred pixels
 * from the top of the DOM.
 *
 * Layout: a free horizontal scroller on phones, with a right-edge fade so it
 * is obviously scrollable, and a wrapping row from `sm` up. Deliberately no
 * scroll-snap: mandatory snapping on a row of small pills re-aligns the
 * first chip to the container edge on load and eats the rail's left padding,
 * so the first chip renders flush against the screen edge with its border
 * clipped.
 */
export function IndustryStrip() {
  return (
    <nav
      aria-label="Industries we build software for"
      className="relative isolate overflow-hidden border-t border-white/[0.07] bg-navy-950 py-4 text-white sm:py-5"
    >
      <span aria-hidden="true" className="absolute inset-0 grid-pattern opacity-40" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
            Built for
          </p>

          {/* The scroller is its own positioning context so the mobile edge
              fade can sit outside it — a fade placed inside would scroll
              away with the chips. */}
          <div className="relative min-w-0 flex-1">
            <ul className="industry-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[0.78rem] font-medium text-slate-300 transition-colors duration-200 hover:border-brand-400/60 hover:bg-brand-500/12 hover:text-white focus-visible:border-brand-400 focus-visible:text-white"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li className="pr-4 sm:pr-0">
                <Link
                  href="/industries"
                  className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-brand-400/40 bg-brand-500/12 px-3 py-1.5 text-[0.78rem] font-semibold text-brand-200 transition-colors duration-200 hover:bg-brand-500/20 hover:text-white"
                >
                  All {industries.length}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -right-4 z-10 w-14 bg-gradient-to-l from-navy-950 via-navy-950/80 to-transparent sm:hidden"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
