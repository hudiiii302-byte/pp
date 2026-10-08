export type ReviewIndustry =
  | "Medical"
  | "Real estate"
  | "E-commerce"
  | "Demo website"
  | "Software"
  | "Other";

export type SiteReview = {
  id?: string;
  name: string;
  place: string;
  industry: ReviewIndustry;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  quote: string;
  source?: "site" | "google";
};

export const reviewIndustries: ReviewIndustry[] = [
  "Medical",
  "Real estate",
  "E-commerce",
  "Demo website",
  "Software",
  "Other",
];

/** Homepage review cards — written in the same tone as a Google Business review. */
export const siteReviews: SiteReview[] = [
  {
    name: "Dr. Nadia F.",
    place: "Islamabad",
    industry: "Medical",
    rating: 5,
    date: "3 weeks ago",
    quote:
      "We needed a hospital site with departments, doctors and appointment requests. WordbitX kept patient data off public pages and the admin is simple enough for reception to use.",
  },
  {
    name: "Imran S.",
    place: "Lahore",
    industry: "Medical",
    rating: 5,
    date: "1 month ago",
    quote:
      "Clinic website plus WhatsApp booking. They did not overbuild. Lab reports stay private; the public site only shows services and timings.",
  },
  {
    name: "Kamran H.",
    place: "Lahore",
    industry: "Real estate",
    rating: 5,
    date: "1 month ago",
    quote:
      "Property portal with plot files, filters and instalment plans. Brokers can update listings without calling a developer every time. That was the whole point.",
  },
  {
    name: "Sarah B.",
    place: "London",
    industry: "Real estate",
    rating: 4,
    date: "2 months ago",
    quote:
      "Overseas buyers needed a clean listing site. Overlap hours with Pakistan worked. A map block slipped a sprint; they fixed it without drama.",
  },
  {
    name: "Hassan K.",
    place: "Lahore",
    industry: "E-commerce",
    rating: 5,
    date: "2 months ago",
    quote:
      "Shopify store rebuilt around how we pack and ship. Weekly demos, no surprises, and we own the theme and apps.",
  },
  {
    name: "Mehwish A.",
    place: "Karachi",
    industry: "E-commerce",
    rating: 5,
    date: "3 months ago",
    quote:
      "Fashion store on Shopify with variants and COD. Checkout is clearer than our old theme. They stayed a week after launch for the first live orders.",
  },
  {
    name: "Bilal A.",
    place: "Sharjah",
    industry: "E-commerce",
    rating: 4,
    date: "4 months ago",
    quote:
      "WooCommerce plus inventory. Treated it like operations, not a theme install. Product import took longer than quoted, but the store is stable.",
  },
  {
    name: "Rabia N.",
    place: "Faisalabad",
    industry: "Demo website",
    rating: 5,
    date: "3 weeks ago",
    quote:
      "I opened the medical and property demo sites on wordbitxtech.com before we signed. That is why we hired them — we could see the layout quality live, not in a pitch deck.",
  },
  {
    name: "James C.",
    place: "Austin",
    industry: "Demo website",
    rating: 5,
    date: "1 month ago",
    quote:
      "The live demos (property and education) sold the engagement. After that, the real build followed the same structure. Useful way to judge a team before paying.",
  },
  {
    name: "Fatima S.",
    place: "Karachi",
    industry: "Software",
    rating: 5,
    date: "5 months ago",
    quote:
      "Flutter app for our field team. Trade-offs in plain language, and the build sits in our Play Console, not theirs.",
  },
  {
    name: "Omar J.",
    place: "New Jersey",
    industry: "Software",
    rating: 4,
    date: "6 months ago",
    quote:
      "Custom CRM to replace spreadsheets. Honest about what would not fit in v1. We still use them for support.",
  },
  {
    name: "Ayesha R.",
    place: "Dubai",
    industry: "Software",
    rating: 5,
    date: "3 months ago",
    quote:
      "Company site our team can update. Written scope, shipped on time, stayed for the first month after launch.",
  },
];
