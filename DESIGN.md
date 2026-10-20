---
version: alpha
name: ASTRO
description: |
  An editorial apparel system printed in a single cobalt ink on a bone ground. A full-bleed photograph opens the page with an expanded, 800-weight wordmark set across its lower edge; below it, the page alternates between typographic moments (a giant category index with inline thumbnails, display headlines) and a strict 4-column product grid with deliberate empty cells. Every section closes with a numbered index line ("01 — Colección"). There are no radii, no shadows and no second accent: photography is the only element that carries its own color. Interaction is quiet and useful — product cards cross-fade to an alternate shot while a size strip slides up from the bottom.

colors:
  primary: "#2440e0"
  on-primary: "#f1ede4"
  canvas: "#f1ede4"
  surface-media: "#e2ddd2"
  ink-mono: "#141414"
  surface-night: "#10173a"
  on-night: "#f1ede4"
  on-photo: "#f1ede4"
  rule: "#2440e0"

typography:
  wordmark:
    fontFamily: Archivo
    fontSize: 300px
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: -0.02em
  display:
    fontFamily: Archivo
    fontSize: 100px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -0.02em
  headline:
    fontFamily: Archivo
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  lead:
    fontFamily: Archivo
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.36
    letterSpacing: 0
  nav-link:
    fontFamily: Archivo
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  product-title:
    fontFamily: Archivo
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  body-md:
    fontFamily: Archivo
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  spec-label:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0
  button-md:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0.02em
  label:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.04em

rounded:
  none: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 64px
  section: 128px

components:
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: 24px
    height: 72px
  hero-photo:
    backgroundColor: "{colors.ink-mono}"
    textColor: "{colors.on-photo}"
    typography: "{typography.wordmark}"
    rounded: "{rounded.none}"
    padding: 24px
  section-index:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  rule:
    backgroundColor: "{colors.rule}"
    rounded: "{rounded.none}"
    height: 2px
  category-index:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  category-thumb:
    backgroundColor: "{colors.surface-media}"
    rounded: "{rounded.none}"
    height: 0.8em
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.product-title}"
    rounded: "{rounded.none}"
    padding: 0px
  media-box:
    backgroundColor: "{colors.surface-media}"
    rounded: "{rounded.none}"
    padding: 0px
  size-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  featured-band:
    backgroundColor: "{colors.ink-mono}"
    textColor: "{colors.on-photo}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px
  spec-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.spec-label}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  swatch:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.none}"
    size: 20px
  process-step:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 32px 0px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 12px 24px
    height: 48px
  link-underline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  contact-cta:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 128px 24px
  theme-toggle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.spec-label}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  theme-mono:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-mono}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  theme-night:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-night}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
---

## Overview

ASTRO is an editorial landing system for an apparel brand, printed like a two-color risograph that only owns one color. The ground is warm bone (`{colors.canvas}` — `#f1ede4`) and every element of chrome — wordmark, navigation, headlines, prices, rules, section indexes — is set in a single cobalt ink (`{colors.primary}` — `#2440e0`). Photography is the only thing allowed to bring its own color.

The page has a clear rhythm of three surface modes:
- **Photo moments** — the full-bleed hero and the featured-piece band, where the expanded wordmark or a display title sits directly on the photograph in `{colors.on-photo}`.
- **Type moments** — the category index (giant expanded words with small rectangular thumbnails set inline between them), the process headline and the contact call-to-action.
- **Grid moments** — the 4-column product grid with deliberate empty cells, the spec table and the numbered process steps.

Every section ends with a **section index** — a 2px-ruled line with the section number on the left and its name on the right ("03 — Tienda") — so the page reads like a printed catalogue with numbered chapters.

**Key Characteristics:**
- One ink: `{colors.primary}` passes AA (6.23:1) at every size, so there is no secondary text tone
- Archivo variable with its width axis: expanded 800 for wordmark and display, normal width for text
- One radius value: `{rounded.none}` — everything is square, including swatches and tag markers
- No shadows, no gradients except the legibility scrim on photographs
- Numbered section indexes as the structural signature
- Product cards that cross-fade and reveal a size strip on hover
- Three ink themes — Cobalto, Tinta, Noche — switched from a text toggle

## Colors

### Brand & Ink
- **Cobalt** (`{colors.primary}` — `#2440e0`): the only ink. Text at every size, rules, swatches' frame, buttons, links. 6.23:1 on `{colors.canvas}`.
- **On Primary** (`{colors.on-primary}` — `#f1ede4`): bone text on cobalt-filled buttons.
- **On Photo** (`{colors.on-photo}` — `#f1ede4`): bone type placed on photography, always over the bottom scrim.

### Surface
- **Canvas** (`{colors.canvas}` — `#f1ede4`): warm bone ground for every section.
- **Surface Media** (`{colors.surface-media}` — `#e2ddd2`): placeholder fill for image boxes while photography loads.
- **Rule** (`{colors.rule}` — `#2440e0`): 2px section rules and 1px spec-table dividers (1px at 30% opacity).

