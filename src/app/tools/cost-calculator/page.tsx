import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, ButtonLink, Card, CheckList } from "@/components/ui";
import { CostCalculator } from "@/components/cost-calculator";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema, ServiceSchema } from "@/components/jsonld";
import { seoTitleAbsolute } from "@/lib/seo-title";
import type { Faq } from "@/lib/types";

const calculatorDescription = "Software development cost calculator for Pakistan: websites, Shopify stores, web apps and mobile apps. PKR + USD ranges, timeline, what's included.";

const calculatorFaqs: Faq[] = [
  {
    question: "Is this number what I will actually pay?",
    answer:
      "No — it is an indicative range for planning. The final price is a written scope after we see your brief: exact pages, modules, integrations and deadline. What it will not do is surprise you: the written quote comes from the same model, and we do not pad it.",
  },
  {
    question: "Why do you show a range instead of one price?",
    answer:
      "Because a single number for 'a website' or 'an app' is either a trap or a lie. The width of the range reflects the real decisions: catalogue size, number of modules, integrations. When you send the brief, the range collapses to a number with milestones attached.",
  },
  {
    question: "What does 'under $25/hr' have to do with these numbers?",
    answer:
      "The ranges are consistent with the rate band we publish on our Clutch profile. If you divide a quoted project by the hours it actually takes, you land in that band. That is how you can check any quote we give you.",
  },
  {
    question: "Can you start with a smaller first phase?",
    answer:
      "Yes — most projects do. A launchable first phase at a third of the total budget is a common shape, and the calculator's range already reflects what that first phase usually costs at the lower scale settings.",
  },
  {
    question: "Do Karachi or Islamabad projects cost more than Lahore?",
    answer:
      "No. The studio is in Lahore and rates are the same across Pakistan — the scope sets the price, not the postcode. Where in-person milestones help (kickoff, UAT, go-live), travel is listed in the scope as its own line.",
  },
];

export const metadata: Metadata = {
  title: seoTitleAbsolute("Software Development Cost Calculator | Pakistan Rates"),
  description: calculatorDescription,
  alternates: { canonical: "/tools/cost-calculator" },
  keywords: [
    "software development cost calculator",
    "website development cost Pakistan",
    "web app development cost",
    "mobile app development cost Pakistan",
    "Shopify store cost Pakistan",
    "custom software cost",
  ],
  openGraph: {
    url: "/tools/cost-calculator",
    title: "Software Development Cost Calculator | Pakistan Rates",
    description:
      "Point the sliders at your project and get an honest PKR/USD range — built by the team that does the work, consistent with our published under-$25/hr rate.",
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Software development cost calculator — Pakistan rates"
        description="Point the sliders at your project and get an honest indicative range in PKR and USD, the weeks it usually takes, and what is included at that level. Built by the team that does the work — the same model, same rate band, as the quote you would get."
        crumbs={[{ label: "Tools", href: "/tools/cost-calculator" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Skip to a written quote</ButtonLink>
          <ButtonLink href="/pricing" variant="ghost">
            How our quotes work
          </ButtonLink>
        </div>
      </PageHero>

      {/* CALCULATOR */}
      <Section>
        <CostCalculator />
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="How the estimate works"
            title="What actually moves the number"
            description="Four inputs, one model — the same one a scope document uses."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Type of build</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                A business site, a store, a web app and a mobile app have different base costs — different
                architecture, different testing, different risk.
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Scale</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Pages, catalogue size, modules or features. Scale is the biggest single multiplier in any software
                budget — which is why a quote without scope is a guess.
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Add-ons</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Bilingual content, payments, admin panels, integrations, AI features — each has its own cost, shown
                in the model rather than hidden in a "miscellaneous" line.
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-ink-900">Timeline</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Rush work costs more — senior people, longer hours, parallel tracks. The calculator prices it at the
                real premium (≈35%), not a symbolic one.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* WHAT YOU GET */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="No fine print"
            title="What every project includes, at any level"
            description="The floor of the job — these are never removed to make a number smaller."
          />
          <CheckList
            columns={2}
            items={[
              "Written scope before code: milestones, deliverables, timeline",
              "Weekly demos in your repository or staging",
              "Your accounts: repo, hosting, store and analytics in your name",
              "Post-launch stabilisation window included",
              "Typed, tested code with handover documentation",
              "Named engineer, one shared channel, decisions in writing",
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Cost questions, answered"
            description="The things people ask after they see a range."
          />
          <div>
            <FaqAccordion faqs={calculatorFaqs} />
            <div className="mt-6">
              <ButtonLink href="/pricing">Read the full pricing page</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Turn the range into a number"
        description="Send the brief — what the build is, what it must do, when you need it. You will get a written scope with milestones and a fixed price, usually within two working days."
        primaryLabel="Get a written quote"
        primaryHref="/contact"
        whatsappMessage="Hello WordbitX, I used the cost calculator and would like a written quote."
      />
      <ServiceSchema
        name="Software development cost estimation"
        description={calculatorDescription}
        url="/tools/cost-calculator"
        serviceType="Cost estimation tool"
      />
      <FaqSchema faqs={calculatorFaqs} />
    </>
  );
}
