# Audit evidence — 4 October 2026

Screenshots captured from the **production build** (`next build` + `next start`)
in a real headless Chromium at 1440×1000, DPR 2. They accompany
`WEBSITE-DEEP-AUDIT-2026-10-04.md`.

They document two changes made in sequence on the same day, so they are best
read in order.

## Pass 1 — staging the screenshot

| File | What it shows |
|---|---|
| `showcase-before.jpg` | The "See our work live" card grid **before** anything changed. Seven flat navy-green rectangles, identical to each other, no depth, the DEMO badge colliding with the placeholder's own text. |
| `showcase-after.jpg` | The same grid with the new three-layer staging: per-product backdrop, tilted browser device with a contact shadow, glass glare, and an "In the build:" fact line on every card. |
| `showcase-after-featured.jpg` | The Properties Pak flagship card in the wide `feature` treatment. |

> **Note on this pair.** Neither capture could reach the showcase sites — this
> sandbox has no outbound network except the npm registry — so both show the
> `/api/demo-shot/[id]` SVG placeholder inside the device frame rather than a
> real screenshot. That is the *worst case* for both designs, which makes it a
> fair comparison of the staging alone. It is also exactly the problem pass 2
> set out to solve.

## Pass 2 — illustrated covers as the fallback

Pass 1 made the frame better and left the hole inside it. Pass 2 fills that
hole with commissioned artwork whenever no screenshot has been committed, and
switches the card to a poster layout so the artwork can never be mistaken for
a capture.

| File | What it shows |
|---|---|
| `showcase-cover-grid.jpg` | The grid in **cover mode**. Each card shows a photographic scene of the kind of place that product runs in, with the product name set as real text over it. Every screen inside the artwork is out of focus. |
| `showcase-cover-feature.jpg` | The flagship Properties Pak card in cover mode, plus the rewritten section description. |

## Unchanged findings

| File | What it shows |
|---|---|
| `home-hero.jpg` | The home hero as shipped. Documents three findings at once: the fifteen grey SEO links under the CTAs (audit §2.4), the AI-generated team photograph used as the hero image (§1.1), and the system-font fallback (§2.1). |

## What these captures still cannot show

A real screenshot of a real demo site. That requires running
`npm run demo:shots` from a machine with outbound network access; once those
files are committed, `demoPreview()` automatically switches every card back
from cover mode to the device frame from pass 1, with no code change.
