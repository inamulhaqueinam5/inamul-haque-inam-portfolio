import React from "react";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  Cpu,
} from "lucide-react";
import { Project } from "@/types";
import { AnimateInView } from "@/components/AnimateInView";
import { CardSpotlight } from "@/components/CardSpotlight";
import { EvidenceAction } from "@/components/EvidenceAction";

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <AnimateInView
      delay={index * 0.1}
      duration={0.6}
      yOffset={25}
      className="h-full"
    >
      <CardSpotlight
        accent="cyan"
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
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-ink-secondary leading-relaxed"
                >
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
              <EvidenceAction
                href={project.liveUrl}
                variant="demo"
                contextTitle={project.title}
              />
            )}
            {project.githubUrl && (
              <EvidenceAction
                href={project.githubUrl}
                variant="repo"
                contextTitle={project.title}
              />
            )}
          </div>
        </div>
      </div>
      </CardSpotlight>
    </AnimateInView>
  );
};
