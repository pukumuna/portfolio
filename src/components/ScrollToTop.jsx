import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() { 
  
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

