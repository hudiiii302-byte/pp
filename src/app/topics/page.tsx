import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";
import { topics, topicCategories, topicsInCategory } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Software Topic Guides",
  description:
    "Short WordbitX explainers that sit beside the main service pages — comparisons and definitions, not a second services catalogue.",
  alternates: { canonical: "/topics" },
};

export default function TopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Topic library"
        title="Software Topics People Actually Search"
        description={`${topics.length} guides on software we build — hospital and clinic systems, commerce, apps and operations. We do not publish health advice or a news feed.`}
        crumbs={[{ label: "Topics", href: "/topics" }]}
      >
        <ButtonLink href="/services">Browse services</ButtonLink>
      </PageHero>
      {topicCategories.map((category) => (
        <Section key={category} tone={category === topicCategories[0] ? undefined : "muted"}>
          <SectionHeading eyebrow={category} title={`${category} topics`} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topicsInCategory(category).map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300"
              >
                <span className="block text-base font-semibold text-ink-900">{topic.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink-500">{topic.summary}</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read topic <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <CtaBand
        title="Need the software, not just the definition?"
        description="Each topic links to the service we actually deliver. Send the workflow and we will say build, buy or leave it."
      />
    </>
  );
}
