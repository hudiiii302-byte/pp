import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, JobPostingSchema } from "@/components/jsonld";
import { ArrowRight } from "@/components/icons";
import { careersFaqs, jobs } from "@/lib/careers";
import { hireEnquiryHref, hireRoleGroups } from "@/lib/hire-roles";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire Developers, Designers & Growth Teams",
  description:
    "Hire WordbitX for websites, apps, Shopify, POS, SEO, ads, Amazon stores and design. Open software jobs in Pakistan this week — apply with work you have shipped.",
  alternates: { canonical: "/careers" },
  keywords: [
    "hire developers",
    "hire software developers Pakistan",
    "hire Shopify developers",
    "hire Flutter developers",
    "hire SEO specialists",
    "hire UI UX designers",
    "software jobs Pakistan",
    "WordbitX careers",
  ],
  openGraph: {
    url: "/careers",
    title: "Hire Developers, Designers & Growth Teams",
    description:
      "Staff a named team across software, marketplace, SEO and ads — or apply to open roles this week.",
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="We're hiring"
        title="Hire the team — or join it"
        description="Every service we ship is staffable: websites, apps, stores, SEO, ads and design. Candidates apply to the four open jobs below. Written scope for clients. No resume farm."
        crumbs={[{ label: "Hiring", href: "/careers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#hire-developers">Browse what you can hire</ButtonLink>
          <ButtonLink href="#open-roles" variant="ghost">
            Open jobs this week
          </ButtonLink>
        </div>
      </PageHero>

      <Section id="hire-developers">
        <SectionHeading
          title="What you can hire"
          description="Pick a posting. It opens a hiring enquiry for that role — not a services page."
        />
        <p className="mt-4 text-sm leading-relaxed text-ink-500">
          Looking for a dedicated developer or a small team by stack (React, Next.js, Laravel, Flutter…) or by your
          market (USA, UK, UAE, Canada, Australia)?{" "}
          <Link href="/hire-developers" className="font-semibold text-brand-700 hover:text-brand-600">
            Browse the Hire Developers pages →
          </Link>
        </p>
        <div className="mt-12 space-y-12">
          {hireRoleGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-900">{group.title}</h3>
              <ul className="mt-3 grid sm:grid-cols-2">
                {group.roles.map((item) => (
                  <li key={item.slug}>
                    <Link href={hireEnquiryHref(item.slug)} className="hire-posting">
                      <span>{item.label}</span>
                      <ArrowRight className="hire-posting-arrow h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" id="open-roles">
        <SectionHeading
          eyebrow={`${jobs.length} open jobs`}
          title="Apply this week"
          description="Lahore studio plus remote inside Pakistan. These four are hiring now — not visa sponsorships."
        />
        <ul className="mt-10">
          {jobs.map((job) => (
            <li key={job.slug} id={job.slug}>
              <Link href={`/contact?intent=job&role=${job.slug}`} className="hire-posting hire-posting-job">
                <span>
                  <span className="block text-base font-semibold">{job.title}</span>
                  <span className="mt-1 block text-sm text-ink-500">{job.location}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold">
                  Apply
                  <ArrowRight className="hire-posting-arrow h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Hiring at WordbitX"
            description="If a job is filled we take the posting down. Client work still goes through a written scope."
          />
          <div>
            <FaqAccordion faqs={careersFaqs} />
            <Link
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi WordbitX, I want to apply for a role.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
            >
              WhatsApp a hiring note
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Need a specialist on a project, not a job listing?"
        description="Use a posting above to open a hiring enquiry. Candidates use Apply on the four open roles."
        primaryLabel="Client enquiry"
        primaryHref="/contact"
      />
      <FaqSchema faqs={careersFaqs} />
      <JobPostingSchema />
    </>
  );
}
