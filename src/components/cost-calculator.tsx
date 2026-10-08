"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

type TypeKey = "website" | "store" | "webapp" | "app";

const TYPE_META: Record<
  TypeKey,
  {
    label: string;
    blurb: string;
    baseLow: number;
    baseHigh: number;
    perScaleLow: number;
    perScaleHigh: number;
    weeksLow: number;
    weeksHigh: number;
    scaleLabel: string;
    scaleMin: number;
    scaleMax: number;
    scaleStep: number;
    scaleUnit: string;
    includes: string[];
  }
> = {
  website: {
    label: "Business website",
    blurb: "Corporate site, landing site or portal with CMS",
    baseLow: 250_000,
    baseHigh: 450_000,
    perScaleLow: 35_000,
    perScaleHigh: 55_000,
    weeksLow: 2,
    weeksHigh: 4,
    scaleLabel: "Pages",
    scaleMin: 3,
    scaleMax: 20,
    scaleStep: 1,
    scaleUnit: "pages",
    includes: ["CMS your team can edit", "Mobile-first, SEO-ready", "Speed & Core Web Vitals budget", "Launch + handover docs"],
  },
  store: {
    label: "E-commerce store",
    blurb: "Shopify / WooCommerce store with local payments",
    baseLow: 500_000,
    baseHigh: 1_000_000,
    perScaleLow: 12_000,
    perScaleHigh: 22_000,
    weeksLow: 4,
    weeksHigh: 7,
    scaleLabel: "Catalogue size",
    scaleMin: 50,
    scaleMax: 2000,
    scaleStep: 50,
    scaleUnit: "products",
    includes: ["Theme or headless front end", "JazzCash/Easypaisa/cards + COD", "Courier & shipping rules", "Catalogue migration (if any)"],
  },
  webapp: {
    label: "Custom web app",
    blurb: "Portal, SaaS or internal system with accounts",
    baseLow: 900_000,
    baseHigh: 2_000_000,
    perScaleLow: 70_000,
    perScaleHigh: 110_000,
    weeksLow: 6,
    weeksHigh: 12,
    scaleLabel: "Modules",
    scaleMin: 2,
    scaleMax: 12,
    scaleStep: 1,
    scaleUnit: "modules",
    includes: ["Typed API + database design", "Auth, roles & audit trail", "Testing on money paths", "CI pipeline in your repo"],
  },
  app: {
    label: "Mobile app (MVP)",
    blurb: "Android + iOS from one codebase",
    baseLow: 1_200_000,
    baseHigh: 2_800_000,
    perScaleLow: 55_000,
    perScaleHigh: 95_000,
    weeksLow: 8,
    weeksHigh: 14,
    scaleLabel: "Features",
    scaleMin: 4,
    scaleMax: 20,
    scaleStep: 1,
    scaleUnit: "features",
    includes: ["Flutter or React Native", "Offline-first where needed", "Play Store + App Store publishing", "Push, deep links & analytics"],
  },
};

const ADDONS: { key: string; label: string; note: string; low: number; high: number }[] = [
  { key: "multilang", label: "Urdu + English", note: "bilingual content model & RTL", low: 60_000, high: 120_000 },
  { key: "payments", label: "Payment gateway", note: "cards, wallets, COD flows", low: 50_000, high: 100_000 },
  { key: "admin", label: "Admin / reporting panel", note: "dashboards, exports, roles", low: 80_000, high: 150_000 },
  { key: "integrations", label: "Third-party integrations", note: "banks, couriers, APIs, SMS", low: 70_000, high: 150_000 },
  { key: "ai", label: "AI feature", note: "search, drafts, extraction — scoped", low: 150_000, high: 400_000 },
  { key: "design", label: "Custom design system", note: "beyond a standard theme", low: 60_000, high: 150_000 },
];

/** Pakistani digit grouping: 4,20,000 */
function pk(n: number): string {
  const s = Math.round(n).toString();
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  let rest = s.slice(0, -3);
  const parts: string[] = [];
  while (rest.length > 2) {
    parts.unshift(rest.slice(-2));
    rest = rest.slice(0, -2);
  }
  if (rest) parts.unshift(rest);
  return parts.join(",") + "," + last3;
}

const USD = 280;

