import React, { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label, href) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <a href="#home" className="header-logo" onClick={() => handleNav('Home', '#home')}>
          <span className="logo-r">R</span>UMI
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navLinks.map(link => (
            <button
              key={link.label}
              className={`nav-link ${active === link.label ? 'nav-active' : ''}`}
              onClick={() => handleNav(link.label, link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button className="header-cta" onClick={() => handleNav('Contact Us', '#contact')}>
          Book Now
        </button>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.label}
            className={`mobile-link ${active === link.label ? 'nav-active' : ''}`}
            onClick={() => handleNav(link.label, link.href)}
          >
            {link.label}
          </button>
        ))}
        <button className="header-cta mobile-cta" onClick={() => handleNav('Contact Us', '#contact')}>
          Book Now
        </button>
      </div>
    </header>
  )
}