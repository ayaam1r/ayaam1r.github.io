import React from 'react'

const projects = [
  {
    title: 'Engaz Treatment Center',
    subtitle: 'Freelance · Live Website',
    description:
      'Developed and hosted a full website for a real client — Engaz Treatment Center. Features include direct email contact, language translations, WhatsApp chat access, and smooth animations.',
    image: 'https://engaz-center.netlify.app/assets/about-B4YZgka5.jpg',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    live: 'https://engaz-center.netlify.app/',
    demo: null,
    code: null,
  },
  {
    title: 'Moonlit Tails Bookstore',
    subtitle: 'E-commerce',
    description:
      'A full-stack e-commerce system built to manage real bookstore operations including product listings, customer accounts, and order processing.',
    image: '/moonlit-tails.png',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'PHP'],
    live: null,
    demo: 'https://drive.google.com/file/d/1fkdhpPKwuHmdlaXODrnxQ8cbuV6A1s2M/view',
    code: null,
  },
  {
    title: 'Bookstore Management System',
    subtitle: 'E-commerce',
    description:
      'A full-stack e-commerce web application to manage books, quantity, and orders.',
    image: '/bookstore.png',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'PHP'],
    live: null,
    demo: 'https://drive.google.com/file/d/1vUyZMQCbhYNfGVj9_XXNpVue7R4co7aT/view',
    code: 'https://github.com/ayaam1r/ecommerce-project',
  },
  {
    title: 'BrickInvest',
    subtitle: 'Real Estate Web Application',
    description:
      'A full-stack platform for real estate listings, investment simulation, and property management.',
    image: '/brickinvest.png',
    tags: ['React.js', 'ASP.NET Core', 'SQL Server', 'Tailwind CSS', 'Python (AI)', 'SWIPE', 'Flask API'],
    live: null,
    demo: 'https://www.linkedin.com/posts/aya-amir_graduationproject-ai-softwareengineering-activity-7341147480807403520-afkr',
    code: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-zinc-500 text-center mb-12">
          A selection of projects I've built and shipped
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-zinc-700 transition-colors"
            >
              {/* Image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="w-full h-44 bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm">No preview available</span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <span className="text-purple-400 text-xs font-medium tracking-widest uppercase">
                    {project.subtitle}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-2">
                  {project.live && (
                    
                    <a  href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 hover:border-purple-400 text-zinc-400 hover:text-purple-400 text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      Live Site
                    </a>
                  )}
                  {project.demo && (
                    
                    <a  href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 hover:border-purple-400 text-zinc-400 hover:text-purple-400 text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      Demo
                    </a>
                  )}
                  {project.code && (
                    
                    <a  href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 hover:border-purple-400 text-zinc-400 hover:text-purple-400 text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects