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

### Visual Signals

**Stage Badge**:
A semantic monospace pill element displayed above a section title indicating category authority and stage context.
_Avoid_: CategoryTag, PillLabel

**Signal Accent**:
A standardized brand signal highlight color (emerald, cyan, amber, or purple) mapped to consistent badge borders, button hover states, and glowing indicator dots.
_Avoid_: ColorTheme, TintStyle
