# Home Page Audit — what is extra, and what it costs

**Date:** 3 October 2026
**Measured against:** production build (`npm run build` + `next start`), not dev mode
**Page:** `/` — `src/app/page.tsx` (868 lines) plus header, footer and 9 child components

---

## 0. Headline numbers

| Metric | Measured | Comment |
|---|---|---|
| HTML transferred | **977 KB** | 445 KB markup + **532 KB (54%) inline RSC payload** |
| JavaScript (uncompressed) | **6,079 KB** | |
| JavaScript (gzipped) | **~2.3 MB** | **2.10 MB of it is one accidental chunk — see §1** |
| CSS | 99 KB | one file, acceptable |
| `<a>` links in page | **215** (94 unique) | Google's practical comfort zone is ~150 |
| Links to `/services/*` | **61** (only **21 unique**) | `/services/web-development` is linked **8 times** |
| `<img>` tags | **43** (30 unique sources) | **3.86 MB** of source images behind them |
| Inline `<svg>` elements | **306** | |
| Headings | 1 × h1, **20 × h2**, **80 × h3** | |
| Visible words | **3,629** (~16 min read) | |
| Major content blocks | **17 sections** | |

**Verdict in one line:** the content is good and honest, but the page is carrying **one serious engineering bug**, **two duplicated sections**, and **three ideas repeated three times each**.

---

## 1. 🔴 THE BUG — 2.1 MB of icons shipped to every visitor, on every page

This is not a design opinion. This is a defect and it is bigger than everything else on this list combined.

```
/_next/static/chunks/0f2o6__58dicm.js   5,271 KB raw   →   2,150 KB gzipped
```

That single file is **the entire `simple-icons` npm package** — roughly 3,300 brand logo SVG paths (1001Tracklists, Adobe, Zapier … every brand icon in existence). The site uses about **50** of them.

**Root cause:**

```
src/components/header.tsx       "use client"
  └── imports MegaServiceIcon
        └── src/components/mega-service-icon.tsx
              └── import * as simpleIcons from "simple-icons"   ← line 2
```

`next.config.ts` already tries to prevent this:

```ts
optimizePackageImports: ["simple-icons"],
```

…but that optimisation **only rewrites named imports** (`import { siReact } from "simple-icons"`). A namespace import (`import * as simpleIcons`) is opaque to the bundler — it cannot know which keys you read, so it keeps all 3,300. The same pattern exists in `src/components/tech-icon.tsx:1`.

Because the header lives in the root layout, **this 2.1 MB loads on every single page of the site**, not just the home page.

**Cost:** on a Pakistani 4G connection (~3 Mbps real-world) that is roughly **6 extra seconds** of download and a few hundred milliseconds of parse time on a mid-range Android. It is almost certainly the largest single drag on the site's Core Web Vitals score.

**Fix:** generate a small local icon module containing only the ~50 paths actually used, and import from that. No visual change whatsoever. Expected saving: **~2.1 MB gzipped, site-wide.** This is the highest-value change available on the entire site and it is invisible to the user.

---

## 2. 🔴 Duplicated section — two "WordbitX is trusted to…" blocks

I built both of these, on your instruction, and they now sit on the same page. Looking at them together, they are the same section twice.

| | Trust Orbit (`#solutions` tail) | Global Trust Sphere (`#global-trust`) |
|---|---|---|
| Heading | "WordbitX is **trusted to deliver** work you can inspect" | "WordbitX is **trusted to deliver** excellence worldwide" |
| Background | dark navy | dark navy |
| Graphic | rotating ring of nodes | rotating sphere of nodes |
| Honesty line | "We do not publish 1,000-project banners we cannot show" | "We do not publish numbers we cannot show" |
| Markets | "Markets — 6" stat | 6 floating market chips |
| Proof line | "our live product and labelled demos" | "our live product and labelled demos" |
| Rendered weight | 2.5 KB | **40.4 KB** |

Both headings begin with the same four words. Both carry the same honesty disclaimer. Both display the same six markets. A visitor scrolling past will register it as the page repeating itself, and the sphere section alone is **the second-heaviest block of markup on the page** (40 KB — more than the entire services grid).

