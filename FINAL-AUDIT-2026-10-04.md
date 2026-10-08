# WordbitX — Final Pre-Launch Audit

**Date:** 4 October 2026
**Commit audited:** `76a68a1` (branch `arena/01a10647-wordbitx`)
**Method:** production build (`npx next build`) served locally, then crawled. Every number below was measured, not estimated. Where I could not measure something from this sandbox, I say so.

**Scope note:** this supersedes nothing in `WEBSITE-DEEP-AUDIT-2026-10-04.md` — that document remains the deeper narrative audit. This one re-tests the whole site as it stands today and reports what is actually true at this commit.

---

## TL;DR (Roman Urdu)

1. **Technically site tayyar hai.** 218 pages crawl kiye, sab 200. Ek bhi toota hua internal link nahi. Duplicate title/description zero. Har page pe H1, canonical aur schema maujood. 622 images check kiye — ek mein bhi alt text missing nahi. Ye solid engineering hai.
2. **Lekin launch se pehle 3 cheezein rok deni chahiye** — review form bina kisi rate limit ke seedha homepage pe publish kar deta hai, homepage pe likha hai "We do not invent testimonials" aur usi page pe 12 banaye hue reviews chal rahe hain, aur npm mein 1 critical + 3 high vulnerability hain.
3. **85 topic pages bani hui hain lekin sitemap mein hain hi nahi.** 66 topics aise hain jin tak sirf 1-2 internal link jate hain. Ye Google ka waqt zaya karte hain.
4. **76 meta descriptions 160 character se lambi hain.** Pehle audit mein maine likha tha ke ye theek ho gaye — wo check poori site pe nahi tha. Ye meri ghalti thi, ab poora number samne hai.
5. **Tracking bina ijazat ke chal rahi hai.** GTM, AdSense, Facebook pixel — teeno bina consent ke load hote hain, aur aap UK, Canada, Australia target kar rahe hain.
6. **Sab se bari baat:** ye masail site ko kharab nahi kar rahe. Site ka asal masla ab bhi wohi hai — **koi saboot nahi aur koi authority nahi.** Niche aakhri section parhiye.

---

## 1. Scorecard

| Area | Grade | Movement | One-line basis |
|---|---|---|---|
| Engineering | **A−** | — | Clean build, clean types, 0 broken links, 0 runtime errors across 326 pages |
| Technical SEO | **A** | ↑ from A− | 0 duplicate titles, 0 duplicate descriptions, 0 missing canonicals, 0 noindex leaks, schema everywhere |
| SEO content | **C+** | — | Strong pages, but 85 orphaned from sitemap and 66 near-orphaned internally |
| On-page metadata | **B−** | ↓ from A− | 76 descriptions over 160, 25 titles over 60 |
| Accessibility | **A−** | ↑ | 0 unnamed buttons, 0 heading skips, 0 unlabelled inputs, 0 missing alt |
| Performance | **B** | — | System fonts, preloaded LCP, but 1,096 KB home HTML |
| Security | **C** | — | Admin API properly protected, but no CSP/HSTS/XFO and an unthrottled public write endpoint |
| Trust & credibility | **C** | — | One live self-contradiction (§2.2) |
| Legal / compliance | **D+** | — | Three trackers firing with no consent gate in GDPR markets |
| Dependency hygiene | **C−** | ↓ | 1 critical, 3 high |
| **Overall** | **B** | ↑ from B− | Technically the strongest it has been. Blocked on three fixable items. |

---

## 2. P0 — fix before you promote this site

### 2.1 The review form is an open write endpoint to your homepage

`src/app/api/reviews/route.ts` → `POST`.

Measured facts:
- The only abuse control is a honeypot field (`body.website`).
- I grepped the entire `src/` tree for rate limiting — `rateLimit`, `429`, `tooManyRequests`, every variant. **There is none anywhere in the codebase.** The only matches were brand-icon SVG path data and marketing copy.
- A valid submission is written to the database and returned as published in the same request. The response literally says `"Thank you — your review is now on the homepage."`
- There is no approval step between a stranger's POST and your homepage.

