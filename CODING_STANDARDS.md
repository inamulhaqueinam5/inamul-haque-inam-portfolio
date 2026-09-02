# Coding Standards

Rules enforced during code review (`/code-review`). Implementation agents must adhere to these invariants.

## 1. Server/Client Component Boundaries (RSC Seams)

- **Showcase Sections are Server Components**: All section modules (`src/components/*Section.tsx`), `Hero.tsx`, and `Footer.tsx` must NOT declare `"use client"`. Static evidence records, headings, descriptions, and structural HTML must remain server-rendered.
- **Client Seams at Leaves Only**: `"use client"` is restricted to minimal leaf Interaction Adapters (`AnimateInView.tsx`, `CopyButton.tsx`, `ProjectFilterGallery.tsx`, `ScrollToTopButton.tsx`).
- **Never Elevate Client State**: Do not move client directives or state up to section frames or parent containers. Slotted children inside client adapters must remain RSCs where possible (e.g., `ProjectCard` inside `ProjectFilterGallery`).
- _Primary Source_: [`docs/adr/0001-push-client-seams-to-leaf-interactive-adapters.md`](file:///f:/Codebase/Ai-assisted%20Projects/Portfolio%20Project/docs/adr/0001-push-client-seams-to-leaf-interactive-adapters.md).

## 2. Evidence Records & External Actions

- **Use EvidenceAction for External Links**: Any interactive link or outbound trigger for publications, GitHub repos, live demos, or credentials must use [`EvidenceAction`](file:///f:/Codebase/Ai-assisted%20Projects/Portfolio%20Project/src/components/EvidenceAction.tsx).
- **Security & Accessibility Invariants**: Outbound links must include `rel="noopener noreferrer"`, explicit `aria-label`, and consistent signal accent styling. Do not construct raw unstyled `<a>` tags for evidence actions.

## 3. Presentation Architecture & Domain Terms

- **Section Hierarchy**: All main content blocks must be wrapped in canonical `SectionFrame` with semantic stage badges and ambient lighting.
- **Avoid Anti-terms**: Strictly adhere to terminology defined in [`CONTEXT.md`](file:///f:/Codebase/Ai-assisted%20Projects/Portfolio%20Project/CONTEXT.md) (e.g., use `Evidence Record` not `PortfolioItem`; use `Interaction Adapter` not `ClientWrapper`).
