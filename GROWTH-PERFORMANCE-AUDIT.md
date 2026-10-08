# WordbitX — Growth, Ranking & Performance Audit

**Date:** 3 October 2026
**Scope:** `wordbitxtech.com` (Next.js 16 / App Router, 320 prerendered routes)
**Rule carried over from `SEO-AUDIT.md`:** no invented clients, no guaranteed rankings, demos stay labelled demos.

---

## 0. What changed in this pass

| Area | Before | After |
| --- | --- | --- |
| Real estate showcase | Two demo subdomains (`property.` / `pakproperty.wordbitxtech.com`) | **One official live product: Properties Pak — `https://propertiespak.com`**, labelled *Live Project* (not a demo) everywhere |
| Demo screenshots | Browser hit a third-party screenshot service directly, rendered on demand (seconds per card, 8 cards at once) | Instant CSS frame paints with the HTML; real screenshot fades in from a **same-origin, week-cached** route, or from a committed static file |
| Industry demo embeds | `<iframe>` of a whole external site mounted on page load | Mounted only when it scrolls within 400 px of the viewport |
| Chat assistant + custom cursor | In the first JS payload of every page | Code-split, loaded on idle or first interaction |
| Long pages | Every section laid out and painted up front | `content-visibility: auto` on sections, so off-screen work is skipped |
| Brand icons | Full SVG path repeated per instance (marquee renders its list twice) | One `<symbol>` sprite per page, `<use>` references |
| Image cache | Default 60 s optimiser TTL | 1 year + explicit `Cache-Control` on `/brand` and `/demos` |
| robots.txt | Advertised both `/sitemap.xml` and `/sitemap-index.xml` | Index only (duplicate reporting removed) |
| `lastmod` | Frozen at 2026-09-16 | Bumped to 2026-10-03 (see "operational debt") |

Home page HTML: **928 KB → 848 KB** raw, **155 KB → 141 KB** gzipped, 2787 → 2779 DOM nodes, with
the main win being that **nothing on screen now waits on a third-party image service**.

---

## 1. Technical SEO — current state

### Healthy

- Canonical on every page via `alternates.canonical`; apex → `www` handled at the edge.
- One `<h1>` per page across every template checked (home, services, industries, portfolio, blog, pricing, contact, about, global, topics).
- Sitemap index split by cluster (core, services, industries, global, portfolio, blog, topics, technologies, legal) — `/societies` correctly excluded and `noindex, follow`.
- Organization + WebSite + FAQ schema present; FAQ schema only where FAQs are visible.
- AI crawlers explicitly allowed (GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot) — relevant now that LLM answers are a referral channel.
- Custom 404 is `noindex`.
- No web fonts loaded → zero font CLS, no render-blocking font CSS.

### Fix next (ordered by impact / effort)

| # | Issue | Why it matters | Fix |
| --- | --- | --- | --- |
| 1 | `siteConfig.contentUpdated` is a hand-edited constant driving every `lastmod` | A sitemap that claims 320 pages changed on the same day is ignored as a freshness signal | Derive `lastModified` per entity (blog post date, service last-edited date) instead of one global date |
| 2 | `/topics` title is 32 chars; `/contact` 40 | Leaving 25–30 chars of SERP real estate unused | Extend to 50–60 chars with the modifier that actually gets searched |
| 3 | 42 `<img>` on the home page | Even lazy, that is a lot of requests and layout work on a 3G phone | Cut home-page cards to 6 services / 4 projects / 3 posts and push the rest to hub pages |
| 4 | No `BreadcrumbList` schema | Breadcrumb rich results are easy wins on deep `/services/[slug]` and `/topics/[slug]` URLs | Emit `BreadcrumbList` from the existing `crumbs` prop on `PageHero` |
| 5 | No `Service`/`Offer` schema on service pages | Service pages are the money pages and currently only carry FAQ markup | Add `Service` with `provider: @id #organization` and `areaServed` |
| 6 | 120 topic pages vs 60 service pages | Thin-overlap risk; `isDuplicateTopic` already flags some | Audit topics with <400 words of unique body and either merge into the parent service or expand |
| 7 | Reviews are static data, not verified | Rich-result policy forbids self-serving review markup | Keep `Review`/`AggregateRating` schema **off** until reviews are collected on a third-party platform |

