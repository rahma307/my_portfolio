import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiExternalLink } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-400 font-medium mb-4 text-lg">
                Hi, I'm Rahma Mostafa
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Frontend &{' '}
              <span className="text-gradient">Full Stack</span>
              <br />
              Web Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-dark-muted text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Computer Engineering student passionate about building responsive,
              user-focused web applications with modern frontend and backend
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary-600/20"
              >
                View My Projects
                <HiArrowDown size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border hover:border-primary-500/50 text-white font-medium rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/rahma-mostafa-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark-muted hover:text-primary-400 transition-colors text-sm"
              >
                <FaLinkedin size={18} />
                LinkedIn
                <HiExternalLink size={14} />
              </a>
              <span className="text-dark-border">|</span>
              <a
                href="https://github.com/rahma307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark-muted hover:text-primary-400 transition-colors text-sm"
              >
                <FaGithub size={18} />
                GitHub
                <HiExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 border border-primary-500/20 p-8 flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {['React', 'JS', 'PHP', '.NET', 'C#', 'SQL', 'HTML', 'Tailwind', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-dark-bg/60 border border-dark-border/50 rounded-md text-primary-300 text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-6" />
                <div className="flex items-center gap-3 text-sm text-dark-muted">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for opportunities
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary-500/20 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary-500/10 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex flex-col items-center gap-2 text-dark-muted hover:text-primary-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
