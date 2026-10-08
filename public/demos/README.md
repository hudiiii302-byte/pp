# Showcase screenshots & stage backdrops

Three different kinds of image live here, and the difference matters.

```
public/demos/
├── <id>.jpg          ← REAL screenshot of the real, running site   (preferred)
├── cover/<id>.jpg    ← illustrated cover, used while (1) is missing (fallback)
└── stage/<id>.jpg    ← abstract backdrop the device frame sits on  (decoration)
```

`src/lib/demo-shots.ts` → `demoPreview()` picks between them in exactly that
order and tells the card which mode to render in.

## 1. `/<id>.jpg` — the screenshots

Real captures of the websites listed in `src/lib/demos.ts`. The section these
appear in tells the visitor that every card opens a real, working website, so
these files must always be an honest capture of the live site. Never
hand-draw, retouch or generate one — if you have no capture, let it fall
through to the cover, which is labelled as an illustration.

### Refresh them

```bash
# one-time setup on whichever machine runs the capture
npm i -D playwright sharp
npx playwright install chromium

npm run demo:shots              # all showcases
npm run demo:shots -- motor     # a single id
npm run demo:shots -- --remote  # force the degraded fallback path
```

Then commit the regenerated files.

### Why Playwright and not a screenshot service

The script will fall back to thum.io / mshots if Chromium is unavailable, but
that path produces the thumbnails the October 2026 audit flagged as "not
professional":

| | Remote service (fallback) | Playwright (preferred) |
|---|---|---|
| Source size | 900 × 560 | 2880 × 1800, shipped at 1800 × 1125 |
| Retina | no — soft on every modern screen | yes |
| Crop | top 560px only | full 16:10 viewport, matching the card |
| Waits for images | **no** | `networkidle` |
| Waits for webfonts | no | `document.fonts.ready` |
| Reveal-on-scroll animations | captured un-triggered | scrolled and settled first |
| Cookie bars / chat bubbles | included | hidden before the shot |

Our showcase sites are Next.js apps full of lazy-loaded photography, so
"waits for images" alone is most of the difference between a premium
thumbnail and a washed-out empty hero.

### Expected filenames

Taken from the `shot` field in `src/lib/demos.ts`:

`properties-pak.jpg` · `motor.jpg` · `healthcare.jpg` · `education.jpg` ·
`ecommerce.jpg` · `luxury-restaurant.jpg` · `salon-beauty.jpg`

### If they are missing

Nothing breaks — the card falls back to the illustrated cover below, and the
`/api/demo-shot/[id]` proxy behind that. But a cover is a fallback, not a
substitute: it shows the kind of business the software serves, not the
software. Keep these files fresh.

## 1b. `/cover/<id>.jpg` — the illustrated covers

One per showcase. A photographic scene of the kind of place this product runs
in: an estate-agency desk, a showroom counter, a clinic reception, a boutique
packing bench. Rendered artwork, 1600 × 900, ~125 KB each.

**The rule that makes them safe:** every screen visible inside the artwork is
deliberately thrown out of focus, so nothing in the frame can be mistaken for
this product's interface. A cover is a book jacket, not a window.

Three things enforce that in code, in `<ShowcaseStage />`:

1. **No browser chrome in cover mode.** Artwork inside a browser frame reads
   as a screenshot; artwork edge-to-edge with a title set over it reads as a
   cover. So the device frame, traffic lights and URL bar are dropped and the
   product name is rendered as real DOM text over the image.
2. **Alt text starts with "Illustration representing …"**, everywhere the
   cover appears — showcase grid, feature card, hero reel, /products.
3. **The disclosure under the grid says so in plain words**, and the card's
   primary button still goes to the live site.

If you replace a cover, keep all three true. The moment a cover contains
legible UI, the section stops being able to say the products are real.

### Why they exist

Screenshots can only be captured from a machine that can reach the demo
hosts. Before this fallback existed, any environment without committed
screenshots rendered seven identical grey placeholders — the worst-looking
thing on the site, in the one section whose whole job is to prove we build
good-looking things.

## 2. `/stage/<id>.jpg` — the backdrops

One per showcase, matched to that product's palette. Used by
`<ShowcaseStage />` as the surface the device frame stands on.

These are **generated, abstract and purely decorative**: blurred fields of
colour and light with no objects, no text, no UI and nothing that could be
read as product content. They are the digital equivalent of a seamless paper
sweep in a photo studio. Keeping them abstract is deliberate — the moment a
backdrop contains anything resembling an interface, the section stops being
able to say "these are not mockups".

Each is 1200 × 670 and 10–15 KB; all seven together are 82 KB. If one is
missing, `demoStageSrc()` returns `undefined` and the component degrades to a
CSS gradient stage.
