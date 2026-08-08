import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiExternalLink } from 'react-icons/hi'

const certificates = [
  {
    title: 'Full Stack Web Development using PHP',
    org: 'National Telecommunication Institute (NTI)',
    date: 'July 2025',
    credential: 'Credential ID: 208174',
    score: 'Score: 92.5%',
    image: 'NTI_FullStack_Certificate.jpeg',
  },
  {
    title: 'React Developer / React Development',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: 'December 2025',
    image: 'Depi_certificate.png',
  },
  {
    title: 'Embedded Systems Certificate',
    org: 'IMT',
    date: '',
    image: 'IMT_certificate.png',
  },
]

export default function Certifications() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="certifications" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-48 bg-dark-card border-b border-dark-border/50 flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <img
                      src={`/my_portfolio/${cert.image}`}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center px-6">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-400">{cert.org[0]}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
                  <p className="text-primary-400 text-sm mb-2">{cert.org}</p>
                  {cert.date && <p className="text-dark-muted text-sm mb-1">{cert.date}</p>}
                  {cert.credential && <p className="text-dark-muted text-xs mb-1">{cert.credential}</p>}
                  {cert.score && <p className="text-dark-muted text-xs mb-3">{cert.score}</p>}

                  {cert.image && (
                    <a
                      href={`/my_portfolio/${cert.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors mt-2"
                    >
                      <HiExternalLink size={14} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
