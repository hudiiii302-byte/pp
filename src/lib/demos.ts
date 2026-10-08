/**
 * WordbitX showcase websites.
 *
 * Two kinds live in this list:
 *  - kind: "demo" → demo / sample websites built by WordbitX to demonstrate
 *    design and development capability. They are NOT real client projects,
 *    case studies or endorsements, and every public surface labels them Demo.
 *  - kind: "live" → a real, live product/brand that WordbitX designed and
 *    built. It is labelled "Live Project" instead of "Demo" and is excluded
 *    from the demo disclaimer.
 */
export type ShowcaseKind = "demo" | "live";

export type DemoWebsite = {
  id: string;
  /** Short brand / product name shown as the card title. */
  name: string;
  category: string;
  label: string;
  kind: ShowcaseKind;
  description: string;
  url: string;
  host: string;
  /**
   * One line of hard, checkable fact about what the build actually contains —
   * module counts, currencies, languages, flows. Every one of these is visible
   * on the live site it describes.
   *
   * Deliberately NOT the fictional business numbers the demo sites print about
   * themselves ("85+ consultants", "5,000+ happy clients"). Those belong to the
   * imaginary business in the demo; these describe the software we wrote.
   */
  proof?: string;
  /** Local screenshot in /public/demos (instant paint, no 3rd-party request). */
  shot?: string;
  /**
   * Illustrated cover in /public/demos/cover — a photographic scene of the
   * kind of place this software runs in (an agency desk, a showroom counter,
   * a clinic reception). It is commissioned artwork, not a capture: every
   * screen inside the frame is deliberately out of focus so no part of it can
   * be read as this product's interface.
   *
   * It is the FALLBACK, not the goal. `demoPreview()` prefers a real
   * screenshot whenever one has been committed; the cover is what the card
   * shows until then, so the showcase is never a row of empty placeholders.
   */
  cover?: string;
  /**
   * Abstract, out-of-focus backdrop in /public/demos/stage used as the stage
   * the device frame sits on. Pure decoration — no UI, no text, no implied
   * product content. See <ShowcaseStage />.
   */
  stage?: string;
  /** Tailwind gradient used for the instant placeholder frame. */
  accent?: string;
  /** Industry pages where this live demo should be showcased. */
  industrySlugs?: string[];
  relatedService?: { slug: string; title: string };
};

export const demosDisclosure =
  "Items labelled Demo below are demo / sample websites created by WordbitX to showcase design and development capabilities. They are not real client projects, case studies or endorsements, and no client names, revenue figures or results are implied. Items labelled Live Project are real, publicly available products built by WordbitX. Where a card shows an illustrated cover instead of a screenshot, the cover is artwork representing the kind of business the software serves — open the link to see the actual site.";

/** Hosts WordbitX owns or operates — these get normal (dofollow) links. */
export const ownedHosts = ["wordbitxtech.com", "propertiespak.com"];

