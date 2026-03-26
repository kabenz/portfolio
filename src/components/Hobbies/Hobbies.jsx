import { useEffect, useRef } from 'react'
import hobbies from '../../data/hobbies.js'
import './Hobbies.css'

export default function Hobbies() {
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

  const sorted = [...hobbies].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))

  return (
    <section id="hobbies" className="hobbies section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Personal</p>
          <h2 className="section-title">Hobbies &amp; Interests</h2>
          <p className="section-subtitle">
            Things I enjoy outside of work
          </p>
        </div>

        <div className="hobbies__grid fade-in">
          {sorted.map(hobby => (
            <div key={hobby.id} className="hobby-card">
              {hobby.icon && (
                <span className="hobby-card__icon" aria-hidden="true">{hobby.icon}</span>
              )}
              <h3 className="hobby-card__name">{hobby.name}</h3>
              {hobby.description && (
                <p className="hobby-card__desc">{hobby.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
