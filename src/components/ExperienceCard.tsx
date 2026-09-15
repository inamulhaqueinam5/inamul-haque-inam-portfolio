import React from "react";
import {
  Building2,
  MapPin,
  Calendar,
} from "lucide-react";
import { Experience } from "@/types";
import { ShowcaseCard } from "@/components/ShowcaseCard";

export interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index = 0,
}) => {
  return (
    <ShowcaseCard
      index={index}
      accent="emerald"
    >
      <div>
        {/* Header: Company, Location and Period */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 rounded-md bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 text-xs font-mono font-semibold flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            {experience.organization}
          </span>

          <div className="flex items-center gap-3 text-xs font-mono text-ink-tertiary">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-cyan" />
              {experience.location} ({experience.type})
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-brand-emerald" />
              {experience.period}
            </span>
          </div>
        </div>

        {/* Role Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-ink-primary group-hover:text-brand-emerald-light transition-colors mb-2">
          {experience.role}
        </h3>

        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 font-medium">
          {experience.summary}
        </p>

        {/* Key Deliverables and Responsibilities */}
        <div className="space-y-4 mb-6">
          {experience.responsibilities.map((resp, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border/60"
            >
              <h4 className="text-xs font-mono font-semibold text-brand-emerald mb-1">
                {resp.category}
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {resp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Applied Competencies */}
      <div className="pt-4 border-t border-surface-border">
        <div className="text-[11px] font-mono text-ink-tertiary uppercase tracking-wider mb-2">
          Applied Competencies
        </div>
        <div className="flex flex-wrap gap-1.5">
          {experience.skillsUsed.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#08090D] text-ink-secondary border border-surface-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ShowcaseCard>
  );
};
