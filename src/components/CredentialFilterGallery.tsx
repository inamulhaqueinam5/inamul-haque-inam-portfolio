"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface SlottedCredentialItem {
  id: string;
  category: string;
  content: React.ReactNode;
}

export interface CredentialFilterGalleryProps {
  items: SlottedCredentialItem[];
  className?: string;
}

export const CredentialFilterGallery: React.FC<CredentialFilterGalleryProps> = ({
  items,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  // Internal category derivation with counts
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

  return (
    <div className={className}>
      {/* Category Filter Pills with Sliding Spring-Physics Indicator */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter credentials by domain">
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
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
                isActive
                  ? "text-[#08090D] font-semibold"
                  : "text-ink-secondary hover:text-ink-primary bg-surface/80 hover:bg-surface border border-surface-border hover:border-surface-border-hover"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCredentialFilterPill"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 32 }
                  }
                  className="absolute inset-0 bg-brand-amber rounded-xl shadow-[0_0_20px_-3px_rgba(245,158,11,0.25)] -z-0"
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[#08090D]/20 text-[#08090D] font-bold"
                      : "bg-surface-subtle text-ink-tertiary"
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered Credentials Grid with Smooth Reflow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
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
              className="h-full flex flex-col"
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
