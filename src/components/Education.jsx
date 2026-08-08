import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    school: 'Benha University',
    degree: 'B.Sc. in Computer Engineering',
    detail: 'Faculty of Engineering, Shubra',
    period: '2022 – 2027',
  },
]

const training = [
  {
    title: 'React Developer Trainee',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Jul 2025 – Dec 2025',
  },
  {
    title: 'Full Stack Web Development using PHP',
    org: 'National Telecommunication Institute (NTI)',
    period: 'Jun 29, 2025 – Jul 24, 2025',
    detail: '120 hours · Score: 92.5%',
  },
  {
    title: 'Embedded Systems Training',
    org: 'IMT',
    period: '',
  },
]

export default function Education() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="education" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & <span className="text-gradient">Training</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.school} className="glass rounded-2xl p-6 border-l-4 border-primary-500">
                    <h4 className="text-lg font-semibold text-white">{edu.school}</h4>
                    <p className="text-primary-400 font-medium mt-1">{edu.degree}</p>
                    <p className="text-dark-muted text-sm mt-1">{edu.detail}</p>
                    <p className="text-dark-muted text-sm mt-2 font-medium">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Training & Development</h3>
              <div className="relative space-y-6 pl-6 border-l border-dark-border">
                {training.map((train, idx) => (
                  <motion.div
                    key={train.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary-500 border-4 border-dark-card" />
                    <div className="glass rounded-xl p-5">
                      <h4 className="text-white font-medium">{train.title}</h4>
                      <p className="text-primary-400 text-sm mt-1">{train.org}</p>
                      {train.period && (
                        <p className="text-dark-muted text-sm mt-1">{train.period}</p>
                      )}
                      {train.detail && (
                        <p className="text-dark-muted text-sm mt-1">{train.detail}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
