/**
 * @typedef {Object} Experience
 * @property {number} id
 * @property {string} company
 * @property {string} role
 * @property {string} period
 * @property {string} location
 * @property {string} description
 * @property {string[]} achievements
 * @property {string[]} tags
 * @property {boolean} [current]
 */

/** @type {Experience[]} */
const experiences = [
  {
    id: 1,
    company: 'TechCorp Innovations',
    role: 'Senior Platform Engineer',
    period: 'Jan 2022 – Present',
    location: 'Lisbon, Portugal',
    description:
      'Lead platform engineering for a cloud-native product suite on Azure AKS. Own the internal developer platform, GitOps pipelines, and observability stack used by 10+ engineering teams.',
    achievements: [
      'Designed and shipped a self-service IDP on Kubernetes, reducing environment provisioning from 3 days to under 10 minutes',
      'Migrated 40+ microservices to a GitOps model with FluxCD and Helm, achieving 99.95% deployment success rate',
      'Built a centralised observability stack (Prometheus, Grafana, ELK) adopted by all product squads',
      'Reduced Azure cloud spend by 28% through rightsizing automation and idle-resource termination tooling',
    ],
    tags: ['Azure AKS', 'Kubernetes', 'FluxCD', 'Terraform', 'Helm', 'Prometheus'],
    current: true,
  },
  {
    id: 2,
    company: 'CloudBase Labs',
    role: 'DevOps Engineer',
    period: 'Mar 2019 – Dec 2021',
    location: 'Porto, Portugal',
    description:
      'Built and maintained CI/CD infrastructure and Azure environments for a SaaS platform serving enterprise clients across Europe.',
    achievements: [
      'Implemented end-to-end CI/CD pipelines with GitHub Actions and Azure Pipelines, cutting release cycles from two weeks to daily',
      'Authored a Terraform module library covering 15+ Azure resource types, adopted across 3 product teams',
      'Containerised legacy workloads with Docker and orchestrated migration to AKS with zero downtime',
      'Introduced policy-as-code (OPA) guardrails, eliminating misconfigured deployments in production',
    ],
    tags: ['Azure Pipelines', 'GitHub Actions', 'Terraform', 'Docker', 'AKS', 'OPA'],
    current: false,
  },
  {
    id: 3,
    company: 'DataStream Solutions',
    role: 'Infrastructure Engineer',
    period: 'Jul 2017 – Feb 2019',
    location: 'Lisbon, Portugal',
    description:
      'Managed on-premise and hybrid cloud infrastructure, supporting a data analytics platform processing millions of events daily.',
    achievements: [
      'Led lift-and-shift migration of 30 on-prem workloads to Azure, reducing hardware costs by €200k/year',
      'Automated routine ops tasks with Python and Bash scripts, saving the team ~15 hours/week',
      'Deployed an ELK stack for centralised logging, improving incident MTTR by 40%',
      'Hardened Linux environments and implemented network segmentation aligned with ISO 27001',
    ],
    tags: ['Azure', 'Linux', 'Python', 'Bash', 'ELK Stack', 'Networking'],
    current: false,
  },
]

export default experiences
