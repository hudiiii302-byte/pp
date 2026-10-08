import Link from "next/link";
import { ArrowRight, CheckIcon, ShieldIcon } from "@/components/icons";
import { Card, SectionHeading } from "@/components/ui";

/**
 * We do not invent testimonials. This panel is intentionally transparent until
 * an authorised client quote is supplied; it still gives buyers a clear path
 * to request references and inspect public scope profiles.
 */
export function TestimonialGuard() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading
        eyebrow="Trust & Evidence"
        title="Proof before promises"
        description="We publish client feedback only with written permission. Until a quote is authorised, we show the work, scope and delivery evidence instead of anonymous praise."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <CheckIcon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink-900">Verified scope</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Profiles explain what was designed, built and integrated without inventing metrics.
          </p>
        </Card>
        <Card>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <ShieldIcon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink-900">Confidential by default</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Client names, screens and commercial results stay private until approved for public use.
          </p>
        </Card>
        <Card>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <ArrowRight className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink-900">Ask for context</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            <Link href="/contact" className="font-medium text-brand-600 underline underline-offset-4">
              Contact us
            </Link>{" "}
            to request a relevant private reference or project walkthrough.
          </p>
        </Card>
      </div>
    </div>
  );
}
