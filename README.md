# Handoff: Hive Landing Page → Next.js rebuild

## Overview
This package is the spec for rebuilding the **approved Hive marketing landing page** as clean,
component-based **Next.js** code inside the existing `Smatr7093/hive-website` repository, replacing
the current `app/page.tsx` + section components. The goal is a **scalable** codebase: componentized
sections, file-based routing for the legal/info pages, the Hive design tokens wired into Tailwind,
and Cloudflare's existing auto-build left untouched (every push deploys).

## About the design files
The files in `reference/` are a **design reference created in HTML** (a high-fidelity prototype of
the final look and behavior). They are **not production code to copy verbatim**. The task is to
**recreate this design in the repo's existing environment** — Next.js 15 (App Router) + React 19 +
Tailwind v4 + Framer Motion (`motion`) + `lucide-react` — using its established patterns.

`reference/Hive Landing.dc.html` uses a small in-house runtime (the `<x-dc>` / `support.js` custom
element and a `HiveDesignSystem_*` component bundle). **Do not port that runtime.** Read it only to
extract layout, copy, tokens, and motion, then build idiomatic React/Tailwind components.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Rebuild the UI
pixel-accurately using the values in this document and `reference/tokens/`. Where the prototype uses
bespoke scroll-driven JS, reproduce the *effect* with Framer Motion (`useScroll`, `useTransform`,
`whileInView`) rather than copying the imperative code.

---

## Target architecture (maps onto the current repo)

```
app/
  layout.tsx                 # swap fonts (see Typography); keep <html>/<body> shell
  page.tsx                   # composes the landing sections (replaces current)
  globals.css                # Hive tokens as Tailwind v4 @theme (see reference/tokens)
  about/page.tsx             # was About.html
  privacy/page.tsx           # was Privacy.html
  terms/page.tsx             # was Terms.html
  refund/page.tsx            # was Refund.html
  community-guidelines/page.tsx   # was CommunityGuidelines.html
components/
  site-header.tsx            # floating "island" nav
  hero.tsx                   # cinematic hero + rotating word + count-up + parallax
  proof.tsx                  # "A new way to find your people"
  how-it-works.tsx           # horizontal-scroll journey (3 steps)
  this-week.tsx              # scrapbook event tickets
  trust-safety.tsx           # 4 safety cards + honeycomb motif
  become-companion.tsx       # beige "Become a Companion" block
  testimonial.tsx            # tilted photo + quote
  faq.tsx                    # sticky heading + accordion
  site-footer.tsx            # final CTA card + marquee + footer columns
  ui/
    button.tsx               # design-system Button (primary/ghost/secondary)
    icon.tsx                 # Feather→lucide-react wrapper, currentColor
    avatar.tsx, avatar-group.tsx, chip.tsx, card.tsx
public/
  assets/...                 # copy everything from reference/assets/ here
```

Notes:
- **Routing:** the current `.html` sub-pages become App Router routes. Footer/sub-page links change
  from `About.html` → `/about`, etc.
- **Keep `next.config.ts` as `output: 'export'`** and `images.unoptimized: true` — Cloudflare's
  build/output settings stay exactly as they are. No dashboard change.
- **Replace `lucide-react` usage to match Feather** — the design uses Feather icons; `lucide-react`
  (already a dependency) is Feather-compatible. Map by name (arrow-right, shield, check, clock, …).

---

## Design tokens

Wire these into `app/globals.css` as Tailwind v4 `@theme` variables (full CSS in
`reference/tokens/colors.css` and `reference/tokens/typography.css`). Use semantic aliases in code.

