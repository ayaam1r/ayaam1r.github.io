import React from 'react'

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'C'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'Angular', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Laravel (PHP)', 'ASP.NET Core', 'RESTful APIs', 'MVC Architecture'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Docker', 'GitHub', 'Git', 'Insomnia', 'Postman', 'Figma', 'VS Code'],
  },
  {
    title: 'Core Concepts',
    skills: ['OOP', 'Design Patterns', 'REST Architecture', 'Agile/Scrum'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-zinc-500 text-center mb-12">
          A comprehensive overview of my technical expertise and tools I work with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-white font-semibold text-sm tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-zinc-800 hover:bg-purple-600/20 hover:text-purple-400 border border-zinc-700 hover:border-purple-500/50 text-zinc-400 text-xs px-3 py-1.5 rounded-full transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills