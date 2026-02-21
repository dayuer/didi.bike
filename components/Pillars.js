import styles from './Pillars.module.css';

const PILLARS = [
  {
    num: '01',
    title: 'Aerodynamic Profiling',
    desc: 'Real-time CdA (drag coefficient) calculation through 6-axis IMU at 100Hz. According to cycling aerodynamics research (Blocken et al., 2018), position optimization saves 15–20W at 40km/h — a 30-second gain over 40km.',
    icon: '⟡',
  },
  {
    num: '02',
    title: 'Posture Correction',
    desc: 'Pelvic stability monitoring at ±0.1° resolution detects asymmetries linked to 68% of overuse injuries in elite cyclists (Willy et al., 2019). Identify imbalances before they become injuries.',
    icon: '⊿',
  },
  {
    num: '03',
    title: 'Universal Compatibility',
    desc: 'Broadcasts via ANT+ and Bluetooth LE 5.0 to all major head units — Garmin, Wahoo, Hammerhead — and 6 platforms including Strava, TrainingPeaks, and WKO5. No proprietary app required.',
    icon: '◎',
  },
];

export default function Pillars() {
  return (
    <section className={`section ${styles.pillars}`}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.grid}>
          {PILLARS.map((p, i) => (
            <div key={p.num} className={`glass-card ${styles.card} animate-on-scroll delay-${i + 1}`}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={styles.num}>{p.num}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
