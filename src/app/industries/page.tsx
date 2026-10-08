import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, SectionHeading, ButtonLink, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";
import { industries } from "@/lib/industries";
import { propertiesPak } from "@/lib/demos";
import { demoPreview } from "@/lib/demo-shots";

export const metadata: Metadata = {
  title: "Industries We Serve | Retail, Healthcare, Education, Manufacturing",
  description:
    "Industry software from WordbitX: retail, real estate, healthcare, pharmacy, education, logistics, eCommerce, hospitality, finance, legal and construction.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  // Prefers a committed capture of the real portal and falls back to the
  // illustrated cover, so this never renders an empty frame.
  const preview = demoPreview(propertiesPak);
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software Built Around How These Sectors Actually Work"
        description="Each industry page explains the operational problems we see, the modules we typically ship, and the services and case studies that sit behind them. No swapped-keyword copies."
        crumbs={[{ label: "Industries", href: "/industries" }]}
      >
        <ButtonLink href="/contact">Discuss your industry</ButtonLink>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Sectors" title="Choose an industry" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-200"
            >
              <span className="relative block aspect-[16/9] bg-slate-100">
                <Image src={industry.image} alt={industry.imageAlt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </span>
              <span className="block p-6">
                <span className="block text-lg font-semibold text-ink-900">{industry.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink-500">{industry.summary}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  View industry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Properties Pak is the one thing on this site that is not a demo or a
          case study written about someone else — it is our own portal, live and
          openable. It earns a band of its own here, the same way it leads the
          showcase on the home page, because "they actually run one" is the
          strongest answer an industry visitor can get. */}
      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Eyebrow tone="dark">Live Project · Real Estate</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              We do not only build industry software. We run one.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              {propertiesPak.description}
            </p>
            {propertiesPak.proof ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">{propertiesPak.proof}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={propertiesPak.url} variant="primary">
                Open {propertiesPak.host}
              </ButtonLink>
              <ButtonLink href="/industries/real-estate" variant="ghost">
                Real estate software
              </ButtonLink>
            </div>
          </div>
          <Link
            href={propertiesPak.url}
            target="_blank"
            rel="noopener"
            className="group block overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src={preview.src}
              alt={
                preview.isCover
                  ? `Illustration representing ${propertiesPak.name}, the live Pakistan property portal built and operated by WordbitX`
                  : `${propertiesPak.name} — the live Pakistan property portal built and operated by WordbitX`
              }
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </Link>
        </div>
      </Section>

      <CtaBand title="Don't see your sector listed?" description="Describe the workflow. If we have built something close, we will say so. If we have not, we will say that too." />
    </>
  );
}
