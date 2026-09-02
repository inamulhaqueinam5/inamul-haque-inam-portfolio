# Design System & Visual Authority

<!-- impeccable:design-schema 1 -->

## Visual Thesis & Tone
A modern, dark ambient, executive-grade portfolio design that communicates technical rigor, scientific intelligence, and commercial clarity. It eliminates generic gradient gimmicks in favor of obsidian backgrounds, crisp typography, emerald & cyan signal highlights, and spring-physics interactions.

## Palette & Surface Tokens
- **Canvas / Ground:** `#08090D` (Deep obsidian dark background with subtle radial mesh gradient)
- **Surface Level 1:** `#0F1117` (Card backgrounds)
- **Surface Level 2 (Subtle):** `#141721` (Embedded callout blocks)
- **Surface Level 3 (Elevated):** `#1B1F2D` (Active states, elevated panels)
- **Borders:** `rgba(255, 255, 255, 0.08)` (Default hairline border)
- **Border Hover:** `rgba(16, 185, 129, 0.3)` or `rgba(6, 182, 212, 0.4)`
- **Accents:**
  - `brand-emerald`: `#10B981` (Primary research & action highlight)
  - `brand-emerald-light`: `#34D399`
  - `brand-cyan`: `#06B6D4` (Systems & engineering highlights)
  - `brand-amber`: `#F59E0B` (Authorship & distinction accents)
- **Typography Ink:**
  - `ink-primary`: `#F8FAFC` (Headings & body titles)
  - `ink-secondary`: `#94A3B8` (Descriptions & body text)
  - `ink-tertiary`: `#64748B` (Metadata, dates, footnotes)

## Typography Hierarchy
- **Display / Hero:** 3xl–6xl tracking-tight, bold weight with subtle gradient emphasis.
- **Section Headings:** 3xl–4xl font-bold with dedicated stage indicator pills.
- **Card Titles:** lg–2xl font-bold with hover color transition.
- **Data & Metric Labels:** font-mono bold with tabular formatting.
- **Micro-copy & Tags:** 10px–12px font-mono with subtle borders and badges.

## Interaction & Motion Grammar
- **Framework:** Framer Motion (`v12`).
- **Transitions:** Ease-out spring physics (`duration: 0.5–0.7s`).
- **Micro-Interactions:** Subtle hover lifts (`scale-[1.02]`), glow shadows (`shadow-glow-emerald`, `shadow-glow-cyan`), and one-click copy feedback.
- **Responsiveness:** Fluid grid and flexbox arrangements supporting mobile viewports (390px) up to ultra-wide desktop monitors (1920px+).
