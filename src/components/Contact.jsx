import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs
      .send(
        'service_5unwhhq',   
        'template_65tod0s',  
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '59YhimOjkjRZgifoF'    
      )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-zinc-500 text-center mb-12">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>

        {/* Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-zinc-800 border border-zinc-700 focus:border-purple-500 focus:outline-none text-white text-sm rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-zinc-800 border border-zinc-700 focus:border-purple-500 focus:outline-none text-white text-sm rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={5}
              className="bg-zinc-800 border border-zinc-700 focus:border-purple-500 focus:outline-none text-white text-sm rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-600 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Feedback */}
          {status === 'success' && (
            <p className="text-green-400 text-sm text-center">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

        </div>

        {/* Alternate contact */}
        <div className="flex items-center justify-center gap-6 mt-10 text-sm text-zinc-500">
          <a href="mailto:aayaamir35@gmail.com" className="hover:text-purple-400 transition-colors">
            aayaamir35@gmail.com
          </a>
          <a href="https://github.com/ayaam1r" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/aya-amir" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact