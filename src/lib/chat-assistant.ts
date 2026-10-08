import { demoWebsites } from "@/lib/demos";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { siteConfig, usWhatsappLink, whatsappLink } from "@/lib/site";
import { topics } from "@/lib/topics";
import type { Service } from "@/lib/types";

export type ChatLink = { href: string; label: string; external?: boolean };
export type ChatReply = {
  text: string;
  links?: ChatLink[];
  followUps?: string[];
};

export type ChatTurn = { role: "assistant" | "user"; text: string; links?: ChatLink[]; followUps?: string[] };

type Intent = {
  id: string;
  keywords: string[];
  reply: (query: string) => ChatReply;
};

const BRIEF_INTENTS = new Set([
  "website",
  "app",
  "software",
  "commerce",
  "property",
  "health",
  "education",
  "pos",
  "growth",
  "services",
  "quote",
  "demos",
  "industry",
  "topic",
]);

function humanHandoff(): ChatLink[] {
  return [
    { href: whatsappLink(), label: "WhatsApp Pakistan", external: true },
    { href: usWhatsappLink(), label: "WhatsApp USA", external: true },
  ];
}

function handoffLines() {
  return `For a written quote or a live walkthrough, WhatsApp is fastest:\nPakistan ${siteConfig.phoneDisplay} (call + WhatsApp)\nUSA ${siteConfig.usPhoneDisplay} (call + WhatsApp)\n${siteConfig.email}`;
}

function score(query: string, keywords: string[]) {
  return keywords.reduce((total, word) => (query.includes(word) ? total + (word.length > 8 ? 2 : 1) : total), 0);
}

