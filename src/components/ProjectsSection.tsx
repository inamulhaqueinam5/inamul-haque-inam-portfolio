"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  ChevronDown,
} from "lucide-react";
import { projects } from "@/data/portfolioData";

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#projects") {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  const categories = [
    "All",
    "Full-Stack Web",
    "AI & Document Engine",
    "Enterprise Web",
    "Social & Media",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono font-semibold text-brand-cyan mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
              Engineering Projects
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Production-grade systems engineered with clean architectures, deterministic algorithms, type-safe APIs, and client-side performance optimizations.
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-cyan/50 text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expand engineering projects section" : "Collapse engineering projects section"}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : "bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                }`}
              />
              <span>{isCollapsed ? `Expand (${projects.length} Projects)` : "Collapse Section"}</span>
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
              key="projects-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-brand-cyan text-[#08090D] font-semibold shadow-glow-cyan"
                        : "bg-surface border border-surface-border text-ink-secondary hover:text-ink-primary hover:border-surface-border-hover"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-surface-border hover:border-brand-cyan/40 transition-all p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Title, Subtitle, Story, Impact */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-brand-cyan/15 text-brand-cyan text-xs font-mono font-semibold border border-brand-cyan/30">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-md bg-brand-emerald/15 text-brand-emerald-light text-[11px] font-mono font-medium border border-brand-emerald/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured Architecture
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-ink-primary group-hover:text-brand-cyan transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-ink-secondary mb-6">
                      {project.subtitle}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6 text-sm">
                      <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border/60">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-amber block mb-1.5">
                          Problem Solved
                        </span>
                        <p className="text-ink-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border/60">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan block mb-1.5">
                          Architectural Solution
                        </span>
                        <p className="text-ink-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Measurable Value / Impact */}
                    <div className="p-3.5 rounded-xl bg-brand-emerald/[0.04] border border-brand-emerald/20 flex items-start gap-3">
                      <Zap className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono font-bold text-brand-emerald-light uppercase tracking-wide block">
                          Measurable Impact
                        </span>
                        <p className="text-xs sm:text-sm text-ink-primary mt-0.5 font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural Highlights & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  {/* System Highlights */}
                  <div className="p-5 rounded-xl bg-[#08090D] border border-surface-border">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-tertiary mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                      Key Engineering Decisions
                    </h4>
                    <ul className="space-y-2.5">
                      {project.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-ink-secondary leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-tertiary mb-3">
                      Technologies &amp; Libraries
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-subtle text-ink-secondary border border-surface-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-[#08090D] bg-brand-cyan hover:bg-brand-cyan-light shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/demo"
                        title={`Launch live demo for ${project.title}`}
                        aria-label={`Open live demo for ${project.title} in new tab`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-ink-primary bg-surface-subtle hover:bg-surface-elevated border border-surface-border hover:border-brand-cyan/50 hover:text-brand-cyan shadow-card hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/repo"
                        title={`Explore GitHub repository for ${project.title}`}
                        aria-label={`Open GitHub repository for ${project.title} in new tab`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-ink-secondary group-hover/repo:text-brand-cyan transition-colors" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="projects-collapsed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-cyan/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-brand-cyan transition-colors">
                    {projects.length} Production Engineering Projects Hidden
                  </div>
                  <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                    SkillBridge • OneFit Resume • Executive Banking • Social Media Platform
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border group-hover:border-brand-cyan/50 text-xs font-mono text-brand-cyan font-medium transition-all">
                <span>Expand Projects</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


