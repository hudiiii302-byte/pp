import Link from "next/link";
import { ServiceLineIcon } from "@/components/service-line-icon";
import { ArrowRight } from "@/components/icons";
import { homeServiceGroups, homeServiceLinks } from "@/lib/home-service-links";
import { demoCount, liveProjectCount } from "@/lib/demos";
import { markets } from "@/lib/markets";
import { services } from "@/lib/services";

/**
 * Three ways to present the same sixteen service links under the services
 * grid, as replacements for the rotating ring.
 *
 * All three exist because the ring had one structural problem no amount of
 * polish fixed: it is a circle of moving targets whose labels only fit on a
 * wide screen, sitting directly beneath an eight-card grid. Each component
 * below keeps the sixteen real <a href> links — that link block is the SEO
 * value of this slot and must survive whichever layout wins — and differs
 * only in how they are arranged.
 *
 *   ServiceHive   static honeycomb, keeps a distinct silhouette
 *   ServiceIndex  four labelled columns, reads like a directory
 *   ServiceCloud  one centred cluster of pills, full names visible
 */

/** Shared line under any of the three layouts. */
export function ServiceNavFootnote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-slate-500 ${className}`}>
      Sixteen of our {services.length} service lines · {markets.length} markets · {liveProjectCount} live product ·{" "}
      {demoCount} demos you can open. Every tile opens the real service page.
    </p>
  );
}

/* ------------------------------------------------------------------ *
 * Option A — honeycomb
 * ------------------------------------------------------------------ */

/**
 * Rows of 5 / 6 / 5. Every cell is exactly one sixth of the container, so a
 * five-cell row is 83.3% wide and centres itself half a cell off the six-cell
 * row — that offset is what makes the tiles interlock instead of stacking.
 *
 * The cell is 1/6 wide with aspect-ratio 0.866 (a pointy-top hexagon is
 * 2/sqrt(3) taller than it is wide), so one row is 0.1925 x container width
 * and the rows overlap by a quarter of that: -4.8%. Keeping every number
 * proportional means the hive scales from 320px to 1024px with no breakpoints
 * in the geometry — only the labels are gated, because below `sm` a cell is
 * ~55px wide and no label fits.
 */
export function ServiceHive() {
  const rows = [homeServiceLinks.slice(0, 5), homeServiceLinks.slice(5, 11), homeServiceLinks.slice(11, 16)];

  return (
    <div className="mx-auto w-full max-w-[min(58rem,calc(100vw-2rem))]">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex justify-center ${rowIndex > 0 ? "-mt-[4.8%]" : ""}`}>
          {row.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              title={item.label}
              aria-label={item.label}
              className="hex-cell group relative block aspect-[0.866] w-1/6 shrink-0"
            >
              {/* Three stacked layers. The halo is deliberately NOT clipped,
                  so it bleeds into the gutters between tiles instead of being
                  cropped to the hexagon; that is what carries the emerald on
                  hover now that the tile itself no longer floods green. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[8%] rounded-full bg-brand-400/0 blur-xl transition-colors duration-300 group-hover:bg-brand-400/45 group-focus-visible:bg-brand-400/45"
              />
              {/* Rim and fill are two stacked hexagons rather than a border,
                  because a clip-path crops the border away. */}
              <span
                aria-hidden="true"
                className="hex-clip absolute inset-[3.6%] bg-gradient-to-b from-white/20 to-white/[0.06] transition-colors duration-300 group-hover:from-brand-300 group-hover:to-brand-500 group-focus-visible:from-brand-300 group-focus-visible:to-brand-500"
              />
              {/* The fill stays dark on hover. The icons carry their official
                  brand colours — Shopify green, React cyan, Figma orange — and
                  those only survive against a dark surface. */}
              <span
                aria-hidden="true"
                className="hex-clip absolute inset-[4.8%] bg-gradient-to-b from-navy-800 to-navy-950 transition-all duration-300 group-hover:from-navy-700 group-hover:to-navy-900 group-focus-visible:from-navy-700 group-focus-visible:to-navy-900"
              />
              <span className="absolute inset-[4.8%] flex flex-col items-center justify-center gap-1 px-[13%] text-center">
                <ServiceLineIcon
                  slug={item.slug}
                  className="h-4 w-4 text-brand-200 transition-colors duration-300 group-hover:text-brand-100 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                />
                <span className="hidden text-[0.5rem] font-medium leading-tight text-slate-400 transition-colors duration-300 group-hover:text-white sm:block lg:text-[0.68rem]">
                  {item.short}
                </span>
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Option B — four-column index
 * ------------------------------------------------------------------ */

/**
 * The same sixteen links as a directory: four buyer-shaped groups, full
 * service names, no decoration that has to be decoded. Nothing here moves,
 * nothing is cropped, and it reads top-to-bottom on a phone.
 */
export function ServiceIndex() {
  return (
    <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
      {homeServiceGroups.map((group) => (
        <div key={group.title}>
          <div className="border-t border-brand-400/45 pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">{group.title}</h4>
            <p className="mt-1 text-xs text-slate-500">{group.blurb}</p>
          </div>
          <ul className="mt-3">
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group -mx-3 flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.05]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/12 text-brand-300 ring-1 ring-brand-400/20 transition-colors duration-300 group-hover:bg-brand-500/25 group-hover:ring-brand-400/50">
                    <ServiceLineIcon slug={item.slug} className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium leading-snug text-slate-300 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  <ArrowRight className="mt-2 h-3.5 w-3.5 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Option C — pill cluster
 * ------------------------------------------------------------------ */

/**
 * One centred cluster. This is the only one of the three that shows all
 * sixteen full names at every width, because a pill wraps instead of being
 * boxed into a column or a tile.
 */
export function ServiceCloud() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[38rem] max-w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(28,168,48,0.16),transparent_70%)] blur-2xl"
      />
      <div className="relative flex flex-wrap items-center justify-center gap-2.5">
        {homeServiceLinks.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2 pr-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-white/[0.08] hover:shadow-[0_18px_40px_-24px_rgba(28,168,48,0.8)] focus-visible:-translate-y-0.5 focus-visible:border-brand-400/50"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20 transition-colors duration-300 group-hover:bg-brand-500/25 group-hover:ring-brand-400/50">
              <ServiceLineIcon slug={item.slug} className="h-4 w-4" />
            </span>
            <span className="text-[0.8rem] font-medium text-slate-300 transition-colors group-hover:text-white sm:text-sm">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
