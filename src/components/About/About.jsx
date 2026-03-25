import { useEffect, useRef } from 'react'
import profile from '../../data/profile.js'
import './About.css'

const highlights = [
  { icon: '🚀', title: 'Automation First', desc: 'CI/CD with GitHub Actions and Azure Pipelines — eliminating toil and accelerating delivery' },
  { icon: '☁️', title: 'Azure Expert', desc: 'Deep hands-on experience with Azure services, AKS, and cloud-native architectures' },
  { icon: '🔒', title: 'Security & Reliability', desc: 'GitOps with FluxCD, zero-downtime deployments, and robust observability with Prometheus & Grafana' },
  { icon: '🤝', title: 'Platform Builder', desc: 'Building self-service developer platforms on Kubernetes with Helm, Terraform, and Cloudflare' },
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
          <h2 className="section-title">The Engineer Behind the Platform</h2>
          <p className="section-subtitle">
            DevOps & Cloud professional passionate about building reliable, scalable infrastructure
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
                  <span className="about__avatar-initials">JP</span>
                </div>
              </div>
              <div className="about__image-decoration about__image-decoration--1" />
              <div className="about__image-decoration about__image-decoration--2" />
            </div>

            <div className="about__quick-facts">
              <div className="about__fact">
                <span className="about__fact-icon">📍</span>
                <span>Leiria, Portugal</span>
              </div>
              {/* <div className="about__fact">
                <span className="about__fact-icon">💼</span>
                <span>Open to Opportunities</span>
              </div> */}
              <div className="about__fact">
                <span className="about__fact-icon">🎓</span>
                <span>Computer Engineering</span>
              </div>
            </div>
          </div>

          <div className="about__content fade-in">
            <h3 className="about__heading">
              Building platforms that <span className="about__heading-accent">enable engineering teams to thrive</span>
            </h3>
            <p className="about__bio">
              {profile.summary}
            </p>
            <p className="about__bio">
              I work daily with Kubernetes, Helm, Terraform, FluxCD, and Azure. I automate
              everything with GitHub Actions, Azure Pipelines, Python, Bash, and PowerShell,
              and I keep systems observable with Prometheus, Grafana, and the ELK stack.
              Backend and frontend skills in Go and JavaScript round out my toolkit.
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
