export type SectionId = "top" | "about" | "skills" | "experience" | "projects" | "contact";

export interface ProjectCaseStudy {
  name: string;
  label: string;
  spotlight: string;
  summary: string;
  problem: string;
  constraints: string;
  architecture: string;
  decisions: string[];
  results: string;
  learning: string;
  metrics: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  mode: string;
  bullets: string[];
}

export interface CapabilityCard {
  title: string;
  description: string;
  details: string[];
}
