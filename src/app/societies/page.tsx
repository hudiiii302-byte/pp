import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";
import { societies } from "@/lib/societies";
import { propertiesPak, showcaseRel } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Housing Society Portal Software | DHA, Bahria & Smart Cities",
  description:
    "Property portal and management software for DHA, Bahria, Capital Smart City and other Pakistani societies — we build the software, not brokerage.",
  alternates: { canonical: "/societies" },

  openGraph: {
    url: "/societies",
    title: "Housing Society Portal Software",
    description:
      "Software for society inventory, files, instalments and dealer CRM. Not a plot-price listing site.",
  },
};

export default function SocietiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Real estate software"
        title="Society Portal & Property Management Software"
        description="WordbitX builds inventory, file, instalment and dealer-CRM systems for Pakistan housing societies. These pages are software examples — not a live plot exchange."
        crumbs={[{ label: "Society software", href: "/societies" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/services/real-estate-portals">Real estate portals</ButtonLink>
          <ButtonLink href="/industries/real-estate" variant="ghost">
            Real estate industry
          </ButtonLink>
          <ButtonLink href="/topics/real-estate-crm-software" variant="ghost">
            Real estate CRM
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-relaxed text-ink-600">
            Each society below is an example of the workflow we model (phases, files, transfers). Indicative ranges
            on child pages are secondary context and stay <span className="font-semibold">noindex</span> so they do
            not compete with our software pages. We do not sell plots.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/services/real-estate-portals" className="text-brand-700 hover:text-brand-800">
              Portal service
            </Link>
            <Link href="/portfolio/housing-society-property-portal" className="text-brand-700 hover:text-brand-800">
              Society portal demo
            </Link>
            <Link href="/topics/property-listing-website" className="text-brand-700 hover:text-brand-800">
              Listing websites
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {societies.map((society, index) => (
            <Link
              key={society.slug}
              href={`/societies/${society.slug}`}
              className="group animate-reveal rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_28px_60px_-38px_rgba(5,13,33,0.5)]"
              style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">{society.name} software</h2>
                  <p className="mt-0.5 text-xs text-ink-500">{society.city}</p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-semibold text-brand-700">
                  Portal example
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{society.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Software for {society.name}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="image-sheen relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src={"/brand/industries/real-estate.jpg"}
              alt="Aerial housing society used to illustrate inventory WordbitX models in a property portal"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Same engine"
              title="Phases, files and instalments — not a generic listing template"
              description="Every society above can run on the same portal: inventory, transfers, ballot records, overdue instalments and dealer commissions. Public listing sites sit on top of that record."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/services/real-estate-portals">See the real estate portal service</ButtonLink>
              <a
                href={propertiesPak.url}
                target="_blank"
                rel={showcaseRel(propertiesPak.url)}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-500"
              >
                Open {propertiesPak.name} — our live portal
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-400">
              {propertiesPak.name} ({propertiesPak.host}) is a real, live property portal designed, built and run by
              WordbitX — the clearest way to see this engine working.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Need society portal software?"
        description="Tell us the society and the workflow — inventory, transfers, instalments or dealer commissions. We scope the system, not a plot."
      />
    </>
  );
}
