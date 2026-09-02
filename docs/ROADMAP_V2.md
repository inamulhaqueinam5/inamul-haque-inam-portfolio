# Portfolio Version 2.0 Roadmap

This roadmap outlines the planned technical initiatives, architectural enhancements, and interactive capabilities for **Version 2.0** of Inamul Haque Inam\'s Portfolio.

---

## 🎯 Vision for Version 2.0

Transform the portfolio from a high-craft static showcase into an **intelligent, AI-native interactive platform** that demonstrates Inamul\'s machine learning expertise, full-stack capabilities, and agentic workflows through live, browser-native experiences.

---

## 🚀 Key Initiatives & Feature Backlog

### Phase 1: Intelligent Recruiter Interaction

#### 1. Interactive AI Persona & Recruiter Assistant
- **Objective**: Embed a conversational AI assistant capable of answering recruiter questions regarding Inamul\'s research papers, tech stack experience, architectural decisions, and availability.
- **Architecture**:
  - Next.js Route Handler (`/api/chat`) streaming responses using Google Gemini API (`gemini-2.5-flash`) or Anthropic Claude.
  - Zero external database required: RAG context provided directly via typed serialization of `src/data/portfolioData.ts`.
  - Leaf client chat widget (`src/components/RecruiterChatBot.tsx`) with floating trigger, markdown rendering, and suggested prompt chips (e.g., *"Explain the SHAP feature selection in your IEEE paper"*, *"Why choose Prisma over raw SQL in SkillBridge?"*).

#### 2. Live Contact Engine & Verification
- **Objective**: Direct contact form with real-time email delivery.
- **Architecture**:
  - React 19 Server Action with Zod schema validation.
  - Integration with **Resend** or **Web3Forms** for zero-maintenance transactional email forwarding directly to `inamulhaqueinam5@gmail.com`.
  - Rate limiting via `@upstash/ratelimit` to prevent spam.

---

### Phase 2: Scientific & ML Interactive Showcases

#### 3. Interactive SHAP & Healthcare Model Explorer
- **Objective**: Allow technical recruiters and researchers to interactively test the machine learning models published in IEEE BECITHCON / Elsevier.
- **Architecture**:
  - Pre-computed SHAP explanation matrices or ONNX Runtime Web (`onnxruntime-web`) execution directly inside the browser.
  - Interactive sliders for clinical indicators (e.g., Maternal Age, Gestational Weeks, Blood Pressure) showing real-time risk scores and SHAP waterfall contribution bars.

---

### Phase 3: Content Expansion & Thought Leadership

#### 4. MDX Research & Engineering Blog
- **Objective**: Publish long-form technical articles, post-mortems, and paper explainers.
- **Architecture**:
  - Native `@next/mdx` App Router integration under `src/app/blog/[slug]/page.tsx`.
  - Code syntax highlighting with `rehype-pretty-code` and KaTeX math rendering for equations.

#### 5. Dual-World Light / Dark Ambient Theme Switcher
- **Objective**: Provide users with a toggle between the current **Dark Obsidian** mode and a **Crisp Light Editorial** mode.
- **Architecture**:
  - Tailwind `darkMode: "class"` with `next-themes` or custom zero-dependency theme script in `layout.tsx` to eliminate Flash of Unstyled Content (FOUC).

---

## 🛠️ Guidelines for Future AI Agents Implementing V2

When implementing any feature from this roadmap:
1. **Branch Strategy**: Create a dedicated feature branch (e.g. `feat/v2-ai-assistant`, `feat/v2-contact-form`).
2. **Preserve RSC Seam**: Keep all chat interfaces, form controls, and sliders as leaf Interaction Adapters.
3. **Type Safety**: Maintain strict TypeScript interfaces in `src/types/index.ts`.
4. **Verification**: Always execute `npm run typecheck`, `npm run lint`, and `npm run build` before pushing.
