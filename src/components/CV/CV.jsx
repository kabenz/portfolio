/** @import { Profile } from '../../types/profile.js' */
/** @import { ExperienceItem } from '../../types/experience.js' */
/** @import { ProjectItem } from '../../types/projects.js' */
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import ExperienceList from '../ExperienceList/ExperienceList.jsx'
import EducationList from '../EducationList/EducationList.jsx'
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

              <ExperienceList items={experiences} />
            </section>

            <section className="cv__education">
              <h2 className="cv__section-title">Education &amp; Certifications</h2>

              <EducationList educationItems={educationItems} certifications={certifications} />
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
