/** @import { CertificationItem as CertificationItemType } from '../../types/education.js' */

/**
 * @param {{ cert: CertificationItemType, index: number }} props
 */
export default function CertificationItem({ cert, index }) {
  const content = (
    <article
      className="cert-card fade-in"
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={`${cert.name} issued by ${cert.issuer}`}
    >
      <div className="cert-card__header">
        <div className="cert-card__title-group">
          <h3 className="cert-card__name">{cert.name}</h3>
          <p className="cert-card__issuer">{cert.issuer}</p>
          {cert.field && <p className="cert-card__field">{cert.field}</p>}
        </div>
        {cert.date && (
          <div className="cert-card__meta">
            <span className="cert-card__date">{cert.date}</span>
            {cert.expiryDate && (
              <span className="cert-card__expiry">Expires {cert.expiryDate}</span>
            )}
          </div>
        )}
      </div>
    </article>
  )

  if (cert.url) {
    return (
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-card__link"
        aria-label={`View certificate: ${cert.name}`}
      >
        {content}
      </a>
    )
  }

  return content
}
