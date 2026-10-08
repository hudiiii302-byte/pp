# WordbitX — Ranking & Client Acquisition Plan
**Date:** 2026-10-04 · **Domain age:** ~5–7 months · **Status:** indexed, not ranking · **Clients to date:** 0

---

## Roman-Urdu summary — agar aap sirf ye parhein

1. **`wordbitx.com` ab aapka nahi hai** aur mehnga bik raha hai. **Mat khareedein.** Wo `"WordbitX"` pe #1 rahega — lekin jo banda "WordbitX" search karta hai wo aapko *pehle se* jaanta hai. Aapke projects us search se nahi aate. Isay chhor dein.
2. **Sabse bari baat jo maine dhoondi:** `software company in lahore` ka page 1 **company websites ka nahi, listicles aur directories ka hai** — GoodFirms, superbcompanies, abark.tech, timelinedigi, Reddit. Sirf **ek** company ka homepage ghusa hai (rextech.pk, wo bhi Johar Town se). **Toh SERP se larein mat — us mein shaamil ho jayein.**
3. **Google Business Profile** — map pack un sab listicles ke *upar* baithta hai. Ye akela sabse tez tareeqa hai us keyword pe nazar aane ka.
4. Aapka `/software-house/lahore` page **pehle se bana hua aur acha hai** (1,333 words, LocalBusiness schema). Naye pages mat banayein — us par **links** chahiye.
5. **PropertiesPak** aapka sabse bara proof hai aur uske dealers aapki taiyar lead list hain.
6. Clients 30-60 din mein SEO se nahi, outbound se aayenge. Section 8.

## 0. What I verified before writing this

| Check | Result |
|---|---|
| `"WordbitX"` search | `wordbitx.com` ranks #1. `wordbitxtech.com` absent. |
| `WordbitX software development company Lahore` | eForce Labs, IT Genesis, PixelPK, WordX BPO rank. We do not appear. |
| `wordbitxtech.com` as a query | Only RocketReach + SignalHire (scrapers) and GitHub PRs. The site itself does not surface. |
| `robots.txt` | Correct. Allows all, blocks `/api/ /admin /lab /societies`, declares sitemap index. |
| Sitemaps | 10 topical sitemaps, valid `lastmod`. 60 services, 33 blog posts, industries, cities, global, products, portfolio. |
| On-page content quality | **Good.** `/services/pos-software` has problems, benefits, offering, 5-step process, stack, FAQ, related work. Not thin. |
| Schema | `Organization + ProfessionalService` with address, telephone, two `contactPoint`s, `sameAs`, `knowsAbout`, `owns`. Solid. |
| NAP consistency | Consistent in `src/lib/site.ts`. Phone `+92 325 1888841`, US `+1 (929) 619-7699`, DHA Phase 2, Lahore. |

**Conclusion: this is not a technical SEO problem.** The build is good. The problem is *authority, entity confusion, and proof* — none of which live in the codebase.

---

## 1. The brand problem — revised

### 1.1 The old domain is gone, and that is fine

`wordbitx.com` was ours 1–2 years ago. It is now owned by someone else, still serving a purchased template ("13 Years of Experience", and unreplaced filler copy about *"private houses and cottages since 19"*), and it is listed for sale at a price that is not worth paying.

**Decision: do not buy it. Do not chase it.** Reasoning:

- A 301 is impossible without ownership, so there is no technical consolidation to gain.
- It ranks for `"WordbitX"` — a **branded** query. Anyone typing your brand name already knows you. Branded search is not where new projects come from.
- It will fade on its own. Parked and for-sale domains lose rankings as they go stale, and a growing real site overtakes an abandoned one.

The correct response is not to fight for that one result — it is to **own the rest of page 1** (Section 3) so that even while the old domain sits at the top, every other slot is yours.

### 1.2 One name, everywhere — already done

The official name is **WordbitX**. The old `WordBitx Tech` naming is retired and all current social accounts already use WordbitX. Good — that is the hard part.

