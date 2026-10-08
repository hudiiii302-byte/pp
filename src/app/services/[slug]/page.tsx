import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, Card, IconTile } from "@/components/ui";
import { ServiceCard, PostCard, ProjectCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, ServiceSchema } from "@/components/jsonld";
import { TechChip } from "@/components/tech-icon";
import { CheckIcon, ArrowRight } from "@/components/icons";
import { MegaServiceIcon } from "@/components/mega-service-icon";
import { getService, getServices, serviceSlugs } from "@/lib/services";
import { seoTitleAbsolute } from "@/lib/seo-title";
import { contactHref } from "@/lib/site";
import { projectsForService } from "@/lib/portfolio";
import { getPosts } from "@/lib/blog";
import { techCategories } from "@/lib/technologies";
import type { TechItem } from "@/lib/technologies";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: seoTitleAbsolute(service.metaTitle),
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "article",
      url: `/services/${service.slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

const allTechItems: TechItem[] = techCategories.flatMap((category) => category.items);

function techItemFor(name: string): TechItem {
  return allTechItems.find((item) => item.name === name) ?? { name, fallback: name.slice(0, 2).toUpperCase() };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getServices(service.related);
  const relatedProjects = projectsForService(service.slug, 3);
  const relatedPosts = getPosts(service.relatedPosts);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.h1}
        description={service.tagline}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={contactHref(service.title)}>Discuss Your Project</ButtonLink>
          <ButtonLink href="#process" variant="ghost">
            See Our Process
          </ButtonLink>
        </div>
      </PageHero>

      {/* OVERVIEW + VISUAL */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <IconTile size="lg">
              <MegaServiceIcon slug={service.slug} className="h-7 w-7" />
            </IconTile>
            <h2 className="mt-6 text-2xl font-semibold text-ink-900 sm:text-3xl">
              {service.title} services from WordbitX
            </h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-500">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-ink-900">Who needs this service</h3>
              <div className="mt-4">
                <CheckList items={service.whoNeeds} />
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 lg:sticky lg:top-24">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={800}
              priority
              unoptimized={service.image.startsWith("/")}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PROBLEMS */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Problems We Solve"
          title={`What ${service.shortTitle.toLowerCase()} fixes`}
          description="These are the recurring issues clients bring us before this work starts."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {service.problems.map((problem, index) => (
            <Card key={problem.title}>
              <span className="text-sm font-bold tracking-[0.16em] text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{problem.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* BENEFITS + OFFERINGS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Benefits" title="What changes for your business" />
            <div className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <CheckIcon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">{benefit.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="What We Offer" title={`Our ${service.shortTitle.toLowerCase()} offering`} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.offerings.map((offering) => (
                <div key={offering.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-ink-900">{offering.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{offering.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50/60 p-6">
              <h3 className="text-base font-semibold text-ink-900">Features &amp; deliverables</h3>
              <div className="mt-4">
                <CheckList items={service.deliverables} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="dark" id="process">
        <SectionHeading
          tone="dark"
          eyebrow="Our Process"
          title={`How we deliver ${service.shortTitle.toLowerCase()}`}
          description="Each stage produces something you can review, so there are no surprises at handover."
          align="center"
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((step) => (
            <li key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="text-sm font-bold tracking-[0.16em] text-brand-300">{step.step}</span>
              <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* TECHNOLOGIES */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Technologies & Tools"
            title="The stack we use for this service"
            description="Chosen per project based on your team, budget and long-term maintenance needs."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {service.techStack.map((tech) => (
              <TechChip key={tech} item={techItemFor(tech)} />
            ))}
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why WordbitX"
          title={`Why choose us for ${service.shortTitle.toLowerCase()}`}
          description="Practical commitments, not slogans."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.whyUs.map((point) => (
            <Card key={point.title}>
              <h3 className="text-base font-semibold text-ink-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <Section>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Related Work"
              title="Projects involving this service"
              description="Detailed profiles of the scope, architecture and outcomes."
            />
            <ButtonLink href="/portfolio" variant="secondary" className="shrink-0">
              All Projects
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.shortTitle} questions, answered`}
            description="Straight answers to what clients ask before starting this type of project."
          />
          <div>
            <FaqAccordion faqs={service.faqs} />
            <div className="mt-6">
              <ButtonLink href={contactHref(service.title)}>Ask us anything else</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* RELATED SERVICES + POSTS */}
      <Section>
        <SectionHeading
          eyebrow="Related Services"
          title="Services that pair well with this one"
          description="Programmes usually combine two or three of these."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <>
            <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Further Reading" title="Guides related to this service" />
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                All articles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Section>

      <CtaBand
        title={`Ready to start your ${service.shortTitle.toLowerCase()} project?`}
        description={`Send us your requirements and we will reply with an approach, milestone plan and realistic timeline for ${service.title.toLowerCase()}.`}
        primaryHref={contactHref(service.title)}
        whatsappMessage={`Hello WordbitX, I am interested in ${service.title}.`}
      />

      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`/services/${service.slug}`}
        serviceType={service.primaryKeyword}
      />
      <FaqSchema faqs={service.faqs} />
    </>
  );
}


