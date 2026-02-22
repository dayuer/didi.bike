'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/#sensor', label: 'The Sensor' },
  { href: '/technology', label: 'Technology' },
  { href: '/specs', label: 'Specs' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/faq', label: 'FAQ' },
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
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      // Anchor link like /#sensor — if we're on the homepage, smooth scroll
      const hash = href.slice(1); // e.g. #sensor
      if (window.location.pathname === '/') {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Otherwise, navigate to / with the hash — browser handles it
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img src="/logo-icon.png" alt="DIDI.BIKE" className={styles.logoImg} />
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
            <a href="/#contact" className={`btn btn-primary ${styles.cta}`} onClick={(e) => handleLinkClick(e, '/#contact')}>
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
