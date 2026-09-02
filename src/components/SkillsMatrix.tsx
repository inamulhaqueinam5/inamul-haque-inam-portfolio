"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  TrendingUp,
  Database,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";

export const SkillsMatrix: React.FC = () => {
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
    <SectionFrame
      id="skills"
      badge={{ label: "TECHNICAL & COMMERCIAL ARSENAL", icon: Code2 }}
      title="Core Technical & Strategic Capabilities"
      description="Engineered to bridge scalable software systems, agentic AI automation and high-growth business operations."
      accent="cyan"
      backgroundClassName="bg-surface-subtle/30"
      itemCount={{
        count: skillCategories.length,
        label: "Technical & Strategic Domains",
        summary: "Engineering • Data Science & ML • Operations & Strategy • Databases & Infrastructure",
        expandLabel: "Skills",
      }}
    >
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
    </SectionFrame>
  );
};


