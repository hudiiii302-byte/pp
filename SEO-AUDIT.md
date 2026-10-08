# WordbitX SEO audit

> **Superseded in part (3 Oct 2026).** See `GROWTH-PERFORMANCE-AUDIT.md` for the
> current growth, keyword and Core Web Vitals plan, and for the Properties Pak
> (`propertiespak.com`) change — the two real-estate demo subdomains were
> replaced by one **live** product, labelled *Live Project* rather than *Demo*.

Honest snapshot after the software-first / societies / linking pass. This does **not** claim rankings, traffic, or Google approval.

Canonical: `https://www.wordbitxtech.com`

## Page count

| Cluster | Count | Index |
| --- | ---: | --- |
| Core hubs | 11 | yes |
| Services | 60 | yes |
| Industries | 13 | yes |
| Topics | 120 | yes |
| Blog guides | 33 | yes |
| Global markets | 6 | yes |
| Technologies | 6 | yes |
| Portfolio / demo profiles | 25 | yes |
| Legal | 5 | yes |
| Societies | 18 + hub | **noindex, follow** |
| **Approx indexable** | **~279** | |

Plus 404 (`noindex`). `/api/*` disallowed in robots.

Do not treat ~279 as a problem. Do not add pages to “get to 500”.

## What this pass changed

- Homepage H1 stays worldwide (not “in Lahore” / not “Global … in Pakistan”).
- Homepage now links Software, Web, Mobile, AI, E-commerce, Business software, Industries, Global, Portfolio, Topics.
- Homepage service count uses the real catalogue length (was stuck on 26).
- `/societies` and `/societies/[slug]` are software-first (portal / CRM / instalments). Plot tables are secondary context with a “we do not sell plots” FAQ. Still **noindex**.
- Industry pages link related existing topics. Topic pages link related existing industries.
- Display brand in chrome: **WordbitX**. Legal name stays on legal/company copy only.
- `SEO-TOPIC-MAP.md` lists current URLs + a short P1 gap list. It is not a 500-page queue.

## Clusters (keep these; do not fork new trees)

- Services → `/services`, `/services/[slug]`
- Industries → `/industries`, `/industries/[slug]`
- Topics → `/topics`, `/topics/[slug]`
- Guides → `/blog` (do **not** add `/guides`)
- Markets → `/global`, `/global/[slug]`
- Tech → `/technologies`, `/technologies/[slug]`
- Proof → `/portfolio` (demos labelled as demos)
- Society software examples → `/societies` (noindex)

## Technical SEO (already in place; verify after each deploy)

| Item | Status |
| --- | --- |
| Sitemap to submit | Only `https://www.wordbitxtech.com/sitemap-index.xml` (robots.txt now advertises the index only) |
| Combined `/sitemap.xml` | Debug dump — **do not submit** |
| `robots.txt` | Allows `/`, disallows `/api/`, points at the index, host is www |
| Canonicals | Per-page `alternates.canonical`; site URL is www |
| Apex → www | Vercel redirect |
| Societies | Meta `noindex, follow`; **not** in sitemap groups |
| Schema | Organization, WebSite, FAQ where the FAQ is visible; do not add junk types |
| 404 | Custom page, `noindex` |
| Trailing slashes | Next app routes without trailing slash |

## Indexing recommendations

1. Merge/deploy `main` to the Vercel project that should own www (`wordbitx-www` if that is production).
2. In Search Console, submit **only** the sitemap index. Request index on homepage + money services after deploy.
3. Do **not** request indexing for `/societies` or `/societies/*`.
4. Wait for coverage on the ~279 indexable URLs before adding more content URLs.
5. Measure non-brand queries before expanding the topic library.

## Intentionally not created

- 50–100 extra industry pages (Clinics, Doctors, Dentists as separate industries)
- A `/guides/` or `/use-cases/` tree that would clone `/blog` and `/topics`
- Country × service doorway pages
- Medical advice or news
- Fake awards, clients, testimonials, or traffic claims
- Indexing society plot tables

## Remaining opportunities (P1 first)

1. Live deploy + GSC on www (this is the ranking bottleneck, not missing pages).
2. Google Business Profile + consistent NAP (`www`, Johar Town office, both phones).
3. One implementation blog: how to build a real estate portal (only if it is a build sequence, not a second definition of `/topics/property-listing-website`).
4. Strengthen thin **existing** services (WooCommerce, ASO) if they are actually sold — do not add twins.
5. Unique Saudi market page only with real local context.
6. Revisit indexing `/societies` **hub only** after the software-first copy has been live and is not a doorway set.

## Internal linking (this pass)

- Home → core services + industries + global + portfolio + topics + contact
- Industry → services, projects, posts, **topics**
- Topic → services, posts, siblings, **industries**
- Society → industry, portal service, CRM/listing/agent topics, demo profile, blogs

Do not put hundreds of URLs in the header.

## Brand / E-E-A-T facts we will not invent

Use only: WordbitX; legal name on legal pages; founder Awais Malick on About if already published; DHA Phase 2, Lahore; `info@wordbitxtech.com`; +92 325 1888841; +1 (929) 619-7699; LinkedIn `/company/wordbitx`. Demo projects stay labelled demos. Properties Pak (propertiespak.com) is a real live product and is labelled Live Project, not a demo.
