"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  TrendingUp,
  Database,
  ChevronDown,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#skills") {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-brand-cyan" />;
      case 1:
        return <BrainCircuit className="w-5 h-5 text-brand-emerald" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-brand-amber" />;
      case 3:
        return <Database className="w-5 h-5 text-brand-purple" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-surface-border bg-surface-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono font-semibold text-brand-cyan mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>TECHNICAL &amp; COMMERCIAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
              Core Technical &amp; Strategic Capabilities
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Engineered to bridge scalable software systems, agentic AI automation and high-growth business operations.
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-cyan/50 text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expand capabilities section" : "Collapse capabilities section"}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : "bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                }`}
              />
              <span>{isCollapsed ? `Expand (${skillCategories.length} Domains)` : "Collapse Section"}</span>
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
              key="skills-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-1">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-surface-border-hover transition-all shadow-card group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border group-hover:border-brand-emerald/40 transition-colors">
                        {getIcon(index)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-ink-primary">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-secondary mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#08090D] text-ink-primary border border-surface-border hover:border-brand-emerald/40 hover:text-brand-emerald-light transition-colors inline-flex items-center gap-1.5 max-w-full"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald/60 shrink-0" />
                          <span className="break-words leading-relaxed">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skills-collapsed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-cyan/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-brand-cyan transition-colors">
                    {skillCategories.length} Technical &amp; Strategic Domains Hidden
                  </div>
                  <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                    Engineering • Data Science &amp; ML • Operations &amp; Strategy • Databases &amp; Infrastructure
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border group-hover:border-brand-cyan/50 text-xs font-mono text-brand-cyan font-medium transition-all">
                <span>Expand Skills</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


