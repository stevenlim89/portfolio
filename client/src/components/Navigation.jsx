import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        Steven<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
