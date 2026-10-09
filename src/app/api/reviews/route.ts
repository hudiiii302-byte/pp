import { desc, eq } from "drizzle-orm";
import { db, isDatabaseConfigured } from "@/db";
import { siteReviews as reviewTable } from "@/db/schema";
import { sendEnquiryEmail } from "@/lib/mailer";
import { addMemoryReview, isReviewDeleted, listApprovedMemoryReviews } from "@/lib/review-store";
import { reviewIndustries, siteReviews, type ReviewIndustry, type SiteReview } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const REVIEW_LIMIT = 2;
const REVIEW_WINDOW_MS = 24 * 60 * 60 * 1000;

type Payload = {
  name?: string;
  email?: string;
  place?: string;
  industry?: string;
  rating?: number;
  quote?: string;
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isIndustry(value: string): value is ReviewIndustry {
  return (reviewIndustries as string[]).includes(value);
}

function clampRating(value: number): SiteReview["rating"] {
  if (value <= 1) return 1;
  if (value >= 5) return 5;
  return value as SiteReview["rating"];
}

function uniqueReviews(reviews: SiteReview[]): SiteReview[] {
  const seen = new Set<string>();
  return reviews.filter((review) => {
    const key = `${review.name}|${review.quote}`;
    if (seen.has(key) || isReviewDeleted(review)) return false;
    seen.add(key);
    return true;
  });
}

function relativeDate(createdAt: Date): string {
  const days = Math.max(0, Math.floor((Date.now() - createdAt.getTime()) / 86_400_000));
  if (days < 1) return "Just now";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

function publicReview(review: SiteReview): SiteReview {
  return {
    id: review.id,
    name: review.name,
    place: review.place,
    industry: review.industry,
    rating: review.rating,
    date: review.date,
    quote: review.quote,
    source: review.source ?? "site",
  };
}

/** Public list: approved visitor reviews only, plus any curated list in code (currently empty). */
export async function GET() {
  const extra: SiteReview[] = listApprovedMemoryReviews().map(publicReview);

  if (isDatabaseConfigured && db) {
    try {
      const rows = await db
        .select()
        .from(reviewTable)
        .where(eq(reviewTable.status, "approved"))
        .orderBy(desc(reviewTable.createdAt));
      for (const row of rows) {
        if (!isIndustry(row.industry)) continue;
        extra.push({
          id: `db-${row.id}`,
          name: row.fullName,
          place: row.place,
          industry: row.industry,
          rating: clampRating(row.rating),
          date: relativeDate(row.createdAt),
          quote: row.quote,
          source: "site",
        });
      }
    } catch (error) {
      console.error("Failed to read site reviews", error);
    }
  }

  return Response.json({ ok: true, reviews: uniqueReviews([...extra, ...siteReviews]).map(publicReview) });
}

export async function POST(request: Request) {
  const limit = checkRateLimit(`review:${clientIp(request)}`, REVIEW_LIMIT, REVIEW_WINDOW_MS);
  if (!limit.ok) {
    return Response.json(
      { ok: false, message: "You have already sent reviews today. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (body.website && body.website.trim().length > 0) {
    return Response.json({ ok: true, message: "Thank you — your review was received." });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const place = (body.place ?? "").trim();
  const industry = (body.industry ?? "").trim();
  const quote = (body.quote ?? "").trim();
  const rating = Number(body.rating);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email.";
  if (place.length < 2) errors.place = "Please enter your city.";
  if (!isIndustry(industry)) errors.industry = "Please choose a category.";
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) errors.rating = "Please choose a rating from 1 to 5.";
  if (quote.length < 20) errors.quote = "Please write at least 20 characters.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  // Every visitor review starts as pending. It is NOT shown on the site until approved.
  const review = addMemoryReview({
    id: crypto.randomUUID(),
    name: name.slice(0, 80),
    email: email.slice(0, 200),
    place: place.slice(0, 80),
    industry: industry as ReviewIndustry,
    rating: clampRating(rating),
    date: "Just now",
    quote: quote.slice(0, 600),
    source: "site",
    status: "pending",
  });

  if (isDatabaseConfigured && db) {
    try {
      const inserted = await db
        .insert(reviewTable)
        .values({
          fullName: review.name,
          email: review.email ?? email.slice(0, 200),
          place: review.place,
          industry: review.industry,
          rating: review.rating,
          quote: review.quote,
          source: "website-review-form",
          status: "pending",
        })
        .returning({ id: reviewTable.id });
      if (inserted[0]?.id) {
        review.id = `db-${inserted[0].id}`;
        addMemoryReview(review);
      }
    } catch (error) {
      console.error("Failed to store site review", error);
    }
  }

  await sendEnquiryEmail({
    fullName: review.name,
    email,
    service: `Website review (pending approval) · ${review.industry} · ${review.rating}★`,
    message: `${review.quote}\n\nLocation: ${review.place}\n\nApprove or delete at: ${siteConfig.url}/admin/reviews`,
  });

  return Response.json({
    ok: true,
    message: "Thank you — your review has been received and will appear on the site after we check it.",
  });
}
