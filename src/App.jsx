import { useEffect, useState } from 'react'

import { Routes, Route, Link, 
        NavLink, useParams, useLocation } from 'react-router-dom'

import { projects } from './data.js'

import ContactForm from './ContactForm.jsx'

import logo from './assets/logo-gsk.png'

import imageGsk from './assets/image-gsk.jpeg'

// ==============================================
//ScrollToTop : Permettre de revenir en Haut de 
// Page d'Accueil sur clic sur Logo (Link to='/')
// =============================================/

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// ==============================================
// LAYOUT
// Header + Footer communs aux différentes pages
// =============================================/

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">

        <div className="container nav-wrap">

          <Link className="brand" to="/" aria-label="Accueil du portfolio" >
            <img src={logo} alt="" />
            <span> Georges Kabuku </span>
          </Link>

            <button type="button" className="menu-toggle"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={menuOpen}
                aria-controls="navigation-principale"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            <nav id="navigation-principale"
                 className={menuOpen ? 'nav-open' : ''}
                 aria-label="Navigation principale"
                 onClick= { (event) => {if (event.target.closest('a')) setMenuOpen(false)} }
            >
                <NavLink to="/" end> Accueil </NavLink>
                <Link to="/#apropos"> À propos </Link>
                <Link to="/#competences"> Compétences </Link>
                <Link to="/#projets"> Projets </Link>
                <Link to="/#parcours"> Parcours </Link>
                <Link to="/#contact"> Contact </Link>
            </nav>

        </div>

      </header>


      {children}


      <footer>

        <div className="container footer-wrap">
          <img src={logo} alt="" />
          <p> © 2026 Georges Kabuku — Portfolio développeur Full-Stack </p>
        </div>

      </footer>

    </>
  )
}

// ==========================================
// PAGE D'ACCUEIL
// ==========================================

