/** @import { ProjectItem } from '../../types/projects.js' */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

/**
 * Displays a single project as a flat, print-friendly card.
 *
 * @param {{ project: ProjectItem, index: number }} props
 */
export default function ProjectCard({ project, index }) {
  return (
    <article
      className="proj-card fade-in"
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={project.name}
    >
      <div className="proj-card__header">
        <h3 className="proj-card__title">{project.name}</h3>

        <div className="proj-card__links">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card__link proj-card__link--github"
              aria-label={`${project.name} GitHub repository`}
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card__link proj-card__link--live"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <p className="proj-card__desc">{project.description}</p>

      {project.responsibilities && project.responsibilities.length > 0 && (
        <div className="proj-card__section">
          <p className="proj-card__section-label">Responsibilities</p>
          <ul className="proj-card__list">
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {project.outcomes && project.outcomes.length > 0 && (
        <div className="proj-card__section">
          <p className="proj-card__section-label">Outcomes</p>
          <ul className="proj-card__list">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="proj-card__tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="proj-card__tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
