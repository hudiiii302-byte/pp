import fs from "node:fs";
import path from "node:path";
import { demoWebsites } from "@/lib/demos";
import type { DemoWebsite } from "@/lib/demos";

/**
 * Resolves the preview image for a showcase card, in strict order of honesty
 * and of quality — which here happen to be the same order.
 *
 * 1. A committed screenshot in /public/demos → the real, running site. Served
 *    statically by the CDN, paints instantly, zero third-party requests. This
 *    is always what we want. Generate them with `npm run demo:shots`.
 * 2. An illustrated cover in /public/demos/cover → commissioned artwork of the
 *    kind of place the software runs in, with every on-screen surface
 *    deliberately out of focus. Used only while (1) is missing. The card
 *    switches to a poster layout and drops the browser chrome, because
 *    artwork inside a browser frame would read as a screenshot, and the
 *    disclosure under the grid says plainly that covers are illustrations.
 * 3. Our own same-origin proxy route, which ends in a branded SVG placeholder.
 *    The last resort, and now effectively unreachable.
 *
 * Why (2) exists at all: screenshots can only be captured from a machine that
 * can reach the demo hosts. Before this fallback, any environment without
 * committed screenshots rendered seven identical grey placeholders — the
 * single worst-looking thing on the site, on the one section whose entire job
 * is to prove we can build good-looking things.
 */

const publicDir = path.join(process.cwd(), "public");

function existing(rel: string | undefined) {
  if (!rel) return undefined;
  try {
    return fs.existsSync(path.join(publicDir, rel)) ? rel : undefined;
  } catch {
    return undefined;
  }
}

export type DemoPreview = {
  src: string;
  /** True when `src` is illustrated cover art rather than a real capture. */
  isCover: boolean;
};

const resolvedPreviews: Record<string, DemoPreview> = Object.fromEntries(
  demoWebsites.map((demo) => {
    const shot = existing(demo.shot);
    if (shot) return [demo.id, { src: shot, isCover: false }];
    const cover = existing(demo.cover);
    if (cover) return [demo.id, { src: cover, isCover: true }];
    return [demo.id, { src: `/api/demo-shot/${demo.id}`, isCover: false }];
  }),
);

export function demoPreview(demo: DemoWebsite): DemoPreview {
  return resolvedPreviews[demo.id] ?? { src: `/api/demo-shot/${demo.id}`, isCover: false };
}

/** Back-compat helper: just the URL. Prefer `demoPreview` for new call sites. */
export function demoShotSrc(demo: DemoWebsite) {
  return demoPreview(demo).src;
}

/** True only for a committed capture of the real site. */
export function hasLocalShot(demo: DemoWebsite) {
  return Boolean(existing(demo.shot));
}

/**
 * The abstract backdrop a showcase device frame is staged on.
 *
 * Resolved the same way as the screenshot — checked on disk at build time so a
 * missing file degrades to the CSS-only gradient stage rather than a 404. The
 * backdrops are decoration: blurred colour fields with no UI, no text and no
 * implied product content, so nothing here can ever be mistaken for a
 * screenshot of work we did not do.
 */
const resolvedStages: Record<string, string | undefined> = Object.fromEntries(
  demoWebsites.map((demo) => {
    if (!demo.stage) return [demo.id, undefined];
    try {
      return [demo.id, fs.existsSync(path.join(publicDir, demo.stage)) ? demo.stage : undefined];
    } catch {
      return [demo.id, undefined];
    }
  }),
);

export function demoStageSrc(demo: DemoWebsite) {
  return resolvedStages[demo.id];
}
