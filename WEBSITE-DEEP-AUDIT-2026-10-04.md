# WordbitX — Full Website Deep Audit

**Date:** 4 October 2026
**Audited:** `wordbitxX/wordbitx` @ `e1d3408`, production build (`next build` + `next start`), plus the live site at `https://www.wordbitxtech.com` and all seven showcase sites.
**Method:** production HTML measured byte-for-byte (not dev mode), bundle analysis, content-overlap analysis across 160+ generated pages, image forensics on all 93 committed photographs, API route review, live page fetches.

---

## TL;DR (Roman Urdu)

Site ki **engineering acchi hai** — build clean hai, 343 pages static hain, JS ab sirf 1.6 MB hai (pehla 2.1 MB wala icon bug fix ho chuka hai), SEO plumbing professional level ki hai. Ye upper-tier Pakistani agency site hai.

Lekin **teen cheezein hain jo client ka trust tod sakti hain**, aur ye design se zyada important hain:

1. ~~**Team ki photos AI-generated hain**~~ — **HAL HO GAYA (§1.1).** Masla photos ka nahi tha, un ke neeche likhi copy ka tha. Wo copy hat chuki hai, har image ka alt "Illustration of…" kehta hai, aur site pe koi naam wala fake team member hai hi nahi. Ranking pe iska koi asar nahi. **Asli masla ab sirf invented testimonials hain (§1.2).**
2. **13 testimonials hardcoded hain** `src/lib/reviews.ts` mein — aur usi page par likha hai "No invented testimonials". Ye khud ka contradiction hai.
3. **Koi bhi banda API se review post kar ke seedha homepage par chapwa sakta hai** — no moderation, no rate limit. Competitor 2 minute mein homepage kharab kar sakta hai.

Jo aap ne demos ki images ke baare mein poocha — **asli masla demo sites nahi hain, wo bohat acchi hain** (Maison Noor aur Veranne genuinely premium lagti hain). Masla ye hai ke unke **thumbnails ek free screenshot service se 900×560 par banaye jaa rahe hain**, jo page load hone se pehle hi capture kar leti hai. Detail Section 4 mein hai — aur meri recommendation ye hai ke fake AI mockups **na** banayein; asli screenshots theek se capture karein aur unhe premium frame mein dikhayein. Wo zyada premium bhi lagega aur sach bhi rahega.

---

## 0. Scorecard

| Area | Grade | One-line verdict |
|---|:--:|---|
| Engineering / build quality | **A−** | Clean, fast, thoughtfully commented. Genuinely above average. |
| Performance | **B+** | Big win already landed. Home page HTML is now the bottleneck. |
| SEO architecture | **A−** | Sitemaps, canonicals, robots, schema all correct. |
| SEO content depth | **C+** | 120 topic pages @ 448 words with 36% overlap = thin-content risk. |
| Visual design craft | **B−** | Consistent but monotonous. No webfont. Soft images. |
| **Trust & credibility** | **D → C** | **Invented testimonials under "we don't invent" copy. (AI team photos: see §1.1, resolved — labelled illustrations, no fake named people.)** |
| Security / abuse resistance | **C−** | Public review endpoint publishes instantly. No rate limiting anywhere. |
| Legal / compliance (UK/EU) | **D+** | GA4 + Meta Pixel + AdSense fire before any consent. No cookie banner. |
| Code hygiene | **B** | 5 lint errors, ~36 dead CSS classes, 1.2 MB duplicate assets. |

**Overall: B−.** The build is better than the business case it is making. Fixing Section 1 is worth more than every other item on this list combined.

---

## 1. 🔴 TRUST — the three things that can cost you a deal

This is the section to read if you read nothing else. None of it is a design opinion; all of it is checkable by any prospect in under five minutes.

### 1.1 ~~The team photographs are AI-generated, and the copy says they are real people~~ — RESOLVED, re-verified 2026-10-04

**This finding no longer stands. It was half wrong when written and the other half has since been fixed. Do not re-raise it.**

What made it a P0 was never the images themselves — it was the caption under them, "the people in these photos scope it, build it and stay on it", which presented generated figures as named, real staff. That is a claim. The images alone are not.

Re-verified against the running site:

- The offending copy is gone. `grep` for "people in these photos" across `src/` returns nothing.
- Every generated team image is labelled as an illustration in its own alt text — "Illustration of a product team reviewing work together", "Illustration of a software studio working session", and so on across all five on the home page and both on `/about`.
- **There are no named team members with generated faces anywhere on the site.** `src/lib/team.ts` exports exactly three things: `founder`, `founderMessage` and `teamValues`. There is no team grid, no `teamMembers` array, no invented colleagues.
- The only portrait of an identifiable person on the site is `awais-malick.jpg`, which is a genuine photograph of the founder.

What remains is decorative scene illustration, labelled as such, doing the same job stock photography does on most agency sites. It carries no ranking penalty — Google does not demote generated imagery — and it makes no claim a visitor could catch us out on.

One line to hold, recorded in `src/lib/types.ts` and `src/lib/topic-types.ts`: the `author.photo` field is for real photographs only. A generated face attached to a named author, particularly on the FBR pages that carry statutory claims, would re-create the exact problem this finding was about.

### 1.2 Thirteen testimonials are hardcoded fiction

`src/lib/reviews.ts:30` — `siteReviews` is a literal array of 13 reviews with names ("Dr. Nadia F.", "Sarah B."), cities, star ratings and relative dates. The file's own comment reads: *"written in the same tone as a Google Business review."* The dates are frozen strings — `"3 weeks ago"` will still say "3 weeks ago" in 2028.

These render on the home page under the heading **"What clients write about WordbitX"**, roughly 400px below the strip that says **"No invented testimonials"**.