A script can put anything it likes on your front page — competitor names, abuse, links — as fast as it can make requests.

**The second-order problem is worse.** The removal tool at `/api/reviews/manage` is correctly protected (password, `timingSafeEqual`, constant-time — this part is well built). But it returns **503 if `REVIEW_ADMIN_SECRET` is unset**. So if that variable is missing in production, submissions still publish instantly while the removal UI refuses to work. You would be unable to clean up through the interface.

**Fix:** hold submissions as unpublished pending approval, add a per-IP rate limit, and confirm `REVIEW_ADMIN_SECRET` is set in production before launch. Of those three, the approval step is the one that actually closes the hole — a rate limit only slows an attacker down.

### 2.2 The homepage contradicts itself about testimonials

Both of these render on `/` today, verified by fetching the page:

- The sentence **"We do not invent testimonials, client logos or results"**
- Twelve invented testimonials — Dr. Nadia F., Imran S., Kamran H., Sarah B. and the rest

They are also **duplicated into the database**: `/api/reviews` returns 12 rows byte-identical to the array in `src/lib/reviews.ts`. `review-slider.tsx` seeds from the array, then replaces that state with the API response. **Deleting the array alone changes nothing on the live site** — both copies have to go.

This is the single most damaging thing on the website, and not because of SEO. There is no `Review` or `aggregateRating` schema anywhere (I checked — zero matches), so Google is not using these for anything. The damage is to a human buyer who reads both lines.

**Previously verified, still true:** removing them is safe. `review-slider.tsx:383` already renders a designed empty state. The hero slider is untouched. SEO impact is zero.

**This needs your decision, not mine** — it is the one item here that changes what the site claims rather than how it is built.

### 2.3 Dependency vulnerabilities

```
CRITICAL  next        → fixed in next@16.3.8
HIGH      nodemailer  → fixable in range
HIGH      postcss     → via next@16.3.8
HIGH      sharp       → via next@16.3.8  (libvips CVE-2026-33327/33328/35590/35591, libheif advisories)
```

You are on Next 16.2.6. The critical one is in the framework itself. `nodemailer` is fixable without a version bump and it handles your contact form — do that one regardless.

---

## 3. P1 — worth doing before you spend money on traffic

### 3.1 Eighty-five topic pages are invisible to search

| Measurement | Count |
|---|---|
| HTML pages built | 330 |
| URLs in the sitemap | 218 |
| **Built but absent from the sitemap** | **114** |
| …of which topic pages | **85** |
| …societies pages | 18 |
| …technologies pages | 6 |

And separately, from the internal link graph I built across all 326 real pages:

| Inbound internal links | Pages |
|---|---|
| 0 (true orphans) | 2 — `/admin/reviews`, `/lab/service-nav` |
| 1–2 | **101**, of which **66 are topics** |

So the topic cluster is in the worst possible position: built, indexable, but neither submitted nor meaningfully linked. Google has to spend crawl budget discovering pages you have not voted for.

**This is the same conclusion as the growth plan's "stop making pages", now with numbers.** Either promote the good topics into the sitemap and link them properly from the services they support, or `noindex` the ones you do not intend to back. Leaving 85 pages in limbo is the one choice that helps nothing.

### 3.2 Metadata over the limits

| Problem | Count | Worst |
|---|---|---|
| Meta description > 160 chars | **76** | `/software-house` at 218 |
| Title > 60 chars | **25** | `/global` at 91 |

Descriptions by group: services 25, blog 20, products 7, cities 7, portfolio 6, core 4, topics 4, legal 2, global 1.

**A correction I owe you:** the earlier audit recorded that meta descriptions were compliant site-wide. That check did not cover every page. 76 are over today. Over-length descriptions get truncated, not penalised — this is a click-through problem, not a ranking one — but `/global` losing 31 characters of its title is a real loss on a page meant to win international search.

