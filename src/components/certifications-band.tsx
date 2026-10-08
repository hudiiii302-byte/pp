/**
 * Dark "Certifications" band, modelled on the way Lahore peers (Rextech)
 * display their registration marks under the hero: monochrome white wordmarks
 * on a dark background, no claims beyond what is actually held.
 *
 * Only SECP and FBR appear — the two registrations Wordbit X Technology SMC –
 * Pvt. Ltd. holds. PRA / PSEB / Lahore Chamber marks must NOT be added until
 * those registrations are actually complete (see BACKLINK-PLAYBOOK-2026-10-08.md
 * Phase 1). The last two marks are factual facts about the company, not
 * third-party endorsements.
 */

function FbrMark() {
  return (
    <svg viewBox="0 0 150 64" className="h-14 w-auto" aria-label="FBR — Federal Board of Revenue, Pakistan" role="img">
      <path d="M8 26c22-16 62-24 104-20 12 1 24 4 30 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 33c22-16 62-24 104-20 12 1 24 4 30 8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <text x="75" y="42" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="30" fontWeight="bold" letterSpacing="1">
        FBR
      </text>
      <text x="75" y="56" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" letterSpacing="5" opacity="0.85">
        PAKISTAN
      </text>
    </svg>
  );
}

function SecpMark() {
  return (
    <svg viewBox="0 0 150 64" className="h-14 w-auto" aria-label="SECP — Securities and Exchange Commission of Pakistan" role="img">
      <path
        d="M75 4l3.6 8.6 9.3.8-7 6 2.1 9.1-8-4.9-8 4.9 2.1-9.1-7-6 9.3-.8z"
        fill="currentColor"
      />
      <text x="75" y="44" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="24" fontWeight="bold" letterSpacing="2">
        SECP
      </text>
      <text x="75" y="55" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.2" letterSpacing="1.4" opacity="0.85">
        SECURITIES &amp; EXCHANGE
      </text>
      <text x="75" y="62.5" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.2" letterSpacing="1.4" opacity="0.85">
        COMMISSION OF PAKISTAN
      </text>
    </svg>
  );
}

function PvtLtdMark() {
  return (
    <svg viewBox="0 0 150 64" className="h-14 w-auto" aria-label="Registered private limited company" role="img">
      <path
        d="M60 6h30l6 10H54zM54 16h42v6H54zM58 24h6v14h-6zM72 24h6v14h-6zM86 24h6v14h-6zM52 40h46v4H52z"
        fill="currentColor"
      />
      <text x="75" y="55" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="16" fontWeight="bold" letterSpacing="2">
        PVT. LTD.
      </text>
      <text x="75" y="62.5" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="6" letterSpacing="1.6" opacity="0.85">
        REGISTERED COMPANY
      </text>
    </svg>
  );
}

function EstMark() {
  return (
    <svg viewBox="0 0 150 64" className="h-14 w-auto" aria-label="Established 2021 in Lahore, Pakistan" role="img">
      <circle cx="75" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M75 8v8l5.5 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="75" y="47" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="19" fontWeight="bold" letterSpacing="2">
        EST. 2021
      </text>
      <text x="75" y="60" textAnchor="middle" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" letterSpacing="2" opacity="0.85">
        LAHORE · PAKISTAN
      </text>
    </svg>
  );
}

export function CertificationsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div className="container-page">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Certifications</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate-400">
          Registered with the authorities we do business under — verified on the About page.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
          <span className="opacity-90 transition-opacity hover:opacity-100">
            <SecpMark />
          </span>
          <span className="opacity-90 transition-opacity hover:opacity-100">
            <FbrMark />
          </span>
          <span className="opacity-80 transition-opacity hover:opacity-100">
            <PvtLtdMark />
          </span>
          <span className="opacity-80 transition-opacity hover:opacity-100">
            <EstMark />
          </span>
        </div>
      </div>
    </section>
  );
}
