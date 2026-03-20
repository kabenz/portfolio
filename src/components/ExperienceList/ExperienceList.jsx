/** @import { ExperienceItem as ExperienceItemType } from '../../types/experience.js' */
import ExperienceItem from './ExperienceItem.jsx'
import './ExperienceList.css'

/**
 * Renders a chronological list of work history entries.
 *
 * @param {{ items: ExperienceItemType[] }} props
 */
export default function ExperienceList({ items }) {
  return (
    <div className="experience__timeline">
      <div className="experience__line" aria-hidden="true" />
      {items.map((exp, index) => (
        <ExperienceItem key={exp.id} exp={exp} index={index} />
      ))}
    </div>
  )
}
