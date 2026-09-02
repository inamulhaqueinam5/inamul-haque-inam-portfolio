"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Building2,
} from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";

export const ExperienceSection: React.FC = () => {
  return (
    <SectionFrame
      id="experience"
      badge={{ label: "BUSINESS & OPERATIONS", icon: TrendingUp }}
      title="Operations & Professional Experience"
      description="Bridging technical system execution with international business operations, executive KPI data analytics, and laboratory research workflows."
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
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-surface-border hover:border-brand-emerald/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-card-hover group"
            >
              <div>
                {/* Header: Company, Location, Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {exp.organization}
                  </span>

                  <div className="flex items-center gap-3 text-xs font-mono text-ink-tertiary">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-cyan" />
                      {exp.location} ({exp.type})
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-emerald" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-ink-primary group-hover:text-brand-emerald-light transition-colors mb-2">
                  {exp.role}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Key Deliverables & Responsibilities */}
                <div className="space-y-4 mb-6">
                  {exp.responsibilities.map((resp, i) => (
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

              {/* Footer: Competencies Used */}
              <div className="pt-4 border-t border-surface-border">
                <div className="text-[11px] font-mono text-ink-tertiary uppercase tracking-wider mb-2">
                  Applied Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#08090D] text-ink-secondary border border-surface-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
              </div>
    </SectionFrame>
  );
};


