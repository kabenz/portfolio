import { useEffect, useRef } from 'react'
import TechList from '../TechList/TechList'
import './SkillsPage.css'

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

        <div className="skills-page__content fade-in">
          <TechList />
        </div>
      </div>
    </section>
  )
}
