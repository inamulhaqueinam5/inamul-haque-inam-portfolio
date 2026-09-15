# Portfolio Project

The technical and executive showcase presenting Inamul Haque Inam's academic research, full-stack systems engineering, and business operations trajectory.

## Language

### Presentation Architecture

**SectionFrame**:
The canonical presentation frame module that encapsulates stage badges, typography hierarchy, ambient lighting, URL hash deep-linking, and animated accordion collapse mechanics.
_Avoid_: SectionWrapper, AccordionContainer, SectionBox

**Showcase Section**:
A domain-specific content module (such as Research, Projects, Experience, Education, Certifications, or Skills) providing structured evidence to a SectionFrame slot.
_Avoid_: Tab, PageBlock, SectionComponent

**Evidence Record**:
A verified factual artifact (peer-reviewed publication, production platform, professional role, degree, or verified certificate) demonstrating technical or commercial impact.
_Avoid_: PortfolioItem, ResumeEntry

**ShowcaseCard**:
The canonical presentation card module encapsulating viewport entrance motion, specular spotlight hover physics, signal accent borders, and surface elevation tokens for Evidence Records.
_Avoid_: SpotlightCard, CardWrapper, AnimatedCard

**Client Seam**:
The explicit architectural boundary in the React component tree separating server-rendered components from client-hydrated components.
_Avoid_: HydrationLine, ClientBoundary

**Interaction Adapter**:
The minimal leaf client component encapsulating browser-specific APIs or state (e.g. clipboard, window scroll, category filtering, viewport animation) without pulling surrounding static content into the client bundle.
_Avoid_: ClientWrapper, UIHelper, ClientBridge

**Slotted Record Seam**:
The architectural pattern wherein leaf interaction adapters receive pre-rendered React Server Component nodes directly paired with their filtering or grouping keys in a single typed collection (`{ id, category, content }`), eliminating detached metadata arrays and fragile index alignment.
_Avoid_: ParallelArrays, MetadataIndexMatch, DetachedFilterProps

**SlottedFilterGallery**:
The canonical leaf interaction adapter module implementing category derivation, spring-physics active indicators, category count badges and layout transitions for slotted Server Component nodes.
_Avoid_: ProjectFilterGallery, CredentialFilterGallery, CategoryTabs, ContentFilter

**ProjectCard**:
The canonical presentation card module encapsulating two-column architectural breakdown, impact callouts, engineering decision lists, tech stack chips and external action links for featured engineering systems.
_Avoid_: ProjectBox, PortfolioCard, ProjectItem

**ResearchCard**:
The canonical presentation card module encapsulating venue metadata, review status, research problem and methodology callouts, quantitative metrics grid, external publication links and keyword tags for peer-reviewed scientific publications.
_Avoid_: PublicationCard, PaperItem, ResearchBlock

**ExperienceCard**:
The canonical presentation card module encapsulating organization metadata, location and work arrangement, calendar period, executive summary, categorized deliverables breakdown and applied competency tags for professional operational and research roles.
_Avoid_: JobCard, CareerEntry, WorkHistoryBlock

**CredentialCard**:
The canonical presentation card module encapsulating issuer styling, verification status, date validity and credential competency tags for verified professional credentials.
_Avoid_: CertificateCard, CertificationItem, CredentialBlock

**EvidenceAction**:
The canonical interactive action module encapsulating external link security invariants (`rel="noopener noreferrer"`), accessible screen-reader titles, Signal Accent physics, and icon mechanics for verified Evidence Records.
_Avoid_: ExternalLinkButton, ActionPill, LinkHelper

### Visual Signals

**Stage Badge**:
A semantic monospace pill element displayed above a section title indicating category authority and stage context.
_Avoid_: CategoryTag, PillLabel

**Signal Accent**:
A standardized brand signal highlight color (emerald, cyan, amber, or purple) mapped to consistent badge borders, button hover states, and glowing indicator dots.
_Avoid_: ColorTheme, TintStyle
