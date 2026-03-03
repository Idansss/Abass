import type { Project, SkillCategory, Social, WritingPlatform } from "./types";

export const socials: Social[] = [
  {
    id: "github",
    label: "GitHub",
    short: "GH",
    href: "https://github.com/Lingz450",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    short: "LI",
    href: "https://www.linkedin.com/in/abass-ibrahim-6a5795194/",
  },
  { id: "x", label: "X", short: "X", href: "https://x.com/Ghost912932" },
  {
    id: "hashnode",
    label: "Hashnode",
    short: "HN",
    href: "https://hashnode.com/@ghost69",
  },
  {
    id: "medium",
    label: "Medium",
    short: "MD",
    href: "https://medium.com/@Ghost69",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: "⚡",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    icon: "🔧",
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    id: "databases",
    icon: "🗄️",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Prisma"],
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    id: "devops",
    icon: "🛠️",
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
  {
    id: "web3",
    icon: "🔗",
    title: "Web3 & Other",
    skills: [
      "Web3 Dev",
      "Bot Creation",
      "IT Support",
      "Networking",
      "Microsoft Office",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    featured: true,
    title: "Operations Hub — Full‑Stack Workflow Platform",
    description:
      "A production-ready web app built for high-pressure operations: role-based access, audit-friendly activity feeds, and a clean workflow for creating, reviewing, and shipping requests. I designed the UI system first, then implemented a fast React client with a Node.js API, PostgreSQL data modeling, and Prisma migrations for dependable deployments.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "REST APIs"],
    links: [
      { label: "GitHub", href: "https://github.com/Lingz450" },
      { label: "Live Demo", href: "https://github.com/Lingz450" },
    ],
  },
  {
    number: "02",
    title: "Editorial UI Kit — Figma Design System",
    description:
      "A token-driven design system built in Figma with a strict grid, typography scales, reusable components, and interactive prototypes. It supports dark-first editorial layouts, accessible contrast targets, and documentation pages that make handoff to developers clean and predictable.",
    tags: ["Figma", "Design Tokens", "Components", "Prototyping"],
    links: [{ label: "GitHub", href: "https://github.com/Lingz450" }],
  },
  {
    number: "03",
    title: "On‑Chain Bot Suite — Web3 Automation",
    description:
      "A set of Web3 scripts and bot utilities for monitoring contracts, reacting to events, and executing safe automated actions with guardrails. Built with clear configuration, retry logic, and status reporting — designed to be understandable, maintainable, and resilient under real-world network conditions.",
    tags: ["JavaScript", "Web3.js", "Automation", "Bots"],
    links: [{ label: "GitHub", href: "https://github.com/Lingz450" }],
  },
  {
    number: "04",
    title: "Pulse Admin — SaaS Dashboard",
    description:
      "A polished dashboard experience with authentication, realtime updates, and a component library designed for speed. Built with Next.js and Tailwind for snappy UX, backed by Supabase for auth and realtime data. Focused on clarity: actionable views, clean states, and sharp interaction details.",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript", "Realtime"],
    links: [
      { label: "GitHub", href: "https://github.com/Lingz450" },
      { label: "Live Demo", href: "https://github.com/Lingz450" },
    ],
  },
];

export const writingPlatforms: WritingPlatform[] = [
  {
    id: "hashnode",
    label: "Hashnode",
    title: "@ghost69",
    description:
      "Hands-on technical writing — frontend patterns, debugging stories, and practical notes from building and supporting systems.",
    href: "https://hashnode.com/@ghost69",
  },
  {
    id: "medium",
    label: "Medium",
    title: "@Ghost69",
    description:
      "Long-form reflections on craft: UI decisions, developer workflows, and the mindset behind shipping clean work.",
    href: "https://medium.com/@Ghost69",
  },
  {
    id: "github",
    label: "GitHub",
    title: "Lingz450",
    description:
      "Repositories, experiments, and shipped work — from full-stack apps to automation utilities.",
    href: "https://github.com/Lingz450",
  },
];

