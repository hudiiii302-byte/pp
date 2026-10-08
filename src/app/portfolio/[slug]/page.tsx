import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, Card } from "@/components/ui";
import { ProjectCard, ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { TechChip } from "@/components/tech-icon";
import { ArrowRight } from "@/components/icons";
import { projects, getProject, portfolioDisclosure } from "@/lib/portfolio";
import { getServices } from "@/lib/services";
import { techCategories } from "@/lib/technologies";
import type { TechItem } from "@/lib/technologies";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: seoTitleAbsolute(project.metaTitle),
    description: project.metaDescription,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/portfolio/${project.slug}`,
      title: project.metaTitle,
      description: project.metaDescription,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

const allTechItems: TechItem[] = techCategories.flatMap((category) => category.items);
const techItemFor = (name: string): TechItem =>
  allTechItems.find((item) => item.name === name) ?? { name, fallback: name.slice(0, 2).toUpperCase() };

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isWordbitxDemo = project.clientLabel === "WordbitX Demo";
  const relatedServices = getServices(project.relatedServices);
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .concat(projects.filter((item) => item.slug !== project.slug && item.category !== project.category))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        crumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title, href: `/portfolio/${project.slug}` },
        ]}
      >
        <dl className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Industry</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.industry}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Project type</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.type}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Engagement</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.engagement}</dd>
          </div>
           <div>
             <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Year</dt>
             <dd className="mt-1.5 text-sm font-medium text-white">{project.year}</dd>
           </div>
         </dl>
         {project.publicStatus ? (
           <p className="mt-3 text-xs text-slate-500">{project.publicStatus}</p>
         ) : null}
      </PageHero>

      <Section>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={900}
            priority
            unoptimized={project.image.startsWith("/")}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow={isWordbitxDemo ? "WordbitX Demo" : "Project Overview"}
              title={isWordbitxDemo ? "What this demo is designed to demonstrate" : "What we were asked to solve"}
            />
            {project.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="mt-4 text-base leading-relaxed text-ink-500">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-semibold text-ink-900">
              {isWordbitxDemo ? "The workflow challenge explored" : "The challenge"}
            </h3>
            <div className="mt-4">
              <CheckList items={project.challenge} />
            </div>

            <h3 className="mt-10 text-xl font-semibold text-ink-900">
              {isWordbitxDemo ? "The product approach demonstrated" : "Our solution"}
            </h3>
            <div className="mt-4">
              <CheckList items={project.solution} />
            </div>

            <h3 className="mt-10 text-xl font-semibold text-ink-900">Key features delivered</h3>
            <div className="mt-4">
              <CheckList items={project.features} columns={2} />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Technologies used</h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {project.technologies.map((tech) => (
                  <TechChip key={tech} item={techItemFor(tech)} />
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-base font-semibold text-ink-900">
                {isWordbitxDemo ? "What the demo demonstrates" : "Outcomes"}
              </h3>
              <div className="mt-4">
                <CheckList items={project.outcomes} />
              </div>
              <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-relaxed text-ink-300">
                {portfolioDisclosure}
              </p>
            </Card>

            <Card>
              <h3 className="text-base font-semibold text-ink-900">Services involved</h3>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {service.shortTitle}
                      <ArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <ButtonLink href="/contact" className="w-full">
                  Discuss a similar build
                </ButtonLink>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Screens & Visuals" title="A closer look at the build" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.gallery.map((shot) => (
            <figure key={shot.src + shot.caption} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="p-5 text-sm text-ink-500">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Related Services" title="Capabilities used in this project" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="More Work" title="Other project profiles" />
          <ButtonLink href="/portfolio" variant="secondary" className="shrink-0">
            All Projects
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want something similar for your business?"
        description="Tell us what you are trying to solve. We will map a comparable approach, scope and timeline for your context."
        whatsappMessage={`Hello WordBitX, I saw the ${project.title} project profile and would like to discuss something similar.`}
      />
    </>
  );
}
