import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, Card } from "@/components/ui";
import { ServiceCard, ProjectCard, PostCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { DemoLaptop } from "@/components/demo-laptop";
import { industries, getIndustry } from "@/lib/industries";
import { demosForIndustry } from "@/lib/demos";
import { getServices } from "@/lib/services";
import { getProject } from "@/lib/portfolio";
import { getPosts } from "@/lib/blog";
import { getTopics } from "@/lib/topics";
import { industryTopicSlugs } from "@/lib/related-content";
import Link from "next/link";
import { contactHref } from "@/lib/site";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry not found" };
  return {
    title: seoTitleAbsolute(industry.metaTitle),
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { url: `/industries/${industry.slug}`, title: industry.metaTitle, description: industry.metaDescription },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedServices = getServices(industry.services);
  const relatedProjects = industry.projects.map(getProject).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedPosts = getPosts(industry.posts);
  const relatedTopics = getTopics(industryTopicSlugs[industry.slug] ?? []);
  const liveDemos = demosForIndustry(industry.slug);

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={industry.h1}
        description={industry.tagline}
        crumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.name, href: `/industries/${industry.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={contactHref(relatedServices[0]?.title)}>Start a project</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Browse services
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Context" title={industry.name} description={industry.summary} />
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-ink-900">Typical modules</h2>
              <div className="mt-4">
                <CheckList items={industry.modules} columns={2} />
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <Image src={industry.image} alt={industry.imageAlt} width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {liveDemos.map((demo) => (
        <DemoLaptop key={demo.id} demo={demo} />
      ))}

      <Section tone="muted">
        <SectionHeading eyebrow="Problems" title={`What ${industry.name.toLowerCase()} teams bring us`} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {industry.problems.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Approach" title="How we usually respond" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {industry.solutions.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {relatedServices.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Services" title="Capabilities used in this industry" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>
      )}

      {relatedProjects.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Work" title="Related project profiles" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      {relatedTopics.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Topics"
            title="Software people search in this industry"
            description="Definitions first. Service pages explain the engagement."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {relatedTopics.map((topic) => (
              <li key={topic.slug}>
                <Link href={`/topics/${topic.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  {topic.title}
                </Link>
                <p className="mt-1 text-sm text-ink-500">{topic.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {relatedPosts.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Reading" title="Related articles" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title={`${industry.name} questions`} />
          <FaqAccordion faqs={industry.faqs} />
        </div>
      </Section>

      <CtaBand
        title={`Talk to us about ${industry.name.toLowerCase()} software`}
        description="Describe the workflow. You will get an honest fit assessment and a scoped plan — not a recycled deck."
        primaryHref={contactHref(relatedServices[0]?.title)}
        whatsappMessage={`Hello WordbitX, I want to discuss ${industry.name} software.`}
      />
      <FaqSchema faqs={industry.faqs} />
    </>
  );
}
