import { useEffect, useRef, useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import profile from '../../data/profile'
import './Contact.css'

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
            <ProfileCard profile={profile} context="web" />
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
