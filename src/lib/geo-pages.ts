import type { Faq } from "@/lib/types";

export type GeoPage = {
  slug: string;
  city: "Lahore" | "Karachi" | "Islamabad";
  citySlug: string;
  serviceSlug: string;
  serviceLabel: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Localised angle — districts, industries, delivery model. */
  local: { title: string; text: string }[];
  /** What we deliver here for this service. */
  deliverables: string[];
  faqs: Faq[];
};

/**
 * Service × city pages (Rextech's /web-development-lahore/ pattern).
 * Flat top-level URLs for exact-match commercial queries. Content is written
 * per page — city business context, districts and delivery model differ — not
 * a city name swapped into a template. Rates stay consistent with the
 * "Under $25 / hr" band on the Clutch profile and /pricing.
 */
export const geoPages: GeoPage[] = [
  // ============================== LAHORE ==============================
  {
    slug: "web-development-lahore",
    city: "Lahore",
    citySlug: "lahore",
    serviceSlug: "web-development",
    serviceLabel: "Web Development",
    title: "Web Development in Lahore",
    h1: "Web development in Lahore — from our studio to your domain",
    metaTitle: "Web Development Lahore | Custom Websites",
    metaDescription:
      "Web development in Lahore: business sites, portals and web apps from the studio in DHA Phase 2. Written scope, weekly demos, under $25/hr.",
    intro: [
      "This is where we are based: DHA Phase 2, Lahore. For Lahore businesses the obvious question is why hire a software company when you can walk in — and that is exactly the offer. You can come to the studio, sit down with the engineers who will build your website, and see the work in person before a rupee is paid.",
      "We build the websites Lahore businesses actually need: the corporate site that has to look like a company worth calling, the property portal with live society listings, the booking engine for a restaurant or salon, the B2B catalogue for a Gujranwala or Faisalabad manufacturer selling into the city. Server-rendered for speed and Google, typed for maintainability, and delivered into your own hosting.",
    ],
    local: [
      { title: "In person, same day", text: "DHA Phase 2 studio. Discovery meetings, content sessions and launch walkthroughs happen in the room — or over WhatsApp and a site visit if you prefer." },
      { title: "Districts we work in", text: "DHA, Bahria Town, Johar Town, Gulberg, Model Town, Cantt and the industrial belts — from a one-page site for a Gulberg clinic to a multi-city portal for a manufacturing group." },
      { title: "Pakistan-first stacks", text: "Urdu alongside English, local payment gateways (JazzCash, Easypaisa, cards), courier integrations and the mobile-first traffic mix that real Pakistani websites get." },
    ],
    deliverables: [
      "Business and corporate websites with CMS so your team edits content without us",
      "Portals and booking engines — property, education, healthcare, restaurants, salons",
      "B2B product catalogues for manufacturers and exporters",
      "Website speed, SEO and Core Web Vitals handled as part of the build, not bolted on",
    ],
    faqs: [
      { question: "Can we meet the team in Lahore before deciding?", answer: "Yes — that is the point of this page. The studio is in DHA Phase 2; you are welcome to come and sit with the engineers, review recent work on a screen, and ask anything before anything is signed." },
      { question: "How much does a business website cost in Lahore?", answer: "It is quoted on pages, languages and features after a short brief — the /pricing page explains how. A standard business site is a fraction of what a Karachi or Dubai agency would quote for the same scope, and the rate band is published on our Clutch profile." },
      { question: "Will the website actually rank on Google for our city?", answer: "Ranking is earned over time, and we will not promise positions. What we do control: technical SEO built into the app (speed, schema, clean URLs), local business data kept consistent, and content written for the queries your customers type." },
    ],
  },
  {
    slug: "mobile-app-development-lahore",
    city: "Lahore",
    citySlug: "lahore",
    serviceSlug: "mobile-app-development",
    serviceLabel: "Mobile App Development",
    title: "Mobile App Development in Lahore",
    h1: "Mobile app development in Lahore — Android and iOS, one team",
    metaTitle: "Mobile App Development Lahore | Android & iOS",
    metaDescription:
      "Mobile app development in Lahore: Flutter and React Native apps for Android and iOS, built in person or remotely. Store publishing included, under $25/hr.",
    intro: [
      "Lahore's businesses want an app and a half — the app that customers will actually keep on their phones, not the app that dies in month three. Our mobile team builds in Flutter and React Native: one codebase, both stores, and the offline-first behaviour that matters on Pakistani networks.",
      "Because the studio is in Lahore, app projects here run the way local projects should: you can see the app on a real device at the studio, watch a weekly demo in person, and make changes over coffee instead of a video call queue.",
    ],
    local: [
      { title: "See it on a device", text: "Weekly demos on real Android and iOS hardware at the DHA Phase 2 studio — no 'trust the screen recording' phase of the project." },
      { title: "The apps Lahore actually runs", text: "Marketplace and delivery apps, POS-linked shop apps, education and result portals, real estate dealer apps, hospital and clinic booking — the patterns we have shipped, in this market, on this connectivity." },
      { title: "Both stores, owned by you", text: "Play Console and App Store accounts in your name, listing screenshots, data-safety forms, staged rollouts — publishing is part of the scope, not a favour." },
    ],
    deliverables: [
      "Flutter or React Native apps, chosen for your product and your team",
      "Offline-first architecture with sync for weak networks",
      "Payment integration: JazzCash, Easypaisa, cards, in-app purchases",
      "Store publishing, updates and app-store-optimisation handover",
    ],
    faqs: [
      { question: "Flutter or React Native for our Lahore app?", answer: "Matched to the product and your team, written down with the trade-offs before work starts. If you already have a React or web codebase, a TypeScript-native option usually reuses more; if the app is device-heavy, Flutter tends to win." },
      { question: "How long does a typical app take?", answer: "A focused MVP is usually 8–14 weeks of scheduled work, scoped in writing with a weekly demo cadence. We will not quote four weeks for a twelve-week job to win you — the written plan stays the plan." },
      { question: "Do you handle the Google Play and App Store submissions?", answer: "Yes — accounts, listings, data-safety declarations, review responses and staged rollouts are inside the scope, with the accounts set up in your name from day one." },
    ],
  },
  {
    slug: "custom-software-development-lahore",
    city: "Lahore",
    citySlug: "lahore",
    serviceSlug: "custom-software-development",
    serviceLabel: "Custom Software Development",
    title: "Custom Software Development in Lahore",
    h1: "Custom software development in Lahore — systems your business runs on",
    metaTitle: "Custom Software Development Lahore",
    metaDescription:
      "Custom software development in Lahore: ERP, POS, inventory and admin systems from a local studio. Written scope, your code, under $25/hr.",
    intro: [
      "Most Lahore software conversations start as a website and quietly become a system: inventory that has to match the shop, a POS that has to survive a power cut, an admin panel the accountant will actually use. This page is for that second conversation.",
      "We build the back-office and operational systems for Pakistani businesses: Laravel and Node.js, typed and tested, with the money paths — billing, stock, payments — under automated tests and logging. The studio is in DHA Phase 2, so discovery happens in person and the people you meet are the people who write the code.",
    ],
    local: [
      { title: "Systems that survive Pakistani conditions", text: "Offline-tolerant POS, scheduled sync, paper-fallback workflows and Urdu-capable interfaces — the details that decide whether staff adopt the system or go back to the register." },
      { title: "Money paths are tested", text: "Billing, payments and refunds get automated tests and audit logs, because a bug in those parts costs real money on a real day of trading." },
      { title: "FBR and local rails", text: "Digital invoicing, JazzCash/Easypaisa, bank and courier integrations — the connective tissue of a Pakistani business, built and documented as part of the scope." },
    ],
    deliverables: [
      "POS and retail systems with offline mode and daily close reports",
      "Inventory and job-card systems for workshops and manufacturers",
      "CRM/ERP modules sized to your team — not a forced full suite",
      "Admin panels with role-based access your staff can actually use",
    ],
    faqs: [
      { question: "Can you work on our existing in-house system?", answer: "Yes — audit first: what is risky, what should be upgraded, what can stay. You get a written plan with the cost of each path before any code changes, and we will say plainly when a rebuild is cheaper than a rescue." },
      { question: "Do you deploy to our servers or your cloud?", answer: "Wherever your accounts live: your VPS, your cloud account, or managed hosting we set up in your name. Repositories, infrastructure and documentation are yours from day one." },
      { question: "What support looks like after go-live?", answer: "A post-launch stabilisation window is included, then a named-hour maintenance retainer: monitoring, updates, a fix SLA you can read, and an allowance for small enhancements — all in writing." },
    ],
  },
  {
    slug: "shopify-development-lahore",
    city: "Lahore",
    citySlug: "lahore",
    serviceSlug: "ecommerce-shopify",
    serviceLabel: "Shopify Development",
    title: "Shopify Development in Lahore",
    h1: "Shopify development in Lahore — stores that sell on mobile",
    metaTitle: "Shopify Development Lahore | Stores & Migrations",
    metaDescription:
      "Shopify development in Lahore: custom themes, Plus builds, WooCommerce migrations and local payment flows — scoped weekly, accounts in your name.",
    intro: [
      "Lahore's commerce is mobile-first and COD-aware: the store has to sell on a 4G connection, handle cash on delivery without melting, and talk to the couriers that actually reach your customers. Our Shopify engineers build and run real stores for this market — the Veranne storefront in our showcase is one of them.",
      "Custom Liquid themes where the brand deserves it, headless where the front end has to be radical, and migrations from WooCommerce or a custom store where the data has to arrive whole — catalogue, variants, orders, customers, with the URL structure protected for SEO.",
    ],
    local: [
      { title: "COD without chaos", text: "Cash-on-delivery flows with confirmation calls, courier integrations and the reconciliation reports a Lahore store actually needs to run." },
      { title: "Local gateways, configured", text: "JazzCash, Easypaisa, cards and the COD-first mix — configured, tested with real orders and documented, not just installed." },
      { title: "Migrations that do not go dark", text: "Parallel-run window, URL redirects, SEO transfer and a data reconciliation report — your store is never offline for a weekend." },
    ],
    deliverables: [
      "Custom Shopify themes with performance budgets",
      "Shopify Plus and headless (Hydrogen) builds where they pay off",
      "WooCommerce/custom store migrations with zero lost data",
      "App dependency audits — the stack you keep, and the cost of what you drop",
    ],
    faqs: [
      { question: "Do you work with Shopify stores outside Pakistan?", answer: "Yes — the same team builds for US, UK and Gulf stores. For international stores we handle currency, tax and shipping rules as part of the scope, and the store accounts stay in your name." },
      { question: "Custom theme or headless — which does our store need?", answer: "Most stores are served by a custom Liquid theme; headless pays off when the front end has to be radically different or multi-market. We will tell you which, with the cost difference in writing, before you decide." },
      { question: "Can you fix our slow, app-heavy store?", answer: "Yes — app dependency audit first (what each app costs and does), theme weight analysis, then a written fix plan. Speed is a deliverable with a number attached, not a promise." },
    ],
  },

  // ============================== KARACHI ==============================
  {
    slug: "web-development-karachi",
    city: "Karachi",
    citySlug: "karachi",
    serviceSlug: "web-development",
    serviceLabel: "Web Development",
    title: "Web Development in Karachi",
    h1: "Web development for Karachi businesses — built from Lahore, run for you",
    metaTitle: "Web Development Karachi | Custom Websites",
    metaDescription:
      "Web development for Karachi: corporate sites, portals and web apps from our Lahore studio — weekly demos, in-person milestones when needed, under $25/hr.",
    intro: [
      "We are a Lahore studio that builds for Karachi the same way we build for anywhere: a written scope, weekly demos, and the code in your accounts. What changes for Karachi is the working model — most projects run fully remote with scheduled overlap, and when a project wants in-person discovery or a launch walkthrough, we travel, and the city's clients know that is on the table.",
      "Karachi's businesses tend to be transaction-heavy: import-export houses with B2B catalogues, retail chains with online ordering, clinics and corporate groups with portals that have to look institutional. We build all three with the same discipline — server-rendered, fast on mobile networks, and SEO-ready from the first commit.",
    ],
    local: [
      { title: "Remote-first, travel when it matters", text: "Discovery, demos and reviews run on video with your team's calendar; for kickoff or go-live we travel to Karachi — Clifton, Do Darya, I.I. Chundrigar — and meet in person." },
      { title: "Built for Karachi's traffic", text: "The city runs on mobile data: performance budgets, image pipelines and Core Web Vitals targets are part of the scope, so the site does not die on a 4G connection near I.I." },
      { title: "Institutional-grade sites", text: "Corporate groups, hospitals and trade houses need sites that withstand a procurement committee. We build for that audience: clean information architecture, bilingual options, and the details that make a firm look established." },
    ],
    deliverables: [
      "Corporate and group websites with CMS and role-based editing",
      "B2B catalogue platforms for traders, manufacturers and exporters",
      "Portals — clinics, corporate, education — with login and reporting",
      "Technical SEO and speed built into the platform, verified after launch",
    ],
    faqs: [
      { question: "You are based in Lahore — how does a Karachi project actually work?", answer: "Most of it on video: a discovery call, written scope, weekly demos in your staging environment, one shared channel for decisions. When in-person time helps — kickoff, content sessions, go-live — we travel to Karachi. It is scheduled into the scope, not improvised." },
      { question: "Will a Lahore team understand Karachi's market?", answer: "We build for both markets routinely — the same patterns (mobile-first, local payments, courier and COD flows) run across the country. What we do not fake is local presence: we tell you exactly which phase of your project will be in person." },
      { question: "How do payments and invoicing work for a Karachi company?", answer: "PKR or USD invoicing, bank transfer. The invoice, rate and hours live in the same scope document, and the company behind it is SECP-registered, so the contract is company-to-company." },
    ],
  },
  {
    slug: "mobile-app-development-karachi",
    city: "Karachi",
    citySlug: "karachi",
    serviceSlug: "mobile-app-development",
    serviceLabel: "Mobile App Development",
    title: "Mobile App Development in Karachi",
    h1: "Mobile app development for Karachi teams — Flutter & React Native",
    metaTitle: "Mobile App Development Karachi | Android & iOS",
    metaDescription:
      "Mobile app development for Karachi: Flutter and React Native, offline-first, both stores published — remote delivery, under $25/hr.",
    intro: [
      "Karachi's app projects are usually commerce or operations: delivery and marketplace apps, retail-chain customer apps, logistics and fleet tools, and the hospital/clinic apps that have to work on a mid-range Android in a busy waiting room. Our mobile team builds for that reality — offline-first, mid-range-device performance budgets, and local payment rails — from the Lahore studio, with the working model agreed in the scope.",
      "Remote does not mean invisible: weekly demos on real devices, a shared board your team can see, and the code in your repository from the first commit. When the project wants in-person milestones, we travel to Karachi — Clifton or Do Darya — and the plan says so in advance.",
    ],
    local: [
      { title: "Offline-first by default", text: "Karachi's networks are real, not theoretical: apps that queue, sync and keep working when the connection drops — the pattern for delivery, retail and field teams." },
      { title: "Mid-range device budgets", text: "Frame-rate and memory targets tested on the devices your customers actually carry, not just the reviewer's flagship." },
      { title: "Both stores, your accounts", text: "Play Console and App Store in your name, listings, data-safety forms and staged rollouts handled as part of the scope." },
    ],
    deliverables: [
      "Flutter or React Native apps, chosen per product in writing",
      "Delivery/marketplace apps with tracking, COD and courier flows",
      "Retail and loyalty apps for multi-branch chains",
      "Push, deep links, analytics and the store pipeline — all scoped",
    ],
    faqs: [
      { question: "Can your team demo the app in Karachi?", answer: "Yes — weekly demos are on video by default, and for milestone reviews we travel to Karachi on request. It is costed into the scope when you want it, so it is planned, not an add-on surprise." },
      { question: "Our app has to work offline for field staff — can you do that?", answer: "It is the core pattern we build with: local storage, optimistic UI, background sync and conflict handling. Field operations (logistics, inspection, collections) are among the most common app types we ship." },
      { question: "How do you handle Android fragmentation in Pakistan?", answer: "A minimum-OS floor agreed in the scope, a device matrix for QA, and the performance budgets enforced in CI. When a device class breaks, we know from the pipeline, not from a support call." },
    ],
  },
  {
    slug: "custom-software-development-karachi",
    city: "Karachi",
    citySlug: "karachi",
    serviceSlug: "custom-software-development",
    serviceLabel: "Custom Software Development",
    title: "Custom Software Development in Karachi",
    h1: "Custom software for Karachi businesses — ERP, POS & operations",
    metaTitle: "Custom Software Development Karachi",
    metaDescription:
      "Custom software for Karachi: ERP, POS, inventory and admin systems from our Lahore studio — written scope, weekly demos, in-person UAT when needed.",
    intro: [
      "Karachi's operational software has to handle scale and interruption: a multi-branch retail chain's POS, a trader's inventory across Godowns, a hospital group's billing that cannot drop on a power cut. We build those systems from the Lahore studio — typed, tested, with the money paths under automated tests — and we are explicit about which milestones happen in person in Karachi and which run remote.",
      "The working model is the same as our project work everywhere: a written scope before code, weekly demos, and everything — repositories, infrastructure, documentation — in your accounts. A Karachi client gets a Lahore team that travels when the project needs a room, not a screen.",
    ],
    local: [
      { title: "Multi-branch by design", text: "Branch-level permissions, central dashboards and per-branch reports — the shape of the software a Karachi retail or clinic group actually needs." },
      { title: "Interruption-tolerant", text: "Offline-tolerant POS, scheduled sync and paper fallbacks: the system keeps working through the load shedding and the internet drop." },
      { title: "In-person milestones, planned", text: "Kickoff, UAT and go-live walkthroughs in Karachi when the project wants them — costed into the scope, booked into the plan." },
    ],
    deliverables: [
      "ERP modules: inventory, job cards, production and costing",
      "Multi-branch POS with offline mode and central reporting",
      "Billing and FBR digital invoicing for registered businesses",
      "Admin dashboards with role-based access and audit trails",
    ],
    faqs: [
      { question: "We run five branches — can one system handle all of them?", answer: "Yes — branch as a first-class entity: per-branch stock, pricing and staff, with a central view for the head office. Multi-branch is one of the most common shapes of our software work." },
      { question: "How do UAT and staff training work for a Karachi team?", answer: "UAT runs in your staging environment with your staff, on the real workflows; training happens in person during the Karachi milestone we plan for it, with short videos recorded so new hires can catch up later." },
      { question: "What happens after go-live when your engineers are in Lahore?", answer: "A named-hour maintenance retainer with monitoring on our side: you get alerts before your staff do, fixes against an agreed SLA, and a monthly report you can forward to management." },
    ],
  },
  {
    slug: "digital-marketing-karachi",
    city: "Karachi",
    citySlug: "karachi",
    serviceSlug: "digital-marketing",
    serviceLabel: "Digital Marketing",
    title: "Digital Marketing in Karachi",
    h1: "Digital marketing for Karachi brands — ads, SEO & conversion",
    metaTitle: "Digital Marketing Karachi | Ads & SEO",
    metaDescription:
      "Digital marketing for Karachi: Google and Meta ads, local SEO and CRO run by the team that builds your site — monthly retainer, real reporting.",
    intro: [
      "Ads only convert when the landing experience can take the traffic — which is why the team that runs your campaigns is the same team that builds your website. For Karachi brands we run Google and Meta ads, local SEO and conversion-rate work as one monthly programme: the campaign feeds the site, the site's analytics tell the campaign what to buy, and both report to one number — cost per customer.",
      "The programme is scoped as a named retainer: what we run each month, what we report, and what success looks like. No guaranteed-rank claims, no 'we will fix your algorithm' theatre — the budget, the numbers and the plan, in writing.",
    ],
    local: [
      { title: "Campaigns that match the market", text: "Karachi's purchase behaviour is mobile, social-first and COD-aware — the creative, landing pages and flows are built for how the city actually buys." },
      { title: "Local SEO that compounds", text: "Google Business Profile, local citations and the reviews pipeline working together, so the brand shows up when 'near me' gets typed in Clifton or Gulshan." },
      { title: "One team, one number", text: "The engineers who build the landing experience and the marketers who buy the traffic are the same team — so the CRO loop is not a handoff." },
    ],
    deliverables: [
      "Google Ads and Meta/Instagram campaigns with landing pages built in-house",
      "Local SEO: Google Business Profile, citations, reviews pipeline",
      "Technical and on-page SEO on the site the campaigns point at",
      "Monthly reporting against cost per customer, not impressions",
    ],
    faqs: [
      { question: "Do you guarantee rankings or ad results?", answer: "No — anyone who guarantees rankings is selling you a story. We commit to the process: budget discipline, weekly optimisation, honest monthly reporting, and a shared definition of the number that matters to you." },
      { question: "Can you run ads without rebuilding our website?", answer: "Yes — though the first thing we do is an honest read on whether the landing experience can convert the traffic you are about to buy. If the site is the bottleneck, we say so and scope the fix alongside the campaigns." },
      { question: "How is the retainer structured?", answer: "A monthly named-hour bank plus your ad spend (paid to the platforms in your name, always). What the hours cover, the reporting cadence and the exit terms are in the written scope." },
    ],
  },

  // ============================== ISLAMABAD ==============================
  {
    slug: "web-development-islamabad",
    city: "Islamabad",
    citySlug: "islamabad",
    serviceSlug: "web-development",
    serviceLabel: "Web Development",
    title: "Web Development in Islamabad",
    h1: "Web development for Islamabad businesses — corporate, gov-adjacent, fast",
    metaTitle: "Web Development Islamabad | Custom Websites",
    metaDescription:
      "Web development in Islamabad: corporate sites, portals and web apps for the capital — built from our Lahore studio, in-person milestones when needed.",
    intro: [
      "Islamabad's web projects skew institutional: corporate headquarters, NGOs and consultancies, ministries' contractors, law firms, and the capital's fast-growing startup corridor. The bar is different from a city site — procurement committees, compliance language, bilingual requirements, and a design that has to survive a boardroom. We build for that bar from the Lahore studio, with in-person discovery and delivery milestones in Islamabad when the project wants them.",
      "Lahore to Islamabad is a short trip, which changes the working model: the team can be in Blue Area or G-11 for kickoff, content sessions and go-live without the cost of a full-time local presence. Most of the build still runs remote — written scope, weekly demos, your repository — and the plan is explicit about which milestones are in the room.",
    ],
    local: [
      { title: "Capital-grade sites", text: "Institutional information architecture, bilingual (English/Urdu) options, accessibility and the compliance-ready documentation capital-sector clients expect." },
      { title: "Lahore-to-Islamabad, not out of country", text: "Same-day feasibility, next-week in-person milestones — the team travels from Lahore, which keeps the rate honest and the schedule tight." },
      { title: "Startups get product speed", text: "The capital's SaaS and fintech startups get the same engine we run for product work: server-rendered front ends, typed APIs, and a CI pipeline from week one." },
    ],
    deliverables: [
      "Corporate and group websites with governance-grade CMS",
      "Portals for consultancies, NGOs and professional firms",
      "Bilingual sites with correct Urdu typography and RTL",
      "Security hardening and compliance documentation for sensitive sectors",
    ],
    faqs: [
      { question: "Can your team be in Islamabad for the project?", answer: "For planned milestones — yes. We travel from Lahore for kickoff, content sessions and go-live; it is costed into the scope. The build itself runs remote with weekly demos, which is how most of our Islamabad clients prefer to work." },
      { question: "We need the site to pass a security/compliance review — can you do that?", answer: "Yes — hardening (HTTPS, headers, dependency pinning, WAF guidance), access controls and the documentation that reviewers ask for are part of the scope when the sector requires them." },
      { question: "Do you work with government or semi-government bodies?", answer: "We work with contractors and businesses serving those sectors. Public-tender work with specific procurement requirements is scoped case by case — tell us the framework and we will tell you honestly if we are the right fit." },
    ],
  },
  {
    slug: "custom-software-development-islamabad",
    city: "Islamabad",
    citySlug: "islamabad",
    serviceSlug: "custom-software-development",
    serviceLabel: "Custom Software Development",
    title: "Custom Software Development in Islamabad",
    h1: "Custom software in Islamabad — systems for the capital's institutions",
    metaTitle: "Custom Software Development Islamabad",
    metaDescription:
      "Custom software in Islamabad: ERP, CRM, portals and admin systems for the capital's firms — written scope, UAT with your staff, under $25/hr.",
    intro: [
      "The capital buys software differently: longer procurement, more stakeholders, and systems that have to report up a chain. Our Islamabad clients are consultancies, professional firms, NGOs, and the HQs of multi-city groups — and the software has to be clean enough to show to a committee, solid enough to run daily, and documented enough that the client's own IT can take it over.",
      "The delivery model is built around that reality: a written scope that can go through procurement, weekly demos, UAT with the client's staff, and a handover pack (documentation, access lists, training recordings) that survives an audit. The team builds from Lahore and travels to Islamabad for the milestones that need a room.",
    ],
    local: [
      { title: "Procurement-ready documentation", text: "Scope, SOW, acceptance criteria and handover documentation written to the standard an Islamabad procurement file expects." },
      { title: "Reporting built in", text: "Multi-level dashboards and exportable reports — because in the capital the system's output usually has to go somewhere above the user." },
      { title: "Handover that outlives the project", text: "Your IT team gets the docs, the access model and the training recordings — the software is yours to operate, not ours to babysit." },
    ],
    deliverables: [
      "CRM and case-management systems for consultancies and professional firms",
      "ERP modules: inventory, finance and reporting for multi-city groups",
      "Portals with secure login, roles and audit trails",
      "Data migration and UAT packs for existing in-house systems",
    ],
    faqs: [
      { question: "Our procurement needs a detailed SOW before we start — can you do that?", answer: "It is how we work by default: scope, deliverables, milestones, acceptance criteria and pricing in one document, before any work begins. It is the same document your file will need." },
      { question: "Can you integrate with our existing government/agency systems?", answer: "Case by case — where there are APIs or exchange formats, yes, and we will scope the integration honestly (including when it needs the other side's IT team). Where there is nothing to integrate against, we tell you what that means for the timeline." },
      { question: "Who hosts the system?", answer: "Wherever your policy allows: your own infrastructure, a Pakistani cloud account in your name, or managed hosting we set up for you. Data residency and backup policy are written into the scope." },
    ],
  },
  {
    slug: "crm-erp-islamabad",
    city: "Islamabad",
    citySlug: "islamabad",
    serviceSlug: "crm-erp-solutions",
    serviceLabel: "CRM/ERP Solutions",
    title: "CRM & ERP Software in Islamabad",
    h1: "CRM and ERP software in Islamabad — sized to your organisation",
    metaTitle: "CRM ERP Software Islamabad | Custom",
    metaDescription:
      "CRM & ERP software in Islamabad: custom, module-by-module systems for the capital's firms — written scope, UAT with your staff, handover pack included.",
    intro: [
      "Off-the-shelf ERP in Islamabad usually ends the same way: bought for the feature list, resisted by the staff, and quietly abandoned by month six. We build CRM and ERP the other way — module by module, sized to the organisation, starting with the two or three processes that hurt most, and extending as the system earns trust.",
      "The capital's firms get the full delivery frame: a scope document that stands in a procurement file, UAT run with your staff on real workflows, and a handover pack your IT can operate. The build runs from the Lahore studio; the milestones that need a room happen in Islamabad.",
    ],
    local: [
      { title: "Module-by-module, not big-bang", text: "Start with inventory + billing, then add the CRM, then the production module — each phase scoped, demoed and in production before the next starts." },
      { title: "Staff adoption is a deliverable", text: "Short training recordings, an Urdu-friendly interface where the floor staff need it, and the permissions model that matches how the organisation actually works." },
      { title: "Data comes with the system", text: "Migration of the existing ledgers, customer lists and stock counts — mapped, reconciled and signed off in UAT, not 'imported and hope'." },
    ],
    deliverables: [
      "CRM pipelines and case tracking for consultancies and professional firms",
      "ERP modules: inventory, purchasing, finance and costing",
      "Reporting and dashboards at every level of the organisation",
      "Migration, UAT and handover packs as first-class deliverables",
    ],
    faqs: [
      { question: "SAP/Oracle versus custom — which are you recommending?", answer: "If your organisation is large enough for enterprise suites, a big suite may be right and we will say so. For mid-size organisations, custom modules usually cost less, fit better and run faster — the comparison is written down with the trade-offs before you decide." },
      { question: "How long does a phased ERP take?", answer: "The first module (typically inventory + billing) is usually 6–10 weeks of scheduled work with UAT; each subsequent module is scoped from the live system's usage. The written plan carries the dates." },
      { question: "What does the handover pack include?", answer: "Architecture and data-model documentation, access and credential model, runbooks (backup, restore, common fixes), training recordings, and a knowledge-transfer session with your IT — the pack is a named deliverable in the scope." },
    ],
  },
  {
    slug: "it-consulting-islamabad",
    city: "Islamabad",
    citySlug: "islamabad",
    serviceSlug: "it-consulting",
    serviceLabel: "IT Consulting",
    title: "IT Consulting in Islamabad",
    h1: "IT consulting in Islamabad — honest technical advice, in writing",
    metaTitle: "IT Consulting Islamabad | Advisory & Audits",
    metaDescription:
      "IT consulting in Islamabad: technology audits, vendor reviews, architecture advice and roadmap planning from engineers who ship — reports you can keep.",
    intro: [
      "The capital's IT decisions are made in committees, which means they need documents: the audit that justifies the budget, the architecture note that settles the argument, the vendor comparison that survives the procurement file. Our consulting work produces exactly that — technical advice from working engineers, written down, with the trade-offs and the costs, so the decision can be made on paper as well as in the meeting.",
      "It runs the same way as everything else we do: a short discovery, a written engagement (scope, deliverables, timeline), and the deliverable when it is due. The consultants are the engineers who build the systems they recommend — and they travel to Islamabad for the working sessions when the organisation wants them in the room.",
    ],
    local: [
      { title: "Documents the committee can use", text: "Audits, roadmaps and vendor comparisons written to be filed — clear findings, honest trade-offs, and the cost of each option." },
      { title: "Advisors who ship", text: "The people giving you the architecture advice are the people who would build it — the recommendations survive contact with a real codebase and a real deadline." },
      { title: "Working sessions in the room", text: "Discovery and steering sessions in Islamabad when the organisation wants them; the analysis runs on the schedule, remote or present." },
    ],
    deliverables: [
      "Technology and codebase audits with risk-rated findings",
      "Build-vs-buy analyses and vendor comparison documents",
      "Architecture reviews and migration plans (cloud, stack, data)",
      "Digital roadmaps with phased budgets for board sign-off",
    ],
    faqs: [
      { question: "What does a typical consulting engagement look like?", answer: "Two to six weeks: a discovery week, the analysis, a written deliverable (audit, roadmap or build-vs-buy), and a working session to walk the committee through it. Scope and price are fixed before it starts." },
      { question: "Can you review a system another company built for us?", answer: "Yes — codebase audits and architecture reviews are some of the most requested pieces of work. The report is for you: findings, risks and the cost of each fix, with no obligation to hire us for the fixes." },
      { question: "If we need the build after the audit, do you discount it?", answer: "The audit is priced as its own deliverable. If the build follows, the work already done is credited against the plan — the discount is in the scope, not promised on a call." },
    ],
  },
];

export function getGeoPage(slug: string): GeoPage | undefined {
  return geoPages.find((page) => page.slug === slug);
}

export const geoSlugs = geoPages.map((page) => page.slug);
