import { ShieldIcon, CheckIcon, LayersIcon, GlobeIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Registration badges, shown the way Lahore software houses display theirs
 * (Rextech's "Certifications" strip). Only real, verifiable registrations —
 * SECP and FBR, which Wordbit X Technology SMC – Pvt. Ltd. holds. No file
 * numbers or NTN are printed; the certificates exist and details are on the
 * About page. Do not add PRA/PSEB/Chamber badges until those registrations
 * are actually complete (see BACKLINK-PLAYBOOK-2026-10-08.md, Phase 1).
 */
export const trustBadges = [
  {
    Icon: ShieldIcon,
    name: "SECP Registered",
    sub: "Securities & Exchange Commission of Pakistan",
  },
  {
    Icon: CheckIcon,
    name: "FBR Registered",
    sub: "Federal Board of Revenue",
  },
  {
    Icon: LayersIcon,
    name: "Pvt. Ltd. Company",
    sub: siteConfig.legalName,
  },
  {
    Icon: GlobeIcon,
    name: "Lahore, Pakistan",
    sub: "DHA Phase 2 studio · Est. 2021",
  },
];

/**
 * Compact badge row for light backgrounds (home trust band, contact sidebar).
 * `compact` renders icon + name only, for narrow sidebars.
 */
export function TrustBadges({
  label = "Certifications & registration",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{label}</p>
        <ul className={`grid gap-3 ${compact ? "grid-cols-1" : "sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-3"}`}>
          {trustBadges.map(({ Icon, name, sub }) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-500/15">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[0.8rem] font-semibold text-ink-900">{name}</span>
                {!compact && <span className="block truncate text-[0.7rem] leading-tight text-ink-500">{sub}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