**Recommendation:** keep **one**. My preference is to keep the **orbit** (it carries 16 working links, so it earns its space) and either delete the sphere or strip it down to a thin market strip with no heading and no rotating mesh. If you prefer the sphere visually, then the orbit's heading and honesty paragraph should be cut and the ring folded into the services section as pure navigation.

---

## 3. 🟠 Things said three times

| Idea | Appears in |
|---|---|
| **The 6 markets** | hero paragraph · `#markets` section (6 cards) · trust sphere (6 chips) · orbit stat "Markets 6" · hero nav "Global markets" link → **5 places** |
| **"You own the code"** | hero paragraph · assurance strip ("You own everything") · Why WordbitX ("full ownership") · FAQ ("Do we own the code") → **4 places**, phrase "own the code" appears **5×** |
| **Written scope before code** | assurance strip · FAQ "How do projects usually start" · process section → **3 places**, phrase appears **4×** |
| **Demos you can inspect** | demos section · orbit centre · trust sphere · FAQ "Do you publish testimonials" → **4 places** |
| **Post-launch support** | pillars ("Ongoing Support") · Why WordbitX ("Long-term support") · process step 07 · FAQ → **4 places** |

Repetition is not automatically bad — but each of these costs a block of vertical scroll, and together they are why the page reads for 16 minutes.

---

## 4. 🟠 Structurally redundant sections

### 4a. "Capability Deep Dive" (3 large image blocks, 32 KB)
Three big alternating image+text blocks for Shopify, custom e-commerce, and SEO. But:
- Shopify already has a card in the services grid above
- Custom e-commerce already has a card in the services grid above
- SEO already has a card in the services grid above, **and** a pillar card ("SEO & Digital Marketing") in the trust section

This is the fourth time the same three services are pitched. It is 32 KB of markup and 3 of the page's heaviest photographs for content that is on `/services` anyway.

### 4b. "Why WordbitX" (6 cards) vs. the Assurance Strip (4 cards) vs. the Pillars (4 cards)
Three separate "reasons to trust us" card grids, **14 cards total**, in the first two-thirds of the page. Content overlap:

- Pillars: Custom-built · SEO · Scalable · Ongoing support
- Why WordbitX: Custom development · Business-focused · Modern stack · Scalable architecture · Clear communication · Long-term support
- Assurance: You own everything · Same-day reply · Written scope · Pakistan base

"Custom", "scalable" and "support" appear in two of the three lists. These 14 cards could be 6.

### 4c. Hero inline nav — 15 text links
```
Custom software · Web development · Shopify stores · E-commerce websites · Mobile apps ·
SEO services · Digital marketing · AI solutions · Business software · Industries ·
Global markets · Portfolio · Topics · Pricing · Process
```
This sits directly under the hero CTAs in small grey text. Every one of these destinations is already in the header mega-menu, and 8 of them are in the services grid 400 px further down. It reads as an SEO keyword strip rather than navigation, which is exactly the pattern Google's helpful-content guidance discourages. It is also a large part of why the page has 215 links.

### 4d. 61 service links, 21 unique
`/services/web-development` is linked **8 times from this one page**. `/services/ecommerce-shopify` and `/services/ecommerce-development` **7 times each**. Beyond the second or third link to the same URL, additional links pass no extra signal — they only dilute the anchor-text clarity of the ones that matter.

---

## 5. 🟡 Asset and loading problems

### 5a. A 129 KB PNG preloaded on every page
```html
<link rel="preload" href="/brand/wordbitx-mark.png" as="image"/>
```
`wordbitx-mark.png` is **529 × 310 px and 129 KB** — a PNG where an SVG belongs. It is preloaded at high priority (so it competes with the hero image for bandwidth) and is rendered at roughly 40 × 40 px. Converting it to SVG, or even just to a sized WebP, would drop it to **under 5 KB**.

