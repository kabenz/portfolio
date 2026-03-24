/** @import { Profile } from '../../types/profile.js' */
/** @import { ExperienceItem } from '../../types/experience.js' */
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import ExperienceList from '../ExperienceList/ExperienceList.jsx'
import TechList from '../TechList/TechList.jsx'
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

              <ExperienceList items={experiences} />
            </section>

            <section className="cv__skills">
              <h2 className="cv__section-title">Technologies &amp; Skills</h2>

              <TechList compact />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
