"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Globe,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  LineChart,
  ShieldCheck,
  Building2,
  ChevronDown,
} from "lucide-react";
import { experiences } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#experience") {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  return (
    <section id="experience" className="relative py-24 border-t border-surface-border bg-surface-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono font-semibold text-brand-emerald-light mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>BUSINESS &amp; OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
              Operations &amp; Professional Experience
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Bridging technical system execution with international business operations, executive KPI data analytics, and laboratory research workflows.
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-emerald/50 text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expand experience section" : "Collapse experience section"}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                }`}
              />
              <span>{isCollapsed ? `Expand (${experiences.length} Roles)` : "Collapse Section"}</span>
              <ChevronDown
                className={`w-4 h-4 text-brand-emerald transition-transform duration-300 ${
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
              key="experience-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {/* Experience Timeline */}
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
            </motion.div>
          ) : (
            <motion.div
              key="experience-collapsed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-emerald/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-brand-emerald group-hover:border-brand-emerald/40 transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-brand-emerald-light transition-colors">
                    {experiences.length} Professional Operational &amp; Research Roles Hidden
                  </div>
                  <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                    Rectangle International AB (Sweden, Remote) • AMIR Lab (Dhaka)
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border group-hover:border-brand-emerald/50 text-xs font-mono text-brand-emerald font-medium transition-all">
                <span>Expand Experience</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


