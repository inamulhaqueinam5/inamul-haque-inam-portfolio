# Content Modification & Data Management Guide

All portfolio content is decoupled from UI presentation and resides in **`src/data/portfolioData.ts`**. TypeScript type definitions are enforced in **`src/types/index.ts`**.

Follow this guide whenever adding or modifying factual records to ensure type safety and narrative integrity.

---

## 1. Updating Personal Information & Statistics

Navigate to `personalInfo` in `src/data/portfolioData.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Inamul Haque Inam",
  headline: "AI-Native Software Engineer & Business Strategist",
  tagline: "Bridging Tech, Data and Agentic Automation",
  location: "Dhaka, Bangladesh",
  email: "inamulhaqueinam5@gmail.com",
  phone: "+8801515259613",
  bio: "...",
  availability: "Full-Time (Ready for immediate onboarding)",
  socials: {
    github: "https://github.com/inamulhaqueinam5",
    linkedin: "https://www.linkedin.com/in/inamulhaqueinam5/",
    ...
  },
  stats: [
    { label: "Peer-Reviewed Papers", value: "5" },
    { label: "Engineering Projects", value: "4" },
    { label: "BSc in CSE (Southeast University)", value: "3.59 CGPA" },
    { label: "Typing Speed", value: "102 WPM" },
  ],
};
```

---

## 2. Adding a Peer-Reviewed Publication

Add a new entry to the `publications` array in `src/data/portfolioData.ts`:

```typescript
{
  id: "unique-publication-slug",
  title: "Full Paper Title Exactly as Indexed",
  venue: "Conference or Journal Name (e.g. IEEE BECITHCON 2025)",
  year: "2025",
  role: "1st Author" | "Co-Author",
  status: "Published" | "Accepted" | "Under Review",
  doi: "https://doi.org/10.xxxx/...",                 // Optional if under review
  sciencedirectUrl: "https://www.sciencedirect.com/...", // Optional
  authors: [
    "Inamul Haque Inam (1st Author)",
    "Author Two",
    "Author Three"
  ],
  problem: "1-2 sentences clearly summarizing the clinical or scientific problem addressed.",
  methodology: "Summary of ML models, feature selection techniques, and explainability frameworks.",
  metrics: [
    { label: "Accuracy", value: "94.54%" },
    { label: "ROC-AUC", value: "94.05%" },
    { label: "Features", value: "18 → 12" },
  ],
  keywords: ["Explainable AI (XAI)", "SHAP", "CatBoost", "Healthcare"],
}
```

---

## 3. Adding an Engineering Project

Add a new item to the `projects` array in `src/data/portfolioData.ts`:

```typescript
{
  id: "project-slug",
  title: "Platform Name",
  subtitle: "High-level architectural one-liner",
  category: "Full-Stack Web" | "AI & Document Engine" | "Enterprise Web" | "Social & Media",
  challenge: "The specific architectural or systems bottleneck that needed to be solved.",
  solution: "The technical solution implemented (e.g., caching, relational schema design, client rendering).",
  architecture: [
    "Microservice/modular service structure",
    "Database indexing and query optimization",
    "Authentication and authorization flows",
  ],
  impact: "Quantifiable impact (e.g., 90% reduction in latency, 400+ active users).",
  techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  liveUrl: "https://demo.example.com",     // Optional
  githubUrl: "https://github.com/...",     // Optional
  featured: true,                          // Highlights project in gallery
}
```

---

## 4. Adding Professional Experience

Add a new record to the `experiences` array in `src/data/portfolioData.ts`:

```typescript
{
  id: "experience-slug",
  role: "Official Job Title",
  organization: "Company or Institution Name",
  location: "Stockholm, Sweden (Remote)",
  period: "Month Year – Month Year",
  type: "Remote" | "On-site" | "Hybrid",
  summary: "Executive overview of your position and responsibilities.",
  responsibilities: [
    {
      category: "Workflow Automation & Operations",
      description: "Concrete description of systems maintained and KPIs improved.",
    },
  ],
  skillsUsed: ["Python", "Data Analysis", "Process Automation"],
}
```

---

## 5. Adding Industry Certifications

Add to the `credentials` array in `src/data/portfolioData.ts`:

```typescript
{
  id: "credential-slug",
  title: "Certificate Name",
  issuer: "Issuing Organization (e.g. Anthropic, Udemy, Coursera)",
  date: "Month Year",
  credentialId: "Optional Verification ID",
  verifyUrl: "https://verification-link.com",
  competencies: ["Competency 1", "Competency 2"],
  scope: "Professional" | "Specialized" | "Academic",
}
```

---

## 6. Pre-Commit Validation

Always verify your changes before pushing:

```bash
npm run typecheck  # Ensures all added data matches TypeScript interfaces
npm run lint       # Ensures formatting and standards compliance
npm run build      # Verifies static generation
```
