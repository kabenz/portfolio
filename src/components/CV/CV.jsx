/** @import { Profile } from '../../types/profile.js' */
/** @import { ExperienceItem } from '../../types/experience.js' */
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import TechList from '../TechList/TechList.jsx'
import profile from '../../data/profile.js'
import experiences from '../../data/experience.js'
import { educationItems, certifications } from '../../data/education.js'
import './CV.css'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function CV() {
  const printRef = useRef(null)
  const handlePrint = useReactToPrint({ contentRef: printRef })

  /** Full name initials for the avatar placeholder */
  const initials = profile.fullName
    .split(' ')
    .filter(n => n.length > 0)
    .slice(0, 2)
    .map(n => n[0])
    .join('')

  return (
    <div className="cv">
      <div className="cv__container" ref={printRef}>
        <header className="cv__header">
          <div className="cv__header-inner">
            {/* Avatar */}
            <div className="cv__avatar" aria-hidden="true">
              {profile.photo
                ? <img src={profile.photo} alt={profile.fullName} className="cv__avatar-photo" />
                : <span className="cv__avatar-initials">{initials}</span>
              }
            </div>

            {/* Identity + contact */}
            <div className="cv__header-text">
              <div className="cv__header-top">
                <h1 className="cv__name">{profile.fullName}</h1>
                <div className="cv__actions">
                  <button className="cv__print-btn" onClick={handlePrint} aria-label="Open print dialog to print or save CV as PDF">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    Print / Save PDF
                  </button>
                  <p className="cv__print-note">
                    Opens your browser print dialog so you can save it as a PDF.
                    <span className="cv__print-note-mobile"> On mobile, use your browser share or print menu if the PDF option is not shown immediately.</span>
                  </p>
                </div>
              </div>

              {profile.summary && (
                <p className="cv__summary">{profile.summary}</p>
              )}

              <ul className="cv__contact-strip">
                {profile.email && (
                  <li className="cv__contact-item">
                    <span aria-hidden="true">✉</span>
                    <a href={`mailto:${profile.email}`} className="cv__contact-link">{profile.email}</a>
                  </li>
                )}
                {(profile.address || profile.location) && (
                  <li className="cv__contact-item">
                    <span aria-hidden="true">📍</span>
                    <span>{profile.address ?? profile.location}</span>
                  </li>
                )}
                {profile.phone && (
                  <li className="cv__contact-item">
                    <span aria-hidden="true">📞</span>
                    <a href={`tel:${profile.phone}`} className="cv__contact-link">{profile.phone}</a>
                  </li>
                )}
                {profile.github && (
                  <li className="cv__contact-item">
                    <GitHubIcon />
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="cv__contact-link">{profile.github.replace(/^https?:\/\//, '')}</a>
                  </li>
                )}
                {profile.linkedin && (
                  <li className="cv__contact-item">
                    <LinkedInIcon />
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="cv__contact-link">{profile.linkedin.replace(/^https?:\/\//, '')}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </header>

        <main className="cv__main">
          <section className="cv__experience">
            <h2 className="cv__section-title">Professional Experience</h2>

            <ul className="cv__exp-list">
              {[...experiences]
                .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
                .map((exp) => {
                  const period = `${exp.startDate} – ${exp.endDate ?? 'Present'}`
                  return (
                    <li key={exp.id} className="cv__exp-entry">
                      <div className="cv__exp-header">
                        <div>
                          <span className="cv__exp-role">{exp.role}</span>
                          <span className="cv__exp-company"> · {exp.company}</span>
                        </div>
                        <div className="cv__exp-meta">
                          <span className="cv__exp-period">{period}</span>
                          {exp.location && (
                            <span className="cv__exp-location">{exp.location}</span>
                          )}
                        </div>
                      </div>
                      <p className="cv__exp-description">{exp.summary}</p>
                      {exp.responsibilities?.length > 0 && (
                        <ul className="cv__exp-achievements">
                          {exp.responsibilities.map((r, i) => (
                            <li key={`${exp.id}-r-${i}`} className="cv__exp-achievement">{r}</li>
                          ))}
                        </ul>
                      )}
                      {exp.achievements?.length > 0 && (
                        <ul className="cv__exp-achievements">
                          {exp.achievements.map((a, i) => (
                            <li key={`${exp.id}-a-${i}`} className="cv__exp-achievement">{a}</li>
                          ))}
                        </ul>
                      )}
                      {exp.technologies?.length > 0 && (
                        <div className="cv__exp-tags">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="cv__exp-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          </section>

          <section className="cv__education">
            <h2 className="cv__section-title">Education &amp; Certifications</h2>

            <ul className="cv__edu-list">
              {[...educationItems]
                .sort((a, b) => {
                  const aYear = a.endDate ? new Date(a.endDate).getTime() : Infinity
                  const bYear = b.endDate ? new Date(b.endDate).getTime() : Infinity
                  return bYear - aYear
                })
                .map((edu) => {
                  const period = `${edu.startDate} – ${edu.endDate ?? 'Present'}`
                  return (
                    <li key={edu.id} className="cv__edu-entry">
                      <div className="cv__edu-header">
                        <div>
                          <span className="cv__edu-degree">{edu.degree}</span>
                          <span className="cv__edu-institution"> · {edu.institution}</span>
                        </div>
                        <span className="cv__edu-period">{period}</span>
                      </div>
                      {(edu.concentration || edu.specialization) && (
                        <p className="cv__edu-details">
                          {[edu.concentration, edu.specialization]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                      )}
                      {edu.courses?.length > 0 && (
                        <p className="cv__edu-courses">
                          {edu.courses.join(', ')}
                        </p>
                      )}
                    </li>
                  )
                })}
            </ul>

            {certifications?.length > 0 && (
              <div className="cv__cert-group">
                <h3 className="cv__cert-group-title">Certifications</h3>
                <ul className="cv__cert-list">
                  {certifications.map((cert) => (
                    <li key={cert.id} className="cv__cert-entry">
                      <div className="cv__cert-header">
                        <span className="cv__cert-name">{cert.name}</span>
                        <span className="cv__cert-meta">
                          <span className="cv__cert-issuer">{cert.issuer}</span>
                          {cert.date && (
                            <span className="cv__cert-date"> · {cert.date}</span>
                          )}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="cv__skills">
            <h2 className="cv__section-title">Technologies &amp; Skills</h2>

            <TechList compact />
          </section>

        </main>
      </div>
    </div>
  )
}
