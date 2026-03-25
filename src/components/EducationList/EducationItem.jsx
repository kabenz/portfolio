/** @import { EducationItem as EducationItemType } from '../../types/education.js' */

/**
 * Calculates a human-readable duration string between two dates.
 *
 * @param {string} startDate
 * @param {string | undefined} endDate
 * @returns {string}
 */
function getDuration(startDate, endDate) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0 && months === 0) return '< 1 mo'
  if (years === 0) return `${months} mo${months !== 1 ? 's' : ''}`
  if (months === 0) return `${years} yr${years !== 1 ? 's' : ''}`
  return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`
}

/**
 * @param {{ edu: EducationItemType, index: number }} props
 */
export default function EducationItem({ edu, index }) {
  const current = edu.startDate && !edu.endDate
  const period = edu.startDate
    ? `${edu.startDate} – ${edu.endDate ?? 'Present'}`
    : edu.endDate ?? ''
  const duration = edu.startDate ? getDuration(edu.startDate, edu.endDate) : null

  return (
    <article
      className={`edu-card fade-in${current ? ' edu-card--current' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      aria-label={`${edu.degree} at ${edu.institution}${current ? ', ongoing' : ''}`}
    >
      <div className="edu-card__marker" aria-hidden="true">
        <div className="edu-card__dot" />
      </div>

      <div className="edu-card__content">
        <div className="edu-card__header">
          <div className="edu-card__title-group">
            <h3 className="edu-card__degree">{edu.degree}</h3>
            <p className="edu-card__institution">{edu.institution}</p>
            {edu.field && <p className="edu-card__field">{edu.field}</p>}
          </div>
          <div className="edu-card__meta">
            {period && (
              <span className="edu-card__period">
                {period}
                {duration && (
                  <span className="edu-card__duration">
                    {' '}· {duration}
                  </span>
                )}
              </span>
            )}
            {current && (
              <span className="edu-card__badge">Current</span>
            )}
          </div>
        </div>

        {(edu.concentration || edu.specialization) && (
          <div className="edu-card__details">
            {edu.concentration && (
              <span className="edu-card__detail-tag">
                <span className="edu-card__detail-label">Concentration</span>
                {edu.concentration}
              </span>
            )}
            {edu.specialization && (
              <span className="edu-card__detail-tag">
                <span className="edu-card__detail-label">Specialization</span>
                {edu.specialization}
              </span>
            )}
          </div>
        )}

        {edu.courses?.length > 0 && (
          <div className="edu-card__courses">
            <p className="edu-card__courses-label">Notable Courses</p>
            <ul className="edu-card__course-list">
              {edu.courses.map((course) => (
                <li key={course} className="edu-card__course">
                  <span className="edu-card__course-bullet" aria-hidden="true">▸</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
