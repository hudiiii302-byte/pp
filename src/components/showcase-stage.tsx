import { GlobeIcon } from "@/components/icons";
import { DemoShot } from "@/components/demo-shot";
import type { DemoWebsite } from "@/lib/demos";

/**
 * Premium presentation layer for a showcase card.
 *
 * It renders in one of two modes, chosen by `demoPreview()` — never guessed
 * here.
 *
 * --------------------------------------------------------------------------
 * SCREENSHOT MODE (`isCover: false`) — the goal state
 * --------------------------------------------------------------------------
 * A real capture of the real running site, staged in three layers:
 *
 *  1. STAGE — an abstract, heavily out-of-focus backdrop tuned to each
 *     product's palette (`/public/demos/stage/*`). Pure colour and light: no
 *     objects, no text, no UI. The photographic equivalent of a seamless
 *     paper sweep. Falls back to the brand gradient if the file is missing.
 *  2. DEVICE — a browser window with real bezel geometry, a soft contact
 *     shadow and a gentle perspective tilt. This is what turns "an image on a
 *     page" into "a product sitting in a room".
 *  3. GLASS — a diagonal screen glare and a vignette, so the screenshot reads
 *     as being behind glass rather than printed on the card.
 *
 * Nothing in this mode fabricates, redraws or embellishes product UI.
 *
 * --------------------------------------------------------------------------
 * COVER MODE (`isCover: true`) — the honest fallback
 * --------------------------------------------------------------------------
 * Shown when no screenshot has been committed yet. The image is commissioned
 * artwork of the *kind of place* this software runs in — an agency desk, a
 * showroom counter, a clinic reception — with every on-screen surface in the
 * photograph deliberately thrown out of focus.
 *
 * Three rules make this mode safe to ship:
 *
 *  - No browser chrome. Artwork inside a browser frame reads as a screenshot;
 *    artwork edge to edge with a title over it reads as a book cover. So the
 *    device frame is dropped entirely and the product name is set as real
 *    text over the image instead.
 *  - Nothing legible on any screen in the artwork, so no viewer can ever come
 *    away believing they have seen this product's interface.
 *  - The alt text begins "Illustration", and the disclosure under the grid
 *    says covers are illustrations and the link goes to the real thing.
 *
 * Either mode costs effectively nothing beyond the image: every other layer
 * is CSS, so the card is visually complete in the first HTML response.
 */

type Variant = "card" | "feature";

