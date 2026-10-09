"use client";

import { useEffect, useState } from "react";
import type { SiteReview } from "@/lib/reviews";

type ManagedReview = SiteReview & { id: string; email?: string; status?: "pending" | "approved" };

const SESSION_KEY = "wordbitx-review-admin";

export function ReviewAdmin() {
  const [password, setPassword] = useState("");
  const [reviews, setReviews] = useState<ManagedReview[]>([]);
  const [status, setStatus] = useState<"locked" | "loading" | "ready" | "error">("locked");
  const [message, setMessage] = useState("");
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.sessionStorage.getItem(SESSION_KEY);
    if (!saved) return;
    setPassword(saved);
    void load(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load(nextPassword = password) {
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/reviews/manage", {
        headers: { Authorization: `Bearer ${nextPassword}` },
      });
      const data = (await response.json()) as { ok?: boolean; reviews?: ManagedReview[]; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Could not load reviews.");
      window.sessionStorage.setItem(SESSION_KEY, nextPassword);
      setReviews(data.reviews ?? []);
      setStatus("ready");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not load reviews.");
    }
  }

  async function approve(review: ManagedReview) {
    setPendingId(review.id);
    setMessage("");
    try {
      const response = await fetch("/api/reviews/manage", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${password}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: review.id }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Could not approve that review.");
      setReviews((current) => current.map((item) => (item.id === review.id ? { ...item, status: "approved" } : item)));
      setMessage(data.message ?? "Review approved.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not approve that review.");
    } finally {
      setPendingId(null);
    }
  }

  async function remove(review: ManagedReview) {
    if (confirmId !== review.id) {
      setConfirmId(review.id);
      return;
    }
    setPendingId(review.id);
    setMessage("");
    try {
      const response = await fetch("/api/reviews/manage", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${password}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: review.id }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Could not delete that review.");
      setReviews((current) => current.filter((item) => item.id !== review.id));
      setConfirmId(null);
      setMessage(data.message ?? "Review removed from the homepage.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not delete that review.");
    } finally {
      setPendingId(null);
    }
  }

  if (status !== "ready") {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void load();
        }}
        className="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-400 focus:outline-none"
            placeholder="Review admin password"
            autoComplete="current-password"
          />
        </label>
        {message ? <p className="mt-3 text-sm text-red-600">{message}</p> : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-5 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60"
        >
          {status === "loading" ? "Checking…" : "Open reviews"}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-4">
      {message ? <p className="text-sm font-medium text-ink-700">{message}</p> : null}
      {reviews.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-10 text-center text-sm text-ink-500">
          No visitor reviews right now.
        </p>
      ) : (
        reviews.map((review) => (
          <article key={review.id} className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-900">
                  {review.name}
                  {review.status === "approved" ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">Live</span>
                  ) : (
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Pending</span>
                  )}
                </p>
                <p className="text-xs text-ink-500">
                  {review.place} · {review.industry} · {review.rating}★
                  {review.email ? ` · ${review.email}` : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{review.quote}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                {review.status !== "approved" ? (
                  <button
                    type="button"
                    onClick={() => void approve(review)}
                    disabled={pendingId === review.id}
                    className="shrink-0 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60"
                  >
                    {pendingId === review.id ? "Approving…" : "Approve"}
                  </button>
                ) : null}
                {confirmId === review.id ? (
                  <button
                    type="button"
                    onClick={() => setConfirmId(null)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 hover:border-brand-300"
                  >
                    Cancel
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => void remove(review)}
                  disabled={pendingId === review.id}
                  className="shrink-0 rounded-xl border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                >
                  {pendingId === review.id
                    ? "Removing…"
                    : confirmId === review.id
                      ? "Confirm delete"
                      : "Delete"}
                </button>
              </div>
            </div>
          </article>
        ))
      )}
      <button
        type="button"
        onClick={() => void load()}
        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 hover:border-brand-300"
      >
        Refresh
      </button>
    </div>
  );
}
