"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectFilterGalleryProps {
  categories: string[];
  projectMetadata: Array<{ id: string; category: string }>;
  children: React.ReactNode;
}

export const ProjectFilterGallery: React.FC<ProjectFilterGalleryProps> = ({
  categories,
  projectMetadata,
  children,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const childrenArray = React.Children.toArray(children);

  return (
    <div>
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
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
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
          {childrenArray.map((child, index) => {
            const item = projectMetadata[index];
            if (activeCategory !== "All" && item?.category !== activeCategory) {
              return null;
            }
            return (
              <motion.div
                key={item?.id || index}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

