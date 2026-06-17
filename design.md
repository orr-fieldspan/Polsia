# Fieldspan Embedded — Design System

A design reference for the **Fieldspan Embedded** marketing site (`embedded.fieldspan.ai`).
The site is a single-page Next.js (App Router) landing page styled with Tailwind CSS.

> **Brand idea:** Top-tier AI transformation talent, *embedded* inside government
> institutions. The visual language is warm, editorial, and human — a deliberate
> counter to cold "govtech" and generic SaaS. Serif display type, a paper-cream
> canvas, playful sticker cards, and soft animated color blobs make a serious
> offer feel approachable and confident.

---

## 1. Foundations

### 1.1 Color palette

Defined in [`tailwind.config.ts`](tailwind.config.ts) and referenced throughout as Tailwind tokens.

| Token | Hex | Role |
|-------|-----|------|
| `paper` | `#FAF6EC` | Page background — warm cream, the canvas everything sits on |
| `card` | `#FFFFFF` | Card / surface background that lifts off the paper |
| `ink` | `#13131A` | Primary text and dark CTA fills — near-black with a violet cast |
| `muted` | `#6E6A5E` | Secondary text, labels, captions |
| `soft` | `#9A9486` | Tertiary / lowest-emphasis text (rarely used) |
| `coral` | `#FF6B4A` | **Primary accent** — hover states, highlights, gradient text, dots |
| `violet` | `#6E5BFF` | Secondary accent — "your repo" tag, pillar 02, founder ring |
| `honey` | `#FFC857` | Warm accent — logo base, selection highlight, soft blobs |
| `mint` | `#7DD3C0` | "Live / on track" status accent — calm, system-status green |

**Usage notes**
- The four accents (coral, violet, honey, mint) are used sparingly as *signals*, not large fills. Surfaces stay neutral (paper / card / ink); color appears in dots, tags, gradient text, and blurred background blobs.
- Opacity modifiers carry most of the tinting: `bg-coral/15`, `bg-violet/15`, `bg-honey/40`, `bg-mint/30`, `text-ink/75`, `border-ink/10`, etc. This keeps everything soft and layered rather than saturated.
- `::selection` is honey (`#FFC857`) on ink — a small branded touch.

### 1.2 Typography

Two Google fonts loaded via `next/font` in [`app/layout.tsx`](app/layout.tsx), exposed as CSS variables and mapped in Tailwind's `fontFamily`.

| Family | Font | Variable | Used for |
|--------|------|----------|----------|
| `serif` | **Newsreader** (300, 400; normal + italic) | `--font-serif` | All display headings, stat numbers — the editorial voice |
| `sans` | **Inter** (300–700) | `--font-sans` | Body copy, labels, nav, buttons |
| `mono` | system mono (`ui-monospace`, SF Mono, Menlo) | — | "Terminal" / data UI: ship log, engagement terms, eyebrows on cards |

**Type characteristics**
- **Display headings** are Newsreader serif, very large, tight tracking (`tracking-tightest` = `-0.04em`), and tight leading (`leading-[0.95]`–`1.05`). The hero hits `96px` on desktop.
- **Italic serif** is a recurring emphasis device for the "punchline" half of a headline (e.g. *"In two shapes."*, *"staff one."*, *"stays with you."*) — usually paired with a gradient-text class.
- **Eyebrows / kickers**: uppercase, `12px`, letter-spacing `0.2em`, in `muted`. Every section opens with one.
- **Mono** signals "system / engineering credibility" — used for commit messages, status pills, and the engagement-terms table.
- `font-feature-settings: "ss01", "cv11"` on `body` enables Inter's stylistic alternates; text is antialiased with `optimizeLegibility`.

**Gradient text helpers** (in [`app/globals.css`](app/globals.css)):
- `.gradient-text` — ink → grey vertical fade (subtle depth on dark headings)
- `.coral-text` — coral → orange → honey (the primary highlight gradient)
- `.violet-text` — violet → coral

### 1.3 Spacing, layout & radii

- **Page container:** `max-w-page` (`1180px`), centered, with `px-6 lg:px-10` gutters. Applied consistently to every section.
- **Section rhythm:** vertical padding around `py-20 lg:py-24` (hero and footer go larger, `py-24`–`pb-32`). Sections are separated by a `border-b hairline` rule.
- **Grid:** desktop layouts use a 12-column grid (`lg:grid-cols-12`) with content spans like 7/5 (hero), 5/7 (sovereignty), 4/8 (FAQ). Collapses to a single column on mobile.
- **Radii:** generous and soft — `rounded-3xl` for cards, `rounded-2xl` for inner panels, `rounded-full` for pills, tags, dots, and buttons.
- **Hairlines:** the `.hairline` utility sets `border-color: rgba(19,19,26,0.10)` — a consistent 10%-ink divider/border used everywhere for quiet structure.