There is a component in the repo called `src/components/testimonial-guard.tsx` whose entire docstring is *"We do not invent testimonials. This panel is intentionally transparent until an authorised client quote is supplied."* **It is imported nowhere.** At some point it was swapped out for the fabricated slider.

One mitigating fact: there is **no `Review`/`aggregateRating` JSON-LD** emitted, so you are not currently exposed to a Google structured-data manual action. Do not add it.

**Fix:** delete the 13 seeded reviews, re-mount `TestimonialGuard`, and let the review slider show only real submitted reviews (once 1.3 is fixed). Three real reviews with full names beat thirteen fake ones, and you can get three real ones this week by emailing past clients.

### 1.3 Anyone on the internet can publish text on your home page

`src/app/api/reviews/route.ts` `POST`:

- validation is length/format only;
- the single abuse control is a honeypot field;
- there is **no moderation queue, no rate limit, no captcha, no email verification**;
- the success response is literally `"Thank you — your review is now on the homepage."`

A competitor, a bot, or a bored teenager can POST defamatory or obscene text and it appears under "What clients write about WordbitX". Deleting it requires `/admin/reviews` and the `REVIEW_ADMIN_SECRET` — and if that env var is unset in production, `getReviewAdminSecret()` returns `null`, which means **the delete endpoint refuses every request** and you cannot remove it through the UI at all.

Secondary bug: submitted reviews go into `addMemoryReview()` (process memory). On Vercel's serverless runtime each instance has its own memory, so a review appears or disappears depending on which lambda answers. The DB write is best-effort and silently swallowed on failure.

**Fix (today):** flip the endpoint to `status: "pending"` by default, render only approved reviews, and put a per-IP rate limit in front of it. Same rate limit belongs on `/api/contact` and `/api/newsletter` — right now both are free email-bombing endpoints that cost you money per send.

---

## 2. 🟠 PREMIUM FEEL — why it reads "good template" instead of "top-tier studio"

You asked specifically about premium perception. Here is what is actually costing you, ranked by impact per hour of work.

### 2.1 The brand has no typeface

`src/app/globals.css:40` declares:

```css
--font-sans: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

There is **no `next/font` call, no `@font-face`, no Google Fonts link anywhere in the repo.** Inter is never loaded. So:

- macOS visitors see **SF Pro** (because `-apple-system` resolves before the Inter fallback fails through);
- Windows visitors see **Segoe UI**;
- Android visitors see **Roboto/Noto**.

Your brand literally looks like a different company on every operating system, and none of those three is the typeface the layout was spaced for. This is the single cheapest premium upgrade available: one `next/font/local` or `next/font/google` call with `display: "swap"` and a `variable`, ~20 lines, zero layout risk, and the whole site immediately gains typographic authority. Inter is fine; Geist, General Sans or Satoshi would be more distinctive.

### 2.2 Every photograph is soft on a modern screen

All 68 service photos are **1280 × 720**. All team photos are **1152 × 864**. Meanwhile `next.config.ts:9` declares `deviceSizes` up to **1920**.

Worked example — the home hero: the reel slot is `46vw`. On a 1920px laptop at DPR 2 that is a **1766 physical pixel** slot being filled from a **1152 pixel** source. Next.js will not upscale, so the browser does — and the hero, the first thing every prospect sees, renders visibly soft. Same story on `/about`, where team photos go nearly full-width.

A premium site is *sharp*. Soft is the fastest subconscious signal of "cheap". Regenerate or re-export the hero/about images at ≥2400px on the long edge; the card-grid images at 1280 are fine.

### 2.3 The AI service photography has garbled text in it

The art direction on `public/brand/services/*` is actually good — cinematic, dark, warm, consistent. But the renders contain fake-text artifacts. `web-development.jpg` shows a monitor whose nav reads "Dusesed dqs ks tecvors"; `real-estate.jpg` shows a tablet headed "PAYMENT SCHEDULE — THE GAEDS" over a garbled table. At 380px card width nobody notices. On a service page hero at 1200px, a detail-oriented buyer does.

Cheap fix: crop these images so the screen content is out of frame or heavily blurred, rather than replacing 68 files.

### 2.4 The home page hero has fifteen text links under the CTAs

`src/app/page.tsx:226–271` — directly under "Start Your Project" / "Explore Our Services" there is a `<nav>` with fifteen grey inline links: Custom software, Web development, Shopify stores, E-commerce websites, Mobile apps, SEO services, Digital marketing, AI solutions, Business software, Industries, Global markets, Portfolio, Topics, Pricing, Process.

This is an SEO internal-linking tactic that the visitor can see. It reads as link-stuffing, it competes with your two real CTAs, and no premium studio's hero looks like this. The links are already in the mega-menu and the footer; Google has them. Delete the block from the hero. You will lose nothing in crawl terms and gain a hero that looks confident instead of desperate.

While you are there: the hero stat row reads **Services 60 / Delivery Agile / Markets Worldwide**. "Agile" and "Worldwide" are not statistics. A three-up stat row where two cells contain adjectives looks worse than no stat row.

### 2.5 Twelve sections, all built from the same recipe

The home page is **3,969 words, 12 content sections, 237 links (115 unique), 76 `<h3>`s, 54 images, 390 inline SVGs**. Nearly every section is: *eyebrow pill → 2.75rem heading → grey paragraph → grid of white bordered rounded-2xl cards with a green icon chip.*

Twelve times. There is no rhythm change — no full-bleed moment, no big quiet statement, no single hero image that occupies a whole screen. Premium sites breathe: they alternate dense and empty. Yours is uniformly dense from pixel 0 to the footer.

Concrete suggestion: cut the home page to **7 sections** — Hero, Assurance strip, Products (the live work), Services, Process, Reviews, CTA. Move Industries, Global markets, Cities, Technologies, Insights and the FAQ to their own pages, each linked once. The page gets ~45% shorter, the HTML drops ~400 KB, and every remaining section gets room to land.

### 2.6 Google AdSense is loaded on a B2B agency site

`src/app/layout.tsx:81` unconditionally injects the AdSense script sitewide, with `pub-6979050813391613` hardcoded in `src/lib/site.ts`, plus an `ads.txt` and a `google-adsense-account` meta tag.

There are no ad slots in the markup, so nothing displays *today* — but if Auto Ads is ever switched on in the AdSense dashboard, Google will inject third-party ads (possibly your competitors') into a page where you are asking for a $15,000 engagement. Even without that, the script is a third-party request on every page load.

A software house that monetises its own corporate site with display ads is signalling that lead-gen is not working. Remove the script from the corporate site. If you want AdSense revenue, put it on the blog subdomain, not on `/services/*`.

---

## 3. 🟡 PERFORMANCE — one big win landed, one big problem left

**Credit where due:** the 2.1 MB `simple-icons` namespace-import bug from the previous audit is **fixed**. `src/lib/brand-icon-data.ts` now inlines only the 58 glyphs actually used, generated by `scripts/gen-brand-icons.mjs`. Total client JS is now **1.6 MB raw across all chunks** (largest single chunk 246 KB). That was the right fix and it was executed well.

### Current measurements (production build)

| Metric | Value | Assessment |
|---|---:|---|
| Home page HTML, raw | **1,070 KB** | 🔴 too big |
| Home page HTML, gzipped | 161 KB | 🟠 high but survivable |
| …of which inline RSC payload | **581 KB (53%)** | 🔴 the real problem |
| `/services` HTML | 671 KB | 🔴 |
| `/topics`, `/technologies`, `/portfolio` | 334 / 289 / 275 KB | 🟠 |
| A legal page (header+footer floor) | **104–111 KB** | 🟠 chrome is heavy |
| Total JS chunks | 1.6 MB raw | 🟢 good |
| CSS | 112 KB | 🟢 fine |
| `public/` total | 19 MB (12 MB service photos) | 🟠 |
| Static pages generated | 343 | 🟢 |
| Build time | ~30 s | 🟢 |

### 3.1 The 581 KB inline RSC payload

Over half the home page's bytes are the serialised React Server Component tree that Next inlines into `self.__next_f.push(...)` so the client can hydrate. It is roughly proportional to how much markup the page renders — so it is a *consequence* of Section 2.5, not a separate bug. Cutting the home page from 12 sections to 7 is also the fix for this.

### 3.2 The header ships 60 service links on every page

The mega-menu renders all 60 services into the DOM of every single page. That is most of the 104 KB floor you pay before any content. Options: render the panel's contents lazily on first open, or cut the mega-menu to ~16 grouped links with "All 60 services →".

### 3.3 Duplicate committed assets

Five files in `public/brand/team/` are byte-identical pairs:

```
about-process.jpg       == about-team-seated.jpg
who-we-are-navy.jpg     == who-we-are-studio.jpg
hero-office.jpg         == hero-team.jpg
studio-awais.jpg        == studio.jpg
pair-awais.jpg          == pair-review.jpg
```

~1.2 MB of pure duplication in git. Also note `who-we-are-navy.jpg` and `who-we-are-studio.jpg` are the same file under two names implying two different treatments — somewhere a design intent got lost.

### 3.4 59 pages still hotlink Pexels

`src/lib/media.ts` serves photography from `images.pexels.com` through `next/image`. **1,042 Pexels URLs across 59 built pages** (all industry, topic and several service pages). The home page was migrated to local `/brand/*` files; the rest were not. That is a third-party dependency on the critical render path of most of your long-tail SEO pages, and it means those pages look like stock-photo pages while the home page looks bespoke.

---

## 4. 📸 THE DEMO SHOWCASE — your actual question, answered

> *"hero section main or neche — See our work live… jo screenshots hain wo professional nahi hain. Kya aap us type ki images bana kar laga sakte ho, rich tone wali, jo client ko premium feel de?"*

### 4.1 First: your demo sites are not the problem — they are excellent

I opened all of them. `luxury.wordbitxtech.com` (**Maison Noor**) and `ecom.wordbitxtech.com` (**Veranne**) are genuinely premium pieces of work — editorial typography, real art direction, 8-currency switcher, 40-dish menu, full cart. These are better than most Lahore agencies' actual client work. You are **underselling** them.

### 4.2 The problem is the capture pipeline, not the sites

`scripts/fetch-demo-shots.mjs` and `src/app/api/demo-shot/[id]/route.ts` both request:

```
https://image.thum.io/get/width/900/crop/560/noanimate/<url>
```

with a WordPress mShots fallback. That pipeline guarantees a bad thumbnail, for five independent reasons:

1. **900 × 560 is not retina.** The card renders at ~420 CSS px → 840 physical px on a 2× screen, and the hero slot is far bigger. You are already at or past 1:1, so it is soft everywhere and badly soft in the hero.
2. **`crop/560` keeps only the top 560px** of a 900px-wide render — i.e. a sliver of the hero. Veranne's hero image is a 1200 × 1800 *portrait* photograph; in a 900 × 560 top-crop you get a meaningless fragment of it.
3. **The services screenshot before the page finishes.** These are Next.js sites with lazy-loaded Pexels imagery. thum.io does not wait for network-idle, so you routinely capture the *pre-image* state — exactly the washed-out, half-empty look you are describing.
4. **No DPR, no font-ready wait, no scroll-trigger.** Any reveal-on-scroll animation is captured mid-animation or un-triggered.
5. **It fails silently.** Running `npm run demo:shots` right now: **0 of 7 succeeded.** The site then falls through to `/api/demo-shot/[id]`, which retries the same two providers per request and, failing that, serves a generated SVG placeholder. So on a bad day your "See our work live" section shows seven dark rectangles with text in them. The SVG fallback is well-designed, but it is a fallback, and the pipeline reaches for it far too often.

The cache headers in `next.config.ts:36` even acknowledge the fragility: `/demos/*` is deliberately *not* immutable because the shots are regenerated on every deploy.

### 4.3 So — can I generate the images? Yes. Should you use them that way? No.

I can produce rich, cinematic, premium imagery. But think about what you would be shipping. The section heading is:

> **"See our work live — software we built and still run"**
> *"These are not mockups."*

If the picture above that sentence is an AI render of a UI that does not exist, then the sentence is false, and you have added a fourth item to Section 1 of this audit — on a site whose entire differentiator is "we don't invent things". A prospect clicks "View live demo", lands on the real site, and sees it does not match the thumbnail. That is worse than a soft screenshot.

**And you don't need to fake it, because the real sites look great.** The honest version is also the better-looking version.

### 4.4 What I recommend instead — "real pixels, premium staging"

Three layers. The first two are the whole win.

**Layer 1 — Capture properly (this is 80% of the improvement).**
Replace the thum.io call with a real headless browser:

```js
// scripts/fetch-demo-shots.mjs — Playwright
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,              // → 2880 × 1800 source
});
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => window.scrollBy(0, 400));  // trigger reveals
await page.waitForTimeout(1200);
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({ path: out, type: "jpeg", quality: 88 });
```

Result: 2880 × 1800 instead of 900 × 560, fully loaded, fonts settled, animations resolved. Downscale to 1600 × 1000 and ship AVIF/WebP. This alone takes the cards from "blurry and half-empty" to "crisp and premium", because **the underlying design is already premium**. Run it in CI or locally on redesign, commit the output, and keep the existing SVG placeholder as the never-blank fallback.

**Layer 2 — Stage them properly.**
Right now each shot sits flat inside a small CSS browser chrome at `aspect-[16/10]`, `object-cover object-top`. Premium presentation instead:

- a proper MacBook or floating-browser frame with real bezel geometry and a soft contact shadow;
- a gentle perspective tilt (`rotateY(-6deg) rotateX(2deg)`) with a subtle parallax on hover;
- the card sitting on a soft studio gradient stage with a brand-green bloom behind it, rather than flat `bg-navy-950`;
- the featured Properties Pak card as a true full-bleed hero with the laptop breaking the container edge.

**Layer 3 — Ambient backdrop art (here is where I generate images, honestly).**
I can generate 7 abstract, cinematic *stage backdrops* — one tuned to each product's palette (Maison Noor ember/charcoal, Veranne bone/travertine, Medicare clean teal, Properties Pak emerald dusk, etc.). These sit *behind* the device frame as pure decoration. They are obviously not screenshots, they claim nothing, and they give exactly the rich, expensive, art-directed feel you are after — while the real product pixels stay in the frame.

That combination is what agencies like Work & Co and Basic/Dept actually do. It is more premium than a fake mockup, and it survives scrutiny.

### 4.5 One more thing: the section needs a number, not an adjective

"See our work live — software we built and still run" is a strong line. Then the proof is seven thumbnails. Add the quantified facts you already have written down in `src/lib/hero-reel.ts` but don't show on the cards: *"19 property types across 8 cities" · "37 modules, 5 role portals, JazzCash & Easypaisa" · "21 brands, English and اردو" · "9 departments, 8 currencies, full checkout."* Those four lines do more for premium perception than any image treatment, because they prove depth.

---

## 5. 🟡 SEO & CONTENT

### What is genuinely good

- Sitemap index split into 12 themed sitemaps, `/sitemap.xml` kept as a debug dump and deliberately not advertised — this is a professional setup.
- Canonicals are per-page and www-consistent. `robots.ts` correctly disallows `/api/`, `/admin`, `/societies/`, `/lab`.
- 31 permanent redirects covering every plausible legacy URL. Good hygiene.
- `/societies/*` is `noindex, follow` — correct call for indicative plot-price tables.
- No fake `aggregateRating` schema. Resisting that temptation was the right call.
- `/api/seo-status` as a self-documenting endpoint is a genuinely clever touch.

### 5.1 Thin and near-duplicate content at scale

Measured on `<main>` content only (chrome stripped), word-set Jaccard overlap:

| Cluster | Pages | Avg words | Avg overlap | Worst pair |
|---|---:|---:|---:|---|
| **Topics** | 120 | **448** | 36.3% | **75.6%** — `clinic-management-software` ~ `dental-clinic-software` |
| Portfolio | 25 | 648 | 40.5% | 67.7% — `ai-document-processing-assistant` ~ `legal-document-review-workflow` |
| Blog | 33 | 715 | 38.3% | 54.3% |
| Services | 60 | 937 | 32.6% | 58.7% — `ebay-store-setup` ~ `etsy-store-setup` |
| Global markets | 6 | 485 | 46.4% | 58.9% — `canada` ~ `usa` |
| Industries | 13 | 592 | 35.8% | 52.9% |

The **topics cluster is the exposure**: 120 pages averaging 448 words with a third of their vocabulary shared. Two of them are 76% identical. Under Google's helpful-content system this is the textbook profile of scaled low-value content, and the risk is not that those 120 pages fail to rank — it is that they drag down the 60 service pages that *should*.

Also: blog "guides" averaging 715 words will not outrank anyone for commercial-intent queries. The competitors ranking for "software development cost Pakistan" are writing 2,500+ words.

**Recommendation:** consolidate the topics cluster to ~40 pages of 900+ words each, 301 the rest into their best sibling. Fewer, better, and the internal link equity concentrates. Merge the obvious twins first (`clinic-` / `dental-clinic-`, `ebay-` / `etsy-store-setup`, `usa` / `canada` need real differentiation).

### 5.2 Internal link density on the home page

237 `<a>` elements, 115 unique destinations. Google's practical comfort zone is ~150 per page. Section 2.4 and 2.5 both reduce this as a side effect.

### 5.3 `/lab/service-nav` is built into production

313 KB, `noindex, nofollow`, robots-disallowed and in no sitemap — so it is handled correctly. But its own docstring says *"Delete this route once the layout is chosen."* The layout was chosen. Delete it.

---

## 6. 🟡 LEGAL & COMPLIANCE

You sell to the **UK, EU-adjacent and US** markets. That makes the following non-optional rather than nice-to-have.

### 6.1 No cookie consent, three trackers firing on first byte

`src/app/layout.tsx` loads, unconditionally and before any user action:

- Google Analytics 4 (`G-TCWMWER9PF`)
- Meta Pixel (`1283273721536116`) — which fires `fbq('track','PageView')` immediately
- Google AdSense

There is **no consent banner, no consent mode, no opt-out** anywhere in the codebase (I grepped: zero matches for any consent component). Meanwhile `/cookie-policy` is published and the privacy policy states you process data "on the basis of your consent".

Under UK PECR and GDPR, analytics and advertising cookies require prior opt-in consent. Meta Pixel in particular is an advertising cookie with no legitimate-interest route. You are describing a consent mechanism in your policy that your site does not implement — which is worse than not mentioning it.

**Fix:** a lightweight consent gate (Google Consent Mode v2 `default: denied` + a banner, ~100 lines, no third-party CMP needed) before GA and Pixel initialise. Or geo-gate it to EU/UK visitors if you want US traffic untouched.

### 6.2 Forms collect personal data with no privacy notice

Neither `src/components/contact-form.tsx` nor `src/components/newsletter-form.tsx` has a privacy-policy link or a consent checkbox. The contact form collects name, email, phone, company and a free-text project description — that is personal data and, from a UK lead, regulated. Add one line under the submit button: *"By sending this you agree to our Privacy Policy."*

### 6.3 Third-party claims to verify

`src/lib/site.ts` lists a Clutch profile asserting "Founded 2021 · 10–49 employees · Min project size $1,000+ · Under $25/hr". Good that it carries no invented rating. Just confirm those four facts still match the live Clutch profile — a stale directory claim is the kind of thing a careful buyer checks.

Also worth a 10-minute pass: all seven social links in `siteConfig.socials` are printed in the footer of all 343 pages. If any of those profiles is empty or 404s, that is 343 pages pointing at a dead end. An agency with a linked-but-empty X account looks worse than one with no X link.

---

## 7. 🟢 CODE QUALITY

### 7.1 🔴 ~36 Tailwind classes generate no CSS at all

`src/app/globals.css` defines `--color-ink-900 / 700 / 500 / 300` and `--color-brand-50…700`. But the codebase uses, across 36 call sites:

- `text-ink-400` (5×) — `demos-section.tsx:102,131`, `cards.tsx:184`, `about/page.tsx:241`, `societies/page.tsx:122`
- `text-ink-600` (16×) — all of `products/`, `software-house/`, `review-slider.tsx`
- `text-ink-800` (3×) — `review-slider.tsx`
- `hover:text-brand-800` (12×) — `topics/`, `societies/`, `industries/`, `products/`, `about/`

I verified against the built stylesheet: **zero occurrences of `ink-400`, `ink-600`, `ink-800` or `brand-800`.** Tailwind v4 silently drops unknown tokens.

Visible consequences right now:

- the **category label and disclaimer on every showcase card** (`demos-section.tsx`) are meant to be muted grey; they inherit near-black instead — which is part of why the demo cards look heavy and unrefined;
- all `/products` and `/software-house` body copy renders at the wrong weight;
- **twelve links have a hover state that does nothing** — the page feels dead under the cursor, which is exactly the kind of micro-detail that separates premium from template.

**Fix — four lines in `globals.css`:**

```css
--color-ink-800: #1b2738;
--color-ink-600: #44536a;
--color-ink-400: #76859a;
--color-brand-800: #0a4e14;
```

Highest value-per-keystroke item in this entire document.

### 7.2 Five ESLint errors

```
react-hooks/set-state-in-effect  ×5
  src/components/header.tsx:52
  src/components/review-admin.tsx:21
  src/components/review-slider.tsx:93
  (+2 more)
```

`npm run lint` currently fails. `npm run typecheck` passes clean. If CI does not run lint, it should — these are cascading-render bugs, and `header.tsx:52` runs on every route change on every page.

### 7.3 Dead code

- `src/components/testimonial-guard.tsx` — imported nowhere (see 1.2).
- `src/app/lab/service-nav/` — marked for deletion in its own docstring.
- `src/components/demo-laptop.tsx` — in use on `/industries/[slug]` (one per matching demo). Not dead, but on mobile its iframe scales to `0.285`, rendering a 1600px page inside 456px. Effectively unreadable, and it still mounts a full third-party page. Swap to a static image below `sm`.

### 7.4 Documentation — a real strength

`BRAND.md`, `HOME-PAGE-STRUCTURE.md`, `SEO-TOPIC-MAP.md`, plus the "why this exists" docstrings on `demo-shots.ts`, `industry-tile-media.ts`, `hero-reel.ts` and `brand-icon-data.ts` are better than most commercial codebases. Whoever wrote them explained *decisions*, not just behaviour. Keep doing this — and note that it is itself a sellable asset: "this is how we document, and you get it with the code."

---

## 8. PRIORITISED ACTION PLAN

### P0 — this week (credibility + abuse)

| # | Action | Effort |
|---|---|---|
| ~~1~~ | ~~Replace or relabel AI team photos~~ — **done; see §1.1** | — |
| 2 | Delete the 13 seeded reviews; re-mount `TestimonialGuard` | 1 h |
| 3 | Make `/api/reviews` POST `pending` by default; render approved only | 2 h |
| 4 | Rate-limit `/api/reviews`, `/api/contact`, `/api/newsletter` | 2 h |
| 5 | Add the 4 missing colour tokens | 5 min |
| 6 | Verify `REVIEW_ADMIN_SECRET` is set in production | 5 min |

### P1 — next two weeks (premium feel + compliance)

| # | Action | Effort |
|---|---|---|
| 7 | Load a real webfont via `next/font` | 30 min |
| 8 | Playwright screenshot pipeline @ 2× (Section 4.4 Layer 1) | 3 h |
| 9 | Premium device framing + stage for showcase cards (Layer 2) | 4 h |
| 10 | Delete the 15-link nav from the hero; fix the stat row | 20 min |
| 11 | Cookie consent gate before GA/Pixel; privacy line on forms | 4 h |
| 12 | Remove AdSense from the corporate site | 10 min |
| 13 | Re-export hero/about images at ≥2400px | 2 h |
| 14 | Fix the 5 lint errors; add lint to CI | 1 h |

### P2 — this quarter (structure + SEO)

| # | Action | Effort |
|---|---|---|
| 15 | Cut the home page 12 sections → 7 | 1 day |
| 16 | Consolidate 120 topics → ~40, with 301s | 3 days |
| 17 | Lazy-render the mega-menu panel | 3 h |
| 18 | Migrate remaining 59 pages off Pexels hotlinks | 1 day |
| 19 | De-duplicate the 5 identical team images; delete `/lab` | 30 min |
| 20 | Add quantified facts to showcase cards (Section 4.5) | 1 h |
| 21 | Generated ambient stage backdrops (Section 4.4 Layer 3) | 2 h |

---

## 9. What is genuinely good — do not break these

Because an audit that is all red is a useless audit, and several things here are better than the market:

1. **The honesty architecture.** `demosDisclosure`, `kind: "demo" | "live"` as a type-level distinction, `showcaseRel()` applying `nofollow` to non-owned hosts, "we do not publish numbers we cannot show". The *framework* is excellent and unusual. Sections 1.1 and 1.2 are a failure to live up to your own framework — which means the fix is to honour what you already built, not to build something new.
2. **Properties Pak.** A real, live, owned product is the strongest proof an agency can have. It should be more prominent than it is.
3. **The demo sites themselves.** Maison Noor and Veranne are genuinely premium. Underselling them with a broken screenshot pipeline is the most fixable problem on this list.
4. **Performance discipline.** The icon fix, `content-visibility: auto` on sections, the deferred cursor/chat widgets, the SVG `<symbol>` sprite for repeated brand glyphs, `IntersectionObserver` on the iframe — this is a team that understands the cost of what it ships.
5. **Accessibility intent.** Skip link, `prefers-reduced-motion` respected properly in `hero-reel.tsx`, `aria-hidden` on inactive slides, pause-on-focus-within, keyboard escape on the mega-menu. Thought went in.
6. **The failure design.** The branded SVG placeholder in `api/demo-shot` is a lovely piece of defensive design — the worst case still looks deliberate.
7. **SEO plumbing.** Split sitemaps, correct canonicals, 31 redirects, no fake schema. Clean.

---

## 10. The one-paragraph version

WordbitX has the engineering of a good agency and the credibility posture of a lead-gen template, and the gap between those two is the whole problem. The code is careful, fast, well-documented and honestly architected — and then the home page shows AI-generated people captioned as the team, thirteen invented testimonials, and an unmoderated endpoint that lets strangers publish on it, all underneath the words "No invented testimonials". Nothing in the design system will fix that, and fixing it does not require a redesign. Spend one afternoon taking real photographs, delete the fake reviews, gate the review endpoint, add the four missing colour tokens and load an actual webfont — and the same site will read as substantially more premium by next week. Then capture your demo screenshots properly, because the products behind them are better than the thumbnails are letting anyone see.

---

## 11. Changelog — what actually changed in this pass (4 Oct 2026)

Scope agreed with the owner: **rebuild the showcase presentation + fix the team-photo copy.** Everything else in Section 8 is still open and was deliberately not touched.

### 11.1 Showcase — "real pixels, premium staging"

The decision was explicitly *not* to generate AI mockups of the products. A mockup would have made the thumbnails prettier and the section "These are not mockups" a lie. Instead the real screenshot is kept as the only source of product pixels, and everything *around* it was rebuilt.

**New component `src/components/showcase-stage.tsx`** — three layers:

| Layer | What it is | Honesty status |
|---|---|---|
| Stage | abstract blurred colour field per product (`public/demos/stage/*.jpg`), brand wash, radial vignette, film grain | decoration — no objects, no text, no UI |
| Device | browser window: traffic lights, host chip showing the real hostname, rounded bezel, contact shadow, slight tilt | chrome |
| Screen | `<DemoShot />` — the real capture, unretouched | the only product pixels |
| Glass | diagonal glare + inner darkening over the bezel | decoration |

Every element is a `<span>`, so the whole stage nests legally inside the card's `<a>`.

Supporting changes:

- `src/lib/demos.ts` — added `stage` and `proof` to all seven showcases.
- `src/lib/demo-shots.ts` — added `demoStageSrc()`; missing backdrop degrades to a CSS-gradient stage rather than breaking.
- `src/components/demo-shot.tsx` — intrinsic size corrected to 1800×1125, hover eased to `scale-[1.03]` over 900 ms.
- `src/components/demos-section.tsx` — renders `ShowcaseStage` for both the grid and the feature card; the old local `DemoPreview` is gone; `proof` renders as an "In the build:" fact block.
- `src/app/globals.css` — `.showcase-stage` / `.showcase-device` / `.showcase-grain`, with the tilt and grain removed under `prefers-reduced-motion`.
- `scripts/fetch-demo-shots.mjs` — rewritten Playwright-first (see `public/demos/README.md` for the comparison table against the old remote-service path).

**The `proof` lines deserve a note.** Each one states a fact about *what we built* — "9 departments, 8 currencies, product detail pages and a full cart and checkout" — counted by hand from the running sites. None of them quote the demo businesses' own invented numbers ("85+ consultants", "5,000+ happy clients", "4.9 rating"). Those belong to fictional clinics and salons; repeating them as our proof would reintroduce exactly the problem Section 1 is about.

**This change is presentation-only, and that was its limitation** — see §11.4, which addresses it. A better frame around a 900×560 non-retina top-crop is still a 900×560 non-retina top-crop, and where no screenshot had been committed at all the frame was simply empty. The capture pipeline is written and committed but cannot run in a sandbox with no outbound network — it has to be run once on a machine that can reach the demo hosts:

```bash
npm i -D playwright sharp && npx playwright install chromium
npm run demo:shots
git add public/demos && git commit -m "chore: capture demo screenshots at 2x"
```

Until that runs, the cards show the illustrated covers described in §11.4. After it runs, the same cards switch themselves back to the device frame with sharp retina pixels of Maison Noor and Veranne, with no code change.

### 11.2 Team photos — copy fixed, images kept

Per the agreed scope the AI images stay; the claims around them no longer assert they are photographs of real employees.

- Home description no longer says the people in the photos are the engineers; it now says *"The engineers who scope your product are the ones who build it and stay on it"* — true, and no longer anchored to the images.
- All six team-image `alt` values and the hero-reel alt now begin **"Illustration of…"**, so screen-reader users are not told a drawing is a photo.
- About-page caption → *"Lahore, Pakistan — where the work gets built."*

Section 1.1 is **not closed** by this. It is downgraded from "misleading" to "stylised, and labelled as such". It closes when real photographs are taken.

### 11.3 Evidence

`docs/audit-evidence/` holds 1440px captures taken with headless Chromium against local production builds:

| File | Shows |
|---|---|
| `showcase-before.jpg` | the old grid — seven flat rectangles, DEMO badge colliding with the placeholder's own text |
| `showcase-after.jpg` | the new staged grid — device frames, per-product stage colour, badge moved onto the stage |
| `showcase-after-featured.jpg` | the Properties Pak `feature` variant |
| `showcase-cover-grid.jpg` | the grid in cover mode after §11.4 — illustrated covers, product names set as real text, no browser chrome |
| `showcase-cover-feature.jpg` | the flagship card in cover mode, with the rewritten section description |
| `home-hero.jpg` | independently evidences three findings above: the 15-link SEO block under the CTAs (§5), the AI team photo (§1.1), the system-font fallback (§2) |

Both pass-1 captures render the SVG placeholder inside the frames, because the sandbox could not reach the demo hosts. That is the point of the pair: it isolates the staging change from the screenshot-quality change, which land independently. `showcase-cover-grid.jpg` and `showcase-cover-feature.jpg` then show the same grid after §11.4.

### 11.4 Illustrated covers — closing the empty-frame problem

Pass 1 left a hole: a beautifully staged device frame with nothing in it, because no screenshot could be captured here. Seven empty grey frames is worse than one flat image, so the fallback was rebuilt.

**What was added.** One illustrated cover per showcase in `public/demos/cover/*.jpg` (1600×900, ~125 KB each, 908 KB for all seven). Each is a photographic scene of the kind of place that product runs in — an estate-agency desk with a housing-society model, a showroom counter beside a car, a clinic reception, a boutique packing bench, a restaurant host stand, a salon station.

**What makes them safe to ship on a page that says "every card opens a real, working website".** Three things, and all three are load-bearing:

1. **Nothing legible is on any screen in the artwork.** Every device inside every cover is deliberately thrown out of focus. No visitor can come away believing they have seen this product's interface.
2. **Cover mode drops the browser chrome entirely.** Artwork inside a browser frame reads as a screenshot; artwork edge-to-edge with a title set over it reads as a book cover. So in cover mode `<ShowcaseStage />` renders no traffic lights and no URL bar, and sets the product name as real DOM text over a scrim instead. This is the single most important detail in the change.
3. **It is labelled, in three places.** Alt text begins "Illustration representing…" everywhere the cover appears — grid, feature card, hero reel, `/products`. `demosDisclosure` now states that an illustrated cover is artwork and the link goes to the live site. And the section description was rewritten from *"These are not mockups"* to *"Every card below opens a real, working website… Click through and use them"* — a claim about the products, which is true, rather than a claim about the images, which with covers in place would not be.

**Resolution order** lives in one place, `demoPreview()` in `src/lib/demo-shots.ts`: committed screenshot → illustrated cover → SVG placeholder. The component is told which mode it is in; it never guesses. The day `npm run demo:shots` is run and the captures are committed, every card switches back to the device frame automatically.

**Side effect worth noting:** the hero reel uses the same resolver. Its four product slides were being dropped at runtime because `/api/demo-shot/[id]?strict=1` 404s without a screenshot, so the hero was silently a single static image. It now rotates all five slides.

### 11.5 Home page section order — sector fit moved up

Measured on the built page at 1440×900: the home page is **21,134px, about 23.5 viewports**. "Workflows we have already modelled" — the thirteen industry tiles, which answer the single question every visitor arrives with ("do you understand *my* business?") — was landing at **screen 14.0**.

Two causes, two fixes.

**Cause 1: the block was buried under its own sibling.** Inside `#industries`, six large "Platforms we can shape to your business" cards sat between the section's H2 and the tiles — **2,042px** of them. The heading promises industries, and its description is pure sector language (plot files, instalment plans, batch and expiry, weight-based jewellery pricing, fee vouchers, offline billing); it then delivered platforms first.

→ **Sub-blocks swapped.** Sector tiles now follow the H2 directly: the gap drops from 2,042px to **299px**. Funnel order is now broad then narrow — thirteen sectors, then the platform we would actually hand you. The `border-t` divider moved with the swap so the two sub-blocks are still visually separated, and because the tiles are dark photography the section now opens with a strong visual break despite `#portfolio` above it also being light — so no tone changes were needed anywhere.

**Cause 2: social proof outranked fit.** `#reviews` sat above `#industries`.

→ **`#industries` moved above `#reviews`.** Sector fit is the higher-intent question, and the reviews in that slot are the thirteen seeded ones flagged in §1.2 — they were not earning the position.

**Net effect**

| | before | after |
|---|---|---|
| `#industries` section starts | screen 11.5 | screen 10.7 |
| "Workflows we have already modelled" | screen 14.0 | **screen 11.2** |
| Section H2 → tiles | 2,042px | **299px** |
| `#reviews` | screen 10.7 | screen 14.5 |

The thirteen industry pages and `/industries` are among the highest commercial-intent internal links on the site; they are now ~2,470px (2.7 viewports) earlier in the document.

This was followed by §11.6, which takes the same idea to its conclusion.

### 11.6 Sector rail — the answer moved to screen 1.3

Moving the section up helped, but screen 11 is still screen 11: a visitor who does not see their sector in the first few seconds has no reason to keep scrolling to find it. So the *signal* moved to the top while the *section* stayed in the funnel.

`<IndustryStrip />` (`src/components/industry-strip.tsx`) sits flush against the hero's base: one scannable line, "Built for", then all thirteen sector names as real links to their own industry pages, plus "All 13 →".

**Why it costs nothing.** The hero is already dark, so the rail is `bg-navy-950` with a hairline top rule and reads as the hero's plinth rather than as a new section. No images, no cards, no new assets — roughly one line of text, two rows at 1440px. The hero's bottom padding was reduced (`pb-16/20/24` → `pb-10/12/14`) so the rail sits close enough to belong to it.

**Measured result**

| | position |
|---|---|
| Sector rail | **screen 1.3** |
| First `/industries/*` link in the document | **9.0%** into the HTML (was ~47%) |
| "Workflows we have already modelled" section | screen 11.3 (unchanged) |

All thirteen links verified present in the server-rendered HTML and all resolving 200.

**Two implementation details worth keeping.**

1. *No scroll-snap.* The rail is a horizontal scroller on phones. With `snap-x snap-mandatory`, the browser snaps to the first chip's start on load, which overrides the scroller's left padding — the first chip rendered flush against the screen edge with its border clipped. Snapping buys nothing on a row of small pills, so it was removed rather than patched with `scroll-padding`.
2. *The mobile edge fade lives outside the scroller.* Placed inside, it scrolls away with the chips. It is a sibling of the `<ul>`, positioned against a wrapper, and is `sm:hidden` since the desktop row wraps instead of scrolling.

Marked up as `<nav aria-label="Industries we build software for">` with a real list, so it is a landmark for screen readers and a crawlable link block rather than a decorative strip.

### 11.7 Density pass — 656px of whitespace removed

Owner feedback: the disclosure box under the showcase grid was not earning its space, and the run-up to "Software for the industries we already understand" was mostly empty page. Measured at 1440px, the stretch from the last portfolio card to the first industry tile was **656px** — roughly three quarters of a screen, almost all of it white.

| Change | Saved |
|---|---|
| Removed the `demosDisclosure` box from the home showcase grid (32px gap + 132px box + 96px below) | 260px |
| Merged the two stacked heading blocks in `#industries` into one | ~300px |
| Trimmed the stacked section paddings at the `#portfolio` / `#industries` boundary (192px → 104px) | 88px |
| Tile grid `mt-10` → `mt-8` | 8px |

**Result:** portfolio card → first industry tile **656px → 339px**. `#industries` section height 3,419px → 3,101px.

**On the merged heading.** The section opened with a centred H2 and description, then immediately a second eyebrow + H3 + description, and only then showed anything: 299px of heading before 215px more heading. The two titles also said the same thing twice — "the industries we already understand" and "Workflows we have already modelled". They are now one left-aligned block whose description keeps the useful phrase ("…workflows we have already modelled, so discovery starts shorter"). Left-aligning freed the right half of the row, so the heading now carries an "All 13 industries" button, the same heading-plus-button row `#demos` and `#portfolio` already use.

**On removing the disclosure — what is and is not lost.** The long paragraph is gone from the home page only. Still in place: the `Demo` / `Live Project` badge on every card, the per-card footnote ("Live demo designed and developed by WordbitX"), and the full `demosDisclosure` text on every `/products/[slug]` page. So the labelling that matters is intact and the cover-art disclosure survives where a visitor is actually evaluating one product. If the home page ever needs it back, one line under the grid would do the job the paragraph was doing.

### 11.8 Still open

Everything in Section 8 except the above. In particular: the thirteen seeded reviews (§1.2), the unmoderated review endpoint (§1.3), the four undefined colour tokens across ~31 call sites (§7), the missing webfont (§2), the consent gate (§6), and the real team photographs (§1.1).
