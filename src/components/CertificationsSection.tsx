import React from "react";
import {
  Award,
  ShieldCheck,
} from "lucide-react";
import { credentials } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { EvidenceAction } from "@/components/EvidenceAction";

export const CertificationsSection: React.FC = () => {
  return (
    <SectionFrame
      id="certifications"
      badge={{ label: "VERIFIED INDUSTRY CERTIFICATIONS", icon: <Award className="w-3.5 h-3.5" /> }}
      title="Certifications"
      description="Verified technical certifications in agentic AI development, relational database engineering, agile delivery, and research typography."
      accent="amber"
      backgroundClassName="bg-surface-subtle/20"
      ambientGlow={{ color: "amber", position: "left" }}
      itemCount={{
        count: credentials.length,
        label: "Verified Technical Certifications",
        summary: "Claude Code (Anthropic) • AI Hero Skills • SQL Bootcamp • Agile • LaTeX",
        expandLabel: "Certifications",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
                {credentials.map((cred, index) => (
                  <ShowcaseCard
                    key={cred.id}
                    index={index}
                    accent="amber"
                    padding="compact"
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
                          <EvidenceAction
                            href={cred.verifyUrl}
                            variant="verify"
                            contextTitle={cred.title}
                          />
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
                  </ShowcaseCard>
                ))}
              </div>
    </SectionFrame>
  );
};
