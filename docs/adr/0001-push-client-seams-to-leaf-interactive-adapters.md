# Push Client Seams to Leaf Interactive Adapters

## Context & Decision
Showcase sections (`ResearchSection`, `ProjectsSection`, `ExperienceSection`, `EducationSection`, `CertificationsSection`, `SkillsMatrix`), `ContactSection`, and `Footer` previously declared `"use client"` at the module root, forcing all static evidence records, icons, and presentation markup into the client JavaScript bundle. We decided to elevate all showcase sections and layout content into React Server Components (RSC) and push client directives down to minimal leaf interaction adapters (`AnimateInView`, `ProjectFilterGallery`, `CopyButton`, and `ScrollToTopButton`).

## Consequences
- Static evidence records, publications, credentials, and metadata are rendered on the server as lean HTML/RSC payloads without client hydration overhead.
- Micro-interactions (clipboard copy, smooth window scrolling, category filtering, viewport entrance animations) are strictly encapsulated at the leaves of the component tree.
- Future feature sections must maintain this boundary by default instead of declaring `"use client"` at the section container level.
