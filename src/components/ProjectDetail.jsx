import { Link, useParams } from 'react-router-dom'
import { projects } from '../data.js'
import Layout from './Layout.jsx'

export default function ProjectDetail() {

  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  // Projet inexistant

  if (!project) {

    return (
      <Layout>
        <main id="contenu" className="section"  tabIndex={-1} >
          <div className="container">
            <h1> Projet introuvable </h1>
            <Link to="/"> Retour à l’accueil </Link>
          </div>
        </main>
      </Layout>
    )
  }

  // Projet trouvé
  return (

    <Layout>
         
      <main id="contenu" tabIndex={-1} >
        <article className="project-detail">
          <div className="container narrow">

            <Link className="back" to="/#projets" > ← Retour aux projets </Link>

            <p className="eyebrow"> ÉTUDE DE CAS </p>
            <h1> {project.title} </h1>
            <p className="lead"> {project.subtitle} </p>
            
            <div className="tags detail-tags">
              {project.stack.map((technology) => (
                <span key={technology}> {technology} </span>
              ))}
            </div>

            <div className="detail-grid">
              <section>
                <h2> Contexte </h2>
                <p> {project.context} </p>
              </section>

              <section>
                <h2> Objectifs </h2>
                <p> {project.objectives} </p>
              </section>

              <section>
                <h2> Compétences développées </h2>
                <p> {project.skills} </p>
              </section>

              <section>
                <h2> Résultats et impact </h2>
                <p> {project.result} </p>
              </section>

              <section>
                <h2> Perspectives d’amélioration </h2>
                <p> {project.improvement} </p>
              </section>

            </div>   

          </div>   

        </article>
      </main>

    </Layout>

  )
}


