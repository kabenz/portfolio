import { useEffect, useRef } from 'react'
import { educationItems, certifications } from '../../data/education.js'
import EducationList from '../EducationList/EducationList.jsx'
import './Education.css'

export default function Education() {
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
    <section id="education" className="education section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-subtitle">
            Academic background and professional certifications
          </p>
        </div>

        <EducationList educationItems={educationItems} certifications={certifications} />
      </div>
    </section>
  )
}
