import { and, desc, eq } from "drizzle-orm";
import { db, isDatabaseConfigured } from "@/db";
import { siteReviews as reviewTable } from "@/db/schema";
import {
  authorizeReviewAdmin,
  findMemoryReview,
  getReviewAdminSecret,
  isReviewDeleted,
  listMemoryReviews,
  rememberDeletedReview,
  type StoredReview,
} from "@/lib/review-store";
import { reviewIndustries, type ReviewIndustry } from "@/lib/reviews";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type DeletePayload = {
  id?: string;
  password?: string;
};

function isIndustry(value: string): value is ReviewIndustry {
  return (reviewIndustries as string[]).includes(value);
}

function clampRating(value: number): StoredReview["rating"] {
  if (value <= 1) return 1;
  if (value >= 5) return 5;
  return value as StoredReview["rating"];
}

function uniqueManaged(reviews: StoredReview[]): StoredReview[] {
  const seen = new Set<string>();
  return reviews.filter((review) => {
    const key = `${review.name}|${review.quote}`;
    if (seen.has(key) || isReviewDeleted(review)) return false;
    seen.add(key);
    return true;
  });
}

async function loadSubmitted(): Promise<StoredReview[]> {
  const extra: StoredReview[] = listMemoryReviews();

  if (isDatabaseConfigured && db) {
    try {
      const rows = await db.select().from(reviewTable).orderBy(desc(reviewTable.createdAt));
      for (const row of rows) {
        if (!isIndustry(row.industry)) continue;
        extra.push({
          id: `db-${row.id}`,
          name: row.fullName,
          email: row.email,
          place: row.place,
          industry: row.industry,
          rating: clampRating(row.rating),
          date: row.createdAt.toISOString(),
          quote: row.quote,
          source: "site",
        });
      }
    } catch (error) {
      console.error("Failed to list submitted reviews", error);
    }
  }

  return uniqueManaged(extra);
}

export async function GET(request: Request) {
  if (!getReviewAdminSecret()) {
    return Response.json({ ok: false, message: "Set REVIEW_ADMIN_SECRET to manage reviews." }, { status: 503 });
  }
  if (!authorizeReviewAdmin(request)) {
    return Response.json({ ok: false, message: "Wrong password." }, { status: 401 });
  }

  const reviews = await loadSubmitted();
  return Response.json({ ok: true, reviews });
}

export async function DELETE(request: Request) {
  if (!getReviewAdminSecret()) {
    return Response.json({ ok: false, message: "Set REVIEW_ADMIN_SECRET to manage reviews." }, { status: 503 });
  }

  let body: DeletePayload = {};
  try {
    body = (await request.json()) as DeletePayload;
  } catch {
    body = {};
  }

  if (!authorizeReviewAdmin(request, body.password)) {
    return Response.json({ ok: false, message: "Wrong password." }, { status: 401 });
  }

  const id = (body.id ?? "").trim();
  if (!id) return Response.json({ ok: false, message: "Missing review id." }, { status: 400 });

  const memoryMatch = findMemoryReview(id) ?? (await loadSubmitted()).find((review) => review.id === id);
  if (!memoryMatch) {
    return Response.json({ ok: false, message: "That review is already gone." }, { status: 404 });
  }

  rememberDeletedReview(memoryMatch, id);

  if (isDatabaseConfigured && db) {
    try {
      if (id.startsWith("db-")) {
        const numericId = Number(id.slice(3));
        if (Number.isInteger(numericId)) {
          await db.delete(reviewTable).where(eq(reviewTable.id, numericId));
        }
      }
      await db
        .delete(reviewTable)
        .where(and(eq(reviewTable.fullName, memoryMatch.name), eq(reviewTable.quote, memoryMatch.quote)));
    } catch (error) {
      console.error("Failed to delete stored review", error);
    }
  }

  return Response.json({ ok: true, message: "Review removed from the homepage." });
}
