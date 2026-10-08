import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, Card } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { MailIcon, PhoneIcon, GlobeIcon, WhatsAppIcon, ClockIcon, CheckIcon, SparkIcon } from "@/components/icons";
import { resolveServiceOption, serviceNames } from "@/lib/services";
import { siteConfig, usWhatsappLink, whatsappLink } from "@/lib/site";
import { getJob } from "@/lib/careers";
import { getHireRole } from "@/lib/hire-roles";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact | Get a Project Quote",
  description:
    "Contact WordbitX for websites, mobile apps, custom software, eCommerce, SEO and digital marketing. Email info@wordbitxtech.com or WhatsApp +92 325 1888841.",
  alternates: { canonical: "/contact" },
  keywords: ["contact WordbitX", "software development quote", "hire app developers", "web development enquiry"],
  openGraph: {
    url: "/contact",
    title: "Contact | Get a Project Quote",
    description:
      "Send your project brief and get an honest assessment, scoped plan and realistic timeline from the WordbitX team.",
  },
};

const contactFaqs: Faq[] = [
  {
    question: "How quickly will we hear back?",
    answer:
      "Enquiries submitted on business days are usually answered the same day, and always within one business day. Urgent requests are fastest on WhatsApp.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We review your brief, then reply with clarifying questions or a proposed call time. After a 30-minute discovery conversation you receive a written scope with milestones, deliverables and pricing.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We are happy to sign your NDA before discovery, or provide ours. Your project information is never shared or used in public materials without written permission.",
  },
  {
    question: "Do you work with small budgets?",
    answer:
      "We work with a range of budgets, and we are honest when a budget cannot deliver a scope safely. In those cases we suggest a smaller phase-one release rather than a compromised full build.",
  },
];

type PageProps = {
  searchParams: Promise<{ service?: string; society?: string; intent?: string; role?: string }>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const { service, society, intent, role } = await searchParams;
  const hireNeed = intent === "hire" && role ? getHireRole(role) : undefined;
  const isHire = Boolean(hireNeed);
  const job = !isHire && role ? getJob(role) : undefined;
  const isCall = intent === "call";
  const isJob = intent === "job" || Boolean(job);
  const defaultService =
    (isHire && hireNeed ? hireNeed.label : undefined) ??
    (isJob && job ? `Job application: ${job.title}` : undefined) ??
    (isCall ? "Discovery call" : undefined) ??
    resolveServiceOption(service) ??
    (society ? "Real Estate & Property Portals" : undefined);
  const defaultMessage = isHire
    ? `I want to hire: ${hireNeed?.label}.\nWhat we need built:\nTimeline:\n`
    : isJob
      ? `I am applying for ${job?.title ?? "an open role"}.\nExperience / stack:\nPortfolio, GitHub or Figma:\nNotice period:\n`
      : isCall
        ? "I would like a 20-minute discovery call.\nTimezone:\nTwo windows that work this week:\nWhat we should cover:\n"
        : society
          ? `We would like to discuss a property portal and inventory management system configured for ${society}. Please share your proposed architecture, pricing and timeline.`
          : undefined;
  const formServices =
    isHire && hireNeed && !serviceNames.includes(hireNeed.label)
      ? [hireNeed.label, ...serviceNames]
      : isJob && job
        ? [`Job application: ${job.title}`, ...serviceNames]
        : serviceNames;

  return (
    <>
      <PageHero
        eyebrow={isHire || isJob ? "Hiring" : isCall ? "Discovery" : "Contact Us"}
        title={
          isHire
            ? hireNeed?.label ?? "Hire the WordbitX team"
            : isJob
              ? "Apply for a WordbitX software job"
              : isCall
                ? "Book a 20-minute discovery call"
                : "Tell Us About Your Project"
        }
        description={
          isHire
            ? "This is a hiring enquiry for a named role. Tell us the brief and timeline — not a services catalogue click."
            : isJob
              ? "Hiring this week in Pakistan. Send work you have shipped — CV, GitHub, staging or Figma."
              : isCall
                ? "No Calendly embed. Tell us two windows and your timezone. We confirm on WhatsApp or email the same business day when we can."
                : "Share what you are building and what success looks like. You will get a considered response with an approach, timeline and realistic budget range — not a generic brochure."
        }
        crumbs={[
          ...(isHire || isJob ? [{ label: "Hiring", href: "/careers" as const }] : []),
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow={isHire || isJob ? "Hiring" : isCall ? "Discovery call" : "Project Inquiry"}
              title={
                isHire
                  ? hireNeed?.label ?? "Hiring enquiry"
                  : isJob
                    ? `Apply: ${job?.title ?? "open role"}`
                    : isCall
                      ? "Request a 20-minute discovery call"
                      : society
                        ? `Enquiry regarding ${society}`
                        : "Send your brief"
              }
              description={
                isHire
                  ? "The role is already selected. Add what you need built and a deadline."
                  : isJob
                    ? "Paste a GitHub, staging URL or Figma. Same-week conversations when the fit is real."
                    : isCall
                      ? "Add your timezone and two windows. We confirm by email or WhatsApp — no fake calendar widgets."
                      : society
                        ? `We have pre-selected Real Estate Portals and pre-filled your enquiry for ${society}. Add any specific requirements below.`
                        : "The more context you give, the more useful our first reply will be."
              }
              as="h2"
            />
            <div className="mt-8">
              <ContactForm
                serviceOptions={formServices}
                defaultService={defaultService}
                defaultMessage={defaultMessage}
              />
            </div>
          </div>

          <aside className="space-y-6">
            <Card>
              <h2 className="text-lg font-semibold text-ink-900">Direct contact</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <MailIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink-300">Email</span>
                      <span className="font-medium text-ink-900 group-hover:text-brand-700">{siteConfig.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <PhoneIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink-300">Phone / WhatsApp (Pakistan)</span>
                      <span className="font-medium text-ink-900 group-hover:text-brand-700">{siteConfig.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                      <GlobeIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink-300">USA &amp; International</span>
                      <span className="font-medium text-ink-900">{siteConfig.usPhoneDisplay}</span>
                      <span className="mt-1 flex flex-wrap gap-x-3 text-xs font-semibold">
                        <a
                          href={usWhatsappLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#128C7E] hover:text-[#0d6e62]"
                        >
                          WhatsApp
                        </a>
                        <a href={`tel:${siteConfig.usPhoneRaw}`} className="text-brand-600 hover:text-brand-700">
                          Call
                        </a>
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <GlobeIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink-300">Website</span>
                      <span className="font-medium text-ink-900">{siteConfig.domain}</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <ClockIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink-300">Working hours</span>
                      <span className="font-medium text-ink-900">Mon–Sat, 9:00–19:00 PKT</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
                      <SparkIcon className="h-4.5 w-4.5" />
                      <span className="absolute right-1 top-1 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
                      </span>
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-brand-700">
                        Online Availability
                      </span>
                      <span className="font-semibold text-ink-900">24/7 — Serving Clients Worldwide</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 grid gap-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" /> WhatsApp Pakistan
                </a>
                <a
                  href={usWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#128C7E] transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" /> WhatsApp USA
                </a>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold text-ink-900">What to expect</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "A reply within one business day",
                  "A 30-minute discovery call, no pressure",
                  "A written scope with milestones and pricing",
                  "Honest advice if a smaller solution fits better",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold text-ink-900">Address</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {siteConfig.addressDisplay}. We deliver remotely to clients in the UK, US, UAE, Australia and Canada,
                with overlap hours for calls and demos.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Based in the city?{" "}
                <Link href="/software-house/lahore" className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-600">
                  How we work as a software house in Lahore
                </Link>
                .
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Before you send your brief" />
          <FaqAccordion faqs={contactFaqs} />
        </div>
      </Section>

      <FaqSchema faqs={contactFaqs} />
    </>
  );
}
