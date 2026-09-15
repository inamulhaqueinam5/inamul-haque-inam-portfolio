"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { User, Terminal, Award, Globe } from "lucide-react";

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: "cyan" | "emerald" | "amber";
  icon: React.ComponentType<{ className?: string }>;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Inamul Haque Inam",
    subtitle: "AI-Native Software Engineer & Business Strategist",
    badge: "BSc in CSE",
    badgeVariant: "emerald",
    icon: User,
  },
  {
    id: 2,
    title: "Full-Stack Engineering & Agentic Automation",
    subtitle: "Next.js, TypeScript, Python & Autonomous Workflows",
    badge: "Production-Grade",
    badgeVariant: "cyan",
    icon: Terminal,
  },
  {
    id: 3,
    title: "4 Peer-Reviewed Papers",
    subtitle: "Machine Learning & Deep Learning",
    badge: "IEEE & Elsevier",
    badgeVariant: "emerald",
    icon: Award,
  },
  {
    id: 4,
    title: "Rectangle International AB (Sweden)",
    subtitle: "Swedish Remote Operations & Strategy",
    badge: "Global Experience",
    badgeVariant: "amber",
    icon: Globe,
  },
];

export const HeroCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  const current = slides[currentIndex];
  const IconComponent = current.icon;

  const badgeStyles = {
    emerald: "bg-brand-emerald/15 text-brand-emerald-light border-brand-emerald/30",
    cyan: "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30",
    amber: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
  };

  const iconStyles = {
    emerald: "bg-brand-emerald/10 border-brand-emerald/25 text-brand-emerald",
    cyan: "bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan",
    amber: "bg-brand-amber/10 border-brand-amber/25 text-brand-amber",
  };

  return (
    <div
      className="relative w-full rounded-xl bg-surface-subtle/50 p-2.5 sm:p-3 border border-white/[0.06] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Executive Profile Highlights"
      aria-live="off"
    >
      <div className="relative min-h-[72px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full flex flex-col justify-between"
          >
            {/* Top Row: Icon + Slide Counter on Left, Badge on Right */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${
                    iconStyles[current.badgeVariant]
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-ink-tertiary">
                  0{currentIndex + 1} / 0{slides.length}
                </span>
              </div>

              <div className="shrink-0 text-right">
                <span
                  className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                    badgeStyles[current.badgeVariant]
                  }`}
                >
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Bottom Row: Full-width Title & Subtitle with Zero Truncation */}
            <div className="w-full pr-1">
              <h4 className="text-xs sm:text-[13px] font-bold text-ink-primary leading-snug tracking-tight">
                {current.title}
              </h4>
              <p className="text-[11px] font-mono text-ink-secondary leading-snug mt-0.5">
                {current.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators / Navigation Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-2.5 pt-2 border-t border-white/[0.06]">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-1 focus-visible:ring-offset-[#0B0D14] ${
                isActive
                  ? "w-5 bg-brand-emerald"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
