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
      'Platform Engineer integrated in a CI/CD team responsible for improving and maintaining CI/CD workflows for a large client in the transportation industry with more then 30 product teams.',
    responsibilities: [
      'Implementation of CI/CD pipelines with GitHub Actions for multiple product teams to support Java, Python, Go and JavaScript workloads',
      'Self-hosted Github Runners management and maintenance',
      'Helping product teams to migrate to GitHub Actions and implement best practices for CI/CD',
      'IaC with Terraform to support infrastructure provisioning and maintenance',
      'Bash/Python/Typescript scripting to automate operational tasks and support product teams with CI/CD related processes',
      'Support to AKS clusters',
    ],
    achievements: [
      'Implemented Enterprise wide CI/CD reusable workflows to be used across 30+ product teams, reducing pipeline development time by 50%',
      'Migration of product teams to Enterprise wide CI/CD reusable workflows, improving consistency and maintainability of pipelines across the organisation',
    ],
    technologies: ['AKS', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Helm', 'Bash', 'Python', 'Typescript', 'YAML'],
    sortOrder: 1,
  },
  {
    id: 'bjss-platform-engineer',
    company: 'BJSS',
    role: 'Platform Engineer',
    location: 'Lisbon, Portugal',
    startDate: 'Mar 2023',
    endDate: 'Jul 2024',
    summary:
      'Platform Engineer responsible for building and maintaining CI/CD pipelines, managing Azure infrastructure with Terraform, and supporting containerisation and migration of legacy workloads to Azure Kubernetes Service (AKS) for a large client in the optical industry.',
    responsibilities: [
      'Build and maintain CI/CD pipelines with Azure Pipelines to support Java and Typescript workloads across multiple product teams',
      'Improvements and maintenance on Terraform modules to support infrastructure provisioning and maintenance for multiple product teams',
      'Helm Charts development and maintenance to support containerised workloads on AKS',
      'Cloudflare integration to support DNS management and security for applications hosted on Azure',
      'Powershell and Bash scripting to automate operational tasks and support product teams with CI/CD related processes',
      'Lead PoC to migration from App Services to AKS, including containerisation of legacy workloads with Docker and orchestration of migration with zero downtime',
    ],
    achievements: [
      'Designed and implemented CI/CD pipelines with Azure Pipelines, reducing effort for product teams to set up and maintain pipelines by 30%',
      'AKS PoC success, leading to a roadmap for migration of 50+ workloads to AKS, improving scalability and maintainability of applications',
      'Containerised legacy workloads with Docker and orchestrated migration to AKS with zero downtime',
    ],
    technologies: ['Azure Pipelines', 'Terraform', 'Docker', 'AKS', 'Helm', 'Cloudflare', 'Powershell', 'Bash', 'YAML'],
    sortOrder: 2,
  },
  {
    id: 'xgeeks-devops-sre-engineer',
    company: 'Xgeeks',
    role: 'DevOps/SRE Engineer',
    location: 'Leiria, Portugal',
    startDate: 'Nov 2021',
    endDate: 'Mar 2023',
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
