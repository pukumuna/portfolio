import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-120.webp'

export default function Layout({ children }) {
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

