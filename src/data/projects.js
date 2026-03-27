/** @import { ProjectItem } from '../types/projects.js' */

/** @type {ProjectItem[]} */

const projects = [
  {
    id: "at-data-hub",
    name: "AT Data Hub",
    description:
      "Portal that fetches data from AT Portal for accountants and tax professionals.",
    repoUrl: null,
    demoUrl: null,
    technologies: ["React", "Go", "Postgres", "Playwright", "Tailwind CSS"],
    responsibilities: [
      "Designed and implemented a Go backend with Playwright-based scraping to automate AT Portal data retrieval.",
      "Built a React frontend with Tailwind CSS for clean data visualization.",
      "Set up Postgres schema and automated sync pipelines.",
    ],
    outcomes: [
      "Reduced manual data-entry time for accounting professionals.",
      "Delivered a scalable multi-user portal ready for production use.",
    ],
  },
  {
    id: "portfolio-website",
    name: "Personal Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience.",
    repoUrl: "https://github.com/kabenz/portfolio",
    demoUrl: null,
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    responsibilities: [
      "Architected a single-page React application with client-side routing.",
      "Implemented responsive design and accessibility best practices.",
      "Optimised Vite build pipeline for fast load times.",
    ],
    outcomes: [
      "Publicly accessible portfolio demonstrating my career and projects.",
      "Reusable component library used across multiple sections.",
    ],
  },
];

export default projects;
