'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="site-header" style={scrolled ? { boxShadow: '0 4px 20px rgba(0,0,0,0.5)' } : {}}>
      <div className="header-inner">
        <a href="#home" className="header-logo" onClick={close}>
          <span className="logo-name">Brother&rsquo;s Pizza</span>
          <span className="logo-sub">& Italian Restaurant</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="tel:+14342927249" className="nav-phone" aria-label="Call us">
            (434) 292‑7249
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <a href="#home" onClick={close}>Home</a>
        <a href="#menu" onClick={close}>Menu</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#gallery" onClick={close}>Gallery</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="tel:+14342927249" onClick={close} style={{ color: 'var(--gold)' }}>
          ☎ (434) 292‑7249
        </a>
      </nav>
    </header>
  )
}
