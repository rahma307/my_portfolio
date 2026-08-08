import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-dark-border/50 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-muted text-sm">
            © {year} Rahma Mostafa. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/rahma-mostafa-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/rahma307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
