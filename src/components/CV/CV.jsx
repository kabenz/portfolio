/** @import { Profile } from '../../types/profile.js' */
/** @import { ExperienceItem } from '../../types/experience.js' */
/** @import { ProjectItem } from '../../types/projects.js' */
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import TechList from '../TechList/TechList.jsx'
import profile from '../../data/profile.js'
import experiences from '../../data/experience.js'
import { educationItems, certifications } from '../../data/education.js'
import projects from '../../data/projects.js'
import hobbies from '../../data/hobbies.js'
import './CV.css'

export default function CV() {
  const printRef = useRef(null)
  const handlePrint = useReactToPrint({ contentRef: printRef })

  return (
    <div className="cv">
      <div className="cv__container" ref={printRef}>
        <header className="cv__header">
          <div className="cv__header-top">
            <div>
              <h1 className="cv__name">{profile.fullName}</h1>
              {profile.summary && (
                <p className="cv__summary">{profile.summary}</p>
              )}
            </div>
            <button className="cv__print-btn" onClick={handlePrint} aria-label="Print or save CV as PDF">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Print / Save as PDF
            </button>
          </div>
        </header>

        <div className="cv__body">
          <aside className="cv__sidebar">
            <ProfileCard profile={profile} context="cv" />
          </aside>

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

            <section className="cv__projects">
              <h2 className="cv__section-title">Side Projects</h2>

              <ul className="cv__project-list">
                {projects.map((project) => (
                  <li key={project.id} className="cv__project-item">
                    <div className="cv__project-header">
                      <strong className="cv__project-name">{project.name}</strong>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cv__project-link"
                        >
                          {project.repoUrl}
                        </a>
                      )}
                    </div>
                    <p className="cv__project-desc">{project.description}</p>
                    {project.responsibilities && project.responsibilities.length > 0 && (
                      <>
                        <p className="cv__project-label">Responsibilities</p>
                        <ul className="cv__project-bullets">
                          {project.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {project.outcomes && project.outcomes.length > 0 && (
                      <>
                        <p className="cv__project-label">Outcomes</p>
                        <ul className="cv__project-bullets">
                          {project.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="cv__project-tags">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="cv__project-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv__skills">
              <h2 className="cv__section-title">Technologies &amp; Skills</h2>

              <TechList compact />
            </section>

            <section className="cv__hobbies">
              <h2 className="cv__section-title">Hobbies &amp; Interests</h2>

              <ul className="cv__hobby-list">
                {[...hobbies]
                  .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
                  .map(hobby => (
                    <li key={hobby.id} className="cv__hobby-item">
                      {hobby.icon && (
                        <span className="cv__hobby-icon" aria-hidden="true">{hobby.icon}</span>
                      )}
                      <span className="cv__hobby-name">{hobby.name}</span>
                      {hobby.description && (
                        <span className="cv__hobby-desc"> — {hobby.description}</span>
                      )}
                    </li>
                  ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