The residue is in third-party data: RocketReach and SignalHire still publish *"WordBitx Tech."* with old staff, scraped from the abandoned LinkedIn page. That resolves when the LinkedIn situation does (Section 2).

**Done in code:** `alternateName` on the Organization schema now lists every spelling you have ever been cited under, so Google can collapse `WordbitX`, `WordBitx Tech`, `Wordbit X` and `WordbitX Technology` into a single entity instead of several weak ones.

**Still to do by you:** the CEO LinkedIn profile reads `CEO @ JIX SOLUTIONS / WORDBITX TECH`. Make it `CEO at WordbitX`, attached to the new company page.

## 2. LinkedIn — why the new page is invisible and how to fix it

### 2.1 The dead page is gone — treat the duplicate problem as closed

**Status: the old "WordBitx Tech." page is suspended and permanently gone.** It was never recovered. Repeated Persona identity-verification attempts against a profile carrying a company name got the account suspended, and LinkedIn's recovery rate for permanent suspensions is in the single digits. The account you did recover was a different, unrelated one.

**Do not attempt any of the following again. All of them are now either impossible or actively dangerous:**

- **Do not file a duplicate report, appeal, claim, merge or deactivation request** for the old page. There is no account behind it to act from, and the suspension has already removed it as a competing entity. The duplicate problem is closed by the suspension itself.
- **Do not create any new LinkedIn account from your existing device, IP, email or phone.** LinkedIn associates accounts across all four signals. The official WordbitX page is now your only LinkedIn asset, and a fresh account traced back to a suspended one is the single most reliable way to lose it too.
- **Do not run Persona verification against a profile whose name is a company name.** Persona matches the name on your ID document character for character. A personal profile must carry your own legal name exactly as it appears on your passport or CNIC — "WordBitx Tech." is not a person, and submitting it is what triggered the suspension.

**What is left to do, and it is the part that was always the real fix:** outrank the residue. Scraper sites — RocketReach, SignalHire and similar — still publish records harvested from the old page before it went down. Those records decay once the source stops being re-crawled, and the suspension has stopped that. Attaching your 5–7 employees to the official page, posting consistently, and pushing followers replaces the stale entity in the data industry's index within a few months. Section 3 covers the rest of the brand-SERP moat.

### 2.2 Make the new page rank

A LinkedIn company page ranks for its brand name on four things. Audit yours against all four:

| Factor | What it needs |
|---|---|
| **Completeness** | Logo, 1128×191 banner, tagline, full About (300+ words, containing "software development company Lahore Pakistan"), website URL, industry, company size, HQ address, founded year, and **Specialties** (LinkedIn allows 20 — fill all 20 with your service names). |
| **Followers** | Pages under ~100 followers rarely surface. Have every employee, ex-colleague, friend and client follow it. Invite connections — LinkedIn gives free invite credits monthly. Target 500 in 60 days. |
| **Inbound links** | Your site already links to it from the footer (good, and it is in `sameAs` schema). Add it to: email signatures, GitHub org profile, Clutch, every directory listing, PropertiesPak's about page, and each demo site's footer. |
| **Employee attachment** | Every team member selecting the page as employer. This is the single biggest one and it is free. |

**On daily posting:** 3–4 months of daily posts is good discipline, but posts almost never rank in Google. Posting grows the *page*, not the *search result*. Keep posting, but understand it is a nurture channel, not an acquisition channel. Measure it by profile visits and inbound DMs, not impressions.

---

## 3. Build a brand SERP moat

Goal: when anyone searches **WordbitX** or **wordbitxtech**, page 1 is *entirely properties you control*. Right now page 1 is an abandoned domain and two data scrapers.

Claim/complete these, in this order. All are free and all rank easily for a brand term:

1. **Google Business Profile** — DHA Phase 2, Lahore. Category: *Software company*. Secondary: *Website designer*, *Marketing agency*. (Also Section 4.)
2. **Clutch** — profile exists (`clutch.co/profile/wordbitx`, Founded 2021, 10–49, $1,000+, <$25/hr). Complete it, add portfolio items, request reviews.
3. **GoodFirms**, **DesignRush**, **Sortlist**, **TechBehemoths** — TechBehemoths already lists 972 Pakistani companies; listing is free.
4. **Crunchbase** — free company profile, ranks very well for brand names.
5. **Facebook Page**, **Instagram**, **X**, **YouTube**, **TikTok** — already created; make sure each has the website URL, same NAP, same logo, and the full company name in the bio.
6. **GitHub org** (`github.com/wordbitx`) — add a profile README, website link, and location. You have real repositories; this is credible.
7. **PASHA** (Pakistan Software Houses Association) membership — a real authority link, and it matters to university and government buyers who check membership before issuing an RFP.
8. **Pakistan Software Export Board (PSEB)** registration — same logic, plus tax benefits.

Each one is a page-1 slot taken by you instead of by a scraper.

---

## 4. Google Business Profile — the fastest lead source you are not using

You have a verifiable Lahore office. You have no GBP. Without it you cannot appear in the map pack for *any* local query, and the map pack is the top of the page for "software house near me", "software company johar town", "web development lahore".

**Setup:**
- Name: exactly **WordbitX** (no keyword stuffing — that gets suspended).
- Address: DHA Phase 2, Lahore. Verification is by postcard or video, so the listing needs the exact suite/plot number the verifier will look for.
- Category: *Software company*. Add secondaries.
- Phone: `+92 325 1888841` — must match the site byte-for-byte.
- Website: `https://www.wordbitxtech.com`.
- Hours, 20+ real photos (office, team, screens — real ones, not AI).
- Services: add all your main services with descriptions.
- Products: add PropertiesPak and your demo products.
- **Posts:** weekly. GBP posts *do* affect local ranking.
- **Reviews:** this is the ranking factor. Target 10 real reviews in 60 days.

**Expect:** first calls within 2–6 weeks of verification. This is far faster than organic.

---

## 5. Why the website doesn't rank — and the actual method

### 5.1 The SERP reality — page 1 is listicles, not companies

This is the most useful thing in this document. Before optimising anything for `software company in lahore`, look at who actually holds page 1:

| # | Result | Type |
|---|---|---|
| 1 | reddit.com/r/developersPak — "Best Software house in Lahore" | Forum thread |
| 2 | rextech.pk | **Company homepage** |
| 3 | superbcompanies.com — "Top 10 Custom Software Development Companies in Lahore" | Directory listicle |
| 4 | blog.abark.tech — "Leading Software Companies in Lahore" | Listicle (own blog) |
| 5 | goodfirms.co — Lahore directory (364 companies reviewed) | Directory |
| 6 | timelinedigi.com — "Best Custom Software Development Companies in Lahore (2026)" | Listicle (own blog) |
| 7 | prismatic-technologies.com — "Top Software Houses in Lahore" | Listicle (own blog) |
| 8 | reddit.com/r/developersPak | Forum thread |
| 9 | gluonerp.com | Company page |

**Nine of ten slots are lists, directories and forum threads. Exactly one company homepage broke through.**

