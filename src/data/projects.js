/** @import { ProjectItem } from '../types/projects.js' */

/** @type {ProjectItem[]} */

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

export default projects;
