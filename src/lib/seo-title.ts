/**
 * Document titles Semrush/Google will not flag as too long, and that do not
 * pick up a second "| WordbitX" from the root layout template.
 */
const BRAND = "WordbitX";
const MAX = 58;

export function seoTitle(raw: string): string {
  const core = raw
    .replace(/\s*\|\s*WordbitX\s*$/i, "")
    .replace(/\s*\|\s*WordBitX\s*$/i, "")
    .trim();
  const suffix = ` | ${BRAND}`;
  if (core.length + suffix.length <= MAX) return `${core}${suffix}`;

  const budget = Math.max(24, MAX - suffix.length);
  const clipped = core
    .slice(0, budget)
    .replace(/\s+\S*$/, "")
    .replace(/[|,:;-]+$/g, "")
    .trim();
  return `${clipped}${suffix}`;
}

export function seoTitleAbsolute(raw: string): { absolute: string } {
  return { absolute: seoTitle(raw) };
}
