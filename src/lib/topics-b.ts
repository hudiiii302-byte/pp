import type { Topic } from "@/lib/topic-types";

export const topicsB: Topic[] = [
  {
    slug: "wordpress-website-development",
    title: "WordPress Website Development",
    h1: "WordPress Website Development That Editors Can Update",
    category: "Software",
    summary: "Structured WordPress — not a page-builder pile that dies on the next update.",
    metaTitle: "WordPress Website Development | Custom Themes & CMS",
    metaDescription:
      "WordPress website development: custom themes, structured fields and maintenance. When WordbitX uses WordPress versus a custom stack.",
    keywords: ["WordPress website development", "WordPress development company", "custom WordPress theme", "WordPress CMS"],
    overview: [
      "WordPress is still the right CMS when the team already knows it and the site is mostly pages and a blog. It is the wrong CMS when every page is a unique web app.",
      "We lock editors to fields, not a free-for-all canvas, and we budget updates. Unmaintained WordPress is how malware listings start.",
    ],
    useCases: ["Brochures", "Editorial sites", "WooCommerce homes"],
    services: ["wordpress-development", "custom-cms-development", "website-security"],
    posts: ["wordpress-vs-custom-website", "website-development-cost-pakistan"],
    faqs: [
      { question: "Do you use Elementor for everything?", answer: "No. Builders are fine for landing experiments. A long-lived site gets a theme or blocks we can still patch." },
    ],
  },
  {
    slug: "ui-ux-for-saas",
    title: "UI/UX for SaaS",
    h1: "UI/UX Design for SaaS Products and Dashboards",
    category: "Software",
    summary: "Onboarding, empty states and a first job the user can finish — not just a pretty marketing page.",
    metaTitle: "SaaS UI/UX Design | Dashboards & Onboarding",
    metaDescription:
      "UI/UX design for SaaS: onboarding, dashboards and empty states that help a new tenant finish one job.",
    keywords: ["SaaS UI UX", "SaaS product design", "dashboard UX", "SaaS onboarding design"],
    overview: [
      "SaaS UX is the path from invite email to the first successful job. Marketing pages can look expensive while the app still dumps a user on an empty table.",
      "We design the tenant admin and the customer surface together so labels match what billing already promised.",
    ],
    useCases: ["B2B dashboards", "Trial onboarding", "Role-based settings"],
    services: ["ui-ux-design", "saas-application-development", "graphic-design"],
    posts: ["saas-mvp-development-cost", "how-to-choose-a-web-development-company"],
    faqs: [
      { question: "Do you only do Figma?", answer: "Figma first, then we sit with engineering so components match what Next.js will ship." },
    ],
  },
  {
    slug: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    h1: "Payment Gateway Integration for Web and Mobile",
    category: "Commerce",
    summary: "Stripe, wallets and local methods wired so a failed callback does not lose the order.",
    metaTitle: "Payment Gateway Integration | Stripe, Wallets & COD",
    metaDescription:
      "Payment gateway integration for web and mobile: Stripe, cards, wallets and cash-on-delivery with webhooks you can replay.",
    keywords: ["payment gateway integration", "Stripe integration", "JazzCash integration", "online payment API"],
    overview: [
      "Payments fail in the webhook, not in the pretty button. We log events, verify signatures and make refunds an explicit admin action.",
      "Local methods (JazzCash, EasyPaisa, COD) are first-class in Pakistan work. International work usually starts with Stripe. We do not store raw card numbers.",
    ],
    useCases: ["Checkout", "Subscriptions", "Marketplace payouts (later)"],
    services: ["api-development", "ecommerce-development", "saas-application-development"],
    posts: ["saas-mvp-development-cost", "ecommerce-website-cost-pakistan"],
    faqs: [
      { question: "Are you PCI certified?", answer: "We integrate hosted or tokenised checkouts so card data stays with the gateway. That is the point." },
    ],
  },
  {
    slug: "api-integration-services",
    title: "API Integration",
    h1: "API Integration Services for Payments, ERPs and Apps",
    category: "Software",
    summary: "Documented connections with retries — not a Zapier zap as the only production path.",
    metaTitle: "API Integration Services | REST, Webhooks & ERPs",
    metaDescription:
      "API integration services: REST and webhooks for payments, ERPs, shipping and mobile apps, with logs and retries.",
    keywords: ["API integration services", "third party API integration", "REST API integration", "webhook integration"],
    overview: [
      "Integration is a product: auth, versioning, error queues and a way to replay a failed job. A weekend script will break the first time a vendor changes a field.",
      "We wrap third parties so you can change a courier or a gateway without rewriting the app.",
    ],
    useCases: ["ERP sync", "Shipping rates", "Mobile backends"],
    services: ["api-development", "custom-software-development", "devops-cloud-solutions"],
    posts: ["custom-software-vs-ready-made-software", "how-ai-automation-helps-businesses"],
    faqs: [
      { question: "Can you integrate a system with no API?", answer: "Sometimes via SFTP, DB views or a vendor’s limited export. We say when that is unsafe." },
    ],
  },
  {
    slug: "dedicated-development-team",
    title: "Dedicated Development Team",
    h1: "Dedicated Development Team from Lahore",
    category: "Software",
    summary: "A named squad in your tools — not a rotating bench and a salesman.",
    metaTitle: "Dedicated Development Team | Hire Developers in Pakistan",
    metaDescription:
      "Dedicated development team from WordbitX in Lahore: named engineers, your Git repo, overlap hours for US and UK clients.",
    keywords: ["dedicated development team", "hire developers Pakistan", "dedicated software team", "offshore development team"],
    overview: [
      "A dedicated team is a monthly squad with names, a board you can see and commits in your repository. It is not “resources” that change every sprint.",
      "You still need a product owner on your side. We will not invent requirements in a vacuum.",
    ],
    useCases: ["Product companies", "Long-running ops tools", "Staff augmentation"],
    services: ["custom-software-development", "it-consulting", "mobile-app-development"],
    posts: ["offshore-software-development-company", "software-company-lahore"],
    faqs: [
      { question: "Minimum term?", answer: "Usually a month-to-month after a trial sprint. We write the handover so you can leave." },
    ],
  },
  {
    slug: "white-label-software-development",
    title: "White-Label Software",
    h1: "White-Label Software Development for Agencies",
    category: "Software",
    summary: "You sell it, we build it, the client never has to know the factory — if the contract says so.",
    metaTitle: "White-Label Software Development | Agency Builds",
    metaDescription:
      "White-label software development for agencies: we build, you own the client relationship and the repo branding.",
    keywords: ["white label software development", "white label web development", "agency white label", "white label app development"],
    overview: [
      "White-label means the agency faces the client; we deliver under their process. Branding, invoices and Slack can stay theirs. Quality and scope still have to be written.",
      "We will not fake testimonials on your behalf or pretend we are your employees on a sales call unless that is explicitly agreed.",
    ],
    useCases: ["Agencies without a bench", "Productised service offers", "Overflow sprints"],
    services: ["web-development", "custom-software-development", "ui-ux-design"],
    posts: ["how-to-choose-a-web-development-company", "offshore-software-development-company"],
    faqs: [
      { question: "Can we resell your POS?", answer: "A productised POS with your brand is a different commercial deal than a one-off build. Ask and we will say which we are offering." },
    ],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    h1: "SaaS Product Development from MVP to Multi-Tenant",
    category: "Software",
    summary: "Tenants, plans and an admin — so the second customer is not a new project.",
    metaTitle: "SaaS Product Development | Multi-Tenant MVP",
    metaDescription:
      "SaaS product development: multi-tenant architecture, billing and admin. How WordbitX scopes a version one that can take payment.",
    keywords: ["SaaS product development", "SaaS development company", "multi tenant SaaS", "build a SaaS"],
    overview: [
      "SaaS product development starts with tenancy and billing, not with a marketing site. If the second company cannot sign up, you built a consultancy tool.",
      "We cut marketplace dreams from release one. Usage metering and SSO wait until someone has paid.",
    ],
    useCases: ["B2B tools", "Vertical SaaS", "Agency products"],
    services: ["saas-application-development", "api-development", "ui-ux-design"],
    posts: ["saas-mvp-development-cost", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Do you take equity?", answer: "No. Delivery is billed. You own the product." },
    ],
  },
  {
    slug: "android-app-development-company",
    title: "Android App Development Company",
    h1: "Android App Development Company — Kotlin, Play and Maintenance",
    category: "Mobile",
    summary: "Play-ready Android: Kotlin or Flutter, data safety forms and a release you can update.",
    metaTitle: "Android App Development Company | Kotlin & Flutter",
    metaDescription:
      "Android app development company in Pakistan: Kotlin or Flutter, Play Console publishing and maintenance after launch.",
    keywords: ["Android app development company", "Android app development", "hire Android developers", "Kotlin app development"],
    overview: [
      "Android work is not “the cheap half of an app”. Device spread, Play policies and background limits are the job. We publish under your Play account.",
      "If both stores matter, we usually recommend Flutter. Native Kotlin stays for platform-deep products.",
    ],
    useCases: ["Consumer Android", "Field staff on cheap devices", "Play-only launches"],
    services: ["android-app-development", "flutter-app-development", "google-play-console"],
    posts: ["hire-android-app-developers", "android-vs-ios-which-to-build-first"],
    faqs: [
      { question: "Do you guarantee Play approval?", answer: "No store guarantees approval. We prepare listings and policy forms so rejection is less likely." },
    ],
  },
  {
    slug: "ios-app-development-company",
    title: "iOS App Development Company",
    h1: "iOS App Development Company — Swift, TestFlight and App Store",
    category: "Mobile",
    summary: "Store-ready iOS with TestFlight, privacy nutrition and billing that passes review.",
    metaTitle: "iOS App Development Company | Swift & App Store",
    metaDescription:
      "iOS app development company: Swift or Flutter, TestFlight, App Store review and in-app purchase compliance.",
    keywords: ["iOS app development company", "iPhone app development", "Swift app development", "App Store developers"],
    overview: [
      "iOS review is stricter on payments, privacy and account deletion. We treat those as features, not a Friday surprise.",
      "You own App Store Connect. We do not publish under a personal Apple ID we keep.",
    ],
    useCases: ["Consumer iOS", "B2B TestFlight", "IAP products"],
    services: ["ios-app-development", "flutter-app-development", "app-store-publishing"],
    posts: ["android-vs-ios-which-to-build-first", "complete-guide-to-app-store-optimization"],
    faqs: [
      { question: "Can we skip the annual Apple fee?", answer: "Not if you want a public App Store listing. Enterprise distribution is a different programme." },
    ],
  },
  {
    slug: "app-store-optimization-basics",
    title: "App Store Optimization",
    h1: "App Store Optimization (ASO): Keywords, Screenshots, Ratings",
    category: "Growth",
    summary: "Store listing work that can lift conversion — not a promise you will outrank a game with 50 million installs.",
    metaTitle: "App Store Optimization (ASO) | Play Store & App Store",
    metaDescription:
      "App store optimization basics: keywords, screenshots and ratings on Google Play and the App Store. What WordbitX will and will not promise.",
    keywords: ["app store optimization", "ASO services", "Play Store ASO", "App Store keywords"],
    overview: [
      "ASO is metadata, creative and ratings hygiene. It compounds with a product people keep. It does not replace a broken first session.",
      "We write listings in your developer accounts and test screenshots. We do not sell fake reviews.",
    ],
    useCases: ["New launches", "Category moves", "Localisation"],
    services: ["app-store-optimization", "google-play-console", "app-store-publishing"],
    posts: ["complete-guide-to-app-store-optimization", "mobile-app-development-guide"],
    faqs: [
      { question: "Can you guarantee top 10?", answer: "No. Anyone who does is selling fiction." },
    ],
  },
  {
    slug: "google-ads-for-service-businesses",
    title: "Google Ads for Service Businesses",
    h1: "Google Ads for Service Businesses and Software Companies",
    category: "Growth",
    summary: "Search campaigns on high-intent terms, sent to a matching service page — not the homepage.",
    metaTitle: "Google Ads for Service Businesses | High-Intent PPC",
    metaDescription:
      "Google Ads for service businesses and software companies: search terms, conversion tracking and landing pages that match the query.",
    keywords: ["Google Ads for service business", "PPC for software company", "Google Ads agency", "B2B Google Ads"],
    overview: [
      "Service PPC works when the query is “hire / company / cost / near me” and the page says the same thing. Display and YouTube can wait.",
      "Tracking comes first. If a form thank-you is not a conversion, you are buying clicks for sport.",
    ],
    useCases: ["Software houses", "Clinics (service ads)", "Local trades"],
    services: ["google-ads", "seo-services", "conversion-rate-optimization"],
    posts: ["seo-vs-google-ads", "digital-marketing-for-software-companies"],
    faqs: [
      { question: "What budget?", answer: "Enough to learn in your geo. We will say if the number cannot produce statistically useful clicks." },
    ],
  },
  {
    slug: "local-seo-for-agencies",
    title: "Local SEO for Agencies",
    h1: "Local SEO for Agencies and Service Companies",
    category: "Growth",
    summary: "GBP, one NAP and city pages you actually serve — not 50 doorway cities.",
    metaTitle: "Local SEO for Agencies | Google Business Profile",
    metaDescription:
      "Local SEO for agencies and software companies: Google Business Profile, citations and honest city pages.",
    keywords: ["local SEO for agencies", "local SEO services", "Google Business Profile for agencies", "map pack SEO"],
    overview: [
      "Agencies rank locally when the profile, the phone and the site agree. Fake city pages for towns you have never visited waste crawl budget and trust.",
      "Lahore software companies still need this for “software company Lahore”. International work sits on /global pages, not on fake offices.",
    ],
    useCases: ["Software houses", "Clinics", "Multi-location retail"],
    services: ["local-seo", "seo-services", "content-marketing"],
    posts: ["local-seo-for-small-business", "software-company-lahore"],
    faqs: [
      { question: "Can you verify GBP for us?", answer: "You complete verification. We prepare the profile and the site." },
    ],
  },
  {
    slug: "technical-seo-for-nextjs",
    title: "Technical SEO for Next.js",
    h1: "Technical SEO for Next.js and JavaScript Sites",
    category: "Growth",
    summary: "Indexable HTML, one sitemap index, canonicals and a homepage that is not 900 KB of chrome.",
    metaTitle: "Technical SEO for Next.js | Crawl, Index & CWV",
    metaDescription:
      "Technical SEO for Next.js: rendering, sitemaps, canonicals and Core Web Vitals. How WordbitX keeps JS sites crawlable.",
    keywords: ["technical SEO Next.js", "JavaScript SEO", "Next.js SEO", "Core Web Vitals Next.js"],
    overview: [
      "JavaScript sites fail SEO when the first HTML is empty or when five sitemaps list the same URL. We render important routes, keep one index, and set canonicals on purpose.",
      "Core Web Vitals on a marketing homepage are a weight problem as much as a framework problem.",
    ],
    useCases: ["Next.js marketing sites", "Migrations", "Headless storefronts"],
    services: ["technical-seo", "web-development", "website-speed-optimization"],
    posts: ["website-speed-and-seo", "seo-guide-for-businesses"],
    faqs: [
      { question: "Will this rank us #1?", answer: "It removes blockers. Rank still needs relevance and links." },
    ],
  },
  {
    slug: "firebase-for-startups",
    title: "Firebase for Startups",
    h1: "Firebase for Startups: Auth, Push and Crash Reporting",
    category: "Mobile",
    summary: "The Firebase products you will operate — not every toggle in the console.",
    metaTitle: "Firebase for Startups | Auth, FCM & Crashlytics",
    metaDescription:
      "Firebase for startups: authentication, push notifications, analytics and crash reporting without turning on every product.",
    keywords: ["Firebase for startups", "Firebase integration", "Firebase Cloud Messaging", "Firebase Auth"],
    overview: [
      "Firebase is a fast backend for auth, push and crashes. It becomes expensive and messy when Firestore is used as a relational ERP.",
      "We enable what you will monitor. Billing stays on your Google Cloud project.",
    ],
    useCases: ["MVPs", "Chat-lite", "Crash pipelines"],
    services: ["firebase-integration", "flutter-app-development", "mobile-app-development"],
    posts: ["flutter-app-development-benefits", "mobile-app-development-guide"],
    faqs: [
      { question: "Firestore or Postgres?", answer: "Firestore for simple documents. Postgres when you have real relations or reporting. We choose in discovery." },
    ],
  },
  {
    slug: "warehouse-management-system",
    title: "Warehouse Management System",
    h1: "Warehouse Management System (WMS) Software",
    category: "Operations",
    summary: "Locations, receiving and picks — heavier than a stock count spreadsheet.",
    metaTitle: "Warehouse Management System | WMS Software",
    metaDescription:
      "Warehouse management system software: locations, receiving, picks and counts. When you need a WMS versus simple inventory.",
    keywords: ["warehouse management system", "WMS software", "warehouse inventory software", "warehouse management"],
    overview: [
      "A WMS cares about where a unit sits and how it is picked. Simple inventory only cares that the unit exists. Most retailers need the simple system first.",
      "We will not sell a WMS to a single room with one shelf.",
    ],
    useCases: ["3PL-lite", "Multi-aisle stores", "Ecommerce fulfilment"],
    services: ["inventory-management-software", "custom-software-development", "api-development"],
    posts: ["inventory-management-software-guide", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Barcode or RFID?", answer: "Barcode unless you have a reason and a budget for RFID. We do not upsell hardware theatre." },
    ],
  },
  {
    slug: "logistics-software-development",
    title: "Logistics Software",
    h1: "Logistics Software for Tracking, Dispatch and Proof of Delivery",
    category: "Operations",
    summary: "Shipments you can see — status, exceptions and a POD, not a WhatsApp photo dump.",
    metaTitle: "Logistics Software Development | Dispatch & Tracking",
    metaDescription:
      "Logistics software development: dispatch, tracking and proof of delivery for courier and distribution teams.",
    keywords: ["logistics software", "dispatch software", "shipment tracking software", "proof of delivery app"],
    overview: [
      "Logistics software is exception handling: delayed, returned, cash collected. A map pin without a status model is a toy.",
      "We integrate couriers when they have an API. We do not scrape tracking pages.",
    ],
    useCases: ["Distribution", "Local couriers", "Field delivery"],
    services: ["custom-software-development", "mobile-app-development", "api-development"],
    posts: ["how-ai-automation-helps-businesses", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Do you run a courier?", answer: "No. We build tools for people who do." },
    ],
  },
  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    h1: "Hotel Booking System and Property Management Software",
    category: "Operations",
    summary: "Rooms, rates and a calendar that cannot double-book — then OTAs if you need them.",
    metaTitle: "Hotel Booking System | Property Management Software",
    metaDescription:
      "Hotel booking system and PMS: rooms, rates, availability and a booking engine. OTA connections only when the calendar is clean.",
    keywords: ["hotel booking system", "hotel management software", "property management system hotel", "booking engine"],
    overview: [
      "Hotels lose money on overbooking and on rates that do not match the OTA. The calendar is the product. Channel managers come after it is trusted.",
      "We do not claim to replace every global PMS. We build or integrate what a mid-size property will actually run.",
    ],
    useCases: ["Boutique hotels", "Guest houses", "Small chains"],
    services: ["custom-software-development", "web-development", "pos-software"],
    posts: ["custom-software-vs-ready-made-software", "website-or-mobile-app-first"],
    faqs: [
      { question: "Booking.com connection?", answer: "Possible via a channel manager you already pay for. Direct API access is not something we invent." },
    ],
  },
  {
    slug: "salon-booking-software",
    title: "Salon Booking Software",
    h1: "Salon Booking Software for Appointments, Staff and Packages",
    category: "Operations",
    summary: "Staff calendars, packages and a reminder that reduces no-shows.",
    metaTitle: "Salon Booking Software | Appointments & Packages",
    metaDescription:
      "Salon booking software: staff calendars, services, packages and reminders. Built for salons and spas — not a generic calendar.",
    keywords: ["salon booking software", "beauty salon software", "spa booking system", "salon appointment app"],
    overview: [
      "Salon software is a staff calendar plus packages and a till. Instagram DMs are not a booking system. Reminders cut no-shows more than a new logo.",
      "We have a salon demo for the look; the build follows how your chairs actually run.",
    ],
    useCases: ["Salons", "Barbers", "Spas"],
    services: ["custom-web-application-development", "pos-software", "mobile-app-development"],
    posts: ["website-or-mobile-app-first", "local-seo-for-small-business"],
    faqs: [
      { question: "Do you take a cut of bookings?", answer: "No. You host it. SaaS booking tools that charge per appointment are a different model." },
    ],
  },
  {
    slug: "gym-management-software",
    title: "Gym Management Software",
    h1: "Gym Management Software for Memberships, Attendance and Freeze",
    category: "Operations",
    summary: "Memberships, check-in and freezes — the three things gyms fight about at the desk.",
    metaTitle: "Gym Management Software | Memberships & Check-in",
    metaDescription:
      "Gym management software: memberships, attendance, freezes and staff check-in. What to buy versus build.",
    keywords: ["gym management software", "fitness center software", "gym membership software", "gym check in system"],
    overview: [
      "Gyms leak revenue on frozen memberships nobody recorded and guests who walk in free. Check-in and a clean membership state are the first release.",
      "Class booking and an app are extras. A CCTV promise is not software we sell.",
    ],
    useCases: ["Gyms", "Studios", "Small chains"],
    services: ["custom-software-development", "mobile-app-development", "pos-software"],
    posts: ["saas-mvp-development-cost", "local-seo-for-small-business"],
    faqs: [
      { question: "Fingerprint hardware?", answer: "We can integrate devices you buy. We do not lock you to one importer." },
    ],
  },
  {
    slug: "odoo-vs-custom-erp",
    title: "Odoo vs Custom ERP",
    h1: "Odoo vs Custom ERP: Which Path Fits a Growing Company?",
    category: "Software",
    summary: "Configure Odoo when the model fits. Build when your object is not an Odoo object.",
    metaTitle: "Odoo vs Custom ERP | Configure or Build",
    metaDescription:
      "Odoo vs custom ERP: when to configure a suite and when WordbitX builds a module you own instead.",
    keywords: ["Odoo vs custom ERP", "Odoo implementation", "custom ERP development", "Odoo alternative"],
    overview: [
      "Odoo and similar suites are fast when your process is close to theirs. Custom wins when you would spend a year fighting the object model.",
      "We implement either path. We will not force a custom build to win a larger invoice if Odoo is enough.",
    ],
    useCases: ["Trading companies", "Light manufacturing", "Multi-branch retail"],
    services: ["crm-erp-solutions", "custom-software-development", "it-consulting"],
    posts: ["crm-vs-erp-which-one-does-your-business-need", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Do you sell Odoo licences?", answer: "We can implement on your subscription. We are not pretending to be Odoo the company." },
    ],
  },
];
