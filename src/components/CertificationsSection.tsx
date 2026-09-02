"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { credentials } from "@/data/portfolioData";

export const CertificationsSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#certifications") {
        setIsCollapsed(false);
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  return (
    <section id="certifications" className="relative py-24 border-t border-surface-border bg-surface-subtle/20">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-xs font-mono font-semibold text-brand-amber mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>VERIFIED INDUSTRY CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mb-4">
              Certifications
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Verified technical certifications in agentic AI development, relational database engineering, agile delivery, and research typography.
            </p>
          </div>

          {/* Section Collapse Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-amber/50 text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary transition-all duration-200 group shadow-card cursor-pointer"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expand certifications section" : "Collapse certifications section"}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isCollapsed ? "bg-ink-tertiary" : "bg-brand-amber shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                }`}
              />
              <span>{isCollapsed ? `Expand (${credentials.length} Certifications)` : "Collapse Section"}</span>
              <ChevronDown
                className={`w-4 h-4 text-brand-amber transition-transform duration-300 ${
                  isCollapsed ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content with Animation */}
        <AnimatePresence initial={false} mode="wait">
          {!isCollapsed ? (
            <motion.div
              key="certifications-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={cred.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-brand-emerald/40 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header: Issuer Badge & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-brand-emerald/10 text-brand-emerald-light border border-brand-emerald/20">
                          {cred.issuer}
                        </span>
                        <span className="text-xs font-mono text-ink-tertiary">
                          {cred.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-ink-primary group-hover:text-brand-emerald-light transition-colors mb-2">
                        {cred.title}
                      </h3>

                      {/* Credential ID & Verification Link */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        {cred.credentialId && (
                          <div className="text-xs font-mono text-brand-cyan flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                            <span className="text-ink-tertiary">ID:</span>
                            <span className="font-semibold text-brand-cyan">{cred.credentialId}</span>
                          </div>
                        )}

                        {cred.verifyUrl && (
                          <a
                            href={cred.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-brand-emerald hover:text-brand-emerald-light transition-colors group/verify"
                            title={`Verify ${cred.title} credential`}
                            aria-label={`Verify ${cred.title} credential in new tab`}
                          >
                            <span>Verify</span>
                            <ExternalLink className="w-3 h-3 group-hover/verify:translate-x-0.5 group-hover/verify:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>

                      {/* Scope Description */}
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                        {cred.scope}
                      </p>
                    </div>

                    {/* Competency Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/60 mt-auto">
                      {cred.competencies.map((comp, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle text-ink-tertiary border border-surface-border group-hover:text-ink-secondary transition-colors"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="certifications-collapsed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-amber/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-surface"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-brand-amber group-hover:border-brand-amber/40 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-brand-amber transition-colors">
                    {credentials.length} Verified Technical Certifications Hidden
                  </div>
                  <div className="text-xs font-mono text-ink-tertiary mt-0.5">
                    Claude Code (Anthropic) • AI Hero Skills • SQL Bootcamp • Agile • LaTeX
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-surface-border group-hover:border-brand-amber/50 text-xs font-mono text-brand-amber font-medium transition-all">
                <span>Expand Certifications</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
