import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink, CheckList, IconTile } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { TechChip } from "@/components/tech-icon";
import { Avatar } from "@/components/avatar";
import { CopyEmail } from "@/components/copy-email";
import { SparkIcon, ShieldIcon, LayersIcon, CheckIcon, MailIcon, WhatsAppIcon, SocialIcon, ArrowRight, VerifiedBadge } from "@/components/icons";
import { JsonLd } from "@/components/jsonld";
import { marqueeTech } from "@/lib/technologies";
import { media } from "@/lib/media";
import { siteConfig, whatsappLink, absoluteUrl } from "@/lib/site";
import { founder, founderMessage, teamValues } from "@/lib/team";

export const metadata: Metadata = {
  title: "About | Software Company in Pakistan",
  description:
    "Pakistan-based software company founded in 2021. WordbitX builds websites, apps and business systems for clients in Pakistan, the US, UK, UAE and Australia.",
  alternates: { canonical: "/about" },
  keywords: [
    "about WordbitX",
    "software development company Pakistan",
    "Awais Malick WordbitX",
    "software company Lahore",
  ],
  openGraph: {
    url: "/about",
    title: "About WordbitX | Software Company in Pakistan",
    description:
      "Founded in 2021 in Pakistan. Custom websites, apps and business software for clients worldwide — you own the code.",
  },
};

const facts = [
  { label: "Founded", value: "2021" },
  { label: "Studio", value: "Pakistan" },
  { label: "Serves", value: "PK, USA, UK, UAE, CA, AU" },
  { label: "Code & accounts", value: "Yours" },
];

const whyChoose = [
  { title: "One accountable team", text: "Design, engineering and delivery under one plan and one named contact — not three agencies blaming each other." },
  { title: "Written scope first", text: "Development starts after a document you can actually read: milestones, deliverables and a timeline." },
  { title: "Full code ownership", text: "Source code, repositories, hosting and analytics accounts are yours. No licence traps." },
  { title: "Industry-shaped products", text: "Property files, batch stock, fee vouchers and offline billing are problems we have already solved." },
  { title: "Performance as a requirement", text: "Speed and Core Web Vitals are in the sprint, not a cleanup billed after launch." },
  { title: "Support after go-live", text: "Stabilisation, monitoring and a prioritised improvement backlog — not a silent handoff." },
];

const approach = [
  { title: "Understand the business first", text: "Before architecture, we learn how money moves through your operation and where the friction sits." },
  { title: "Ship the smallest useful release", text: "The version that creates value soonest, then we extend it with real usage — not a 14-month spec." },
  { title: "Build so someone else could take over", text: "Typed code, reviews, tests on critical paths and documentation another team could pick up." },
  { title: "Measure after launch", text: "Analytics, monitoring and an honest report on what worked and what needs rework." },
];

