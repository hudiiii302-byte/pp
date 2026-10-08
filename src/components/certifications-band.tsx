/**
 * Dark "Certifications" band, modelled on the way Lahore peers (Rextech)
 * display their marks under the hero — now with the OFFICIAL logos on white
 * tiles (the earlier hand-drawn SVG wordmarks read as amateur, so they were
 * replaced per owner feedback on 2026-10-08).
 *
 * Tiles in the loop (official artwork, processed into /public/logos):
 *  - SECP: official emblem of the Securities and Exchange Commission of
 *    Pakistan — a registration the company actually holds.
 *  - FBR: official Federal Board of Revenue logo — registration held.
 *  - Odoo: official wordmark — a platform mark, added at the owner's
 *    explicit request (technology we build on, not a government body).
 *
 * PRA / PSEB / Lahore Chamber marks must NOT be added until those
 * registrations are actually complete (see BACKLINK-PLAYBOOK-2026-10-08.md
 * Phase 1) — add them as further white tiles in the same loop when ready.
 *
 * Motion: seamless CSS marquee (keyframes `cert-marquee` in globals.css) —
 * two identical sets, animated to -50%. Pauses on hover; under
 * prefers-reduced-motion it falls back to a static, centre-wrapped row.
 * Responsive: tiles scale from h-16 on phones to h-20 on larger screens.
 */

const TILES = [
  {
    src: "/logos/secp.jpg",
    alt: "SECP — Securities and Exchange Commission of Pakistan (registered)",
    width: 664,
    height: 694,
  },
  {
    src: "/logos/fbr.png",
    alt: "FBR — Federal Board of Revenue, Pakistan (registered)",
    width: 465,
    height: 218,
  },
  {
    src: "/logos/odoo.png",
    alt: "Odoo — ERP and CRM platform",
    width: 621,
    height: 196,
  },
] as const;

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-x-6 pr-6 sm:gap-x-10 sm:pr-10 ${
        duplicate ? "motion-reduce:hidden" : ""
      }`}
    >
      {TILES.map((t) => (
        <span
          key={t.src}
          className="flex h-16 shrink-0 items-center rounded-2xl bg-white px-5 shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:h-20 sm:px-7"
        >
          <img
            src={t.src}
            alt={t.alt}
            width={t.width}
            height={t.height}
            className="h-full w-auto object-contain"
          />
        </span>
      ))}
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
          <div className="flex w-max motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-safe:animate-[cert-marquee_18s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]">
            <LogoSet />
            <LogoSet duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
