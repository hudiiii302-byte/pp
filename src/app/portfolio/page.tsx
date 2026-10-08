import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { DemosSection } from "@/components/demos-section";
import { CtaBand } from "@/components/cta-band";
import { projects, projectCategories, portfolioDisclosure } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Web, Mobile & eCommerce Projects",
  description:
    "Explore WordBitX project profiles: custom POS platforms, delivery apps, Shopify storefronts, booking portals, AI document processing and marketplace websites.",
  alternates: { canonical: "/portfolio" },
  keywords: ["software development portfolio", "web development projects", "mobile app case studies", "WordBitX portfolio"],
  openGraph: {
    url: "/portfolio",
    title: "WordBitX Portfolio | Project Profiles",
    description:
      "Project profiles covering software platforms, mobile applications, eCommerce storefronts, AI automation and marketplace websites.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Project Profiles Across Software, Web, Mobile and Commerce"
        description="Start with the live demo websites — open any one, then tell us if you want something similar. Written project profiles sit below."
        crumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#demos">See live demos</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Start a Similar Project
          </ButtonLink>
        </div>
      </PageHero>

      <DemosSection />

      <Section>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-base font-semibold text-ink-900">A note on confidentiality</h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-ink-500">{portfolioDisclosure}</p>
        </div>

        <div className="mt-10">
          <PortfolioExplorer
            categories={projectCategories as unknown as string[]}
            projects={projects.map((project) => ({
              slug: project.slug,
              title: project.title,
              summary: project.summary,
              category: project.category,
              industry: project.industry,
              image: project.image,
              imageAlt: project.imageAlt,
              technologies: project.technologies,
              clientLabel: project.clientLabel,
            }))}
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="How We Document Work"
          title="What you will find in every project profile"
          description="We publish the parts that help you evaluate capability, and keep commercially sensitive detail private."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Context", text: "Industry, engagement type and the operational problem behind the build." },
            { title: "Architecture", text: "The technical decisions and why they suited the constraints." },
            { title: "Features", text: "The functionality actually delivered, not a wish list." },
            { title: "Outcomes", text: "Observable changes in how the business operates after launch." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a project like these in mind?"
        description="Send us the problem you are solving. We will outline an approach, the likely architecture and a milestone plan."
      />
    </>
  );
}
