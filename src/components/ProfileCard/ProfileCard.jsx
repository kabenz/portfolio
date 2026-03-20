/** @import { Profile } from '../../types/profile.js' */
import './ProfileCard.css'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

/**
 * Returns true when a field should be rendered in the given context.
 * A field with no visibility entry defaults to 'both' (always visible).
 *
 * @param {string} field - The field name to check
 * @param {import('../../types/profile.js').ProfileVisibility | undefined} visibility
 * @param {'web' | 'cv'} context
 */
function isVisible(field, visibility, context) {
  const rule = visibility?.[field] ?? 'both'
  return rule === 'both' || rule === context
}

/**
 * Reusable profile / contact information card.
 *
 * Required props  : profile.fullName, profile.email
 * Conditional props: profile.summary, profile.location, profile.phone,
 *                    profile.address, profile.website, profile.linkedin,
 *                    profile.github, profile.visibility
 *
 * @param {{ profile: Profile, context?: 'web' | 'cv' }} props
 */
export default function ProfileCard({ profile, context = 'web' }) {
  const { visibility } = profile

  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <h3 className="profile-card__name">{profile.fullName}</h3>
        {profile.summary && (
          <p className="profile-card__summary">{profile.summary}</p>
        )}
      </div>

      <div className="profile-card__details">
        {isVisible('email', visibility, context) && (
          <div className="profile-card__detail">
            <div className="profile-card__detail-icon">📧</div>
            <div>
              <div className="profile-card__detail-label">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="profile-card__detail-value profile-card__detail-value--link"
              >
                {profile.email}
              </a>
            </div>
          </div>
        )}

        {profile.location && isVisible('location', visibility, context) && (
          <div className="profile-card__detail">
            <div className="profile-card__detail-icon">📍</div>
            <div>
              <div className="profile-card__detail-label">Location</div>
              <span className="profile-card__detail-value">{profile.location}</span>
            </div>
          </div>
        )}

        {profile.address && isVisible('address', visibility, context) && (
          <div className="profile-card__detail">
            <div className="profile-card__detail-icon">🏠</div>
            <div>
              <div className="profile-card__detail-label">Address</div>
              <span className="profile-card__detail-value">{profile.address}</span>
            </div>
          </div>
        )}

        {profile.phone && isVisible('phone', visibility, context) && (
          <div className="profile-card__detail">
            <div className="profile-card__detail-icon">📞</div>
            <div>
              <div className="profile-card__detail-label">Phone</div>
              <a
                href={`tel:${profile.phone}`}
                className="profile-card__detail-value profile-card__detail-value--link"
              >
                {profile.phone}
              </a>
            </div>
          </div>
        )}

        {profile.website && isVisible('website', visibility, context) && (
          <div className="profile-card__detail">
            <div className="profile-card__detail-icon">🌐</div>
            <div>
              <div className="profile-card__detail-label">Website</div>
              <a
                href={profile.website}
                className="profile-card__detail-value profile-card__detail-value--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.website}
              </a>
            </div>
          </div>
        )}
      </div>

      {(profile.linkedin || profile.github) && (
        <div className="profile-card__social-links">
          {profile.github && isVisible('github', visibility, context) && (
            <a
              href={profile.github}
              className="profile-card__social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}
          {profile.linkedin && isVisible('linkedin', visibility, context) && (
            <a
              href={profile.linkedin}
              className="profile-card__social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}
