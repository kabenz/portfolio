/** @import { ExperienceItem } from '../types/experience.js' */

/** @type {ExperienceItem[]} */
const experiences = [
  {
    id: 'expert-thinking-platform-engineer',
    company: 'Expert Thinking',
    role: 'Platform Engineer',
    location: 'Remote (Portugal)',
    startDate: 'Jul 2024',
    summary:
      'Platform Engineer embedded in a CI/CD team responsible for improving and maintaining CI/CD workflows for a large client in the transportation industry with more than 30 product teams.',
    responsibilities: [
      'Implemented standardised CI/CD pipeline templates with GitHub Actions for Java, Python, Go, and JavaScript workloads, adopted across 30+ product teams',
      'Managed and right-sized self-hosted GitHub Actions runner fleet to reduce infrastructure costs while maintaining performance',
      'Guided product teams through migration to GitHub Actions, embedding best practices for security, caching, and pipeline efficiency',
      'Maintained and extended Terraform modules for infrastructure provisioning across multiple Azure environments',
      'Automated operational tasks and CI/CD tooling with Bash, Python, and TypeScript scripts',
      'Provided Kubernetes support for AKS clusters serving production workloads',
    ],
    achievements: [
      'Standardised CI/CD patterns across 30+ product teams, cutting new-pipeline onboarding from days to under 2 hours',
      'Reduced self-hosted runner infrastructure costs by ~30% through right-sizing and auto-scaling configuration',
      'Improved pipeline reliability by introducing reusable workflow templates, reducing duplicated configuration by ~60%',
    ],
    technologies: ['Azure', 'AKS', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Helm', 'Bash', 'Python', 'Typescript', 'YAML', 'CI/CD'],
    sortOrder: 1,
  },
  {
    id: 'bjss-platform-engineer',
    company: 'BJSS',
    role: 'Platform Engineer',
    location: 'Lisbon, Portugal (Hybrid)',
    startDate: 'Mar 2023',
    endDate: 'Jul 2024',
    summary:
      'Platform Engineer responsible for building and maintaining CI/CD pipelines, managing Azure infrastructure with Terraform, and leading the containerisation and migration of legacy workloads to Azure Kubernetes Service (AKS) for a large client in the optical industry.',
    responsibilities: [
      'Built and maintained Azure Pipelines CI/CD pipelines for Java and TypeScript workloads across multiple product teams',
      'Extended and maintained Terraform modules for infrastructure provisioning across multiple product teams and environments',
      'Developed and maintained Helm Charts for containerised workloads on AKS',
      'Integrated Cloudflare for DNS management and application security across Azure-hosted services',
      'Automated operational tasks with PowerShell and Bash scripting',
      'Led a PoC and full migration from App Services to AKS, including Dockerisation of legacy workloads with zero-downtime cutover',
    ],
    achievements: [
      'Led end-to-end migration of 8 legacy App Services to AKS, delivering zero-downtime cutover and reducing cloud spend by ~20%',
      'Standardised the internal Terraform module library, reducing infrastructure provisioning time by ~60% across all product teams',
      'Increased deployment frequency for migrated services from bi-weekly releases to on-demand delivery via CI/CD pipelines',
    ],
    technologies: ['Azure', 'Azure Pipelines', 'Terraform', 'Docker', 'AKS', 'Helm', 'Cloudflare', 'Powershell', 'Bash', 'YAML', 'CI/CD'],
    sortOrder: 2,
  },
  {
    id: 'xgeeks-devops-sre-engineer',
    company: 'Xgeeks',
    role: 'DevOps/SRE Engineer',
    location: 'Leiria, Portugal (Hybrid)',
    startDate: 'Nov 2021',
    endDate: 'Mar 2023',
    summary:
      'DevOps/SRE Engineer responsible for building CI/CD pipelines, managing cloud and on-prem infrastructure, operating Kubernetes clusters, and implementing observability and security best practices for a large client in the automotive industry.',
    responsibilities: [
      'Designed and maintained CI/CD pipelines on GitHub Actions and Azure Pipelines',
      'Managed infrastructure as code with Terraform across Azure and on-premises environments',
      'Operated and maintained ELK Stack, Grafana, and Prometheus for centralised monitoring and logging',
      'Implemented GitOps workflow with FluxCD for automated, Git-driven Kubernetes deployments',
      'Containerised workloads with Docker and managed on-premises Kubernetes clusters',
      'Delivered a Serverless/FaaS PoC using Knative and OpenFaaS for event-driven workload reduction',
    ],
    achievements: [
      'Implemented GitOps with FluxCD, enabling fully automated deployments and compressing release cycles from weekly to on-demand',
      'Built a centralised observability platform (Prometheus / Grafana / ELK) covering 15+ microservices, reducing mean time to detect incidents by ~50%',
      'Delivered a Serverless PoC with Knative and OpenFaaS that reduced infrastructure overhead for event-driven workloads and informed the client\'s architectural roadmap',
    ],
    technologies: ['Azure', 'Linux', 'Python', 'Bash', 'ELK Stack', 'Grafana', 'Prometheus', 'GitHub Actions', 'Azure Pipelines', 'Terraform', 'Docker', 'Kubernetes', 'FluxCD', 'Knative', 'Openfaas', 'GitOps', 'CI/CD'],
    sortOrder: 3,
  },
  {
    id: 'alter-solutions-release-engineer',
    company: 'Alter Solutions Portugal',
    role: 'Release Engineer',
    location: 'Lisbon, Portugal (Hybrid)',
    startDate: 'Mar 2021',
    endDate: 'Nov 2021',
    summary:
      'Release Engineer supporting an Azure Infrastructure (IaaS) with AKS for 30+ microservices across multiple environments.',
    responsibilities: [
      'Managed CI/CD pipelines on Azure Pipelines for 30+ microservices',
      'Maintained infrastructure as code with Terraform',
      'Automated release and operational processes with Python and Bash',
      'Supported Jenkins build and deployment workflows',
    ],
    achievements: [
      'Managed CI/CD pipelines for 30+ microservices with zero critical deployment incidents across a 9-month tenure',
      'Automated manual release coordination steps with Python scripts, reducing release preparation time by ~40%',
    ],
    technologies: ['Azure', 'AKS', 'Azure Pipelines', 'Terraform', 'Python', 'Bash', 'Jenkins', 'Kubernetes', 'CI/CD'],
    sortOrder: 4,
  },
  {
    id: 'deloitte-software-engineer',
    company: 'Deloitte Portugal',
    role: 'Software Engineer',
    location: 'Lisbon, Portugal',
    startDate: 'Aug 2018',
    endDate: 'Mar 2021',
    summary:
      'Starting point of my Software Engineering career at a global consultancy, working across a range of client projects with an increasing focus on DevOps, cloud infrastructure, and software delivery.',
    responsibilities: [
      'Managed CI/CD on Azure Pipelines for a large monolithic application',
      'Developed .NET Core backend services for enterprise clients',
      'Provisioned and managed cloud infrastructure with Terraform and ARM Templates',
      'Led a financial core business transformation using the Essence framework, containerised with Docker',
      'Delivered full-stack features using Java and JavaScript',
    ],
    achievements: [
      'Migrated infrastructure provisioning from ARM Templates to Terraform, reducing deployment time by ~50% and enabling repeatable environment creation',
      'Containerised a legacy financial processing system with Docker, enabling consistent deployments across development, staging, and production',
    ],
    technologies: ['Azure', 'Azure Pipelines', 'Terraform', 'ARM Templates', 'Java', 'JavaScript', '.Net Core', 'Docker', 'CI/CD', 'Essence Framework'],
    sortOrder: 5,
  },
]

export default experiences
