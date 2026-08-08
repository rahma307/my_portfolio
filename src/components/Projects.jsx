import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiExternalLink, HiChevronDown, HiChevronUp, HiPlay } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const webProjects = [
  {
    title: 'Unix Smart Campus',
    description:
      'Smart Campus platform developed as a team project for a GDG competition. The system aims to make university life more organized and student-friendly through features such as schedules, exams, campus navigation, room availability, lost & found, material delivery tracking, graduation project management, and an admin panel.',
    tags: ['React', '.NET', 'C#', 'JWT Authentication', 'SQL Server'],
    teamProject: true,
    links: [
      { label: 'Presentation', url: 'https://lnkd.in/ddWuT3ea' },
      { label: 'Live Platform', url: 'https://lnkd.in/dkZ-3nUk' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/posts/nada-ashraf-386223287_unixproject-smartcampus-gdgcompetition-ugcPost-7429922609846337536-eskl', icon: 'linkedin' },
    ],
    featured: true,
  },
  {
    title: 'Library',
    description:
      'A responsive web application for browsing, buying, and selling books, developed as a graduation project during the DEPI React training program.',
    tags: ['React.js', 'Tailwind CSS', 'Flowbite', 'Framer Motion', 'React Icons'],
    teamProject: true,
    depiProject: true,
    links: [
      { label: 'Live Project', url: 'https://lnkd.in/dk6GWMZh' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/posts/yousef-saeed30_depi-react-graduationproject-ugcPost-7404604872060334080-DJbB', icon: 'linkedin' },
    ],
    featured: true,
  },
  {
    title: 'E-Commerce Candle Store',
    description:
      'Responsive e-commerce web application for browsing candle products with authentication, role-based access, shopping functionality, and an admin dashboard for product management.',
    features: ['Product browsing', 'Shopping experience', 'User registration and login', 'User/Admin roles', 'Admin dashboard', 'Product management', 'Responsive design'],
    tags: ['HTML', 'JavaScript', 'Tailwind CSS', 'JSON Server'],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/posts/rahma-mostafa-ahmed_webdevelopment-javascript-tailwindcss-activity-7374544927214702592-soiy', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/rahma307', icon: 'github' },
    ],
    featured: true,
  },
  {
    title: 'Tailwind CSS / Responsive Design Project',
    description:
      'Frontend practice project focusing on modern responsive UI design using Tailwind CSS utility-first approach.',
    tags: ['Tailwind CSS', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Utility-first styling'],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/posts/rahma-mostafa-ahmed_tailwindcss-frontenddevelopment-webdevelopment-activity-7363860377396252672-Ngyw', icon: 'linkedin' },
    ],
    featured: false,
  },
]

const otherProjects = [
  { title: 'Traffic Light using PIC16F877A', category: 'Embedded Systems', video: 'traffic.mp4' },
  { title: 'Stereo Audio Amplifier', category: 'Hardware', video: 'stereo_update.mp4' },
  { title: 'Calculator using ATmega32', category: 'Embedded Systems', video: 'calculator.mp4' },
  { title: 'Cisco Packet Tracer Network Design', category: 'Networking', video: 'cisco update.mp4' },
  {
  title: 'Arduino-based Color Sorting System',
  category: 'Embedded Systems',
  linkedin: 'https://lnkd.in/p/eFQaxzGS'
},
  { title: 'Obstacle Avoiding Robot with Metal Detector', category: 'Robotics', video: 'obstacle.mp4' },
]

export default function Projects() {
  const [ref, isVisible] = useScrollReveal()
  const [showOther, setShowOther] = useState(false)

  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-4" />
          <p className="text-dark-muted mb-12 max-w-2xl">
            A collection of web development projects I have worked on, ranging from full-stack applications to responsive frontend interfaces.
          </p>

          {/* Web Development Projects */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-primary-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              Web Development Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass rounded-2xl overflow-hidden card-hover flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-500/10 to-primary-700/5 border-b border-dark-border/50 flex items-center justify-center">
                    <div className="text-center px-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs bg-dark-bg/60 text-primary-300 rounded border border-primary-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      {project.teamProject && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 rounded border border-amber-500/20">
                          Team Project
                        </span>
                      )}
                      {project.depiProject && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                          DEPI Graduation Project
                        </span>
                      )}
                    </div>

                    <p className="text-dark-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {project.features && (
                      <ul className="space-y-1 mb-4">
                        {project.features.map((f) => (
                          <li key={f} className="text-xs text-dark-muted flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-dark-bg/50 text-dark-muted rounded border border-dark-border/30">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          {link.icon === 'linkedin' && <FaLinkedin size={14} />}
                          {link.icon === 'github' && <FaGithub size={14} />}
                          {!link.icon && <HiExternalLink size={14} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Engineering Projects */}
          <div className="border-t border-dark-border/50 pt-12">
            <button
              onClick={() => setShowOther(!showOther)}
              className="flex items-center gap-3 w-full text-left group"
            >
              <span className="w-2 h-2 rounded-full bg-dark-muted group-hover:bg-primary-500 transition-colors" />
              <h3 className="text-lg font-semibold text-dark-muted group-hover:text-white transition-colors flex-1">
                Other Engineering Projects
              </h3>
              <span className="text-xs text-dark-muted bg-dark-card px-3 py-1 rounded-full border border-dark-border/50">
                {otherProjects.length} projects
              </span>
              {showOther ? (
                <HiChevronUp size={20} className="text-dark-muted group-hover:text-white transition-colors" />
              ) : (
                <HiChevronDown size={20} className="text-dark-muted group-hover:text-white transition-colors" />
              )}
            </button>
            <p className="text-dark-muted/70 text-sm mt-2 ml-5">
              Embedded systems, hardware, and networking projects from my engineering studies.
            </p>

            <AnimatePresence>
              {showOther && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ml-5">
                    {otherProjects.map((project) => (
                      <div
                        key={project.title}
                        className="glass rounded-xl p-5 border border-dark-border/30 hover:border-primary-500/20 transition-colors"
                      >
                        <span className="text-xs font-medium text-primary-400 mb-2 block">
                          {project.category}
                        </span>
                        <h4 className="text-white font-medium text-sm mb-3">{project.title}</h4>
                        {project.video && (
  <a
    href={`/my_portfolio/${project.video}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
  >
    <HiPlay size={14} />
    Watch Demo
  </a>
)}

{project.linkedin && (
  <a
    href={project.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
  >
    <FaLinkedin size={14} />
    LinkedIn
  </a>
)}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
