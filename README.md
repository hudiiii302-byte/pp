# WordBitX — Software & Digital Solutions Website

Production Next.js 16 (App Router) website for **WordBitX**, built with TypeScript, Tailwind CSS v4, Drizzle ORM and PostgreSQL.

> **No binary assets required.** Every brand illustration is an inline SVG React component, the social share card is generated from code, and photography is loaded from remote URLs through `next/image`. There is intentionally **no `public/` folder** — the whole project is plain source files, so nothing can be lost when the repository is downloaded, zipped or committed.

---

## Quick start

```bash
npm install
cp .env.example .env          # then set your SMTP_* or RESEND_API_KEY
npx drizzle-kit push --config=drizzle.config.json   # optional, only if using a database
npm run dev                   # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## 📧 Contact form email — how delivery works

Enquiries and newsletter signups are emailed to **wordbitx@gmail.com**.

### Step 1 — Activate the inbox (ONE TIME, required)

The site uses **FormSubmit**, a relay that needs no API keys. The first time an
enquiry is sent, FormSubmit emails **wordbitx@gmail.com** a message titled
**"Activate Your Form"** containing an **Activate Form** button.

1. Open the **wordbitx@gmail.com** inbox (also check **Spam** / **Promotions**).
2. Look for the email from **FormSubmit**.
3. Click **Activate Form** — once.

From that moment every enquiry and subscription arrives automatically. Until the
link is clicked, FormSubmit holds submissions and the visitor sees the WhatsApp /
Email handoff screen instead.

### Step 2 (optional) — Direct delivery without any activation

Add credentials for a real mail provider and the relay is bypassed entirely.
On **Vercel → Settings → Environment Variables**, then **Redeploy**:

**Gmail (easiest)**

| Name | Value |
| --- | --- |
| `GMAIL_USER` | `wordbitx@gmail.com` |
| `GMAIL_APP_PASSWORD` | 16-character App Password |

Get the App Password: <https://myaccount.google.com/security> → enable
**2-Step Verification** → <https://myaccount.google.com/apppasswords> → create one
for "Mail". Your normal Gmail password will **not** work.

**Resend** — set `RESEND_API_KEY` (best deliverability, no Gmail limits).
**cPanel SMTP** — set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

Providers are tried in order: Gmail → Resend → SMTP → FormSubmit.

### Check the current status

Open `https://your-site.com/api/health`:

```json
{ "email": { "provider": "formsubmit", "deliversTo": "wordbitx@gmail.com" } }
```

`"provider": "gmail"` means credentials are live and no activation is needed.

### The form never dead-ends

If delivery is not yet possible, the visitor is **not** shown an error. They get a
"one tap to send" screen with **Send on WhatsApp** and **Send by Email** buttons
pre-filled with their whole brief. Every enquiry is also written to the server logs
and to the database when one is attached — so a lead is never lost.

## Founder photo

