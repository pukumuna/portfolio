import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <Link className="project-card-detail" to={`/projets/${project.slug}`}
            aria-label={`Voir les détails du projet ${project.title}`}>
        <div className="project-visual">
          <img src={project.image} alt={`Capture d'écran du projet ${project.title}`}
               loading="lazy" width="800" height="450" />
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <div className="tags">
            {project.stack.slice(0, 4).map(technology => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <span className="card-link">Détails du projet →</span>
        </div>
      </Link>
      {project.github && (
        <div className="project-actions">
          <a className="card-link" href={project.github}
             target="_blank" rel="noopener noreferrer"
             aria-label={`Voir le code GitHub du projet ${project.title}`}>
            Voir le projet sur GitHub ↗
          </a>
        </div>
      )}
    </article>
  )
}
