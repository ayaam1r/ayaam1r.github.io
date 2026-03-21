import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#hero" className="text-white font-bold text-xl tracking-tight">
          Aya Amir
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-8 text-sm text-zinc-400">
          <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a
            href="/Aya%20Amir%20CV%20-%20Junior%20Software%20Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
          Download CV
        </a>

      </div>
    </nav>
  )
}

export default Navbar