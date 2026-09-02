# Agent Instructions

Portfolio showcasing Inamul Haque Inam\'s research, engineering, and career trajectory. Built with Next.js App Router (React 19), Tailwind CSS, and Framer Motion.

## Verification Commands

- `npm run typecheck`: Fast, deterministic TypeScript check (`tsc --noEmit`).
- `npm run lint`: ESLint check with Next.js core web vitals rules.
- `npm run build`: Production Next.js build and RSC payload validation.

## Context Pointers

Read these reference files before planning or implementing changes:

- **Domain terms & concepts**: [`CONTEXT.md`](CONTEXT.md) defines canonical terminology (`SectionFrame`, `Showcase Section`, `Evidence Record`, `Client Seam`, `Interaction Adapter`, `EvidenceAction`).
- **Visual styling & tokens**: [`DESIGN.md`](DESIGN.md) defines color tokens, typography scales, stage badges, and ambient lighting rules.
- **Product & positioning**: [`PRODUCT.md`](PRODUCT.md) defines target recruiter personas, dual-track engineering/business positioning, and section hierarchy.
- **System Architecture**: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) defines component tree lifecycle, server-client rendering contracts, and layout composition.
- **Content Modification Guide**: [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) provides step-by-step instructions for updating publications, projects, credentials, and skills.
- **V2 Roadmap**: [`docs/ROADMAP_V2.md`](docs/ROADMAP_V2.md) defines planned architectural and feature evolution for Version 2.0.
- **Architecture decisions**: [`docs/adr/`](docs/adr/) records system decisions. Specifically read [`0001-push-client-seams-to-leaf-interactive-adapters.md`](docs/adr/0001-push-client-seams-to-leaf-interactive-adapters.md) for RSC boundaries.
- **Code standards & review rules**: [`CODING_STANDARDS.md`](CODING_STANDARDS.md) defines rules enforced during code review.

## Strict Invariants for Agents

1. **RSC Seam Integrity**:
   - Showcase sections (`src/components/*Section.tsx`), `Hero.tsx`, `SkillsMatrix.tsx`, and `Footer.tsx` must remain **Server Components**.
   - NEVER add `"use client"` to presentation wrappers or parent sections.
   - Interactive hooks (`useState`, `useEffect`, `motion.*`, event handlers) must ONLY live in leaf adapters in `src/components/` (e.g. `AnimateInView.tsx`, `CopyButton.tsx`, `ProjectFilterGallery.tsx`).

2. **Data-Centric Modifications**:
   - All resume and evidence data resides in `src/data/portfolioData.ts`.
   - Never hardcode portfolio records directly inside React components.
   - If adding fields to `portfolioData.ts`, update `src/types/index.ts` first.
   - Strictly adhere to verified factual records. Do not fabricate metrics, publications, or credentials.

3. **External Links & Actions**:
   - Always use [`EvidenceAction.tsx`](src/components/EvidenceAction.tsx) for external outbound links to ensure `rel="noopener noreferrer"`, accessible labels, and signal accents.

4. **Task Finalization Checklist**:
   - [ ] Run `npm run typecheck` (must exit 0)
   - [ ] Run `npm run lint` (must exit 0)
   - [ ] Run `npm run build` (must exit 0 with all static routes prerendered)
