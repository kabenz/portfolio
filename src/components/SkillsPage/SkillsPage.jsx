import { useEffect, useRef } from 'react'
import TechList from '../TechList/TechList'
import './SkillsPage.css'

/** @type {Array<{ level: string, label: string, description: string }>} */
const proficiencyLevels = [
  { level: 'expert',       label: 'Expert',       description: 'Deep mastery — use daily in production' },
  { level: 'advanced',     label: 'Advanced',     description: 'Strong working knowledge — confident in complex scenarios' },
  { level: 'intermediate', label: 'Intermediate', description: 'Solid foundation — productive with some guidance' },
  { level: 'beginner',     label: 'Beginner',     description: 'Foundational understanding — actively learning' },
]

export default function SkillsPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills-page" className="skills-page section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Technologies</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-subtitle">
            A full overview of the technologies, platforms, and tools I work with daily
          </p>
        </div>

        <div className="skills-page__legend fade-in">
          {proficiencyLevels.map(({ level, label, description }) => (
            <div key={level} className={`skills-page__legend-item skills-page__legend-item--${level}`}>
              <span className="skills-page__legend-dot" />
              <div className="skills-page__legend-text">
                <span className="skills-page__legend-label">{label}</span>
                <span className="skills-page__legend-desc">{description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-page__content fade-in">
          <TechList />
        </div>
      </div>
    </section>
  )
}
