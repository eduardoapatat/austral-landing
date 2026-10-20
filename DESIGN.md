---
version: alpha
name: ASTRO
description: |
  An editorial Swiss-poster system built on one ink color over a warm cream ground. A full-bleed 900-weight wordmark spans the entire viewport, a 2px ink rule cuts beneath it, and everything that follows sits on a strict 4-column grid with deliberate empty cells. There are no radii, no shadows and no secondary palette: product photography is the only element allowed to carry its own color. Motion is slow and confident on entry (2s expo-out), fast and graphic on interaction (500ms clip-path wipes), and the whole page can swap ink themes (red, light, dark) with a three-dot switch.

colors:
  primary: "#ff0001"
  primary-ink: "#c00000"
  on-primary: "#ede4dd"
  canvas: "#ede4dd"
  surface-media: "#d2cac3"
  ink-light: "#000000"
  surface-dark: "#000000"
  on-dark: "#ede4dd"
  rule: "#ff0001"
  rule-soft: "rgba(255,0,1,0.5)"

typography:
  wordmark:
    fontFamily: Inter Tight
    fontSize: 184px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -9.2px
  display:
    fontFamily: Inter Tight
    fontSize: 86px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -4.3px
  headline:
    fontFamily: Inter Tight
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1.5px
  lead:
    fontFamily: Inter Tight
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: -0.6px
  nav-link:
    fontFamily: Inter Tight
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: 0
  product-title:
    fontFamily: Inter Tight
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.111
    letterSpacing: 0
  body-md:
    fontFamily: Inter Tight
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  info-strong:
    fontFamily: Inter Tight
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.429
    letterSpacing: 0
  button-md:
    fontFamily: Inter Tight
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.143
    letterSpacing: -0.35px
  label:
    fontFamily: Inter Tight
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.333
    letterSpacing: 0
  tag:
    fontFamily: Inter Tight
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  full: 9999px

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
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: 32px 24px
    height: 96px
  theme-dot:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 18px
  wordmark-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.wordmark}"
    rounded: "{rounded.none}"
    padding: 0px 24px
  rule:
    backgroundColor: "{colors.rule}"
    rounded: "{rounded.none}"
    height: 2px
  rule-soft:
    backgroundColor: "{colors.rule-soft}"
    rounded: "{rounded.none}"
    height: 1px
  info-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.info-strong}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  info-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.product-title}"
    rounded: "{rounded.none}"
    padding: 0px
  product-card-wide:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.product-title}"
    rounded: "{rounded.none}"
    padding: 0px
  media-box:
    backgroundColor: "{colors.surface-media}"
    rounded: "{rounded.none}"
    padding: 0px
  product-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.primary-ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 12px 24px
    height: 48px
  button-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  cursor-view-more:
    backgroundColor: "{colors.primary-ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.tag}"
    rounded: "{rounded.full}"
    size: 100px
  statement-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.info-strong}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  theme-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  theme-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
---

## Overview

ASTRO is an editorial landing system built like a Swiss poster: one ink, one ground, one grid. The ground is a warm cream (`{colors.canvas}` — `#ede4dd`) and every piece of chrome — wordmark, navigation, rules, prices, labels, cursor — is printed in a single ink, ASTRO Red (`{colors.primary}` — `#ff0001`). Product and editorial photography is the only element allowed to bring its own color; the page around it stays strictly monochrome.

The page opens with a **full-bleed wordmark**: a 900-weight, tightly tracked display word that spans the viewport edge to edge (gutter to gutter), followed by a 2px ink rule. Under the rule, a four-column **info strip** of small uppercase labels and short bold copy sets the grid that the rest of the page obeys. The content area is an **editorial grid** — not a masonry — where image cards occupy one or two of the four columns and deliberately leave cells empty, so the rhythm reads like a magazine spread rather than a catalog.

