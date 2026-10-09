import type { Faq } from "@/lib/types";

export type HireRateRow = { tier: string; range: string; fits: string };

export type HirePage = {
  slug: string;
  kind: "tech" | "market";
  /** Short label for cards, e.g. "React" or "USA". */
  label: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  roles: { name: string; note: string }[];
  rates: HireRateRow[];
  stack: string[];
  why: { title: string; text: string }[];
  faqs: Faq[];
  /** Service page slugs this hire page links to. */
  relatedServices: string[];
  /** Short blurb shown on the hub card. */
  blurb: string;
};

/**
 * Shared rate framing — honest, and consistent with the "Under $25 / hr"
 * rate band published on the Clutch profile. These are monthly retainer
 * ranges for one dedicated developer, always scoped in writing first.
 */
const standardRates: HireRateRow[] = [
  {
    tier: "Junior developer",
    range: "$900 – $1,400 / month",
    fits: "Defined tasks inside a scope your team leads — UI work, feature modules, QA-heavy sprints.",
  },
  {
    tier: "Mid-level developer",
    range: "$1,500 – $2,600 / month",
    fits: "The usual pick: owns features end to end, estimates sensibly, needs no hand-holding.",
  },
  {
    tier: "Senior / lead developer",
    range: "$2,400 – $4,000 / month",
    fits: "Architecture calls, code review, unblocking a team, or carrying a hard module solo.",
  },
];

export const hireHub = {
  title: "Hire Developers in Pakistan",
  h1: "Hire developers from Pakistan — scoped in writing, owned by you",
  metaTitle: "Hire Developers in Pakistan | Dedicated Teams",
  metaDescription:
    "Hire dedicated React, Next.js, Node, Laravel, Flutter, Python, Shopify and WordPress developers in Pakistan. Written scopes, weekly demos, under $25/hr.",
  blurb:
    "Dedicated developers and small teams from our Lahore studio, scoped in writing, with weekly demos and full code ownership.",
  intro: [
    "This page is for teams that need specific engineers, not a project sale. You bring the backlog — from a single missing feature to a full squad — and we match you with the developer(s) who fit the stack and the timezone, at a rate that makes sense for a Pakistan-based team.",
    "Every hire engagement works the same way as our project work: a written scope of who is on the team, what hours they cover, what they will deliver each week, and what you own at the end (everything — repos, code, accounts). There is no agency markup on a hidden layer, and the people you meet are the people who code.",
    "We are deliberately small. We do not keep a bench of 200 freelancers and match you by algorithm; the developers listed here are the team that also builds our own products, so you are hiring from working engineers, not a directory of CVs.",
  ],
  howItWorks: [
    { step: "01", title: "Tell us the stack and the hours", text: "Technology, seniority, timezone overlap, and whether this is a sprint or an ongoing team. A 20-minute call is usually enough." },
    { step: "02", title: "We propose the team in writing", text: "Names, roles, weekly deliverables, hours and a monthly rate — in a document you can keep, not a slide deck." },
    { step: "03", title: "Weekly demos, one channel", text: "Working software every week in your repo or staging. One shared channel where decisions are recorded." },
    { step: "04", title: "You own everything", text: "Repositories, infrastructure and documentation live in your accounts from day one. Leave whenever — nothing is held against you." },
  ],
  faqs: [
    { question: "How does billing work for a developer hire?", answer: "A fixed monthly retainer per developer, agreed in writing before they start. No hourly metering surprises, no usage fees. If scope changes mid-month, the change is agreed in the same writing before work continues." },
    { question: "Can you join our existing codebase and ceremonies?", answer: "Yes. Developers join your board, your repo and your standups from the first week. We ask for 1–2 days of read time on an unfamiliar codebase before promising speed — that is normal, and we will tell you if your codebase needs more onboarding than that." },
    { question: "What if we need more than one developer?", answer: "We compose small teams (typically 1–4 people) with a lead who owns the plan. Everything is scoped as a team, so you pay for outcomes, not headcount alone." },
    { question: "Do developers sign NDAs and IP assignments?", answer: "Yes, on request, before the first commit. The IP you commission is yours; we ask only for the standard right to describe the work at a high level when you approve it." },
    { question: "What happens if a developer is unavailable?", answer: "A named backup from the same stack covers the hours, and you are told in the weekly report, not by a missed standup. If coverage cannot be maintained, the retainer is adjusted for the gap." },
  ],
  relatedServices: ["it-consulting", "custom-software-development"],
};

