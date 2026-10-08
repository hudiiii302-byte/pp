import type { Faq } from "@/lib/types";

export type Topic = {
  slug: string;
  title: string;
  h1: string;
  category: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  useCases: string[];
  services: string[];
  posts: string[];
  faqs: Faq[];
  /**
   * Named accountability for regulated subject matter.
   *
   * Google treats tax, legal and financial topics as YMYL and its quality
   * raters are told that content with no author attribution cannot be rated
   * highly. An anonymous page explaining statutory penalties is the exact
   * profile that gets held back, so compliance topics carry a real byline,
   * a review date (the SROs change), and a visible scope limit.
   */
  reviewed?: {
    /** ISO date. Surfaces as "Last reviewed" and as schema dateModified. */
    date: string;
    /** Plain-language limit on what this page is and is not. */
    note: string;
  };
  author?: {
    name: string;
    role: string;
    url?: string;
    sameAs?: string;
    /** Real photograph only. A monogram is more honest than a synthetic face. */
    photo?: string;
  };
};
