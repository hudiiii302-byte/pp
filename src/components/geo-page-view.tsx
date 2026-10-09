import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink, Card, CheckList } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, ServiceSchema } from "@/components/jsonld";
import { ServiceCard } from "@/components/cards";
import { ArrowRight } from "@/components/icons";
import { getGeoPage, geoPages } from "@/lib/geo-pages";
import { getService } from "@/lib/services";
import { seoTitleAbsolute } from "@/lib/seo-title";
import { contactHref, whatsappLink } from "@/lib/site";

export function geoPageMetadata(slug: string): Metadata {
  const page = getGeoPage(slug);
  if (!page) return { title: "Page not found" };
  return {
    title: seoTitleAbsolute(page.metaTitle),
    description: page.metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: { url: `/${slug}`, title: page.metaTitle, description: page.metaDescription },
  };
}

export function GeoPageView({ slug }: { slug: string }) {
  const page = getGeoPage(slug);
  if (!page) return null;

  const service = getService(page.serviceSlug);
  const cityPages = geoPages.filter((item) => item.citySlug === page.citySlug && item.slug !== slug);
  const whatsapp = whatsappLink(
    `Hello WordbitX, I am based in ${page.city} and interested in ${page.serviceLabel.toLowerCase()}.`,
  );

  return (
    <>
      <PageHero
        eyebrow={`${page.serviceLabel} in ${page.city}`}
        title={page.h1}
        description={page.intro[0]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: page.city, href: `/software-house/${page.citySlug}` },
          { label: page.serviceLabel, href: `/${slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={contactHref(service?.title)}>{`Discuss ${page.serviceLabel}`}</ButtonLink>
          <ButtonLink href={whatsapp} variant="ghost" external>
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* INTRO */}
      <Section>
        <div className="max-w-3xl space-y-5">
          {page.intro.slice(1).map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* LOCAL ANGLE */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={`${page.city}, specifically`}
          title={`How this works in ${page.city}`}
          description="The working model, the districts and the market details — not the same paragraph with the city name changed."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {page.local.map((point) => (
            <Card key={point.title}>
              <h3 className="text-base font-semibold text-ink-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="What we deliver"
            title={`${page.serviceLabel} projects we build in ${page.city}`}
            description="The recurring shapes of this work — every project starts from a written scope sized to yours."
          />
          <CheckList items={page.deliverables} />
        </div>
      </Section>

      {/* RATES NOTE */}
      <Section tone="muted">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-ink-900">Rates, the honest version</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                We work at the band published on our Clutch profile — under $25 / hr for dedicated developers, and
                project work is quoted as written milestones after a short brief, not a sticker. {page.city} projects
                carry no "metro premium"; the scope sets the price.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/pricing">How we quote</ButtonLink>
              <ButtonLink href={contactHref(service?.title)} variant="secondary">
                Get a written quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={`${page.serviceLabel} in ${page.city} — questions`}
            description="The things businesses in the city ask before the first call."
          />
          <div>
            <FaqAccordion faqs={page.faqs} />
            <div className="mt-6">
              <ButtonLink href={contactHref(service?.title)}>Ask us anything else</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICE + CITY + SIBLINGS */}
      <Section tone="muted">
        {service ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard service={service} />
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Software house in {page.city}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                The full {page.city} page: what the city builds, the districts, and how the studio works with it.
              </p>
              <Link
                href={`/software-house/${page.citySlug}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                See the {page.city} page <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Hire the developers behind it</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Need the team rather than a project? The hire pages cover roles, rates and the working model.
              </p>
              <Link
                href="/hire-developers"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Browse hire pages <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </div>
        ) : null}

        {cityPages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-ink-900">Other services in {page.city}</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {cityPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400"
                >
                  {item.serviceLabel} in {item.city}
                  <ArrowRight className="h-3.5 w-3.5 text-brand-600 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CtaBand
        title={`Ready to start your ${page.serviceLabel.toLowerCase()} project in ${page.city}?`}
        description="Send the brief — pages, modules, deadline. You will get a written scope with milestones, a timeline and a realistic rate from the team that builds it."
        primaryLabel="Get a written quote"
        primaryHref={contactHref(service?.title)}
        whatsappMessage={`Hello WordbitX, I am based in ${page.city} and interested in ${page.serviceLabel.toLowerCase()}.`}
      />
      <ServiceSchema
        name={`${page.serviceLabel} in ${page.city}`}
        description={page.metaDescription}
        url={`/${slug}`}
        serviceType={service?.primaryKeyword ?? page.serviceLabel}
      />
      <FaqSchema faqs={page.faqs} />
    </>
  );
}