> **UPDATE — 4 October 2026, re-checked. This finding has changed, and in your favour.**
>
> A fresh search for `software company in lahore` today returns a very different page 1. It is now **mostly small-company homepages**, not listicles:
>
> | Result | Type | What it shows above the fold |
> |---|---|---|
> | magma3c.com | Company homepage | Full street address (Awami Complex, Garden Town), phone, `Organization` schema |
> | blog.abark.tech | Listicle | — |
> | softvirtue.com/software-company-lahore | **Dedicated landing page** | Street address, "since 2010", "500+ projects", **fixed price from PKR 80,000**, FAQ, rich schema with `areaServed` + `serviceType` |
> | eforcelabs.com | Company homepage | Street address, phone, "5+ years", testimonials |
> | itgenesis.net | Company homepage | Two offices (Gulberg + Dubai), "since 2018", FAQ |
>
> **This is good news.** The earlier conclusion — "you cannot rank a homepage, so get into the listicles" — is no longer the whole truth. Companies at roughly WordbitX's size are now holding page 1 directly. The ceiling is lower than it looked.
>
> **What every one of them has that WordbitX does not:**
>
> 1. **A full street address on the page.** Every single one. WordbitX publishes only "DHA Phase 2, Lahore" with no plot or suite number. This is the same missing fact that blocks the Google Business Profile, and it is now visibly blocking the organic result too.
> 2. **A founding year stated plainly** — 2010, 2018, "5+ years".
> 3. **A concrete delivery number.** Softvirtue says "500+ projects delivered". *Do not invent one.* But WordbitX has real countable things — live products, demos, service lines — and currently states them abstractly.
> 4. **An FAQ that answers the actual query.** Softvirtue literally answers "Which is the best software company in Lahore for small businesses?" on the page that ranks.
> 5. **Starting prices.** Softvirtue publishes "from PKR 80,000". WordbitX has a `/pricing` page but does not surface a number on the Lahore money page.
>
> Note that Softvirtue ranks with a **dedicated `/software-company-lahore` landing page**, not its homepage — which is exactly the shape of the existing `/software-house/lahore` page. That page is already 1,326 words. It is missing the address, the year, the FAQ and the price, not the content.
>
> The directory and listicle strategy below is still worth doing — it is cheap and each listing is a backlink. But it is no longer the only route.

The usual strategy — "optimise my homepage until it ranks #1" — is competing for a single slot against NETSOL, Systems Limited and Arbisoft. The smarter strategy is to **occupy the other nine**. Four moves, all easier than ranking a homepage:

1. **Get listed in the directories that already rank.** GoodFirms, superbcompanies, Clutch, TechBehemoths, DesignRush, Sortlist. Mostly free. You appear on page 1 for your target keyword *and* collect a backlink from each. Nothing else on this page has that return per hour.
2. **Get into the listicles.** abark.tech, timelinedigi, prismatic-technologies are blogs run by competitors who rank by listing companies. Email them; several accept inclusion or paid placement. Being #6 on someone's list still puts you in front of the exact buyer.
3. **Publish your own listicle.** This is precisely what abark.tech and timelinedigi did: write the "best companies" article, rank *that*, and put yourself at the top. A post like "Software Houses in Johar Town, Lahore (2026)" is far easier to rank than a homepage, and it is honest as long as the list is genuinely useful.
4. **Be in the Reddit threads.** r/developersPak has recurring "best software house in Lahore" posts where people name companies. Participate genuinely and usefully — not with spam.

### 5.1b The competitor to study: rextech.pk

The one homepage that broke through is **Rex Technologies — founded 2016, based in Johar Town**, a Johar Town firm, close to the same market you sell into. It is not a NETSOL-scale company. It is a small Johar Town software house that got there, which means the slot is reachable.

Two things they do that you do not:
- Their schema sets `alternateName: "Software House in Lahore"` — the keyword declared as an entity name.
- Their title tag is literally `Software House in Lahore - Best Software Company in Lahore`.

### 5.1c Your Lahore page already exists — and it is good

`/software-house/lahore` is live: H1 **"Software House in Lahore"**, 1,333 words, `LocalBusiness` schema, and content that is genuinely local rather than templated — DHA and Bahria plot files, MM Alam Road restaurants, Shahalam and Hall Road wholesale markets, Arfa Tower, textile units on Ferozepur Road.

Compare it with NexiOrbit's `/software-house-lahore`, which currently outranks you: theirs is shorter and thinner. **Yours is the better page. It simply has no links pointing at it.**

So: do not write another page. Point links at the one you have.

**A word on `software company` as a target** — the bare, un-geo'd term. It is a global head term with no buyer intent; results are Wikipedia-style and enterprise brands. It will not bring a single project. Drop it from the list entirely and put that effort into `software house in johar town` and `software company in lahore`.

