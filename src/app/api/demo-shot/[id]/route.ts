import { getShowcase } from "@/lib/demos";

/**
 * Same-origin, long-cached screenshot proxy for showcase cards.
 *
 * Why this exists: hitting a third-party screenshot service straight from the
 * browser meant every visitor waited several seconds per card while the image
 * was rendered on demand. Proxying it means:
 *  - the browser makes a same-origin request (one less DNS + TLS handshake),
 *  - the response is cached by the CDN / Next data cache for a week,
 *  - a failure returns a branded SVG instantly instead of a broken image.
 */

const WEEK = 604800; // 7 days in seconds

// Next requires a literal here, not an expression.
export const revalidate = 604800;

/**
 * Screenshot providers, tried in order. Two of them, not one, because these
 * shots now feed the home-page hero as well as the showcase cards — a single
 * provider having a bad day should not decide what the hero looks like.
 * width 900 is enough for a 3-up card grid at 2x DPR; smaller = faster.
 */
const providers: { name: string; endpoint: (url: string) => string }[] = [
  {
    name: "thum.io",
    endpoint: (url) => `https://image.thum.io/get/width/900/crop/560/noanimate/maxAge/168/${url}`,
  },
  {
    name: "mshots",
    endpoint: (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=560`,
  },
];

function placeholder(demo: { name: string; category: string; host: string; label: string }) {
  /**
   * The last line of defence, shown only when both screenshot providers are
   * unreachable. It used to be a generic grey browser window, which read as
   * "broken". It is now a designed, on-brand product tile carrying the real
   * product name, category and host — so the worst case still looks like
   * something we meant to ship rather than a failed image.
   */
  const clean = (value: string) => value.replace(/[&<>"']/g, "");
  const name = clean(demo.name);
  const category = clean(demo.category);
  const host = clean(demo.host);
  const label = clean(demo.label);
  const pillWidth = Math.round(label.length * 8.4 + 34);
  // "WordbitX Education Platform" is 27 characters and overflowed the tile at
  // a fixed size, so the title scales down as the product name gets longer.
  const titleSize = name.length <= 16 ? 54 : name.length <= 24 ? 44 : 36;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560" role="img" aria-label="${name} — ${category}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050d21"/>
      <stop offset="55%" stop-color="#071531"/>
      <stop offset="100%" stop-color="#0a1c3f"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="18%" r="62%">
      <stop offset="0%" stop-color="#1ca830" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#1ca830" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="45" height="45" patternUnits="userSpaceOnUse">
      <path d="M45 0H0v45" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="900" height="560" fill="url(#bg)"/>
  <rect width="900" height="560" fill="url(#grid)"/>
  <rect width="900" height="560" fill="url(#glow)"/>
  <rect x="64" y="96" width="58" height="4" rx="2" fill="#1ca830"/>
  <text x="64" y="76" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="15" font-weight="700" letter-spacing="4.5" fill="#9fdda8">WORDBITX PRODUCT</text>
  <text x="64" y="188" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="${titleSize}" font-weight="700" fill="#ffffff">${name}</text>
  <text x="64" y="232" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="23" fill="#93a1b3">${category}</text>
  <rect x="64" y="438" width="${pillWidth}" height="40" rx="20" fill="#1ca830" fill-opacity="0.18" stroke="#1ca830" stroke-opacity="0.55"/>
  <text x="${64 + pillWidth / 2}" y="464" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="16" font-weight="600" fill="#9fdda8" text-anchor="middle">${label}</text>
  <text x="${64 + pillWidth + 22}" y="464" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="17" fill="#5a6a80">${host}</text>
</svg>`;
}

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  /**
   * `?strict=1` → return 404 instead of the branded placeholder.
   *
   * The showcase cards want the placeholder: it keeps a card looking complete.
   * The home-page hero wants the opposite — it would rather drop the slide
   * entirely than rotate an empty browser frame into the most valuable slot on
   * the site, and it can only know to do that if the request actually fails.
   */
  const strict = new URL(request.url).searchParams.get("strict") === "1";
  const demo = getShowcase(id);

  if (!demo) {
    return new Response("Not found", { status: 404 });
  }

  for (const provider of providers) {
    try {
      const upstream = await fetch(provider.endpoint(demo.url), {
        next: { revalidate: WEEK },
        signal: AbortSignal.timeout(12_000),
        headers: { accept: "image/webp,image/jpeg,image/png,*/*" },
      });

      const type = upstream.headers.get("content-type") ?? "";
      if (!upstream.ok || !type.startsWith("image/")) {
        throw new Error(`screenshot upstream ${upstream.status}`);
      }

      const body = await upstream.arrayBuffer();
      // Both providers answer with a tiny grey "still rendering" image rather
      // than an error, so size is the only reliable tell.
      if (body.byteLength < 8192) throw new Error("screenshot too small");

      return new Response(body, {
        headers: {
          "content-type": type,
          "cache-control": `public, max-age=86400, s-maxage=${WEEK}, stale-while-revalidate=${WEEK * 4}`,
          "x-shot-source": provider.name,
        },
      });
    } catch {
      // Try the next provider.
    }
  }

  if (strict) {
    return new Response(null, {
      status: 404,
      headers: { "cache-control": "public, max-age=300, s-maxage=300" },
    });
  }

  // Never show a broken card — return the branded frame instantly.
  return new Response(placeholder(demo), {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=600, s-maxage=600, stale-while-revalidate=86400",
      "x-shot-source": "placeholder",
    },
  });
}