---

## 2. Performance audit

### Fixed in this pass

1. **Showcase screenshots no longer block the card.** `src/components/demo-shot.tsx` starts at `opacity-0` and fades in `onLoad`, over a CSS browser frame that is already in the HTML. Even if the screenshot never arrives, the card looks finished.
2. **Same-origin proxy with a 7-day cache** (`/api/demo-shot/[id]`): one fewer DNS + TLS handshake, CDN-cacheable, and a branded SVG returned instantly on failure instead of a broken image.
3. **Static screenshots, generated on every deploy.** `npm run demo:shots` bakes real screenshots into `public/demos/`; `src/lib/demo-shots.ts` prefers them automatically. This now runs inside the Vercel build via the `vercel-build` script, with `|| true` so a slow screenshot service can never fail a deploy.
4. **Above-the-fold showcase cards** are `fetchPriority="high"`, the rest are `loading="lazy" fetchPriority="low"`.
5. **External iframes are intersection-gated** (`src/components/demo-laptop.tsx`), so an industry page no longer downloads an entire third-party site the visitor may never scroll to.
6. **AI chat + custom cursor are code-split** and mounted on `requestIdleCallback` or first interaction (`src/components/deferred-widgets.tsx`). The chat intent dictionary (`chat-assistant.ts`, 637 lines) is no longer in the critical path.
7. **`content-visibility: auto`** on `<Section>` (opt out with `deferPaint={false}`) and on the big custom sections. Off-screen layout/paint is skipped.
8. **The permanent `image-sheen` sweep is no longer `infinite`** — it ran a compositor animation on every image for the whole session. Three passes, then it settles.
9. **Brand-icon sprite** (`TechIconSprite`) — the marquee renders its icon list twice; the paths are now emitted once.
10. **Caching**: `minimumCacheTTL` 1 year on the image optimiser, immutable `Cache-Control` on `/brand/*` and `/demos/*`, `optimizePackageImports` for `simple-icons`.
11. **Preconnect** to `googletagmanager.com` / `connect.facebook.net`, only when those IDs are configured.

### Still open (biggest first)

