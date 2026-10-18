import { useEffect, useState } from 'react'

import { Routes, Route, Link, 
        NavLink, useParams, useLocation } from 'react-router-dom'

import { projects } from './data.js'

import ContactForm from './components/ContactForm.jsx'

import logo from './assets/logo-120.webp'

import imageGsk from './assets/gkab-new.webp'

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

// ==========================================================
// LAYOUT : // Header + Footer communs aux différentes pages
// =========================================================/

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

            <nav id="navigation-principale" className={menuOpen ? 'nav-open' : ''}
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

      <main id="contenu" tabIndex={-1} >

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
                accessibles et responsives, du front-end React au back-end Node.js.
              </p>

              <div className="actions">
                <Link className="btn primary" to="/#projets">  Voir mes projets </Link>
                <Link className="btn secondary" to="/#contact">  Me contacter  </Link>
              </div>

            </div>

             <div className="hero-photo">
                <img src={imageGsk} alt="Portrait du développeur" 
                 className="profile-photo" width="278" height="371"
                 loading="eager" fetchPriority="high" />
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
             Avec un diplôme de gradué en Mathématique et Physiques en 1978, suivi de 3 ans <br/>
             d’enseignement en qualité de professeur de mathématiques au collège et lycée <br/>
             je me suis converti en informatique par un stage d’Analyste programmeur mainframe <br/>
             à l’ESIP Paris en 1986. <br/><br/>
             Après 2 ans d’expérience à la STIME, filiale informatique du groupe Intermarché, <br/>
             je me suis fait embaucher à la SLIGOS en 1988 qui est devenu ensuite ATOS. <br/>
             J’y suis resté 10 ans et j’ai principalement travaillé sur les projets de la monétique <br/>
             comprenant les 4 moyens de paiement : carte bancaire, virement, prélèvement et chèque ; <br/>
             le système d’information sur la carte bancaire contre la fraude (SICB) ;  <br/>
             le système B2B de réception de différentes entreprises Clientes de leurs flux de paiements, <br/>
             de leurs mises en forme pour télétransmission au système de télé-compensation interbancaire <br/>
             et de l'information des Clients sur le retour de la télé-compensation. <br/>
             En 1998 je suis partie travaillé pour les moyennes SSII telles que Algoriel, MCI, AXEL, <br/>
             NEOSOFT, GEOS jusqu’en 2015 où j’ai travaillé comme indépendant jusqu’en 2023. <br/><br/>
             Dans ma vie, je n’ai jamais cessé de me remettre en question et d’apprendre, en 97<br/>
             alors que j’étais à ATOS, j’ai passé et obtenu le BTS en informatique de gestion <br/>
             en tant qu’autodidacte. En 1999 je me suis inscrit à l’IUP–Paris Dauphine, obtenu de <br/>
             Algoriel un congé formation de 1 an que j’ai mis à profit pour suivre les cours <br/>
             en présentiel et décrocher à l’issue de l’année académique 1999-2000 la maîtrise <br/>
             en génie mathématiques et informatiques. <br/><br/>
             Etant donné mon expérience d’Analyste mainframe senior, je souhaite apporter mes services <br/>
             à l'issue de ma formation de Développeur Web pour le développement d’applications impliquant <br/>
             les nouvelles technologies notamment React, Node.js, Express et MongoDB; en consolider et élargir <br/>
             mes connaissances, en acquerir plus d'expérience et compétences et les mettre à profit en <br/>
             m’installant sur mon compte. <br/>
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

              ))}  
            </div>

          </div>  

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
                  Formation OpenClassrooms et réalisation de projets professionnalisants (2025-2026).
                </p>
              </div>


              <div>
                <strong> Analyse-réalisateur Mainframe </strong>            
                
                <p>
                  Ingénieur Analyste Indépendant : ManPower (2022-2023), Fnac-Darty (2018-2022),  <br/>
                  CERP à Rouen (2015-2018)
                </p>
                  
                <p>  
                  Ingénieur Analyste dans SSII de 1998 à 2015 : Algoriel, MCI, <br/>
                  AXEL, NEOSOFT, GEOS.  
                </p>
                <p>
                  Analyse Réalisateur : SLIGOS puis ATOS de 1988 à 1998.  <br/>
                  Système d'information de la carte bancaire pour prévention de fraude.  <br/>
                  Refonte du système de rélèvés cartes bancaires.  <br/>
                  Mise en place de la plateforme de Gestion de Paiements (carte, virement,  <br/>
                  prélèvement, chèques) du Groupe Renault.  
                </p>
                <p>
                  Analyse Programmeur : STIME - InterMarché de 1986 à 1988.  <br/>
                  Gestion des commandes de ITC : Ventes de produits du groupe Intermarché  <br/>
                  aux collectivités telles que restaurants, associations, Ehpad, hôptitaux.  
                </p>
              </div>

              <div> 
                <strong> Fomation </strong>

                <p>
                  Maîtrise en Génie Mathématiques en Informatiques (IUP DAUPHINE) : 2000 <br/>
                  BTS en informatique de gestion (Académie de Versailles): 1997 <br/>
                  Diplôme d'Analyste Programmeur sur Mainframe (ESIP PARIS): 1986 <br/>
                  Graduat en Mathématiques et Physiques (Université Congo): 1978 <br/>
                  Diplôme de fin d'études sécondaires (Sécondaire Congo) : 1975 <br/>
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ==========================
            CONTACT
        ========================== */}

        <section id="contact" className="section contact">

            <div className="container narrow">

                <p className="eyebrow">CONTACT</p>

                <div className="echangeons" >
                    <h2>Échangeons</h2>

                    <p>
                        Vous souhaitez me contacter au sujet d'un projet
                        ou d'une collaboration ? Remplissez le formulaire
                        ci-dessous.
                    </p>
                </div>

                < ContactForm />

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


// ==========================================
// ROUTES DE L'APPLICATION
// ==========================================

export default function App() {

  return (
    <>
        <ScrollToTop /> 
         

        <Routes>

            <Route path="/" element={<Home />}  />
            <Route path="/projets/:slug" element={<ProjectDetail />} />

        </Routes>
         
    </>
  )
}