The system has three signature gestures:
- **Scale contrast**: a ~184px wordmark and 86px statements sit directly above 11–14px labels with almost nothing in between.
- **Zero geometry**: no border radius anywhere except true circles (theme dots, cursor, category dot), and no shadows at all.
- **Graphic motion**: hover wipes a second image across the card with a `clip-path` while it de-scales and its brightness falls from 400% to 100%.

**Key Characteristics:**
- Single-ink chrome: `{colors.primary}` for large type and rules, `{colors.primary-ink}` for small text — never a second accent
- Inter Tight across every role, from the 900-weight `{typography.wordmark}` down to the 11px uppercase `{typography.tag}`
- Two radius values only: `{rounded.none}` (everything) and `{rounded.full}` (true circles)
- No shadows, no gradients, no cards with fills — structure comes from rules, grid and whitespace
- 4-column grid with 24px gutters and intentional empty cells
- Three ink themes (red, light, dark) switched from the navigation
- Fixed navigation in `mix-blend-mode: difference` so it inverts over photography while scrolling

## Colors

> **Source:** sampled with Playwright from the reference's computed styles (`--color-cream: #ede4dd`, `--color-red: #ff0001`, media placeholder `#d2cac3`, dark theme `#000`). Text-safe red added for accessibility.

### Brand & Ink
- **ASTRO Red** (`{colors.primary}` — `#ff0001`): the brand ink. Wordmark, display statements, rules, nav links at 24px, theme dot and cursor dot. Only on text ≥ 24px or non-text graphics (contrast on cream is 3.19:1 — passes AA for large text only).
- **ASTRO Red Ink** (`{colors.primary-ink}` — `#c00000`): the same red pulled darker for every text below 24px — labels, info copy, product titles, prices, tags, footer links, filled buttons. 5.17:1 on `{colors.canvas}`.
- **On Primary** (`{colors.on-primary}` — `#ede4dd`): cream text on red-filled elements (button, "View more" cursor).

### Surface
- **Canvas** (`{colors.canvas}` — `#ede4dd`): warm cream ground for every section in the red and light themes.
- **Surface Media** (`{colors.surface-media}` — `#d2cac3`): a notch deeper than the canvas; fills image boxes while photography loads so the grid never collapses.
- **Surface Dark** (`{colors.surface-dark}` — `#000000`): ground of the dark theme.

### Rules
- **Rule** (`{colors.rule}` — `#ff0001`): 2px full-width rules under the wordmark and above the closing statement.
- **Rule Soft** (`{colors.rule-soft}` — `rgba(255,0,1,0.5)`): 1px divider above the footer.

### Themes
The ink is a theme variable, not a fixed color. Every component reads `currentColor` / the theme ink so a theme switch recolors the whole page at once.

| Theme | Ground | Large ink | Small-text ink |
|---|---|---|---|
| red (default) | `{colors.canvas}` | `{colors.primary}` | `{colors.primary-ink}` |
| light | `{colors.canvas}` | `{colors.ink-light}` | `{colors.ink-light}` |
| dark | `{colors.surface-dark}` | `{colors.on-dark}` | `{colors.on-dark}` |

Theme change transitions `color` and `background-color` over 400ms `ease-in-out`.

## Typography

### Font Family
The reference uses **Neue Haas Grotesk Text Pro**, a commercial face. ASTRO substitutes **Inter Tight** (SIL Open Font License): a tighter-spaced cut of Inter with the same neutral grotesk skeleton, available as a variable font from 100 to 900 so it covers both the 900-weight wordmark and the 400/700 text roles. Fallback stack: `"Helvetica Neue"` → `Helvetica` → `Arial` → `sans-serif`. Self-host it (Fontsource) with `font-display: swap`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.wordmark}` | 184px (12.75vw) | 900 | 1 | -0.05em | Full-bleed hero wordmark "ASTRO" |
| `{typography.display}` | 86px (6vw) | 900 | 1 | -0.05em | Closing statement, ©-year block |
| `{typography.headline}` | 60px | 400 | 1 | -1.5px | Rare large light headline |
| `{typography.lead}` | 24px | 400 | 1.333 | -0.6px | Closing intro paragraph above the footer |
| `{typography.nav-link}` | 24px | 400 | 1.333 | 0 | Primary nav links ("Shop", "Bag (0)") |
| `{typography.product-title}` | 18px | 400 | 1.111 | 0 | Product name and price row |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default paragraph |
| `{typography.info-strong}` | 14px | 700 | 1.429 | 0 | Info-strip copy, footer links |
| `{typography.button-md}` | 14px | 700 | 1.143 | -0.35px | Button labels |
| `{typography.label}` | 12px | 700 | 1.333 | 0 | Uppercase section labels ("WHY", "SHIPPING & RETURNS") |
| `{typography.tag}` | 11px | 400 | 1.5 | 0 | Uppercase category tag under products, cursor label |

### Principles
- The wordmark and display tiers are **fluid** (`clamp()` on vw) so the wordmark always spans gutter to gutter; the px values above are the 1440px reference.
- Negative tracking of -0.05em on the 900 tiers is part of the voice — never set the wordmark at default tracking.
- `{typography.label}` and `{typography.tag}` are always uppercase; nothing else is.
- Hierarchy comes from size and weight jumps, never from a second color.

## Layout

### Spacing System
- **Base unit:** 8px, with 4px for hairline gaps (tag dot to label).
- **Tokens:** `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (24px) · `{spacing.xl}` (32px) · `{spacing.xxl}` (64px) · `{spacing.section}` (128px).
- **Gutters:** `{spacing.lg}` (24px) page margin and column gap on desktop; `{spacing.md}` (16px) on mobile.
- **Rhythm:** grid blocks are separated by `{spacing.section}` (128px); text inside a block stacks at 8–12px.

### Grid & Container
- **Full-bleed container:** content spans the full viewport minus the 24px gutters — there is no centered max-width. The wordmark and rules touch both gutters.
- **4-column grid**, 24px gaps (columns ≈ 326px at 1440). Each grid block places cards on that grid:
  - one-column cards (portrait 2:3 or 3:4, or small square-ish 1:1),
  - two-column wide cards (≈ 676px, 4:5 or 1:1),
  - and **empty cells** left on purpose so blocks feel composed, not filled.
- Cards inside one block may be offset to different columns and sizes (e.g. small + small + gap + wide). Never fill every cell of every row.

### Page Structure
1. **Primary nav** — fixed, transparent, logo mark left; nav links + theme dots right.
2. **Wordmark hero** — "ASTRO" at `{typography.wordmark}`, full bleed, with a small ® / sub-mark aligned to its baseline at the right.
3. **Rule** — 2px `{colors.rule}`.
4. **Info strip** — 4 columns: project label · "why" label + 2–3 lines of `{typography.info-strong}` · link label · year. Second row: one more label (e.g. shipping/contact).
5. **Editorial grid** — 3–4 blocks of product/editorial cards on the 4-column grid, each block separated by 128px.
6. **Closing** — 2px rule, then a two-line statement at `{typography.display}` left and a "©26"-style year mark right.
7. **Lead paragraph** — `{typography.lead}`, max ~2 lines at desktop.
8. **Footer** — 1px `{component.rule-soft}`, then columns: brand + rights · address · legal · social · site links · contact.

### Whitespace Philosophy
Whitespace is a compositional element, not padding. Empty grid cells, 128px block gaps and the space around the closing statement are what make the page read as a poster; never fill them with extra cards or decoration.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Everything |
| 1 — Rule | 2px `{colors.rule}` or 1px `{colors.rule-soft}` | Section separation |
| 2 — Blend | `mix-blend-mode: difference` | Fixed nav and logo floating over photography |

There are no shadows in the system. Depth comes only from photography, from the difference-blended nav sliding over images, and from the hover image wipe.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Images, cards, buttons, inputs, sections — everything |
| `{rounded.full}` | 9999px | True circles only: theme dots, cursor, category dot, "View more" cursor |

