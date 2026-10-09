# WordbitX — Website & Growth Audit, v2 (consolidated)

**Date:** 9 October 2026 (Asia/Karachi)
**Site:** https://www.wordbitxtech.com
**Branch:** `arena/63a19655-pp`
**Supersedes:** `DEEP-AUDIT-2026-10-08.md` (kept for history; do not act on its "open" items without checking §3 here)
**Method:** code review of the repo, `next build` verified on this branch (clean), review API tested live on a production build, and a re-read of all existing audit and playbook files.

> **Honesty note:** Competitor figures and third-party facts (Clutch profile, competitor badges, sitemap counts) come from the 8 Oct research. They were not re-crawled today. Re-verify before quoting them publicly.

---

## 0. Executive summary

| | Score (out of 10) | Why |
|---|---|---|
| Technical site quality | **9.0** | Clean build, schema on every page, canonicals, sitemap, metadata fixed on 8 Oct, rate-limited review API (today). |
| Honesty & policy safety | **9.0** | Fabricated reviews removed from code (8 Oct). Heading now says "so far". Still needs the homepage copy to be re-checked after real reviews arrive. |
| Off-site authority | **2.0** | Zero backlinks, citations, reviews, GBP proof. This is the real gap and it is **mostly an action list for the owner**, not code. |
| Social proof on site | **3.0** | No real client logos, case studies or reviews yet. Portfolio is honestly labelled as demos. |
| Local (Lahore) readiness | **5.0** | Strong city pages. GBP status unknown. No PSEB/LCCI yet. |
| **Overall** | **6.5 today → 9.0 achievable in 90 days** | Score rises mainly when the owner completes §4 items, not when more code is written. |

**The one-line truth:** the website is ready to convert traffic; the business does not yet have the proof that makes people trust it. Closing that gap is 80% outreach and registrations, 20% code.

---

## 1. What changed today (verified)

| Item | Status | Evidence |
|---|---|---|
| Fabricated homepage reviews (P0 from 8 Oct) | ✅ Removed | `src/lib/reviews.ts` exports an empty `siteReviews` list. |
| Heading "Client reviews" over an empty list | ✅ Changed to "What clients say — so far" | `src/components/review-slider.tsx`. Verified on running build (`/` returns the new text). |
| No rate limit on `POST /api/reviews` | ✅ Added: 2 submissions per IP per 24 h, returns HTTP 429 with `Retry-After` | `src/lib/rate-limit.ts`, `src/app/api/reviews/route.ts`. Tested: requests 1–2 pass validation (422), request 3 returns 429. |
| Header missing legal form | ✅ Logo now reads "WordbitX | SMC – Pvt. Ltd." | `src/components/icons.tsx` (`Logo` default `secondaryTagline`). |
| Home title | ✅ Already "Software Development Company in Pakistan \| WordbitX" | `src/app/layout.tsx`, `src/app/page.tsx`. |
| Build | ✅ `npm ci`, `tsc --noEmit`, `next build` all pass | Run on 9 Oct 2026. |

**Known limitation of the rate limit:** it is in memory. On serverless hosts it resets when an instance restarts. It stops a casual script, not a determined one. Real protection is the moderation step in §4.3.

---

## 2. Findings still open (ranked)

