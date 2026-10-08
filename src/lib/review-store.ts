import { createHash, timingSafeEqual } from "crypto";
import type { SiteReview } from "@/lib/reviews";

export type StoredReview = SiteReview & {
  id: string;
  email?: string;
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

export function listMemoryReviews(): StoredReview[] {
  return store().reviews.filter((review) => !isReviewDeleted(review));
}

export function addMemoryReview(review: StoredReview): StoredReview {
  const next = { ...review, id: review.id || crypto.randomUUID() };
  store().reviews = [next, ...store().reviews.filter((item) => reviewKey(item) !== reviewKey(next))];
  store().deletedKeys.delete(reviewKey(next));
  return next;
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
