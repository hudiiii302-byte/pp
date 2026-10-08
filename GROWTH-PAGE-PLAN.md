# Growth page plan — how many pages, which pages, and in what order

Written for request 31: _"professional home page with multiple pages jis se indexing har aik keyword,
characters, services etc sab cheezon ki ho. jitna zyada pages utna zyada growth."_

---

## 1. The honest correction up front

**"More pages = more growth" is half true, and the wrong half is expensive.**

What is true: every distinct question a buyer types needs a page of its own. We cannot rank for
"POS software for a pharmacy in Lahore" from a page about custom software in general. Coverage wins.

What is not true: that the page *count* is the lever. Google scores quality at the **site level**.
If we publish 400 pages where 350 are the same template with a city name swapped in, the 350 do not
simply fail to rank — they drag the 50 good ones down with them. This is the single most common way
a Pakistani software-house site stalls after a burst of growth, and it is very hard to reverse
(you have to delete the pages and wait for a recrawl).

So the rule for everything below:

> **A new page is only worth building if it can say at least three things no other page on this
> site says.** If it cannot, it should be a section on an existing page, not a URL.

Every tier below is written against that rule.

---

## 2. Where we actually stand (measured, not estimated)

| Sitemap | Indexable URLs |
| --- | --- |
| core | 16 |
| services | 60 |
| industries | 13 |
| products | 7 |
| cities | 11 |
| global (countries) | 6 |
| portfolio | 25 |
| blog | 33 |
| topics | 35 |
| legal | 5 |
| **Total submitted** | **211** |
| societies | 20 — built, deliberately `noindex` |

211 indexable URLs is a solid surface. The old gap — **zero city pages** — is now closed: eleven are live under `/software-house/`,
covering the highest-intent, lowest-difficulty Pakistani search demand ("software house in Lahore",
"web development company Karachi").

The home page itself just got denser: it now links **26 distinct service pages** (was 21), and the
new service index links them by their **full names** — "Real Estate Portal Development",
"Inventory Management Software" — instead of two-word tile labels. Anchor text is the strongest
internal-linking signal we control, and this was free.

---

## 3. Tier 1 — build these (high intent, low difficulty, genuinely distinct)

### 3a. City pages — **SHIPPED, 11 cities**

URL shape chosen and now fixed: `/software-house` hub plus `/software-house/{city}`. Live for
Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Sialkot, Gujranwala, Multan, Peshawar, Quetta
and Hyderabad.

Every page was written separately against the three-unique-things rule — the city's real industrial
base, its actual commercial districts, and the software those businesses ask for. Sialkot is about
multi-currency B2B export catalogues; Faisalabad is about textile order-to-dispatch; Quetta is about
offline-capable capture. There is no shared template body text, which was the entire point.

Each page carries FAQ schema and a `Service` + `areaServed` JSON-LD block, links six prioritised
service pages and its relevant industry briefs, and cross-links four nearby cities. The home page
and `/global/pakistan` both link all eleven.

**Still to do here:** city × *service* pages (`/services/web-development/lahore`) are the next layer
down and should only be built once the city pages show they rank. Do not build 120 of them on faith.

Evidence this is winnable: a direct Pakistani competitor already ranks on
`nizisolutions.com/real-estate-portal/` for "Real Estate Portals Development in Islamabad, Pakistan".
These are KD 15–40 terms, not KD 80 head terms.

### 3b. Product pages for our own demos — request 31②

The user is right: _"hamare demos hi hamare products bhi to hain, jaise official ye propertiespak.com"_.
We have 10 showcase entries in `src/lib/demos.ts`, already typed `demo` vs `live`.

Elexoft's strongest asset is an **"Our Products"** nav item with real screenshots. We have the same
thing and are under-selling it as "demos".

**Shipped.** `/products` plus seven product pages, each written from the live site rather than from
the old one-line demo blurb: Properties Pak, MOTOR Pakistan, Medicare Plus, the WordbitX Education
Platform, Veranne, Maison Noor and ÉLAN Beauty Studio. Every page carries an overview, who it is
built for, six capabilities, engineering notes, FAQ schema and links to the service lines it proves.

One entry was **removed**: the "Corporate Business" card pointed at a temporary Hostinger preview
URL that serves a byte-identical copy of the Medicare Plus clinic site. It promised a corporate
website and delivered a duplicate of another card. It can come back the moment there is a real
corporate build behind it.

Properties Pak stays labelled **Live Project**, non-www `https://propertiespak.com`, no demo
disclaimer — per standing instruction.

### 3c. Industry × service pages

`/industries/healthcare/custom-software`, `/industries/real-estate/mobile-app`. We have 13 deep
industry briefs and 60 services. The honest subset is roughly **13 × 4 = 52**, only where the
combination is a real offering we would quote on. Not 780.

---

