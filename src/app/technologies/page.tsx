import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { TechChip } from "@/components/tech-icon";
import { CtaBand } from "@/components/cta-band";
import { techCategories } from "@/lib/technologies";
import { techPages } from "@/lib/tech-pages";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Technologies We Use | React, Next.js, Flutter, Node.js, Python, Shopify",
  description:
    "The technologies WordbitX actually uses: React, Next.js, Flutter, Node.js, Python, Shopify and the supporting cloud, data and mobile stack.",
  alternates: { canonical: "/technologies" },
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A Stack We Use in Production, Not a Logo Wall"
        description="These are the tools that appear in real WordbitX deliveries. Dedicated pages exist only where we have enough practice to write something useful."
        crumbs={[{ label: "Technologies", href: "/technologies" }]}
      />
      <Section>
        <SectionHeading eyebrow="Deep dives" title="Technologies with a dedicated page" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techPages.map((tech) => (
            <Link
              key={tech.slug}
              href={`/technologies/${tech.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200"
            >
              <span className="block text-lg font-semibold text-ink-900">{tech.name}</span>
              <span className="mt-2 block text-sm text-ink-500">{tech.tagline}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Full stack" title="Also in regular use" />
        <div className="mt-10 space-y-10">
          {techCategories.map((category) => (
            <div key={category.id}>
              <h2 className="text-base font-semibold text-ink-900">{category.title}</h2>
              <p className="mt-1 text-sm text-ink-500">{category.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {category.items.map((item) => (
                  <TechChip key={`${category.id}-${item.name}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand title="Need a stack recommendation?" description="Tell us the product and the team that will maintain it. We will recommend tools by hiring pool and cost, not fashion." />
    </>
  );
}
