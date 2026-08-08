import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150

    const bottomReached =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50

    const sections = navLinks.map((link) => link.href.slice(1))

    if (bottomReached) {
      setActiveSection('contact')
      return
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])

      if (el && el.offsetTop <= scrollPosition) {
        setActiveSection(sections[i])
        break
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

 const handleScroll = () => {
  const scrollPosition = window.scrollY + 150
  const bottomReached =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50

  const sections = navLinks.map((link) => link.href.slice(1))

  // If we reached the bottom of the page, Contact is active
  if (bottomReached) {
    setActiveSection('contact')
    return
  }

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])

    if (el && el.offsetTop <= scrollPosition) {
      setActiveSection(sections[i])
      break
    }
  }
}

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-dark-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-xl font-bold text-white tracking-tight hover:text-primary-400 transition-colors"
          >
            Rahma<span className="text-primary-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-400'
                    : 'text-dark-muted hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-dark-muted hover:text-white hover:bg-dark-border/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-dark-muted hover:text-white hover:bg-dark-border/30'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
