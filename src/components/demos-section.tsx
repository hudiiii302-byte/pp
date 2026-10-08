import { Section, SectionHeading, ButtonLink } from "@/components/ui";
import { ArrowRight, ServiceIcon, CheckIcon } from "@/components/icons";
import { ShowcaseStage } from "@/components/showcase-stage";
import { demoWebsites, showcaseRel } from "@/lib/demos";
import type { DemoWebsite } from "@/lib/demos";
import { demoPreview, demoStageSrc } from "@/lib/demo-shots";
import { contactHref } from "@/lib/site";
import Link from "next/link";

function ShowcaseCard({ demo, priority, index = 0 }: { demo: DemoWebsite; priority: boolean; index?: number }) {
  const rel = showcaseRel(demo.url);
  const preview = demoPreview(demo);

  return (
    <article
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
      className="group animate-reveal flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-40px_rgba(5,13,33,0.6)]"
    >
      <a href={demo.url} target="_blank" rel={rel} aria-label={`Open ${demo.name} — ${demo.category}`}>
        <ShowcaseStage
          demo={demo}
          shot={preview.src}
          isCover={preview.isCover}
          stage={demoStageSrc(demo)}
          priority={priority}
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-500/12">
            <ServiceIcon name="web" className="h-4 w-4" />
          </span>
          <span>
            <h3 className="text-base font-semibold leading-tight text-ink-900">{demo.name}</h3>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-ink-500">{demo.category}</span>
          </span>
        </span>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{demo.description}</p>

        {/* The one checkable fact about the build. A buyer skimming nine cards
            reads these before they read any prose — counts are what make
            "we built this" land as engineering rather than marketing. */}
        {demo.proof ? (
          <p className="mt-3 flex-1 rounded-xl bg-slate-50 px-3.5 py-2.5 text-[0.78rem] leading-relaxed text-ink-700 ring-1 ring-slate-200/80">
            <span className="font-semibold text-ink-900">In the build: </span>
            {demo.proof}
          </p>
        ) : (
          <span className="flex-1" />
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={demo.url}
            target="_blank"
            rel={rel}
            className="group/btn inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4.5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600"
          >
            {demo.kind === "live" ? "Visit live site" : "View live demo"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
          <Link
            href={contactHref(demo.relatedService?.title)}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-white px-4.5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-500"
          >
            Get a similar site
          </Link>
          {demo.relatedService ? (
            <Link
              href={`/services/${demo.relatedService.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4.5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-400 hover:text-brand-700"
            >
              {demo.relatedService.title}
            </Link>
          ) : null}
        </div>
        <p className="mt-3 text-[0.68rem] leading-relaxed text-ink-500">
          {demo.kind === "live"
            ? "Live product designed, built and maintained by WordbitX."
            : "Live demo designed and developed by WordbitX."}
        </p>
      </div>
    </article>
  );
}

/** Wide hero treatment for the flagship live product. */
function FeaturedShowcase({ demo }: { demo: DemoWebsite }) {
  const rel = showcaseRel(demo.url);
  const preview = demoPreview(demo);
  const highlights = [
    "Society, phase and block level listings",
    "Map-led search with saved filters",
    "Plot / file detail pages and enquiry routing",
    "Dealer dashboard and lead inbox",
  ];

  return (
    <article className="group animate-reveal relative overflow-hidden rounded-3xl border border-navy-800/60 bg-navy-950 text-white shadow-[0_50px_110px_-60px_rgba(5,13,33,0.9)]">
      <span aria-hidden="true" className="absolute inset-0 grid-pattern opacity-40" />
      <span
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[120px]"
      />
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:p-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-400/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Flagship live product
          </span>
          <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">
            {demo.name} — <span className="text-gradient-brand">a real property portal we run</span>
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{demo.description}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={demo.url}
              target="_blank"
              rel={rel}
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(28,168,48,0.85)] transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Visit {demo.host}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
            <Link
              href={contactHref(demo.relatedService?.title)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/60 hover:bg-white/[0.08]"
            >
              Build me a property portal
            </Link>
            {demo.relatedService ? (
              <Link
                href={`/services/${demo.relatedService.slug}`}
                className="inline-flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-brand-300 underline-offset-4 hover:underline"
              >
                {demo.relatedService.title}
              </Link>
            ) : null}
          </div>
        </div>

        <a
          href={demo.url}
          target="_blank"
          rel={rel}
          aria-label={`Open ${demo.name}`}
          className="block overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.95)]"
        >
          <ShowcaseStage
            demo={demo}
            shot={preview.src}
            isCover={preview.isCover}
            stage={demoStageSrc(demo)}
            variant="feature"
            priority
          />
        </a>
      </div>
    </article>
  );
}

export function DemosSection({ limit }: { limit?: number }) {
  const featured = demoWebsites.find((demo) => demo.kind === "live");
  const rest = demoWebsites.filter((demo) => demo !== featured);
  const demos = typeof limit === "number" ? rest.slice(0, limit) : rest;

  return (
    <Section tone="muted" id="demos">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Our Products"
          title="See our work live — software we built and still run"
          description="Every card below opens a real, working website. One is a live property marketplace we own and operate; the rest are complete platforms we built to prove a capability — search, booking, checkout, dashboards. Click through and use them."
        />
        <ButtonLink href="/products" variant="secondary">
          All products
        </ButtonLink>
      </div>

      {featured ? (
        <div className="mt-10">
          <FeaturedShowcase demo={featured} />
        </div>
      ) : null}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo, index) => (
          <ShowcaseCard key={demo.id} demo={demo} index={index} priority={index < 3} />
        ))}
      </div>

      {typeof limit === "number" && rest.length > limit ? (
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/products" variant="secondary">
            See all products
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}
