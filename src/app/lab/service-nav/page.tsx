import type { Metadata } from "next";
import { ServiceRing } from "@/components/service-ring";
import { ServiceCloud, ServiceHive, ServiceIndex, ServiceNavFootnote } from "@/components/service-nav";

/**
 * Internal comparison page — not linked from anywhere, not in any sitemap,
 * noindex + nofollow, and disallowed in robots.ts. It exists so the four
 * candidate layouts for the sixteen service links can be looked at side by
 * side on the real background instead of described in a message.
 *
 * Delete this route once the layout is chosen.
 */
export const metadata: Metadata = {
  title: "Service navigator options (internal)",
  robots: { index: false, follow: false, nocache: true },
};

const options = [
  {
    id: "hive",
    name: "Option A — Hive",
    note: "Static honeycomb. Keeps a distinct silhouette like the ring did, but nothing rotates, the tiles are big and every one is labelled from 640px up.",
    render: () => <ServiceHive />,
  },
  {
    id: "index",
    name: "Option B — Index",
    note: "Four buyer-shaped groups with full service names. No decoration to decode; reads like the index of a catalogue and works identically on a phone.",
    render: () => <ServiceIndex />,
  },
  {
    id: "cloud",
    name: "Option C — Cluster",
    note: "One centred cluster of pills. The only option that shows all sixteen full names at every screen width.",
    render: () => <ServiceCloud />,
  },
  {
    id: "ring",
    name: "Current — Ring",
    note: "What is on the home page today, kept here only for comparison.",
    render: () => <ServiceRing />,
  },
];

export default function ServiceNavLabPage() {
  return (
    <main className="bg-navy-950 py-16 text-white">
      <div className="container-page">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Internal preview</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Sixteen service links, four layouts</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          Same links, same background, same section width as the home page. This page is noindex and is not linked
          from the site.
        </p>
      </div>

      {options.map((option) => (
        <section key={option.id} id={option.id} className="mt-14 border-t border-white/10 pt-14">
          <div className="container-page">
            <h2 className="text-2xl font-semibold">{option.name}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{option.note}</p>
            <div className="mt-10">{option.render()}</div>
            <ServiceNavFootnote className="mt-8 text-center" />
          </div>
        </section>
      ))}
    </main>
  );
}