| # | Finding | Impact | Owner | Status |
|---|---|---|---|---|
| F1 | **Zero off-site authority** (no backlinks, citations, reviews) | Very high | Owner (accounts are in the owner's name) | Open. Playbook in `BACKLINK-PLAYBOOK-2026-10-08.md`. |
| F2 | **No Google Business Profile evidence** for "WordbitX Technology Lahore" | Very high for Lahore searches | Owner | Unknown. Check Google Maps today. |
| F3 | **No real reviews on site**; 15 reviews from owner's screenshot not yet imported | High | Owner (source + text), Agent (import) | Waiting for the review text and the source (Google vs direct). |
| F4 | **Review submissions publish instantly** with no moderation | High (spam, policy) | Agent (code) | Open. Needs a `status` column (`pending` / `approved`) and admin approval. |
| F5 | **`REVIEW_ADMIN_SECRET` not confirmed** on Vercel | Medium (cleanup UI returns 503 without it) | Owner | Set it in Vercel → Environment Variables, then redeploy. |
| F6 | **NTN and SECP number** not published | High for trust and citations | Owner | Waiting. Do not publish until confirmed against the certificate. |
| F7 | **Legal name mismatch**: code says "Wordbit X TECHNOLOGY SMC – PVT. LTD." while the owner says "SMC Pvt Ltd" | Medium (inconsistent NAP across citations) | Owner | Confirm exact name from the SECP certificate. Then fix everywhere in one pass. |
| F8 | **No real case studies or client logos** | High | Owner (client permission) | Open. PropertiesPak deep-dive can be drafted by the agent. |
| F9 | **Hire-developers cluster missing** (~16 pages) | Medium–high (new keyword pool) | Agent (code), owner approves scope | Not started. |
| F10 | **PSEB, LCCI, PASHA registrations** not done | High (competitors show these badges) | Owner | Not started. Don't add badges until the registration exists. |
| F11 | **Search Console data** not yet shared | Needed to measure anything | Owner | Share screenshot or export: indexed pages, impressions, top queries. |
| F12 | **Stale numbers in old reports** (e.g., "224 URLs", "36 posts", "80 meta fixes") | Low (internal accuracy) | Agent | Re-check with a fresh crawl before any external use. |

---

## 3. Corrections to the 8 Oct report

- The "10 fabricated reviews" P0 is **resolved in code**. It is not an open P0 any more. The remaining risk is the *process* (F3, F4), not the old data.
- The "rate limit missing" item is **resolved** (today). The "set `REVIEW_ADMIN_SECRET`" item is still open (F5) because only the owner can set it.
- The "home title change" item is **already done**.
- The overall grade "B− site, F authority" is kept, but the authority score is now stated as 2/10 (not "F") so it can be tracked week to week.

---

## 4. Action plan — how to cover every finding

### 4.1 This week (owner, ~3 hours)
1. **Google Business Profile.** Claim or verify "WordbitX Technology Lahore". Category: Software company. Add services, photos, website link. Decide: visitable office (DHA Phase 2) or service-area business. *Covers F2.*
2. **Set `REVIEW_ADMIN_SECRET`** on Vercel, redeploy. *Covers F5.*
3. **Confirm legal name, SECP number and NTN** from the certificates. Send them to the agent. *Covers F6, F7.*
4. **Citations batch 1** (15 platforms, copy-paste from the playbook, using one identical NAP). *Covers F1 part 1.*
5. **Ask 3 real clients** for a Google review, and ask one for a written permission to use the name/logo. *Covers F3, F8.*
6. **Share Search Console numbers.** *Covers F11.*

### 4.2 Weeks 2–4 (owner + agent)
1. **PSEB and LCCI applications.** Owner files; agent updates the site badges only after the registration number exists. *Covers F10.*
2. **Hire-developers cluster** (agent builds 16 pages on approval). *Covers F9.*
3. **PropertiesPak case study** drafted by the agent from the codebase; owner adds real numbers. *Covers F8 part.*
4. **Blog cadence:** 2 posts per week, topic order: cost guides → FBR cluster → comparisons. *Supports F1 and F9.*
5. **Import the 15 reviews** once the source and text are confirmed. *Covers F3.*

### 4.3 Weeks 4–8 (agent code, after owner OK)
1. **Moderation:** new reviews save as `pending` and appear only after admin approval. Admin page gets an "Approve" button. *Covers F4.* This is the most important code change left.
2. **Review persistence:** reviews must survive restarts. Requires `DATABASE_URL` (Postgres). Without it the memory store still loses data. *Covers F3 risk.*
3. **Trust strip** under the hero (SECP / FBR / verified profiles only). Only badges that are real. *Covers F10 in part.*

### 4.4 Days 60–90
1. Use **Clutch and Google** review requests as a routine (one ask per finished project).
2. Publish **2 real case studies** (1 page each).
3. Evaluate Google Ads (small test) only after GBP and reviews exist, so the landing page converts.

---

## 5. KPIs (what "working" looks like)

| When | Target |
|---|---|
| Week 1 | GBP verified; REVIEW_ADMIN_SECRET set; NTN/SECP published; 15+ citations submitted |
| Week 2 | All sitemap URLs indexed or queued in Search Console; Bing shows the site |
| Day 30 | 5+ real reviews; moderation live; hire-developers pages live |
| Day 60 | 25–40 citations/links; 10+ real reviews; 2 case studies; long-tail impressions in Search Console |
| Day 90 | Top-10 on 5–10 money long-tail queries; top-3 Lahore local cluster; first organic enquiries traced to search |

---

## 6. Questions the owner must answer

1. What is the exact registered legal name (from SECP certificate)? Is "SMC" part of it?
2. SECP number and NTN?
3. Is the Google Business Profile claimed? Is DHA Phase 2 a real public office?
4. Where did the 15 reviews come from (Google, or clients directly)? Can you share the text?
5. Do you have 2–3 real clients who allow their name or logo to be used?
6. Search Console export or screenshot.

---

## 7. How this report will be verified

- Build: `npm run typecheck` and `npm run build` must pass on every change.
- Reviews API: POST three times from one IP; third returns 429.
- Homepage: review heading reads "What clients say — so far" and no fabricated names appear.
- Legal name: one search across `src/` for the old and new name; they must match the certificate.
- Re-crawl the sitemap before reusing any count from older reports.
