'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sensor', label: 'The Sensor' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#business', label: 'For Business' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={(e) => handleLinkClick(e, '#home')}>
          <img src="/logo-wordmark.png" alt="DIDI.BIKE" className={styles.logoImg} />
        </a>

        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={(e) => handleLinkClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li className={styles.ctaWrap}>
            <a href="#contact" className={`btn btn-primary ${styles.cta}`} onClick={(e) => handleLinkClick(e, '#contact')}>
              Get Sensor
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
