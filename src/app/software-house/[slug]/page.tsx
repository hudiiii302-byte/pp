import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, Card } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, JsonLd } from "@/components/jsonld";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { cities, getCity, getCities } from "@/lib/cities";
import { geoPages } from "@/lib/geo-pages";
import { getServices } from "@/lib/services";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "City not found" };
  return {
    title: seoTitleAbsolute(city.metaTitle),
    description: city.metaDescription,
    alternates: { canonical: `/software-house/${city.slug}` },
    openGraph: { url: `/software-house/${city.slug}`, title: city.metaTitle, description: city.metaDescription },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const cityServices = getServices(city.services);
  const cityIndustries = industries.filter((industry) => city.industries.includes(industry.slug));
  const nearby = getCities(city.nearby);
  const isBase = city.slug === "lahore";

  return (
    <>
      <PageHero
        eyebrow={`${city.name}, ${city.province}`}
        title={city.h1}
        description={city.tagline}
        crumbs={[
          { label: "Pakistan cities", href: "/software-house" },
          { label: city.name, href: `/software-house/${city.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss Your Project</ButtonLink>
          <ButtonLink href="/products" variant="ghost">
            See what we have built
          </ButtonLink>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
          {isBase
            ? "Our team is based in Lahore, so in-person meetings here are normal rather than an exception."
            : `Our team is based in Lahore. ${city.name} projects are delivered remotely as standard, with travel for kickoff or training when the project genuinely needs it.`}
        </p>
      </PageHero>

      <Section deferPaint={false}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading eyebrow={`Software in ${city.name}`} title={`What this market actually buys`} />
            <div className="mt-6 space-y-4">
              {city.overview.map((para) => (
                <p key={para.slice(0, 40)} className="text-base leading-relaxed text-ink-600">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-base font-semibold text-ink-900">
              What {city.name} businesses ask us for
            </h2>
            <ul className="mt-4 space-y-3">
              {city.asks.map((ask) => (
                <li key={ask} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{ask}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Local economy"
          title={`The sectors we build for in ${city.name}`}
          description="Not a list of industries copied from a national page — these are the businesses this city actually runs on."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {city.economy.map((item) => (
            <Card key={item.label}>
              <h3 className="text-base font-semibold text-ink-900">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-base font-semibold text-ink-900">Where we work in {city.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Commercial and industrial areas our {city.name} clients trade in.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {city.districts.map((district) => (
              <li
                key={district}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-ink-700"
              >
                {district}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {cityServices.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Services"
            title={`What we deliver most in ${city.name}`}
            description="Ordered by what this city asks for, not by what we would like to sell."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cityServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              All {services.length} service lines
            </ButtonLink>
          </div>
          {geoPages.filter((page) => page.citySlug === city.slug).length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {geoPages
                .filter((page) => page.citySlug === city.slug)
                .map((page) => (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400"
                  >
                    {page.serviceLabel} in {page.city}
                    <ArrowRight className="h-3.5 w-3.5 text-brand-600 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {cityIndustries.length > 0 ? (
        <Section tone="dark">
          <SectionHeading
            tone="dark"
            eyebrow="Industry briefs"
            title={`Industries we already understand in ${city.name}`}
            description="Each brief covers the workflows, the systems and the failure points for that sector — written before we ever quote on it."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">{industry.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{industry.tagline}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <SectionHeading eyebrow="FAQ" title={`Working with us in ${city.name}`} />
          <div>
            <FaqAccordion faqs={city.faqs} />
          </div>
        </div>
        <FaqSchema faqs={city.faqs} />
      </Section>

      {nearby.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Other cities" title="We work across Pakistan" />
          <div className="mt-8 flex flex-wrap gap-3">
            {nearby.map((item) => (
              <Link
                key={item.slug}
                href={`/software-house/${item.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {item.h1}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
            <Link
              href="/software-house"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              All {cities.length} cities
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={`Let's talk about your ${city.name} project`}
        description="Tell us what is actually breaking — the enquiries, the stock, the orders, the reporting. You will get a scope, a timeline and a price."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: city.h1,
          /**
           * The two phrases buyers actually type for this page. Declaring them
           * as entity names is what the one competitor whose homepage reaches
           * page 1 for "software company in lahore" does.
           */
          alternateName: [`Software Company in ${city.name}`, `Software House in ${city.name}`],
          serviceType: "Software development",
          description: city.metaDescription,
          url: absoluteUrl(`/software-house/${city.slug}`),
          provider: {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: { "@type": "AdministrativeArea", name: city.province },
          },
        }}
      />

      {/* Only the city we genuinely occupy gets a physical business entity.
          Everywhere else we are a remote provider, and claiming otherwise is
          the fake-location tactic that gets Business Profiles suspended. */}
      {city.headOffice ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${absoluteUrl(`/software-house/${city.slug}`)}#localbusiness`,
            name: siteConfig.name,
            alternateName: `Software Company in ${city.name}`,
            description: city.metaDescription,
            url: absoluteUrl(`/software-house/${city.slug}`),
            telephone: siteConfig.phoneDisplay,
            email: siteConfig.email,
            image: absoluteUrl(siteConfig.ogImage),
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.streetAddress,
              addressLocality: siteConfig.addressLocality,
              addressRegion: siteConfig.addressRegion,
              addressCountry: siteConfig.addressCountry,
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: { "@type": "AdministrativeArea", name: city.province },
            },
            parentOrganization: { "@id": `${siteConfig.url}/#organization` },
          }}
        />
      ) : null}
    </>
  );
}
