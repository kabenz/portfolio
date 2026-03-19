import { useEffect, useRef } from 'react'
import './About.css'

const highlights = [
  { icon: '🎯', title: 'Goal Oriented', desc: 'Focused on delivering results that align with business objectives' },
  { icon: '🤝', title: 'Collaborative', desc: 'Thriving in team environments and cross-functional collaboration' },
  { icon: '⚡', title: 'Performance', desc: 'Obsessed with writing fast, efficient, and maintainable code' },
  { icon: '🎨', title: 'Design Eye', desc: 'Bridging the gap between design and technical implementation' },
]

export default function About() {
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
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">About Me</p>
          <h2 className="section-title">The Person Behind the Code</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>

        <div className="about__grid">
          <div className="about__visual fade-in">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <div className="about__avatar-ring" />
                <div className="about__avatar">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__avatar-svg">
                    <circle cx="100" cy="80" r="40" fill="rgba(108,99,255,0.2)" stroke="rgba(108,99,255,0.5)" strokeWidth="2"/>
                    <path d="M40 170 Q40 130 100 130 Q160 130 160 170" fill="rgba(108,99,255,0.15)" stroke="rgba(108,99,255,0.4)" strokeWidth="2"/>
                  </svg>
                  <span className="about__avatar-initials">JD</span>
                </div>
              </div>
              <div className="about__image-decoration about__image-decoration--1" />
              <div className="about__image-decoration about__image-decoration--2" />
            </div>

            <div className="about__quick-facts">
              <div className="about__fact">
                <span className="about__fact-icon">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-icon">💼</span>
                <span>Open to Work</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-icon">🎓</span>
                <span>CS Degree</span>
              </div>
            </div>
          </div>

          <div className="about__content fade-in">
            <h3 className="about__heading">
              Building the web, <span className="about__heading-accent">one component at a time</span>
            </h3>
            <p className="about__bio">
              I&apos;m a full-stack developer with 5+ years of experience crafting web applications
              that users love. My journey started with a curiosity about how websites work and
              evolved into a passion for creating seamless digital experiences.
            </p>
            <p className="about__bio">
              I specialize in JavaScript ecosystems — React on the frontend and Node.js on the
              backend — but I&apos;m always exploring new technologies. When I&apos;m not coding, you&apos;ll
              find me contributing to open source, hiking in the mountains, or brewing the perfect cup of coffee.
            </p>

            <div className="about__highlights">
              {highlights.map(h => (
                <div key={h.title} className="about__highlight-card">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <div>
                    <h4 className="about__highlight-title">{h.title}</h4>
                    <p className="about__highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a
                href="#contact"
                className="btn btn--primary"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Get in Touch
              </a>
              <a href="/resume.pdf" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
