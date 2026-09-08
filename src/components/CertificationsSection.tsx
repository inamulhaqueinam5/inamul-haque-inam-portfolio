import React from "react";
import {
  Award,
  ShieldCheck,
} from "lucide-react";
import { credentials } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { EvidenceAction } from "@/components/EvidenceAction";
import { CredentialFilterGallery, SlottedCredentialItem } from "@/components/CredentialFilterGallery";

export const CertificationsSection: React.FC = () => {
  const getIssuerBadgeStyle = (issuer: string) => {
    if (issuer.toLowerCase().includes("hubspot")) {
      return "bg-brand-amber/10 text-brand-amber border-brand-amber/30";
    }
    if (issuer.toLowerCase().includes("linkedin")) {
      return "bg-brand-cyan/10 text-brand-cyan-light border-brand-cyan/30";
    }
    if (issuer.toLowerCase().includes("anthropic") || issuer.toLowerCase().includes("ai hero")) {
      return "bg-brand-emerald/10 text-brand-emerald-light border-brand-emerald/30";
    }
    return "bg-surface-subtle text-ink-secondary border-surface-border";
  };

  const slottedCredentials: SlottedCredentialItem[] = credentials.map((cred, index) => ({
    id: cred.id,
    category: cred.category || "AI & Engineering",
    content: (
      <ShowcaseCard
        key={cred.id}
        index={index}
        accent="amber"
        padding="compact"
      >
        <div>
          {/* Header: Issuer Badge & Date / Validity */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${getIssuerBadgeStyle(
                cred.issuer
              )}`}
            >
              {cred.issuer}
            </span>
            <div className="flex flex-col items-end text-right">
              <span className="text-xs font-mono text-ink-tertiary">
                {cred.date}
              </span>
              {cred.validUntil && (
                <span className="text-[10px] font-mono text-brand-amber/90 font-medium">
                  Valid thru {cred.validUntil}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-ink-primary group-hover:text-brand-amber transition-colors mb-2 leading-snug">
            {cred.title}
          </h3>

          {/* Credential ID & Verification Link */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            {cred.credentialId ? (
              <div className="text-xs font-mono text-brand-cyan flex items-center gap-1.5 min-w-0">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span className="text-ink-tertiary">ID:</span>
                <span
                  className="font-semibold text-brand-cyan truncate max-w-[130px] sm:max-w-[170px]"
                  title={cred.credentialId}
                >
                  {cred.credentialId}
                </span>
              </div>
            ) : (
              <div />
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
    ),
  }));

  return (
    <SectionFrame
      id="certifications"
      badge={{ label: "VERIFIED INDUSTRY CERTIFICATIONS", icon: <Award className="w-3.5 h-3.5" /> }}
      title="Certifications"
      description="Verified professional credentials spanning agentic AI systems, enterprise database engineering, HubSpot CRM architecture, LinkedIn prospecting, and commercial sales execution."
      accent="amber"
      backgroundClassName="bg-surface-subtle/20"
      ambientGlow={{ color: "amber", position: "left" }}
      itemCount={{
        count: credentials.length,
        label: "Verified Professional Credentials",
        summary: "Anthropic Claude • HubSpot Sales Hub • LinkedIn Sales Solutions • AI Hero • Inbound Sales • SQL • Agile",
        expandLabel: "Certifications",
      }}
    >
      <CredentialFilterGallery items={slottedCredentials} />
    </SectionFrame>
  );
};