**Color**
| Token | Hex | Use |
|---|---|---|
| `--bg` (cream) | `#F5EFE6` | page background |
| `--surface` (beige) | `#E6D5C3` | beige sections, input borders |
| `--panel` (white) | `#FFFFFF` | raised cards |
| `--text` (charcoal) | `#2C2C2C` | headings + primary copy |
| `--muted` | `#4A4543` | secondary copy, nav labels |
| `--muted-2` (taupe) | `#8B7F76` | metadata, inactive icons |
| `--accent` (burnt orange) | `#C96A3D` | the ONE accent — CTAs, active, marks |
| `--accent-hover` | `#B85E35` | hover |
| `--accent-pressed` | `#A8562F` | active/pressed |
| `--accent-soft` | `rgba(201,106,61,.10)` | ghost hover / soft icon tiles |
| `--accent-soft-2` | `rgba(201,106,61,.18)` | stronger soft fill, ::selection |
| `--success` | `#6B8E5F` | verified/positive |
| `--warning` | `#D9955B` | caution |
| `--danger` | `#C45E4A` | errors |
| `--border` | `rgba(44,44,44,.09)` | hairline |
| `--border-2` | `rgba(44,44,44,.14)` | stronger outline, dashed ticket rules |

> Burnt orange does **not** pass AA for body text — never use `--accent` for paragraphs.

**Type** — two families:
- **Quicksand** (700/600) — display, all H1–H3, brand moments. Never below 18px.
- **Noto Sans** (400/500/700) — body, UI, labels.

In `layout.tsx`, replace Inter/Space Grotesk with `Quicksand` and `Noto_Sans` from `next/font/google`:
```ts
import { Quicksand, Noto_Sans } from 'next/font/google';
const display = Quicksand({ subsets:['latin'], weight:['600','700'], variable:'--font-display' });
const body = Noto_Sans({ subsets:['latin'], weight:['400','500','700'], variable:'--font-body' });
```
Heading tracking: `-0.02em` to `-0.03em`. Eyebrows: 11–12.5px, weight 700, `letter-spacing:.18em`,
UPPERCASE, color `--accent` (or `#f0c9b4` on dark photo).

**Spacing / radius / elevation**
- 8pt grid; screen-edge margin ≥16px (desktop sections use 44px inner padding, mobile 20px).
- Radius: sm 6 · md 12 · lg 18 · xl 24 · full 999. Cards `lg`/`xl`; CTAs/chips/avatars `full`.
- Elevation (warm charcoal, low-opacity): card rest `0 1px 3px rgba(44,44,44,.08)` lifting to
  `~0 28px 62px rgba(44,44,44,.22)` on hover. No gray/harsh shadows, no borders on cards.

**Motion** — "a calm exhale." Durations 100/150/250/400ms. Easing standard `(.4,0,.2,1)`;
spring `(.34,1.56,.64,1)` for confirms/lifts only. Nothing loops or jitters. Respect
`prefers-reduced-motion` everywhere (the prototype gates every animation behind it).

---

## Sections (in order) — layout, copy, behavior

### 1. SiteHeader — floating island nav
- Fixed, centered white "island", `backdrop-filter: blur(20px)`, `radius-full`, soft shadow; top ~16px (10px on phone).
- Left: Hive wordmark (`assets/logos/full_logo.svg`, height 30px). Center nav links: **What we offer** (`#proof`), **How it works** (`#how`), **This week** (`#week`), **Trust & safety** (`#safety`), **FAQ** (`#faq`) — 14.5px, weight 500, `--muted`. Right: primary Button **"Join the Tribe"** (sm).
- Behavior: on scroll >24px deepen shadow + raise opacity to ~.94. Nav hidden <960px.

### 2. Hero — full-bleed cinematic
- Full-viewport photo `assets/photography/hero_street_cafe.png`, `background-size:104%`, centered, charcoal `#1c1a18` backdrop. Left→right charcoal scrim gradient for legibility (vertical scrim on mobile).
- Left column (max 540px): eyebrow **"Human connection, nearby"** (color `#f0c9b4`); H1 **"Find people who want to be there"** (Quicksand 60px/700, white, `-0.03em`) with a **hand-drawn underline** under "be there"; subcopy (18px, white .85): *"Meet verified companions for activities, learning, and unhurried time together. No swiping. No pressure — just people glad to be there."* (confirm exact line from reference); primary Button **"Start with a Hi"** with right arrow; italic tagline **"Book time. Not expectations."**
- AvatarGroup (4, size 34) + **"3,200+ afternoons booked near you this month"** — the number **counts up** from 0 when in view.
- Rotating line: **"Meet "** + a word that cycles through ~40 companions (a coffee companion, a guitarist, an investor, a hiking friend, a tennis partner, a museum companion, …). 20px Quicksand, accent color, clip-masked vertical swap.
- **Motion:** staggered entrance rise of the left column; underline draws itself in (~1s) after headline lands; subtle photo parallax on scroll (translateY, no heavy zoom — keep edge people visible); warm orange glow follows the cursor across the photo (fine-pointer only); count-up; all reduced-motion-safe.

### 3. Proof — "A new way to find your people"
- Centered, max 660px. Eyebrow **"More than plans"**; H2 **"A new way to find your people"** (42px). Row of words separated by tiny accent hexagons: **Skills ⬡ Activities ⬡ Presence ⬡ Experiences** (21px Quicksand). Paragraph: *"Whether you're learning, exploring, creating, or simply spending time together, Hive helps you find people who want to be there."* Soft radial accent glow behind (breathing pulse).

### 4. HowItWorks — horizontal-scroll journey  ⚠ most complex
- Desktop: a tall section (`height:400vh`) with a **sticky 100vh** viewport; an inner track translates on X as you scroll, moving through 4 full-width panels:
  - **Intro:** eyebrow + H2 **"Finding the right people, made simple"** (confirm) + lead paragraph + a "scroll" affordance.
  - **Step 01 — "Find people nearby"**: *"Browse verified companions nearby. See their interests…"* + mock image (`discover_filters_mock.png`).
  - **Step 02 — "Pick a time that works"**: *"No endless back-and-forth. Choose a time, confirm…"* + mock (`booking_flow_mock.png`).
  - **Step 03 — "Meet. That's it."** (dark panel, white text, 66px): subhead *"No expectations. Just shared time."* + paragraph + photo.
- **Rebuild with Framer Motion:** `useScroll({ target })` + `useTransform` to map scroll progress → `x` on the track (e.g. `0 → -(track-100vw)`). A progress indicator/connector animates across.
- **Mobile (<760px):** abandon horizontal; stack panels vertically as normal full-width blocks (the prototype does this via media queries). Build it responsive from the start.

### 5. ThisWeek — scrapbook tickets
- Heading row: eyebrow **"This week near you"** + H2 **"A few afternoons worth showing up for"**; right link **"See everything on →"**.
- 3 ticket cards, each slightly **rotated** (−2.5° / +1.5° / −1°), white, photo top + dashed-rule footer with a host Avatar:
  - **Sat · 10:00am — "Slow coffee, nothing to prove"** · *A quiet neighbourhood roastery* (`coffee_convo.png`)
  - **Sun · 6:30am — "The easy morning loop"** · *The city park · main gate* (`morning_jog.png`)
  - **Thu · 7:00pm — "After-work badminton"** · *Indoor courts nearby* (`two_girls_play_badminton.png`)
- Hover: straighten to 0° and lift (`translateY(-9px)`, deepen shadow), spring easing.

### 6. TrustSafety — honeycomb
- Eyebrow **"Designed around safety"**; H2 **"Trust begins before you meet"**; lead paragraph. Optional decorative hexagon motif.
- 4 white cards (radius 20, soft shadow, accent-soft icon tile 48×48), staggered reveal:
  - **Verified people** — *"Every companion completes identity verification before they can accept bookings."*
  - **Transparent profiles** — *"See interests, experience, availability, and reviews before you decide to spend time together."*
  - **You're in control** — *"Choose who you meet, when, and what you do. Every booking begins with a mutual yes."*
  - **Support when you need it** — *"From reporting concerns to dedicated help, real people are here at every step."*

### 7. BecomeCompanion
- Full-width **beige `--surface`** band, padding 84px. Left: eyebrow + H2 **"Become a Companion"** (46px) + bold lead *"Share what you enjoy. Meet people who…"* + paragraph + photos (`companion_*`). Right: white card **"Why become a Companion?"** with an icon list + primary CTA.

### 8. Testimonial / Story
- 2-col grid. Left: a **tilted** white photo frame (−2°, `uncle_dog_walk.png`). Right: large pull-quote + attribution. Reveal on scroll.

### 9. FAQ
- 2-col grid (0.74 / 1.26). Left **sticky** heading: eyebrow **"FAQ"** + H2 **"Frequently asked questions"** + a small "Still curious?" card. Right: an **accordion** (expand/collapse, one or many open). Pull the Q&A text from `reference/Hive Landing.dc.html` (`#faq`).

### 10. SiteFooter — final CTA + marquee + columns
- Rounded (40px) full-bleed photo card (`cta_friends_coffee.png`, `object-position:center 18%` so the server stays in frame), charcoal scrim, centered: H2 **"Life is better when it's shared"** + a wrapping/marquee list of activity phrases (A coffee conversation, …) + primary CTA.
- Below: footer columns (brand + nav + legal). Legal links → `/about`, `/privacy`, `/terms`, `/refund`, `/community-guidelines`.

---

## Interactions & behavior (summary for Framer Motion)
- **Entrance reveals:** `whileInView={{opacity:1, y:0}}` from `{opacity:0, y:26}`, `viewport={{ once:true, margin:'-8%' }}`, stagger children ~95ms.
- **Heading wipe:** clip-path `inset(0 0 105% 0)` → `inset(0 0 -12% 0)` over ~860ms as it enters.
- **Count-up:** animate number 0→target (easeOutCubic, ~1.5s) when in view.
- **Rotating word:** interval ~2.2s, vertical clip swap.
- **Horizontal journey:** `useScroll` + `useTransform` → track `x`.
- **Parallax:** map scroll → small `y` on hero photo.
- **Cursor glow:** pointer-tracked radial gradient over hero (skip on touch).
- **Ticket hover / card hover:** rotate→0 + lift + shadow, spring `(.34,1.56,.64,1)`.
- **Header:** shadow/opacity step at scrollY>24.
- **All of the above must no-op under `prefers-reduced-motion: reduce`.**

## Assets
Everything is in `reference/assets/` — copy into `public/assets/`:
- `logos/full_logo.svg` (wordmark), `favicon/app_icon.svg`, `app_icon/app_icon.png` (og image)
- `photography/` — `hero_street_cafe`, `cta_friends_coffee`, `coffee_convo`, `morning_jog`,
  `two_girls_play_badminton`, `companion_art/_coffee/_pickleball`, `uncle_dog_walk`, `sunrise_hike`,
  `discover_filters_mock`, `booking_flow_mock`, plus marquee gallery `g01`–`g17`.
  **These PNGs are large** — convert to web-sized JP/WebP during the rebuild (the prototype's
  standalone export downscaled them; do the same or use `next/image` patterns).
- Icons: use **`lucide-react`** (Feather-compatible) rather than the SVGs.

## Reference files
- `reference/Hive Landing.dc.html` — the full approved landing page (source of truth for exact copy,
  values, and the FAQ/companion text not fully reproduced above).
- `reference/tokens/colors.css`, `reference/tokens/typography.css` — exact token values.
- `reference/About.html`, `Privacy.html`, `Terms.html`, `Refund.html`, `CommunityGuidelines.html` —
  content for the App Router sub-pages.
- `reference/assets/` — all imagery.

## Definition of done
- `npm run build` (Next static export) succeeds; Cloudflare deploys unchanged.
- Landing matches the reference at desktop, tablet, and phone widths.
- `/about /privacy /terms /refund /community-guidelines` render with shared header/footer.
- All motion respects reduced-motion. Lighthouse: images optimized, no layout shift.
