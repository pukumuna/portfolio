import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'

function Home() {
  return (
    <Layout>
      <main id="contenu" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </Layout>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