The About page shows a branded **AM** monogram for the founder (no local image file).
To use a real photo, set `founder.photo` in `src/lib/team.ts` to a **remote https URL**
(for example an image hosted on your domain or CDN). Do **not** put files in `public/` —
that folder is intentionally omitted so downloads never lose images.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | one provider required | Deliver enquiries via your mailbox |
| `RESEND_API_KEY` | one provider required | Deliver enquiries via the Resend HTTPS API |
| `MAIL_FROM` | no | Sender shown on the enquiry email |
| `MAIL_TO` | no | Recipient (defaults to `info@wordbitxtech.com`) |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | one provider required | Deliver enquiries through Gmail |
| `DATABASE_URL` | no | Optional PostgreSQL copy of enquiries and newsletter signups |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GTM_ID` | no | Google Tag Manager container (`GTM-XXXXXXX`) |
| `GOOGLE_SITE_VERIFICATION` | no | Google Search Console verification token |

## Site map

| Route | Description |
| --- | --- |
| `/` | Homepage: hero, pillars, 14 services, showcase, why-us, technologies, process, industries, portfolio, insights, FAQ, CTA |
| `/about` | Company, mission, vision, values, approach, technology philosophy |
| `/services` | All services, grouped navigation, engagement models, FAQ |
| `/services/[slug]` | 18 dedicated service pages with unique content and schema |
| `/portfolio` | Filterable project grid |
| `/portfolio/[slug]` | 14 project profiles (overview, challenge, solution, features, tech, outcomes) |
| `/blog` | Featured post, working search and category filters |
| `/blog/[slug]` | 8 long-form articles with TOC, related services, prev/next |
| `/contact` | Validated enquiry form saved to PostgreSQL, WhatsApp CTA |
| `/privacy-policy`, `/terms-conditions`, `/cookie-policy` | Legal pages |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated automatically |

## Where to edit content

| What | File |
| --- | --- |
| Company details, phone, email, socials, nav | `src/lib/site.ts` |
| Services 1–7 | `src/lib/services-a.ts` |
| Services 8–15 | `src/lib/services-b.ts` |
| Industry portal services (real estate, hospital, education) | `src/lib/services-c.ts` |
| Homepage industry solutions + housing societies | `src/lib/solutions.ts` |
| Portfolio projects | `src/lib/portfolio.ts` |
| Blog articles | `src/lib/blog.ts` |
| Technology icon grid | `src/lib/technologies.ts` |
| Showcase websites (live projects + demos) | `src/lib/demos.ts` |
| Photography URLs | `src/lib/media.ts` |
| Brand illustrations (SVG) | `src/components/brand-visuals.tsx` |
| Logo mark and wordmark | `src/components/icons.tsx` (`Logo`) and `src/app/icon.svg` |
| Enquiry email template | `src/lib/mailer.ts` |
| Legal copy | `src/lib/legal.ts` |
| Founder name, designation, message | `src/lib/team.ts` |

Adding a service, project or article to the arrays above automatically creates its page, adds it to navigation/listings and includes it in `sitemap.xml`.

## Showcase websites (live projects & demos)

`src/lib/demos.ts` drives the showcase on the home page, `/portfolio`, the industry
pages and the AI assistant. Each entry has a `kind`:

- `kind: "live"` — a real, publicly available product built and run by WordbitX.
  Labelled **Live Project** and excluded from the demo disclaimer.
  Currently: **Properties Pak — https://propertiespak.com**.
- `kind: "demo"` — a sample website built to show capability. Labelled **Demo**
  everywhere, never presented as a client case study.

Hosts listed in `ownedHosts` get normal (dofollow) links; everything else is
`nofollow`.

### Making the showcase load instantly

**On Vercel this is already automatic.** `package.json` defines a `vercel-build`
script, which Vercel runs in preference to `build`:

```
vercel-build = npm run demo:shots || true && next build
```

So every deployment refreshes the screenshots before building. If the screenshot
service is slow or down, `|| true` lets the build continue and those cards fall
back to the runtime proxy — a deploy can never fail because of a screenshot.

To run it by hand (e.g. locally, then commit the files):

```bash
npm run demo:shots            # screenshot every showcase site into public/demos
npm run demo:shots -- motor   # just one
```

Without those files the site falls back to `/api/demo-shot/[id]` — a same-origin
proxy that caches the screenshot service for a week. Either way the card's
branded browser frame is painted from the first HTML byte, so a card is never
blank while an image loads.

## Using your own images (optional)

Most photography is remote (Pexels URLs in `src/lib/media.ts`). Brand art is inline SVG
in `src/components/brand-visuals.tsx`. The social card is generated by
`src/app/opengraph-image.tsx`. The only disk-read images are the optional showcase
screenshots in `public/demos` (see above). To add a photo, paste an `https://` URL into `src/lib/media.ts`
or `src/lib/team.ts` and whitelist the hostname in `next.config.ts` if it is new.

## SEO features

- Unique title, description, canonical and Open Graph metadata per page
- Organization, WebSite, Service, BreadcrumbList, BlogPosting and FAQPage JSON-LD
- Dynamic `sitemap.xml` and `robots.txt`
- 301 redirects for legacy URLs in `next.config.ts`
- Semantic HTML, single H1 per page, descriptive alt text, breadcrumbs
- Statically generated pages (fully crawlable HTML, no JS required for content)
