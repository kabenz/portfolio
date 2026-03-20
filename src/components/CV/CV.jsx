/** @import { Profile } from '../../types/profile.js' */
/** @import { ExperienceItem } from '../../types/experience.js' */
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import profile from '../../data/profile.js'
import experiences from '../../data/experience.js'
import './CV.css'

export default function CV() {
  return (
    <div className="cv">
      <div className="cv__container">
        <header className="cv__header">
          <h1 className="cv__name">{profile.fullName}</h1>
          {profile.summary && (
            <p className="cv__summary">{profile.summary}</p>
          )}
        </header>

        <div className="cv__body">
          <aside className="cv__sidebar">
            <ProfileCard profile={profile} context="cv" />
          </aside>

          <main className="cv__main">
            <section className="cv__experience">
              <h2 className="cv__section-title">Professional Experience</h2>

              {experiences.map(exp => (
                <div key={exp.id} className="cv__exp-entry">
                  <div className="cv__exp-header">
                    <div className="cv__exp-title-group">
                      <h3 className="cv__exp-role">{exp.role}</h3>
                      <p className="cv__exp-company">{exp.company}</p>
                    </div>
                    <div className="cv__exp-meta">
                      <span className="cv__exp-period">{exp.startDate} – {exp.endDate ?? 'Present'}</span>
                      <span className="cv__exp-location">{exp.location}</span>
                    </div>
                  </div>

                  <p className="cv__exp-description">{exp.summary}</p>

                  <ul className="cv__exp-achievements">
                    {exp.achievements.map(a => (
                      <li key={a} className="cv__exp-achievement">{a}</li>
                    ))}
                  </ul>

                  <div className="cv__exp-tags">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="cv__exp-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
