/** @import { ExperienceItem as ExperienceItemType } from '../../types/experience.js' */
import { parseDateString } from '../../utils/experienceUtils.js'

/**
 * Calculates a human-readable duration string between two dates.
 *
 * @param {string} startDate
 * @param {string | undefined} endDate
 * @returns {string}
 */
function getDuration(startDate, endDate) {
  const start = parseDateString(startDate)
  const end = endDate ? parseDateString(endDate) : new Date()
  if (!start || !end) return ''
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0) return `${months} mo${months !== 1 ? 's' : ''}`
  if (months === 0) return `${years} yr${years !== 1 ? 's' : ''}`
  return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`
}

/**
 * @param {{ exp: ExperienceItemType, index: number }} props
 */
export default function ExperienceItem({ exp, index }) {
  const current = !exp.endDate
  const period = `${exp.startDate} – ${exp.endDate ?? 'Present'}`
  const duration = getDuration(exp.startDate, exp.endDate)

  return (
    <article
      className={`exp-card fade-in ${current ? 'exp-card--current' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      aria-label={`${exp.role} at ${exp.company}${current ? ', current role' : ''}`}
    >
      <div className="exp-card__marker" aria-hidden="true">
        <div className="exp-card__dot" />
      </div>

      <div className="exp-card__content">
        <div className="exp-card__header">
          <div className="exp-card__title-group">
            <h3 className="exp-card__role">{exp.role}</h3>
            <p className="exp-card__company">{exp.company}</p>
          </div>
          <div className="exp-card__meta">
            <span className="exp-card__period">
              {period}
              <span className="exp-card__duration">
                {' '}· {duration}
              </span>
            </span>
            {exp.location && (
              <span className="exp-card__location">
                <span aria-hidden="true">📍 </span>
                {exp.location}
              </span>
            )}
            {current && (
              <span className="exp-card__badge">Current</span>
            )}
          </div>
        </div>

        <p className="exp-card__description">{exp.summary}</p>

        {exp.responsibilities?.length > 0 && (
          <div className="exp-card__responsibilities">
            <p className="exp-card__responsibilities-label">Responsibilities</p>
            <ul className="exp-card__responsibility-list">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="exp-card__responsibility">
                  <span className="exp-card__responsibility-bullet" aria-hidden="true">▸</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="exp-card__achievements">
          {(exp.achievements ?? []).map(a => (
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
