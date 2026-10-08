import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { cities, citiesIntro } from "@/lib/cities";
import { seoTitleAbsolute } from "@/lib/seo-title";

const metaTitle = "Software House in Pakistan — City by City";
const metaDescription =
  "WordbitX is a Lahore-based software house serving Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Sialkot, Gujranwala, Multan, Peshawar, Quetta and Hyderabad. Each city page covers what that market actually builds.";

export const metadata: Metadata = {
  title: seoTitleAbsolute(metaTitle),
  description: metaDescription,
  alternates: { canonical: "/software-house" },
  openGraph: { url: "/software-house", title: metaTitle, description: metaDescription },
};

export default function SoftwareHouseIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Pakistan, city by city"
        title="Software house in Pakistan — built where your customers are"
        description={citiesIntro}
        crumbs={[{ label: "Pakistan cities", href: "/software-house" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/software-house/lahore">Start with Lahore</ButtonLink>
          <ButtonLink href="/global/pakistan" variant="ghost">
            Pakistan overview
          </ButtonLink>
        </div>
      </PageHero>

      <Section deferPaint={false}>
        <SectionHeading
          eyebrow={`${cities.length} cities`}
          title="Pick your city"
          description="Each page is written for one market: its real industrial base, its commercial districts, and the software businesses there actually ask us for."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/software-house/${city.slug}`}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-38px_rgba(5,13,33,0.55)]"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-ink-500">{city.province}</span>
              <h2 className="mt-2 text-xl font-semibold text-ink-900 group-hover:text-brand-700">{city.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{city.tagline}</p>
              <ul className="mt-4 space-y-1.5">
                {city.economy.slice(0, 3).map((item) => (
                  <li key={item.label} className="flex gap-2 text-sm text-ink-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-700">
                {city.h1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <SectionHeading
            eyebrow="Why city pages at all"
            title="Because a national page cannot answer a local question"
          />
          <div className="space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              A business in Sialkot and a business in Quetta are not buying the same thing. One needs a
              multi-currency B2B catalogue for a buyer in Germany; the other needs a system that keeps working
              when the connection drops. A single page that tries to serve both says nothing useful to either.
            </p>
            <p>
              So each city page is written separately, from that city&apos;s actual industrial base. We did not
              generate eleven copies of one template with the name swapped — that approach damages a site&apos;s
              standing across every page, not just the generated ones.
            </p>
            <p>
              The team is in Lahore. Everywhere else is delivered remotely as standard, with travel when kickoff
              or training genuinely needs it. We will tell you which applies to your project before you ask.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Tell us where you are and what is breaking"
        description="You will get a scoped plan, a timeline and a price — written for your market, not a national brochure."
      />
    </>
  );
}