function Home() {

  return (

    <Layout>

      <main id="contenu">

        {/* ==========================
            HERO
        ========================== */}

        <section className="hero">

          <div className="container hero-content">

            <div className="hero-text">
              <p className="eyebrow"> PORTFOLIO • DÉVELOPPEMENT WEB </p>

              <h1> Georges Kabuku <br />
                <span> Développeur Full-Stack </span>
              </h1>

              <p className="lead">
                Je conçois et réalise des applications web modernes,
                accessibles et responsives,
                du front-end React au back-end Node.js.
              </p>

              <div className="actions">
                <Link className="btn primary" to="/#projets">  Voir mes projets </Link>
                <Link className="btn secondary" to="/#contact">  Me contacter  </Link>
              </div>

            </div>

             <div className="hero-photo">
                <img
                    src={imageGsk}
                    alt="Portrait du développeur"
                    className="profile-photo"
                />
             </div>
            </div>
        </section>

        {/* ==========================
            À PROPOS
        ========================== */}

        <section id="apropos" className="section"         >

          <div className="container narrow">

            <p className="eyebrow"> À PROPOS </p>

            <h2> Des applications Mainframe au développement web moderne </h2>

            <p>
              Ancien analyste-réalisateur Mainframe, j’ai suivi
              la formation Développeur Web
              d’OpenClassrooms afin de consolider
              mes compétences en conception et
              réalisation de projets web.
            </p>

            <p>
              Mes projets m’ont permis de progresser
              notamment avec React, Node.js,
              Express et MongoDB.
            </p>

          </div>

        </section>

        {/* ==========================
            COMPÉTENCES
        ========================== */}

        <section id="competences" className="section alt" >

          <div className="container">
            <p className="eyebrow"> COMPÉTENCES </p>

            <h2> Ma boîte à outils </h2>

            <div className="skills-grid">

              <article>
                <h3> Front-end </h3>

                <p>
                  HTML5 · CSS3 · JavaScript · React ·
                  React Router · Sass · Vite
                </p>
              </article>


              <article>
                <h3> Back-end </h3>

                <p>
                  Node.js · Express · API REST ·
                  MongoDB · Mongoose
                </p>
              </article>


              <article>
                <h3> Qualité </h3>

                <p>
                  Responsive · Accessibilité · SEO ·
                  Performance · Git/GitHub
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* ==========================
            PROJETS
        ========================== */}

        <section id="projets" className="section" >

          <div className="container">
            <p className="eyebrow"> PROJETS </p>

            <h2> Une sélection de réalisations </h2>

            <p className="section-intro">
              Cliquez sur une carte pour découvrir
              le contexte, les objectifs,
              la stack et les compétences développées.
            </p>


            <div className="project-grid">

              {projects.map((project, index) => (

                <Link className="project-card" to={`/projets/${project.slug}`}
                    key={project.slug} aria-label={ `Voir le détail du projet ${project.title}` } 
                >
                  <div className="project-visual">
                    <span> 0{index + 1} </span>

                    <strong> {project.title} </strong>
                  </div>

                  <div className="project-body">
                    <h3> {project.title} </h3>

                    <p> {project.subtitle} </p>

                    <div className="tags">

                      {project.stack .slice(0, 4) .map((technology) => (
                          <span key={technology}> {technology} </span>
                        ))
                      }

                    </div>

                    <span className="card-link"> Voir le projet → </span>
                  </div>

                </Link>

              ))} {/** fin de projects.map */}
            </div>

          </div> {/** fin de div container */}

        </section>

        {/* ==========================
            PARCOURS
        ========================== */}

        <section id="parcours" className="section alt" >

          <div className="container">

            <p className="eyebrow"> PARCOURS </p>

            <h2> Formation & expérience </h2>

            <div className="timeline">

              <div> 
                <strong> Développement Web </strong>

                <p>
                  Formation OpenClassrooms et
                  réalisation de projets
                  professionnalisants.
                </p>
              </div>


              <div>
                <strong> Analyse-réalisateur Mainframe </strong>

                <p>
                  Expérience antérieure en analyse et réalisation des applications
                  en environnement Mainframe.
                </p>
              </div>

            </div>

          </div>

        </section>



        {/* ==========================
            CONTACT
        ========================== */}

        {/* ==========================
            CONTACT
        ========================== */}

        <section id="contact" className="section contact">

            <div className="container narrow">

                <p className="eyebrow">CONTACT</p>

                <h2>Échangeons</h2>

                <p>
                    Vous souhaitez me contacter au sujet d'un projet
                    ou d'une collaboration ? Remplissez le formulaire
                    ci-dessous.
                </p>

                <ContactForm />

            </div>

        </section>
      </main>

    </Layout>

  )
}

// ==========================================
// PAGE DE DÉTAIL D'UN PROJET
// ==========================================

function ProjectDetail() {

  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  // Projet inexistant

  if (!project) {

    return (
      <Layout>
        <main id="contenu" className="section" >
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
         
      <main id="contenu">
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

            </div>  {/*-- fin de detail-grid -- */} 

          </div>  {/* fin de container narrow -- */}

        </article>
      </main>

    </Layout>

  )
}


// ==========================================
// ROUTES DE L'APPLICATION
// ==========================================

export default function App() {

  return (
    <>
        <ScrollToTop /> 
        { /* exécute  la logique de défilement après une navigation : 
        revenir en haut de la page ou rejoindre une section comme #projets */ }

        <Routes>

            <Route path="/" element={<Home />}  />
            <Route path="/projets/:slug" element={<ProjectDetail />} />

        </Routes>
        { /* <Routes> et <Route> permettent de sélectionner le composant à afficher en fonction de l'URL. */}
        { /* URL : / ---  Composant affiché : Home | URL : /#projets ---  Composant : Home, à la section Projets */}
        { /* URL : /projets/kasa ---  Composant : ProjectDetail | URL : /projets/sophie-bluel ---  Composant : ProjectDetail */}
    </>
  )
}