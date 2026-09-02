# Inamul Haque Inam — Academic Research & Engineering Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

<br />

**AI-Native Software Engineer & Business Strategist | Bridging Tech, Data and Agentic Automation**

*A centralized, high-craft, storytelling digital portfolio articulating academic research in Explainable AI, production full-stack systems engineering, and KPI-driven international business operations.*

[Explore Live Portfolio](https://inamulhaqueinam.dev) • [View Research](#academic-research-showcase) • [Featured Projects](#flagship-engineering-projects) • [Documentation](docs/)

</div>

---

## 🌟 Executive Summary & Positioning

This portfolio serves as the primary technical and executive showcase for **Inamul Haque Inam** (BSc in Computer Science & Engineering, Southeast University, CGPA: 3.59). It connects high-rigor peer-reviewed Machine Learning research with production-grade full-stack web platforms and international corporate operations.

### Target Recruiter Personas
- **Technical Engineering:** Software Engineer, Full-Stack Web Developer, Machine Learning Engineer, Data Scientist, Data Analyst.
- **Corporate & Strategy:** Business Development Executive (BDE), Management Trainee Officer (MTO), Banking Officer.
- **Research & Innovation:** Academic Lab Researcher, Explainable AI (XAI) Specialist.

---

## 📐 Architecture & Core Philosophy

The application is built upon **Next.js 15 App Router** and adheres to strict domain-driven presentation boundaries and performance standards:

```
┌─────────────────────────────────────────────────────────────┐
│                       Root Layout                           │
│     (Server Component — SEO Metadata, Dark Obsidian Ground) │
└──────────────────────────────┬──────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            │                                     │
            ▼                                     ▼
 ┌──────────────────────┐              ┌──────────────────────┐
 │    SectionFrame      │              │   Showcase Sections  │
 │  (Server Component)  │              │  (Server Component)  │
 └──────────┬───────────┘              └──────────┬───────────┘
            │                                     │
            └──────────────────┬──────────────────┘
                               │
                               ▼
               ┌───────────────────────────────┐
               │    Leaf Interaction Adapters  │
               │        ("use client")         │
               │  • AnimateInView              │
               │  • ProjectFilterGallery       │
               │  • CopyButton                 │
               │  • ScrollToTopButton          │
               └───────────────────────────────┘
```

1. **RSC-First Architecture:** All structural presentation frames (`SectionFrame`), showcase sections (`ResearchSection`, `ProjectsSection`, `ExperienceSection`, `EducationSection`, `CertificationsSection`, `SkillsMatrix`), and navigation render strictly as **React Server Components (RSC)**.
2. **Leaf Client Seams ([ADR-0001](docs/adr/0001-push-client-seams-to-leaf-interactive-adapters.md)):** The `"use client"` boundary is pushed exclusively to minimal leaf Interaction Adapters (`AnimateInView.tsx`, `CopyButton.tsx`, `ProjectFilterGallery.tsx`, `ScrollToTopButton.tsx`). Static markup and evidence records never incur client hydration overhead.
3. **Canonical Domain Vocabulary:** Governed by [`CONTEXT.md`](CONTEXT.md):
   - **`SectionFrame`**: Presentation shell encapsulating stage badges, typography hierarchy, and URL deep-linking.
   - **`Showcase Section`**: Slot content module providing verified domain evidence.
   - **`Evidence Record`**: Verified factual artifact (peer-reviewed paper, production platform, professional role).
   - **`EvidenceAction`**: Standardized interactive link with security invariants (`rel="noopener noreferrer"`) and signal accents.
4. **Design Authority:** Implemented with dark ambient obsidian styling (`#08090D`), emerald/cyan signal highlights, micro-interactions, and spring-physics animations via Framer Motion. Detailed tokens reside in [`DESIGN.md`](DESIGN.md).

---

## 🚀 Key Showcase Sections

### 1. Academic Research Foundation (Primary Spotlight)
Showcases peer-reviewed scientific contributions in healthcare analytics and Explainable AI (XAI):
- **IEEE BECITHCON 2025 (1st Author):** *"Explainable Ensemble Learning and Hybrid Feature Selection for Robust Low Birth Weight Prediction"* (ExtraTrees + CatBoost, 94.54% Accuracy, 94.05% ROC-AUC, SHAP clinical interpretability). [DOI: 10.1109/BECITHCON69222.2025.11504281](https://doi.org/10.1109/BECITHCON69222.2025.11504281)
- **Elsevier Measurement: Digitalization (2026, Co-Author):** *"AIDPCP: An Adaptive Intelligent Data Preprocessing and Clustering Pipeline for Obesity Prediction with Explainable AI"*. [DOI: 10.1016/j.meadig.2026.100049](https://doi.org/10.1016/j.meadig.2026.100049)
- **IEEE ICCIT 2025:** Mortality Risk Classification in Hepatitis B Patients.
- **IEEE ICCIT 2025:** Explainable AI-Driven Ensemble Learning for PCOS Diagnosis (AIM-PDCF & QuantumGraphRFE).
- **The Journal of Engineering (Under Review):** *DPAFF-Net* for Clinical-Grade Tuberculosis Screening.

### 2. Flagship Engineering Projects
Interactive filterable gallery featuring problem-solution-impact narratives:
- **SkillBridge:** Full-stack tutoring & mentoring platform with Prisma ORM, PostgreSQL, JWT/RBAC security, and dynamic booking algorithms.
- **OneFit Resume:** Resume tailoring engine featuring client-side A4 document renderer, master-to-derivative state architecture, and mammoth/cheerio parsing.
- **Executive Banking Portfolio:** Enterprise-grade corporate web application with decoupled architecture and dual-world theme.
- **Social Media Posting App:** Scalable media sharing platform built on React 19, Node/Express, MongoDB, Multer, and ImageKit CDN.

### 3. Professional Experience & International Operations
- **Rectangle International AB (Sweden, Remote):** Technical Operations Associate (Intern) — Multi-channel operational workflows, platform QA, and Python-based KPI reporting.
- **AMIR Lab (Dhaka):** Research Intern — Deep learning architectures, statistical feature engineering, and academic manuscript preparation.

### 4. Multidisciplinary Skills Matrix & Credentials
- **5 Skill Clusters:** AI & Machine Learning, Full-Stack Systems, Data Engineering & Databases, Business Operations & Strategy, Tools & Agentic Workflows.
- **Verified Credentials:** Anthropic Claude Code in Action, AI Hero Workflows, Complete SQL Bootcamp, Agile Project Management, LaTeX Unlocked.

---

## 📂 Project Structure

```text
├── docs/                                  # Architectural & Developer Guides
│   ├── adr/                               # Architecture Decision Records
│   │   └── 0001-push-client-seams-to-leaf-interactive-adapters.md
│   ├── ARCHITECTURE.md                    # Deep-dive system design & component model
│   ├── CONTENT_GUIDE.md                   # Step-by-step data modification instructions
│   ├── ROADMAP_V2.md                      # Version 2.0 feature backlog & technical design
│   └── USER_STORY.md                      # Foundational user story & positioning notes
├── public/                                # Public assets (images, static files)
├── src/
│   ├── app/                               # Next.js App Router
│   │   ├── globals.css                    # Tailwind tokens, utility classes, animations
│   │   ├── icon.svg                       # Brand SVG favicon
│   │   ├── layout.tsx                     # Root HTML layout & SEO metadata
│   │   ├── page.tsx                       # Single-page storytelling composition
│   │   ├── robots.ts                      # Dynamic robots.txt generation
│   │   └── sitemap.ts                     # Dynamic sitemap.xml generation
│   ├── components/                        # UI Components & Modules
│   │   ├── AnimateInView.tsx              # [Client Seam] Viewport scroll animation adapter
│   │   ├── CertificationsSection.tsx      # Verified credential cards & verification links
│   │   ├── ContactSection.tsx             # Direct reachout channels & copy triggers
│   │   ├── CopyButton.tsx                 # [Client Seam] One-click clipboard copy adapter
│   │   ├── EducationSection.tsx           # Academic degree, CGPA, institutional honors
│   │   ├── EvidenceAction.tsx             # Canonical action link with signal accents
│   │   ├── ExperienceSection.tsx          # Career journey & operational impact timeline
│   │   ├── Footer.tsx                     # Branding, legal copyright, source links
│   │   ├── Hero.tsx                       # High-impact introduction, headline, stats
│   │   ├── Logo.tsx                       # Brand monogram badge & fallback icon
│   │   ├── Navbar.tsx                     # Sticky navigation bar with blur backdrop
│   │   ├── ProjectCard.tsx                # Technical project presentation card
│   │   ├── ProjectFilterGallery.tsx       # [Client Seam] Category filtering adapter
│   │   ├── ProjectsSection.tsx            # Flagship engineering projects wrapper
│   │   ├── ResearchSection.tsx            # Peer-reviewed publication evidence showcase
│   │   ├── ScrollToTopButton.tsx          # [Client Seam] Window scroll-to-top adapter
│   │   ├── SectionFrame.tsx               # Canonical presentation container with badges
│   │   └── SkillsMatrix.tsx               # Multidisciplinary technical skills grid
│   ├── data/
│   │   └── portfolioData.ts               # Single Source of Truth for all portfolio data
│   ├── lib/
│   │   └── utils.ts                       # Tailwind merge & clsx utility functions
│   └── types/
│       └── index.ts                       # TypeScript interfaces & domain data models
├── .eslintrc.json                         # Next.js ESLint configuration
├── .gitignore                             # Git ignore rules for node, docx, build, IDEs
├── AGENTS.md                              # Autonomous AI coding agent guidelines
├── CODING_STANDARDS.md                    # Review standards & invariant rules
├── CONTEXT.md                             # Canonical domain terms & vocabulary
├── DESIGN.md                              # Visual design tokens & styling specs
├── PRODUCT.md                             # Product positioning, target personas, principles
├── package.json                           # Dependencies and build scripts
├── tailwind.config.ts                     # Extended color palettes, fonts, shadows
└── tsconfig.json                          # Strict TypeScript compiler options
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (version `18.18.0` or higher, Node 20+ recommended)
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/inamulhaqueinam5/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### Verification Commands
```bash
# Fast, deterministic TypeScript validation
npm run typecheck

# Code formatting and Next.js Core Web Vitals checks
npm run lint

# Production build and RSC payload compilation
npm run build
```

---

## 🤖 AI Agent & Developer Navigation

This codebase is specifically architected for seamless human-agent pair programming. Before executing changes, review:
- [`AGENTS.md`](AGENTS.md): Strict invariants and workflow rules for autonomous agents.
- [`CODING_STANDARDS.md`](CODING_STANDARDS.md): Boundaries for React Server Components vs leaf client adapters.
- [`CONTEXT.md`](CONTEXT.md): Official vocabulary (`SectionFrame`, `Evidence Record`, `Client Seam`).
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md): Step-by-step instructions for adding new publications, projects, or credentials.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): In-depth review of component lifecycles and layout composition.
- [`docs/ROADMAP_V2.md`](docs/ROADMAP_V2.md): Planned initiatives and specifications for Version 2.0.

---

## 🗺️ Version 2.0 Roadmap

See [`docs/ROADMAP_V2.md`](docs/ROADMAP_V2.md) for full architectural specs. Key upcoming features:
- [ ] **Interactive AI Recruiter Agent:** In-browser conversational LLM trained on Inamul's research papers and engineering work.
- [ ] **Interactive ML Model Playground:** Client-side SHAP visualizer and real-time model inference widget.
- [ ] **MDX Engineering Blog:** Dedicated technical writing articles covering Explainable AI and full-stack system patterns.
- [ ] **Live Contact Engine:** Direct email dispatch integration via Resend / Next.js Server Actions.
- [ ] **Dual-World Light/Dark Toggle:** Seamless theme toggle respecting system preference with persistent local state.

---

## 👤 Author & Contact

**Inamul Haque Inam**
- **Location:** Dhaka, Bangladesh
- **Email:** [inamulhaqueinam5@gmail.com](mailto:inamulhaqueinam5@gmail.com)
- **Phone:** [+8801515259613](tel:+8801515259613)
- **LinkedIn:** [linkedin.com/in/inamulhaqueinam5](https://www.linkedin.com/in/inamulhaqueinam5/)
- **GitHub:** [github.com/inamulhaqueinam5](https://github.com/inamulhaqueinam5)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to reference the architecture and code structure.
