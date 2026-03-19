import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/kabenz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/kabenz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:jose@perdigao.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Interested in cloud architecture, DevOps consulting, or platform engineering? Let&apos;s talk.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info fade-in">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-desc">
                Available for DevOps consulting, cloud architecture reviews, and platform engineering roles.
                I&apos;m always open to discussing new challenges and opportunities.
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <div className="contact__detail-icon">📧</div>
                  <div>
                    <div className="contact__detail-label">Email</div>
                    <a href="mailto:jose@perdigao.dev" className="contact__detail-value">jose@perdigao.dev</a>
                  </div>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon">📍</div>
                  <div>
                    <div className="contact__detail-label">Location</div>
                    <span className="contact__detail-value">Portugal</span>
                  </div>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon">⏰</div>
                  <div>
                    <div className="contact__detail-label">Response Time</div>
                    <span className="contact__detail-value">Within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="contact__socials">
                <p className="contact__socials-label">Find me on</p>
                <div className="contact__socials-grid">
                  {socialLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="contact__social-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper fade-in">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              {status === 'success' && (
                <div className="contact__status contact__status--success">
                  ✅ Message sent! I&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="contact__status contact__status--error">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact__spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
