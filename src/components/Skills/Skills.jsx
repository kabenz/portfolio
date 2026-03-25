import { useEffect, useRef } from 'react'
import TechList from '../TechList/TechList'
import './Skills.css'

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

        <div className="skills__content fade-in">
          <TechList compact />
        </div>
      </div>
    </section>
  )
}
