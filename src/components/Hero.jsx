import { Link } from 'react-router-dom'
import imageGsk from '../assets/gkab-new.webp'

export default function Hero() {
  return (
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
  )
}
