/** @import { EducationItem as EducationItemType, CertificationItem as CertificationItemType } from '../../types/education.js' */
import EducationItem from './EducationItem.jsx'
import CertificationItem from './CertificationItem.jsx'
import './EducationList.css'

/**
 * Renders education history and certifications in separate groups.
 *
 * @param {{ educationItems: EducationItemType[], certifications?: CertificationItemType[] }} props
 */
export default function EducationList({ educationItems, certifications }) {
  const sortedEducation = [...educationItems].sort((a, b) => {
    const aYear = a.endDate ? new Date(a.endDate).getTime() : Infinity
    const bYear = b.endDate ? new Date(b.endDate).getTime() : Infinity
    return bYear - aYear
  })

  return (
    <div className="education__list">
      <div className="education__timeline" role="list">
        <div className="education__line" aria-hidden="true" />
        {sortedEducation.map((edu, index) => (
          <div key={edu.id} role="listitem">
            <EducationItem edu={edu} index={index} />
          </div>
        ))}
      </div>

      {certifications?.length > 0 && (
        <div className="education__certifications">
          <h3 className="education__group-title">Certifications</h3>
          <div className="education__cert-grid" role="list">
            {certifications.map((cert, index) => (
              <div key={cert.id} role="listitem">
                <CertificationItem cert={cert} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