### Photography Geometry
- Ratios: portrait 2:3 (`aspect-large`), 3:4, square 1:1, and 4:5 for wide cards. Always `object-fit: cover`, square corners.
- Photography sits on `{colors.surface-media}` while loading.
- Each card ideally has **two images**: the primary shot and an alternate (on-body / context shot) revealed on hover.

## Components

### Navigation

**`primary-nav`**
- Fixed at top, transparent background, `mix-blend-mode: difference`, padding 32px 24px.
- Left: brand mark (geometric glyph in ink). Right: `{typography.nav-link}` links ("Shop" with active underline, "Bag (0)"), then three `{component.theme-dot}` buttons.
- Mobile: brand mark left, "Bag (0)" + "Menu" right; theme dots move into the menu.

**`theme-dot`**
- 18px circles: black (dark theme), cream outline (light theme), red with inner dot (red theme). Active dot shows an inset ring. 200ms `cubic-bezier(0,0,.2,1)`; hover scales to 110%.

### Hero

**`wordmark-hero`**
- "ASTRO" at `{typography.wordmark}`, fluid so it fills gutter to gutter; a small ® / sub-mark in a circle aligned bottom-right.
- Followed immediately by `{component.rule}` with 24px space above.

**`info-strip`**
- 4-column grid: `{component.info-label}` titles (`{typography.label}`, uppercase) and short copy in `{typography.info-strong}`, ink `{colors.primary-ink}`.

### Cards

**`product-card`** / **`product-card-wide`**
- Image box with no radius and no padding on `{colors.surface-media}` (the card itself sits on `{colors.canvas}`, so its text is always on cream); one column (card) or two columns (wide).
- Below: one row with title left and price right in `{typography.product-title}`, then a `{component.product-tag}` — 8px ink dot + uppercase `{typography.tag}` category.
- Hover: see Motion → card reveal.

**`product-tag`**
- Inline: 8px `{rounded.full}` dot in ink + 4px gap + uppercase `{typography.tag}`.

### Buttons & Links

**`button-primary`**
- Background `{colors.primary-ink}`, text `{colors.on-primary}`, `{typography.button-md}`, padding 12px 24px, height 48px, `{rounded.none}`. Used sparingly — the system prefers text links.

**`button-text`** / **`link-underline`**
- Ink text with an `::after` underline at `scaleX(0)` that grows from the left to `scaleX(1)` on hover (transform-origin left). Active nav link keeps the underline visible.

### Cursor

**`cursor-dot`** + **`cursor-view-more`**
- Custom cursor (pointer devices only): an 8px ink dot following the pointer. Over a product card it grows to a 100px `{rounded.full}` circle in `{colors.primary-ink}` with "VIEW MORE" in uppercase `{typography.tag}` cream. Size/opacity transitions 200ms `cubic-bezier(.4,0,.2,1)`.

### Closing

**`statement-block`**
- 2px rule, then a two-line statement in `{typography.display}` (left, ~half width) and a year mark like "©26" at the same display size (right).

### Footer

**`footer-section`**
- `{component.rule-soft}` on top, columns of `{typography.info-strong}` links in `{colors.primary-ink}`: brand + "All rights reserved ©" · address · legal · social · site · contact. No column headers.

## Motion

> Values measured from the reference's computed transitions and CSS custom properties.