### 5b. Four demo screenshots preloaded at `fetchpriority="high"`
```html
<link rel="preload" as="image" href="/api/demo-shot/properties-pak" fetchPriority="high"/>
<link rel="preload" as="image" href="/api/demo-shot/motor"          fetchPriority="high"/>
<link rel="preload" as="image" href="/api/demo-shot/healthcare"     fetchPriority="high"/>
<link rel="preload" as="image" href="/api/demo-shot/education"      fetchPriority="high"/>
```
This was deliberate — you asked for the demos to appear instantly. It works. But these four images sit **three screens below the fold** and are fighting the hero photo (the actual LCP element) for the first bytes of the connection. Reducing this to **one** high-priority preload (Properties Pak) and letting the other three load at normal priority would protect LCP while keeping the perceived instant-load effect.

### 5c. 3.86 MB of source photography on one page
21 real photographs, several over 200 KB at source (`huddle.jpg` 262 KB, `walkthrough.jpg` 255 KB, `real-estate-portals.jpg` 233 KB). Next/Image resizes and converts these, so the transferred cost is much lower — but it is still 21 distinct photographs competing for attention on a single page, and each one is a separate network request.

### 5d. 532 KB of inline RSC payload
More than half the HTML document is the serialised React tree that Next.js inlines so the client can hydrate. This is normal Next.js behaviour and not a bug — but it scales directly with how much is on the page. Removing sections shrinks this automatically, roughly 1:1.

---

## 6. ✅ What is genuinely good and should not be touched

- **The honesty positioning.** "We do not publish numbers we cannot show", the labelled demos, the refusal to invent testimonials or client logos — this is a real differentiator against every competitor in this market, and it is consistent across the page.
- **Heading hierarchy** — exactly one `<h1>`, clean `h2`/`h3` nesting, no skipped levels.
- **Three valid JSON-LD blocks** — FAQPage, Organization + ProfessionalService, WebSite. Correctly formed.
- **35 of 43 images lazy-loaded**, responsive `sizes` on every one.
- **The demos section.** Live, openable, real. It is the strongest proof asset on the site.
- **The FAQ.** Nine questions, direct answers, no padding, correctly schema'd.
- **`defer-paint`** on the trust section and the counter-rotation maths on the orbit — the animation work is careful.

---

## 7. Recommended plan, in priority order

| # | Action | Effort | Payoff |
|---|---|---|---|
| **1** | **Fix the `simple-icons` namespace import** — local module with only the ~50 used icons | 1–2 hrs | **−2.1 MB gzipped, site-wide.** Nothing else comes close |
| **2** | **Delete or demote one of the two trust sections** | 30 min | −40 KB markup, removes visible repetition |
| **3** | Convert `wordbitx-mark.png` → SVG, drop the global preload | 30 min | −125 KB on every page |
| **4** | Cut `fetchpriority="high"` from 4 demo preloads to 1 | 10 min | Measurable LCP improvement |
| **5** | Remove the 15-link hero nav strip | 10 min | −15 links, cleaner hero, removes a keyword-stuffing signal |
| **6** | Merge Pillars + Why WordbitX into one 6-card grid | 1 hr | −1 section, −5 KB, sharper message |
| **7** | Cut "Capability Deep Dive" from 3 blocks to 1, or move to `/services` | 45 min | −32 KB, −3 heavy photos |

**Items 1–5 together: about 2.5 hours of work, roughly 2.3 MB saved, no content lost.**

Items 6–7 are editorial judgement — they remove content, so they are your call, not mine.

### What the page would look like after

**17 sections → 13.** 215 links → ~180. ~3,629 words → ~3,100. And critically, the first-visit download drops from ~2.3 MB of JavaScript to ~200 KB.

---

## 8. One thing I want to flag about my own work

Requests 19 and 20 both landed in the same region of the page, three sections apart, and both are dark, both rotate, and both open with "WordbitX is trusted to deliver…". I built them in separate turns and did not step back to look at them together. That is the duplication in §2, and it is mine. I would recommend keeping the orbit and cutting the sphere — but I am not going to delete a section you asked for two turns ago without you saying so.
