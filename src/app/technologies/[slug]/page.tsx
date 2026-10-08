import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, CheckList } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { techPages, getTechPage } from "@/lib/tech-pages";
import { getServices } from "@/lib/services";
import { noindexFollow } from "@/lib/seo-focus";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return techPages.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechPage(slug);
  if (!tech) return { title: "Technology not found" };
  const servicePath = tech.services[0] ? `/services/${tech.services[0]}` : "/services";
  return {
    title: seoTitleAbsolute(tech.metaTitle),
    description: tech.metaDescription,
    alternates: { canonical: servicePath },
    robots: noindexFollow,
    openGraph: { url: servicePath, title: tech.metaTitle, description: tech.metaDescription },
  };
}

export default async function TechnologyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = getTechPage(slug);
  if (!tech) notFound();
  const related = getServices(tech.services);

  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={tech.h1}
        description={tech.tagline}
        crumbs={[
          { label: "Technologies", href: "/technologies" },
          { label: tech.name, href: `/technologies/${tech.slug}` },
        ]}
      />
      <Section>
        <div className="max-w-3xl space-y-4">
          {tech.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-ink-500">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-ink-900">Where we use {tech.name}</h2>
          <div className="mt-4">
            <CheckList items={tech.useCases} />
          </div>
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Services" title={`${tech.name} in our delivery`} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <CtaBand title={`Need ${tech.name} on a real product?`} />
    </>
  );
}
