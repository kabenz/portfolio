/** @import { ProjectItem } from '../../types/projects.js' */
import ProjectCard from './ProjectCard.jsx'
import './ProjectList.css'

/**
 * Renders a grid of project cards.
 *
 * @param {{ projects: ProjectItem[] }} props
 */
export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      <div className="project-list__grid" role="list">
        {projects.map((project, index) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
