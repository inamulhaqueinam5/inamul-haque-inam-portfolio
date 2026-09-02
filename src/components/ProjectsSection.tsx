import React from "react";
import { Layers } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { SectionFrame } from "@/components/SectionFrame";
import { ProjectFilterGallery } from "@/components/ProjectFilterGallery";
import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection: React.FC = () => {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const projectMetadata = projects.map((p) => ({ id: p.id, category: p.category }));

  return (
    <SectionFrame
      id="projects"
      badge={{ label: "PRODUCTION ENGINEERING", icon: <Layers className="w-3.5 h-3.5" /> }}
      title="Engineering Projects"
      description="Production-grade systems engineered with clean architectures, deterministic algorithms, type-safe APIs, and client-side performance optimizations."
      accent="cyan"
      itemCount={{
        count: projects.length,
        label: "Production Engineering Projects",
        summary: "SkillBridge • OneFit Resume • Executive Banking • Social Media Platform",
        expandLabel: "Projects",
      }}
    >
      <ProjectFilterGallery
        categories={categories}
        projectMetadata={projectMetadata}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ProjectFilterGallery>
    </SectionFrame>
  );
};
