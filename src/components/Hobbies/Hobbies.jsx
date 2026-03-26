import { useEffect, useRef } from 'react'
import hobbies from '../../data/hobbies.js'
import HobbiesList from '../HobbiesList/HobbiesList.jsx'
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

        <HobbiesList hobbies={sorted} />
      </div>
    </section>
  )
}
