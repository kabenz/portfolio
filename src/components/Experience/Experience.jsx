import { useEffect, useRef } from 'react'
import experiences from '../../data/experience.js'
import ExperienceList from '../ExperienceList/ExperienceList.jsx'
import './Experience.css'

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

        <ExperienceList items={experiences} />
      </div>
    </section>
  )
}
