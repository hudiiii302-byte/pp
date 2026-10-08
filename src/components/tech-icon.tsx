import { brandIconData, type SimpleIconData } from "@/lib/brand-icon-data";
import type { TechItem } from "@/lib/technologies";

/** Only the glyphs we reference are bundled — see src/lib/brand-icon-data.ts. */
const iconRegistry: Record<string, SimpleIconData | undefined> = brandIconData;

function isDark(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.28;
}

/**
 * Renders every distinct brand icon used on the page once, as an SVG
 * <symbol>. Glyphs then reference it with <use>.
 *
 * Brand icon paths are long (some are 2–3 KB each) and the same logos repeat
 * many times per page — the technology marquee alone renders its list twice.
 * Emitting them once cuts tens of kilobytes of HTML and roughly halves the
 * number of <path> nodes the browser has to parse.
 */
export function TechIconSprite({ items }: { items: TechItem[] }) {
  const seen = new Set<string>();
  const symbols: Array<{ key: string; path: string }> = [];

  for (const item of items) {
    const key = item.icon;
    if (!key || seen.has(key)) continue;
    const icon = iconRegistry[key];
    if (!icon) continue;
    seen.add(key);
    symbols.push({ key, path: icon.path });
  }

  if (symbols.length === 0) return null;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {symbols.map(({ key, path }) => (
          <symbol key={key} id={`ti-${key}`} viewBox="0 0 24 24">
            <path d={path} />
          </symbol>
        ))}
      </defs>
    </svg>
  );
}

export function TechGlyph({
  item,
  className = "h-7 w-7",
  onDark = false,
  sprite = false,
}: {
  item: TechItem;
  className?: string;
  onDark?: boolean;
  /** Reference the page sprite instead of inlining the path (see TechIconSprite). */
  sprite?: boolean;
}) {
  const icon = item.icon ? iconRegistry[item.icon] : undefined;

  if (!icon) {
    const label = item.fallback ?? item.name.slice(0, 2).toUpperCase();
    return (
      <span
        className={`${className} inline-flex items-center justify-center rounded-md text-[0.6rem] font-bold tracking-tight`}
        style={{
          color: item.color ?? (onDark ? "#ffffff" : "#0b1524"),
          backgroundColor: `${item.color ?? "#1ca830"}1f`,
        }}
        aria-hidden="true"
      >
        {label}
      </span>
    );
  }

  const color = onDark && isDark(icon.hex) ? "#ffffff" : `#${icon.hex}`;

  if (sprite) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={color} role="img" aria-label={`${item.name} logo`}>
        <use href={`#ti-${item.icon}`} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} role="img" aria-label={`${item.name} logo`}>
      <title>{item.name}</title>
      <path d={icon.path} />
    </svg>
  );
}

export function TechChip({
  item,
  onDark = false,
  sprite = false,
}: {
  item: TechItem;
  onDark?: boolean;
  sprite?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-all duration-300 ${
        onDark
          ? "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.08]"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_18px_40px_-28px_rgba(5,13,33,0.5)]"
      }`}
    >
      <TechGlyph item={item} onDark={onDark} sprite={sprite} className="h-6 w-6 shrink-0" />
      <span className={`text-sm font-medium ${onDark ? "text-slate-200" : "text-ink-700"}`}>{item.name}</span>
    </div>
  );
}
