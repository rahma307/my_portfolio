import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Bootstrap',
     
    ],
    priority: true,
  },
  {
    title: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      '.NET',
      'C#',
      'ASP.NET MVC',
      'MySQL'
    ],
    priority: true,
  },
  {
    title: 'Programming',
    skills: [
      'C',
      'C++',
      'Java',
      'Python'
    ],
    priority: false,
  },
  {
    title: 'Embedded Systems',
    skills: [
      'AVR / ATmega32',
      'MIPS Assembly',
      'Proteus',
      'PIC16F877A'
    ],
    priority: false,
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="skills" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-4" />
          <p className="text-dark-muted mb-12 max-w-2xl">
            Technologies and tools I work with, with a primary focus on modern web development.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass rounded-2xl p-6 card-hover ${category.priority ? 'ring-1 ring-primary-500/20' : ''}`}
              >
                <h3 className={`text-lg font-semibold mb-4 ${category.priority ? 'text-primary-400' : 'text-white'}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-md border font-medium ${
                        category.priority
                          ? 'bg-primary-500/10 border-primary-500/20 text-primary-300'
                          : 'bg-dark-bg/50 border-dark-border/50 text-dark-muted'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
