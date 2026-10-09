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

/**
 * Homepage review cards.
 *
 * Intentionally empty as of 8 October 2026: the previous seed list was
 * invented testimonials ("written in the same tone as a Google Business
 * review"), which contradicted the "no invented testimonials" promise on the
 * same page and was an AdSense/site-reputation risk. Reviews now appear here
 * only when they are real — submitted through the form (pending moderation)
 * or collected on the Google Business Profile. Do not re-seed this list with
 * placeholder names.
 */
export const siteReviews: SiteReview[] = [];