export function CostCalculator() {
  const [type, setType] = useState<TypeKey>("website");
  const [scale, setScale] = useState<number>(8);
  const [addons, setAddons] = useState<Set<string>>(new Set());
  const [rush, setRush] = useState(false);

  const meta = TYPE_META[type];

  const result = useMemo(() => {
    const fraction = (scale - meta.scaleMin) / (meta.scaleMax - meta.scaleMin);
    let low = meta.baseLow + meta.perScaleLow * fraction;
    let high = meta.baseHigh + meta.perScaleHigh * fraction;
    let extraLow = 0;
    let extraHigh = 0;
    for (const addon of ADDONS) {
      if (addons.has(addon.key)) {
        extraLow += addon.low;
        extraHigh += addon.high;
      }
    }
    low += extraLow;
    high += extraHigh;
    const rushMult = rush ? 1.35 : 1;
    low *= rushMult;
    high *= rushMult;
    const weeksLow = Math.max(1, Math.round(meta.weeksLow * (0.75 + 0.25 * fraction) * (rush ? 0.75 : 1)));
    const weeksHigh = Math.max(weeksLow + 1, Math.round(meta.weeksHigh * (0.75 + 0.25 * fraction) * (rush ? 0.75 : 1)));
    return { low, high, weeksLow, weeksHigh, extraLow, extraHigh };
  }, [type, scale, addons, rush, meta]);

  const toggle = (key: string) => {
    setAddons((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-45px_rgba(5,13,33,0.4)]">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* CONTROLS */}
        <div className="space-y-7 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">1 · What are you building?</p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {(Object.keys(TYPE_META) as TypeKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setType(key);
                    setScale(TYPE_META[key].scaleMin + Math.round(((TYPE_META[key].scaleMax - TYPE_META[key].scaleMin) * 0.25) / TYPE_META[key].scaleStep) * TYPE_META[key].scaleStep);
                  }}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                    type === key ? "border-brand-500 bg-brand-50/60" : "border-slate-200 bg-white hover:border-brand-300"
                  }`}
                >
                  <span className={`block text-sm font-semibold ${type === key ? "text-brand-700" : "text-ink-900"}`}>
                    {TYPE_META[key].label}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-500">{TYPE_META[key].blurb}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">2 · Scale</p>
              <p className="text-sm font-semibold text-ink-900">
                {scale} {meta.scaleUnit}
              </p>
            </div>
            <input
              type="range"
              min={meta.scaleMin}
              max={meta.scaleMax}
              step={meta.scaleStep}
              value={scale}
              onChange={(event) => setScale(Number(event.target.value))}
              className="mt-3 w-full accent-brand-600"
              aria-label={`${meta.scaleLabel} for the estimate`}
            />
            <p className="mt-1 text-xs text-ink-400">{meta.scaleLabel} — more of it, more of the price.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">3 · Anything extra?</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {ADDONS.map((addon) => (
                <label
                  key={addon.key}
                  className={`flex cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${
                    addons.has(addon.key) ? "border-brand-400 bg-brand-50/60" : "border-slate-200 bg-white hover:border-brand-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addons.has(addon.key)}
                    onChange={() => toggle(addon.key)}
                    className="mt-0.5 h-4 w-4 accent-brand-600"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">{addon.label}</span>
                    <span className="block text-xs text-ink-500">{addon.note}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">4 · Timeline</p>
            <div className="mt-3 flex gap-2.5">
              <button
                type="button"
                onClick={() => setRush(false)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  !rush ? "border-brand-500 bg-brand-50/60 text-brand-700" : "border-slate-200 bg-white text-ink-600"
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setRush(true)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  rush ? "border-brand-500 bg-brand-50/60 text-brand-700" : "border-slate-200 bg-white text-ink-600"
                }`}
              >
                Rush (≈ +35%)
              </button>
            </div>
          </div>
        </div>

        {/* OUTPUT */}
        <div className="flex flex-col justify-between border-t border-slate-200 bg-navy-950 p-6 text-white sm:p-8 lg:border-l lg:border-t-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Indicative range</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {pk(result.low)} – {pk(result.high)}
            </p>
            <p className="mt-1.5 text-sm text-slate-300">
              ≈ ${Math.round(result.low / USD / 10) * 10} – ${Math.round(result.high / USD / 10) * 10} USD ·{" "}
              {result.weeksLow}–{result.weeksHigh} weeks
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Included at this level</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {meta.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Budgeting estimate for scoping conversations — not a quote. The final number is a written scope after
              your brief, at the rate band published on our Clutch profile (under $25 / hr).
            </p>
          </div>
          <div className="mt-7 space-y-2.5">
            <ButtonLink href="/contact" className="w-full justify-center">
              Get a written quote
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(
                `Hello WordbitX, I used the cost calculator: ${meta.label}, ${scale} ${meta.scaleUnit}. Roughly ${pk(
                  result.low,
                )}–${pk(result.high)} PKR. I would like a written scope.`,
              )}
              variant="ghost"
              external
              className="w-full justify-center"
            >
              Chat on WhatsApp with these numbers
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
