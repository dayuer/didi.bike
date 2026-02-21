import styles from './Pillars.module.css';

const PILLARS = [
  {
    num: '01',
    title: 'Aerodynamic Profiling',
    desc: 'Real-time drag coefficient calculation through 6-axis IMU integration. Optimize your position for maximum efficiency.',
    icon: '⟡',
  },
  {
    num: '02',
    title: 'Posture Correction',
    desc: 'Pelvic stability and pedaling power distribution monitoring. Identify imbalances before they become injuries.',
    icon: '⊿',
  },
  {
    num: '03',
    title: 'Universal Compatibility',
    desc: 'Seamless ANT+ and Bluetooth LE integration. Works with Garmin, Wahoo, Hammerhead, and all major head units.',
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
