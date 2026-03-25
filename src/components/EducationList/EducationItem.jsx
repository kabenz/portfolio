/** @import { EducationItem as EducationItemType } from '../../types/education.js' */

/**
 * @param {{ edu: EducationItemType, index: number }} props
 */
export default function EducationItem({ edu, index }) {
  const period = edu.startDate
    ? `${edu.startDate} – ${edu.endDate ?? 'Present'}`
    : edu.endDate ?? ''

  return (
    <article
      className="edu-card fade-in"
      style={{ transitionDelay: `${index * 0.12}s` }}
      aria-label={`${edu.degree} at ${edu.institution}`}
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
          {period && (
            <div className="edu-card__meta">
              <span className="edu-card__period">{period}</span>
            </div>
          )}
        </div>

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
