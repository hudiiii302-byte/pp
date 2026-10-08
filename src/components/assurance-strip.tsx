import Link from "next/link";
import { ShieldIcon, ClockIcon, LayersIcon, GlobeIcon, CheckIcon } from "@/components/icons";

/**
 * Premium assurance band directly under the hero.
 *
 * Everything claimed here is a commitment we control (ownership, response
 * time, delivery model) — no invented awards, client counts or ratings.
 */
const assurances = [
  {
    Icon: ShieldIcon,
    title: "You own everything",
    text: "Source code, repos, hosting, domains and analytics are delivered into your accounts. No licence traps.",
  },
  {
    Icon: ClockIcon,
    title: "Same business-day reply",
    text: "Enquiries get a real answer from the people who would build it, not a sales queue.",
  },
  {
    Icon: LayersIcon,
    title: "Written scope before code",
    text: "Milestones, deliverables and a timeline agreed in writing — development starts after you sign off.",
  },
  {
    Icon: GlobeIcon,
    title: "Pakistan base, worldwide delivery",
    text: "Overlap hours, shared boards and weekly demos for clients in the US, UK, UAE, Canada and Australia.",
  },
];

export function AssuranceStrip() {
  return (
    <section className="relative isolate border-b border-slate-200 bg-white py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
      />
      <div className="container-page">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            How we work — in writing, every time
          </p>
          <Link
            href="/process"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            See the full delivery process →
          </Link>
        </div>

        <dl className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="hover-sheen group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/12">
                <Icon className="h-5 w-5" />
              </span>
              <dt className="relative mt-4 text-sm font-semibold text-ink-900">{title}</dt>
              <dd className="relative mt-1.5 text-[0.82rem] leading-relaxed text-ink-500">{text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] text-ink-500">
          {["NDA signed on request", "Fixed-scope or retainer", "Post-launch stabilisation included", "No invented testimonials"].map(
            (item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
