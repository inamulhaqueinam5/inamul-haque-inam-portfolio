"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface SlottedRecordItem {
  id: string;
  category: string;
  content: React.ReactNode;
}

export type GalleryAccent = "cyan" | "amber" | "emerald" | "purple";
export type GalleryLayout = "stack" | "grid";

export interface SlottedFilterGalleryProps {
  items: SlottedRecordItem[];
  layout?: GalleryLayout;
  accent?: GalleryAccent;
  showCounts?: boolean;
  ariaLabel?: string;
  className?: string;
}

const ACCENT_STYLES: Record<
  GalleryAccent,
  {
    pillGlow: string;
    focusRing: string;
    activePillBg: string;
  }
> = {
  cyan: {
    pillGlow: "shadow-glow-cyan",
    focusRing: "focus-visible:ring-brand-cyan",
    activePillBg: "bg-brand-cyan",
  },
  amber: {
    pillGlow: "shadow-[0_0_20px_-3px_rgba(245,158,11,0.25)]",
    focusRing: "focus-visible:ring-brand-amber",
    activePillBg: "bg-brand-amber",
  },
  emerald: {
    pillGlow: "shadow-glow-emerald",
    focusRing: "focus-visible:ring-brand-emerald",
    activePillBg: "bg-brand-emerald",
  },
  purple: {
    pillGlow: "shadow-[0_0_20px_-3px_rgba(168,85,247,0.25)]",
    focusRing: "focus-visible:ring-brand-purple",
    activePillBg: "bg-brand-purple",
  },
};

const LAYOUT_CONTAINER_CLASSES: Record<GalleryLayout, string> = {
  stack: "space-y-12",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1",
};

export const SlottedFilterGallery: React.FC<SlottedFilterGalleryProps> = ({
  items,
  layout = "stack",
  accent = "cyan",
  showCounts = false,
  ariaLabel = "Category filter",
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  // Internal category derivation
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(items.map((item) => item.category)));
    return ["All", ...uniqueCategories];
  }, [items]);

  const getCategoryCount = (category: string) => {
    if (category === "All") return items.length;
    return items.filter((item) => item.category === category).length;
  };

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) => activeCategory === "All" || item.category === activeCategory
      ),
    [items, activeCategory]
  );

  const style = ACCENT_STYLES[accent] || ACCENT_STYLES.cyan;
  const containerClass = LAYOUT_CONTAINER_CLASSES[layout] || LAYOUT_CONTAINER_CLASSES.stack;
  const layoutScopeId = `activePill-${accent}-${layout}`;

  return (
    <div className={className}>
      {/* Category Filter Navigation with Spring-Physics Indicator */}
      <div
        className="flex flex-wrap items-center gap-2 mb-8"
        role="tablist"
        aria-label={ariaLabel}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = getCategoryCount(cat);

          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 ${style.focusRing} focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
                isActive
                  ? "text-[#08090D] font-semibold"
                  : "text-ink-secondary hover:text-ink-primary bg-surface/80 hover:bg-surface border border-surface-border hover:border-surface-border-hover"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={layoutScopeId}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 32 }
                  }
                  className={`absolute inset-0 ${style.activePillBg} rounded-xl ${style.pillGlow} -z-0`}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{cat}</span>
                {showCounts && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-[#08090D]/20 text-[#08090D] font-bold"
                        : "bg-surface-subtle text-ink-tertiary"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered Records Container with Smooth Reflow */}
      <div className={containerClass}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout={!shouldReduceMotion}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 15, scale: 0.98 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -15, scale: 0.98 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.15 }
                  : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
              }
              className={layout === "grid" ? "h-full flex flex-col" : undefined}
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
