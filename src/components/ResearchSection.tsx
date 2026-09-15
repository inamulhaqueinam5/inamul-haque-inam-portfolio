import React from "react";
import { BookOpen } from "lucide-react";
import { publications } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { ResearchCard } from "@/components/ResearchCard";

export const ResearchSection: React.FC = () => {
  return (
    <SectionFrame
      id="research"
      badge={{ label: "PEER-REVIEWED PUBLICATIONS", icon: <BookOpen className="w-3.5 h-3.5" /> }}
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
          <ResearchCard key={pub.id} publication={pub} index={index} />
        ))}
      </div>
    </SectionFrame>
  );
};