### Easing Tokens
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(.4,0,.2,1)` | Cursor, image property changes |
| `ease-decelerate` | `cubic-bezier(0,0,.2,1)` | Theme dots |
| `ease-expo-out` | `cubic-bezier(.19,1,.22,1)` | Entrance reveals |
| `ease-in-out-extreme` | `cubic-bezier(.87,0,.13,1)` | Card image wipe |

### Entrance
- Nav, theme dots and hero elements fade and translate in: `opacity 0 → 1`, `translateY(16px) → 0`, **2s `ease-expo-out` with 0.5s delay**. Once per page load, never on every scroll.
- Grid cards may reveal on first intersection with the same curve at 1.2s, staggered 80ms per card in a block.

### Interaction
- **Card reveal (signature):** the alternate image sits on top with `clip-path: polygon(0 0, 0 0, 0 100%, 0 100%)`, `scale: 1.2`, `filter: brightness(4) contrast(1.5)`. On hover it animates to `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)`, `scale: 1`, `filter: none` — **500ms `ease-in-out-extreme`**, wiping left to right.
- **Link underline:** `scaleX(0 → 1)` from the left, 300ms `ease-standard`.
- **Theme dots:** hover `scale(1.1)`, 200ms `ease-decelerate`.
- **Theme switch:** color and background 400ms `ease-in-out`.

### Scroll
- Smooth scrolling (Lenis or native `scroll-behavior: smooth` as fallback).
- Fixed nav in `mix-blend-mode: difference` so it inverts over images instead of needing a background.

### Accessibility
- Under `prefers-reduced-motion: reduce`: disable entrance translates (opacity only, 200ms), disable smooth scrolling and the custom cursor, and make the card reveal an instant crossfade.
- Custom cursor only on `(hover: hover) and (pointer: fine)`; never hide the native cursor on touch.

## Do's and Don'ts

### Do
- Use one ink per theme. In the red theme: `{colors.primary}` for type ≥ 24px and graphics, `{colors.primary-ink}` for anything smaller.
- Make the wordmark span gutter to gutter at every breakpoint.
- Keep every corner square; reserve `{rounded.full}` for true circles.
- Separate sections with 2px rules and 128px of space, not with background fills.
- Leave empty cells in the editorial grid on purpose.
- Give every product card an alternate image so the hover reveal has something to show.
- Write all labels and category tags in uppercase `{typography.label}` / `{typography.tag}`.

### Don't
- Don't introduce a second accent color, gradients, or tinted card backgrounds.
- Don't add shadows or border radius to images, cards or buttons.
- Don't use `{colors.primary}` for text under 24px — it fails WCAG AA on cream.
- Don't fill the grid like a masonry or catalog; composition beats density.
- Don't animate continuously or on every scroll; motion happens on load and on interaction.
- Don't let any element overflow horizontally on mobile (the reference has a horizontal scroll on 390px — avoid it).
- Don't copy the reference's copy, photography or "++" mark; ASTRO uses its own content.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| desktop | 1440px | Reference: 4-column grid, 24px gutters, full nav with theme dots |
| desktop-small | 1024px | Same grid, wide cards still span 2 columns |
| tablet | 768px | Grid becomes 2 columns; info strip 2 × 2 |
| mobile | 390px | 2-column grid (16px gutters); info strip stacks; nav shows "Bag" + "Menu" |

### Collapsing Strategy
- **Wordmark:** fluid `clamp()` — always full width (≈ 92vw).
- **Display statement:** 86px → ~44px on mobile, still 900 / -0.05em; the year mark drops below the statement.
- **Editorial grid:** 4 → 2 columns; wide cards span both columns; empty-cell offsets are kept by indenting single cards to the second column.
- **Info strip:** 4 columns → label/copy pairs in 2 columns.
- **Footer:** columns → 3-column link grid, then address/legal in 2 columns.
- **Custom cursor and hover reveal:** off on touch; the alternate image is simply not shown.

### Touch Targets
Nav links, theme dots (with padding) and buttons reach at least 44×44px of hit area.

## Iteration Guide

1. Focus on ONE component at a time and make sure every property resolves to a token.
2. Reference tokens directly (`{colors.primary-ink}`, `{typography.label}`, `{rounded.none}`) — don't paraphrase values.
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Add new variants as separate component entries (`-hover`, `-active`, `-dark`).
5. Before adding a token, check whether the ink/cream/rule vocabulary already covers it — the system's strength is having almost nothing.

## Known Gaps

- **Semantic states** (error, success, form validation) are not present in the reference; define them inside the single-ink rule (e.g. icons + copy) before adding colors.
- **Forms and inputs** are not shown in the reference.
- **Menu / bag drawers** were not captured.
- **Lint contrast warnings** on `{colors.primary}` are expected for the wordmark and display tiers (large text, AA-large compliant at 3.19:1).
