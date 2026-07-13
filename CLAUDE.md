# reimundschlosser.com v2

Rebuild of Reimund Schlosser's personal website. Reimund works in HR (Global People & Culture Business Partner) — the site is a personal/professional portfolio, not a product marketing site.

## Tech stack

- **Eleventy (11ty)** — static site generator
- **Decap CMS** at `/admin` — content editing (portfolio projects, blog posts) for a non-technical editor
- **Netlify** — hosting, build, and Netlify Forms for the contact form (`data-netlify="true"` + honeypot, submits to hey@reimundschlosser.com)
- **GitHub** — source control, connected to Netlify for deploys
- Google Fonts (or self-hosted): **Sora** (400/600/700, display) + **Lato** (400/700, body)
- jsVectorMap for the homepage world map

Nothing has been scaffolded yet — this is a pre-build project. Do not start implementation unless explicitly asked.

## Design source of truth

- **[design/design-spec-FINAL-deep-current-warm.md](design/design-spec-FINAL-deep-current-warm.md)** — the full, final design spec. Read this before any styling or layout work.
- Reference HTML mockups (static, standalone, with base64-embedded placeholder images — large files):
  - [design/homepage-v7.html](design/homepage-v7.html) — **authoritative** mockup
  - [design/portfolio-v1.html](design/portfolio-v1.html)
  - [design/contact-v1.html](design/contact-v1.html)

The spec is the primary reference; the mockups show the spec applied and should match it exactly (same CSS custom properties, same structure). If a discrepancy ever appears between the spec and a mockup, flag it rather than picking one silently — the spec is FINAL but the mockups are the working proof.

## Styling rule

**All styling must use the design spec's CSS custom property tokens exactly — no ad hoc colors, no deviating from the palette.**

```css
--bg: #10222E        /* page background */
--surface: #173040    /* cards, panels, form card */
--surface-2: #1D3B4E  /* elevated surfaces, gradients */
--ink: #F4F1E8        /* body text */
--muted: #A3B8C2      /* secondary text */
--teal: #3FE0C5       /* primary accent — the workhorse */
--coral: #FF8E7A      /* warm secondary accent */
--sun: #FFD08A        /* tertiary accent */
```

- No pure black/white anywhere.
- Teal is the primary/workhorse accent; coral and sun are supporting only.
- Gradient text (teal→sun) is reserved for exactly one hero phrase and one word in each page h1 — don't apply it more broadly.
- Pill radius `999px` for buttons/chips, `20px` (`--radius`) for cards/panels.
- Display font (Sora) for headings/brand; body font (Lato) everywhere else, line-height ~1.7.
- Respect `prefers-reduced-motion` for all ambient/hover animation.

When building components, pull exact values (border colors like `rgba(63,224,197,.14)`, shadow/glow treatments, hover states) from the spec and mockups rather than approximating — the spec's Sections 2–4 and the mockup `<style>` blocks are the canonical definitions.
