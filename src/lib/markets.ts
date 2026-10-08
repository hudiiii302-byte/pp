import type { Faq } from "@/lib/types";

export type Market = {
  slug: string;
  name: string;
  country: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  needs: string[];
  delivery: string[];
  industries: string[];
  services: string[];
  faqs: Faq[];
};

export const markets: Market[] = [
  {
    slug: "pakistan",
    name: "Pakistan",
    country: "Pakistan",
    h1: "Software Development Company Serving Pakistan and Exporting Globally",
    tagline:
      "Pakistan is our operating base and a core market — not the limit of who we build for.",
    metaTitle: "Software Development Company in Pakistan | WordbitX",
    metaDescription:
      "WordbitX is a software development company based in Pakistan, building websites, mobile apps, custom software and industry portals for Pakistani businesses and international clients.",
    overview: [
      "WordbitX is incorporated in Pakistan and delivers from here to clients at home and abroad. Local work is shaped by how business actually runs here: COD checkouts, plot files and instalments, offline-first POS, Urdu/English receipts, and WhatsApp as a real channel — not a novelty.",
      "The same engineering standards apply to export work. Pakistani delivery capacity is the reason international clients get senior attention at a sustainable cost, not a reason to position the brand as a city-only shop.",
    ],
    needs: [
      "Retail and restaurant POS that survives power and connectivity drops",
      "Property portals modelled on societies, files and instalment plans",
      "Pharmacy and hospital systems with batch, expiry and tax invoices",
      "Shopify and custom stores that handle jazzcash, easypaisa and couriers",
      "School and campus portals with fee vouchers and parent access",
    ],
    delivery: [
      "On-site workshops in major cities when the project needs them",
      "Urdu and English project communication",
      "PKT working hours with evening overlap for US/UK calls when booked",
      "Code and accounts owned by the client from day one",
    ],
    industries: ["retail", "real-estate", "pharmacy", "healthcare", "education", "ecommerce"],
    services: ["web-development", "ecommerce-shopify", "pos-software", "real-estate-portals", "android-app-development"],
    faqs: [
      { question: "Are you only a Lahore software house?", answer: "No. We operate from Pakistan (Lahore is where the team is based) and serve clients across the country and internationally. Pages and proposals are written for the market you sell in, not only for one city." },
      { question: "Do you work with overseas Pakistanis?", answer: "Yes. Many property, retail and brand projects are commissioned remotely with PKT overlap calls." },
    ],
  },
  {
    slug: "usa",
    name: "United States",
    country: "United States",
    h1: "Software Development Partner for US Product and Operations Teams",
    tagline: "A dedicated remote squad with scheduled US overlap hours and US-owned repositories.",
    metaTitle: "Software Development Company for US Clients | WordbitX",
    metaDescription:
      "WordbitX works with US startups and operations teams on web apps, mobile products, AI automation and custom software, with overlap hours and client-owned code.",
    overview: [
      "US clients typically hire us as an embedded product squad: discovery on their clock, weekly demos, and delivery into their GitHub, Vercel, AWS or GCP accounts. We do not hold the product hostage in our own hosting.",
      "Engagements are scoped in writing. We will decline work that needs onshore licensed professions we do not hold (for example, practising US healthcare billing as a covered entity).",
    ],
    needs: [
      "MVP and v1 products that need to ship in a quarter, not a year",
      "Internal tools that replace spreadsheet operations",
      "AI assistants grounded in the company's own documents",
      "Storefronts and subscription apps with Stripe and analytics wired correctly",
    ],
    delivery: [
      "Overlap windows for EST / PST stand-ups when the project needs them",
      "English-first communication, written decisions in one channel",
      "US-based accounts for Git, cloud and app stores whenever you provide them",
      "Invoices in USD with milestone billing",
    ],
    industries: ["ecommerce", "finance", "logistics", "healthcare"],
    services: ["custom-software-development", "web-development", "mobile-app-development", "ai-solutions"],
    faqs: [
      { question: "What time zone do you work in?", answer: "The team is in PKT (UTC+5). We book recurring overlap for US time zones so design reviews and stand-ups happen while you are at the desk." },
      { question: "Who owns the IP?", answer: "You do, on full payment, as stated in the proposal. Repositories live in your organisation." },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    country: "United Kingdom",
    h1: "Software Development Partner for UK Businesses",
    tagline: "Remote delivery with comfortable UK afternoon overlap and GDPR-aware builds.",
    metaTitle: "Software Development Company for UK Clients | WordbitX",
    metaDescription:
      "WordbitX delivers websites, mobile apps and custom software for UK businesses with UK-hours overlap, GDPR-aware data handling and client-owned infrastructure.",
    overview: [
      "UK work is usually product sites, operational software and eCommerce. We treat privacy as a build requirement: consent, retention and subprocessors agreed before anything goes live.",
      "Collaboration sits in UK afternoon / PKT evening, which is a practical overlap for most teams without forcing late-night calls.",
    ],
    needs: [
      "Service-business websites that need to rank and convert",
      "Shopify or custom stores with UK shipping and tax rules",
      "Internal portals with role-based access",
      "Content and SEO programmes tied to commercial pages",
    ],
    delivery: [
      "Overlap with UK business hours for reviews",
      "English proposals, tickets and documentation",
      "Hosting and analytics in regions you specify",
      "Milestone billing in GBP or USD",
    ],
    industries: ["ecommerce", "education", "finance", "healthcare"],
    services: ["web-development", "seo-services", "ecommerce-shopify", "custom-software-development"],
    faqs: [
      { question: "Can you work under a UK NDA?", answer: "Yes. We sign client NDAs before discovery when asked." },
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    country: "United Arab Emirates",
    h1: "Software Development Partner for UAE Companies",
    tagline: "Near-timezone delivery for Gulf businesses that need bilingual, mobile-first products.",
    metaTitle: "Software Development Company for UAE Clients | WordbitX",
    metaDescription:
      "WordbitX builds websites, apps and business software for UAE companies with near-timezone collaboration, bilingual interfaces and mobile-first delivery.",
    overview: [
      "The UAE sits close to PKT, which makes collaboration simpler than US work: same-day reviews without heroic hours. Products are usually bilingual, mobile-first and designed for a mixed expat and local audience.",
      "We do not claim local trade licences we do not hold. Delivery is remote software work for your UAE entity.",
    ],
    needs: [
      "Bilingual marketing sites and portals",
      "Property and hospitality systems",
      "Retail POS and inventory for multi-branch groups",
      "App Store and Play launches for regional products",
    ],
    delivery: [
      "Same-day overlap with Gulf business hours",
      "English project language; Arabic UI when the product needs it",
      "Payment and invoice arrangements agreed in the proposal",
    ],
    industries: ["real-estate", "hospitality", "retail", "ecommerce"],
    services: ["web-development", "mobile-app-development", "pos-software", "real-estate-portals"],
    faqs: [
      { question: "Do you travel to Dubai or Abu Dhabi?", answer: "Kick-offs can be remote. On-site workshops are scoped separately when the project justifies the travel." },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    country: "Canada",
    h1: "Software Development Partner for Canadian Teams",
    tagline: "Remote product engineering with scheduled Canada overlap and client-owned cloud accounts.",
    metaTitle: "Software Development Company for Canadian Clients | WordbitX",
    metaDescription:
      "WordbitX works with Canadian businesses on custom software, web and mobile products, with overlap hours and repositories hosted in your organisation.",
    overview: [
      "Canadian engagements look similar to US product work: written scope, weekly demos, and infrastructure in your AWS, GCP or Azure organisation. We schedule overlap for Eastern or Pacific time as the project requires.",
    ],
    needs: [
      "Bilingual (EN/FR) interfaces when the product requires it",
      "SaaS MVPs and internal operations tools",
      "Stores and booking products with Canadian payments and tax",
    ],
    delivery: [
      "Overlap with ET / PT by agreement",
      "English delivery; French UI when scoped",
      "Code in your Git organisation",
    ],
    industries: ["ecommerce", "education", "finance", "healthcare"],
    services: ["custom-software-development", "web-development", "mobile-app-development", "ai-solutions"],
    faqs: [
      { question: "Can you invoice a Canadian company?", answer: "Yes. Billing currency and tax treatment are set in the proposal." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    country: "Australia",
    h1: "Software Development Partner for Australian Businesses",
    tagline: "A practical timezone neighbour for Australian product and operations work.",
    metaTitle: "Software Development Company for Australian Clients | WordbitX",
    metaDescription:
      "WordbitX delivers custom software, websites and mobile apps for Australian businesses with convenient timezone overlap and client-owned infrastructure.",
    overview: [
      "Australia and Pakistan share a workable overlap. Morning AEST lines up with Pakistani afternoon, which makes stand-ups and reviews easier than trans-Atlantic work. Delivery is remote into your accounts.",
    ],
    needs: [
      "Service-business websites and booking products",
      "Retail and field-service apps",
      "Internal tools and light ERP modules",
    ],
    delivery: [
      "Overlap with AEST / AEDT mornings",
      "English communication and documentation",
      "Hosting region chosen with you (often ap-southeast-2)",
    ],
    industries: ["retail", "logistics", "education", "ecommerce"],
    services: ["web-development", "mobile-app-development", "custom-software-development", "pos-software"],
    faqs: [
      { question: "Do you support after go-live?", answer: "Yes. Support windows are agreed so Australian business hours are covered for incidents." },
    ],
  },
];

export function getMarket(slug: string) {
  return markets.find((item) => item.slug === slug);
}