### 1.4 Elevation & texture

- **`.sticker`** — the signature shadow: a 1px top edge plus a soft, lifted drop shadow (`0 8px 24px -10px`). Gives cards a peel-off-sticker feel. Applied to nearly every card, pill, and tag.
- **`.dot-grid`** — radial-dot background pattern (`22px` grid, 8%-ink dots) available for texture.
- **Blurred color blobs** — large `rounded-full` divs with accent colors at low opacity and `blur-3xl`, absolutely positioned and clipped by `overflow-hidden` sections. They give every section an ambient, organic glow (see Hero `Blobs`, Manifesto, Sovereignty, Footer).

---

## 2. Motion

All animations are CSS keyframes defined in [`app/globals.css`](app/globals.css). Motion is gentle, ambient, and looping — never abrupt.

| Class | Effect | Timing |
|-------|--------|--------|
| `.orb` | Background blobs drift up/down and breathe in scale + opacity | `9s ease-in-out infinite` |
| `.wobble` | Slight rotate −2°↔2° (the "your repo" tag) | `6s ease-in-out infinite` |
| `.pulse-ring` | Expanding fading ring — "live" status indicators | `2.6s cubic-bezier(.16,1,.3,1) infinite` |
| `.marquee` | Horizontal scroll (translateX 0 → −50%) | `38s linear infinite` |
| `.chev` | FAQ "+" rotates 45° → "×" when `<details>` is open | `0.25s ease` |

- Blobs are staggered with negative `animation-delay` (`-3s`, `-4s`, `-5s`) so they fall out of sync and feel organic.
- Interactive transitions are uniformly `transition-colors` on hover (links, buttons, founder LinkedIn). Default state → coral or ink on hover.

---

## 3. Components & patterns

### 3.1 Logo mark
A 28px SVG: a honey circle with two overlapping smaller circles — coral (left) and violet (right, `mix-blend-multiply` so the overlap darkens). Three-dot motif echoes the accent palette. Wordmark: **Fieldspan** (semibold) + **Embedded** (light, muted). Defined inline in [`Nav.tsx`](components/Nav.tsx) and [`Footer.tsx`](components/Footer.tsx).

### 3.2 Navigation — [`Nav.tsx`](components/Nav.tsx)
- Sticky top bar (`sticky top-0 z-40`), `backdrop-blur-md` over `bg-paper/80`, bottom hairline.
- 16px (`h-16`) tall, logo left, anchor links center (hidden below `md`), CTA right.
- Nav links: `13.5px`, muted → ink on hover.

### 3.3 Buttons / CTAs
Two consistent shapes, both fully rounded:
- **Primary:** `bg-ink text-paper`, hover `bg-coral`. Pill with a small arrow icon. Heights `h-9` (nav) → `h-11`/`h-12` (hero/footer). Label: *"Request a briefing"*.
- **Secondary:** `border hairline bg-card`, hover `bg-honey/40`. Label: *"How we engage"*.

### 3.4 Pills & tags
- **Status eyebrow pill** (hero): card background, hairline border, sticker shadow, with a coral `pulse-ring` dot and uppercase tracked label.
- **Sticker tag** (hero "your repo"): solid violet pill, white text, rotated 6°, `wobble` animation.

### 3.5 Cards
The core surface pattern, used for the ship log, pillar services, sovereignty terms, and founder bios:
- `rounded-3xl`, `border hairline`, `.sticker` shadow.
- Background is either `card` (white) or a tinted accent wash (`bg-coral/15`, `bg-violet/15`, `bg-coral/20`…).
- Many open with a row of three traffic-light dots (coral / honey / mint) + a mono label — a recurring "terminal window" motif that signals engineering credibility.
- Cards may be subtly rotated (`rotate(-0.6deg)`) for the hand-placed sticker feel.

### 3.6 Stat blocks
Hero and elsewhere: a large Newsreader number (`28px`+) over a small muted caption. Used for `3–5 senior people`, `Monthly ship cycle`, `Day one code live`.

### 3.7 FAQ accordion — [`FAQ.tsx`](components/FAQ.tsx)
Native `<details>/<summary>` (no JS). Default list marker is stripped; a circular "+" icon (`.chev`) rotates to "×" on open. Serif questions, muted body answers, divided by hairlines.

### 3.8 "Terminal" data displays
The **ship log** (Hero `ShipCard`) and **engagement.terms** table (Sovereignty) both render structured data in mono type inside a card with the traffic-light header, mimicking a code/terminal panel. Key values are highlighted in coral (e.g. `none`, `hosted by you`).

---

## 4. Page structure

Single page composed in [`app/page.tsx`](app/page.tsx), top to bottom:

1. **Nav** — sticky bar, logo + links + CTA.
2. **Hero** ([`Hero.tsx`](components/Hero.tsx)) — 7/5 split. Left: status pill, `Modernize the state.` headline, sub-copy, dual CTA, 3 stat blocks. Right: rotated "ship log" sticker card with a live indicator and "your repo" tag. Three animated blobs behind.
3. **Pillars** ([`Pillars.tsx`](components/Pillars.tsx)) — `#engagement`. Two service cards (Transformation partnership / Engineering squad), each numbered (`01`/`02`) with a colored dot, serif title, body, and bulleted list. Followed by a "every cycle compounds" strip with four color-dotted points.
4. **Manifesto** ([`Manifesto.tsx`](components/Manifesto.tsx)) — `#approach`. The thesis: large serif statement (*"You can't buy a transformation. You have to staff one."*) with violet-text emphasis, plus supporting copy and a link to Tenex Labs.
5. **Sovereignty** ([`Sovereignty.tsx`](components/Sovereignty.tsx)) — `#sovereignty`. 5/7 split: headline left, `engagement.terms` mono table right (where we work, devices, source code, weights, data egress, continuation) with coral-highlighted answers.
6. **Founders** ([`Founders.tsx`](components/Founders.tsx)) — `#founders`. Two tinted bio cards (Alon Barel, Orr Barkat) with circular portrait, name, role, bio, pedigree, and LinkedIn link.
7. **FAQ** ([`FAQ.tsx`](components/FAQ.tsx)) — `#faq`. 4/8 split: heading left, accordion right.
8. **Footer** ([`Footer.tsx`](components/Footer.tsx)) — `#contact`. Centered closing headline + dual CTA (mailto + how-we-engage), then a bottom bar with logo, nav links, and copyright. Animated blobs behind.

Section IDs (`#engagement`, `#approach`, `#founders`, `#faq`, `#sovereignty`, `#contact`) are the in-page anchor targets used by the nav and CTAs.

---

## 5. Voice & content tone

The copy is a deliberate design element and should be matched when extending the site:
- **Editorial and declarative.** Short, confident headlines (*"Modernize the state."*, *"Founder-led. Every engagement."*). The italic-serif second clause delivers the turn.
- **Anti-consultancy.** "Ship code, not a deck." "Senior partners on the ground, not consultants on a tour." "Paid against output, not against time on the clock."
- **Sovereignty-forward.** Repeated emphasis that code, weights, and data stay inside the customer's perimeter — reinforced visually by coral highlights in the terms table.
- **Credibility signals.** Mono "terminal" UI, pedigree tags (Ex-Google, Ex-SolarEdge), and a reference to Tenex Labs as the proven private-sector model.

---

## 6. Tech stack

- **Framework:** Next.js (App Router) + React, TypeScript.
- **Styling:** Tailwind CSS with a small custom theme ([`tailwind.config.ts`](tailwind.config.ts)) and hand-written utilities/keyframes in [`app/globals.css`](app/globals.css).
- **Fonts:** `next/font/google` (Inter + Newsreader), self-hosted via CSS variables.
- **Icons / graphics:** inline SVG (logo mark, arrows, checks, squiggle) — no icon library.
- **Images:** founder portraits in `public/founders/` served via plain `<img>`.
- **Metadata / SEO:** Open Graph + Twitter card configured in [`app/layout.tsx`](app/layout.tsx); canonical host `embedded.fieldspan.ai`.
- **Deploy:** Vercel (`vercel.json`).

---

## 7. Quick-reference cheat sheet

```
Background      paper  #FAF6EC      Surface     card #FFFFFF
Text            ink    #13131A      Secondary   muted #6E6A5E
Accents         coral  #FF6B4A  ·  violet #6E5BFF  ·  honey #FFC857  ·  mint #7DD3C0

Display font    Newsreader (serif), tracking-tightest -0.04em, leading ~0.95–1.05
Body font       Inter (sans)
Data/UI font    system mono

Container       max-w-page 1180px, px-6 lg:px-10
Section pad     py-20 lg:py-24, divided by border-b hairline (10% ink)
Cards           rounded-3xl + border hairline + .sticker shadow, often accent-tinted
Eyebrow         uppercase 12px, tracking 0.2em, muted
CTA primary     bg-ink text-paper → hover bg-coral, pill + arrow
Motion          .orb (blobs) · .wobble · .pulse-ring (live) · .marquee · .chev (faq)
```
