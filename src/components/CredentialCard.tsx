import React from "react";
import { ShieldCheck } from "lucide-react";
import { Credential } from "@/types";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { EvidenceAction } from "@/components/EvidenceAction";

export interface CredentialCardProps {
  credential: Credential;
  index?: number;
}

const getIssuerBadgeStyle = (issuer: string) => {
  const lower = issuer.toLowerCase();
  if (lower.includes("hubspot")) {
    return "bg-brand-amber/10 text-brand-amber border-brand-amber/30";
  }
  if (lower.includes("linkedin")) {
    return "bg-brand-cyan/10 text-brand-cyan-light border-brand-cyan/30";
  }
  if (lower.includes("anthropic") || lower.includes("ai hero")) {
    return "bg-brand-emerald/10 text-brand-emerald-light border-brand-emerald/30";
  }
  return "bg-surface-subtle text-ink-secondary border-surface-border";
};

export const CredentialCard: React.FC<CredentialCardProps> = ({
  credential,
  index = 0,
}) => {
  return (
    <ShowcaseCard
      index={index}
      accent="amber"
      padding="compact"
    >
      <div>
        {/* Header: Issuer Badge & Date / Validity */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <span
            className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${getIssuerBadgeStyle(
              credential.issuer
            )}`}
          >
            {credential.issuer}
          </span>
          <div className="flex flex-col items-end text-right">
            <span className="text-xs font-mono text-ink-tertiary">
              {credential.date}
            </span>
            {credential.validUntil && (
              <span className="text-[10px] font-mono text-brand-amber/90 font-medium">
                Valid thru {credential.validUntil}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-ink-primary group-hover:text-brand-amber transition-colors mb-2 leading-snug">
          {credential.title}
        </h3>

        {/* Credential ID & Verification Link */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {credential.credentialId ? (
            <div className="text-xs font-mono text-brand-cyan flex items-center gap-1.5 min-w-0">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="text-ink-tertiary">ID:</span>
              <span
                className="font-semibold text-brand-cyan truncate max-w-[130px] sm:max-w-[170px]"
                title={credential.credentialId}
              >
                {credential.credentialId}
              </span>
            </div>
          ) : (
            <div />
          )}

          {credential.verifyUrl && (
            <EvidenceAction
              href={credential.verifyUrl}
              variant="verify"
              contextTitle={credential.title}
            />
          )}
        </div>

        {/* Scope Description */}
        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
          {credential.scope}
        </p>
      </div>

      {/* Competency Pills */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/60 mt-auto">
        {credential.competencies.map((comp, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle text-ink-tertiary border border-surface-border group-hover:text-ink-secondary transition-colors"
          >
            {comp}
          </span>
        ))}
      </div>
    </ShowcaseCard>
  );
};
