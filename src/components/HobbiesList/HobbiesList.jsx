/** @import { HobbyItem } from '../../types/hobby.js' */
import './HobbiesList.css'

/**
 * Renders a list of hobby cards in grid or stacked layout.
 *
 * @param {{ hobbies: HobbyItem[], layout?: 'grid' | 'stacked' }} props
 */
export default function HobbiesList({ hobbies, layout = 'grid' }) {
  return (
    <div className={`hobbies-list hobbies-list--${layout}`} role="list">
      {hobbies.map((hobby, index) => (
        <div
          key={hobby.id}
          className="hobby-card fade-in"
          role="listitem"
          style={{ transitionDelay: `${index * 0.08}s` }}
        >
          {hobby.icon && (
            <span className="hobby-card__icon" aria-hidden="true">{hobby.icon}</span>
          )}
          <h3 className="hobby-card__name">{hobby.name}</h3>
          {hobby.description && (
            <p className="hobby-card__desc">{hobby.description}</p>
          )}
          {hobby.photos?.length > 0 && (
            <div className="hobby-card__photos" aria-label={`Photos of ${hobby.name}`}>
              {hobby.photos.map((photo, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.BASE_URL}${photo.src}`}
                  alt={photo.alt ?? hobby.name}
                  className="hobby-card__photo"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
