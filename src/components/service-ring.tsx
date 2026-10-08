import Link from "next/link";
import type { CSSProperties } from "react";
import { MegaServiceIcon } from "@/components/mega-service-icon";
import { homeServiceLinks } from "@/lib/home-service-links";
import { industries } from "@/lib/industries";
import { markets } from "@/lib/markets";
import { industryTopicSlugs } from "@/lib/related-content";
import { megaMenuGroups, services } from "@/lib/services";
import { demoCount, liveProjectCount } from "@/lib/demos";
import { siteConfig } from "@/lib/site";

/**
 * Sixteen headline services as a rotating ring, each one a real link to its
 * service page. This sits directly under the services grid because it is a
 * navigator, not a trust badge — it used to carry its own "WordbitX is trusted
 * to deliver…" heading, which duplicated the markets section further down.
 *
 * Every slug below is checked against src/lib/services-*.ts — none 404.
 */
const ringServices = homeServiceLinks;

/** The ring on its own, so it can sit in a column beside the team photos. */
export function ServiceRing() {
  return (
    <div>
      <div className="flex justify-center">
        {/* The shell exists so hover/focus anywhere in the ring can pause the
            rotation — see .trust-orbit-shell in globals.css. Without that the
            icons are moving click targets, which is miserable to use. */}
        <div className="trust-orbit-shell relative aspect-square w-full max-w-[min(21rem,calc(100vw-2rem))] sm:max-w-[28rem] lg:max-w-[34rem]">
          <div
            aria-hidden="true"
            className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,168,48,0.16),transparent_68%)] blur-xl"
          />
          <div className="absolute inset-0 rounded-full border border-brand-400/35 shadow-[inset_0_0_60px_-20px_rgba(28,168,48,0.45)]" />
          <div className="absolute inset-[7%] rounded-full border border-dashed border-white/12" />
          <div className="absolute inset-[15%] rounded-full border border-white/[0.07]" />
          <div className="trust-orbit absolute inset-0">
            {ringServices.map((service, index) => {
              const angle = (360 / ringServices.length) * index;
              return (
                <span
                  key={service.slug}
                  className="trust-orbit-item"
                  style={{ "--orbit-angle": `${angle}deg` } as CSSProperties}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    title={service.label}
                    aria-label={service.label}
                    className="trust-orbit-face group flex w-12 -translate-x-1/2 flex-col items-center gap-2 text-center sm:w-16 lg:w-24"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-300/45 bg-gradient-to-b from-navy-800 to-navy-950 text-brand-200 shadow-[0_0_0_4px_rgba(5,13,33,0.9),0_10px_30px_-12px_rgba(28,168,48,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:border-brand-300 group-hover:from-navy-700 group-hover:to-navy-900 group-hover:text-white group-focus-visible:scale-110 group-focus-visible:border-brand-300 group-focus-visible:text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                      <MegaServiceIcon slug={service.slug} className="h-5 w-5 lg:h-6 lg:w-6" />
                    </span>
                    <span className="hidden text-[0.62rem] font-medium leading-tight text-slate-400 transition-colors group-hover:text-brand-200 lg:block">
                      {service.short}
                    </span>
                  </Link>
                </span>
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-[23%] flex flex-col items-center justify-center rounded-full border border-white/10 bg-navy-950/85 px-4 text-center backdrop-blur">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-brand-300">Trusted worldwide</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base">
              Pakistan-built software for six markets
            </p>
            <span className="mt-3 h-px w-10 bg-white/20" aria-hidden="true" />
            <div className="mt-3 flex items-center gap-4">
              <span className="flex flex-col">
                <span className="text-lg font-semibold leading-none text-white sm:text-xl">{ringServices.length}</span>
                <span className="mt-1 text-[0.55rem] uppercase tracking-[0.12em] text-slate-400">Services</span>
              </span>
              <span className="h-7 w-px bg-white/15" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-lg font-semibold leading-none text-white sm:text-xl">{markets.length}</span>
                <span className="mt-1 text-[0.55rem] uppercase tracking-[0.12em] text-slate-400">Markets</span>
              </span>
            </div>
            <p className="mt-3 text-[0.65rem] leading-snug text-slate-400">
              {liveProjectCount} live product · {demoCount} demos you can open
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
        Sixteen of our {services.length} service lines. Hover the ring or tab into it to pause the rotation, then
        open any service directly.
      </p>
    </div>
  );
}

/**
 * The four counted facts, split out of the ring so they can run full width
 * underneath it instead of being squeezed into the same column.
 */
/**
 * The little bar strip under each counted fact.
 *
 * These are sorted distributions, not stock-ticker lines. A stock chart is a
 * time series, and we hold no month-by-month history of anything here — the
 * peaks and troughs that give those charts their shape would have to be drawn
 * from nothing, directly above a caption that reads "We do not publish numbers
 * we cannot show".
 *
 * What is real is how unevenly the work is spread, so each strip plots that
 * and sorts it tallest-first, which is what gives the descending shape. One
 * bar per mega-menu group by service count; one bar per industry by how many
 * service and topic pages its brief links to; one bar per market by its
 * service and industry coverage. The years strip is the exception and stays in
 * order, because a year is a year — it is a timeline, with the current year
 * picked out.
 */
function FactBars({ bars, label, accentLast = false }: { bars: number[]; label: string; accentLast?: boolean }) {
  const max = Math.max(...bars, 1);
  return (
    <div className="relative mt-3 flex h-8 items-end gap-[3px]" role="img" aria-label={label}>
      {bars.map((value, index) => (
        <span
          key={index}
          style={{ height: `${Math.max(16, Math.round((value / max) * 100))}%` }}
          className={`flex-1 rounded-[2px] ${
            accentLast && index === bars.length - 1
              ? "bg-brand-400"
              : "bg-gradient-to-t from-brand-500/35 to-brand-400/80"
          }`}
        />
      ))}
    </div>
  );
}

/** Tallest bar first — a sorted distribution reads as a shape, not a fence. */
function descending(values: number[]) {
  return [...values].sort((a, b) => b - a);
}

export function ServiceRingFacts({ compact = false }: { compact?: boolean } = {}) {
  const years = Math.max(1, new Date().getFullYear() - siteConfig.foundingYear);
  const groupSizes = megaMenuGroups.map((group) => group.slugs.length);

  // How many pages each industry brief actually links out to, and how much of
  // the catalogue each market page claims. Both are read from the same arrays
  // that produce the counts above, so neither can drift out of step.
  const industryDepth = industries.map(
    (industry) => industry.services.length + (industryTopicSlugs[industry.slug]?.length ?? 0),
  );
  const marketDepth = markets.map((market) => market.services.length + market.industries.length);

  const facts = [
    {
      value: `${years}+`,
      label: "Years in market",
      text: `Operating since ${siteConfig.foundingYear} — not a rented age.`,
      bars: Array.from({ length: years }, () => 1),
      barLabel: `One mark for each year since ${siteConfig.foundingYear}`,
      accentLast: true,
    },
    {
      value: `${services.length}`,
      label: "Service lines",
      text: "Each line has its own brief on this site.",
      bars: descending(groupSizes),
      barLabel: `${services.length} service lines across ${megaMenuGroups.length} groups: ${megaMenuGroups
        .map((group) => `${group.title} ${group.slugs.length}`)
        .join(", ")}`,
    },
    {
      value: `${industries.length}`,
      label: "Industries",
      text: "Workflows we have already modelled.",
      bars: descending(industryDepth),
      barLabel: `${industries.length} industries, each bar the number of service and topic pages that industry brief links to, deepest first`,
    },
    {
      value: `${markets.length}`,
      label: "Markets",
      text: "Pakistan base, remote delivery worldwide.",
      bars: descending(marketDepth),
      barLabel: `${markets.length} markets, each bar the number of services and industries that market page covers, widest first`,
    },
  ];

  // In compact mode this block sits in a column beside the team photos, and
  // that column is shorter than the six capability cards next to it. Growing
  // into the leftover height — rather than leaving it as a hole under the
  // caption — is what keeps the two columns looking level.
  return (
    <div className={compact ? "flex flex-col lg:grow" : ""}>
      <dl className={`grid gap-4 ${compact ? "grid-cols-2 lg:grow" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {facts.map((fact) => (
          <div
            key={fact.label}
            className={`hover-sheen hover-sheen-dark flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] ${
              compact ? "justify-between p-4" : "p-5"
            }`}
          >
            <dt className="relative text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {fact.label}
            </dt>
            <dd className={`relative mt-1 font-semibold text-white ${compact ? "text-2xl" : "text-3xl"}`}>
              {fact.value}
            </dd>
            <p className="relative mt-2 text-xs leading-relaxed text-slate-400">{fact.text}</p>
            <FactBars bars={fact.bars} label={fact.barLabel} accentLast={fact.accentLast} />
          </div>
        ))}
      </dl>
      <p
        className={`mt-6 text-xs leading-relaxed text-slate-500 ${
          compact ? "" : "mx-auto max-w-3xl text-center"
        }`}
      >
        Counted from this website — service pages, industry briefs, market pages, our own live product (Properties Pak)
        and labelled demos. The bars are sorted distributions of that same work, not a trend line. We do not publish numbers we cannot
        show.
      </p>
    </div>
  );
}
