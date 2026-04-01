import { useEffect, useRef, useState } from 'react'
import profile from '../../data/profile.js'
import experiences from '../../data/experience.js'
import { calculateYearsOfExperience } from '../../utils/experienceUtils.js'
import './Hero.css'

const ROLE = 'Senior Platform & DevOps Engineer'
const yearsOfExperience = calculateYearsOfExperience(experiences)

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const speed = isDeleting ? 60 : 100

    if (!isDeleting && displayText === ROLE) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 3000)
    } else if (isDeleting && displayText === '') {
      timeoutRef.current = setTimeout(() => setIsDeleting(false), 600)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : ROLE.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting])

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
          {profile.status ?? 'Available for opportunities'}
        </div>

        <h1 className="hero__name fade-in visible">
          Hi, I&apos;m <span className="hero__name-gradient">José Perdigão</span>
        </h1>

        <h2 className="hero__role fade-in visible">
          <span className="hero__role-text">{displayText}</span>
          <span className="hero__cursor" />
        </h2>

        {profile.summary && (
          <p className="hero__tagline fade-in visible">{profile.summary}</p>
        )}

        <div className="hero__cta fade-in visible">
          <button className="btn btn--primary" onClick={handleScrollToProjects}>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a href={`${import.meta.env.BASE_URL}cv`} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Export CV as PDF</span>
          </a>
        </div>

        <div className="hero__socials fade-in visible">
          {profile.github && (
            <a href={profile.github} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          )}
          {profile.website && (
            <a href={profile.website} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="Personal website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>Website</span>
            </a>
          )}
        </div>

        <div className="hero__stats fade-in visible">
          <div className="hero__stat">
            <span className="hero__stat-value">30+</span>
            <span className="hero__stat-label">Teams Enabled</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">50+</span>
            <span className="hero__stat-label">Pipelines Built</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">{yearsOfExperience}+</span>
            <span className="hero__stat-label">Years Experience</span>
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
