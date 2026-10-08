import type { ProcessStep, Service, TitledPoint } from "@/lib/types";

export const buildProcess: ProcessStep[] = [
  { step: "01", title: "Discovery", text: "Goals, constraints, current tools and success metrics documented in writing." },
  { step: "02", title: "Plan", text: "Scope, stack, milestone plan and acceptance criteria agreed before work starts." },
  { step: "03", title: "Build", text: "Work delivered in reviewable stages on a shared staging environment." },
  { step: "04", title: "QA & launch", text: "Testing, handover documentation and a go-live checklist you can verify." },
  { step: "05", title: "Support", text: "A short post-launch window plus an optional monthly retainer." },
];

export const marketplaceProcess: ProcessStep[] = [
  { step: "01", title: "Account audit", text: "Seller account, category, documents and existing listings reviewed." },
  { step: "02", title: "Store setup", text: "Brand storefront, policies, payments and shipping configured." },
  { step: "03", title: "Listings", text: "Titles, images, attributes and backend keywords written to marketplace rules." },
  { step: "04", title: "Launch", text: "Ads, inventory and order flow tested with a first live listing batch." },
  { step: "05", title: "Handover", text: "SOPs, access under your account and a 14-day support window." },
];

export const growthProcess: ProcessStep[] = [
  { step: "01", title: "Baseline", text: "Current rankings, ads, speed or conversion data captured so progress is measurable." },
  { step: "02", title: "Priority plan", text: "The highest-ROI fixes first — not a 60-page audit you cannot act on." },
  { step: "03", title: "Implementation", text: "Technical, content or campaign work shipped in weekly batches." },
  { step: "04", title: "Measure", text: "Search Console, Analytics and revenue events checked against the baseline." },
  { step: "05", title: "Iterate", text: "What moved the metric is scaled; what did not is stopped." },
];

export const defaultWhyUs: TitledPoint[] = [
  { title: "You own the accounts", text: "Developer, ads, store and hosting logins stay in your business name." },
  { title: "Written scope first", text: "No work starts until deliverables, timeline and price are agreed." },
  { title: "Lahore team, global clients", text: "Built in Pakistan for companies in the US, UK, UAE, Canada and Australia as well as home market." },
  { title: "No fake case studies", text: "We describe the work we actually do. We do not invent rankings or revenue." },
];

export function withServiceDefaults(
  service: Omit<Service, "shortTitle" | "process" | "whyUs"> &
    Partial<Pick<Service, "shortTitle" | "process" | "whyUs">>,
): Service {
  return {
    ...service,
    shortTitle: service.shortTitle ?? service.title,
    process: service.process ?? buildProcess,
    whyUs: service.whyUs ?? defaultWhyUs,
  };
}
