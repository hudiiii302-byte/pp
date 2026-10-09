"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { reviewIndustries, siteReviews, type ReviewIndustry, type SiteReview } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

const STORAGE_KEY = "wordbitx-visitor-reviews";
const googleWrite = siteConfig.googleWriteReviewUrl;

type FormState = {
  name: string;
  email: string;
  place: string;
  industry: ReviewIndustry | "";
  rating: SiteReview["rating"];
  quote: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  place: "",
  industry: "",
  rating: 5,
  quote: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function mergeReviews(primary: SiteReview[], extra: SiteReview[]): SiteReview[] {
  const seen = new Set<string>();
  const next: SiteReview[] = [];
  for (const review of [...primary, ...extra]) {
    const key = `${review.name}|${review.quote}`;
    if (seen.has(key)) continue;
    seen.add(key);
    next.push(review);
  }
  return next;
}

function readLocalReviews(): SiteReview[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SiteReview[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalReviews(reviews: SiteReview[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews.slice(0, 20)));
}

export function ReviewSlider() {
  const [reviews, setReviews] = useState<SiteReview[]>(siteReviews);
  const [filter, setFilter] = useState<"All" | ReviewIndustry>("All");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [writing, setWriting] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data: { reviews?: SiteReview[] }) => {
        if (!Array.isArray(data.reviews)) return;
        const published = data.reviews;
        const publishedKeys = new Set(published.map((review) => `${review.name}|${review.quote}`));
        writeLocalReviews(readLocalReviews().filter((review) => publishedKeys.has(`${review.name}|${review.quote}`)));
        setReviews(published);
      })
      .catch(() => {
        const local = readLocalReviews();
        if (local.length > 0) setReviews((current) => mergeReviews(local, current));
      });
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? reviews : reviews.filter((review) => review.industry === filter)),
    [filter, reviews],
  );
  const total = filtered.length;

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const go = (next: number) => {
    if (total === 0) return;
    setIndex((next + total) % total);
  };

  /**
   * Drag to page the slider. This started as touch-only handlers and they did
   * not fire for everyone, so it is Pointer Events instead: one code path for
   * finger, trackpad and mouse. touch-action is pan-y on the container, so the
   * browser keeps vertical scrolling and hands us the horizontal gesture.
   */
  const drag = useRef<{ x: number; y: number; id: number } | null>(null);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
    setPaused(true);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = drag.current;
    drag.current = null;
    // a mouse that is still hovering should stay paused; a finger should not
    setPaused(event.pointerType === "mouse");
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 35 || Math.abs(dx) < Math.abs(dy)) return;
    go(dx < 0 ? index + 1 : index - 1);
  };

  const onPointerCancel = () => {
    drag.current = null;
    setPaused(false);
  };

  const visible =
    total === 0 ? [] : Array.from({ length: Math.min(3, total) }, (_, offset) => filtered[(index + offset) % total]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) nextErrors.email = "Please enter a valid email.";
    if (form.place.trim().length < 2) nextErrors.place = "Please enter your city.";
    if (!form.industry) nextErrors.industry = "Please choose a category.";
    if (form.quote.trim().length < 20) nextErrors.quote = "Please write at least 20 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setServerMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const honeypot = (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        review?: SiteReview;
        message?: string;
        errors?: FormErrors;
      };
      if (!response.ok || !data.ok || !data.review) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message ?? "We could not publish your review.");
      }

      const next = mergeReviews([data.review], reviews);
      setReviews(next);
      writeLocalReviews(mergeReviews([data.review], readLocalReviews()));
      setFilter(data.review.industry);
      setIndex(0);
      setForm(emptyForm);
      setStatus("success");
      setServerMessage(data.message ?? "Thank you — your review is now on the homepage.");
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none";
  const fieldBorder = (key: keyof FormState) =>
    errors[key] ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-brand-400";

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">What clients say — so far</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">Real reviews only — nothing invented</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-500">
            We do not buy reviews and we do not write fake testimonials. Reviews here come from people who actually
            worked with us — on Google or through the form below. If you have, the quickest way to help other buyers
            is to publish one.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={googleWrite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Review us on Google
          </a>
          <button
            type="button"
            onClick={() => {
              setWriting((open) => !open);
              setStatus("idle");
              setServerMessage("");
            }}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 hover:border-brand-300"
          >
            {writing ? "Close form" : "Write a review"}
          </button>
        </div>
      </div>

      {writing ? (
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_50px_-42px_rgba(5,13,33,0.45)] sm:p-6"
        >
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Write a review on this site</h3>
              <p className="mt-1 text-sm text-ink-500">It appears in the slider as soon as you submit.</p>
            </div>
            <div className="flex gap-1" aria-label="Star rating">
              {([1, 2, 3, 4, 5] as const).map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => update("rating", star)}
                  className={`text-xl ${star <= form.rating ? "text-amber-500" : "text-slate-300"}`}
                  aria-label={`${star} star${star === 1 ? "" : "s"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {status === "success" ? (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50/80 p-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-relaxed text-ink-700">{serverMessage}</p>
            </div>
          ) : null}

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">Name</span>
              <input
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                className={`${inputClass} ${fieldBorder("name")}`}
                placeholder="Your name"
              />
              {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className={`${inputClass} ${fieldBorder("email")}`}
                placeholder="you@company.com"
              />
              {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">City</span>
              <input
                value={form.place}
                onChange={(event) => update("place", event.target.value)}
                className={`${inputClass} ${fieldBorder("place")}`}
                placeholder="Lahore, London, Dubai…"
              />
              {errors.place ? <p className="mt-1 text-xs text-red-500">{errors.place}</p> : null}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">Category</span>
              <select
                value={form.industry}
                onChange={(event) => update("industry", event.target.value as ReviewIndustry)}
                className={`${inputClass} ${fieldBorder("industry")}`}
              >
                <option value="">Select a category</option>
                {reviewIndustries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              {errors.industry ? <p className="mt-1 text-xs text-red-500">{errors.industry}</p> : null}
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">Your review</span>
            <textarea
              value={form.quote}
              onChange={(event) => update("quote", event.target.value)}
              rows={4}
              className={`${inputClass} min-h-[120px] resize-y ${fieldBorder("quote")}`}
              placeholder="What did WordbitX build, and how did the work go?"
            />
            {errors.quote ? <p className="mt-1 text-xs text-red-500">{errors.quote}</p> : null}
          </label>

          {status === "error" && serverMessage ? (
            <p className="mt-3 text-sm text-red-600">{serverMessage}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60"
            >
              {status === "loading" ? "Publishing…" : "Publish review"}
            </button>
            <a
              href={googleWrite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink-600 hover:text-brand-600"
            >
              Or write on Google
            </a>
          </div>
        </form>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...reviewIndustries] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
              filter === item
                ? "bg-ink-900 text-white"
                : "border border-slate-200 bg-white text-ink-600 hover:border-brand-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="mt-6 touch-pan-y select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink-900">No reviews published yet — here is what you can verify today</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
              We would rather show you nothing than show you invented praise. The moment a client publishes a review
              on Google or through the form above, it appears in this slider. Until then, everything below is real and
              clickable:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a
                href="https://propertiespak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300"
              >
                <p className="text-sm font-semibold text-ink-900">Properties Pak — a live product we operate</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  A real Pakistan property portal: live listings, map-led search, dealer enquiries. Open it and poke
                  around — it is not a screenshot.
                </p>
                <span className="mt-2 inline-block text-xs font-semibold text-brand-600 group-hover:underline">
                  Visit propertiespak.com →
                </span>
              </a>
              <a
                href="https://clutch.co/profile/wordbitx"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300"
              >
                <p className="text-sm font-semibold text-ink-900">Our Clutch profile</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  Verified company details on a third-party platform — including the fact that we currently have zero
                  reviews. We would rather that be true than inflated.
                </p>
                <span className="mt-2 inline-block text-xs font-semibold text-brand-600 group-hover:underline">
                  View profile →
                </span>
              </a>
              <a
                href="/about"
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300"
              >
                <p className="text-sm font-semibold text-ink-900">A registered company</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  SECP-registered private limited company and FBR-registered, founded in 2021, based in Lahore. The
                  registration details are on the About page.
                </p>
                <span className="mt-2 inline-block text-xs font-semibold text-brand-600 group-hover:underline">
                  See the details →
                </span>
              </a>
            </div>
          </div>
        ) : (
          <div key={index} className="review-slide grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((review, slot) => (
              <article
                key={`${review.name}-${review.quote.slice(0, 24)}-${slot}-${index}`}
                className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_50px_-42px_rgba(5,13,33,0.45)] ${
                  slot === 2 ? "hidden xl:block" : slot === 1 ? "hidden md:block" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{review.name}</p>
                      <p className="text-xs text-ink-500">
                        {review.place} · {review.date}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-600">
                    {review.industry}
                  </span>
                </div>
                <p className="mt-3 text-sm tracking-wide text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}
                  <span className="text-slate-300">{"★".repeat(5 - review.rating)}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{review.quote}</p>
              </article>
            ))}
          </div>
        )}

        {total > 1 ? (
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex max-w-[70%] flex-wrap gap-2">
              {filtered.slice(0, 12).map((review, i) => (
                <button
                  key={`${review.name}-${i}`}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-500" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink-800 hover:border-brand-300"
                aria-label="Previous reviews"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink-800 hover:border-brand-300"
                aria-label="Next reviews"
              >
                →
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
