import skills from '../../data/skills.js'
import './TechList.css'

/** @type {Array<{ id: string, label: string, icon: string, color: string }>} */
const categoryMeta = [
  { id: 'cloud',     label: 'Cloud & Infrastructure', icon: '☁️',  color: '#6c63ff' },
  { id: 'cicd',      label: 'CI/CD & GitOps',         icon: '🔄',  color: '#ff6584' },
  { id: 'languages', label: 'Languages & Scripting',  icon: '💻',  color: '#43e8d8' },
]

/** @type {Record<string, string>} */
const levelLabel = {
  expert:       'Expert',
  advanced:     'Advanced',
  intermediate: 'Intermediate',
  beginner:     'Beginner',
}

/**
 * @param {{ compact?: boolean }} props
 */
export default function TechList({ compact = false }) {
  return (
    <div className={`tech-list${compact ? ' tech-list--compact' : ''}`}>
      {categoryMeta.map(cat => {
        const catSkills = skills.filter(s => s.category === cat.id)
        if (catSkills.length === 0) return null
        return (
          <div
            key={cat.id}
            className="tech-list__group"
            style={{ '--cat-color': cat.color }}
          >
            <div className="tech-list__group-header">
              <span className="tech-list__group-icon">{cat.icon}</span>
              <h3 className="tech-list__group-title">{cat.label}</h3>
              <span className="tech-list__group-count">{catSkills.length} skills</span>
            </div>
            <div className="tech-list__chips">
              {catSkills.map(skill => (
                <span
                  key={skill.name}
                  className={`tech-chip${skill.featured ? ' tech-chip--featured' : ''}${skill.level ? ` tech-chip--${skill.level}` : ''}`}
                  title={skill.level ? levelLabel[skill.level] : undefined}
                >
                  {skill.icon && (
                    <span className="tech-chip__icon">{skill.icon}</span>
                  )}
                  <span className="tech-chip__name">{skill.name}</span>
                  {!compact && skill.level && (
                    <span className="tech-chip__level">{levelLabel[skill.level]}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
