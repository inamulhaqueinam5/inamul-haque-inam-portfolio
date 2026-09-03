"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface SlottedProjectItem {
  id: string;
  category: string;
  content: React.ReactNode;
}

export interface ProjectFilterGalleryProps {
  items: SlottedProjectItem[];
  className?: string;
}

export const ProjectFilterGallery: React.FC<ProjectFilterGalleryProps> = ({
  items,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  // Internal category derivation — callers do not need to extract categories
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) => activeCategory === "All" || item.category === activeCategory
      ),
    [items, activeCategory]
  );

  return (
    <div className={className}>
      {/* Category Filter Pills with Sliding Indicator */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
                isActive
                  ? "text-[#08090D] font-semibold"
                  : "text-ink-secondary hover:text-ink-primary bg-surface/80 hover:bg-surface border border-surface-border hover:border-surface-border-hover"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 32 }
                  }
                  className="absolute inset-0 bg-brand-cyan rounded-xl shadow-glow-cyan -z-0"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Filtered Projects Grid with Smooth Reflow */}
      <div className="space-y-12">
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
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

