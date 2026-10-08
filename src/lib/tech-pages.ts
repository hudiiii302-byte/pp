export type TechPage = {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  useCases: string[];
  services: string[];
};

export const techPages: TechPage[] = [
  {
    slug: "react",
    name: "React",
    h1: "React Development for Web Applications and Design Systems",
    tagline: "Component-driven interfaces we can maintain years after launch.",
    metaTitle: "React Development Company | WordbitX",
    metaDescription:
      "React development for business websites, dashboards and design systems. WordbitX builds typed, accessible React interfaces as part of full product delivery.",
    overview: [
      "React is our default UI library for dashboards, design systems and interactive product surfaces. We use it with TypeScript, not as an untyped prototype that later becomes unmaintainable.",
      "We do not sell 'React hours' in isolation. React work ships as part of a product — with routing, data fetching, accessibility and a documented component library.",
    ],
    useCases: ["Admin consoles", "Design systems", "Authenticated product UI", "Marketing sites when paired with Next.js"],
    services: ["web-development", "custom-software-development", "ui-ux-design"],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    h1: "Next.js Development for Fast, Search-Ready Websites",
    tagline: "Server-rendered pages, clean metadata and a JavaScript footprint we keep small on purpose.",
    metaTitle: "Next.js Development Company | WordbitX",
    metaDescription:
      "Next.js development for SEO-ready websites and web applications: server rendering, metadata, sitemaps and performance budgets.",
    overview: [
      "This website is built with Next.js for the same reasons we recommend it to clients: crawlable HTML, per-page metadata, image optimisation and a production build we can reason about.",
      "We use the App Router, static generation where pages are stable, and server rendering where content must stay fresh — not a client-only SPA that search engines have to guess at.",
    ],
    useCases: ["Marketing sites", "Content-heavy blogs", "Headless commerce storefronts", "Authenticated product shells"],
    services: ["web-development", "ecommerce-development", "seo-services"],
  },
  {
    slug: "flutter",
    name: "Flutter",
    h1: "Flutter App Development for Android and iOS",
    tagline: "One codebase when the product is a workflow, not an OS-exclusive feature.",
    metaTitle: "Flutter App Development Company | WordbitX",
    metaDescription:
      "Flutter app development for Android and iOS: one codebase, store-ready builds and honest advice when native Kotlin or Swift is the better call.",
    overview: [
      "Flutter is how we ship most business apps to both stores without two native teams. Performance is good enough for booking, delivery, commerce and internal tools when we profile on mid-range devices.",
      "We recommend native instead when you can name a platform API Flutter cannot meet. Prestige is not a reason.",
    ],
    useCases: ["MVPs", "Delivery and field apps", "Companion shopping apps", "Internal mobile tools"],
    services: ["mobile-app-development", "android-app-development", "ios-app-development"],
  },
  {
    slug: "nodejs",
    name: "Node.js",
    h1: "Node.js Backend Development for APIs and Integrations",
    tagline: "Typed APIs, queues and integrations that other systems can depend on.",
    metaTitle: "Node.js Development Company | WordbitX",
    metaDescription:
      "Node.js backend development: REST and GraphQL APIs, authentication, queues and third-party integrations for web and mobile products.",
    overview: [
      "Node.js is our default backend when the product is JavaScript end to end. APIs are typed, authenticated and rate-limited. Background work goes on a queue, not inside a web request.",
      "We also deliver Laravel, Python and .NET when the client's team or existing system makes that the cheaper long-term choice.",
    ],
    useCases: ["Product APIs", "Webhooks", "Admin backends", "Real-time features"],
    services: ["custom-software-development", "web-development", "mobile-app-development"],
  },
  {
    slug: "python",
    name: "Python",
    h1: "Python Development for Automation, AI and Data Workloads",
    tagline: "Used where it earns its place — document pipelines, forecasting and internal automation.",
    metaTitle: "Python Development Company | WordbitX",
    metaDescription:
      "Python development for AI pipelines, document processing, automation and APIs, delivered as production systems with logging and evaluation — not notebooks.",
    overview: [
      "Python is how we ship applied AI and document workloads: extraction, retrieval assistants and batch jobs. Production means evaluation sets, cost controls and a human review path — not a demo notebook.",
    ],
    useCases: ["Document intelligence", "Internal assistants", "Forecasting jobs", "Automation scripts with monitoring"],
    services: ["ai-solutions", "custom-software-development", "devops-cloud-solutions"],
  },
  {
    slug: "shopify",
    name: "Shopify",
    h1: "Shopify Development for Stores That Need to Convert",
    tagline: "Themes, Plus builds and migrations — recommended only when Shopify is actually the right platform.",
    metaTitle: "Shopify Development Company | WordbitX",
    metaDescription:
      "Shopify development: custom themes, Shopify Plus, app integrations, migrations and conversion work. Honest advice when a custom store is the better fit.",
    overview: [
      "We build on Shopify when speed to launch and operational simplicity matter. We say no when catalogue rules, B2B pricing or ERP depth will fight the platform every month.",
    ],
    useCases: ["DTC brands", "Fashion and jewellery catalogues", "Migrations off heavy themes", "Shopify Plus operations"],
    services: ["ecommerce-shopify", "ecommerce-development", "seo-services"],
  },
];

export function getTechPage(slug: string) {
  return techPages.find((item) => item.slug === slug);
}
