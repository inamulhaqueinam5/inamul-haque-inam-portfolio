import React from "react";
import { TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { ExperienceCard } from "@/components/ExperienceCard";

export const ExperienceSection: React.FC = () => {
  return (
    <SectionFrame
      id="experience"
      badge={{ label: "BUSINESS & OPERATIONS", icon: <TrendingUp className="w-3.5 h-3.5" /> }}
      title="Operations & Professional Experience"
      description="Bridging technical system execution with international business operations, executive KPI data analytics and laboratory research workflows."
      accent="emerald"
      backgroundClassName="bg-surface-subtle/30"
      itemCount={{
        count: experiences.length,
        label: "Professional Operational & Research Roles",
        summary: "Rectangle International AB (Sweden, Remote) • AMIR Lab (Dhaka)",
        expandLabel: "Experience",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </SectionFrame>
  );
};
