import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, Card, CheckList } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, ServiceSchema } from "@/components/jsonld";
import { ServiceCard } from "@/components/cards";
import { ArrowRight } from "@/components/icons";
import { getHirePage, hirePages, hireSlugs } from "@/lib/hire-developers";
import { getService } from "@/lib/services";
import { seoTitleAbsolute } from "@/lib/seo-title";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return hireSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getHirePage(slug);
  if (!page) return { title: "Hire page not found" };
  return {
    title: seoTitleAbsolute(page.metaTitle),
    description: page.metaDescription,
    alternates: { canonical: `/hire-developers/${slug}` },
    openGraph: { url: `/hire-developers/${slug}`, title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function HireDeveloperPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getHirePage(slug);
  if (!page) notFound();

  const isTech = page.kind === "tech";
  const others = hirePages.filter((item) => item.kind === page.kind && item.slug !== slug).slice(0, 5);
  const relatedServices = page.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const whatsapp = whatsappLink(
    isTech
      ? `Hello WordbitX, I would like to hire a ${page.label} developer.`
      : `Hello WordbitX, I am based in the ${page.label} market and would like to hire developers from your Lahore team.`,
  );

  return (
    <>
      <PageHero
        eyebrow={isTech ? "Hire Developers · By Technology" : "Hire Developers · By Market"}
        title={page.h1}
        description={page.intro[0]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Hire Developers", href: "/hire-developers" },
          { label: page.label, href: `/hire-developers/${slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss Your Team</ButtonLink>
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
          <div className="flex flex-wrap gap-2">
            {page.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-ink-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ROLES */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Roles"
          title={`Who you can hire on ${isTech ? page.label : "this market"}`}
          description="The three shapes this engagement usually takes. A scope document names the exact person and the exact hours."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {page.roles.map((role) => (
            <Card key={role.name}>
              <h3 className="text-base font-semibold text-ink-900">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{role.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RATES */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Rates"
            title={`${isTech ? `Hiring ${page.label}` : `Hiring for ${page.label}`} — what it costs`}
            description="Monthly retainer per developer, agreed in writing. The same bands apply across stacks; the seniority of the person moves the number, not the logo."
          />
          <div className="space-y-4">
            {page.rates.map((row) => (
              <div key={row.tier} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-ink-900">{row.tier}</h3>
                  <span className="text-sm font-semibold text-brand-700">{row.range}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{row.fits}</p>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-ink-400">
              Fractional commitments (20/30/40 hours a week) are scoped at pro-rata rates in writing.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why this team"
          title={`What you get on a ${isTech ? page.label : `${page.label}-market`} engagement`}
          description="Practical commitments, not slogans — the same standard as our project work."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.why.map((point) => (
            <Card key={point.title}>
              <h3 className="text-base font-semibold text-ink-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={`${isTech ? `${page.label} hiring` : `${page.label} market`} questions, answered`}
            description="Straight answers to what teams ask before the first call."
          />
          <div>
            <FaqAccordion faqs={page.faqs} />
            <div className="mt-6">
              <ButtonLink href="/contact">Ask us anything else</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* RELATED SERVICES + OTHER PAGES */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={relatedServices.length > 0 ? "Related Services" : "Related Work"}
          title={relatedServices.length > 0 ? "Services this hire usually pairs with" : "Work this team does"}
          description="If the hire turns into a project, the same team continues under a milestone plan."
        />
        {relatedServices.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-ink-900">
            {isTech ? "Other stacks we hire for" : "Other markets we serve"}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/hire-developers/${item.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400"
              >
                {isTech ? `Hire ${item.label} Developers` : item.label}
                <ArrowRight className="h-3.5 w-3.5 text-brand-600 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
            <Link
              href="/hire-developers"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400"
            >
              All hire pages
              <ArrowRight className="h-3.5 w-3.5 text-brand-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title={isTech ? `Ready to hire your ${page.label} developer?` : `Ready to build with a team that covers your market?`}
        description="Send us the stack, the hours and the backlog. You will get a named developer, a written scope and a start date — usually within two weeks."
        primaryLabel="Discuss Your Team"
        primaryHref="/contact"
        whatsappMessage={
          isTech
            ? `Hello WordbitX, I would like to hire a ${page.label} developer.`
            : `Hello WordbitX, I am based in the ${page.label} market and would like to hire developers from your Lahore team.`
        }
      />
      <ServiceSchema
        name={page.title}
        description={page.metaDescription}
        url={`/hire-developers/${slug}`}
        serviceType={isTech ? `${page.label} developer hiring` : `Developer hiring — ${page.label} market`}
      />
      <FaqSchema faqs={page.faqs} />
    </>
  );
}