const intents: Intent[] = [
  {
    id: "services",
    keywords: ["service", "offer", "what do you do", "capabilities", "catalogue", "kya kart", "services"],
    reply: () => ({
      text: `WordbitX builds ${services.length} kinds of software work: business websites, Flutter/Android/iOS apps, custom systems (CRM, ERP, portals), Shopify/WooCommerce stores, offline POS, and SEO/ads.\n\nTell me here what you want to make — I will ask the requirements in this chat, then a person can close it on WhatsApp.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["I need a website", "I need an app", "I need a store", "How much does a project cost?"],
    }),
  },
  {
    id: "quote",
    keywords: ["cost", "price", "budget", "how much", "quote", "estimate", "rate", "charges", "qeemat"],
    reply: () => ({
      text: `Price is scoped in writing after we know the product — not a random number in chat, and not a high public floor that makes a small job look impossible.\n\nA tight first phase can be modest. A POS, marketplace or app is quoted per workflow. Send what you are building, who will use it, and a deadline.\n\n${handoffLines()}`,
      links: [{ href: "/pricing", label: "Software development cost" }, ...humanHandoff()],
      followUps: ["I need a website", "I need an app", "Custom software", "How do projects start?"],
    }),
  },
  {
    id: "website",
    keywords: ["website", "web site", "landing", "wordpress", "next.js", "nextjs", "web development", "site banana"],
    reply: (query) => websiteReply(query),
  },
  {
    id: "info",
    keywords: [
      "information",
      "i need some information",
      "info chahiye",
      "kuch pooch",
      "details chahiye",
      "batao",
      "maloomat",
    ],
    reply: () => ({
      text: `I can answer here. What kind of information do you need?\n\n• A product we build (website, app, store, POS, portal)\n• Price and timeline\n• How a project starts\n• A live demo to look at\n\nPick one below or type it.`,
      followUps: [
        "I need a website",
        "I need a store",
        "How much does a project cost?",
        "How do you start?",
        "Show live demo websites",
      ],
    }),
  },
  {
    id: "app",
    keywords: ["app", "flutter", "android", "ios", "mobile", "play store", "app store"],
    reply: () => ({
      text: `We can scope the app in this chat.\n\nMost products ship on Flutter — one codebase for Android and iOS, published under your store accounts. Native only when the hardware actually needs it. An MVP is usually 8–12 weeks after a written milestone plan.\n\nReply here with:\n1. Who the app is for\n2. The 4–6 screens that must exist in version one\n3. Login / payments / offline — yes or no\n4. Android, iOS, or both\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["Both Android and iOS", "How much for an MVP?", "Website instead", "How do you start?"],
    }),
  },
  {
    id: "software",
    keywords: ["software", "saas", "erp", "crm", "portal", "dashboard", "system", "custom software"],
    reply: () => ({
      text: `Custom software is for workflows a SaaS seat cannot model — roles, approvals, inventory, portals. We recommend buy-vs-build honestly. If we build, you own the code. First release is usually one module, 10–16 weeks.\n\nReply here with:\n1. The job the system must do on day one\n2. How many staff will log in\n3. What you use today (Excel, WhatsApp, another tool)\n4. Must-have reports\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["POS for my shop", "Real estate portal", "Hospital or school system", "I need a quote"],
    }),
  },
  {
    id: "commerce",
    keywords: ["shopify", "woocommerce", "ecommerce", "e-commerce", "store", "amazon", "checkout"],
    reply: (query) => storeReply(query),
  },
  {
    id: "property",
    keywords: ["dha", "bahria", "smart city", "etihad", "society", "plot", "real estate", "property", "file"],
    reply: () => ({
      text: `WordbitX is a software company — we do not sell plots. We build listing portals and dealer CRM: societies, phases, blocks, file status and instalments.\n\nReply here with: dealer or developer, how many listings, and whether buyers need a public search.\nOur own live property portal: propertiespak.com (Properties Pak) — built and run by WordbitX.\n\n${handoffLines()}`,
      links: [
        { href: "https://propertiespak.com", label: "Properties Pak — live property portal", external: true },
        ...humanHandoff(),
      ],
      followUps: ["Dealer CRM + public listings", "How do we start?", "Show other live demos"],
    }),
  },
  {
    id: "health",
    keywords: ["hospital", "clinic", "pharmacy", "medical", "hms", "doctor"],
    reply: () => ({
      text: `We build hospital, clinic and pharmacy software — registration, appointments, billing, batch/expiry. We do not practise medicine. Licensed decisions stay with the clinic.\n\nReply here with: clinic or hospital, number of doctors, and whether you need pharmacy stock.\nLive sample: medicare.wordbitxtech.com (demo).\n\n${handoffLines()}`,
      links: [
        { href: "https://medicare.wordbitxtech.com", label: "Live healthcare demo", external: true },
        ...humanHandoff(),
      ],
      followUps: ["Clinic + appointments", "Pharmacy stock", "How do projects start?"],
    }),
  },
  {
    id: "education",
    keywords: ["school", "university", "college", "admission", "student", "education", "fee"],
    reply: () => ({
      text: `Education portals: admissions, attendance, exams, fee vouchers and parent/student logins. Multi-campus reporting if you need it. Software only — we do not run the school.\n\nReply here with: school or university, student count, and which modules you need first.\nLive sample: education.wordbitxtech.com (demo).\n\n${handoffLines()}`,
      links: [
        { href: "https://education.wordbitxtech.com", label: "Live education demo", external: true },
        ...humanHandoff(),
      ],
      followUps: ["School, fees + attendance", "How much does it cost?", "Show live demos"],
    }),
  },
  {
    id: "pos",
    keywords: ["pos", "point of sale", "billing", "counter", "restaurant"],
    reply: () => ({
      text: `POS is offline-first: bill and print when the internet drops, then sync. Barcode, shifts, discount limits, stock that can talk to a store. Retail, restaurant or pharmacy — we model the counter you actually run.\n\nReply here with: shop type, number of counters, and whether you need online store stock as well.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["Retail shop, 2 counters", "Restaurant POS", "Connect POS to a website"],
    }),
  },
  {
    id: "growth",
    keywords: ["seo", "ads", "marketing", "google ads", "traffic", "aso", "social"],
    reply: () => ({
      text: `SEO, Google Ads, Meta ads and ASO — measured on enquiries and cost per lead, not vanity traffic. We will not promise first-page rankings. Ads should land on a specific offer page.\n\nReply here with: city/market, monthly ad budget if any, and whether the website is already live.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["Website is live, need SEO", "I need Google Ads", "Rebuild the website first"],
    }),
  },
  {
    id: "process",
    keywords: ["process", "how do you work", "start", "methodology", "sprint", "kaise"],
    reply: () => ({
      text: `Discovery → written scope → design → sprint delivery on staging → QA → launch → support. Work does not start until milestones and price are signed. You own Git, hosting and ad accounts. The process page is the full version.\n\nTell me the product here and I will ask the next requirements in this inbox.\n\n${handoffLines()}`,
      links: [{ href: "/process", label: "How we work" }, ...humanHandoff()],
      followUps: ["Typical timeline?", "Do we own the code?", "I need a website"],
    }),
  },
  {
    id: "timeline",
    keywords: ["time", "timeline", "duration", "how long", "weeks", "deadline"],
    reply: () => ({
      text: `Typical after scope is signed: website 4–7 weeks, app MVP 8–12 weeks, business system 10–16 weeks. Dates go in the milestone plan.\n\nWhat are you building, and when do you need it live? Reply here, then WhatsApp for the written plan.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["I need a website", "I need an app", "How do we start?"],
    }),
  },
  {
    id: "demos",
    keywords: [
      "demo",
      "portfolio",
      "example",
      "live site",
      "sample",
      "screenshot",
      "live demo",
      "running website",
      "restaurant",
      "salon",
      "saloon",
      "motor",
      "propertiespak",
      "properties pak",
      "property",
      "medicare",
      "ecom",
    ],
    reply: () => ({
      text: `${demoWebsites.length} WordbitX showcase websites — Properties Pak (our own live property portal), plus motor, healthcare, education, e-commerce, restaurant, salon and business demos. The demos are labelled demos, not client case studies. Open one in a new tab if you want to look; tell me here if you want a similar build and I will take the requirements in this chat.\n\n${handoffLines()}`,
      links: [
        { href: "https://propertiespak.com", label: "Properties Pak — live property portal", external: true },
        { href: "https://motor.wordbitxtech.com", label: "Motor demo", external: true },
        { href: "https://medicare.wordbitxtech.com", label: "Healthcare demo", external: true },
        { href: "https://education.wordbitxtech.com", label: "Education demo", external: true },
        { href: "https://ecom.wordbitxtech.com", label: "Store demo", external: true },
        { href: "https://luxury.wordbitxtech.com", label: "Restaurant demo", external: true },
        ...humanHandoff(),
      ],
      followUps: ["Get a similar website", "I need a Flutter app", "How much for a site like that?"],
    }),
  },
  {
    id: "careers",
    keywords: [
      "job",
      "jobs",
      "career",
      "careers",
      "vacancy",
      "vacancies",
      "hiring",
      "apply for",
      "internship",
      "intern",
      "open role",
      "recruit",
    ],
    reply: () => ({
      text: `WordbitX is hiring this week in Pakistan: Next.js / React, Flutter, backend (Node.js / Laravel) and product design. Lahore studio plus remote in Pakistan. Apply with a repo, staging URL or Figma — not a slogan.\n\n${handoffLines()}`,
      links: [{ href: "/careers", label: "Open software jobs" }, ...humanHandoff()],
      followUps: ["I need a website", "How do projects start?", "I need a quote"],
    }),
  },
  {
    id: "contact",
    keywords: ["contact", "whatsapp", "phone", "email", "hire", "talk", "call", "number"],
    reply: () => ({
      text: `Same-business-day reply is typical.\n\n${handoffLines()}\n\nOr keep typing the brief here — I will collect requirements in this inbox first.`,
      links: humanHandoff(),
      followUps: ["I need a website", "I need a quote", "Show live demos"],
    }),
  },
  {
    id: "global",
    keywords: ["usa", "uk", "uae", "international", "worldwide", "remote", "timezone", "pakistan"],
    reply: () => ({
      text: `Incorporated in Pakistan. We deliver remotely to the USA, UK, UAE, Canada and Australia with overlap hours. No fake New York office. The US number is a real WhatsApp and voice line.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["I need a website", "How do you work with US clients?", "I need a quote"],
    }),
  },
  {
    id: "hello",
    keywords: ["hello", "hi", "hey", "salam", "assalam", "aoa"],
    reply: () => welcomeReply(),
  },
  {
    id: "rights",
    keywords: [
      "human rights",
      "human right",
      "haqooq",
      "insani",
      "privacy",
      "gdpr",
      "nda",
      "data protection",
      "confidential",
      "own the code",
      "source code",
      "ownership",
      "intellectual",
      "copyright",
      "ethics",
      "accessibility",
      "wcag",
      "discrimination",
      "consent",
      "delete my data",
      "udhr",
      "united nations",
      "freedom of speech",
      "freedom of expression",
      "equality",
      "labour right",
      "labor right",
      "women right",
      "child right",
      "religious freedom",
      "refugee",
      "azadi",
      "haq",
    ],
    reply: () => rightsReply(),
  },
  {
    id: "stack",
    keywords: [
      "development",
      "developer",
      "coding",
      "react",
      "next",
      "laravel",
      "node",
      "tech stack",
      "hosting",
      "maintenance",
      "api",
    ],
    reply: () => ({
      text: `Delivery is typed, reviewed and deployed to accounts you own. Typical web: Next.js, React, Node or Laravel, Postgres. Mobile: Flutter first, native only when needed. Hosting, domains and CI stay in your name. We pick the stack for the problem — not a fashion list.\n\nWhat are you building? Reply here and I will ask the next requirements in this chat.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["Website vs app?", "I need a website", "How do you work?"],
    }),
  },
  {
    id: "contract",
    keywords: ["payment", "revision", "milestone", "contract", "invoice", "refund", "support after"],
    reply: () => ({
      text: `Work starts after a signed scope and a first milestone. Each sprint has a written deliverable. Revisions inside that milestone are included; new modules are quoted. Invoices follow the plan. After launch we can retain for support — that is a separate line. Refunds sit in the contract if the milestone was not delivered.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["Do we own the code?", "How do projects start?", "I need a quote"],
    }),
  },
  {
    id: "jobs",
    keywords: ["job", "career", "hiring", "vacancy", "internship", "salary"],
    reply: () => ({
      text: `This chat is for client work, not recruitment. Email a short CV and links to ${siteConfig.email}. We do not publish fake openings.`,
      links: [{ href: `mailto:${siteConfig.email}`, label: "Email the team", external: true }],
      followUps: ["What services do you offer?"],
    }),
  },
];

function detectWebsiteKind(query: string) {
  const q = query.toLowerCase();
  if (/store|shopify|woocommerce|e-?commerce|shop\b/.test(q)) return "store";
  if (/restaurant|hotel|cafe|salon|saloon/.test(q)) return "hospitality";
  if (/clinic|hospital|doctor|medical|pharmacy/.test(q)) return "health";
  if (/property|real estate|plot|society/.test(q)) return "property";
  if (/school|university|college|education/.test(q)) return "education";
  if (/portfolio|personal|cv/.test(q)) return "portfolio";
  if (/business|company|corporate|agency|office/.test(q)) return "business";
  return null;
}

function detectStoreKind(query: string) {
  const q = query.toLowerCase();
  if (/fashion|cloth|apparel/.test(q)) return "fashion";
  if (/jewel|gold|ornament/.test(q)) return "jewellery";
  if (/groc|kirana|super/.test(q)) return "grocery";
  if (/electron|mobile phone|gadget/.test(q)) return "electronics";
  if (/restaurant|food|cloud kitchen/.test(q)) return "food";
  if (/wholesale|b2b/.test(q)) return "wholesale";
  if (/not sure|any store|online store|i need a store/.test(q) && !/fashion|jewel|groc|electron|food|wholesale/.test(q)) {
    return null;
  }
  return null;
}

function websiteReply(query: string): ChatReply {
  const kind = detectWebsiteKind(query);
  if (!kind) {
    return {
      text: `Yes — we build websites. First: which kind of website do you need?\n\nBusiness/company, restaurant or hotel, clinic, online store, real estate, school, or a personal portfolio.\n\nTap one below or type it. I will then ask pages, language and deadline in this chat.`,
      followUps: [
        "Business / company website",
        "Restaurant or hotel website",
        "Clinic or hospital website",
        "Online store",
        "Real estate website",
        "School website",
      ],
    };
  }
  if (kind === "store") return storeReply(query);

  const label =
    kind === "hospitality"
      ? "restaurant / hotel"
      : kind === "health"
        ? "clinic / hospital"
        : kind === "property"
          ? "real estate"
          : kind === "education"
            ? "school / education"
            : kind === "portfolio"
              ? "portfolio"
              : "business / company";

  return {
    text: `Good — a ${label} website.\n\nWe ship search-ready sites, not bloated themes. Next.js or WordPress depending on who will edit it. You own the repo, hosting and analytics. Typical marketing site: 4–7 weeks after scope is signed.\n\nReply here with:\n1. Rough pages (Home, Services, Contact…)\n2. Language(s)\n3. Who will update content\n4. Deadline or launch month\n\n${handoffLines()}`,
    links: humanHandoff(),
    followUps: ["About 8 pages, English", "Urdu + English", "I also need SEO", "Show a live demo like this"],
  };
}

function storeReply(query: string): ChatReply {
  const kind = detectStoreKind(query);
  if (!kind && !/fashion|jewel|groc|electron|food|wholesale|cloth|gold/.test(query.toLowerCase())) {
    return {
      text: `We can build the store. First: what kind of store is it?\n\nFashion, grocery, jewellery, electronics, restaurant ordering, or wholesale B2B.\n\nShopify when you want to sell quickly. WooCommerce or custom when pricing rules fight a hosted theme.`,
      followUps: [
        "Fashion store",
        "Jewellery store",
        "Grocery store",
        "Electronics store",
        "Restaurant ordering",
        "Wholesale / B2B",
      ],
    };
  }

  const label = kind ?? "online";
  return {
    text: `Noted — a ${label} store.\n\nPayments, shipping and analytics go in your accounts. Reply here with:\n1. Rough number of products\n2. Shopify, WooCommerce, or not sure\n3. Countries you ship to\n4. Need inventory / POS as well?\n\nLive sample: ecom.wordbitxtech.com (demo, not a client case study).\n\n${handoffLines()}`,
    links: [
      { href: "https://ecom.wordbitxtech.com", label: "Live store demo", external: true },
      ...humanHandoff(),
    ],
    followUps: ["About 40 products on Shopify", "I also need ads", "Inventory with POS"],
  };
}

export function welcomeReply(): ChatReply {
  return {
    text: `I am WordbitX Ai. Ask here about a website, app, Shopify store, POS, SEO, marketing, price or a live demo. Practical AI is available when a product needs it. I answer in this inbox and collect the brief here. I will not jump you to another page.\n\nWhen the brief is clear, WhatsApp Pakistan or USA for a written quote.\n\n${handoffLines()}`,
    links: humanHandoff(),
    followUps: [
      "I need a website",
      "I need a Shopify store",
      "I need SEO or marketing",
      "How much does a project cost?",
      "Show live demo websites",
    ],
  };
}

function rightsReply(): ChatReply {
  return {
    text:
      `Human rights are the minimum protections every person holds because they are human — not because a government, employer or app granted a favour. The Universal Declaration of Human Rights (1948) and later covenants set the common language: dignity, equality, and non-discrimination on race, colour, sex, language, religion, opinion, origin, property or status.\n\nCivil and political rights include life and security, a fair process, privacy, thought, conscience, religion, opinion, peaceful assembly, and taking part in public life. Economic, social and cultural rights include work in just conditions, education, an adequate standard of living, and the highest attainable standard of health. Rights are interdependent — privacy without dignity, or a product that excludes disabled users, is not a complete answer.\n\nWordbitX is a software firm, not a court, clinic or NGO. We still bind the build to that standard:\n• Dignity — no tools that target people for hate, caste, gender, religion or political repression.\n• Privacy — collect only what the product needs; NDA on your brief; we do not sell client data.\n• Control — consent where your market requires it, plus a path to export or delete personal data.\n• Ownership — source, Git, hosting and ad accounts stay in your name after handover.\n• Accessibility — keyboard, contrast and labels are part of the work.\n• Children — we do not design products that harvest data from minors.\n• Lawful work only — surveillance, stalking, credential theft or anything clearly illegal is declined.\n\nThis is not licensed legal, medical or immigration advice. For a product, we put NDA, ownership and data handling in writing first.\n\n${handoffLines()}`,
    links: humanHandoff(),
    followUps: ["Do we own the code?", "I need a website", "How do projects start?"],
  };
}

function looksLikeRights(query: string) {
  return /\b(human rights?|haqooq|insani|udhr|gdpr|privacy|nda|consent|dignity|equality|discriminat|freedom|azadi|refugee|wcag|accessib|ethic|child(?:ren)?(?:'s)? rights?|wom[ae]n(?:'s)? rights?|labou?r rights?|religious freedom|own the code|source code|copyright|intellectual)\b/i.test(
    query,
  );
}

function continueBrief(lastIntentId: string, query: string): ChatReply {
  const clipped = query.length > 180 ? `${query.slice(0, 180)}…` : query;
  return {
    text: `Noted — “${clipped}”. Keep the rest of the brief here: who it is for, must-have pages or screens, languages, and a deadline. I will keep answering in this inbox.\n\nWhen you want a person to price it:\n${handoffLines()}`,
    links: humanHandoff(),
    followUps: ["That is all — WhatsApp me", "How much does it cost?", "How do you start?"],
  };
}

function hasToken(query: string, token: string) {
  return token.length > 3 && query.includes(token);
}

function matchDemo(query: string) {
  const q = query.toLowerCase();
  return demoWebsites.find((demo) => {
    const host = demo.host.toLowerCase();
    const category = demo.category.toLowerCase();
    const id = demo.id.replace(/-/g, " ");
    return (
      hasToken(q, demo.url.replace("https://", "").toLowerCase()) ||
      hasToken(q, host.split(".")[0] ?? "") ||
      hasToken(q, category.split("/")[0]?.trim() ?? "") ||
      hasToken(q, id)
    );
  });
}

function matchServiceLoose(query: string): Service | undefined {
  const q = query.toLowerCase();
  let best: { service: Service; score: number } | undefined;
  for (const service of services) {
    let value = 0;
    const title = service.title.toLowerCase();
    const short = service.shortTitle.toLowerCase();
    const slug = service.slug.replace(/-/g, " ");
    if (q.includes(title)) value += 6;
    if (short.length > 5 && q.includes(short)) value += 4;
    if (q.includes(slug)) value += 4;
    if (service.primaryKeyword && q.includes(service.primaryKeyword.toLowerCase())) value += 3;
    for (const word of service.keywords ?? []) {
      const kw = word.toLowerCase();
      if (kw.length > 6 && q.includes(kw)) value += 2;
    }
    if (value > 0 && (!best || value > best.score)) best = { service, score: value };
  }
  return best && best.score >= 3 ? best.service : undefined;
}

function matchIndustry(query: string) {
  const q = query.toLowerCase();
  let best: { slug: string; name: string; tagline: string; summary: string; score: number } | undefined;
  for (const industry of industries) {
    let value = 0;
    const name = industry.name.toLowerCase();
    const slug = industry.slug.replace(/-/g, " ");
    if (q.includes(name)) value += 6;
    if (q.includes(slug)) value += 4;
    if (value > 0 && (!best || value > best.score)) {
      best = { slug: industry.slug, name: industry.name, tagline: industry.tagline, summary: industry.summary, score: value };
    }
  }
  return best && best.score >= 4 ? best : undefined;
}

function matchTopic(query: string) {
  const q = query.toLowerCase();
  let best: { slug: string; title: string; summary: string; score: number } | undefined;
  for (const topic of topics) {
    let value = 0;
    const title = topic.title.toLowerCase();
    const slug = topic.slug.replace(/-/g, " ");
    if (title.length > 8 && q.includes(title)) value += 6;
    if (slug.length > 6 && q.includes(slug)) value += 4;
    if (value > 0 && (!best || value > best.score)) {
      best = { slug: topic.slug, title: topic.title, summary: topic.summary, score: value };
    }
  }
  return best && best.score >= 4 ? best : undefined;
}

function extraQuestion(query: string): ChatReply & { intentId: string } {
  if (looksLikeRights(query)) {
    return { ...rightsReply(), intentId: "rights" };
  }

  const demo = matchDemo(query);
  if (demo) {
    return {
      intentId: "demos",
      text: `${demo.category} is a live WordbitX demo — ${demo.description} It is labelled a demo, not a client case study. Open the sample in a new tab if you want to look. If you want a similar site, reply here with pages, content language and a deadline.\n\n${handoffLines()}`,
      links: [
        { href: demo.url, label: `Open ${demo.category.split("/")[0]?.trim()} demo`, external: true },
        ...humanHandoff(),
      ],
      followUps: ["Get a similar website", "How do projects start?", "How much does it cost?"],
    };
  }

  const service = matchServiceLoose(query);
  if (service) {
    return {
      intentId: "services",
      text: `${service.title}: ${service.tagline} ${service.summary}\n\nI can take the brief in this chat. Reply with who it is for, must-have features, and a deadline.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["How do projects start?", "Do we own the code?", "How much does it cost?"],
    };
  }

  const industry = matchIndustry(query);
  if (industry) {
    return {
      intentId: "industry",
      text: `${industry.name}: ${industry.tagline} ${industry.summary} WordbitX builds the software for that sector — we do not run the clinic, school or dealership.\n\nWhat should the first release do? Reply here.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["I need a website", "Custom software", "How much does it cost?"],
    };
  }

  const topic = matchTopic(query);
  if (topic) {
    return {
      intentId: "topic",
      text: `${topic.title}: ${topic.summary}\n\nIf you want us to build this, reply here with your audience and deadline. A quote still needs a written scope.\n\n${handoffLines()}`,
      links: humanHandoff(),
      followUps: ["I need a website", "How do projects start?", "I need a quote"],
    };
  }

  const clipped = query.length > 140 ? `${query.slice(0, 140)}…` : query;
  return {
    intentId: "fallback",
    text: `Understood — “${clipped}”. I will answer as WordbitX, a software firm: we scope the job, build on a written milestone plan, and hand over systems you own. I will not invent legal, medical or political advice, fake clients, or guaranteed rankings.\n\nIf this is a build, tell me website, app, store, POS or portal — I will ask the rest here. For a person the same day, use WhatsApp.\n\n${handoffLines()}`,
    links: humanHandoff(),
    followUps: ["I need a website", "Show live demo websites", "What are human rights?", "I need a quote"],
  };
}

export function replyTo(query: string, lastIntentId?: string): ChatReply & { intentId: string } {
  const q = query.toLowerCase().trim();

  if (lastIntentId && /^(yes|haan|han|ok|okay|that one|yehi|this|sure)$/i.test(q)) {
    const again = intents.find((item) => item.id === lastIntentId);
    if (again) return { ...again.reply(q), intentId: again.id };
  }

  let best: { intent: Intent; score: number } | undefined;
  for (const intent of intents) {
    const value = score(q, intent.keywords);
    if (value > 0 && (!best || value > best.score)) best = { intent, score: value };
  }

  if (lastIntentId && BRIEF_INTENTS.has(lastIntentId) && (!best || best.score < 2)) {
    return { ...continueBrief(lastIntentId, query), intentId: lastIntentId };
  }

  if (!best || best.score < 1) {
    return extraQuestion(query);
  }

  return { ...best.intent.reply(q), intentId: best.intent.id };
}
