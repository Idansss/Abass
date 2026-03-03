export type SocialId = "github" | "linkedin" | "x" | "hashnode" | "medium";

export interface Social {
  id: SocialId;
  label: string;
  href: string;
  short: string;
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  skills: string[];
}

export interface ProjectLink {
  label: "GitHub" | "Live Demo";
  href: string;
}

export interface Project {
  number: string; // "01"
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface WritingPlatform {
  id: "hashnode" | "medium" | "github";
  label: string;
  title: string;
  description: string;
  href: string;
}