## 4. Tier 2 — fix what already exists before adding more

### 4a. `/societies` — 20 pages built and hidden

Both `src/app/societies/page.tsx` and `[slug]/page.tsx` set `robots: { index: false, follow: true }`,
and `robots.ts` disallows `/societies`. The stated reason is sound: indicative plot-price tables
should not compete with our software pages.

The content is **not** thin — a single society page renders ~6,000 words with overview, highlights,
a PKR plot table and FAQs. 20 pages of that quality sitting behind noindex is real inventory.

**Done — the split, not a blanket flip:**

- **`/societies` hub is now indexed** and in the core sitemap. `robots.ts` now disallows
  `/societies/` (with the trailing slash) instead of `/societies`, so the hub is crawlable and the
  children are not.
- **The 20 child pages stay noindex** *unless* one of these is true:
  - we commit to refreshing the price tables on a schedule (`pricesUpdatedLabel` currently reads
    "Prices last reviewed: August 2026"), **or**
  - we rewrite the children to lead with *society management software* and demote the price table to
    a secondary block.

Stale PKR price tables are a user-harm signal and a reputational risk. Indexing them unmaintained is
the one move in this document that could actively lose us trust.

### 4b. Thin-page sweep

Before adding more pages, confirm the 211 we have are all earning their place — especially the 35
topic pages and 33 blog posts. Any that are under ~400 words of unique body should be merged or
expanded, not left to dilute the domain.

---

## 5. Tier 3 — off-site, which is where the ranking actually unlocks

We will not out-rank directories for head terms. 851 SEO providers are listed for Pakistan on
TechBehemoths alone; the directories own those SERPs. So we join them rather than fight them.

- **Clutch** — `https://clutch.co/profile/wordbitx` exists (provider_id 2708278). Two problems to fix
  on Clutch's side, by us, not in this repo:
  1. **Zero reviews.** Review velocity is the entire value of a directory profile. Three real client
     reviews changes the profile from decorative to functional.
  2. **The service-lines list is mis-categorised.** It currently includes HR Consulting, Executive
     Search, Recruitment Process Outsourcing, Benefits Administration, Talent Representation and
     **Real Estate Law**. These file WordbitX into staffing and legal directories instead of software
     development. This is actively harmful and free to fix.
- GoodFirms, DesignRush, TechBehemoths — same profile, same review push.

**Founding-year conflict — RESOLVED.** Clutch previously said "Founded 2024" against our own
`foundingYear: 2021`. The owner corrected the Clutch profile to 2021, re-verified on 4 October 2026,
so the two now agree and the link is safe to publish.

**Shipped:** an "Independently listed" block on `/about` linking the profile and stating only the
facts Clutch actually publishes — Founded 2021, 10–49 employees, min project size $1,000+, under
$25/hr — plus the Clutch URL in the Organization `sameAs` array. **No stars, no rating, no review
count**, and the block says so in plain words. There are zero reviews on the profile; the day there
are real ones, the real number goes in.

---

## 6. Order of work

| # | Item | Pages | Risk |
| --- | --- | --- | --- |
| 1 | ~~Resolve the founding-year conflict~~ — **done**, Clutch now reads 2021 | 0 | none |
| 2 | ~~`/products` index + product pages~~ — **done**, 8 new URLs | 8 | none |
| 3 | ~~Index the `/societies` hub only~~ — **done** | 1 | low |
| 4 | Fix Clutch categories + get 3 reviews | 0 on-site | none — **owner action** |
| 5 | ~~City pages~~ — **done, 11 cities + hub** | 12 | low |
| 6 | Measure the city pages for 4–6 weeks in Search Console | — | — |
| 7 | City × service, gated on step 6 | up to ~120 | medium |
| 8 | Industry × service | ~52 | medium |

**190 → 211 indexable URLs**, and every one of the 21 new pages is defensible on its own content.
Steps 7 and 8 stay gated on evidence: if the eleven city pages do not earn impressions in six
weeks, building 120 more of the same shape would be throwing good pages after bad.

## 7. Performance, because "top level" is also how fast it loads

The client JavaScript bundle was **6,079 KB raw**, of which **5,271 KB was the entire simple-icons
package** — roughly 3,460 brand logos, pulled onto every page by the header, to render about 58 of
them. `optimizePackageImports` could not fix it because it only rewrites *named* imports and the
code used a namespace import.

The 58 glyphs we actually reference are now inlined in `src/lib/brand-icon-data.ts`, generated by
`npm run icons` from the two files that declare them, so it cannot drift. simple-icons moved to
devDependencies and the `experimental.optimizePackageImports` entry was removed.

**Result: 6,079 KB → 1,453 KB of raw JavaScript.** That is a −4.6 MB reduction on every page view,
and it is the single largest Core Web Vitals improvement available on this site.
