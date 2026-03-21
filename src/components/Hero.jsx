import React from 'react'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Greeting */}
        <p className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white animate-pulse">
          Aya Amir
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-zinc-400">
          Web Developer • Full-Stack • Always Building
        </p>

        {/* Bio */}
        <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
          Software Developer specializing in Full Stack Development with expertise in 
          React.js, PHP Laravel, Node.js and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors font-medium">
        
            View Projects
          </a>
          
           <a href="#contact"
            className="border border-zinc-700 hover:border-purple-400 text-zinc-400 hover:text-purple-400 px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-2 text-sm text-zinc-500">
          
           <a href="https://github.com/ayaam1r"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          
           <a href="https://linkedin.com/in/aya-amir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aayaamir35@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero