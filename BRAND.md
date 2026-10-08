# WordbitX brand colours

Settled 4 October 2026. Before this, the site, the logo lockup and the logo mark were three
different greens, so the logo and the buttons read as two different companies.

## Source of truth

The logo files in `public/brand/` are the source of truth. Both values below were sampled from the
actual pixels, not eyeballed:

| Colour | Hex | Sampled from |
| --- | --- | --- |
| **Brand green** | **`#1CA830`** | `public/brand/wordbitx-lockup.png` (dominant green, 819 px) |
| **Brand navy** | **`#052767`** | `public/brand/wordbitx-lockup.png` (dominant navy, 3,661 px) |
| Mark green | `#34B02A` | `public/brand/wordbitx-mark.png` |

`#34B02A` is a slightly different green in the standalone W mark. It is **not** used anywhere in the
UI — when the mark is next re-exported it should be brought to `#1CA830`. Until then the lockup wins,
because that is what appears on social posts and in the header.

## The scale

Defined once in `src/app/globals.css` under `@theme`. Nothing should hard-code these values; use the
Tailwind `brand-*` and `navy-*` utilities.

| Token | Hex | Role |
| --- | --- | --- |
| `brand-50` | `#eef9ef` | tinted panels, hover washes |
| `brand-100` | `#cbeed0` | light borders |
| `brand-200` | `#9fdda8` | mint text on dark surfaces |
| `brand-300` | `#61d171` | dark-surface borders, icons |
| `brand-400` | `#2ec243` | accents and dots on dark |
| **`brand-500`** | **`#1ca830`** | **primary buttons — the logo green exactly** |
| `brand-600` | `#148323` | button hover, brand text on white |
| `brand-700` | `#0e671b` | headings and links on light surfaces |

Lighter tints deliberately lose saturation so the family stays the logo's leaf green instead of
turning into a neon highlighter.

| Token | Hex | Role |
| --- | --- | --- |
| `navy-950` | `#030814` | page background (dark sections) |
| `navy-900` | `#050d21` | card background on dark |
| `navy-850` | `#071531` | raised surface |
| `navy-800` | `#0a1c3f` | gradient start |
| **`navy-700`** | **`#052767`** | **the logo navy** — gradients and mid-tone surfaces |
| `navy-600` | `#1a3a68` | rare, decorative |
| `navy-500` | `#2a4f83` | rare, decorative |

`navy-950` through `navy-800` are page and card backgrounds and were **not** changed — the owner
asked for the dark scheme to stay as it is. Only the mid-tone that reads as a colour was brought to
the logo navy.

## Contrast

Every ratio improved or stayed comfortably above threshold. White text unless stated otherwise.

| Surface | New | Old |
| --- | --- | --- |
| white on `brand-400` | 2.36:1 | 2.07:1 |
| white on `brand-500` (primary button) | **3.14:1** | 2.69:1 |
| white on `brand-600` | **4.88:1** — clears AA for body text | 3.98:1 |
| white on `brand-700` | 7.06:1 | 5.81:1 |
| `brand-200` on `navy-900` | 12.32:1 | 13.76:1 |
| `ink-900` on `brand-50` | 16.94:1 | 17.00:1 |
| white on `navy-700` `#052767` | 14.07:1 | — |

Icons and other non-text graphics are held to a 3:1 floor; `brand-500` now clears it, which the old
emerald did not.

## Colours that must never be swept

These are third-party or functional colours and are excluded from any colour migration. The sweep
script that performed this change had them in an explicit protected list.

`#25D366` and `#128C7E` (WhatsApp) · `#0D6E62` · `#1F9A4A` · `#6CE59A` · `#28C840` (macOS window
dot) · `#34D399` · `#6FB8FF` · `#0B1B3A`.

## How the change was made

A single scripted sweep over `src/` and `public/` across `.ts`, `.tsx`, `.css`, `.svg`, `.json` and
`.mjs`: **56 hex replacements and 42 `rgb()` / `rgba()` triplet replacements across 21 files**,
including the favicon (`src/app/icon.svg`), the OpenGraph image, the transactional email template
(`src/lib/mailer.ts`) and the brand illustration set (`src/components/brand-visuals.tsx`).

Verified against the **served** stylesheet, not the source: zero occurrences of the old emerald
family remain, and every protected colour survived.
