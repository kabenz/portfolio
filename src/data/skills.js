/** @import { SkillItem } from '../types/skill.js' */

/** @type {SkillItem[]} */
const skills = [
  // Cloud & Infrastructure
  { name: 'Azure',            category: 'cloud', level: 'expert',       featured: true,  icon: '🔷' },
  { name: 'Kubernetes (AKS)', category: 'cloud', level: 'expert',       featured: true,  icon: '⎈'  },
  { name: 'Terraform',        category: 'cloud', level: 'expert',       featured: true,  icon: '🏗️' },
  { name: 'Docker',           category: 'cloud', level: 'expert',       featured: true,  icon: '🐋' },
  { name: 'Helm',             category: 'cloud', level: 'expert',       featured: false, icon: '⚓' },
  { name: 'Cloudflare',       category: 'cloud', level: 'advanced',     featured: false, icon: '🌐' },

  // CI/CD & GitOps
  { name: 'GitHub Actions',       category: 'cicd', level: 'expert',   featured: true,  icon: '🐙' },
  { name: 'Azure Pipelines',      category: 'cicd', level: 'expert',   featured: true,  icon: '🔵' },
  { name: 'YAML',                 category: 'cicd', level: 'expert',   featured: true, icon: '📄' },
  { name: 'FluxCD',               category: 'cicd', level: 'advanced', featured: false, icon: '🚀' },
  { name: 'Prometheus / Grafana', category: 'cicd', level: 'expert',   featured: false, icon: '📊' },
  { name: 'ELK Stack',            category: 'cicd', level: 'advanced', featured: false, icon: '🔍' },

  // Languages & Scripting
  { name: 'Python',      category: 'languages', level: 'advanced', featured: true,  icon: '🐍' },
  { name: 'Bash',        category: 'languages', level: 'expert',   featured: true,  icon: '🖥️' },
  { name: 'PowerShell',  category: 'languages', level: 'advanced', featured: false, icon: '💠' },
  { name: 'Go',          category: 'languages', level: 'intermediate', featured: false, enthusiast: true, icon: '🐹' },
  { name: 'JavaScript',  category: 'languages', level: 'intermediate', featured: false, enthusiast: true, icon: '🟨' },
  { name: 'React',       category: 'framework', level: 'intermediate', featured: false, enthusiast: true, icon: '⚛️' },
  { name: 'Playwright',  category: 'framework', level: 'intermediate', featured: false, enthusiast: true, icon: '🎭' },
]

export default skills
