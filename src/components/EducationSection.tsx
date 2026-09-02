"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Building2,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { education } from "@/data/portfolioData";

export const EducationSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#education") {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  return (
    <section id="education" className="relative py-24 border-t border-surface-border bg-surface-subtle/30">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono font-semibold text-brand-cyan mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan shrink-0" />
              <span>Academic Degrees &amp; Excellence</span>
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Formal higher education in Computer Science &amp; Engineering alongside distinctions in fundamental analytical and scientific disciplines.
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-cyan/50 text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expand education section" : "Collapse education section"}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : "bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                }`}
              />
              <span>{isCollapsed ? `Expand (${education.length} Degrees)` : "Collapse Section"}</span>
              <ChevronDown
                className={`w-4 h-4 text-brand-cyan transition-transform duration-300 ${
                  isCollapsed ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content with Animation */}
        <AnimatePresence initial={false} mode="wait">
          {!isCollapsed ? (
            <motion.div
              key="education-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="education-collapsed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-cyan/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-brand-cyan transition-colors">
                    {education.length} Academic Degrees &amp; Excellence Milestones Hidden
                  </div>
                  <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                    BSc in CSE (Southeast University) • HSC (Navy College Dhaka) • SSC (Badda Alatunnesa)
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border group-hover:border-brand-cyan/50 text-xs font-mono text-brand-cyan font-medium transition-all">
                <span>Expand Education</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
