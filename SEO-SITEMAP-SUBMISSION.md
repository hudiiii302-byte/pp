# WordbitX — sitemap guide

## Canonical host

`https://wordbitxtech.com/` redirects to `https://www.wordbitxtech.com/`.

Submit sitemaps only on the **www** Search Console property.

## Submit this one file

```text
https://www.wordbitxtech.com/sitemap-index.xml
```

Do **not** also submit `sitemap.xml` or every child file. That lists the same URLs twice and is how GSC showed ~250 discovered URLs for 126 unique pages.

`robots.txt` points only at the index.

## Child sitemaps (referenced by the index)

| File | What it lists |
| --- | --- |
| `/sitemaps/core.xml` | Home, About, Services, Industries, Global, Technologies, Portfolio, Blog, Topics, Contact, HTML sitemap |
| `/sitemaps/services.xml` | Dedicated service pages |
| `/sitemaps/industries.xml` | Industry pages |
| `/sitemaps/global.xml` | Pakistan, USA, UK, UAE, Canada, Australia |
| `/sitemaps/technologies.xml` | React, Next.js, Flutter, Node, Python, Shopify |
| `/sitemaps/portfolio.xml` | Portfolio / demo profiles |
| `/sitemaps/blog.xml` | Articles |
| `/sitemaps/topics.xml` | Software topic guides (HMS, ERP, CRM, POS — not news or medical advice) |
| `/sitemaps/legal.xml` | Privacy, terms, cookies, disclaimer, editorial |

`/sitemap.xml` still exists as a combined dump for debugging. It is **not** in the index.

## Intentionally excluded (extra / harmful if added)

- Society pages (`/societies/*`) — `noindex`; copy is now software-first (portals/CRM). Keep noindex until each URL is unique enough to index without becoming a doorway set.
- Demo hosts (`luxury.`, `ecom.`, Hostinger preview) — different sites, not this sitemap
- Apex / `http://` / old slugs that 301 — Google already lists those as “Page with redirect”
- `/api/*` — blocked in robots
- Image / video / news sitemaps — no unique first-party media or Google News content
- Empty `sitemaps/societies.xml` — left so an old GSC submission returns zero URLs instead of stale ones. Delete that submission in GSC.

## HTML sitemap

`https://www.wordbitxtech.com/sitemap` lists the same indexable URLs for people and internal links.

## After deploy

1. Search Console → Sitemaps → keep **only** `sitemap-index.xml`.
2. Delete extra `sitemap.xml` and `sitemaps/societies.xml` submissions.
3. Do not request indexing for redirect URLs.