### Themes
The ink is a theme variable. Components read the theme ink, so a switch recolors the page at once (400ms `ease-in-out`).

| Theme | Ground | Ink |
|---|---|---|
| Cobalto (default) | `{colors.canvas}` | `{colors.primary}` |
| Tinta | `{colors.canvas}` | `{colors.ink-mono}` |
| Noche | `{colors.surface-night}` | `{colors.on-night}` |

The fixed navigation uses `mix-blend-mode: difference`; its color is the value that, differenced against the ground, produces the theme ink (`rgb(205 173 4)` for Cobalto, bone for Tinta and Noche).

## Typography

### Font Family
**Archivo** (SIL Open Font License), loaded as a variable font with both axes: `wght` 100–900 and `wdth` 62–125. The width axis is the voice of the system — the wordmark and display tiers are set at `font-stretch: 125%` (expanded), while every text role stays at 100%. Fallback stack: `"Helvetica Neue"` → `Arial` → `sans-serif`. Self-host via Fontsource with `font-display: swap`.

### Hierarchy

| Token | Size | Weight | Width | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.wordmark}` | fluid (≈ 300px at 1440) | 800 | 125% | 0.85 | -0.02em | "ASTRO" across the hero photo |
| `{typography.display}` | clamp(44px, 7vw, 120px) | 800 | 125% | 0.95 | -0.02em | Category index, featured title, contact CTA |
| `{typography.headline}` | 40px | 600 | 100% | 1.1 | -0.01em | Section headline, process step titles |
| `{typography.lead}` | 22px | 400 | 100% | 1.36 | 0 | Hero statement, featured description |
| `{typography.nav-link}` | 18px | 500 | 100% | 1.33 | 0 | Navigation |
| `{typography.product-title}` | 16px | 500 | 100% | 1.25 | 0 | Product name and price |
| `{typography.body-md}` | 16px | 400 | 100% | 1.5 | 0 | Paragraphs |
| `{typography.spec-label}` | 14px | 600 | 100% | 1.43 | 0 | Spec-table labels, footer links |
| `{typography.button-md}` | 14px | 600 | 110% | 1.14 | 0.02em | Buttons (uppercase) |
| `{typography.label}` | 12px | 600 | 110% | 1.33 | 0.04em | Section indexes, size strip, categories (uppercase) |

### Principles
- Width, not tracking, creates the display voice: expanded 800 at -0.02em. Never apply extreme negative tracking.
- `{typography.label}` and `{typography.button-md}` are always uppercase and slightly widened (110%).
- Hierarchy comes from size, weight and width — never from a second color.

## Layout

### Spacing System
- **Base unit:** 8px. Tokens: `{spacing.xxs}` 4 · `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.xxl}` 64 · `{spacing.section}` 128.
- **Gutters:** 24px desktop, 16px mobile — page margin and column gap.
- **Rhythm:** sections are separated by `{spacing.section}`; each closes with its section index.

### Grid & Container
- Full-bleed container (viewport minus gutters), no centered max-width.
- 4-column grid with 24px gaps; product cards span 1 or 2 columns and leave empty cells on purpose.
- Two-column splits (featured piece, process) use a 1:1 split at desktop.

### Page Structure
1. **Primary nav** — fixed, difference-blended: logo mark left; "Tienda", "Bolsa (0)", "Menú" (mobile) right.
2. **Hero photo** — 100svh photograph with bottom scrim; short statement + "Ver colección →" top right (below the nav); wordmark across the bottom edge. Index "01 — Colección".
3. **Category index** — centered display words for apparel categories, with small rectangular thumbnails inline between some words. Index "02 — Categorías".
4. **Product grid** — 2–3 blocks of product cards. Index "03 — Tienda".
5. **Featured piece** — photo band with "Destacado" + piece name in display; below, description + spec table (left) and stacked images (right); primary button. Index "04 — Destacado".
6. **Process** — headline "Del boceto a la prenda", large image left, four numbered steps right separated by rules. Index "05 — Proceso".
7. **Contact CTA** — display statement and a large underlined e-mail link. Index "06 — Contacto".
8. **Footer** — 1px rule, brand + rights, address, legal, social, site links, theme toggle, credits line.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Everything |
| 1 — Rule | 2px `{colors.rule}`; 1px at 30% in tables | Section indexes, spec rows, process steps |
| 2 — Scrim | Bottom gradient from transparent to 45% `{colors.ink-mono}` | Only under type placed on photographs (the lint models these surfaces as `{colors.ink-mono}`) |
| 3 — Blend | `mix-blend-mode: difference` | Fixed navigation |

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything: images, thumbnails, buttons, swatches, tag markers |

There are no circles in the system. Markers (category tag, swatches, process numbers) are squares.

### Photography Geometry
- Product cards: 2:3, 3:4, 1:1, 4:5, always `object-fit: cover`.
- Category thumbnails: 3:2 or 1:1 at a height of ~0.8em of the display line.
- Hero and featured band: landscape, cropped to fill.
- Each product has an alternate image for the hover cross-fade.

## Components

### `primary-nav`
Fixed, transparent, `mix-blend-difference`, 24px padding. Square-plus-bar logo mark (own). Links in `{typography.nav-link}` with the animated underline; active link keeps it.

### `hero-photo`
Full-bleed photo, 100svh, scrim at the bottom 45%. Statement in `{typography.lead}` (max 28ch) + "Ver colección →" link, top right below the nav. Wordmark in `{typography.wordmark}` / `{colors.on-photo}`, fitted gutter to gutter at the bottom.

### `section-index`
2px rule on top, then a row: number ("03") left, name ("Tienda") right, both `{typography.label}` uppercase. Closes every section.

### `category-index`
Centered lines of `{typography.display}` words, each a link. Some lines carry a `{component.category-thumb}` before or after the word. Hover a line: the other lines fade to 35% opacity, the hovered line's thumbnail scales to 1.08 (300ms `ease-standard`).

### `product-card`
Square-cornered image box on `{colors.surface-media}`; row with title and price in `{typography.product-title}`; category with an 8px square marker in `{typography.label}`.
Hover / focus: the alternate image fades in (400ms `ease-standard`) and the `{component.size-strip}` (`XS S M L XL`, available sizes in ink, unavailable struck through at 40%) slides up from the bottom edge of the image (400ms `ease-expo-out`).

### `featured-band` + `spec-row`
Landscape photo band (~60vh) with "Destacado" label and the piece name in `{typography.display}` / `{colors.on-photo}` over the scrim. Below, two columns: `{typography.lead}` description, spec table of `{component.spec-row}` items (label left in `{typography.spec-label}`, value right in `{typography.body-md}`, 1px rule between rows), color row with 20px square `{component.swatch}` items; `{component.button-primary}` "Añadir a la bolsa". Right column: two stacked images.

### `process-step`
Number in a 48px square outlined in ink, title in `{typography.headline}`, one-paragraph description; rules between steps.

### `button-primary`
`{colors.primary}` background, `{colors.on-primary}` text, `{typography.button-md}` uppercase, 48px height, 12px 24px padding, square.

### `link-underline`
Ink text with an `::after` 2px underline at `scaleX(0)` that grows from the left on hover/focus (300ms `ease-standard`).

### `contact-cta`
Display statement on two lines, then the e-mail address as a large `{component.link-underline}` in `{typography.headline}`.

### `theme-toggle`
Text buttons "Cobalto · Tinta · Noche" in `{typography.label}`; the active one is underlined and `aria-pressed`.

## Motion

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(.4,0,.2,1)` | Cross-fades, underline, index hover |
| `ease-expo-out` | `cubic-bezier(.19,1,.22,1)` | Entrance, size strip |

