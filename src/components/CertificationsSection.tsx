import React from "react";
import { Award } from "lucide-react";
import { credentials } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { SlottedFilterGallery } from "@/components/SlottedFilterGallery";
import { CredentialCard } from "@/components/CredentialCard";

export const CertificationsSection: React.FC = () => {
  return (
    <SectionFrame
      id="certifications"
      badge={{ label: "VERIFIED INDUSTRY CERTIFICATIONS", icon: <Award className="w-3.5 h-3.5" /> }}
      title="Certifications"
      description="Verified professional credentials spanning agentic AI systems, enterprise database engineering, HubSpot CRM architecture, LinkedIn prospecting and commercial sales execution."
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
      <SlottedFilterGallery
        layout="grid"
        accent="amber"
        showCounts={true}
        ariaLabel="Filter credentials by domain"
        items={credentials.map((cred, index) => ({
          id: cred.id,
          category: cred.category || "AI & Engineering",
          content: <CredentialCard credential={cred} index={index} />,
        }))}
      />
    </SectionFrame>
  );
};

