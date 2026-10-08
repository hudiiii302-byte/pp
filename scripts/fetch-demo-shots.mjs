#!/usr/bin/env node
/**
 * Bakes static screenshots of every showcase website into /public/demos.
 *
 * Why: the showcase cards used to point an <img> straight at a third-party
 * screenshot service, which renders the page on demand — several seconds per
 * card, every cold visitor, nine cards at once. Committing the screenshots
 * makes them plain static files on the CDN, so the cards paint instantly.
 *
 * ---------------------------------------------------------------------------
 * CAPTURE QUALITY — read this before changing anything
 * ---------------------------------------------------------------------------
 * There are two capture paths and they are NOT equivalent.
 *
 *  1. PLAYWRIGHT (preferred).  A real Chromium at 1440x900 with
 *     deviceScaleFactor 2 → a 2880x1800 source. It waits for the network to go
 *     idle, waits for webfonts, scrolls once to fire reveal-on-scroll
 *     animations, scrolls back, and only then shoots. Our showcase sites are
 *     Next.js apps full of lazy-loaded photography, so "wait until it has
 *     actually finished" is the entire difference between a premium thumbnail
 *     and a washed-out half-empty one.
 *
 *  2. REMOTE SERVICES (fallback).  thum.io / mshots at 900x560, no DPR, no
 *     network-idle wait. These were the only path until October 2026 and they
 *     are the reason the showcase cards looked soft and half-rendered: a
 *     900px-wide, top-cropped, pre-image-load render stretched across a card
 *     that is ~840 physical pixels wide on a retina screen, and far more in
 *     the hero. Kept only so a machine without Chromium still produces
 *     something rather than nothing.
 *
 * Playwright is deliberately NOT a dependency in package.json: it would add a
 * browser download to every Vercel install for a script that only needs to run
 * when a showcase site is redesigned. Install it where you actually run the
 * capture:
 *
 *   npm i -D playwright && npx playwright install chromium
 *
 * ---------------------------------------------------------------------------
 * Usage
 * ---------------------------------------------------------------------------
 *   npm run demo:shots            # refresh every screenshot
 *   npm run demo:shots -- motor   # refresh one by id
 *   npm run demo:shots -- --remote   # force the low-quality fallback path
 *
 * Run it whenever a showcase site is redesigned, then commit /public/demos.
 * If the files are missing the site still works: it falls back to the
 * same-origin, long-cached /api/demo-shot/[id] proxy, which in turn falls back
 * to a designed SVG placeholder. Nothing is ever blank.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "demos");
const source = path.join(root, "src", "lib", "demos.ts");

/* Capture geometry.
   1440x900 is the most common desktop breakpoint our showcase sites are
   designed against, and 16:10 matches the aspect-[16/10] the cards render in —
   so the shot is never re-cropped by the browser. deviceScaleFactor 2 makes the
   stored file 2880x1800; it is downscaled to SHIP_WIDTH below so the committed
   file stays small while still being genuinely retina for a card. */
const VIEWPORT = { width: 1440, height: 900 };
const SCALE = 2;
const SHIP_WIDTH = 1800; // final committed width — 2x a 900px card slot
const JPEG_QUALITY = 86;

/* Fallback-only geometry (remote services). */
const REMOTE_WIDTH = 900;
const REMOTE_CROP = 560;
const TIMEOUT_MS = 25_000;

async function readShowcases() {
  const file = await fs.readFile(source, "utf8");
  const ids = [...file.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
  const urls = [...file.matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]);
  const shots = [...file.matchAll(/shot:\s*"([^"]+)"/g)].map((m) => m[1]);

  if (ids.length !== urls.length) {
    throw new Error("Could not pair ids with urls in src/lib/demos.ts");
  }

  return ids.map((id, index) => ({
    id,
    url: urls[index],
    shot: shots[index] ?? `/demos/${id}.jpg`,
  }));
}

/* -------------------------------------------------------------------------
   Optional tooling, loaded only if present.
   ------------------------------------------------------------------------- */

async function loadOptional(name) {
  try {
    return await import(name);
  } catch {
    return null;
  }
}

/**
 * Downscale a 2880px capture to SHIP_WIDTH and re-encode.
 *
 * sharp is optional too. Without it the full-resolution capture is written
 * as-is — still correct, just a larger file. The script says so rather than
 * silently committing a 2 MB JPEG.
 */
