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
    achievements: [],
    technologies: ['Azure','AKS', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Helm', 'Bash', 'Python', 'Typescript', 'YAML', 'CI/CD'],
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
      'Platform Engineer responsible for building and maintaining CI/CD pipelines, managing Azure infrastructure with Terraform, and supporting containerisation and migration of legacy workloads to Azure Kubernetes Service (AKS) for a large client in the optical industry.',
    responsibilities: [
      'Build and maintain CI/CD pipelines with Azure Pipelines to support Java and Typescript workloads across multiple product teams',
      'Improvements and maintenance on Terraform modules to support infrastructure provisioning and maintenance for multiple product teams',
      'Helm Charts development and maintenance to support containerised workloads on AKS',
      'Cloudflare integration to support DNS management and security for applications hosted on Azure',
      'Powershell and Bash scripting to automate operational tasks and support product teams with CI/CD related processes',
      'Lead PoC to migration from App Services to AKS, including containerisation of legacy workloads with Docker and orchestration of migration with zero downtime',
    ],
    achievements: [],
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
      'Platform Engineer responsible for building and maintaining CI/CD pipelines, managing Cloud and On-prem infrastructure, supporting containerisation and on-prem kubernetes clusters and implementing security best practices for a large client in the automotive industry.',
    responsibilities: [
      'CI/CD on GitHub Actions and Azure Pipelines',
      'IaC Terraform',
      'Manage ELK Stack, Grafana and Prometheus for monitoring and logging',
      'GitOps with FluxCD',
      'Containerisation with Docker and Kubernetes',
      'Setup of Serverless and Function as a Service approach for a PoC to a big client with Knative and Openfaas respectively'
    ],
    achievements: [],
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
      'Release Manager supporting an Azure Infrastructure (IaaS) with AKS for 30+ microservices',
    responsibilities: [
      'Manage CI/CD on Azure Pipelines',
      'IaC with Terraform',
      'Process Automation with Python and Bash',
      'Support to Jenkins builds and deploys'
    ],
    achievements: [],
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
      'Starting point of my Software Engineering career, where I had the opportunity to work on a wide range of projects for different clients, with a focus on DevOps and Cloud technologies',
    responsibilities: [
      'Manage CI/CD on Azure Pipelines (Monolithic application)',
      'Development of .Net Core applications',
      'IaC with Terraform and ARM Templates',
      'Ficancial core business transformation process using Essence framework containerized with Docker',
      'Full stack development using Java and JavaScript',
    ],
    achievements: [],
    technologies: ['Azure', 'Azure Pipelines', 'Terraform', 'ARM Templates', 'Java', 'JavaScript', '.Net Core', 'Docker', 'CI/CD', 'Essence Framework'],
    sortOrder: 5,
  },
]

export default experiences