| Priority | Item | Expected gain |
| --- | --- | --- |
| ~~P1~~ | ~~Run `npm run demo:shots`~~ — now wired into `vercel-build`, runs on every deploy | Showcase is served as static files, instant, always |
| **P1** | Host the hero photo locally instead of Pexels | Hero is the LCP element; a remote original means the optimiser must fetch across the internet on a cold cache |
| **P1** | Trim the home page (see §1 #3) — it renders 9 services, 8 showcases, 42 tech chips, 13 industries, 6 markets, 6 projects, 3 posts, 9 FAQs | ~30% less HTML and DOM, better mobile TBT |
| P2 | Audit the remaining `infinite` CSS animations (`trust-orbit`, `pillar-float`, `assist-*`, `marquee-x`) | Lower idle CPU/battery; helps INP on mid-range Android |
| P2 | Serve a real `logo` raster — `OrganizationSchema` points at `/brand/wordbitx-mark.png`, which is not in `public/brand/` | Schema warning in Rich Results Test today |
| P2 | Add `priority` + explicit `sizes` audit on every above-fold `next/image` | Avoids downloading a 1920px variant on a 390px phone |
| P3 | Move the AdSense tag out of `<head>` to `afterInteractive` once verification is confirmed | It competes for bandwidth during LCP |
| P3 | Consider `next/font` with a self-hosted Inter subset | Currently system-font fallback — fastest, but the brand look varies by OS |

### How to measure (do this before and after each change)

```bash
npm run build && npx next start -p 3000
npx unlighthouse --site http://localhost:3000   # or PageSpeed Insights on the live URL
```

Track only these four numbers per release: **LCP**, **INP**, **CLS**, **total transferred bytes on `/`**.
Targets: LCP < 2.5 s on mobile 4G, INP < 200 ms, CLS < 0.1, `/` under 250 KB transferred.

---

## 3. Properties Pak — the new ranking asset

Properties Pak is now the only real-estate entry in `src/lib/demos.ts`, surfaced on:

- the home page showcase (full-width **flagship** treatment),
- `/portfolio`,
- `/industries/real-estate` (live framed embed),
- `/societies` and all 18 `/societies/[slug]` pages,
- `/services/real-estate-portals` (overview copy),
- the AI chat assistant's property intent,
- `Organization` schema as an `owns` → `WebSite` entity.

Links to `propertiespak.com` are **dofollow** (treated as an owned host in `ownedHosts`), which is correct for a property you operate.

### Why this matters commercially

Running a real property portal is the strongest possible proof for the `real-estate-portals` service — far stronger than a demo subdomain. Lean into it:

1. **Write one case study** at `/portfolio/properties-pak` covering the problem, the data model (society → phase → block → plot/file), search architecture, and what it took to make listing pages indexable at scale. This is the page that should rank for *"real estate portal development"*.
2. **Cross-link both ways.** A "Built by WordbitX" footer link from `propertiespak.com` to `wordbitxtech.com/services/real-estate-portals` is a genuine, relevant backlink.
3. **Publish the numbers you are allowed to publish** — listings indexed, page count, Core Web Vitals of the portal. Verifiable metrics, no invented revenue.
4. **Keep the two brands separate in Search Console** (two properties) so Properties Pak traffic does not muddy WordbitX reporting.

---

## 4. Keyword & ranking strategy

Volumes below are directional industry estimates, not Search Console data. Validate in Ahrefs/Semrush before committing content budget. Industry benchmarking puts *"custom software development company"* around 2,900/mo at KD ≈ 80 and *"software development company"* around 27,100/mo — both out of reach for a young domain — while the **KD 20–40 band is where a site like this can actually rank**. ([logicarticles.com](https://logicarticles.com/seo-keywords-for-software-companies/))

### Tier 1 — win these first (low difficulty, high intent, page already exists)

| Keyword | Intent | Target URL | Action |
| --- | --- | --- | --- |
| real estate portal development | commercial | `/services/real-estate-portals` | Add the Properties Pak case study + `Service` schema. **Your single best shot.** |
| housing society management software | commercial | `/services/real-estate-portals` | Build a dedicated section; you already have 18 society pages as supporting content |
| property listing website development Pakistan | commercial | `/services/real-estate-portals` | Local modifier page section + FAQ |
| POS software Pakistan | transactional | `/services/pos-software` | Add pricing band + screenshots |
| Shopify development Pakistan | commercial | `/services/ecommerce-shopify` | Add a migration-cost calculator |
| software house in Lahore | local | `/global/pakistan` | Build the local entity: NAP consistency, Google Business Profile, `LocalBusiness` schema |
| custom web application development services | commercial | `/services/custom-web-application-development` | ~590/mo, KD ≈ 14 — genuinely winnable |
| software outsourcing company | commercial | `/global` | ~720/mo, KD ≈ 15 — frame around overlap hours + code ownership |

### Tier 2 — build in the next 90 days (new pages / sections)

| Keyword cluster | Why | Where |
| --- | --- | --- |
| `healthcare software development company` (~500/mo, KD ≈ 19) | Low difficulty, you already have the Medicare demo and hospital-portal service | `/industries/healthcare` |
| `[service] cost in Pakistan` — website, app, POS, Shopify | High commercial intent, low competition, and your `/pricing` page already refuses to fake a sticker price (which is the honest angle that wins) | `/pricing` + per-service cost blocks |
| `hire Flutter / React / Laravel developers Pakistan` | Staff-augmentation buyers search this; `hire-roles.ts` already exists unused on a public page | New `/hire/[role]` cluster |
| `Shopify to WooCommerce migration` and reverse | Pure bottom-of-funnel, very low KD | `/services/ecommerce-shopify` |
| `dealer CRM software` / `real estate CRM Pakistan` | Rides the Properties Pak authority | `/services/crm-erp-solutions` |
| `inventory management software for [retail/pharmacy/warehouse]` | Three near-identical searches, three near-identical buyers | `/services/inventory-management-software` |

### Tier 3 — top-of-funnel content engine (blog, 2 posts/month)

Pick topics where you can publish something nobody else can: real build decisions.

- "How we modelled DHA-style phase/block/plot inventory" — unique, links to Properties Pak and `/societies`
- "What a property portal actually costs to run per month"
- "Shopify vs custom e-commerce for a Pakistani brand shipping COD"
- "Why we don't publish client logos" — a trust asset, and genuinely differentiating
- "POS for a 12-branch retailer: the five things that break first"

### Keywords to deliberately **not** chase

`software development company` (27k/mo, KD 80), `web development company`, `best software house in Pakistan`, `top IT company`. These are dominated by aggregators (Clutch, GoodFirms, DesignRush, TechBehemoths). The better play is to **be listed on those aggregators** — Pakistan alone has 851 companies listed for SEO services on TechBehemoths ([techbehemoths.com](https://techbehemoths.com/companies/seo/pakistan)) — rather than trying to outrank them.

### Off-page / authority plan

1. **Directory profiles** — Clutch, GoodFirms, DesignRush, TechBehemoths. Free, high-authority, and they are literally the pages ranking for your head terms.
2. **Google Business Profile** for DHA Phase 2, Lahore. NAP must match `siteConfig` exactly. This is the main lever for *"software house in Lahore"*.
3. **Properties Pak → WordbitX** footer credit link.
4. **Developer-community content** — one genuinely useful technical post (e.g. the phase/block/plot data model) on dev.to / Hashnode, linking back.
5. **No paid link schemes.** Everything above is on-policy.

### Tracking & measurement

- Search Console: use a **Domain property** for `wordbitxtech.com`; submit **only** `https://www.wordbitxtech.com/sitemap-index.xml`.
- Separate Search Console property for `propertiespak.com`.
- GA4 conversion events: `contact_submit`, `whatsapp_click`, `demo_open`, `newsletter_signup`. `src/lib/tracking.ts` is already wired — the events just need to be fired on those interactions.
- Monthly review: top 20 queries by impressions with CTR < 2% → rewrite that title/description. This is the fastest traffic win on a site that already has 320 indexable pages.

---

## 5. Premium positioning — what to do next

Shipped in this pass: the assurance strip under the hero, the flagship Properties Pak showcase, and the "what happens next" three-step block in the CTA band.

Further moves, in rough order of return:

| # | Move | Why |
| --- | --- | --- |
| 1 | **Properties Pak case study page** with real architecture detail | Premium buyers buy evidence of thinking, not adjectives |
| 2 | **Engagement models** section — fixed-scope / monthly retainer / embedded team, with a starting band for each | Removes the "they won't tell me the price" objection that loses enterprise leads |
| 3 | **A downloadable scoping template** behind an email gate | Doubles as a lead magnet and a demonstration of process maturity |
| 4 | **Replace stock photography** on the top 10 pages with real studio/product photography | Pexels photos are the single clearest "small agency" tell on the site |
| 5 | **A proper logo mark + favicon set** (`/brand/wordbitx-mark.png` is referenced in schema but missing) | Cheap, and it fixes a live schema warning |
| 6 | **Named client testimonials with written permission**, or a "private references on request" line | Current policy is honest; make the honesty itself the selling point |
| 7 | **Tighten the home page** (see §2) | Restraint reads as premium; 2,800 DOM nodes of marketing reads as a template |
| 8 | **A dark, editorial `/work` index** replacing the mixed demo/portfolio framing | Clear separation of *Live Projects* vs *Demos* is now in the data model (`kind`), so the UI can follow |

---

## 6. Operational debt to schedule

- [x] `npm run demo:shots` — wired into `vercel-build`, runs automatically on every Vercel deploy
- [ ] Add `/brand/wordbitx-mark.png`
- [ ] Per-entity `lastModified` in `src/lib/sitemap-data.ts`
- [ ] Pre-existing lint errors in `ai-chat-widget.tsx`, `header.tsx`, `review-admin.tsx`, `review-slider.tsx` (`react-hooks/set-state-in-effect`, `react-hooks/refs`) — not introduced here, but they will become React Compiler blockers
- [ ] Decide whether `/societies` stays `noindex`; 18 pages of genuinely useful society-software content is a real Tier-1 opportunity being withheld from Google
