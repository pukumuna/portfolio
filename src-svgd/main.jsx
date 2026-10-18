
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
/** HashRouter à la place de BrowseRouter : passage GitHub Pages */
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <App />
    </Router>
  </StrictMode>
)
