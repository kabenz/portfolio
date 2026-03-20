/** @import { ExperienceItem as ExperienceItemType } from '../../types/experience.js' */

/**
 * @param {{ exp: ExperienceItemType, index: number }} props
 */
export default function ExperienceItem({ exp, index }) {
  const current = !exp.endDate
  const period = `${exp.startDate} – ${exp.endDate ?? 'Present'}`

  return (
    <article
      className={`exp-card fade-in ${current ? 'exp-card--current' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="exp-card__marker">
        <div className="exp-card__dot" />
      </div>

      <div className="exp-card__content">
        <div className="exp-card__header">
          <div className="exp-card__title-group">
            <h3 className="exp-card__role">{exp.role}</h3>
            <p className="exp-card__company">{exp.company}</p>
          </div>
          <div className="exp-card__meta">
            <span className="exp-card__period">{period}</span>
            {exp.location && (
              <span className="exp-card__location">📍 {exp.location}</span>
            )}
            {current && <span className="exp-card__badge">Current</span>}
          </div>
        </div>

        <p className="exp-card__description">{exp.summary}</p>

        <ul className="exp-card__achievements">
          {exp.achievements.map(a => (
            <li key={a} className="exp-card__achievement">
              <span className="exp-card__achievement-bullet" aria-hidden="true">▸</span>
              {a}
            </li>
          ))}
        </ul>

        <div className="exp-card__tags">
          {exp.technologies.map(tech => (
            <span key={tech} className="exp-card__tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