async function shrink(buffer, sharpModule) {
  if (!sharpModule) return { buffer, resized: false };
  const out = await sharpModule
    .default(buffer)
    .resize({ width: SHIP_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
  return { buffer: out, resized: true };
}

/* -------------------------------------------------------------------------
   Path 1 — real browser
   ------------------------------------------------------------------------- */

async function captureWithBrowser(browser, sharpModule, { url }) {
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
    /* Our own sites, but a stable desktop UA avoids any mobile branch. */
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36",
    /* Reveal-on-scroll is the point of the scroll dance below; a reduced-motion
       hint would make some libraries skip the animation and others freeze it
       mid-way, so we ask for normal motion and then wait it out. */
    reducedMotion: "no-preference",
  });

  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });

    // Webfonts: a shot taken before these resolve shows fallback metrics.
    await page.evaluate(() => document.fonts?.ready).catch(() => {});

    // Fire IntersectionObserver reveals, then return to the top.
    await page.evaluate(() => window.scrollTo(0, Math.round(window.innerHeight * 0.75)));
    await page.waitForTimeout(1_200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(900);

    // Hide anything that would date the shot or cover the design.
    await page.addStyleTag({
      content: `
        [class*="cookie" i], [id*="cookie" i],
        [class*="consent" i], [id*="consent" i],
        [class*="chat-widget" i], [class*="chatbot" i] { display: none !important; }
        html { scroll-behavior: auto !important; }
      `,
    });
    await page.waitForTimeout(250);

    const raw = await page.screenshot({ type: "jpeg", quality: 92 });
    const { buffer, resized } = await shrink(raw, sharpModule);
    return { buffer, provider: resized ? "chromium@2x→1800" : "chromium@2x (raw)" };
  } finally {
    await context.close();
  }
}

/* -------------------------------------------------------------------------
   Path 2 — remote services (degraded)
   ------------------------------------------------------------------------- */

const remoteProviders = [
  {
    name: "thum.io",
    endpoint: (url) =>
      `https://image.thum.io/get/width/${REMOTE_WIDTH}/crop/${REMOTE_CROP}/noanimate/${url}`,
  },
  {
    name: "mshots",
    endpoint: (url) =>
      `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${REMOTE_WIDTH}&h=${REMOTE_CROP}`,
  },
];

async function captureRemote({ url }) {
  const problems = [];

  for (const provider of remoteProviders) {
    try {
      const response = await fetch(provider.endpoint(url), {
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { accept: "image/jpeg,image/png,image/webp,*/*" },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const type = response.headers.get("content-type") ?? "";
      if (!type.startsWith("image/")) throw new Error(`content-type ${type}`);

      const buffer = Buffer.from(await response.arrayBuffer());
      // Both providers answer with a tiny grey "still rendering" image rather
      // than an error, so size is the only reliable tell.
      if (buffer.byteLength < 8192) throw new Error(`only ${buffer.byteLength} B, not a real render`);

      return { buffer, provider: provider.name };
    } catch (error) {
      problems.push(`${provider.name}: ${error?.message ?? error}`);
    }
  }

  throw new Error(problems.join(" | "));
}

/* -------------------------------------------------------------------------
   Runner
   ------------------------------------------------------------------------- */

const args = process.argv.slice(2);
const forceRemote = args.includes("--remote");
const only = args.filter((arg) => !arg.startsWith("-"));

const showcases = (await readShowcases()).filter(
  (item) => only.length === 0 || only.includes(item.id),
);

if (showcases.length === 0) {
  console.error("No matching showcase ids. Available ids come from src/lib/demos.ts");
  process.exit(1);
}

await fs.mkdir(outDir, { recursive: true });

const playwright = forceRemote ? null : await loadOptional("playwright");
const sharpModule = await loadOptional("sharp");

let browser = null;
if (playwright) {
  try {
    browser = await playwright.chromium.launch();
  } catch (error) {
    console.warn(`Chromium would not launch (${error?.message ?? error}).`);
    console.warn("Run `npx playwright install chromium`, or continue on the fallback path.\n");
  }
}

if (browser) {
  console.log(`Capturing ${showcases.length} showcase screenshot(s) with Chromium at ${VIEWPORT.width}x${VIEWPORT.height}@${SCALE}x…`);
  if (!sharpModule) {
    console.log("(sharp not installed — files will be committed at full capture size. `npm i -D sharp` to shrink them.)");
  }
} else {
  console.log(`Capturing ${showcases.length} showcase screenshot(s) via remote services — DEGRADED QUALITY.`);
  console.log("For sharp, fully-loaded thumbnails: npm i -D playwright sharp && npx playwright install chromium\n");
}

async function grab(item) {
  const target = path.join(root, "public", item.shot.replace(/^\//, ""));
  const { buffer, provider } = browser
    ? await captureWithBrowser(browser, sharpModule, item)
    : await captureRemote(item);

  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, buffer);

  return `${item.id.padEnd(18)} saved ${(buffer.byteLength / 1024).toFixed(0)} KB via ${provider} → ${item.shot}`;
}

/* Remote fetches run in parallel (eight sequential 25-second waits would be an
   unacceptable build cost). Browser captures run with a small concurrency cap:
   each one is a real Chromium context and launching eight at once on a CI box
   makes every page slower and the screenshots less reliable. */
const CONCURRENCY = browser ? 2 : showcases.length;

const results = [];
for (let i = 0; i < showcases.length; i += CONCURRENCY) {
  const batch = showcases.slice(i, i + CONCURRENCY);
  results.push(...(await Promise.allSettled(batch.map(grab))));
}

if (browser) await browser.close();

let ok = 0;
results.forEach((result, index) => {
  if (result.status === "fulfilled") {
    ok += 1;
    console.log(`  ✓ ${result.value}`);
  } else {
    console.warn(`  ✗ ${showcases[index].id.padEnd(18)} ${result.reason?.message ?? result.reason}`);
  }
});

console.log(
  `\n${ok}/${showcases.length} screenshots written to public/demos. ` +
    `Failed ones fall back to the /api/demo-shot proxy at runtime.`,
);
