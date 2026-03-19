import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#6c63ff',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 88, icon: '📘' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'CSS / Sass', level: 90, icon: '🎨' },
      { name: 'Next.js', level: 82, icon: '▲' },
      { name: 'Vue.js', level: 70, icon: '💚' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: '#ff6584',
    skills: [
      { name: 'Node.js', level: 88, icon: '🟩' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'PostgreSQL', level: 78, icon: '🐘' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'REST APIs', level: 92, icon: '🔌' },
      { name: 'GraphQL', level: 72, icon: '◈' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: '#43e8d8',
    skills: [
      { name: 'Git / GitHub', level: 94, icon: '🐱' },
      { name: 'Docker', level: 76, icon: '🐋' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Figma', level: 80, icon: '🖼️' },
      { name: 'Jest / Testing', level: 82, icon: '🧪' },
      { name: 'CI/CD', level: 74, icon: '🔄' },
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
            A curated set of tools and technologies I&apos;ve mastered over the years
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