Note that `seoTitle()` caps at 58 characters, so the 25 long titles are pages constructing their title outside that helper.

### 3.3 Three trackers, no consent gate

Google Tag Manager, Google AdSense and the Meta Pixel all load unconditionally on first paint. I confirmed all three in the rendered HTML, and there is no consent logic in `analytics.tsx` or `layout.tsx`.

Your own `/global` page markets to the **UK, Canada and Australia**. That means UK GDPR, PIPEDA and the Australian Privacy Act. Running Meta Pixel on a UK visitor before consent is the textbook violation.

This is a legal exposure, not an SEO one, and it is cheap to fix.

### 3.4 Missing security headers

| Header | Status |
|---|---|
| `X-Content-Type-Options` | ✅ nosniff |
| `Referrer-Policy` | ✅ strict-origin-when-cross-origin |
| `X-Powered-By` | ✅ removed |
| `Content-Security-Policy` | ❌ missing |
| `X-Frame-Options` | ❌ missing |
| `Permissions-Policy` | ❌ missing |
| `Strict-Transport-Security` | ❌ missing |

`next.config` already has a working `headers()` block — these are four more lines in a place that exists. Missing `X-Frame-Options` means your pages can be framed by anyone.

### 3.5 Page weight

| Page | Raw HTML |
|---|---|
| `/` | **1,096 KB** |
| `/services` | 673 KB |
| `/topics` | 344 KB |
| `/technologies` | 291 KB |
| average across 218 | 186 KB |

A megabyte of HTML before images or JS is a lot on a Pakistani mobile connection, and the homepage is where your ads and your brand searches land. JS chunks total 1.7 MB with the largest at 248 KB.

The good news is the expensive things are already right: **system font stack** (no webfont round-trip), **LCP image preloaded** with `fetchPriority="high"`, images self-hosted with no remote hotlinks.

### 3.6 Five lint errors

```
src/components/ai-chat-widget.tsx   32  Cannot access refs during render
src/components/ai-chat-widget.tsx   40  setState synchronously within an effect
src/components/header.tsx           64  setState synchronously within an effect
src/components/review-admin.tsx     21  setState synchronously within an effect
src/components/review-slider.tsx    93  setState synchronously within an effect
```

Plus one warning: `analytics.tsx` should use `GoogleTagManager` from `@next/third-parties/google`.

These are React correctness rules about cascading renders. None is breaking anything visibly today, but `ai-chat-widget.tsx:32` — reading a ref during render — is the kind of thing that breaks unpredictably under React 19 concurrent rendering.

### 3.7 Two pages that should not be in production

- **`/lab/service-nav`** — a development scratch page, built, publicly reachable, zero inbound links, not in the sitemap.
- **`/admin/reviews`** — publicly reachable with no login, though it is correctly `noindex, nofollow` and the API behind it requires the password. Low risk, but it advertises the existence of an admin surface to anyone who guesses the URL.

Also: `public/brand/wordbitx-lockup.png` is **337 KB** and referenced only in two CSS comments. It is a dead file.

---

## 4. What is genuinely right

I want this on the record, because the list above is long and the picture it paints is misleading on its own.

| Check | Result |
|---|---|
| Pages crawled | 326 |
| Non-200 responses | **0** |
| Broken internal links | **0** |
| Duplicate titles | **0** |
| Duplicate meta descriptions | **0** |
| Missing / multiple H1 | **0 / 0** |
| Missing canonicals | **0** |
| Accidental `noindex` | **0** |
| Pages without JSON-LD | **0** |
| `<img>` without alt (622 sampled) | **0** |
| Remote image hotlinks | **0** — all self-hosted |
| Unnamed buttons | **0** |
| Heading-level skips | **0** |
| Unlabelled form inputs | **0** |
| `lang` attribute | present everywhere |
| 404 handling | correct |
| Admin auth | constant-time compare, correctly implemented |