- **Entrance:** hero statement, wordmark and nav fade + rise 16px, 1.6s `ease-expo-out`, 0.3s delay, once.
- **Reveal on scroll:** cards, category lines and process steps rise 24px and fade in, 1.2s `ease-expo-out`, staggered 80ms within a group, once.
- **Hero:** the photograph scales from 1.06 to 1 over 2.4s on load.
- **Smooth scroll:** Lenis; native scroll under reduced motion.
- **Reduced motion:** no translates or scales (opacity only, 200ms), size strip and cross-fade change instantly.

## Do's and Don'ts

### Do
- Use the theme ink for everything; photography is the only other color.
- Keep every corner square; markers are squares.
- Close every section with its numbered section index.
- Use the width axis (expanded) for wordmark and display; normal width for text.
- Leave empty cells in the product grid.
- Give every product an alternate image and real size availability.

### Don't
- Don't add a second accent, gradients (other than the photo scrim) or shadows.
- Don't round anything or use circles.
- Don't place on-photo type without the scrim.
- Don't use a custom cursor or decorative continuous animation.
- Don't let anything overflow horizontally on mobile.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| desktop | 1440px | 4-column grid, 24px gutters |
| desktop-small | 1024px | Same grid; featured and process keep two columns |
| tablet | 768px | 2-column grid; featured and process stack (image first) |
| mobile | 390px | 2-column grid, 16px gutters; nav shows "Bolsa" + "Menú"; category thumbnails hidden on every other line |

- Wordmark and display are fluid; the wordmark always fits gutter to gutter.
- The size strip is shown on focus as well as hover; on touch it's never required to see sizes (they're listed in the featured spec table).

## Iteration Guide

1. One component at a time; every property must resolve to a token.
2. Reference tokens directly (`{colors.primary}`, `{typography.label}`, `{rounded.none}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. New variants become separate component entries.
5. Before adding a token, check whether ink / bone / rule already covers it.

## Known Gaps

- Semantic states (error, success, form validation) are not defined yet; express them within the single ink (icon + copy) first.
- Product detail page, bag and menu drawer are not designed.

## References

ASTRO is an original system. Its editorial order and single-ink idea were inspired by **OUTFIT® by ++hellohello** (outfit.hellohello.is), and the category index, featured spec table and process sections were adapted from the free Framer template **Graft** by Stacy More (graft.framer.website). No copy, photography or marks from either were reused.
