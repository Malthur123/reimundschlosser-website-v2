# reimundschlosser.com v2 — Design Specification (FINAL)
**Style: "Deep Current, Warm"** · Design phase completed July 2026
Reference mockups: `homepage-v7.html` (authoritative), `portfolio-v1.html`, `contact-v1.html`

## 1. Design concept
Dark, cyber-organic, warm. Dusk over water, not midnight: modern and techy but cosy and human. Space imagery appears only as ambient mood (faint stars, glowing accents, soft "nebula" glows) — never as heavy-handed terminology in copy. Reimund is in HR: the site must always read "person," never "product."

## 2. Colour palette (CSS custom properties)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#10222E` | Page background |
| `--surface` | `#173040` | Cards, panels, form card |
| `--surface-2` | `#1D3B4E` | Elevated surfaces, gradients |
| `--ink` | `#F4F1E8` | Body text (warm cream) |
| `--muted` | `#A3B8C2` | Secondary text |
| `--teal` | `#3FE0C5` | Primary accent |
| `--coral` | `#FF8E7A` | Warm secondary accent |
| `--sun` | `#FFD08A` | Tertiary accent |

Rules: teal is the workhorse; coral/sun support. No pure black/white. Gradient text (teal→sun) only for one hero phrase and one word in page titles ("Portfolio", "Touch").
Map hover shades (lighter variants): Europe `#7CEEDD`, Americas `#FFB9AB`, APAC `#FFE2B0`.

## 3. Typography
- Display: **Sora** (400/600/700). Body: **Lato** (400/700), line-height ~1.7.
- Hero h1 clamp(2.2–3.4rem); page h1 clamp(2.1–3rem); section h2 ~1.6rem; body 1rem; ledes 1.08–1.1rem.
- Eyebrows: uppercase, letterspacing .16em, bold, teal.
- Navbar brand: **REIMUND*SCHLOSSER*** — all caps, surname in teal.

## 4. Global components
- **Nav:** sticky, blur backdrop rgba(16,34,46,.8), thin teal bottom border. Active link: ink + 2px teal underline.
- **Background:** faint star specks (tiny radial-gradient dots, fixed attachment) on all pages.
- **Ambient glow "cells":** blurred teal + gold radial gradients behind hero/page heads; drift animation on homepage only; respect `prefers-reduced-motion`.
- **Buttons:** pill radius 999px. Primary = solid teal, dark-teal text `#0B2B25`. Secondary = coral outline. Back-link = teal outline. Hover: translateY(-2px) (back-link: translateX(-3px)).
- **Cards:** `--surface`, 20px radius, thin teal border rgba(63,224,197,.14), hover border gold rgba(255,208,138,.5), lift on hover where interactive.
- **Footer (all pages):** 3 columns — [Reimund Schlosser / Global People & Culture Business Partner] · [Location / Bromley, South London, UK] · [Contact / hey@reimundschlosser.com] — plus centred "© 2026 Reimund Schlosser". Left/centre/right aligned; stacks centred on mobile.

## 5. Homepage (final structure & copy status — see homepage-v7.html)
1. **Hero:** eyebrow "HR Business Partner · People-first, everywhere"; headline "HR that feels like an ecosystem — *alive, connected, warm.*" (gradient on italic part); intro copy FINAL (9 years HR, Germany→London for love, gaming/tech passion, work should feel human); CTAs "See my work" (→Portfolio) + "Say hello" (→Contact); portrait in organic blob frame (border-radius 54% 46% 48% 52% / 48% 52% 48% 52%, teal edge, offset gold ring).
2. **Companies I've worked with:** loose centred "nebula" cloud of 6 logo pills at varied vertical offsets/sizes over soft teal+gold blurred glow. Logos: Vodafone, Activision Blizzard, Gilead Sciences, Teads, toom Baumarkt, Peloton — recoloured warm cream (#F4F1E8) with transparency for dark background. Copy: "A few of the places that shaped how I think about people and work — from global gaming and tech to retail and life sciences."
3. **My professional journey:** London skyline banner above. Three narrative chapter cards (NOT a CV timeline): **Roots** (Germany — Vodafone internship, toom Baumarkt), **Momentum** (London tech & gaming — Gilead, Peloton, Activision Blizzard incl. Microsoft acquisition + EMEA Disability Network), **Today** (Teads — global Commercial partnering). Big gradient chapter-word left, narrative paragraph right, company tag pills below. No dates.
4. **Global HR experience:** jsVectorMap world map, region-coloured fills — Europe teal (GB DE FR ES IT AT CH NL SE PL SK SI RO), Americas coral (US MX BR), APAC gold (SG ID PH JP KR AU) + Hong Kong as gold marker (not a map region). Non-listed countries rgba(163,184,194,.16). Hover on listed countries → lighter same-family shade (Section 2); tooltips only for listed countries; zoom/pan disabled. Centred region key + centred country chips below (23 countries).
5. **Bridging cultures, building teams:** Shanghai skyline banner above. Lede copy FINAL ("Some careers follow a straight line; mine follows an orbit…"). Three route cards: **Cologne → London**, **Hong Kong → Shanghai**, **Commercial ↔ Human** (card copy: draft, Reimund may tweak).
6. Footer.

