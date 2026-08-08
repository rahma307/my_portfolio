import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'

const contactLinks = [
  {
    name: 'Email',
    value: 'rahmamostafa292004@gmail.com',
    href: 'mailto:rahmamostafa292004@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/rahma-mostafa-ahmed',
    href: 'https://www.linkedin.com/in/rahma-mostafa-ahmed/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    value: 'github.com/rahma307',
    href: 'https://github.com/rahma307',
    icon: FaGithub,
  },
]

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="contact" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mb-8" />

          <p className="text-dark-muted text-lg mb-12 leading-relaxed">
            I'm always interested in learning, building meaningful projects, and
            connecting with people in the tech community.
          </p>

          <div className="space-y-4">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-primary-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <link.icon size={22} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-medium">{link.name}</p>
                  <p className="text-dark-muted text-sm">{link.value}</p>
                </div>
                <HiExternalLink size={18} className="text-dark-muted group-hover:text-primary-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
