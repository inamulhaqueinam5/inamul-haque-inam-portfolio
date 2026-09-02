"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  Cpu,
  BarChart2,
  FileCheck2,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { publications } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";

export const ResearchSection: React.FC = () => {
  return (
    <SectionFrame
      id="research"
      badge={{ label: "PEER-REVIEWED PUBLICATIONS", icon: BookOpen }}
      title="International Research & Publications"
      description="Peer-reviewed scientific publications focusing on Explainable AI, clinical predictive modeling, automated feature selection and dual-stream deep learning architectures."
      accent="emerald"
      backgroundClassName="bg-surface-subtle/40"
      ambientGlow={{ color: "cyan", position: "left" }}
      itemCount={{
        count: publications.length,
        label: "Peer-Reviewed Scientific Publications",
        summary: "IEEE BECITHCON 2025 • Elsevier 2026 • IEEE ICCIT 2025 (SHAP, XAI, Ensembles)",
        expandLabel: "Publications",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-surface border border-surface-border hover:border-surface-border-hover transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-card-hover group"
            >
              {/* Header: Venue & Status */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 text-xs font-mono font-semibold">
                      {pub.venue}
                    </span>
                    <span className="text-xs font-mono text-ink-tertiary">
                      {pub.year}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-secondary border border-surface-border">
                    {pub.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-ink-primary leading-snug group-hover:text-brand-emerald-light transition-colors mb-5">
                  {pub.title}
                </h3>

                {/* Problem & Solution Breakdown */}
                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border/60">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-cyan mb-1 flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5" />
                      Core Challenge / Problem
                    </div>
                    <p className="text-ink-secondary leading-relaxed">
                      {pub.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border/60">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-emerald-light mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      ML Architecture &amp; XAI Methodology
                    </div>
                    <p className="text-ink-secondary leading-relaxed">
                      {pub.methodology}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {pub.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#08090D] border border-surface-border text-center"
                    >
                      <div className="text-xs sm:text-sm font-bold font-mono text-ink-primary text-brand-emerald">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-ink-tertiary mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Paper Links & Verification */}
              <div className="pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-3">
                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2">
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-brand-emerald-light bg-brand-emerald/10 hover:bg-brand-emerald/20 border border-brand-emerald/30 hover:border-brand-emerald/50 transition-all duration-200 group/doi shadow-sm hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                      title={`View DOI for ${pub.title}`}
                      aria-label={`Open DOI for ${pub.title} in new tab`}
                    >
                      <span>View DOI</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-emerald group-hover/doi:translate-x-0.5 group-hover/doi:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  )}

                  {pub.sciencedirectUrl && (
                    <a
                      href={pub.sciencedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 hover:border-brand-cyan/50 transition-all duration-200 group/sd shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                      title={`View on ScienceDirect for ${pub.title}`}
                      aria-label={`Open ScienceDirect article for ${pub.title} in new tab`}
                    >
                      <span>ScienceDirect</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-cyan group-hover/sd:translate-x-0.5 group-hover/sd:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  )}

                  {pub.status === "Under Review" && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-ink-tertiary bg-surface-subtle border border-surface-border">
                      <Clock className="w-3.5 h-3.5 text-brand-amber/80" />
                      <span>Peer Review in Progress</span>
                    </div>
                  )}
                </div>

                {/* Verification Status */}
                <div className="text-xs font-mono text-brand-emerald flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>{pub.status === "Published" ? "Verified Paper" : "Manuscript Submitted"}</span>
                </div>
              </div>

              {/* Keywords */}
              <div className="pt-3 flex flex-wrap gap-1.5">
                {pub.keywords.slice(0, 4).map((kw, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-ink-tertiary border border-surface-border"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </SectionFrame>
  );
};


