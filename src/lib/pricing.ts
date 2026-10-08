import type { Faq } from "@/lib/types";

export type PricingBand = {
  name: string;
  range: string;
  typical: string;
  href: string;
  keywords: string;
};

export const pricingModels = [
  {
    title: "Quoted on the brief",
    text: "A four-page site and a POS are not the same product. We do not publish a high ‘starting at’ number that makes a small job look impossible — or a fake low number that pretends a full system is cheap.",
  },
  {
    title: "Fixed-price milestones",
    text: "Once the scope is written, you pay per milestone after you can inspect the work on staging. Used for websites, apps, POS and most custom software.",
  },
  {
    title: "Monthly retainers",
    text: "A set hour-bank for SEO, ads, caretaking and small enhancements. You get a short note of what ran and what is next.",
  },
];

export const pricingBands: PricingBand[] = [
  {
    name: "Business website",
    range: "Quoted after pages & languages",
    typical: "A small brochure or a focused marketing site with CMS and technical SEO. Timeline follows page count, not a package name.",
    href: "/services/web-development",
    keywords: "website development cost",
  },
  {
    name: "Shopify / WooCommerce store",
    range: "Quoted after catalogue review",
    typical: "Theme or custom build, payments and shipping in your accounts. Complexity follows products, B2B pricing and integrations.",
    href: "/services/ecommerce-shopify",
    keywords: "Shopify development cost",
  },
  {
    name: "Custom web app",
    range: "Quoted per workflow",
    typical: "Auth, roles, core workflow and an admin. Larger portals and marketplaces are scoped module by module.",
    href: "/services/custom-software-development",
    keywords: "custom software development cost",
  },
  {
    name: "Mobile app MVP",
    range: "Quoted after feature set",
    typical: "Flutter or native first release with API, admin and store-ready builds. Scope is the price, not a sticker.",
    href: "/services/mobile-app-development",
    keywords: "mobile app development cost",
  },
  {
    name: "POS / CRM / industry system",
    range: "Quoted per module",
    typical: "Retail POS, property files, clinic or school systems — priced on the workflows we have already modelled.",
    href: "/services/pos-software",
    keywords: "POS software cost Pakistan",
  },
  {
    name: "SEO, ads and caretaking",
    range: "Monthly retainer",
    typical: "Hours, not vanity rankings. SEO, Google Ads, Meta ads and post-launch maintenance on a written allowance.",
    href: "/services/seo-services",
    keywords: "SEO services cost",
  },
];

export const retainerIncludes = [
  "Monitoring, dependency updates and security patches on the stack we shipped",
  "An agreed hour-bank for small enhancements — unused hours do not silently vanish without a note",
  "A short monthly note: what ran, what broke, what is next",
];

export const retainerExcludes = [
  "A new product line, a redesign or a migration — those are scoped as projects",
  "Guaranteed #1 Google rankings or invented traffic numbers",
  "Third-party fees (hosting, app stores, ad spend, SMS, AI APIs) — those stay in your accounts",
];

export const pricingFaqs: Faq[] = [
  {
    question: "How much does custom software development cost?",
    answer:
      "It depends on pages, modules, languages and integrations — not a single public number. A small first phase can be modest. A POS, marketplace or multi-sided app is not. You get a written milestone price after a short brief. We do not put a high floor on this page that would scare off a real small job, and we do not advertise a full ERP for a few hundred dollars.",
  },
  {
    question: "Do you take smaller projects, not only large budgets?",
    answer:
      "Yes. If a tight first phase can ship safely, we quote that — including smaller local work. If the budget cannot cover the scope, we say so and cut the phase rather than fake a full system.",
  },
  {
    question: "Why don’t you list dollar packages?",
    answer:
      "Most custom software companies do not, for the same reason. A sticker price either looks expensive for a small site or looks fake for a real product. The contact form already has budget bands including under $1,000. The quote is the number that matters.",
  },
  {
    question: "Why hire a Pakistan software team instead of a local studio?",
    answer:
      "Overlap hours, English delivery, code in your GitHub, and a cost structure that is not a US or UK agency rate. WordbitX is incorporated in Pakistan (2021) and already runs work for USA, UK, UAE, Canada and Australia. We do not pretend to be a New York office.",
  },
  {
    question: "Is discovery free?",
    answer:
      "A 20–30 minute call and a written first assessment are part of how we quote. Long unpaid spec work is not. If the fit is wrong, you still leave with a clearer problem statement.",
  },
  {
    question: "What currencies do you invoice in?",
    answer:
      "USD for most international work, PKR for Pakistan-based clients when that is simpler. Payment terms sit in the proposal. Hosting, ads and app-store fees stay on your cards.",
  },
  {
    question: "How do I get an exact quote?",
    answer:
      "Send a brief on the contact page or WhatsApp. We reply the same business day when we can, then a short discovery call, then a scoped plan with milestones. The process page explains delivery.",
  },
];
