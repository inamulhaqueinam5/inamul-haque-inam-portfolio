"use client";

import React, { useState } from "react";

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
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-brand-cyan text-[#08090D] font-semibold shadow-glow-cyan"
                : "bg-surface border border-surface-border text-ink-secondary hover:text-ink-primary hover:border-surface-border-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Projects Grid */}
      <div className="space-y-12">
        {childrenArray.filter((_, index) => {
          if (activeCategory === "All") return true;
          return projectMetadata[index]?.category === activeCategory;
        })}
      </div>
    </div>
  );
};
