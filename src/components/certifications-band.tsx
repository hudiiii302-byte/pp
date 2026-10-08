/**
 * Dark "Certifications" band, modelled on the way Lahore peers (Rextech)
 * display their marks under the hero: monochrome white wordmarks on a dark
 * background, scrolling horizontally. No claims beyond what is actually held.
 *
 * Marks in the loop:
 *  - SECP + FBR: the two registrations Wordbit X Technology SMC – Pvt. Ltd.
 *    holds (the only authority marks allowed).
 *  - Odoo: a platform mark — added at the owner's explicit request (2026-10-08).
 *    It signals a technology we build on, not a government registration.
 *  - Pvt. Ltd. + Est. 2021: factual statements about the company, not
 *    third-party endorsements.
 *
 * PRA / PSEB / Lahore Chamber marks must NOT be added until those
 * registrations are actually complete (see BACKLINK-PLAYBOOK-2026-10-08.md
 * Phase 1).
 *
 * Motion: the logo row is a seamless CSS marquee (keyframes `cert-marquee`
 * in globals.css) — two identical sets, animated to -50%. It pauses on
 * hover, and under prefers-reduced-motion it falls back to a static,
 * centre-wrapped row (motion-reduce: classes below). Fully responsive:
 * logos scale down on phones and the loop keeps working at any width.
 */

import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { markets } from "@/lib/markets";

const LOGO_CLASS = "h-14 w-auto sm:h-20";

function SecpMark() {
  return (
    <svg viewBox="0 0 150 64" className={LOGO_CLASS} aria-label="SECP — Securities and Exchange Commission of Pakistan" role="img">
      <path
        d="M75 4l3.6 8.6 9.3.8-7 6 2.1 9.1-8-4.9-8 4.9 2.1-9.1-7-6 9.3-.8z"
        fill="currentColor"
      />
      <text x="75" y="44" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="24" fontWeight="bold" letterSpacing="2">
        SECP
      </text>
      <text x="75" y="55" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" letterSpacing="1.3" opacity="0.85">
        SECURITIES &amp; EXCHANGE
      </text>
      <text x="75" y="62.5" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" letterSpacing="1.3" opacity="0.85">
        COMMISSION OF PAKISTAN
      </text>
    </svg>
  );
}

function FbrMark() {
  return (
    <svg viewBox="0 0 150 64" className={LOGO_CLASS} aria-label="FBR — Federal Board of Revenue, Pakistan" role="img">
      <path d="M8 26c22-16 62-24 104-20 12 1 24 4 30 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 33c22-16 62-24 104-20 12 1 24 4 30 8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <text x="75" y="42" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="30" fontWeight="bold" letterSpacing="1">
        FBR
      </text>
      <text x="75" y="56" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" letterSpacing="4" opacity="0.85">
        PAKISTAN
      </text>
    </svg>
  );
}

function OdooMark() {
  return (
    <svg viewBox="0 0 150 64" className={LOGO_CLASS} aria-label="Odoo — ERP and CRM platform" role="img">
      <text x="75" y="38" textAnchor="middle" fill="currentColor" fontFamily="'Trebuchet MS', 'Segoe UI', Arial, sans-serif" fontSize="30" fontWeight="bold" letterSpacing="2">
        odoo
      </text>
      <text x="75" y="55" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7.2" letterSpacing="1.6" opacity="0.85">
        ERP · CRM · AUTOMATION
      </text>
    </svg>
  );
}

function PvtLtdMark() {
  return (
    <svg viewBox="0 0 150 64" className={LOGO_CLASS} aria-label="Registered private limited company" role="img">
      <path
        d="M60 6h30l6 10H54zM54 16h42v6H54zM58 24h6v14h-6zM72 24h6v14h-6zM86 24h6v14h-6zM52 40h46v4H52z"
        fill="currentColor"
      />
      <text x="75" y="55" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="16" fontWeight="bold" letterSpacing="2">
        PVT. LTD.
      </text>
      <text x="75" y="62.5" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.8" letterSpacing="1.4" opacity="0.85">
        REGISTERED COMPANY
      </text>
    </svg>
  );
}

function EstMark() {
  return (
    <svg viewBox="0 0 150 64" className={LOGO_CLASS} aria-label="Established 2021 in Lahore, Pakistan" role="img">
      <circle cx="75" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M75 8v8l5.5 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="75" y="47" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="19" fontWeight="bold" letterSpacing="2">
        EST. 2021
      </text>
      <text x="75" y="60" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7.6" letterSpacing="1.8" opacity="0.85">
        LAHORE · PAKISTAN
      </text>
    </svg>
  );
}

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-x-12 pr-12 sm:gap-x-20 sm:pr-20 ${
        duplicate ? "motion-reduce:hidden" : ""
      }`}
    >
      <span className="opacity-90 transition-opacity hover:opacity-100">
        <SecpMark />
      </span>
      <span className="opacity-90 transition-opacity hover:opacity-100">
        <FbrMark />
      </span>
      <span className="opacity-90 transition-opacity hover:opacity-100">
        <OdooMark />
      </span>
      <span className="opacity-80 transition-opacity hover:opacity-100">
        <PvtLtdMark />
      </span>
      <span className="opacity-80 transition-opacity hover:opacity-100">
        <EstMark />
      </span>
    </div>
  );
}

export function CertificationsBand() {
  return (
    <section className="relative bg-navy-950 py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div className="container-page">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Certifications</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate-400">
          Registered with the authorities we do business under — verified on the About page — and the platforms we build on every day.
        </p>
      </div>
      <div className="group relative mt-10">
        {/* Edge fades so logos appear and disappear smoothly. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-navy-950 to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-navy-950 to-transparent sm:w-24"
        />
        <div className="overflow-hidden">
          <div className="flex w-max motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-safe:animate-[cert-marquee_26s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]">
            <LogoSet />
            <LogoSet duplicate />
          </div>
        </div>
      </div>

      {/* Honest stats strip — same standard the Markets section states ("we do
          not publish numbers we cannot show"): every value below is counted
          from the site's own data, and every one links out to real pages.
          No invented project/client counts. */}
      <div className="mt-12 border-t border-white/10 pt-10 sm:mt-14 sm:pt-12">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {[
            { value: "2021", label: "Established · Lahore" },
            { value: String(services.length), label: "Services & solutions" },
            { value: String(industries.length), label: "Industries modelled" },
            { value: String(markets.length), label: "Countries served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="container-page mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Numbers we can show — every service, industry and market above links to its own page on this site.
        </p>
      </div>
    </section>
  );
}
