import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-10" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
           <div className="space-y-6 text-dark-muted leading-relaxed text-lg">
  <p>
    I'm a Siftware Engineering student at Benha University and a Full-Stack 
    Developer who loves bridging the gap between clean design and robust engineering. 
    I specialize in building scalable web applications that solve real-world problems.
  </p>
  <p>
    Working across the entire stack with <strong>React</strong> and <strong>.NET</strong>, 
    I handle everything from crafting intuitive, responsive user interfaces to architecting 
    the backend logic and APIs that power them.
  </p>
  <p>
    I'm constantly pushing my boundaries through hands-on projects, exploring new 
    technologies, and refining my craft to build fast, reliable digital experiences.
  </p>
</div>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-semibold mb-4 text-lg">Currently focused on</h3>
              <div className="flex flex-wrap gap-3">
               {['React', 'Modern Web Development ', 'Asp.NET MVC','C#', 'Full Stack Development'].map((item) => ( 
                  <span
                    key={item}
                    className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
