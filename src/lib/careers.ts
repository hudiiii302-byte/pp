import type { Faq } from "@/lib/types";

export type CareerJob = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "FULL_TIME";
  posted: string;
  validThrough: string;
  summary: string;
  searchTerms: string[];
  youWill: string[];
  youHave: string[];
};

/** Open roles — hiring started the week of 15 Sep 2026. */
export const careersPosted = "2026-09-15";
export const careersValidThrough = "2026-11-14";

export const jobs: CareerJob[] = [
  {
    slug: "nextjs-engineer",
    title: "Next.js / React Engineer",
    team: "Product engineering",
    location: "Lahore, Pakistan (studio + remote in Pakistan)",
    type: "FULL_TIME",
    posted: careersPosted,
    validThrough: careersValidThrough,
    summary:
      "Ship production Next.js and React work for client products — typed code, reviews, staging URLs. Hiring this week.",
    searchTerms: ["Next.js jobs Pakistan", "React developer Lahore", "frontend engineer jobs"],
    youWill: [
      "Build and review Next.js / React features against a written scope",
      "Own performance budgets, accessibility and technical SEO on marketing sites",
      "Work in the client’s repository — not a private copy they cannot leave",
    ],
    youHave: [
      "Shipped Next.js or React work you can walk through (GitHub, staging, or a private repo on a call)",
      "Comfort with TypeScript, Git and a design system",
      "Written English good enough for tickets, PRs and client demos",
    ],
  },
  {
    slug: "flutter-engineer",
    title: "Flutter Mobile Engineer",
    team: "Product engineering",
    location: "Lahore, Pakistan (studio + remote in Pakistan)",
    type: "FULL_TIME",
    posted: careersPosted,
    validThrough: careersValidThrough,
    summary:
      "Build Flutter apps with offline-aware flows, store builds and APIs. Hiring this week for Android and iOS delivery.",
    searchTerms: ["Flutter jobs Pakistan", "mobile app developer Lahore", "Android iOS jobs"],
    youWill: [
      "Implement Flutter features, offline queues and store-ready builds",
      "Debug across Android and iOS with a named QA pass before release",
      "Hand over the app into the client’s Play Console and App Store Connect",
    ],
    youHave: [
      "At least one Flutter app you can demo (even a side project with a real workflow)",
      "Comfort talking to REST APIs and reading ticket acceptance criteria",
      "Willingness to sit in a weekly demo with the rest of the squad",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer (Node.js / Laravel)",
    team: "Product engineering",
    location: "Lahore, Pakistan (studio + remote in Pakistan)",
    type: "FULL_TIME",
    posted: careersPosted,
    validThrough: careersValidThrough,
    summary:
      "Design APIs, data models and integrations for POS, portals and SaaS. Hiring this week.",
    searchTerms: ["Node.js jobs Pakistan", "Laravel developer Lahore", "backend engineer jobs"],
    youWill: [
      "Design APIs, auth, roles and data models that match the client’s workflow",
      "Integrate payments, SMS, inventory or third-party CRMs when the scope says so",
      "Write the boring parts well: migrations, logs, backups, staging vs production",
    ],
    youHave: [
      "Production Node.js or Laravel experience you can show",
      "Respect for backups, environments and ‘do not hold the client’s data hostage’",
      "Clear written updates — clients read them",
    ],
  },
  {
    slug: "product-designer",
    title: "Product / UI Designer",
    team: "Design",
    location: "Lahore, Pakistan (studio + remote in Pakistan)",
    type: "FULL_TIME",
    posted: careersPosted,
    validThrough: careersValidThrough,
    summary:
      "Turn messy operations into screens a shop, clinic or property desk can actually use. Hiring this week.",
    searchTerms: ["UI UX designer jobs Pakistan", "product designer Lahore"],
    youWill: [
      "Map a workflow, then wireframe, then a component system — not a single pretty screen",
      "Design empty, error and offline states, not only the happy path",
      "Hand engineers something they can build without guessing",
    ],
    youHave: [
      "A portfolio with real product UI (Figma or similar) — landing pages alone are not enough",
      "Comfort taking hard feedback in a review",
      "Interest in retail, property, health or ops software, not only consumer apps",
    ],
  },
];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export const careersFaqs: Faq[] = [
  {
    question: "Is WordbitX hiring software developers in Pakistan right now?",
    answer:
      "Yes. Roles on this page opened the week of 15 September 2026. Apply with a CV, portfolio or GitHub and a short note on what you have shipped. Same-week first conversations when the fit is real.",
  },
  {
    question: "Do I need to sit in Lahore?",
    answer:
      "Studio days in Pakistan are useful. Remote inside Pakistan is fine if you can join overlap hours and weekly demos. These listings are not visa sponsorships.",
  },
  {
    question: "How do I apply this week?",
    answer:
      "Use Apply on the role. It opens the contact form with the job title filled in. WhatsApp +92 325 1888841 if you only have a phone. Do not send a 40-page brand deck.",
  },
  {
    question: "Paid trial or unpaid task?",
    answer:
      "We review work you have already shipped, then a conversation. If a short paid trial is needed, it is written and paid — we do not run unpaid ‘test projects’ that look like client work.",
  },
];
