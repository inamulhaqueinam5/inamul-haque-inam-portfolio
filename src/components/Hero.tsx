import React from "react";
import {
  Mail,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { AnimateInView } from "@/components/AnimateInView";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none animate-ambient-pulse-reverse" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <AnimateInView
          yOffset={15}
          duration={0.5}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-surface-border text-xs font-mono text-ink-secondary mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
          <span>{personalInfo.availability}</span>
        </AnimateInView>

        {/* Main Headline */}
        <AnimateInView
          as="h1"
          delay={0.1}
          duration={0.6}
          yOffset={20}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          AI-Native Software Engineer{" "}
          <span className="text-brand-emerald">
            &amp; Business Strategist
          </span>
          <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-ink-secondary mt-3 font-mono">
            Bridging Tech, Data &amp; Agentic Automation
          </span>
        </AnimateInView>

        {/* Narrative & Value Proposition */}
        <AnimateInView
          as="p"
          delay={0.2}
          duration={0.6}
          yOffset={20}
          className="text-base sm:text-lg text-ink-secondary max-w-3xl mx-auto leading-relaxed mb-10"
        >
          An agile{" "}
          <strong className="text-ink-primary font-semibold">
            AI-native technologist
          </strong>{" "}
          blending{" "}
          <strong className="text-ink-primary font-semibold">
            published research
          </strong>{" "}
          with{" "}
          <strong className="text-ink-primary font-semibold">
            scalable full-stack development
          </strong>{" "}
          and{" "}
          <strong className="text-ink-primary font-semibold">
            strategic business operations
          </strong>
          . Focused on driving{" "}
          <strong className="text-ink-primary font-semibold">
            rapid commercial growth
          </strong>{" "}
          and operational efficiency through{" "}
          <strong className="text-ink-primary font-semibold">
            agentic workflows
          </strong>{" "}
          and{" "}
          <strong className="text-ink-primary font-semibold">
            data-driven insights
          </strong>
          .
        </AnimateInView>

        {/* Primary Action Buttons */}
        <AnimateInView
          delay={0.3}
          duration={0.6}
          yOffset={20}
          className="flex flex-wrap items-center justify-center gap-4 mb-4"
        >
          <a
            href="#research"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#08090D] bg-brand-emerald hover:bg-brand-emerald-light rounded-xl shadow-glow-emerald transition-all hover:scale-[1.02] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Published Research</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-ink-primary bg-surface-subtle hover:bg-surface-elevated border border-surface-border hover:border-brand-cyan/40 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
          >
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span>View Projects</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 text-sm font-medium text-ink-secondary hover:text-ink-primary border border-surface-border hover:border-brand-emerald/40 bg-surface/40 hover:bg-surface rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
          >
            <Mail className="w-4 h-4 text-brand-emerald" />
            <span>Get in Touch</span>
          </a>
        </AnimateInView>
      </div>
    </section>
  );
};


