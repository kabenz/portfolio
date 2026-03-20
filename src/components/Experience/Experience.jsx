import { useEffect, useRef } from 'react'
import experiences from '../../data/experience.js'
import './Experience.css'

function ExperienceCard({ exp, index }) {
  return (
    <div className={`exp-card fade-in ${exp.current ? 'exp-card--current' : ''}`} style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="exp-card__marker">
        <div className="exp-card__dot" />
      </div>

      <div className="exp-card__content">
        <div className="exp-card__header">
          <div className="exp-card__title-group">
            <h3 className="exp-card__role">{exp.role}</h3>
            <p className="exp-card__company">{exp.company}</p>
          </div>
          <div className="exp-card__meta">
            <span className="exp-card__period">{exp.period}</span>
            <span className="exp-card__location">📍 {exp.location}</span>
            {exp.current && <span className="exp-card__badge">Current</span>}
          </div>
        </div>

        <p className="exp-card__description">{exp.description}</p>

        <ul className="exp-card__achievements">
          {exp.achievements.map(a => (
            <li key={a} className="exp-card__achievement">
              <span className="exp-card__achievement-bullet" aria-hidden="true">▸</span>
              {a}
            </li>
          ))}
        </ul>

        <div className="exp-card__tags">
          {exp.tags.map(tag => (
            <span key={tag} className="exp-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
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
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Career</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            7+ years building cloud-native infrastructure and developer platforms across the Azure ecosystem
          </p>
        </div>

        <div className="experience__timeline">
          <div className="experience__line" aria-hidden="true" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
