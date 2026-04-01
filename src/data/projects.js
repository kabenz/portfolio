/** @import { ProjectItem } from '../types/projects.js' */

/** @type {ProjectItem[]} */

const projects = [
  {
    id: "aks-platform-bootstrapper",
    name: "AKS Platform Bootstrapper",
    description:
      "Production-ready Terraform + Helm framework that provisions a fully configured AKS cluster with GitOps, observability, and security baked in — going from zero to a developer-ready platform in under 30 minutes.",
    repoUrl: "https://github.com/kabenz/aks-platform-bootstrapper",
    demoUrl: null,
    technologies: ["Azure", "AKS", "Kubernetes", "Terraform", "Helm", "FluxCD", "Prometheus", "Grafana", "GitHub Actions"],
    responsibilities: [
      "Designed a modular Terraform codebase provisioning AKS, Azure Container Registry, Key Vault, and networking from scratch.",
      "Bootstrapped FluxCD for GitOps-driven workload delivery, eliminating manual kubectl apply workflows.",
      "Integrated kube-prometheus-stack via Helm for out-of-the-box metrics, alerting, and Grafana dashboards.",
      "Built a GitHub Actions CI pipeline to validate Terraform plans and Helm charts on every pull request.",
    ],
    outcomes: [
      "Reduced new-cluster setup time from 2–3 days of manual work to under 30 minutes with a single terraform apply.",
      "Standardised the platform baseline used across multiple client environments, cutting configuration drift incidents to zero.",
      "Enabled product teams to onboard to the platform independently via self-service Helm chart templates.",
    ],
  },
  {
    id: "at-data-hub",
    name: "AT Data Hub",
    description:
      "Full-stack web portal that automates the retrieval and aggregation of tax data from Portugal's AT Portal for accounting professionals — eliminating hours of repetitive manual work per client per month.",
    repoUrl: null,
    demoUrl: null,
    technologies: ["React", "Go", "Postgres", "Playwright", "Tailwind CSS", "Docker"],
    responsibilities: [
      "Designed and implemented a Go backend with a Playwright-based headless browser to automate secure, authenticated AT Portal data retrieval.",
      "Built a React + Tailwind CSS frontend with role-based access, clean data tables, and export capabilities.",
      "Designed the Postgres schema with automated nightly sync jobs to keep data fresh without manual intervention.",
      "Containerised the full stack with Docker Compose for portable, reproducible local and production deployments.",
    ],
    outcomes: [
      "Reduced per-client manual data-entry time by an estimated 3–4 hours per month for accounting professionals.",
      "Delivered a multi-user SaaS-ready portal with audit logging and secure credential handling.",
      "Built a fully automated data pipeline replacing error-prone copy-paste workflows.",
    ],
  },
  {
    id: "portfolio-website",
    name: "Personal Portfolio Website",
    description:
      "This site — a performant, accessible single-page application built with React and Vite, featuring a print-ready CV export, dynamic project filtering, and a responsive design optimised for recruiters and clients.",
    repoUrl: "https://github.com/kabenz/portfolio",
    demoUrl: null,
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    responsibilities: [
      "Architected a component-driven React SPA with client-side routing and data-driven content (no CMS needed).",
      "Implemented a print-optimised /cv route using react-to-print for seamless PDF export.",
      "Built a dynamic project filter and responsive card grid that adapts from mobile to widescreen.",
      "Optimised the Vite build pipeline for fast Time to Interactive and minimal bundle size.",
    ],
    outcomes: [
      "Achieved a publicly accessible, SEO-friendly portfolio that doubles as a printable CV.",
      "Zero external runtime dependencies — pure React + CSS, resulting in a lightweight and fast experience.",
    ],
  },
];

export default projects;
