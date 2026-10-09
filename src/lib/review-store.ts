import { createHash, timingSafeEqual } from "crypto";
import type { SiteReview } from "@/lib/reviews";

export type ReviewStatus = "pending" | "approved";

export type StoredReview = SiteReview & {
  id: string;
  email?: string;
  /** Visitor submissions start as "pending" and only show on the site once approved. */
  status?: ReviewStatus;
};

type MemoryStore = {
  reviews: StoredReview[];
  deletedKeys: Set<string>;
};

const memory = globalThis as typeof globalThis & { __wordbitxReviewStore?: MemoryStore };

export function reviewKey(review: Pick<SiteReview, "name" | "quote">): string {
  return `${review.name.trim()}|${review.quote.trim()}`;
}

function store(): MemoryStore {
  if (!memory.__wordbitxReviewStore) {
    memory.__wordbitxReviewStore = { reviews: [], deletedKeys: new Set() };
  }
  return memory.__wordbitxReviewStore;
}

export function isReviewDeleted(review: Pick<SiteReview, "name" | "quote">): boolean {
  return store().deletedKeys.has(reviewKey(review));
}

/** Every stored review that has not been deleted (pending and approved). Admin use only. */
export function listMemoryReviews(): StoredReview[] {
  return store().reviews.filter((review) => !isReviewDeleted(review));
}

/** Only reviews a human has approved. This is what the public site may show. */
export function listApprovedMemoryReviews(): StoredReview[] {
  return listMemoryReviews().filter((review) => review.status === "approved");
}

export function addMemoryReview(review: StoredReview): StoredReview {
  const next: StoredReview = { ...review, id: review.id || crypto.randomUUID(), status: review.status ?? "pending" };
  store().reviews = [next, ...store().reviews.filter((item) => reviewKey(item) !== reviewKey(next))];
  store().deletedKeys.delete(reviewKey(next));
  return next;
}

export function approveMemoryReview(id: string): StoredReview | undefined {
  const match = findMemoryReview(id);
  if (!match) return undefined;
  match.status = "approved";
  return match;
}

export function rememberDeletedReview(review: Pick<SiteReview, "name" | "quote">, id?: string) {
  store().deletedKeys.add(reviewKey(review));
  if (id) store().reviews = store().reviews.filter((item) => item.id !== id && reviewKey(item) !== reviewKey(review));
  else store().reviews = store().reviews.filter((item) => reviewKey(item) !== reviewKey(review));
}

export function findMemoryReview(id: string): StoredReview | undefined {
  return store().reviews.find((review) => review.id === id);
}

export function getReviewAdminSecret(): string | null {
  const fromEnv = process.env.REVIEW_ADMIN_SECRET?.trim();
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV !== "production") return "wordbitx";
  return null;
}

export function authorizeReviewAdmin(request: Request, bodyPassword?: string): boolean {
  const secret = getReviewAdminSecret();
  if (!secret) return false;

  const header = request.headers.get("authorization") ?? "";
  const bearer = header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : "";
  const candidate = (bodyPassword ?? "").trim() || bearer;
  if (!candidate) return false;

  const left = createHash("sha256").update(candidate).digest();
  const right = createHash("sha256").update(secret).digest();
  return timingSafeEqual(left, right);
}