### 5.2 The diagnosis

| Cause | Detail |
|---|---|
| **Age** | 5–7 months. Google is slow to trust new commercial domains. Partly just time. |
| **Zero backlinks** | This is the real one. No external site vouches for you. |
| **Dilution** | 343 pages. Whatever tiny authority exists is divided 343 ways, so no page has enough to rank for anything competitive. |
| **Split brand** | Signals divided across two domains and two LinkedIn pages (Sections 1–2). |
| **No local presence** | No GBP (Section 4). |
| **Weak trust signals** | 13 seeded testimonials, AI team photos, no named clients. Google's quality systems and human buyers both penalise this. |

### 5.3 The method — in this order

**Stop creating pages. Start creating links and proof.** You already have more content than your authority can support.

**Stage 1 — Consolidate (week 1–2)**
301 the old domain · claim+merge LinkedIn · GBP · directory profiles · one consistent name.

**Stage 2 — Concentrate (week 2–4)**
Pick **8–10 money pages** — the ones that, if they ranked, would produce enquiries. Everything else exists to support them.

- Internal-link into them from all 33 blog posts and the related service pages, using descriptive anchor text.
- The programmatic combinations (service × city) that have no unique content: `noindex` them or merge them. They consume crawl budget and dilute equity. Keep the ones you can write genuinely differently.
- Make each money page the best page on the internet for its query: real pricing bands, real screenshots, real FAQs, a real process.

**Stage 3 — Earn links (ongoing, the slow part)** → Section 7.

**Stage 4 — Prove (ongoing)** → replace the 13 seeded reviews with real ones; publish named case studies; PropertiesPak as flagship.

**Stage 5 — Expand** — only after 3–4 money pages rank, build the next cluster.

**Honest timeline:** long-tail buyer-intent terms begin moving at 3–6 months. Competitive head terms ("software company Lahore") are a 12–24 month project against sites with a decade of links. Plan accordingly — and do not let SEO be your only channel while you wait (Section 8).

---

## 6. Keyword plan for your three markets

The rule: **go after buyer intent, not volume.** "software development company" sends tyre-kickers and is unwinnable. "pos software price in pakistan" sends buyers and is winnable.

Three patterns to target: `X + price/cost` · `X + city/country` · `hire + X`.

### 6.1 Local market (Lahore / Pakistan)

| Winnable in 3–9 months | Not yet |
|---|---|
| software house in johar town | software company lahore |
| pos software price in pakistan | pos software |
| website development cost in lahore | web development company |
| inventory management software pakistan | inventory software |
| custom crm price pakistan | crm software |
| restaurant pos software lahore | restaurant software |

You already have blog posts targeting several of these (`website-development-cost-pakistan`, `pos-software-for-retail-pakistan`, `restaurant-pos-software-pakistan`, `software-company-lahore`). **Upgrade those into money pages** instead of writing new ones.

### 6.2 Universities & education (for development projects)

Your strongest proof already exists: the education demo with 37 modules, 5 role portals, JazzCash/Easypaisa fee collection.

| Target |
|---|
| school management system pakistan / price |
| university management system pakistan |
| campus management software lahore |
| college erp software pakistan |
| online admission portal for schools pakistan |
| student fee management software pakistan |
| multi campus management software |

Competitors here are EduSuite, FutureSol (20+ yrs), Vidyalaya (25 yrs), SmartCampuses. They are established but their products *look* dated — your demo is visibly more modern, which wins the meeting even when it loses the search result.

### 6.3 International

| Target |
|---|
| hire flutter developers pakistan |
| offshore software development company pakistan |
| dedicated development team pakistan |
| shopify developer pakistan |
| white label development partner pakistan |

Note: for international work, **Clutch/Upwork/LinkedIn beat Google**. Buyers in the US/UK search Clutch and Upwork, not "software company". Weight your effort accordingly.

### 6.4 FBR compliance — the highest-intent gap, now built

