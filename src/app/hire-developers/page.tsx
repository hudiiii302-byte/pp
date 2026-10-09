import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink, Card, CheckList } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, ServiceSchema } from "@/components/jsonld";
import { ArrowRight } from "@/components/icons";
import { hireHub, hirePages } from "@/lib/hire-developers";
import { seoTitleAbsolute } from "@/lib/seo-title";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: seoTitleAbsolute(hireHub.metaTitle),
  description: hireHub.metaDescription,
  alternates: { canonical: "/hire-developers" },
  openGraph: { url: "/hire-developers", title: hireHub.metaTitle, description: hireHub.metaDescription },
};

const techPages = hirePages.filter((page) => page.kind === "tech");
const marketPages = hirePages.filter((page) => page.kind === "market");

export default function HireDevelopersHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Hire Developers"
        title={hireHub.h1}
        description={hireHub.intro[0]}
        crumbs={[{ label: "Home", href: "/" }, { label: "Hire Developers", href: "/hire-developers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss Your Team</ButtonLink>
          <ButtonLink
            href={whatsappLink("Hello WordbitX, I would like to hire a developer (or a team).")}
            variant="ghost"
            external
          >
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* INTRO */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {hireHub.intro.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            {hireHub.howItWorks.map((step) => (
              <div key={step.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="text-2xl font-semibold text-brand-500">{step.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECH STACKS */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="By Technology"
          title="Hire by the stack you actually run"
          description="Each page covers the roles, the rate bands, and the questions that matter for that technology."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techPages.map((page) => (
            <Link
              key={page.slug}
              href={`/hire-developers/${page.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-400"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-ink-900">Hire {page.label} Developers</h3>
                <ArrowRight className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{page.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* MARKETS */}
      <Section>
        <SectionHeading
          eyebrow="By Your Market"
          title="Hired by teams in these markets"
          description="Overlap hours, payment rails and the paperwork, written per market — because a Dubai team and a Sydney team need different structures."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {marketPages.map((page) => (
            <Link
              key={page.slug}
              href={`/hire-developers/${page.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-400"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-ink-900">{page.label}</h3>
                <ArrowRight className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{page.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* RATES */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Rates"
            title="What a developer hire costs"
            description="Monthly retainer for one dedicated developer. Every engagement starts from a written scope — these bands are what that scope usually lands in."
          />
          <div className="space-y-4">
            {techPages[0].rates.map((row) => (
              <div key={row.tier} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-ink-900">{row.tier}</h3>
                  <span className="text-sm font-semibold text-brand-700">{row.range}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{row.fits}</p>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-ink-400">
              Fractional commitments (20/30/40 hours a week) are scoped at pro-rata rates in writing. The band is
              consistent with the "Under $25 / hr" rate published on our Clutch profile.
            </p>
          </div>
        </div>
      </Section>

      {/* PROMISES */}
      <Section>
        <SectionHeading
          eyebrow="The frame"
          title="Every hire engagement, in writing"
          description="Not a policy page — the four terms that appear in every scope document we sign."
        />
        <CheckList
          items={[
            "Names, roles, hours and weekly deliverables agreed before the start date",
            "Weekly demos in your repo or staging — the plan is checked against the software",
            "Repositories, infrastructure and documentation live in your accounts from day one",
            "NDA and IP assignment in your format, signed before the first commit",
          ]}
        />
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Hire questions, answered"
            description="The things teams ask before they send us a single line of code."
          />
          <div>
            <FaqAccordion faqs={hireHub.faqs} />
            <div className="mt-6">
              <ButtonLink href="/contact">Ask us anything else</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ready to add a developer — or a team?"
        description="Send us the stack, the hours and the backlog. You will get a named team, a written scope and a start date — usually within two weeks."
        primaryLabel="Discuss Your Team"
        primaryHref="/contact"
        whatsappMessage="Hello WordbitX, I would like to hire a developer (or a team)."
      />
      <ServiceSchema
        name={hireHub.title}
        description={hireHub.metaDescription}
        url="/hire-developers"
        serviceType="Developer hiring and staff augmentation"
      />
      <FaqSchema faqs={hireHub.faqs} />
    </>
  );
}
