import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, Card } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { markets, getMarket } from "@/lib/markets";
import { cities } from "@/lib/cities";
import { getIndustry } from "@/lib/industries";
import { getServices } from "@/lib/services";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { contactHref } from "@/lib/site";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return markets.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return { title: "Market not found" };
  return {
    title: seoTitleAbsolute(market.metaTitle),
    description: market.metaDescription,
    alternates: { canonical: `/global/${market.slug}` },
    openGraph: { url: `/global/${market.slug}`, title: market.metaTitle, description: market.metaDescription },
  };
}

export default async function MarketPage({ params }: PageProps) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();
  const relatedServices = getServices(market.services);
  const relatedIndustries = market.industries.map(getIndustry).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow={market.country}
        title={market.h1}
        description={market.tagline}
        crumbs={[
          { label: "Global", href: "/global" },
          { label: market.name, href: `/global/${market.slug}` },
        ]}
      >
        <ButtonLink href={contactHref(relatedServices[0]?.title)}>Discuss a {market.country} project</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How we work here" title={market.name} />
        <div className="mt-6 max-w-3xl space-y-4">
          {market.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-ink-500">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {market.slug === "pakistan" ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="City by city"
            title="Pakistan is eleven different markets, not one"
            description="A Sialkot exporter and a Quetta trader buy completely different software. Each city page is written separately, from that city's real industrial base."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/software-house/${city.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {city.h1}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Demand" title="Work that usually comes from this market" />
            <div className="mt-6">
              <CheckList items={market.needs} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Delivery" title="How collaboration is set up" />
            <div className="mt-6">
              <CheckList items={market.delivery} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries" title="Sectors we often see in this market" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-200"
            >
              <span className="block font-semibold text-ink-900">{industry.name}</span>
              <span className="mt-2 block text-sm text-ink-500">{industry.tagline}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Industry page <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Services" title="Capabilities most often requested" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title={`${market.country} collaboration`} />
          <FaqAccordion faqs={market.faqs} />
        </div>
      </Section>

      <CtaBand
        title={`Start a conversation from ${market.country}`}
        primaryHref={contactHref(relatedServices[0]?.title)}
        whatsappMessage={`Hello WordbitX, I am contacting you from ${market.country} about a project.`}
      />
      <FaqSchema faqs={market.faqs} />
    </>
  );
}
