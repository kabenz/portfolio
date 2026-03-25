import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "AT Data Hub",
    description:
      "Portal that fetches data from AT Portal for accountants and tax professionals.",
    longDesc:
      "Built with React and Go. It makes uses of Playwright for backend data scraping and Postgres for storage. The frontend features a clean UI with Tailwind CSS, showcasing data insights and automated syncronization with AT Portal. Designed for scalability and ease of use by accounting professionals.",
    tags: ["React", "Go", "Postgres", "Playwright", "Tailwind CSS"],
    category: "Full Stack Development",
    live: null,
    gradient: "linear-gradient(135deg, #6c63ff 0%, #a78bfa 100%)",
    icon: "💼",
    featured: true,
  },
  {
    id: 2,
    title: "My Own Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience.",
    longDesc:
      "Built with React and Vite. Features interactive project cards, experience timeline, and responsive design. Optimized for performance and accessibility.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    category: "Web Development",
    live: null,
    gradient: "linear-gradient(135deg, #6c63ff 0%, #a78bfa 100%)",
    icon: "💼",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card fade-in ${project.featured ? "project-card--featured" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`project-card__inner ${flipped ? "project-card__inner--flipped" : ""}`}
      >
        <div className="project-card__front">
          <div
            className="project-card__gradient"
            style={{ background: project.gradient }}
          />
          <div className="project-card__icon">{project.icon}</div>
          <div className="project-card__category">{project.category}</div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__back">
          <div
            className="project-card__gradient"
            style={{ background: project.gradient }}
          />
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__long-desc">{project.longDesc}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-card__links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--github"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--live"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="16"
                  height="16"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      {project.featured && (
        <div className="project-card__featured-badge">Featured</div>
      )}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Cloud infrastructure and DevOps platforms I&apos;ve designed and
            operated — hover each card for details
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects__footer fade-in">
          <p className="projects__footer-text">Want to see more of my work?</p>
          <a
            href="https://github.com/kabenz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
