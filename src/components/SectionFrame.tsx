"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type SectionAccent = "emerald" | "cyan" | "amber" | "purple";

export interface SectionBadge {
  label: string;
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
}

export interface SectionItemCount {
  count: number;
  label: string;
  summary?: string;
  expandLabel?: string;
}

export interface SectionFrameProps {
  id: string;
  badge: SectionBadge;
  title: React.ReactNode;
  description: string;
  accent?: SectionAccent;
  itemCount?: SectionItemCount;
  defaultCollapsed?: boolean;
  backgroundClassName?: string;
  ambientGlow?: {
    color?: SectionAccent;
    position?: "left" | "right";
  };
  children: React.ReactNode;
  className?: string;
}

const ACCENT_STYLES: Record<
  SectionAccent,
  {
    badge: string;
    hoverBorder: string;
    activeDot: string;
    chevron: string;
    glow: string;
    textColor: string;
    hoverText: string;
  }
> = {
  emerald: {
    badge: "bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald-light",
    hoverBorder: "hover:border-brand-emerald/50",
    activeDot: "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    chevron: "text-brand-emerald",
    glow: "bg-brand-emerald/5",
    textColor: "text-brand-emerald",
    hoverText: "group-hover:text-brand-emerald-light",
  },
  cyan: {
    badge: "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan",
    hoverBorder: "hover:border-brand-cyan/50",
    activeDot: "bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    chevron: "text-brand-cyan",
    glow: "bg-brand-cyan/5",
    textColor: "text-brand-cyan",
    hoverText: "group-hover:text-brand-cyan",
  },
  amber: {
    badge: "bg-brand-amber/10 border-brand-amber/30 text-brand-amber",
    hoverBorder: "hover:border-brand-amber/50",
    activeDot: "bg-brand-amber shadow-[0_0_8px_rgba(245,158,11,0.8)]",
    chevron: "text-brand-amber",
    glow: "bg-brand-amber/5",
    textColor: "text-brand-amber",
    hoverText: "group-hover:text-brand-amber",
  },
  purple: {
    badge: "bg-brand-purple/10 border-brand-purple/30 text-brand-purple",
    hoverBorder: "hover:border-brand-purple/50",
    activeDot: "bg-brand-purple shadow-[0_0_8px_rgba(168,85,247,0.8)]",
    chevron: "text-brand-purple",
    glow: "bg-brand-purple/5",
    textColor: "text-brand-purple",
    hoverText: "group-hover:text-brand-purple",
  },
};

export const SectionFrame: React.FC<SectionFrameProps> = ({
  id,
  badge,
  title,
  description,
  accent = "cyan",
  itemCount,
  defaultCollapsed = false,
  backgroundClassName = "",
  ambientGlow,
  children,
  className = "",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === `#${id}`) {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, [id]);

  const style = ACCENT_STYLES[accent] || ACCENT_STYLES.cyan;

  const renderBadgeIcon = (iconClass = "w-3.5 h-3.5") => {
    if (!badge.icon) return null;
    if (React.isValidElement(badge.icon)) {
      return badge.icon;
    }
    if (typeof badge.icon === "function") {
      const Component = badge.icon as React.ComponentType<{ className?: string }>;
      return <Component className={iconClass} />;
    }
    return badge.icon;
  };

  const expandLabel = itemCount
    ? `Expand (${itemCount.count} ${itemCount.expandLabel || itemCount.label})`
    : "Expand Section";

  return (
    <section
      id={id}
      className={`relative py-24 border-t border-surface-border ${backgroundClassName} ${className}`}
    >
      {/* Ambient background glow if requested */}
      {ambientGlow && (
        <div
          className={`absolute top-1/2 ${
            ambientGlow.position === "right" ? "right-0" : "left-0"
          } w-96 h-96 ${
            ambientGlow.color ? ACCENT_STYLES[ambientGlow.color].glow : style.glow
          } rounded-full blur-[140px] pointer-events-none -translate-y-1/2`}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            {/* Stage Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold mb-4 ${style.badge}`}
            >
              {renderBadgeIcon()}
              <span>{badge.label}</span>
            </div>

            {/* Title */}
            {typeof title === "string" ? (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
                {title}
              </h2>
            ) : (
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
                {title}
              </div>
            )}

            {/* Description */}
            <p className="text-base text-ink-secondary leading-relaxed">
              {description}
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border ${style.hoverBorder} text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]`}
              aria-expanded={!isCollapsed}
              title={
                isCollapsed
                  ? `Expand ${typeof title === "string" ? title : id} section`
                  : `Collapse ${typeof title === "string" ? title : id} section`
              }
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : style.activeDot
                }`}
              />
              <span>{isCollapsed ? expandLabel : "Collapse Section"}</span>
              <ChevronDown
                className={`w-4 h-4 ${style.chevron} transition-transform duration-300 ${
                  isCollapsed ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content with Height Spring Animation & Collapsed Preview */}
        <AnimatePresence initial={false} mode="wait">
          {!isCollapsed ? (
            <motion.div
              key={`${id}-expanded`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              key={`${id}-collapsed`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsCollapsed(false);
                }
              }}
              onClick={() => setIsCollapsed(false)}
              className={`cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border ${style.hoverBorder} transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface active:scale-[0.99] outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`p-2.5 rounded-xl bg-surface-subtle border border-surface-border ${style.textColor} ${style.hoverBorder} transition-colors`}
                >
                  {renderBadgeIcon("w-4 h-4")}
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold text-ink-primary ${style.hoverText} transition-colors`}
                  >
                    {itemCount ? `${itemCount.count} ${itemCount.label} Hidden` : `${id} Hidden`}
                  </div>
                  {itemCount?.summary && (
                    <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                      {itemCount.summary}
                    </div>
                  )}
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border ${style.hoverBorder} text-xs font-mono ${style.textColor} font-medium transition-all group-hover:scale-105`}
              >
                <span>{itemCount?.expandLabel ? `Expand ${itemCount.expandLabel}` : `Expand ${id}`}</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
