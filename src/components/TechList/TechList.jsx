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

// Core expertise categories (exclude enthusiast-flagged skills)
const expertiseCategories = categoryMeta
  .map(cat => ({ ...cat, skills: skills.filter(s => s.category === cat.id && !s.enthusiast) }))
  .filter(cat => cat.skills.length > 0)

// Side-project / enthusiast skills (all categories combined)
const enthusiastSkills = skills.filter(s => s.enthusiast)

/**
 * Renders a single skill chip.
 * @param {{ skill: import('../../types/skill.js').SkillItem, compact: boolean, catColor?: string }} props
 */
function SkillChip({ skill, compact, catColor }) {
  return (
    <span
      className={`tech-chip${skill.featured ? ' tech-chip--featured' : ''}${skill.level ? ` tech-chip--${skill.level}` : ''}`}
      style={catColor ? { '--cat-color': catColor } : undefined}
      title={skill.level ? levelLabel[skill.level] : undefined}
    >
      {skill.icon && <span className="tech-chip__icon">{skill.icon}</span>}
      <span className="tech-chip__name">{skill.name}</span>
      {!compact && skill.level && (
        <span className="tech-chip__level">{levelLabel[skill.level]}</span>
      )}
    </span>
  )
}

/**
 * @param {{ compact?: boolean }} props
 */
export default function TechList({ compact = false }) {
  return (
    <div className={`tech-list${compact ? ' tech-list--compact' : ''}`}>

      {/* ── Core expertise ── */}
      <div className="tech-list__section">
        {!compact && (
          <div className="tech-list__section-header">
            <span className="tech-list__section-icon">⚡</span>
            <h3 className="tech-list__section-title">Core Expertise</h3>
          </div>
        )}
        {expertiseCategories.map(cat => (
          <div
            key={cat.id}
            className="tech-list__group"
            style={{ '--cat-color': cat.color }}
          >
            <div className="tech-list__group-header">
              <span className="tech-list__group-icon">{cat.icon}</span>
              <h4 className="tech-list__group-title">{cat.label}</h4>
              <span className="tech-list__group-count">{cat.skills.length} skills</span>
            </div>
            <div className="tech-list__chips">
              {cat.skills.map(skill => (
                <SkillChip key={skill.name} skill={skill} compact={compact} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Enthusiast / Also Exploring ── */}
      {enthusiastSkills.length > 0 && (
        <div className="tech-list__section tech-list__section--enthusiast">
          <div className="tech-list__section-header">
            <span className="tech-list__section-icon">🌱</span>
            <h3 className="tech-list__section-title">
              {compact ? 'Also Exploring' : 'Also Exploring — Side Projects'}
            </h3>
          </div>
          <p className="tech-list__section-desc">
            Languages I use in personal projects and actively deepening.
          </p>
          <div className="tech-list__chips">
            {enthusiastSkills.map(skill => {
              const catColor = categoryMeta.find(c => c.id === skill.category)?.color
              return <SkillChip key={skill.name} skill={skill} compact={compact} catColor={catColor} />
            })}
          </div>
        </div>
      )}

    </div>
  )
}