export const hirePages: HirePage[] = [
  {
    slug: "react",
    kind: "tech",
    label: "React",
    title: "Hire React Developers",
    h1: "Hire React Developers in Pakistan",
    metaTitle: "Hire React Developers in Pakistan",
    metaDescription:
      "Hire React developers in Pakistan: typed component systems, server rendering for SEO, testing and CI. Weekly demos, written scope, under $25/hr.",
    blurb: "Typed component systems, server rendering, testing — React engineers who have shipped production SPAs.",
    intro: [
      "Our React developers build the front ends of products that have to survive real traffic: typed component libraries, state management that stays readable at 200 components, server rendering where SEO matters, and testing on the paths that hurt when they break.",
      "Most of this work happens inside our own products — the portfolio and marketplace pages on this site are server-rendered React — so the engineers you hire have shipped and maintained production React, not only course projects.",
    ],
    roles: [
      { name: "Frontend engineer (React)", note: "Component systems, hooks, accessibility, performance profiling in the browser." },
      { name: "React + SEO engineer", note: "Server rendering, metadata, Core Web Vitals budgets — for pages that have to rank." },
      { name: "Frontend lead", note: "Design-system ownership, code review, and keeping a growing app fast." },
    ],
    rates: standardRates,
    stack: ["React", "TypeScript", "Next.js", "Vite", "Testing Library", "Playwright"],
    why: [
      { title: "Typed by default", text: "TypeScript across the codebase — the kind of codebase your other engineers can take over without a translation layer." },
      { title: "Performance budgets", text: "Bundle size and Core Web Vitals targets are agreed before the first sprint, and tested in CI." },
      { title: "Design systems that last", text: "Reusable, documented components — so the fifth screen is faster than the second, not slower." },
      { title: "Your repo, your calls", text: "Branches, reviews and staging in your accounts. We work in your toolchain, not a parallel one." },
    ],
    faqs: [
      { question: "Do you use class components or plain JSX?", answer: "Function components with hooks, typed props and custom hooks for shared behaviour. Class components only when migrating a legacy codebase where the cost of rewriting is higher than the cost of keeping them." },
      { question: "Can a React developer also handle the CMS or headless setup?", answer: "Yes — several of our engineers pair React front ends with headless CMS models (content structure, editor roles, preview). If you need the CMS side to be deep, we scope it as part of the hire." },
      { question: "What is a realistic first-week output?", answer: "Day 1–2: environment, lint, CI and a read-through of the relevant code. Day 3–5: first reviewed PR against your board. We will not promise more than that, and we will not bill you for pretending to." },
      { question: "Do you support older React versions?", answer: "React 16 and 17 maintenance is fine; new work on 18+. If your app is on 15 or earlier, we will tell you the upgrade path and its cost before you decide." },
    ],
    relatedServices: ["web-development", "custom-web-application-development", "ui-ux-design"],
  },
  {
    slug: "nextjs",
    kind: "tech",
    label: "Next.js",
    title: "Hire Next.js Developers",
    h1: "Hire Next.js Developers in Pakistan",
    metaTitle: "Hire Next.js Developers in Pakistan",
    metaDescription:
      "Hire Next.js developers in Pakistan: SSR/ISR pages, metadata, image optimisation and Core Web Vitals — the team that builds this site runs on Next.js.",
    blurb: "SSR/ISR, metadata, image pipelines and CWV budgets — this very website is built and run by the same engineers.",
    intro: [
      "Next.js is where our engineering is most visible: this website, with its 200+ pages of generated HTML, schema and sitemaps, is a Next.js application. The developers on this page are the ones who built it and keep it fast — which means you are hiring engineers who have solved real caching, metadata and rendering problems at this scale, not a tutorial list.",
      "We hire Next.js engineers for products where the front end has to rank, load fast on mobile networks, and still be maintainable by a small team. That combination — SEO, performance, maintainability — is the whole job.",
    ],
    roles: [
      { name: "Next.js engineer", note: "App Router and Pages Router, RSC, ISR, middleware, server actions." },
      { name: "Full-stack Next.js engineer", note: "API routes, auth, database and deploy pipeline in the same repo." },
      { name: "Performance engineer (frontend)", note: "CWV budgets, image pipelines, edge caching, bundle audits." },
    ],
    rates: standardRates,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    why: [
      { title: "Proven at 200+ pages", text: "Our own site generates 200+ static pages with unique metadata and schema — the same discipline applied to your product." },
      { title: "SEO as engineering", text: "Metadata, sitemaps, canonicals and Core Web Vitals are built into the app, not patched after launch." },
      { title: "Migration experience", text: "Pages → App Router, legacy React → Next, and theme rebuilds with URL maps that protect rankings." },
      { title: "One team, whole stack", text: "The same engineers handle the server actions, the database and the deploy — no handoffs inside the hire." },
    ],
    faqs: [
      { question: "App Router or Pages Router — can you work in either?", answer: "Both. New work goes App Router; when we are inside an existing codebase we follow its structure and upgrade only where the cost is worth it, with the plan written down first." },
      { question: "Can you move our existing site to Next.js without losing rankings?", answer: "Yes — migration is scoped as its own phase: every URL mapped, 301 redirects where needed, content preserved, and indexing verified in Search Console after launch. We have run this process for clients and for this site's own evolution." },
      { question: "Do you deploy to Vercel or self-host?", answer: "Either. Vercel when the edge network is the point; a self-hosted Docker build (Node server) when you need the app inside your own infrastructure or cloud account. You own the account either way." },
      { question: "What about Next.js + headless CMS?", answer: "A common pairing for us: Next front end, headless CMS for content, structured content models so editors can work without a developer. Scope it as one engagement and the two sides stay in sync." },
    ],
    relatedServices: ["web-development", "technical-seo", "custom-cms-development"],
  },
  {
    slug: "nodejs",
    kind: "tech",
    label: "Node.js",
    title: "Hire Node.js Developers",
    h1: "Hire Node.js Developers in Pakistan",
    metaTitle: "Hire Node.js Developers in Pakistan",
    metaDescription:
      "Hire Node.js developers in Pakistan: typed APIs, queues, webhooks and background jobs. Production experience from our own live platforms.",
    blurb: "Typed APIs, webhooks, queues and background jobs — Node engineers from a team that runs live marketplaces.",
    intro: [
      "Our backend work is Node.js and TypeScript: the APIs behind our own marketplaces, the webhooks that move money and inventory, and the background jobs that keep data consistent while the counter keeps selling. Hiring a Node developer from this team means hiring someone who has run this in production, with monitoring, not just on localhost.",
      "We scope backend hires around the system, not the person: what the API has to do, what it must survive (load, outages, bad input), and how your team will operate it afterwards.",
    ],
    roles: [
      { name: "Backend engineer (Node)", note: "REST and typed APIs, auth, database design, payments and webhook integrations." },
      { name: "API + integrations engineer", note: "Third-party APIs, payment gateways, shipping, notifications — the connective tissue." },
      { name: "Backend lead", note: "Architecture, review, and keeping the system operable as it grows." },
    ],
    rates: standardRates,
    stack: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker"],
    why: [
      { title: "Production-first", text: "Logging, monitoring, error budgets and rollback paths are part of the first sprint — not a phase-two discussion." },
      { title: "Typed end to end", text: "TypeScript from the API surface to the database layer, so contract breaks fail in CI, not in production." },
      { title: "Real integrations", text: "Payment gateways, courier APIs, WhatsApp and email — the messy real-world connections, done and documented." },
      { title: "Operated, not just built", text: "The same engineers who write the API set up its monitoring and the on-call notes your team will use." },
    ],
    faqs: [
      { question: "Express, NestJS or Fastify — which will we get?", answer: "Matched to your codebase; for new systems we usually propose NestJS or plain Express with a strict module structure. The decision is written down with trade-offs, and you make the call." },
      { question: "Can a Node developer work on our microservices?", answer: "Yes — including the unglamorous parts: service contracts, queue design, retry semantics and the observability that tells you a service is unhealthy before users report it." },
      { question: "Do you handle database design too?", answer: "Backend hires include data modelling — schema, indexes, migration strategy. PostgreSQL is our default; MongoDB and others where the shape of the data genuinely fits." },
      { question: "What about scale — how far can this team take an API?", answer: "Our live marketplaces handle real traffic with caching, queueing and read replicas added as load demanded it. If your product is pre-scale, we will tell you the honest threshold and the cheap ways to reach it." },
    ],
    relatedServices: ["api-development", "custom-software-development", "devops-cloud-solutions"],
  },
  {
    slug: "laravel",
    kind: "tech",
    label: "Laravel",
    title: "Hire Laravel Developers",
    h1: "Hire Laravel Developers in Pakistan",
    metaTitle: "Hire Laravel Developers in Pakistan",
    metaDescription:
      "Hire Laravel developers in Pakistan: modern typed Laravel, queues, admin panels and FBR-compliant invoicing. Weekly demos, written scope.",
    blurb: "Modern typed Laravel — queues, admin panels, payment gateways and FBR-compliant invoicing for Pakistani businesses.",
    intro: [
      "Laravel is the workhorse behind much of what Pakistani businesses actually buy: admin panels, billing, inventory, school and society portals — systems that have to keep working while the business runs on them. Our Laravel engineers write modern, typed Laravel: Pest/PHPUnit tests on the money paths, queues for anything slow, and admin interfaces a non-technical team can use.",
      "Because we build for the local market, our Laravel work includes the details international teams often miss: FBR digital invoicing, JazzCash/Easypaisa payments, offline-tolerant behaviour, and Urdu alongside English.",
    ],
    roles: [
      { name: "Laravel engineer", note: "Modules, Eloquent, queues, events — modern Laravel 11/12 with typed models." },
      { name: "Admin & portal engineer", note: "The back-office systems: dashboards, role-based access, reports, exports." },
      { name: "Integrations engineer", note: "Payment gateways, SMS/WhatsApp, FBR e-invoicing, courier and bank APIs." },
    ],
    rates: standardRates,
    stack: ["Laravel", "PHP 8", "TypeScript", "PostgreSQL", "Redis", "Pest"],
    why: [
      { title: "Money paths are tested", text: "Billing, payments and refunds get automated tests and logging — the parts where a bug costs real money." },
      { title: "Local rails included", text: "JazzCash, Easypaisa, bank integrations and FBR invoicing are things we have built, not looked up." },
      { title: "Admins people actually use", text: "Back offices designed around the daily workflow, with the permissions model your team will not fight." },
      { title: "Migrations without downtime", text: "Upgrades and data migrations are planned and rehearsed, because your business is open during them." },
    ],
    faqs: [
      { question: "Can you maintain a legacy Laravel app?", answer: "Yes — including older versions. We start with an audit: what is risky, what should be upgraded, what can stay. You get a written plan with the cost of each path before we touch anything." },
      { question: "Laravel or Node — which will you recommend for us?", answer: "We will recommend based on your team and your load, in writing, with the trade-offs. If your existing team is Laravel, a Laravel hire will integrate faster and be cheaper to keep — we say that plainly." },
      { question: "Do Laravel hires cover the front end?", answer: "Blade and Livewire fully. If the front end is a separate SPA, we pair the Laravel hire with a React/Next.js developer from the same team so there is one scope and one plan." },
      { question: "What about cron jobs and queues in our environment?", answer: "Scheduler, queues and worker setup are part of the handover documentation — including how to see them and restart them, so the system does not depend on us staying." },
    ],
    relatedServices: ["custom-software-development", "pos-software", "crm-erp-solutions"],
  },
  {
    slug: "flutter",
    kind: "tech",
    label: "Flutter",
    title: "Hire Flutter Developers",
    h1: "Hire Flutter Developers in Pakistan",
    metaTitle: "Hire Flutter Developers in Pakistan",
    metaDescription:
      "Hire Flutter developers in Pakistan: one codebase for Android and iOS, offline-first apps, store publishing and monetisation included.",
    blurb: "One codebase, two stores — offline-first Flutter engineers who have shipped, published and updated real apps.",
    intro: [
      "Flutter is how our mobile team ships one codebase to Android and iOS without hiring two teams: the marketplace apps in our showcase, the bilingual (English/Urdu) product work, and the offline-first patterns that matter on Pakistani networks. The developers on this page have taken apps from first commit through store review to paid updates.",
      "We scope Flutter hires around the app's hardest requirement — usually offline behaviour, device fragmentation or store compliance — and staff accordingly.",
    ],
    roles: [
      { name: "Flutter engineer", note: "Widgets, state management (Riverpod/Bloc), local databases, offline sync." },
      { name: "Mobile QA + store engineer", note: "Device matrix testing, store submission, data-safety forms, staged rollouts." },
      { name: "Mobile lead", note: "Architecture, performance profiling, and keeping both stores current." },
    ],
    rates: standardRates,
    stack: ["Flutter", "Dart", "Firebase", "SQLite", "REST/GraphQL", "App Store / Play"],
    why: [
      { title: "Offline-first by design", text: "Apps that work on a weak connection and sync when they can — the pattern for most of the market we build for." },
      { title: "Both stores, one team", text: "Play Console and App Store publishing handled as part of the engagement, not as a favour after the fact." },
      { title: "Bilingual UI experience", text: "English/Urdu layouts, right-to-left correctness and local payment rails are things we have built, not translated." },
      { title: "Performance budgets on devices", text: "Frame-rate and memory targets tested on mid-range devices — where most of your users actually are." },
    ],
    faqs: [
      { question: "Flutter or React Native for our app?", answer: "Both are workable; we recommend based on your backend, your team's skills and the app's platform-specific needs — in writing, with the trade-offs. If you already have a React-native codebase, we maintain it rather than force a rewrite." },
      { question: "Can you take over an existing Flutter app?", answer: "Yes. First step is a short audit: architecture, state management, store status and the riskiest modules. You get a written plan before any code changes." },
      { question: "Do hires include store publishing and compliance?", answer: "Yes — developer accounts, data-safety declarations, review responses and staged rollouts are inside the scope of a Flutter hire, with the accounts set up in your name." },
      { question: "What about app monetisation (ads, in-app purchases)?", answer: "AdMob, in-app purchases and subscriptions are covered — including the policy details that get apps rejected (ad placement, IAP rules, privacy manifests)." },
    ],
    relatedServices: ["flutter-app-development", "mobile-app-development", "app-store-optimization"],
  },
  {
    slug: "react-native",
    kind: "tech",
    label: "React Native",
    title: "Hire React Native Developers",
    h1: "Hire React Native Developers in Pakistan",
    metaTitle: "Hire React Native Developers in Pakistan",
    metaDescription:
      "Hire React Native developers in Pakistan: Expo or bare, native modules, offline sync and store publishing — with your JS team's shared skills.",
    blurb: "React Native engineers who share your JS skill pool — Expo or bare, native modules, store publishing included.",
    intro: [
      "React Native is the right call when your team already thinks in JavaScript/TypeScript and you want one mobile codebase across Android and iOS. Our React Native developers build Expo and bare workflows, write the native modules when the JS layer is not enough, and own the store publishing pipeline end to end.",
      "Because our web engineers use the same language, a React Native hire slots into a team that already has a TypeScript front end — shared types, shared component thinking, less translation between web and mobile.",
    ],
    roles: [
      { name: "React Native engineer", note: "Expo and bare workflows, navigation, async storage, offline queues." },
      { name: "Native modules engineer", note: "Kotlin/Swift when the platform demands it — cameras, BLE, payments SDKs." },
      { name: "Mobile QA + store engineer", note: "Device matrix, store submissions, review handling, staged rollouts." },
    ],
    rates: standardRates,
    stack: ["React Native", "TypeScript", "Expo", "Kotlin", "Swift", "Firebase"],
    why: [
      { title: "Shared types with web", text: "API types written once, used by the React web app and the RN app — contract drift becomes a compile error, not a user bug." },
      { title: "Native where it counts", text: "We write the Kotlin/Swift modules when needed, so 'the library does not support it' is not the end of the conversation." },
      { title: "Store pipeline owned", text: "Build pipelines, screenshots, listings, review responses and staged rollouts — publishing is a delivered artifact." },
      { title: "Mid-range device targets", text: "Performance budgets tested on the devices your market actually uses, not just the reviewer's flagship." },
    ],
    faqs: [
      { question: "Expo or bare React Native?", answer: "Expo (with dev clients) for speed unless the app needs heavy native code; bare when it does. The decision is documented with the reason, and we can migrate between them if requirements change." },
      { question: "Can you maintain a React Native app another agency built?", answer: "Yes — audit first (architecture, dependencies, store status), then a written plan. We are honest about when a rebuild is cheaper than a rescue, including when we are the ones who would do the rebuild." },
      { question: "Do you handle push notifications and deep links?", answer: "Yes — FCM/APNs setup, notification preferences, deep linking and universal links are standard parts of the scope." },
      { question: "What about app size and store limits?", answer: "Bundle analysis is part of the build pipeline; when the Play/App size budgets get tight we split the work (APK splits, modular code) rather than ship a bloat update." },
    ],
    relatedServices: ["mobile-app-development", "react", "app-store-publishing"],
  },
  {
    slug: "python",
    kind: "tech",
    label: "Python",
    title: "Hire Python Developers",
    h1: "Hire Python Developers in Pakistan",
    metaTitle: "Hire Python Developers in Pakistan",
    metaDescription:
      "Hire Python developers in Pakistan: FastAPI services, data pipelines, automation and practical AI integrations — scoped and tested.",
    blurb: "FastAPI services, data pipelines, automation and practical AI integrations — tested, typed, documented.",
    intro: [
      "Python on our team does three jobs: the FastAPI services behind data-heavy products, the pipelines that move and clean data, and the automation that removes manual work from a business's day. The same discipline applies to all three — typed code, tests on the important paths, and documentation another engineer can take over.",
      "For AI work we are deliberately practical: a document-extraction pipeline or an internal-search assistant that a team will actually use, with evaluation and fallbacks — not a demo that dies in the fourth week.",
    ],
    roles: [
      { name: "Python backend engineer", note: "FastAPI services, Celery/RQ jobs, data validation, typed models." },
      { name: "Data engineer", note: "ETL pipelines, warehouse loading, scheduled refreshes, quality checks." },
      { name: "AI integration engineer", note: "LLM pipelines, RAG search, evaluation harnesses, cost and latency budgets." },
    ],
    rates: standardRates,
    stack: ["Python 3.12", "FastAPI", "Pandas", "PostgreSQL", "Docker", "LangChain"],
    why: [
      { title: "Typed and tested", text: "Pydantic models, type hints and tests on the data paths — Python that behaves like the rest of a professional codebase." },
      { title: "Automation that survives", text: "Scripts become services: monitoring, retries, logs and runbooks, so the automation does not quietly die in month two." },
      { title: "AI with evaluation", text: "Any AI feature ships with an eval set and a fallback path — you know when it is wrong, and the business keeps working." },
      { title: "Cost-aware builds", text: "API spend, query costs and compute are tracked from the first sprint, because an unmonitored pipeline is a billing surprise." },
    ],
    faqs: [
      { question: "FastAPI or Django — which will we get?", answer: "FastAPI for new API services; Django where the admin and ORM conventions pay for themselves. The recommendation is written with the trade-offs before work starts." },
      { question: "Can a Python developer join an existing data team's workflows?", answer: "Yes — Airflow, dbt, cloud warehouses: we adopt your pipeline tooling and work inside it rather than bringing a parallel stack." },
      { question: "What does 'practical AI' mean in a scope document?", answer: "A named task (extract, classify, search, draft), an evaluation set with pass criteria, a latency and cost budget, and a human fallback. If those cannot be written down, we tell you the idea is not ready to build yet." },
      { question: "Do you work with notebooks or only production code?", answer: "Both, in order: exploration in notebooks, then the surviving logic promoted to typed, tested modules. The notebook does not ship; the module does." },
    ],
    relatedServices: ["ai-solutions", "api-development", "custom-software-development"],
  },
  {
    slug: "shopify",
    kind: "tech",
    label: "Shopify",
    title: "Hire Shopify Developers",
    h1: "Hire Shopify Developers in Pakistan",
    metaTitle: "Hire Shopify Developers in Pakistan",
    metaDescription:
      "Hire Shopify developers in Pakistan: Liquid and headless, Plus builds, app integrations, migrations and store performance — scoped weekly.",
    blurb: "Liquid, headless and Plus builds — migrations, app integrations and store speed, from engineers who run e-commerce themselves.",
    intro: [
      "Our Shopify engineers build and run real stores: the Veranne storefront in our showcase is one of them. That means the people you hire have lived with the platform's edges — app dependency sprawl, theme conflicts, checkout limits, migration data loss — and have patterns for all of them.",
      "We scope Shopify hires by the store's actual problem: a slow theme, a migration from WooCommerce, a Plus build, or a headless front end. The hire is matched to that, with weekly demos and the store accounts in your name from day one.",
    ],
    roles: [
      { name: "Shopify theme engineer", note: "Liquid, theme architecture, sections, performance, accessibility." },
      { name: "Shopify Plus / headless engineer", note: "Plus checkout extensibility, Hydrogen/Remix, app integrations." },
      { name: "Migration & data engineer", note: "Catalogue, orders and customer migration with zero lost data and clean URLs." },
    ],
    rates: standardRates,
    stack: ["Shopify", "Liquid", "Hydrogen", "Remix", "JavaScript", "Metaobjects"],
    why: [
      { title: "Migrations without lost data", text: "Catalogue, variants, orders, customers — mapped, validated and reconciled, with the URL structure protected for SEO." },
      { title: "App dependency control", text: "We audit what the app stack actually costs and does, and remove or replace what is not earning its place." },
      { title: "Speed as a deliverable", text: "Theme weight and Core Web Vitals budgets are part of the scope — stores that sell on mobile networks, not just in the simulator." },
      { title: "Accounts stay yours", text: "Store, app and developer access set up in your accounts; we are replaceable by design, which is exactly what you want." },
    ],
    faqs: [
      { question: "Theme development or full headless — which do we need?", answer: "A custom Liquid theme covers most stores; headless (Hydrogen) pays off when the front end has to be radically different or multi-market. We will tell you which, with the cost difference, before you decide." },
      { question: "Can you migrate from WooCommerce or a custom store?", answer: "Yes — it is scoped as a phase: data mapping, URL redirects, SEO transfer and a parallel-run window. You do not go dark for a weekend." },
      { question: "Do hires cover app installation and configuration?", answer: "Yes — payments (including the local gateways and COD flows for Pakistan), shipping rules, email and analytics are inside the scope, with configuration documented." },
      { question: "What about Shopify Plus pricing limits on your rates?", answer: "Our rates are the same whether the store is on Basic or Plus — the platform fee is Shopify's, and we will never mark up an app or plan we install." },
    ],
    relatedServices: ["ecommerce-shopify", "ecommerce-development", "woocommerce-development"],
  },
  {
    slug: "wordpress",
    kind: "tech",
    label: "WordPress",
    title: "Hire WordPress Developers",
    h1: "Hire WordPress Developers in Pakistan",
    metaTitle: "Hire WordPress Developers in Pakistan",
    metaDescription:
      "Hire WordPress developers in Pakistan: hardening, speed, custom themes, WooCommerce and clean migrations — without the plugin sprawl.",
    blurb: "Hardened, fast WordPress — custom themes, WooCommerce, and migrations that protect your rankings.",
    intro: [
      "We build with modern stacks by default, which makes our WordPress work more disciplined, not less: when a WordPress hire is the right call — because your team lives in it, or the ecosystem fits — we bring the same engineering standard. Hardened installs, lean plugin sets, custom theme code where it matters, and Core Web Vitals budgets.",
      "We also do the unglamorous WordPress work: rescue projects where the site is slow, insecure or uneditable, and migrations to or from WordPress with the URL structure protected.",
    ],
    roles: [
      { name: "WordPress engineer", note: "Custom themes, block development, performance, security hardening." },
      { name: "WooCommerce engineer", note: "Catalogue, checkout, gateways, shipping — stores that actually process orders." },
      { name: "Migration engineer", note: "To or from WordPress: content mapping, redirects, SEO transfer, editor training." },
    ],
    rates: standardRates,
    stack: ["WordPress", "PHP", "WooCommerce", "MySQL", "ACF", "Varnish/Redis"],
    why: [
      { title: "Plugin discipline", text: "Every plugin earns its place — a documented list of what the site runs on, what it costs, and who can remove it." },
      { title: "Editor-proof setups", text: "Custom post types, field groups and permissions so your content team can work without breaking the site." },
      { title: "Speed targets in writing", text: "Load budgets and caching architecture (object cache, CDN, image pipeline) agreed before the first change." },
      { title: "Security that is boring", text: "Automatic updates policy, least-privilege accounts, staging, backups and a recovery drill — the maintenance that prevents the 3 a.m. call." },
    ],
    faqs: [
      { question: "Will you recommend keeping WordPress, or migrating away?", answer: "Honest answer: if the site is content-driven and your team knows WordPress, keep it — a well-run WordPress site is cheaper to maintain than a bespoke stack. We will say when a migration is worth it, and when it is not, even if the migration is more work for us." },
      { question: "Can you fix a hacked or heavily compromised site?", answer: "Yes — containment first (clean rebuild from known-good content), then forensics on how it happened, then hardening. We document the incident so it cannot repeat." },
      { question: "Do you do headless WordPress?", answer: "Yes — WordPress as the content API with a Next.js or React front end. Useful when editors need WordPress but the front end needs to be fast and custom." },
      { question: "What does a typical maintenance engagement include?", answer: "Updates (with staging), backups, monitoring, security patches, a monthly report and a named contact — scoped and priced in writing, no open-ended 'support'." },
    ],
    relatedServices: ["wordpress-development", "woocommerce-development", "website-speed-optimization"],
  },
  {
    slug: "full-stack",
    kind: "tech",
    label: "Full-Stack",
    title: "Hire Full-Stack Developers",
    h1: "Hire Full-Stack Developers in Pakistan",
    metaTitle: "Hire Full-Stack Developers in Pakistan",
    metaDescription:
      "Hire full-stack developers in Pakistan: TypeScript end to end — React/Next front ends, Node or Laravel back ends, databases and deploys.",
    blurb: "TypeScript end to end — front end, API, database and deploy, from engineers who own the whole path.",
    intro: [
      "A full-stack hire is for the product that has to move as one: the feature that touches the UI, the API and the database, and the person who understands all three. Our full-stack developers are TypeScript-first — React/Next.js front ends, Node.js or Laravel back ends, a real database model, and the deploy pipeline that ships it.",
      "Because they build our own products this way, the developers you hire have owned the full path — including the unglamorous parts: migrations, caching, monitoring, and the day the load doubles.",
    ],
    roles: [
      { name: "Full-stack engineer", note: "Feature work across UI, API and data — the default hire for a growing product." },
      { name: "Full-stack lead", note: "Owns the plan: architecture, sprint shape, review, and the calls that keep a small team fast." },
      { name: "Product engineer (0→1)", note: "For early products: ships the version that creates value soonest, then extends it from real usage." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Laravel", "PostgreSQL"],
    why: [
      { title: "One accountable engineer", text: "The person who designs the schema writes the UI that uses it — fewer handoffs, fewer 'the back end did not tell me' bugs." },
      { title: "0→1 and 1→10 both covered", text: "MVP speed when you are finding the product; architecture discipline when you have it." },
      { title: "Deploy included", text: "CI, staging, environments and the production pipeline are part of the hire, so 'it works on their machine' never becomes the status update." },
      { title: "Honest scoping", text: "Weekly demos against a written plan — you see the delta every week and can redirect before a sprint is wasted." },
    ],
    faqs: [
      { question: "How fast can a full-stack hire start?", answer: "Usually within 1–2 weeks of the scope call, depending on the stack match. You get the name and role in writing before the start date, not after." },
      { question: "Can one full-stack developer carry our whole product?", answer: "For a focused product, yes — a strong full-stack engineer plus a weekly demo cadence carries a lot. When it stops scaling, we will tell you the specific bottleneck and propose the next hire." },
      { question: "What about DevOps — is that included?", answer: "The deploy pipeline, environments and basic monitoring are included. Deep DevOps (multi-region, Kubernetes at scale) is scoped as its own engagement with the DevOps team — we do not stretch a full-stack hire into a job that deserves its own." },
      { question: "Do you pair or do code reviews across the team?", answer: "Yes — a hire works in your codebase under your review standards, and our lead reviews their work too. Two sets of eyes on money paths is not optional." },
    ],
    relatedServices: ["custom-software-development", "saas-application-development", "web-development"],
  },
  {
    slug: "usa",
    kind: "market",
    label: "USA",
    title: "Hire Developers for USA Teams",
    h1: "Hiring software developers from Pakistan for USA teams",
    metaTitle: "Hire Developers from Pakistan | USA Teams",
    metaDescription:
      "US teams hire dedicated developers from our Lahore studio: 6–9 hour overlap, US phone and WhatsApp line, written scopes, code ownership, under $25/hr.",
    blurb: "6–9 hours of overlap with Eastern time, a US phone line, and scopes written in your timezone — not ours.",
    intro: [
      "The teams we work with in the United States are usually 2–10 people who need capacity without a full US hiring cycle: a backend engineer for the quarter, a React developer for the redesign, a lead to unblock a stalled product. We give them a named developer with written scope, weekly demos, and a US phone and WhatsApp line so the working relationship feels local.",
      "The overlap is engineered, not accidental: developers on US accounts work scheduled hours that cover Eastern morning through afternoon (6–9 hours), with the rest of the day on async work. Your standup is inside their day, and decisions do not wait 12 hours for a reply.",
    ],
    roles: [
      { name: "US-hours backend engineer", note: "Node/Laravel/Python, on your Eastern-time standups, your repo, your review standards." },
      { name: "US-hours frontend engineer", note: "React/Next.js, daily commits against your board, demos every week." },
      { name: "Technical lead (US overlap)", note: "Owns the plan for a small squad and carries the architecture calls." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL"],
    why: [
      { title: "Real overlap, scheduled", text: "6–9 hours of working overlap with Eastern time, agreed in the scope — not 'we are available on request'." },
      { title: "A US number that answers", text: "+1 line for calls and WhatsApp Business, so the handoff is not a timezone puzzle." },
      { title: "Your legal frame, our people", text: "NDA and IP assignment in your format before the first commit; the company behind the hire is SECP-registered — you can verify it." },
      { title: "No agency theatre", text: "The person in the call is the person in the commits. If the developer changes, you are told first and it is in writing." },
    ],
    faqs: [
      { question: "How do you handle contracts and IP for a US company?", answer: "We work under your agreement or ours — both cover IP assignment to you, confidentiality and termination. We are a registered private limited company (SECP/FBR), so the contract is company-to-company, not freelancer-to-company." },
      { question: "What currency and payment methods do you use?", answer: "USD, with invoices per the retainer. Bank transfer or the payment method your accounting prefers — the invoice details are in the scope document." },
      { question: "Can you start part-time, like 20 hours a week?", answer: "Yes — scopes can be fractional (20/30/40 hours per week per developer), and the rate scales with the commitment in writing." },
      { question: "What if we want to convert the hire into a project?", answer: "The weekly demos and written scope make the switch natural: the same team continues under a milestone plan, and nothing about the code or access changes." },
    ],
    relatedServices: ["custom-software-development", "it-consulting", "saas-application-development"],
  },
  {
    slug: "uk",
    kind: "market",
    label: "UK",
    title: "Hire Developers for UK Teams",
    h1: "Hiring software developers from Pakistan for UK teams",
    metaTitle: "Hire Developers from Pakistan | UK Teams",
    metaDescription:
      "UK teams hire dedicated developers from Lahore: 5–8 hour overlap, written scopes, weekly demos, NDA and IP in your format — under $25/hr.",
    blurb: "5–8 hours of overlap with UK time, written scopes and weekly demos — built for how UK SMEs actually buy software.",
    intro: [
      "UK clients usually come to us in two shapes: a growing SME that has had one off the shelf build go wrong and wants the next one done properly, or a small agency that needs overflow capacity without the overhead of a UK hire. Both get the same structure — a named developer, a written scope, weekly demos, and an English-speaking team that answers on a UK-working-hours channel.",
      "The overlap with UK time is 5–8 hours depending on the account, scheduled in the scope document. Your review meetings land inside the developer's day, and the async work covers the gap.",
    ],
    roles: [
      { name: "UK-hours full-stack engineer", note: "TypeScript end to end, on your board and your standups, inside UK working hours." },
      { name: "UK-hours frontend engineer", note: "React/Next.js for redesigns and new products, with design-system discipline." },
      { name: "E-commerce engineer (UK hours)", note: "Shopify/WooCommerce builds and migrations for retail brands." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Shopify", "Laravel", "PostgreSQL"],
    why: [
      { title: "Scope before code, in writing", text: "The document your accountant and your solicitor can both read — milestones, deliverables, IP, termination." },
      { title: "Built for SME reality", text: "We have priced for a 5-person business, not a Series C: honest ranges, and the confidence to recommend the smaller solution." },
      { title: "GDPR-aware builds", text: "Data handling, consent flows and processing documentation are part of the scope when the product handles EU data." },
      { title: "Verifiable company", text: "SECP-registered, FBR-registered, with a live product you can inspect before the first call — the anti-vaporware checklist." },
    ],
    faqs: [
      { question: "Do you sign an NDA before discussing our product?", answer: "Yes — yours or ours, before the discovery call. It is a standard step, not a negotiation." },
      { question: "What does UK-time overlap actually look like?", answer: "Typically 14:00–22:00 Pakistan time covering 09:00–17:00 UK time in winter (adjusting for the 5/6-hour difference across BST/winter). It is written into the scope with the days it applies." },
      { question: "Can you work with our existing UK developers?", answer: "Yes — that is the most common shape. Your team keeps the architecture role; our engineers carry the delivery load under your review. One shared board, one definition of done." },
      { question: "How do UK companies usually pay?", answer: "USD or GBP invoicing per the retainer; bank transfer. Some clients use escrow platforms — we are fine with that where it makes the first engagement easier." },
    ],
    relatedServices: ["web-development", "ecommerce-shopify", "custom-software-development"],
  },
  {
    slug: "uae",
    kind: "market",
    label: "UAE",
    title: "Hire Developers for UAE Teams",
    h1: "Hiring software developers from Pakistan for UAE teams",
    metaTitle: "Hire Developers from Pakistan | UAE Teams",
    metaDescription:
      "UAE and GCC teams hire dedicated developers from Lahore: full overlap with Gulf time, Arabic-ready builds, weekly demos — written scope, under $25/hr.",
    blurb: "Full overlap with Gulf time, Arabic-ready builds, and payment rails that understand the region — from one Lahore team.",
    intro: [
      "The UAE and wider GCC market sits almost perfectly on top of ours: full working-day overlap, shared business context, and product requirements — Arabic alongside English, local payment rails, mobile-first — that we build for every week. Teams in Dubai and Abu Dhabi hire us for capacity the same way, with the scope in writing and the demos weekly.",
      "Because the time difference is small, the collaboration is the easiest we run: same-day review cycles, and in-person meetings in Lahore when a Dubai team wants to sit in the room and go through a scope line by line.",
    ],
    roles: [
      { name: "Gulf-hours full-stack engineer", note: "TypeScript full-stack, on your Gulf-time standups, same-day review cycles." },
      { name: "eCommerce engineer (GCC)", note: "Shopify/custom stores with local payments, COD flows and Arabic storefronts." },
      { name: "Arabic-ready frontend engineer", note: "RTL-correct layouts, bilingual content models, and the layout details RTL breaks." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Shopify", "Arabic/RTL", "PostgreSQL"],
    why: [
      { title: "Full-day overlap", text: "Gulf time is inside our working day — no 12-hour gaps, no 'I will answer tomorrow'." },
      { title: "Arabic and RTL done properly", text: "Right-to-left layouts, bilingual content models and Arabic typography are built, not patched." },
      { title: "Regional rails understood", text: "Local payment habits, COD expectations and mobile-first behaviour — the details that decide whether a Gulf store sells." },
      { title: "Meet in person, if you want", text: "The team is in Lahore — an hour and a half from Dubai. Scope meetings can be in a room, not a call." },
    ],
    faqs: [
      { question: "Can developers support Arabic-first products?", answer: "Yes — Arabic content models, RTL layouts and bilingual switching are standard work for our team, with the design tokens that keep both languages aligned." },
      { question: "What about local payment gateways in the UAE/Saudi?", answer: "Tabs/Network International, Telr, Moyasar and the card/COD patterns of the region are part of our integration experience — scoped and documented like the rest." },
      { question: "Do you work with Dubai-based agencies?", answer: "Frequently — as the delivery arm behind an agency's promise. The agency keeps the client relationship; we carry the build under a written statement of work." },
      { question: "Visa or travel required?", answer: "No — the engagement is remote. In-person scoping in Lahore is offered, and our team has also delivered on-site in the region when a client needs it." },
    ],
    relatedServices: ["ecommerce-development", "web-development", "custom-software-development"],
  },
  {
    slug: "canada",
    kind: "market",
    label: "Canada",
    title: "Hire Developers for Canadian Teams",
    h1: "Hiring software developers from Pakistan for Canadian teams",
    metaTitle: "Hire Developers from Pakistan | Canada Teams",
    metaDescription:
      "Canadian teams hire dedicated developers from Lahore: 6–9 hour overlap with Eastern Canada, written scopes, weekly demos — under $25/hr.",
    blurb: "6–9 hours of overlap with Canadian Eastern time, written scopes and a US-style working frame — without the US hiring cycle.",
    intro: [
      "Canadian teams — Toronto, Vancouver, the tech hub cities and the thousands of SMEs between them — hire our developers for the same reason as US teams: capacity without a 90-day hiring cycle. The difference is the overlap shape: Canadian Eastern time sits close to US Eastern time, so the scheduling, documentation and working frame are the same, with the difference written into the scope.",
      "The structure is unchanged: named developer, written scope, weekly demos, code in your accounts, and a company you can verify before the first invoice.",
    ],
    roles: [
      { name: "Canada-hours full-stack engineer", note: "TypeScript end to end, on your Eastern-time standups and your repo." },
      { name: "Canada-hours backend engineer", note: "Node/Laravel/Python services with the monitoring to match." },
      { name: "eCommerce engineer", note: "Shopify/custom builds for Canadian retail, including the seasonal load spikes." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Shopify", "PostgreSQL"],
    why: [
      { title: "Overlap that matches the day", text: "6–9 hours with Canadian Eastern time, scheduled in writing — your reviews land inside the developer's day." },
      { title: "Seasonal-load awareness", text: "Retail and e-commerce scopes include the November–December spike: load testing, scaling headroom, on-call notes." },
      { title: "Clear, boring paperwork", text: "Contract, NDA, IP assignment — company-to-company with an SECP-registered entity, in English, in your format if you prefer." },
      { title: "Honest capacity talk", text: "We will tell you when a hire is overkill and a project is cheaper — in the first call, in writing." },
    ],
    faqs: [
      { question: "Do you handle Canadian privacy requirements (PIPEDA)?", answer: "Yes — data handling, consent and retention are part of the scope when the product handles personal information of Canadian users. Documentation your privacy officer can use." },
      { question: "What about the timezone difference for Western Canada?", answer: "Vancouver/Pacific is 3 hours behind Toronto — for Western-Canada teams we schedule the overlap accordingly and write it into the scope, same as any other market." },
      { question: "Can we start with a pilot scope?", answer: "Yes — most engagements start with a 2–4 week scoped pilot (a defined module or feature), reviewed against a written plan, before the longer retainer begins." },
      { question: "How is billing handled across currencies?", answer: "USD or CAD invoicing per the retainer, bank transfer. The invoice, the rate and the hours are in the same document — no separate 'billing terms' to chase." },
    ],
    relatedServices: ["custom-software-development", "ecommerce-shopify", "saas-application-development"],
  },
  {
    slug: "australia",
    kind: "market",
    label: "Australia",
    title: "Hire Developers for Australian Teams",
    h1: "Hiring software developers from Pakistan for Australian teams",
    metaTitle: "Hire Developers from Pakistan | Australia Teams",
    metaDescription:
      "Australian teams hire dedicated developers from Lahore: 6–8 hour overlap with AEST, written scopes, weekly demos — under $25/hr.",
    blurb: "6–8 hours of overlap with Australian Eastern time — the long pole is real, and we schedule around it honestly.",
    intro: [
      "Australia is our hardest overlap and we will not pretend otherwise: the gap between Lahore and Sydney is 4–5 hours, which means the collaboration has to be structured — scheduled overlap blocks, async-first communication, and demos at the hour both sides plan for. The teams that work with us from Australia are usually comfortable with async; the ones that are not, we tell them that in the first call.",
      "What the structure buys: a named developer with 6–8 hours of real overlap (typically covering Australian morning through early afternoon), weekly demos at the scheduled hour, and everything else handled async in your shared channel.",
    ],
    roles: [
      { name: "AEST-overlap full-stack engineer", note: "TypeScript end to end, scheduled AEST blocks, async-first by design." },
      { name: "AEST-overlap backend engineer", note: "APIs, data and integrations with the async documentation to match." },
      { name: "E-commerce engineer", note: "Stores for Australian retail, with the holiday-season load baked into the plan." },
    ],
    rates: standardRates,
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Shopify", "PostgreSQL"],
    why: [
      { title: "Honest overlap, scheduled", text: "6–8 hours with AEST, written into the scope with the days and hours — the plan works because the limits are stated." },
      { title: "Async-first discipline", text: "Decisions recorded, demos at a fixed hour, written updates daily — the habits that make a 4-hour gap feel like 1." },
      { title: "Season-aware builds", text: "The Australian retail calendar (Christmas, EOFY) is in the load plan, not discovered in the spike." },
      { title: "Verifiable before you commit", text: "Registered company, live product, written scope — the checks that matter when you cannot walk into the office." },
    ],
    faqs: [
      { question: "How do you actually make a 4–5 hour gap work?", answer: "Three rules: a fixed demo hour both sides block in, decisions written in the shared channel the same day, and daily written status. It works for teams that follow the frame — and we will tell you in the first call if we do not think your team will." },
      { question: "Can developers work Australian night shift long-term?", answer: "We schedule overlap, we do not run night shifts. The overlap hours are part of the developer's normal week, not a special shift — it is sustainable, and we will not burn people out to hit a timezone." },
      { question: "Do you handle Australian privacy law (Privacy Act / APPs)?", answer: "Yes — when the product handles Australians' personal information, the scope includes the handling, consent and retention documentation your compliance team expects." },
      { question: "What about meetings — do we all have to be on a call?", answer: "No. Only the weekly demo needs both sides. Everything else runs in the written channel, which is faster for both and creates the record." },
    ],
    relatedServices: ["custom-software-development", "web-development", "it-consulting"],
  },
];

export function getHirePage(slug: string): HirePage | undefined {
  return hirePages.find((page) => page.slug === slug);
}

export const hireSlugs = hirePages.map((page) => page.slug);