const whatWeBuild = [
  { title: "Custom software", href: "/services/custom-software-development", text: "POS, CRM/ERP and internal tools around your workflow." },
  { title: "Websites & web apps", href: "/services/web-development", text: "Fast, crawlable sites your team can actually run." },
  { title: "Mobile apps", href: "/services/flutter-app-development", text: "Flutter, Android and iOS — in your store accounts." },
  { title: "E-commerce", href: "/services/ecommerce-shopify", text: "Shopify and WooCommerce with the operations behind the storefront." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WordbitX"
        title="Software built around how your business actually works"
        description="Founded in 2021 in Pakistan. We design and build websites, apps and business systems for businesses worldwide — with written scope, weekly demos, and code that is yours."
        crumbs={[{ label: "About Us", href: "/about" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Work With Us</ButtonLink>
          <ButtonLink href="/portfolio" variant="ghost">
            View Our Work
          </ButtonLink>
          <ButtonLink href="/careers" variant="ghost">
            We are hiring
          </ButtonLink>
        </div>
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">{fact.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* WHO WE ARE */}
      <Section id="who-we-are">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A delivery team in Pakistan, working as if we sit in your office"
              description="WordbitX is a software company — not a reseller of templates, and not a collection of freelancers under one logo. We build websites, mobile apps, custom business software and commerce stores, then we stay on after launch."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Clients usually come to us when operations have outgrown spreadsheets, or when the current site no longer
              matches what the company actually does. They need one partner for strategy, design and engineering — not
              three vendors passing blame.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We work remotely with businesses across Pakistan, the USA, UK, UAE, Canada and Australia. Overlap hours,
              weekly demos and a shared board mean you see progress every week, not only at the end.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              The team is based in Lahore. If you are looking for a{" "}
              <Link href="/software-house/lahore" className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-600">
                software house in Lahore
              </Link>{" "}
              and want to know how we scope, price and hand over work locally, that page covers it in detail.
            </p>
            <div className="mt-8">
              <CheckList
                columns={2}
                items={[
                  "Full ownership of code and accounts",
                  "Written scope before development",
                  "Weekly demos, not end-of-project surprises",
                  "Post-launch support and maintenance",
                ]}
              />
            </div>
          </div>
          <div className="image-sheen relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_30px_60px_-38px_rgba(5,13,33,0.35)]">
            <Image
              src={media.whoWeAreStudio}
              alt="Illustration of a product team at work in a studio"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_30%] transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-navy-950/65 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-300">Pakistan studio</p>
              <p className="mt-1 text-xs text-white">Lahore, Pakistan — where the work gets built.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <Section tone="dark" id="mission-vision">
        <SectionHeading
          tone="dark"
          eyebrow="Mission & Vision"
          title="What we are working towards"
          description="Two statements plus a promise we will not dress up with invented numbers."
          align="center"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <IconTile tone="dark">
              <SparkIcon className="h-6 w-6" />
            </IconTile>
            <h3 className="mt-5 text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Make well-engineered software reachable for growing businesses — fast, maintainable, and aligned with how
              the operation actually runs, without enterprise budgets or enterprise delays.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <IconTile tone="dark">
              <LayersIcon className="h-6 w-6" />
            </IconTile>
            <h3 className="mt-5 text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Be the technology partner businesses keep for years: work from Pakistan that stands next to any
              international team on quality, communication and reliability after launch.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <IconTile tone="dark">
              <ShieldIcon className="h-6 w-6" />
            </IconTile>
            <h3 className="mt-5 text-xl font-semibold text-white">Our Promise</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Clear scope, honest advice, working software every sprint, and support after go-live. No invented
              statistics, no borrowed case studies, no guarantees we cannot control.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY WORDBITX */}
      <Section id="why-choose-us">
        <SectionHeading
          eyebrow="How we work with you"
          title="What you can hold us to"
          description="Practical commitments on every engagement — not slogans, and not quotes we invented."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* THIRD-PARTY VERIFICATION
          Only what the profile actually publishes. Clutch shows no reviews for
          us yet, so there is no rating, no stars and no review count here. The
          day there are real reviews we will show the real number. */}
      <Section tone="muted" id="verified">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <SectionHeading
            eyebrow="Independently listed"
            title="Checkable somewhere other than our own website"
            description="Anybody can write their own company size and founding year on their own About page. These are the same facts, published on a third-party B2B directory that verifies them."
          />
          <div className="grid gap-5">
            {siteConfig.directories.map((directory) => (
              <div key={directory.href} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink-900">{directory.label}</h3>
                  <a
                    href={directory.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    View our profile
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{directory.blurb}</p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  {directory.facts.map((fact) => (
                    <div key={fact} className="flex gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-ink-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-ink-400">
                  We have no client reviews on this profile yet, so we are not showing a rating. When there are real
                  reviews, the real number will appear here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section tone="muted" id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="A note from the founder"
          description="Why WordbitX exists, and the standard Awais Malick still holds on every project."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_40px_80px_-50px_rgba(5,13,33,0.7)]">
              {/* Name sits over the portrait so the card reads as one object
                  rather than a photo with a caption bolted underneath. */}
              <div className="relative">
                <Avatar
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.designation}`}
                  initials={founder.initials}
                  className="aspect-[4/5] w-full"
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/90 via-navy-950/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
                    Founder
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold text-white">{founder.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-300">{founder.designation}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-ink-500">{founder.bio}</p>

                {/* Fixed three-column grid, not flex-wrap: inside a 22rem card
                    the labelled buttons used to spill onto a second line. */}
                {/* Inline pills, as before — but a fixed 3-column grid rather
                    than flex-wrap, which used to drop WhatsApp onto its own
                    line inside the 22rem card. */}
                <div className="mt-5 grid grid-cols-3 gap-1.5">
                  <a
                    href={founder.linkedin ?? "https://www.linkedin.com/company/wordbitx"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0A66C2] px-2 py-2.5 text-[0.7rem] font-semibold text-white shadow-[0_8px_20px_-10px_rgba(10,102,194,0.9)] transition-transform hover:-translate-y-0.5"
                  >
                    <SocialIcon icon="linkedin" className="h-3.5 w-3.5 shrink-0" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label={`Email ${founder.name} at ${siteConfig.email}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-2 py-2.5 text-[0.7rem] font-semibold text-ink-900 transition-colors hover:border-brand-400 hover:text-brand-700"
                  >
                    <MailIcon className="h-3.5 w-3.5 shrink-0" />
                    Email
                  </a>
                  <a
                    href={whatsappLink("Hello Awais, I would like to discuss a project with WordbitX.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Message ${founder.name} on WhatsApp`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-2 py-2.5 text-[0.7rem] font-semibold text-ink-900 transition-colors hover:border-brand-400 hover:text-brand-700"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>

                <CopyEmail email={siteConfig.email} className="mt-2.5" />
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
              <span
                aria-hidden="true"
                className="absolute left-7 top-4 select-none font-serif text-[5rem] leading-none text-brand-100"
              >
                &ldquo;
              </span>
              <div className="relative pt-8">
                {founderMessage.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-[1.8] text-ink-700 first:mt-0">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full bg-navy-900">
                    {founder.photo ? (
                      <Image
                        src={founder.photo}
                        alt=""
                        fill
                        unoptimized
                        sizes="44px"
                        className="object-cover object-[center_15%]"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                        {founder.initials}
                      </span>
                    )}
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                      {founder.name}
                      <a
                        href={founder.linkedin ?? "https://www.linkedin.com/company/wordbitx"}
                        target="_blank"
                        rel="noopener noreferrer me"
                        title={`${founder.name} — view profile on LinkedIn`}
                        aria-label={`${founder.name} — view profile on LinkedIn`}
                        className="text-[#0A66C2] transition-transform hover:scale-110"
                      >
                        <VerifiedBadge className="h-4 w-4" />
                      </a>
                    </span>
                    <span className="block text-xs text-ink-500">{founder.designation}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {teamValues.map((value) => (
                <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h4 className="text-sm font-semibold text-ink-900">{value.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="image-sheen relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src={media.aboutProcess}
              alt="Illustration of a delivery team at work in a studio"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <SectionHeading eyebrow="How We Work" title="A repeatable path so projects stay predictable" />
            <div className="mt-8 space-y-4">
              {approach.map((item, index) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TECHNOLOGY */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Technology"
            title="Boring where it counts, modern where it pays"
            description="Tools are chosen by maintenance cost, hiring pool and fit — not by what is trending this quarter."
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {marqueeTech.slice(0, 9).map((tech) => (
                <TechChip key={tech.name} item={tech} />
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-ink-900">Engineering rules</h3>
              <div className="mt-4">
                <CheckList
                  items={[
                    "TypeScript by default for anything that will be maintained",
                    "Server rendering or static generation for anything that must rank",
                    "Automated pipelines instead of manual deployments",
                    "Monitoring and backups before launch, not after an incident",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE BUILD */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we build"
            title="Start with the problem, not a catalogue"
            description="These are the products we ship most. The full list lives on Services."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0">
            All Services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whatWeBuild.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_24px_50px_-36px_rgba(5,13,33,0.45)]"
            >
              <span>
                <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="If this sounds like how you want to work, start with a conversation"
        description="Share the problem, the constraint and the budget range. You will get an honest read on whether we are the right team — and what a first release would actually look like."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: "About WordbitX",
          mainEntity: {
            "@type": "Organization",
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phoneDisplay,
            foundingDate: String(siteConfig.foundingYear),
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.streetAddress,
              addressLocality: siteConfig.addressLocality,
              addressRegion: siteConfig.addressRegion,
              addressCountry: siteConfig.addressCountry,
            },
            founder: {
              "@type": "Person",
              name: founder.name,
              jobTitle: "Founder & CEO",
              image: founder.photo ? absoluteUrl(founder.photo) : undefined,
              sameAs: founder.linkedin ? [founder.linkedin] : undefined,
              worksFor: { "@type": "Organization", name: siteConfig.name },
            },
          },
        }}
      />
    </>
  );
}
