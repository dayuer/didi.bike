import styles from './Business.module.css';

const STATS = [
  { num: '500+', label: 'OEM Partners' },
  { num: '2M+', label: 'Sensors Deployed' },
  { num: '50+', label: 'Countries' },
  { num: '99.7%', label: 'Satisfaction' },
];

const PLANS = [
  {
    tag: 'OEM',
    title: 'OEM Integration',
    desc: 'For e-bike and high-end road bike manufacturers. Pre-install DIDI.BIKE Sensor into bottom brackets for factory-calibrated performance data.',
    metrics: [
      { v: '$15-25', u: '/unit BOM' },
      { v: '<4 weeks', u: 'integration' },
      { v: 'ISO 26262', u: 'compliant' },
    ],
    features: [
      'Custom firmware integration',
      'Bulk licensing (1000+ units: $180/unit)',
      'White-label solutions',
      '24/7 enterprise SLA',
    ],
  },
  {
    tag: 'PRO',
    title: 'Bike Fitting Pro',
    desc: 'Professional-grade data for bike fitters. Replace expensive optical motion capture with millimeter-accurate sensor data.',
    metrics: [
      { v: '$499', u: 'Pro license' },
      { v: '±2mm', u: 'accuracy' },
      { v: '98.5%', u: 'fit rate' },
    ],
    features: [
      'Real-time kinematics visualization',
      'Before/After comparison analytics',
      'PDF fit report generation',
      'Multi-sensor support (up to 8)',
    ],
  },
  {
    tag: 'API',
    title: 'Enterprise API',
    desc: 'For cycling teams and research institutions. Historical data, team analytics, and advanced visualization tools.',
    metrics: [
      { v: '$299', u: '/month' },
      { v: 'Unlimited', u: 'retention' },
      { v: '99.99%', u: 'uptime SLA' },
    ],
    features: [
      'Team dashboard (50+ riders)',
      '6-month performance trends',
      'CSV/JSON/FIT data export',
      'Custom algorithm sandbox',
    ],
  },
];

export default function Business() {
  return (
    <section id="business" className={`section ${styles.business}`}>
      <div className={styles.glow} />
      <div className="container">
        <div className="section-header">
          <span className="section-label">For Business</span>
          <h2 className="section-title">Enterprise-Grade Telemetry</h2>
          <p className="section-desc">Scalable solutions for manufacturers, fitters, and research teams.</p>
        </div>

        {/* 数据统计 */}
        <div className={`${styles.statsGrid} animate-on-scroll`}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statBox}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* 方案卡片 */}
        <div className={styles.plansGrid}>
          {PLANS.map((p, i) => (
            <div key={p.tag} className={`glass-card ${styles.planCard} animate-on-scroll delay-${i + 1}`}>
              <div className={styles.planTag}>{p.tag}</div>
              <h3 className={styles.planTitle}>{p.title}</h3>
              <p className={styles.planDesc}>{p.desc}</p>

              <div className={styles.planMetrics}>
                {p.metrics.map((m) => (
                  <div key={m.u} className={styles.planMetric}>
                    <span className={styles.pmValue}>{m.v}</span>
                    <span className={styles.pmUnit}>{m.u}</span>
                  </div>
                ))}
              </div>

              <ul className={styles.planFeatures}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.ctaBlock} animate-on-scroll delay-4`}>
          <h3>Ready to integrate?</h3>
          <p>Contact our business development team for custom solutions.</p>
          <a href="#contact" className="btn btn-primary">Contact Business Team</a>
        </div>
      </div>
    </section>
  );
}