## 6. Portfolio page (see portfolio-v1.html)
- Centred h1 "My **Portfolio**" + centred intro paragraph (draft, editable).
- 3×3 tile grid (→2 col ≤900px, →1 col ≤600px). Tiles: image area (~170px; duotone gradient placeholders + big translucent number until real images exist), title, teal "View project →". Hover lift + gold border.
- 9 projects: Strategic Business Partnering · Global Workforce Strategy · Org Design and M&A Integration · Data-Driven Decision Support · Succession Planning & Executive Coaching · High-Performance Culture Design · Global Total Rewards Strategy · Strategic Risk & Compliance · Inclusive Culture and DE&I Strategy.
- **Project detail page template:** h1 title → one-paragraph summary → full-width image banner → sections "My Role & Responsibilities", "The Challenge", "The Solution & Outcome" (gradient dash before each h2; placeholder copy currently in mockup) → "← Back to Portfolio" teal outline button. Build as Eleventy template + data (9 pages, easily extendable).

## 7. Contact page (see contact-v1.html)
- Centred h1 "Get in **Touch**" + intro copy FINAL (carried from v1 site).
- Form card (max-width 680px): Name, Email Address, Subject, Message (textarea), teal pill "Send Message". Inputs: dark fill rgba(16,34,46,.6), 12px radius, focus = teal border + soft teal glow ring.
- "Prefer email?" fallback line linking hey@reimundschlosser.com.
- Build: Netlify Forms (`data-netlify="true"`, honeypot field), submissions to hey@reimundschlosser.com.

## 8. Blog (design deferred to build phase — guidance)
- Post list: card grid in portfolio-tile style (post image + headline; consider date in `--sun` eyebrow style). Post page: image banner + measure-limited long-form text (~70ch), slightly larger body size for reading comfort, back link.
- Data model set in Decap CMS config: title, date, teaser image, body (markdown). Keep fields minimal.
- Tune typography with a real migrated post, not lorem ipsum.

## 9. Imagery & assets (delivered, processed)
- Portrait (monstera background — harmonises with palette), London skyline, Shanghai skyline. Banners get dark-teal tint overlay (two stacked gradients ~rgba(16,34,46,.18–.42) + rgba(29,59,78,.28)) so daytime photos blend with dark theme; small frosted city-name pill.
- 6 logos recoloured cream with alpha, trimmed, 64px tall masters. In mockup: base64-embedded; in build: separate optimised files (WebP/AVIF for photos, PNG/SVG for logos), proper `alt` text.
- To verify before launch: logo usage permissions (text-styled fallback possible).

## 10. Motion & accessibility
- Ambient only: hero cell drift, hover lifts/brightens. All animation behind `prefers-reduced-motion`.
- WCAG AA contrast maintained; visible teal focus styles; aria-labels on image divs and map.

## 11. Tech & build notes (Phase 2 — Claude Code)
- Eleventy + Decap CMS (/admin) + GitHub + Netlify (check if free tier suffices vs current $9/mo).
- jsVectorMap for world map (same config as mockup: series regions + HK marker + CSS hover overrides).
- All tokens as CSS custom properties exactly per Sections 2–3. Google Fonts or self-hosted Sora/Lato.
- Content: migrate from v1 repo, partially rewritten per mockup copy. CV available for reference.
- Open items: real project images + copy for 9 portfolio pages (metrics!), blog design + post migration, logo permissions check, confirm "9 years" phrasing over time.