Zero broken internal links across 326 pages is uncommon. Zero missing alt attributes across 622 images is uncommon. The technical foundation is not the problem with this website and has not been for some time.

---

## 5. The thing the audit cannot fix

Everything above is housekeeping. If you fixed all of it tonight, **you would still have zero clients from this website**, because none of it addresses why.

The measured reality has not changed:

- **No authority.** A 5–7 month old domain with effectively no backlinks. `/software-house/lahore` is 1,326 words and loses to a thinner NexiOrbit page. That is a link gap, not a content gap. Writing more pages — you now have 330 — has been the response, and it has not worked.
- **No proof.** No named clients, no case studies with outcomes, an empty Clutch profile, and twelve invented testimonials where real ones should be.
- **No Google Business Profile.** For "software company in lahore" the map pack sits above every organic result. You do not appear in it, because the profile was never claimed.
- **The SERP you are chasing is not made of homepages.** Page one for your main keyword is listicles and directories. Only `rextech.pk` broke through with a company homepage. You cannot out-rank a listicle with a homepage; you get *into* the listicle.

**Ranked by distance between effort and a signed project:**

1. **Claim the Google Business Profile.** Highest-leverage single action available. Blocked on one fact only I do not have — the **DHA Phase 2 plot/suite number**. Give me that and it stops being blocked.
2. **Get listed** on GoodFirms, Clutch, TechBehemoths, DesignRush, Sortlist. This is how you appear on page one for your own keyword — inside the directories that already own it.
3. **Pitch the listicle publishers** that rank for "software company in lahore". One inclusion is worth more than ten new service pages.
4. **Publish one real case study** with a named client and a measurable outcome. PropertiesPak is your own live product and is the obvious candidate — it is real, it is yours, and it is currently under-used as proof.
5. **Then** come back to the P0 and P1 list above.

The site is ready. The marketing around it is not, and that was never a code problem.

---

## 6. Suggested order of work

| # | Item | Effort | Why this position |
|---|---|---|---|
| 1 | Moderation + rate limit on review POST | M | Open write endpoint to your homepage |
| 2 | `nodemailer` patch | S | Fixable now, no major bump, guards the contact form |
| 3 | Decide on the 12 testimonials | — | **Your call.** Removal is verified safe |
| 4 | Consent gate | M | Legal exposure in three markets you actively target |
| 5 | Four security headers | S | Four lines in a config block that already exists |
| 6 | Meta descriptions + titles | M | 101 pages, mechanical, improves click-through |
| 7 | Topic sitemap / `noindex` decision | M | Resolves 85 pages sitting in limbo |
| 8 | Delete `/lab/service-nav`, dead lockup PNG | S | Dev artefacts in production |
| 9 | Five lint errors | S | React 19 correctness |
| 10 | `next@16.3.8` | L | Critical CVE, but a framework bump needs a full regression pass |

Items 2, 5 and 8 are quick and carry no design risk. Items 1 and 4 are real work. Item 3 is a decision rather than a task. Item 10 should not be rushed the week you are trying to launch.

---

## Appendix — how these numbers were produced

- Production build served on `127.0.0.1:3000`, crawled with concurrency 12.
- Sitemap parsed from `/sitemap-index.xml` → 10 child sitemaps → 218 URLs.
- Built-page inventory from `.next/server/app/**/*.html`, excluding error and sitemap routes → 330.
- Internal link graph built by extracting every `href="/…"` from all 326 real pages and mapping inbound counts. The three "broken" links the script first reported (`/`, `/blog`, `/contact`) are false positives — those routes are server-rendered and have no prerendered HTML file, and all three return 200.
- Accessibility figures are regex-based structural checks on rendered HTML, spot-checked across 6 key pages plus an 80-page image sample. **Colour contrast and keyboard focus order were not tested** — headless browsers do not run in this sandbox, so those need a real browser pass before launch.
- Lighthouse / Core Web Vitals field data could not be collected here. HTML and JS byte counts are the proxy used.
