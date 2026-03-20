/** @import { ExperienceItem } from '../types/experience.js' */

/** @type {ExperienceItem[]} */
const experiences = [
  {
    id: 'techcorp-senior-platform-engineer',
    company: 'TechCorp Innovations',
    role: 'Senior Platform Engineer',
    location: 'Lisbon, Portugal',
    startDate: 'Jan 2022',
    summary:
      'Lead platform engineering for a cloud-native product suite on Azure AKS. Own the internal developer platform, GitOps pipelines, and observability stack used by 10+ engineering teams.',
    responsibilities: [
      'Design and evolve the internal developer platform (IDP) on Kubernetes for 10+ product teams',
      'Own GitOps workflows with FluxCD and Helm across staging and production environments',
      'Drive cloud cost optimisation through rightsizing automation and idle-resource policies',
      'Define and enforce platform SLOs, on-call runbooks, and incident response processes',
    ],
    achievements: [
      'Designed and shipped a self-service IDP on Kubernetes, reducing environment provisioning from 3 days to under 10 minutes',
      'Migrated 40+ microservices to a GitOps model with FluxCD and Helm, achieving 99.95% deployment success rate',
      'Built a centralised observability stack (Prometheus, Grafana, ELK) adopted by all product squads',
      'Reduced Azure cloud spend by 28% through rightsizing automation and idle-resource termination tooling',
    ],
    technologies: ['Azure AKS', 'Kubernetes', 'FluxCD', 'Terraform', 'Helm', 'Prometheus'],
    sortOrder: 1,
  },
  {
    id: 'cloudbase-devops-engineer',
    company: 'CloudBase Labs',
    role: 'DevOps Engineer',
    location: 'Porto, Portugal',
    startDate: 'Mar 2019',
    endDate: 'Dec 2021',
    summary:
      'Built and maintained CI/CD infrastructure and Azure environments for a SaaS platform serving enterprise clients across Europe.',
    responsibilities: [
      'Build and maintain CI/CD pipelines with GitHub Actions and Azure Pipelines',
      'Manage Azure infrastructure using Terraform across dev, staging, and production',
      'Containerise legacy workloads and oversee migration to Azure Kubernetes Service',
      'Implement policy-as-code guardrails with OPA to enforce compliance at deployment time',
    ],
    achievements: [
      'Implemented end-to-end CI/CD pipelines with GitHub Actions and Azure Pipelines, cutting release cycles from two weeks to daily',
      'Authored a Terraform module library covering 15+ Azure resource types, adopted across 3 product teams',
      'Containerised legacy workloads with Docker and orchestrated migration to AKS with zero downtime',
      'Introduced policy-as-code (OPA) guardrails, eliminating misconfigured deployments in production',
    ],
    technologies: ['Azure Pipelines', 'GitHub Actions', 'Terraform', 'Docker', 'AKS', 'OPA'],
    sortOrder: 2,
  },
  {
    id: 'datastream-infrastructure-engineer',
    company: 'DataStream Solutions',
    role: 'Infrastructure Engineer',
    location: 'Lisbon, Portugal',
    startDate: 'Jul 2017',
    endDate: 'Feb 2019',
    summary:
      'Managed on-premise and hybrid cloud infrastructure, supporting a data analytics platform processing millions of events daily.',
    responsibilities: [
      'Administer Linux-based on-premise servers and hybrid Azure environments',
      'Support a high-throughput data analytics platform processing millions of events daily',
      'Automate operational tasks and monitoring with Python and Bash scripting',
      'Implement security hardening aligned with ISO 27001 across infrastructure and networking',
    ],
    achievements: [
      'Led lift-and-shift migration of 30 on-prem workloads to Azure, reducing hardware costs by €200k/year',
      'Automated routine ops tasks with Python and Bash scripts, saving the team ~15 hours/week',
      'Deployed an ELK stack for centralised logging, improving incident MTTR by 40%',
      'Hardened Linux environments and implemented network segmentation aligned with ISO 27001',
    ],
    technologies: ['Azure', 'Linux', 'Python', 'Bash', 'ELK Stack', 'Networking'],
    sortOrder: 3,
  },
]

export default experiences