Before this week the string "FBR" appeared **zero times** anywhere in the site's content. That was the single worst gap in the keyword inventory, because it is the one category where the buyer is not browsing — they are legally compelled, they have a deadline, and they are looking for someone who understands the rule rather than someone who is cheapest.

Four pages now cover it:

| Page | Target query |
|---|---|
| `/topics/fbr-pos-integration` | fbr pos integration, fbr integrated pos software |
| `/topics/fbr-digital-invoicing` | fbr digital invoicing, e-invoicing software pakistan |
| `/topics/tier-1-retailer-pos-requirements` | tier 1 retailer, am i a tier 1 retailer |
| `/topics/fbr-restaurant-pos` | fbr restaurant pos, restaurant billing software pakistan |

Three price pages were added alongside them, because "price" queries are the other half of a compelled buyer's search: `/blog/pos-software-price-in-pakistan`, `/blog/mobile-app-development-cost-pakistan`, `/blog/school-management-system-price-pakistan`.

**The constraint that governs every word of this cluster — do not let anyone edit it away.** WordbitX is **not** an FBR licensed integrator. Under section 2(15A) of the Sales Tax Act, 1990, only a licensed person may provide the electronic invoicing system, and only a licensed integrator may configure a registered person's software for transmission. PRAL does it free of cost under rule 150XF, and FBR charges the registered person nothing.

So the claim is always: *we build the POS/ERP so it produces compliant invoice data, and the fiscal link runs through PRAL or the licensed integrator you appoint.* Never "FBR approved", "FBR certified" or "we integrate you with FBR". Competitors in this space make exactly those claims, and that is the opportunity — a page that says plainly what it is not is the one a compliance-anxious buyer trusts. It is also the only version that survives a client asking to see the licence.

This cluster will not rank on its own. Like everything else in section 5.3, it needs links. The specific advantage here is that FBR compliance is a topic accountants, tax consultants and chambers of commerce actively link to, which makes it the easiest page on the site to earn a citation for.

---

## 7. Backlinks — the one thing you are actually missing

Everything else is already in decent shape. This is the gap. Realistic sources, easiest first:

### Tier 1 — you control these (do this week)
1. **PropertiesPak.com** → footer "Built and operated by WordbitX" link. Your own property, a relevant link.
2. **All 7 demo sites** → same footer credit, linked.
3. **GitHub org profile** → website link.
4. **All social bios** → website link.
5. **Email signature** → website link.

### Tier 2 — free, just effort
6. Directory profiles from Section 3 — each carries a link.
7. **PASHA / PSEB** membership pages.
8. Lahore chamber of commerce, local business directories.
9. Product Hunt launch for PropertiesPak.
10. Answer questions on Reddit, Quora, Stack Overflow with your real expertise — link only where genuinely useful.

### Tier 3 — the high-value play, and it doubles as your university strategy
11. **`.edu.pk` links.** University domains carry serious authority and are hard for competitors to get.
    - Offer free final-year-project mentorship to CS departments (UET, PU, COMSATS, FAST, UCP, Superior, LCWU).
    - Sponsor or judge a university hackathon or software exhibition.
    - Offer a free workshop: "Building production software with Next.js".
    - Offer a paid internship programme.
    - Each of these typically gets you listed on a university or society page — **with a link**.
    - **And you are now in the building, talking to the exact department that specifies campus software.** This is the best link-building and the best business development you can do simultaneously. Do this one.
12. **Guest posts** on Pakistani tech publications and startup blogs.
13. **Free tool** — a "Website Cost Calculator Pakistan" or "School ERP requirement checklist". Tools attract links on their own.

**Target:** 20–30 genuine referring domains in 6 months. That alone would move you past most of the local competition.

---

## 8. Getting clients in 30–60 days (not 6 months)

SEO will not feed you this quarter. These will. Run them in parallel with everything above.

