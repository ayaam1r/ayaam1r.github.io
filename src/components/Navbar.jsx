import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <a href="#hero" className="text-white font-bold text-xl tracking-tight">
          Aya Amir
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>

        {/* Desktop CTA Button */}
        
        <a  href="/Aya%20Amir%20CV%20-%20Junior%20Software%20Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Download CV
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-6 flex flex-col gap-5">
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">Experience</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
          
         <a   href="/Aya%20Amir%20CV%20-%20Junior%20Software%20Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-lg transition-colors text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar