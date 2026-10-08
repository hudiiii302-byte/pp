import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList } from "@/components/ui";
import { ServiceCard, PostCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, JsonLd } from "@/components/jsonld";
import { topics, getTopic, topicsInCategory } from "@/lib/topics";
import { getServices } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { industries, getIndustry } from "@/lib/industries";
import { industrySlugsForServices } from "@/lib/related-content";
import { contactHref, absoluteUrl, siteConfig } from "@/lib/site";
import { isDuplicateTopic, noindexFollow, topicCanonical } from "@/lib/seo-focus";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return {
    title: seoTitleAbsolute(topic.metaTitle),
    description: topic.metaDescription,
    keywords: topic.keywords,
    alternates: { canonical: topicCanonical(topic.slug) },
    robots: isDuplicateTopic(topic.slug) ? noindexFollow : undefined,
    openGraph: {
      url: isDuplicateTopic(topic.slug) ? topicCanonical(topic.slug) : `/topics/${topic.slug}`,
      title: topic.metaTitle,
      description: topic.metaDescription,
    },
  };
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const relatedServices = getServices(topic.services);
  const relatedPosts = getPosts(topic.posts);
  const relatedIndustries = industrySlugsForServices(topic.services)
    .map((slug) => getIndustry(slug))
    .filter((item): item is (typeof industries)[number] => Boolean(item));
  const siblings = topicsInCategory(topic.category).filter((item) => item.slug !== topic.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={topic.category}
        title={topic.h1}
        description={topic.summary}
        crumbs={[
          { label: "Topics", href: "/topics" },
          { label: topic.title, href: `/topics/${topic.slug}` },
        ]}
      >
        <ButtonLink href={contactHref(relatedServices[0]?.title)}>{relatedServices[0] ? `Quote ${relatedServices[0].shortTitle}` : "Discuss this with us"}</ButtonLink>
      </PageHero>

      <Section>
        <div className="max-w-3xl">
          {topic.reviewed ? (
            <div className="mb-7 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4">
              {topic.author?.photo ? (
                <Image
                  src={topic.author.photo}
                  alt={`${topic.author.name}, ${topic.author.role}`}
                  width={48}
                  height={48}
                  unoptimized
                  className="mt-0.5 h-12 w-12 shrink-0 rounded-full object-cover object-[center_22%]"
                />
              ) : null}
              <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                {topic.author ? (
                  <>
                    <span className="text-ink-500">Written by</span>
                    <Link
                      href={topic.author.url ?? "/about"}
                      className="font-semibold text-ink-900 underline underline-offset-4 hover:text-brand-700"
                    >
                      {topic.author.name}
                    </Link>
                    <span className="text-ink-500">· {topic.author.role}</span>
                  </>
                ) : null}
                <time dateTime={topic.reviewed.date} className="text-ink-500">
                  · Last reviewed{" "}
                  {new Date(topic.reviewed.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">{topic.reviewed.note}</p>
              </div>
            </div>
          ) : null}
          {topic.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-ink-500 first:mt-0">
              {paragraph}
            </p>
          ))}
          <h2 className="mt-10 text-lg font-semibold text-ink-900">Where this shows up</h2>
          <div className="mt-4">
            <CheckList items={topic.useCases} />
          </div>
        </div>
      </Section>

      {relatedServices.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Related services"
            title="Work we actually sell under this topic"
            description="Definitions do not ship products. These service pages explain the engagement."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>
      )}

      {relatedIndustries.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Industries" title="Where this software usually lives" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedIndustries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  {industry.name}
                </Link>
                <p className="mt-1 text-sm text-ink-500">{industry.tagline}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {relatedPosts.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Guides" title="Longer reads on this theme" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title={`${topic.title} questions`} />
          <FaqAccordion faqs={topic.faqs} />
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section>
          <SectionHeading eyebrow={topic.category} title="More topics in this group" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {siblings.map((item) => (
              <li key={item.slug}>
                <Link href={`/topics/${item.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-ink-500">{item.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBand
        title={`Ready to build ${topic.title.toLowerCase()} the right way?`}
        description="Tell us the workflow. We will recommend a package, a custom build, or neither."
        primaryHref={contactHref(relatedServices[0]?.title)}
        whatsappMessage={`Hello WordbitX, I want to discuss ${topic.title}.`}
      />
      {topic.reviewed ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: topic.h1,
            description: topic.summary,
            mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/topics/${topic.slug}`) },
            dateModified: topic.reviewed.date,
            author: topic.author
              ? {
                  "@type": "Person",
                  name: topic.author.name,
                  jobTitle: topic.author.role,
                  url: absoluteUrl(topic.author.url ?? "/about"),
                  ...(topic.author.sameAs ? { sameAs: [topic.author.sameAs] } : {}),
                  ...(topic.author.photo ? { image: absoluteUrl(topic.author.photo) } : {}),
                }
              : { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: { "@type": "ImageObject", url: absoluteUrl("/brand/wordbitx-mark.png") },
            },
          }}
        />
      ) : null}
      <FaqSchema faqs={topic.faqs} />
    </>
  );
}
