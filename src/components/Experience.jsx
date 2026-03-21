import React from 'react'

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Education & Experience
        </h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-6">
            Education
          </h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex hover:animate-pulse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-bfbwIuUu4x8h7z6StaaoT6WwbkYNnR2Fw&s"
              alt="Helwan University"
              className="w-56 object-cover flex-shrink-0"
            />
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  BSc. in Computer Science — University of Helwan
                </h4>
                <p className="text-zinc-500 text-sm mt-1">September 2021 – May 2025</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Majoring in Software Engineering, I gained practical experience through hands-on
                projects that strengthened my problem-solving skills and understanding of
                real-world software systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'OOPs', 'AI', 'OS', 'Networking', 'Databases'].map(tag => (
                  <span key={tag} className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-6">
            Professional Experience
          </h3>

          <div className="flex flex-col gap-6">

            {/* Teaching Assistant */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex hover:animate-pulse">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7aXoMa_Sy-r1dHdtbykShvsjUjlgjriwlQ&s"
                alt="Shorouk Academy"
                className="w-56 object-cover flex-shrink-0"
              />
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      Computer Science Teaching Assistant — Shorouk Academy
                    </h4>
                    <p className="text-zinc-500 text-sm mt-1">Feb. 2026 – Present · Onsite</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Helped provide computer science college students with the education and experience
                  they need in various software related fields such as Artificial Intelligence,
                  Computer Programming and Web Development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Web Development', 'Computer Programming', 'Teaching'].map(tag => (
                    <span key={tag} className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Engaz Center */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex hover:animate-pulse">
            <img
                src="https://engaz-center.netlify.app/assets/about-B4YZgka5.jpg"
                alt="Engaz Center"
                className="w-56 object-cover flex-shrink-0"
            />
            <div className="p-6 flex flex-col gap-3">
                <div>
                <h4 className="text-white font-semibold text-lg">
                    Frontend Developer — Engaz Center
                </h4>
                <p className="text-zinc-500 text-sm mt-1">Dec. 2025 – Mar. 2026 · Remote / Freelance</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                Developed and hosted a website for Engaz Treatment Center using React.js,
                Tailwind CSS, JavaScript and EmailJS.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                Delivered a professional design with features including direct email contact
                through a website form, language translations, direct WhatsApp chat access,
                and smooth animations.
                </p>
                <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'JavaScript', 'EmailJS', 'Freelance'].map(tag => (
                    <span key={tag} className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                    {tag}
                    </span>
                ))}
                </div>
                <div className="mt-2">
                
                <a    href="https://engaz-center.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-zinc-700 hover:border-purple-400 text-zinc-400 hover:text-purple-400 text-xs px-4 py-2 rounded-lg transition-colors"
                >
                    Live Site
                </a>
                </div>
            </div>
            </div>

            {/* Banque du Caire */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex hover:animate-pulse">
              <img
                src="https://images.dailynewsegypt.com/2024/04/WhatsApp_Image_2024-03-31_at_3.10.56_PM.jpeg"
                alt="Banque du Caire"
                className="w-56 object-cover flex-shrink-0"
              />
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Information Technology Engineer — Banque du Caire
                  </h4>
                  <p className="text-zinc-500 text-sm mt-1">August 2024 – September 2024 · Internship</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Completed daily technical training sessions led by the bank's IT department,
                  gaining hands-on exposure to Robotic Process Automation (RPA), Cybersecurity
                  fundamentals, Data Analytics, Database Design/Management and more.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Worked collaboratively in a cross-functional team to research customer experience
                  gaps, brainstorm solutions, and create a functional prototype for a new customer
                  service feature.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['RPA', 'Cloud Computing', 'Database Management', 'Cybersecurity'].map(tag => (
                    <span key={tag} className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience