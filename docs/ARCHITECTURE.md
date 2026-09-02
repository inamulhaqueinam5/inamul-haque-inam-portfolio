# System Architecture & Technical Design

This document details the architectural design, rendering models, component contracts, and performance invariants of Inamul Haque Inam\'s Portfolio.

---

## 1. High-Level System Architecture

The application is structured as a modern **Next.js 15 App Router** web application optimized for static pre-rendering, ultra-fast initial page loads (LCP < 1.0s), and minimal client-side JavaScript execution.

```
┌─────────────────────────────────────────────────────────────────┐
│                        Root Layout (RSC)                        │
│             src/app/layout.tsx (SEO, Dark theme, Fonts)         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Page View (RSC)                         │
│             src/app/page.tsx (Linear Storyline Flow)            │
└──────┬─────────────┬─────────────┬─────────────┬─────────────┬──┘
       │             │             │             │             │
       ▼             ▼             ▼             ▼             ▼
   ┌───────┐     ┌───────┐     ┌───────┐     ┌───────┐     ┌───────┐
   │ Hero  │     │Skills │     │Section│     │Section│     │Footer │
   │ (RSC) │     │Matrix │     │ Frame │     │ Frame │     │ (RSC) │
   └───────┘     │ (RSC) │     └───┬───┘     └───┬───┘     └───────┘
                 └───────┘         │             │
                                   ▼             ▼
                             ┌───────────┐ ┌───────────┐
                             │ Research  │ │ Projects  │
                             │  Section  │ │  Section  │
                             │   (RSC)   │ │   (RSC)   │
                             └─────┬─────┘ └─────┬─────┘
                                   │             │
                                   ▼             ▼
                             ┌─────────────────────────┐
                             │  Leaf Client Adapters   │
                             │     ("use client")      │
                             │ • AnimateInView         │
                             │ • ProjectFilterGallery  │
                             │ • CopyButton            │
                             │ • ScrollToTopButton     │
                             └─────────────────────────┘
```

---

## 2. Server/Client Component Boundaries (RSC Seams)

In accordance with [ADR-0001](adr/0001-push-client-seams-to-leaf-interactive-adapters.md), this codebase rigorously follows the **Leaf Client Seam** architectural pattern.

### Why Leaf Client Seams?
- In typical Next.js applications, developers frequently mark entire sections or parent components with `"use client"`. This forces all nested components, data models, and static HTML into the client JavaScript bundle, degrading First Contentful Paint (FCP) and Time to Interactive (TTI).
- In this architecture, 100% of the structural presentation frames and static evidence remain **Server Components**.
- The `"use client"` directive is pushed strictly to the outermost leaves of the component tree:
  - **`AnimateInView.tsx`**: Wraps children in an animated `framer-motion` container that responds to viewport entry.
  - **`CopyButton.tsx`**: Handles `navigator.clipboard` interaction and transient "Copied" tooltip state.
  - **`ProjectFilterGallery.tsx`**: Manages client category filter state while rendering pre-structured project cards.
  - **`ScrollToTopButton.tsx`**: Tracks `window.scrollY` and executes smooth scrolling to top.

### Invariant Rules for Developers & Agents:
1. **Never** add `"use client"` to `page.tsx`, `layout.tsx`, `SectionFrame.tsx`, `Hero.tsx`, `SkillsMatrix.tsx`, or any `*Section.tsx`.
2. Keep data fetching and static prop resolution in Server Components.

---

## 3. Presentation Architecture & Domain Terms

Terminology in this codebase is strictly defined in [`CONTEXT.md`](../CONTEXT.md):

| Domain Term | Component / Role | Invariant Responsibility |
| :--- | :--- | :--- |
| **`SectionFrame`** | `src/components/SectionFrame.tsx` | Enforces stage badge styling, typography hierarchy, ambient lighting glows, and URL hash anchor deep-linking (`id="..."`). |
| **`Showcase Section`** | `src/components/*Section.tsx` | Pure RSC module presenting factual Evidence Records inside a `SectionFrame`. |
| **`Evidence Record`** | `src/data/portfolioData.ts` | Strictly verified factual data object (e.g. publication DOI, production project metrics, verified credential ID). |
| **`EvidenceAction`** | `src/components/EvidenceAction.tsx` | Standardized outbound interactive button with security invariants (`target="_blank"`, `rel="noopener noreferrer"`), WCAG `aria-label`, and signal accent hover physics. |

---

## 4. Design Tokens & Styling Architecture

Styling is built with **Tailwind CSS v3** extended by semantic custom tokens defined in `tailwind.config.ts`:

### Color Hierarchy
- **Canvas / Background**: `#08090D` (Deep obsidian dark ground with subtle mesh gradient)
- **Surfaces**:
  - `surface-1`: `#0F1117` (Base card surface)
  - `surface-2`: `#141721` (Embedded callout containers)
  - `surface-3`: `#1B1F2D` (Active tabs, elevated interactive pills)
- **Signal Accents**:
  - `brand-emerald` (`#10B981`): Academic research, verified certifications, primary actions.
  - `brand-cyan` (`#06B6D4`): Engineering systems, architecture highlights, secondary links.
  - `brand-amber` (`#F59E0B`): 1st-author distinctions, key milestones.
- **Inks**:
  - `ink-primary` (`#F8FAFC`): High-contrast titles and headings.
  - `ink-secondary` (`#94A3B8`): Body descriptions and technical summaries.
  - `ink-tertiary` (`#64748B`): Timestamps, tags, metadata.

---

## 5. Motion & Physics Grammar

- **Library**: `framer-motion` (v12).
- **Physics**: Ease-out spring transitions (`damping: 25`, `stiffness: 200`, duration 0.5s–0.7s).
- **Accessibility**: All viewport animations are gracefully degraded for users with `prefers-reduced-motion: reduce`.
