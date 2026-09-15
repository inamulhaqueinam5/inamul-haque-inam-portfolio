import React from "react";
import {
  Cpu,
  BarChart2,
  FileCheck2,
  Clock,
} from "lucide-react";
import { Publication } from "@/types";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { EvidenceAction } from "@/components/EvidenceAction";

export interface ResearchCardProps {
  publication: Publication;
  index?: number;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  publication,
  index = 0,
}) => {
  return (
    <ShowcaseCard
      index={index}
      accent="emerald"
    >
      {/* Header: Venue & Status */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 text-xs font-mono font-semibold">
              {publication.venue}
            </span>
            <span className="text-xs font-mono text-ink-tertiary">
              {publication.year}
            </span>
          </div>

          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-secondary border border-surface-border">
            {publication.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-ink-primary leading-snug group-hover:text-brand-emerald-light transition-colors mb-5">
          {publication.title}
        </h3>

        {/* Problem & Solution Breakdown */}
        <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border/60">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-cyan mb-1 flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5" />
              Core Challenge / Problem
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {publication.problem}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border/60">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-emerald-light mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              ML Architecture &amp; XAI Methodology
            </div>
            <p className="text-ink-secondary leading-relaxed">
              {publication.methodology}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {publication.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-lg bg-[#08090D] border border-surface-border text-center"
            >
              <div className="text-xs sm:text-sm font-bold font-mono text-ink-primary text-brand-emerald tracking-tight">
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
          {publication.doi && (
            <EvidenceAction
              href={publication.doi}
              variant="doi"
              contextTitle={publication.title}
            />
          )}

          {publication.sciencedirectUrl && (
            <EvidenceAction
              href={publication.sciencedirectUrl}
              variant="sciencedirect"
              contextTitle={publication.title}
            />
          )}

          {publication.status === "Under Review" && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-ink-tertiary bg-surface-subtle border border-surface-border">
              <Clock className="w-3.5 h-3.5 text-brand-amber/80" />
              <span>Peer Review in Progress</span>
            </div>
          )}
        </div>

        {/* Verification Status */}
        <div className="text-xs font-mono text-brand-emerald flex items-center gap-1">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>{publication.status === "Published" ? "Verified Paper" : "Manuscript Submitted"}</span>
        </div>
      </div>

      {/* Keywords */}
      <div className="pt-3 flex flex-wrap gap-1.5">
        {publication.keywords.slice(0, 4).map((kw, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-ink-tertiary border border-surface-border"
          >
            #{kw}
          </span>
        ))}
      </div>
    </ShowcaseCard>
  );
};