export const demoWebsites: DemoWebsite[] = [
  {
    id: "properties-pak",
    name: "Properties Pak",
    category: "Real Estate / Property",
    label: "Live Project",
    kind: "live",
    description:
      "Properties Pak is our live Pakistan property portal — society and phase listings, map-led search, plot/file detail pages and dealer enquiry flows. Built, launched and maintained by WordbitX.",
    url: "https://propertiespak.com",
    host: "propertiespak.com",
    proof:
      "Society, phase and block level listings, map-led search, plot/file detail pages and dealer enquiry routing.",
    shot: "/demos/properties-pak.jpg",
    cover: "/demos/cover/properties-pak.jpg",
    stage: "/demos/stage/properties-pak.jpg",
    accent: "from-emerald-700 via-navy-800 to-brand-600",
    industrySlugs: ["real-estate"],
    relatedService: { slug: "real-estate-portals", title: "Real Estate Portals" },
  },
  {
    id: "motor",
    name: "MOTOR Pakistan",
    category: "Motor / Automotive",
    label: "Demo",
    kind: "demo",
    description:
      "Motor and automotive website demo showcasing vehicle listings, showroom-style layouts and enquiry-focused design.",
    url: "https://motor.wordbitxtech.com",
    host: "motor.wordbitxtech.com",
    proof:
      "21 brands with EV and hybrid filters, listing and showroom pages, English and اردو.",
    shot: "/demos/motor.jpg",
    cover: "/demos/cover/motor.jpg",
    stage: "/demos/stage/motor.jpg",
    accent: "from-sky-800 via-navy-800 to-sky-600",
    industrySlugs: ["retail"],
    relatedService: { slug: "web-development", title: "Website Development" },
  },
  {
    id: "healthcare",
    name: "Medicare Plus",
    category: "Healthcare / Medicare",
    label: "Demo",
    kind: "demo",
    description:
      "Healthcare website demo showcasing service presentation, appointment-focused layouts and professional medical design.",
    url: "https://medicare.wordbitxtech.com",
    host: "medicare.wordbitxtech.com",
    proof:
      "Filterable service catalogue with published PKR fees, slot booking and WhatsApp handoff.",
    shot: "/demos/healthcare.jpg",
    cover: "/demos/cover/healthcare.jpg",
    stage: "/demos/stage/healthcare.jpg",
    accent: "from-navy-900 via-brand-700 to-navy-800",
    industrySlugs: ["healthcare", "pharmacy"],
    relatedService: { slug: "hospital-medical-portals", title: "Hospital & Medical Portals" },
  },
  {
    id: "education",
    name: "WordbitX Education Platform",
    category: "Education",
    label: "Demo",
    kind: "demo",
    description:
      "Education website demo showcasing courses, programs, admissions and educational content layouts.",
    url: "https://education.wordbitxtech.com",
    host: "education.wordbitxtech.com",
    proof:
      "37 modules, 5 role portals and fee collection wired to JazzCash and Easypaisa.",
    shot: "/demos/education.jpg",
    cover: "/demos/cover/education.jpg",
    stage: "/demos/stage/education.jpg",
    accent: "from-brand-700 via-navy-700 to-sky-700",
    industrySlugs: ["education"],
    relatedService: { slug: "education-portals", title: "School & University Portals" },
  },
  {
    id: "ecommerce",
    name: "Veranne",
    category: "E-commerce",
    label: "Demo",
    kind: "demo",
    description:
      "E-commerce website demo showcasing product listings, shopping-focused layouts, categories and conversion-oriented design.",
    url: "https://ecom.wordbitxtech.com",
    host: "ecom.wordbitxtech.com",
    proof:
      "9 departments, 8 currencies, product detail pages and a full cart and checkout.",
    shot: "/demos/ecommerce.jpg",
    cover: "/demos/cover/ecommerce.jpg",
    stage: "/demos/stage/ecommerce.jpg",
    accent: "from-navy-800 via-navy-700 to-brand-600",
    industrySlugs: ["ecommerce"],
    relatedService: { slug: "ecommerce-development", title: "E-Commerce Development" },
  },
  {
    id: "luxury-restaurant",
    name: "Maison Noor",
    category: "Luxury / Restaurant",
    label: "Demo",
    kind: "demo",
    description:
      "Modern restaurant website demo showcasing premium visual design, menu presentation and reservation-focused layouts.",
    url: "https://luxury.wordbitxtech.com",
    host: "luxury.wordbitxtech.com",
    proof:
      "40-dish menu with dietary filters, online ordering and table reservation flows.",
    shot: "/demos/luxury-restaurant.jpg",
    cover: "/demos/cover/luxury-restaurant.jpg",
    stage: "/demos/stage/luxury-restaurant.jpg",
    accent: "from-sky-800 via-navy-800 to-sky-600",
    industrySlugs: ["hospitality"],
    relatedService: { slug: "web-development", title: "Website Development" },
  },
  {
    id: "salon-beauty",
    name: "ÉLAN Beauty Studio",
    category: "Salon / Beauty",
    label: "Demo",
    kind: "demo",
    description:
      "Beauty and salon website demo showcasing services, packages, booking-focused sections and modern visual design.",
    url: "https://saloon.wordbitxtech.com",
    host: "saloon.wordbitxtech.com",
    proof:
      "12 service categories, per-service booking deep links and WhatsApp booking.",
    shot: "/demos/salon-beauty.jpg",
    cover: "/demos/cover/salon-beauty.jpg",
    stage: "/demos/stage/salon-beauty.jpg",
    accent: "from-navy-900 via-brand-700 to-navy-800",
    relatedService: { slug: "web-development", title: "Website Development" },
  },
];

export const demoCount = demoWebsites.filter((item) => item.kind === "demo").length;
export const liveProjectCount = demoWebsites.filter((item) => item.kind === "live").length;

export function demosForIndustry(slug: string) {
  return demoWebsites.filter((demo) => demo.industrySlugs?.includes(slug));
}

export function getShowcase(id: string) {
  return demoWebsites.find((demo) => demo.id === id);
}

/** True when the URL points at a host WordbitX owns (demo subdomain or own product). */
export function isWordbitxDemoHost(url: string) {
  try {
    const { hostname } = new URL(url);
    return ownedHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

/** rel attribute for an outbound showcase link. */
export function showcaseRel(url: string) {
  return isWordbitxDemoHost(url) ? "noopener noreferrer" : "noopener noreferrer nofollow";
}

/** The flagship live product, used across the site. */
export const propertiesPak = demoWebsites[0];
