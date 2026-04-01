/** @import { ExperienceItem as ExperienceItemType } from '../../types/experience.js' */
import ExperienceItem from './ExperienceItem.jsx'
import { parseDateString } from '../../utils/experienceUtils.js'
import './ExperienceList.css'

/**
 * Renders a chronological list of work history entries,
 * sorted by start date (most recent first) with year markers.
 *
 * @param {{ items: ExperienceItemType[] }} props
 */
export default function ExperienceList({ items }) {
  const sortedExperience = [...items].sort((a, b) => {
    const dateA = parseDateString(a.startDate)
    const dateB = parseDateString(b.startDate)
    return (dateB?.getTime() ?? 0) - (dateA?.getTime() ?? 0)
  })

  /** @type {Set<number>} */
  const seenYears = new Set()

  return (
    <div className="experience__timeline" role="list">
      <div className="experience__line" aria-hidden="true" />
      {sortedExperience.map((exp, index) => {
        const year = parseDateString(exp.startDate)?.getFullYear()
        const showYearMarker = year !== undefined && !seenYears.has(year)
        if (year !== undefined) seenYears.add(year)

        return (
          <div key={exp.id} role="listitem">
            {showYearMarker && (
              <div className="experience__year-marker">
                <span className="experience__year-label">{year}</span>
              </div>
            )}
            <ExperienceItem exp={exp} index={index} />
          </div>
        )
      })}
    </div>
  )
}
