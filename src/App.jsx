import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App