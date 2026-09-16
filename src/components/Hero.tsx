import React from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { AnimateInView } from "@/components/AnimateInView";
import { HeroCardCarousel } from "@/components/HeroCardCarousel";
import { NeuralMesh } from "@/components/NeuralMesh";

export const Hero: React.FC = () => {
  const avatarSrc = personalInfo.avatar || "/images/inamul-haque-inam.png";

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting & interactive neural synapse mesh */}
      <NeuralMesh />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-brand-emerald/10 rounded-full blur-[130px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[320px] bg-brand-cyan/10 rounded-full blur-[110px] pointer-events-none animate-ambient-pulse-reverse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Narrative & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability Badge */}
            <AnimateInView
              yOffset={15}
              duration={0.5}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-surface-border text-xs font-mono text-ink-secondary mb-6 sm:mb-8 shadow-sm"
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
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary leading-[1.14] mb-6 max-w-3xl mx-auto lg:mx-0"
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
              className="text-base sm:text-lg text-ink-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4"
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

          {/* Right Column: Executive Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AnimateInView
              delay={0.25}
              duration={0.7}
              yOffset={25}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]"
            >
              {/* Backlight Ambient Glows */}
              <div className="absolute -top-6 -left-6 w-52 h-52 bg-brand-emerald/20 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-brand-cyan/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Obsidian Glass Card Frame */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-glow-emerald/20 group">
                <div className="relative rounded-[22px] overflow-hidden bg-[#08090D] flex flex-col">
                  {/* Portrait Image Showcase (100% Uncovered) */}
                  <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/5] overflow-hidden bg-[#08090D]">
                    <Image
                      src={avatarSrc}
                      alt={personalInfo.name}
                      fill
                      priority
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Subtle bottom fade to transition into dock */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08090D] via-[#08090D]/40 to-transparent pointer-events-none" />

                    {/* Inner Hairline Ring */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

                    {/* Floating Status Pill (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08090D]/85 backdrop-blur-md border border-white/10 shadow-lg text-[11px] font-mono text-ink-primary">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
                      </span>
                      <span>Ready for Onboarding</span>
                    </div>
                  </div>

                  {/* Integrated Highlights Console Deck (Docked Below Photo) */}
                  <div className="p-3 bg-[#0B0D14]/95 border-t border-white/[0.08]">
                    <HeroCardCarousel />
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
};


