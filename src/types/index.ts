export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  authors: string[];
  role: string;
  status: "Published" | "Accepted" | "Under Review";
  doi?: string;
  sciencedirectUrl?: string;
  link?: string;
  problem: string;
  methodology: string;
  metrics: {
    label: string;
    value: string;
  }[];
  keywords: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Web" | "AI & Document Engine" | "Enterprise Web" | "Social & Media";
  challenge: string;
  solution: string;
  architecture: string[];
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Remote" | "On-site" | "Hybrid";
  summary: string;
  responsibilities: {
    category: string;
    description: string;
  }[];
  skillsUsed: string[];
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  competencies: string[];
  scope: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
  result: string;
  highlights: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  availability: string;
  avatar?: string;
  languages: { language: string; proficiency: string }[];
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    email: string;
  };
  stats: { label: string; value: string }[];
}
