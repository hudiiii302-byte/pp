import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink, Card } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { ArrowRight } from "@/components/icons";
import { processFaqs, processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Software Development Process | Discovery to Launch",
  description:
    "How WordbitX delivers software: discovery, written scope, design, sprint development, QA, launch and support. You own the repo. Overlap hours for USA, UK, UAE, Canada and Australia.",
  alternates: { canonical: "/process" },
  keywords: [
    "software development process",
    "agile software development company",
    "how we work software agency",
    "software delivery process",
    "hire agile development team",
    "software company discovery process",
    "offshore software development process",
  ],
  openGraph: {
    url: "/process",
    title: "Software Development Process",
    description:
      "Seven stages from discovery to support. Work starts after a written scope. Code, hosting and analytics stay in your accounts.",
  },
};

const collaboration = [
  {
    title: "Overlap hours",
    text: "Pakistan base, scheduled overlap with USA, UK, UAE, Canada and Australia. Weekly demo, not a monthly surprise.",
  },
  {
    title: "Your Git, your hosting",
    text: "Repositories, Vercel/cloud, domains and ad accounts are yours from the start. We do not trap the product in a private org.",
  },
  {
    title: "Staging you can click",
    text: "Every sprint has a URL. You review working software, not a slide that claims it is 80% done.",
  },
  {
    title: "One decision log",
    text: "We use your board if you have one — Linear, Jira, Notion or GitHub Issues. Decisions are written so they survive a new hire.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A software delivery process you can inspect at every stage"
        description="Discovery, strategy, design, development, testing, launch and support. Development does not start until milestones and price are signed. That is how WordbitX runs websites, apps and business systems for teams worldwide."
        crumbs={[{ label: "Process", href: "/process" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact?intent=call">Book a discovery call</ButtonLink>
          <ButtonLink href="/pricing" variant="ghost">
            See cost ranges
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Seven stages"
          title="Software delivery from discovery to launch"
          description="Each stage has an output you review before the next begins. The same sequence sits on the homepage — this page is the full version."
        />
        <ol className="mt-10 grid gap-4 lg:grid-cols-2">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="hover-sheen overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-bold tracking-[0.16em] text-brand-500">{step.step}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
              <p className="mt-4 text-sm font-medium text-ink-900">You leave this stage with: {step.output}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Collaboration"
          title="How a Pakistan software team works with USA, UK and Gulf clients"
          description="No fake foreign office. Overlap hours, a staging URL and a repository with your name on it."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {collaboration.map((item) => (
            <Card key={item.title} className="hover-sheen">
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-500">
          Market pages:{" "}
          <Link href="/global" className="font-medium text-brand-700 underline-offset-4 hover:underline">
            Pakistan, USA, UK, UAE, Canada, Australia
          </Link>
          . Stack:{" "}
          <Link href="/technologies" className="font-medium text-brand-700 underline-offset-4 hover:underline">
            technologies we actually ship
          </Link>
          .
        </p>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Next"
            title="Price and a first conversation"
            description="Process without a number is theatre. Starting ranges live on the pricing page. A 20-minute call is enough to know if we should write a scope."
          />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/pricing">Software development cost</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send a brief
            </ButtonLink>
          </div>
        </div>
        <Link
          href="/contact?intent=call"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
        >
          Prefer a call first
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Questions about how projects run" />
          <FaqAccordion faqs={processFaqs} />
        </div>
      </Section>

      <CtaBand
        title="If the process fits, send the product — not a novel"
        description="What you are building, who uses it, deadline. We reply with questions or a call, then a written plan."
      />
      <FaqSchema faqs={processFaqs} />
    </>
  );
}
