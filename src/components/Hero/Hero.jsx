import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const roles = ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer', 'Site Reliability Engineer']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 60 : 100

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex(i => (i + 1) % roles.length)
      }, 400)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, roleIndex])

  const handleScrollToProjects = e => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge fade-in visible">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__name fade-in visible">
          Hi, I&apos;m <span className="hero__name-gradient">José Perdigão</span>
        </h1>

        <h2 className="hero__role fade-in visible">
          <span className="hero__role-text">{displayText}</span>
          <span className="hero__cursor" />
        </h2>

        <p className="hero__tagline fade-in visible">
          I build the infrastructure that keeps software running at scale —
          automating everything, breaking nothing.
        </p>

        <div className="hero__cta fade-in visible">
          <button className="btn btn--primary" onClick={handleScrollToProjects}>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a href="/resume.pdf" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Download Resume</span>
          </a>
        </div>

        <div className="hero__stats fade-in visible">
          <div className="hero__stat">
            <span className="hero__stat-value">7+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">50+</span>
            <span className="hero__stat-label">Pipelines Automated</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">3</span>
            <span className="hero__stat-label">Cloud Providers</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll-indicator"
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
      >
        <span className="hero__scroll-text">Scroll down</span>
        <div className="hero__scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
      </a>
    </section>
  )
}
