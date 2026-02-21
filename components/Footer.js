import styles from './Footer.module.css';

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sensor', label: 'The Sensor' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#business', label: 'For Business' },
  { href: '#contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
  { href: '/legal/terms-of-service', label: 'Terms of Service' },
  { href: '/legal/cookie-policy', label: 'Cookie Policy' },
];

const SOCIAL_LINKS = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Twitter' },
  { href: '#', label: 'Strava' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* 品牌 */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>DIDI</span>
              <span className={styles.logoDot}>.</span>
              <span className={styles.logoSub}>BIKE</span>
            </div>
            <p className={styles.brandDesc}>Data-Integrated Dynamic Intelligence</p>
            <p className={styles.brandSub}>Precision cycling telemetry hardware</p>
          </div>

          {/* 快速链接 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <nav aria-label="Quick links">
              <ul>
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 法律 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <nav aria-label="Legal pages">
              <ul>
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} rel="nofollow">{l.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 社交 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((l) => (
                <a key={l.label} href={l.href} className={styles.socialLink}>{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* 免责声明 */}
        <div className={styles.disclaimer}>
          <p>DIDI.BIKE and the Data-Integrated Dynamic Intelligence logo are registered trademarks. DIDI.BIKE is strictly a sports technology hardware manufacturer specializing in cycling telemetry sensors and biomechanics analysis systems.</p>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 DIDI.BIKE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
