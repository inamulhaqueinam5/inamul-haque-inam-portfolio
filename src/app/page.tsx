import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-ink-primary font-sans antialiased overflow-x-hidden selection:bg-brand-emerald/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Multidisciplinary Skills Matrix */}
        <SkillsMatrix />

        {/* Academic Research (Peer-Reviewed Publications) */}
        <ResearchSection />

        {/* Stage 2: Production Engineering Projects */}
        <ProjectsSection />

        {/* Stage 3: Real-World Operations & Professional Experience */}
        <ExperienceSection />

        {/* Stage 4: Academic Foundation & Degrees */}
        <EducationSection />

        {/* Stage 5: Verified Industry Certifications */}
        <CertificationsSection />

        {/* Stage 6: Direct Contact & Opportunities */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
