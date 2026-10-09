import type { Metadata } from "next";
import { ReviewAdmin } from "@/components/review-admin";

export const metadata: Metadata = {
  title: "Review admin",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ReviewAdminPage() {
  return (
    <section className="bg-slate-50 py-12 sm:py-20">
      <div className="container-page max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Private</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-900">Homepage reviews</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-500">
          Visitor reviews arrive as <strong>Pending</strong>. Approve a review to put it live on the homepage, or delete
          anything that should not appear. Nothing goes public until you approve it.
        </p>
        <div className="mt-8">
          <ReviewAdmin />
        </div>
      </div>
    </section>
  );
}
