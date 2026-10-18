import { projects } from '../data.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projets" className="section">
  <div className="container">
    <p className="eyebrow">PROJETS</p>
    <h2>Une sélection de réalisations</h2>
    <p className="section-intro">
      Cliquez sur « Détails » pour découvrir le contexte, les objectifs,
      la stack et les compétences développées.
    </p>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  </div>
</section>
  )
}
