/** @import { ProjectItem } from '../../types/projects.js' */
import { useState, useMemo } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './ProjectList.css'

/**
 * Renders a filterable grid of project cards.
 *
 * @param {{ projects: ProjectItem[] }} props
 */
export default function ProjectList({ projects }) {
  const [activeFilter, setActiveFilter] = useState(null)

  const allTechs = useMemo(() => {
    const techSet = new Set()
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)))
    return [...techSet].sort()
  }, [projects])

  const filtered = activeFilter
    ? projects.filter((p) => p.technologies.includes(activeFilter))
    : projects

  return (
    <div className="project-list">
      {allTechs.length > 0 && (
        <div
          className="project-list__filters"
          role="group"
          aria-label="Filter by technology"
        >
          <button
            className={`project-list__filter-btn${!activeFilter ? ' project-list__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`project-list__filter-btn${activeFilter === tech ? ' project-list__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter((prev) => (prev === tech ? null : tech))}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      <div className="project-list__grid" role="list">
        {filtered.map((project, index) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
