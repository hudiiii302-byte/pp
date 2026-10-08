import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { ArrowRight } from "@/components/icons";
import { MegaServiceIcon } from "@/components/mega-service-icon";
import { services, megaMenuGroups } from "@/lib/services";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: "Software Development Services | Web, Apps, SEO",
  description:
    "WordbitX services: websites, web apps, Shopify, WordPress, Flutter, Android, iOS, custom software, POS, SaaS, SEO, Google Ads, Meta ads and IT consulting.",
  alternates: { canonical: "/services" },
  keywords: [
    "software development services",
    "website development company",
    "Flutter app development",
    "Shopify development",
    "WooCommerce development",
    "SEO services",
    "local SEO Lahore",
    "Google Ads management",
    "Amazon store setup",
  ],
  openGraph: {
    url: "/services",
    title: "Software & Digital Services",
    description:
      "Web, apps, marketplaces, SEO, ads and IT services — each with a dedicated page, process and deliverables.",
  },
};

const servicesFaqs: Faq[] = [
  {
    question: "Can we combine several services in one engagement?",
    answer:
      "Yes, and most clients do. A typical programme might combine UI/UX design, web development and SEO, or mobile app development with cloud infrastructure. One plan, one point of contact, one delivery timeline.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Fixed-price milestones for defined scopes, and monthly retainers for ongoing work such as marketing, SEO or maintenance. Starting ranges live on the software development cost page. Every proposal lists deliverables per milestone so you always know what you are paying for.",
  },
  {
    question: "What if we are not sure which service we need?",
    answer:
      "Describe the business problem rather than the solution. We run a short discovery call, and if a smaller or cheaper approach solves it, we will tell you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Software & Digital Services Built Around Business Outcomes"
        description="Sixty focused service pages across websites, apps, custom software, marketplaces, SEO, paid ads and IT. Each page explains the process, deliverables, technologies and who it is for."
        crumbs={[{ label: "Services", href: "/services" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
          <ButtonLink href="/pricing" variant="ghost">
            Pricing ranges
          </ButtonLink>
        </div>
        <p className="mt-5 max-w-2xl text-sm text-slate-300">
          Delivered from Lahore to clients in Pakistan, the USA, UK, UAE, Canada and Australia. For local engagements, see how we work as a{" "}
          <Link href="/software-house/lahore" className="font-medium text-white underline underline-offset-4 hover:text-brand-300">
            software house in Lahore
          </Link>
          .
        </p>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Full Service Range"
          title="Every service, with a dedicated page and a defined process"
          description="Click any card to see the full breakdown: who it is for, what problems it solves, what you receive and how we deliver it."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} showImage />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="How Services Fit Together"
          title="Grouped by the outcome you are trying to reach"
          description="Most programmes combine one build service with one growth or infrastructure service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {megaMenuGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-ink-900">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.slugs.map((slug) => {
                  const service = services.find((entry) => entry.slug === slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        <MegaServiceIcon slug={service.slug} className="h-4.5 w-4.5 text-brand-500" />
                        <span className="flex-1">{service.shortTitle}</span>
                        <ArrowRight className="h-4 w-4 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src={"/brand/team/about-studio-floor.jpg"}
              alt="WordBitX engineering team collaborating on a client project"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Engagement Models"
              title="Work with us the way that suits your team"
              description="Three ways to engage, all with the same delivery standards and reporting."
            />
            <div className="mt-8 space-y-4">
              {[
                { title: "Project delivery", text: "Fixed scope and milestones for a defined product, from discovery to launch." },
                { title: "Dedicated team", text: "An allocated squad working as an extension of your in-house team, billed monthly." },
                { title: "Retainer & support", text: "Continuous improvement, maintenance, marketing or SEO under a monthly agreement." },
              ].map((model) => (
                <div key={model.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-ink-900">{model.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{model.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <CheckList
                items={[
                  "Written scope before any development starts",
                  "Weekly demos and a single decision channel",
                  "Full ownership of code, accounts and data",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions about working with WordBitX" />
          <FaqAccordion faqs={servicesFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Tell us the problem — we will recommend the right service"
        description="Send a short brief and you will get an honest assessment, a suggested approach and a milestone plan. If a smaller solution works, we will say so."
      />
      <FaqSchema faqs={servicesFaqs} />
    </>
  );
}
