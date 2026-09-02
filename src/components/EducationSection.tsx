"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Building2,
  MapPin,
} from "lucide-react";
import { education } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";

export const EducationSection: React.FC = () => {
  return (
    <SectionFrame
      id="education"
      badge={{ label: "ACADEMIC FOUNDATION", icon: GraduationCap }}
      title={
        <span className="flex items-center gap-3">
          <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan shrink-0" />
          <span>Academic Degrees &amp; Excellence</span>
        </span>
      }
      description="Formal higher education in Computer Science & Engineering alongside distinctions in fundamental analytical and scientific disciplines."
      accent="cyan"
      backgroundClassName="bg-surface-subtle/30"
      ambientGlow={{ color: "cyan", position: "right" }}
      itemCount={{
        count: education.length,
        label: "Academic Degrees & Excellence Milestones",
        summary: "BSc in CSE (Southeast University) • HSC (Navy College Dhaka) • SSC (Badda Alatunnesa)",
        expandLabel: "Education",
      }}
    >
      <div className="space-y-6">
        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-1">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-border hover:border-brand-cyan/40 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between group"
            >
              <div>
                      {/* Header: Period & Result */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-ink-tertiary mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                          {edu.period}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/30">
                          {edu.result}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold text-ink-primary group-hover:text-brand-cyan transition-colors mb-1.5">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <div className="text-xs font-medium text-brand-emerald-light mb-4 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      {/* Highlights */}
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-surface-border/60">
                        {edu.highlights}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Highlights Strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 rounded-2xl bg-[#08090D] border border-surface-border"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
                  <div className="sm:pr-6 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-ink-tertiary">
                      Typing Speed
                    </span>
                    <div className="text-base font-mono font-bold text-ink-primary flex items-center gap-2">
                      <span className="text-brand-emerald">102 WPM</span>
                      <span className="text-xs text-ink-tertiary font-normal">(Gross / Net)</span>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:px-6 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-ink-tertiary">
                      Languages
                    </span>
                    <div className="text-sm sm:text-base font-semibold text-ink-primary">
                      English <span className="text-xs text-ink-tertiary font-mono">(Fluent)</span> &amp; Bengali <span className="text-xs text-ink-tertiary font-mono">(Native)</span>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-6 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-ink-tertiary">
                      Location
                    </span>
                    <div className="text-base font-semibold text-ink-primary flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-cyan" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </motion.div>
      </div>
    </SectionFrame>
  );
};
