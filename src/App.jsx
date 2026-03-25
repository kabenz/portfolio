import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CV from './components/CV/CV'
import SkillsPage from './components/SkillsPage/SkillsPage'
import './App.css'

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') // e.g. '/portfolio'
  const raw = window.location.pathname
  const path = raw.startsWith(base) ? raw.slice(base.length) || '/' : raw

  if (path === '/cv') {
    return <CV />
  }

  if (path === '/skills') {
    return (
      <>
        <Header />
        <main>
          <SkillsPage />
        </main>
        <Footer />
      </>
    )
  }

  if (path === '/experience') {
    return (
      <>
        <Header />
        <main>
          <Experience />
        </main>
        <Footer />
      </>
    )
  }

  if (path === '/education') {
    return (
      <>
        <Header />
        <main>
          <Education />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
