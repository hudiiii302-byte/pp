import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";
import { markets } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Global Software Delivery | Pakistan, USA, UK, UAE",
  description:
    "Pakistan-based software development company serving clients in the USA, UK, UAE, Canada and Australia with remote squads and scheduled overlap hours.",
  alternates: { canonical: "/global" },
};

export default function GlobalMarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Markets"
        title="A Global Software Team, Operating from Pakistan"
        description="Pakistan is our base. The USA, UK, UAE, Canada and Australia are markets we already collaborate with remotely. Each page below is about delivery, timezone and the work that actually fits — not a cloned city landing page."
        crumbs={[{ label: "Global", href: "/global" }]}
      >
        <ButtonLink href="/contact">Start a remote engagement</ButtonLink>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Markets" title="Where we work" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={`/global/${market.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{market.country}</span>
              <span className="mt-2 block text-lg font-semibold text-ink-900">{market.name}</span>
              <span className="mt-2 block text-sm leading-relaxed text-ink-500">{market.tagline}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Market page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand title="Working across time zones is normal for us" description="Tell us where you are and when you can meet. We will propose overlap hours before we talk about scope." />
    </>
  );
}