export function ShowcaseStage({
  demo,
  shot,
  stage,
  isCover = false,
  priority = false,
  variant = "card",
}: {
  demo: DemoWebsite;
  /** Resolved image URL — `demoPreview(demo).src`. */
  shot: string;
  /** Resolved backdrop URL — `demoStageSrc(demo)`. Undefined → CSS stage. */
  stage?: string;
  /** `demoPreview(demo).isCover` — switches to the poster layout. */
  isCover?: boolean;
  priority?: boolean;
  variant?: Variant;
}) {
  const gradient = demo.accent ?? "from-navy-800 via-navy-700 to-brand-600";
  const isLive = demo.kind === "live";
  const isFeature = variant === "feature";

  const label = (
    <span
      className={`absolute left-4 top-4 z-[6] inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] shadow-lg backdrop-blur ${
        isLive
          ? "bg-brand-500 text-white ring-1 ring-white/30"
          : "bg-navy-950/85 text-brand-300 ring-1 ring-brand-400/50"
      }`}
    >
      {isLive ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      ) : null}
      {demo.label}
    </span>
  );

  /* ------------------------------------------------------------------ */
  /* COVER MODE                                                          */
  /* ------------------------------------------------------------------ */
  if (isCover) {
    return (
      <span className="showcase-stage relative block aspect-[16/10] overflow-hidden bg-navy-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot}
          alt={`Illustration representing ${demo.name} — ${demo.category.toLowerCase()} software built by WordbitX`}
          width={1600}
          height={900}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />

        {/* Brand tint — ties seven different photographs into one palette. */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.22] mix-blend-soft-light`}
        />
        {/* Reading scrim for the title. Heavier at the foot, clear at the top
            so the photograph still carries the frame. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,20,0.92)_0%,rgba(3,8,20,0.66)_26%,rgba(3,8,20,0.12)_58%,rgba(3,8,20,0.28)_100%)]"
        />
        <span aria-hidden="true" className="showcase-grain absolute inset-0" />

        {label}

        {/* Host chip lives in the opposite top corner, not next to the title.
            Sharing the bottom row with it was squeezing longer names
            ("WordbitX Education Platform") into an ellipsis — the one piece of
            text on the card that must never be cut. */}
        <span className="absolute right-4 top-4 z-[6] hidden items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5 text-[0.62rem] font-medium text-slate-200 ring-1 ring-white/15 backdrop-blur-sm sm:inline-flex">
          <GlobeIcon className="h-3 w-3 shrink-0" />
          {demo.host}
        </span>

        {/* Title block — real text, not baked into the artwork, so it stays
            crisp at every density and is selectable and translatable. */}
        <span
          className={`absolute inset-x-0 bottom-0 z-[6] block p-5 ${isFeature ? "sm:p-7" : ""}`}
        >
          <span
            className={`block font-semibold leading-[1.15] tracking-[-0.01em] text-balance text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] ${
              isFeature ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {demo.name}
          </span>
          <span className="mt-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
            {demo.category}
          </span>
        </span>

        {/* Top sheen — stops the photograph meeting the card edge flat. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[7] bg-[linear-gradient(107deg,rgba(255,255,255,0.1)_0%,transparent_34%)]"
        />
      </span>
    );
  }

  /* ------------------------------------------------------------------ */
  /* SCREENSHOT MODE                                                     */
  /* ------------------------------------------------------------------ */

  /* The feature treatment sits the device lower and larger in frame: it is the
     flagship product and gets the more confident crop. */
  const deviceBox = isFeature
    ? "inset-x-[5%] top-[8%] bottom-[9%]"
    : "inset-x-[7%] top-[11%] bottom-[11%]";

  return (
    <span className="showcase-stage relative block aspect-[16/10] overflow-hidden bg-navy-950">
      {/* ---------- 1. STAGE ---------- */}
      {stage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={stage}
          alt=""
          aria-hidden="true"
          width={1200}
          height={670}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
        />
      ) : null}

      {/* Brand wash. Over a backdrop it is a soft tint; without one it has to
          carry the whole stage, so it goes nearly opaque. */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${gradient} ${
          stage ? "opacity-30 mix-blend-soft-light" : "opacity-90"
        }`}
      />
      {!stage ? <span aria-hidden="true" className="absolute inset-0 grid-pattern opacity-25" /> : null}

      {/* Vignette — pulls the eye to the centre and stops the device floating
          on a flat field. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_0%,transparent_28%,rgba(3,8,20,0.72)_100%)]"
      />
      <span aria-hidden="true" className="showcase-grain absolute inset-0" />

      {/* ---------- 2. DEVICE ---------- */}
      <span className={`absolute ${deviceBox}`}>
        {/* Contact shadow. Without this the frame looks pasted on. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-[10%] -bottom-3 h-8 rounded-[50%] bg-black/70 blur-xl"
        />

        <span className="showcase-device relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-navy-950/80 shadow-[0_34px_70px_-28px_rgba(0,0,0,0.95),0_2px_0_0_rgba(255,255,255,0.09)_inset] ring-1 ring-black/40 backdrop-blur-[2px] sm:rounded-[0.9rem]">
          {/* Title bar */}
          <span className="relative z-[5] flex shrink-0 items-center gap-2 border-b border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.03] px-3 py-2">
            <span className="flex gap-1.5">
              <i className="h-2 w-2 rounded-full bg-red-400/85" />
              <i className="h-2 w-2 rounded-full bg-yellow-400/85" />
              <i className="h-2 w-2 rounded-full bg-brand-400/85" />
            </span>
            <span className="ml-1 flex min-w-0 items-center gap-1.5 truncate rounded-md bg-black/25 px-2 py-0.5 text-[0.6rem] font-medium text-slate-300 ring-1 ring-white/10">
              <GlobeIcon className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">{demo.host}</span>
            </span>
          </span>

          {/* Screen */}
          <span className="relative flex-1 overflow-hidden bg-navy-900">
            {/* Branded skeleton — present in the first HTML byte, so the device
                is never an empty rectangle while the screenshot decodes. It is
                abstract wireframe bars, not invented UI. */}
            <span aria-hidden="true" className="absolute inset-0 flex flex-col gap-2 p-3">
              <span className="block h-2 w-3/5 rounded bg-white/15" />
              <span className="block h-2 w-2/5 rounded bg-brand-400/40" />
              <span className="mt-auto block h-5 w-full rounded bg-white/[0.07]" />
            </span>

            <DemoShot
              src={shot}
              alt={`${demo.name} — ${demo.category} website built by WordbitX`}
              priority={priority}
            />

            {/* ---------- 3. GLASS ---------- */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[4] bg-[linear-gradient(107deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_22%,transparent_46%)]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(110%_80%_at_50%_0%,transparent_55%,rgba(3,8,20,0.42)_100%)]"
            />
          </span>
        </span>
      </span>

      {label}
    </span>
  );
}
