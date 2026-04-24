import type { Project } from '../siteContent'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li>
      <a
        className="project-card"
        href={project.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="project-card__title">
          <img className="project-card__icon" src={project.icon} />
          {project.title}
          </span>
        <img className="project-card__img" src={project.img} />
        <span className="project-card__desc">{project.description}</span>
      </a>
    </li>
  )
}
