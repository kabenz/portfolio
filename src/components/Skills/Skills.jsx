import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: '☁️',
    color: '#6c63ff',
    skills: [
      { name: 'Kubernetes', level: 94, icon: '⎈' },
      { name: 'Terraform', level: 92, icon: '🏗️' },
      { name: 'AWS', level: 90, icon: '☁️' },
      { name: 'Docker', level: 96, icon: '🐋' },
      { name: 'CI/CD (GitHub Actions / GitLab)', level: 93, icon: '🔄' },
      { name: 'Ansible', level: 85, icon: '🤖' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform & Observability',
    icon: '📡',
    color: '#ff6584',
    skills: [
      { name: 'Prometheus / Grafana', level: 90, icon: '📊' },
      { name: 'Helm', level: 88, icon: '⚓' },
      { name: 'ArgoCD / Flux', level: 86, icon: '🚀' },
      { name: 'Istio / Service Mesh', level: 80, icon: '🕸️' },
      { name: 'Vault (HashiCorp)', level: 82, icon: '🔐' },
      { name: 'GCP / Azure', level: 78, icon: '🌐' },
    ],
  },
  {
    id: 'dev',
    label: 'Backend & Frontend',
    icon: '💻',
    color: '#43e8d8',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Go', level: 76, icon: '🐹' },
      { name: 'Node.js', level: 78, icon: '🟩' },
      { name: 'React', level: 72, icon: '⚛️' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'REST / gRPC APIs', level: 88, icon: '🔌' },
    ],
  },
]

function SkillBar({ name, level, icon, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`
              }
            }, delay)
          }
        })
      },
      { threshold: 0.5 }
    )
    const el = barRef.current?.closest('.skill-item')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <div className="skill-item__name">
          <span className="skill-item__icon">{icon}</span>
          <span>{name}</span>
        </div>
        <span className="skill-item__level">{level}%</span>
      </div>
      <div className="skill-item__bar-track">
        <div className="skill-item__bar-fill" ref={barRef} />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">My Skills</p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            Cloud-native infrastructure, DevOps tooling, and platform engineering — with backend & frontend as a plus
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.id}
              className="skills__card fade-in"
              style={{ '--cat-color': cat.color, animationDelay: `${ci * 0.15}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.label}</h3>
              </div>
              <div className="skills__card-body">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={ci * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