### 8.1 PropertiesPak is a lead machine you already built
This is your biggest unused asset and you have not been using it as one:
- **Every dealer and agency listing on PropertiesPak is a prospect** for a website, a CRM and marketing services. You have their contact details and a warm reason to call. Nobody else has this list.
- "We built Pakistan's property portal" is a far stronger opening line than any demo. Lead with it.
- Make it the flagship case study on the home page — above the demos, not among them.

### 8.2 Marketplaces (fastest to first payment)
Upwork, Fiverr, PeoplePerHour. Low rates at first, deliberately, to build the review count. Five 5-star Upwork reviews are worth more to an international buyer than your whole website right now. Clutch reviews follow from these.

### 8.3 Local outbound — Lahore
- Johar Town, Model Town, Gulberg: retail chains, pharmacies, clinics, restaurants, schools. Walk in with a tablet showing the live POS demo.
- The demos exist precisely for this. Show, do not pitch.
- Offer a small, fixed first project (a website, a POS pilot for one branch) rather than a big proposal.

### 8.4 Universities — direct
- Target: registrar, IT director, head of CS department.
- Offer: free migration of one department + a 3-month pilot.
- Combine with the campus-visit link-building in Section 7 Tier 3 — same trip, two outcomes.

### 8.5 White-label partnerships
Agencies in the UK/US/UAE who sell more than they can build. One good partner can equal steady monthly work. LinkedIn outreach to small agency owners.

### 8.6 Convert your existing LinkedIn effort
You post daily already. Posting is not outreach. Add: **10 targeted connection requests + 5 personalised messages per day**, to business owners in your target segments. Same time cost, dramatically different outcome.

---

## 9. Weekly operating rhythm

Pick one owner for each line. Unowned work does not happen.

| Cadence | Task |
|---|---|
| **Daily** | 10 LinkedIn connections + 5 personal messages · 1 social post · reply to every enquiry within 1 business day |
| **Weekly** | 1 GBP post · 1 upgraded money page (not a new page) · 5 outbound emails to universities/businesses · 2 new directory or link placements · 1 marketplace proposal batch |
| **Monthly** | Request 3 reviews (Google, Clutch) · 1 real case study published · review Search Console: impressions, clicks, which queries moved · 1 university/community activity |
| **Quarterly** | Re-assess keyword targets · prune or merge pages that get zero impressions |

---

## 10. What to measure

Install **Google Search Console** if it is not already (and Bing Webmaster Tools — free, and it feeds ChatGPT search).

| Metric | Where | Target at 90 days |
|---|---|---|
| Indexed pages | Search Console → Pages | >250 of 343 |
| Total impressions | Search Console | Rising month on month |
| Queries with any impression | Search Console | 200+ |
| Referring domains | Ahrefs free / Search Console → Links | 20+ |
| GBP calls + direction requests | GBP Insights | First calls by week 6 |
| Real Google reviews | GBP | 10 |
| Enquiries from the website | Form submissions | 5+/month |

**Do not measure rankings weekly.** They bounce, and watching them causes bad decisions. Measure impressions and referring domains — those move first and they move honestly.

---

## 11. Priority order — if you only do five things

Focus is **getting projects**, so this list is ordered by time-to-first-enquiry, not by SEO purity.

1. **Google Business Profile.** The map pack renders *above* the listicles that own page 1 for `software company in lahore`. It is the only fast route to being visible for that exact query, and it produces phone calls rather than impressions.
2. **Get listed in the directories that already rank** — GoodFirms, Clutch, TechBehemoths, superbcompanies, DesignRush, Sortlist. This is double-counted value: you appear on page 1 for your target keyword *and* each listing is a backlink. Cheapest win available.
3. **Attach the 5–7 new employees to the LinkedIn page** and push followers past 100. Solves the dead-page problem without needing LinkedIn's permission.
4. **Make PropertiesPak your flagship proof** on the site, and work its dealer list as an outbound lead list. You built a property portal — that sentence sells better than any demo.
5. **Publish your own "Software Houses in Lahore" listicle** and go to the universities in person. Both produce links; the second also produces contracts.

Everything else on this page is real, but these five change the trajectory.
