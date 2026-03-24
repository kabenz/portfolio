import { useEffect, useRef } from 'react'
import './Skills.css'
import skills from '../../data/skills.js'

/** @type {Record<string, number>} */
const levelToPercent = {
  beginner:     30,
  intermediate: 70,
  advanced:     85,
  expert:       95,
}

const categoryMeta = [
  { id: 'cloud',     label: 'Cloud & Infrastructure', icon: '☁️',  color: '#6c63ff' },
  { id: 'cicd',      label: 'CI/CD & GitOps',         icon: '🔄',  color: '#ff6584' },
  { id: 'languages', label: 'Languages & Scripting',  icon: '💻',  color: '#43e8d8' },
]

const skillCategories = categoryMeta.map(cat => ({
  ...cat,
  skills: skills
    .filter(s => s.category === cat.id)
    .map(s => ({ name: s.name, icon: s.icon, level: s.level ? levelToPercent[s.level] : levelToPercent.intermediate })),
}))

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
            Azure-native platform engineering, GitOps automation, and observability — with scripting &amp; development as a plus
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
