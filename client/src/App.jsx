import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import portfolio from './data/portfolio'
import './App.css'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero data={portfolio} />
        <Experience data={portfolio} />
        <Skills data={portfolio} />
        <Education data={portfolio} />
        <Contact data={portfolio} />
      </main>
    </>
  )
}
