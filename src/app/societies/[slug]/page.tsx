import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, Card } from "@/components/ui";
import { ServiceCard, PostCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, JsonLd } from "@/components/jsonld";
import { ArrowRight } from "@/components/icons";
import { societies, getSociety, priceDisclaimer, pricesUpdatedLabel, societySoftwareTitle, societySoftwareDescription } from "@/lib/societies";
import { getServices } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { getTopics } from "@/lib/topics";
import { absoluteUrl } from "@/lib/site";
import { propertiesPak, showcaseRel } from "@/lib/demos";

export function generateStaticParams() {
  return societies.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const society = getSociety(slug);
  if (!society) return { title: "Society software not found" };
  const title = societySoftwareTitle(society);
  const description = societySoftwareDescription(society);
  return {
    title,
    description,
    alternates: { canonical: `/societies/${society.slug}` },
    robots: { index: false, follow: true },
    openGraph: { url: `/societies/${society.slug}`, title, description },
  };
}

export default async function SocietyPage({ params }: PageProps) {
  const { slug } = await params;
  const society = getSociety(slug);
  if (!society) notFound();

  const title = societySoftwareTitle(society);
  const relatedServices = getServices(["real-estate-portals", "crm-erp-solutions", "custom-software-development"]);
  const relatedPosts = getPosts(["custom-crm-for-growing-businesses", "custom-software-vs-ready-made-software"]);
  const relatedTopics = getTopics(["real-estate-crm-software", "property-listing-website", "real-estate-agent-app"]);
  const otherSocieties = societies.filter((item) => item.slug !== society.slug).slice(0, 6);
  const softwareFaqs = [
    {
      question: `Do you sell ${society.name} plots?`,
      answer:
        "No. WordbitX is a software company. This page explains the portal, CRM and instalment tools operators in this society typically need. Any ranges below are market context only — verify with the developer office before a transaction.",
    },
    ...society.faqs,
  ];

  return (
    <>
      <PageHero
        eyebrow={`${society.city} · Real estate software`}
        title={title}
        description={`Software for ${society.name} operators: inventory, files, instalments and dealer CRM. Plot ranges, if shown, are secondary context — not the product.`}
        crumbs={[
          { label: "Society software", href: "/societies" },
          { label: society.name, href: `/societies/${society.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/contact?service=Real+Estate+Portals&society=${encodeURIComponent(society.name)}`}>
            Discuss a {society.name} portal
          </ButtonLink>
          <ButtonLink href="/industries/real-estate" variant="ghost">
            Real estate industry
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="What we build"
              title={`Software operators use in ${society.name}`}
              description="Dealers, society offices and overseas desks need a system of record — not a brochure and not a price-list website."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              {society.name} ({society.city}) is organised around {society.status.toLowerCase()}. That structure — phases,
              blocks, plot numbers, file status and transfers — is what a portal has to model. WordbitX builds that
              software. We do not broker plots and we do not publish live market prices as a product.
            </p>
            <div className="mt-6 space-y-4">
              {society.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-ink-500">
                  {paragraph}
                </p>
              ))}
            </div>
            <h2 className="mt-9 text-lg font-semibold text-ink-900">Modules that usually ship first</h2>
            <div className="mt-4">
              <CheckList
                columns={2}
                items={[
                  "Plot inventory by phase, sector, block and plot number",
                  "File status, holds, transfers and litigation flags",
                  "Instalment schedules, receipts and overdue alerts",
                  "Dealer commission with lead attribution",
                  "Overseas buyer portal with document vault",
                  "Search and booking on the public listing site",
                ]}
              />
            </div>
          </div>
          <div className="image-sheen relative aspect-[4/3] self-start overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src={"/brand/services/real-estate-portals.jpg"}
              alt={`Housing society layout representing inventory WordbitX models for ${society.name} in ${society.city}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-navy-950/65 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-300">Software, not brokerage</p>
              <p className="mt-1 text-xs text-white">{society.status}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Cluster"
              title="Related real estate software"
              description="These pages stay on software intent. Use them before treating this URL as a property listing."
            />
            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/industries/real-estate" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Real estate industry
                </Link>
                <p className="mt-1 text-sm text-ink-500">Problems and modules for developers, dealers and property desks.</p>
              </li>
              <li>
                <Link href="/services/real-estate-portals" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Real estate portal development
                </Link>
                <p className="mt-1 text-sm text-ink-500">How we scope inventory, files and public listing sites.</p>
              </li>
              <li>
                <Link href="/portfolio/housing-society-property-portal" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Society portal demo profile
                </Link>
                <p className="mt-1 text-sm text-ink-500">A labelled WordbitX demo — not a client case study.</p>
              </li>
              {relatedTopics.map((topic) => (
                <li key={topic.slug}>
                  <Link href={`/topics/${topic.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                    {topic.title}
                  </Link>
                  <p className="mt-1 text-sm text-ink-500">{topic.summary}</p>
                </li>
              ))}
            </ul>
          </div>
          <Card tone="light" className="bg-navy-950 !border-white/10">
            <h3 className="text-lg font-semibold text-white">Why this page exists</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              People search society names when they want a portal, a CRM, or (separately) a plot. WordbitX only sells
              the first two. If you need to buy a file, speak to the developer office — not us.
            </p>
            <div className="mt-5">
              <ButtonLink href={`/contact?service=Real+Estate+Portals&society=${encodeURIComponent(society.name)}`}>
                Get a scoped software plan
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Market context only"
          title={`Indicative ranges people mention for ${society.name}`}
          description={`${priceDisclaimer} This table is not the purpose of the page and is not investment advice.`}
        />
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-3.5 font-semibold text-ink-900">Category</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900">Size</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900">Indicative range (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {society.plots.map((row) => (
                <tr key={`${row.plot}-${row.size}`} className="odd:bg-white even:bg-slate-50/60">
                  <td className="border-t border-slate-100 px-5 py-3.5 text-ink-700">{row.plot}</td>
                  <td className="border-t border-slate-100 px-5 py-3.5 text-ink-700">{row.size}</td>
                  <td className="border-t border-slate-100 px-5 py-3.5 font-semibold text-ink-900">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-500">
          <span className="font-semibold text-ink-700">{pricesUpdatedLabel}.</span> Software we build tracks your own
          inventory and asking prices — we do not operate a live rate feed.
        </p>
        <h2 className="mt-10 text-lg font-semibold text-ink-900">Local operating notes</h2>
        <div className="mt-4">
          <CheckList items={society.highlights} columns={2} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Related services" title="Capabilities that power these portals" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} showImage />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title={`${society.name} software questions`} />
          <FaqAccordion faqs={softwareFaqs} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Same software, other societies" title="More society portal examples" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherSocieties.map((item) => (
            <Link
              key={item.slug}
              href={`/societies/${item.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">{item.name} software</h3>
                <ArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-1 text-xs text-ink-500">{item.city}</p>
            </Link>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <>
            <div className="mt-14">
              <SectionHeading eyebrow="Guides" title="How we think about property software" />
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-50 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              </span>
              Live project
            </span>
            <h2 className="mt-4 text-xl font-semibold text-ink-900 sm:text-2xl">
              See the same engine running on {propertiesPak.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              {propertiesPak.name} ({propertiesPak.host}) is our own live Pakistan property portal — society and phase
              listings, map-led search, plot/file detail pages and dealer enquiry routing. It is the production version
              of the software described on this page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={propertiesPak.url}
              target="_blank"
              rel={showcaseRel(propertiesPak.url)}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Open {propertiesPak.host}
              <ArrowRight className="h-4 w-4" />
            </a>
            <ButtonLink href="/services/real-estate-portals" variant="secondary">
              Portal service
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand
        title={`Build ${society.name} portal software with WordbitX`}
        description="Scope, pricing and timeline for the system — not a plot. Inventory structure becomes the product."
        whatsappMessage={`Hello WordbitX, I want to discuss property portal software for ${society.name}.`}
      />

      <FaqSchema faqs={softwareFaqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: absoluteUrl(`/societies/${society.slug}`),
          name: title,
          description: societySoftwareDescription(society),
          isPartOf: { "@id": absoluteUrl("/") + "#website" },
        }}
      />
    </>
  );
}
