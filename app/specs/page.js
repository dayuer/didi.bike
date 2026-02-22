import styles from './specs.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Specifications — Full Technical Spec Sheet',
  description:
    'Complete specifications for the DIDI.BIKE Sensor: 14g weight, 6-axis IMU at 100Hz, ANT+ & Bluetooth LE 5.0, 40-hour battery, IPX7 waterproof. Full compatibility matrix.',
  alternates: { canonical: '/specs' },
};

const SPECS = [
  { category: 'Physical', items: [
    ['Weight', '14g (without mount)'],
    ['Dimensions', '42 × 28 × 12mm'],
    ['Housing', 'Carbon-reinforced polymer'],
    ['Mount', 'Saddle rail clip (7mm, 9mm oval compatible)'],
    ['Water Resistance', 'IPX7 (submersible to 1m / 30 min)'],
    ['Operating Temperature', '−10°C to 60°C'],
  ]},
  { category: 'Sensors', items: [
    ['IMU', 'Bosch BMI270 — 6-axis (3× accelerometer, 3× gyroscope)'],
    ['Sampling Rate', '100Hz per axis (600 data points/sec total)'],
    ['Angular Precision', '±0.1°'],
    ['Barometer', 'Bosch BMP390 — ±0.1m altitude accuracy'],
    ['Strain Gauges', '4× bonded foil, full Wheatstone bridge'],
    ['Force Range', '0–2000N with 0.5N resolution'],
  ]},
  { category: 'Processor & Memory', items: [
    ['SoC', 'Nordic nRF52840 — ARM Cortex-M4F @ 64MHz'],
    ['RAM', '256KB'],
    ['Flash', '1MB internal + 8MB external (data logging)'],
    ['Sensor Fusion', 'Extended Kalman filter, <10ms latency'],
  ]},
  { category: 'Connectivity', items: [
    ['Bluetooth', 'LE 5.0 (multi-connection, up to 3 devices)'],
    ['ANT+', 'Dual-channel broadcast'],
    ['Data Export', '.FIT file format (standard)'],
    ['USB', 'USB-C for charging & firmware updates'],
    ['OTA Updates', 'Yes, via companion app'],
  ]},
  { category: 'Power', items: [
    ['Battery', '110mAh LiPo'],
    ['Runtime', '40 hours (continuous recording)'],
    ['Standby', '6 months'],
    ['Charging', 'USB-C, 45 min to full'],
    ['Charging Cycles', '500+ cycles to 80% capacity'],
  ]},
  { category: 'Computed Metrics', items: [
    ['CdA (Drag Coefficient × Area)', 'Real-time, ±2% vs wind tunnel'],
    ['Body Position', 'Hoods / drops / aero / climbing — auto-detected'],
    ['Pedaling Dynamics', 'Cadence, smoothness, left-right balance'],
    ['Power Estimation', 'Virtual power from force + velocity model'],
    ['Altitude & Gradient', 'Barometric, corrected against GPS'],
    ['Environmental', 'Air density, temperature-compensated'],
  ]},
];

const COMPAT = [
  { category: 'Head Units', devices: ['Garmin Edge 540/840/1040', 'Wahoo ELEMNT BOLT/ROAM', 'Hammerhead Karoo 2/3', 'Bryton Rider S800', 'Sigma ROX 12.1'] },
  { category: 'Software', devices: ['Strava', 'TrainingPeaks', 'Golden Cheetah', 'intervals.icu', 'TrainerRoad', 'Zwift', 'WKO5'] },
  { category: 'Mobile', devices: ['DIDI.BIKE App (iOS 15+ / Android 12+)', 'Garmin Connect', 'Wahoo ELEMNT App'] },
];

export default function SpecsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Specifications</span>
            <h1 className={styles.pageTitle}>Every Detail, No Fluff.</h1>
            <p className={styles.heroDesc}>
              We publish full specs because we think you should know exactly what
              you&apos;re buying before you buy it. No vague marketing claims —
              just numbers.
            </p>
          </div>
        </section>

        {/* Spec Tables */}
        <section className={styles.section}>
          <div className="container">
            {SPECS.map(({ category, items }) => (
              <div key={category} className={styles.specBlock}>
                <h2 className={styles.specCategory}>{category}</h2>
                <div className={styles.specTable}>
                  {items.map(([label, value]) => (
                    <div key={label} className={styles.specRow}>
                      <span className={styles.specLabel}>{label}</span>
                      <span className={styles.specValue}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compatibility */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Compatibility</h2>
            <p className={styles.sectionDesc}>
              If your device speaks ANT+ or Bluetooth, it works. No proprietary dongles,
              no companion app required for basic functionality.
            </p>
            <div className={styles.compatGrid}>
              {COMPAT.map(({ category, devices }) => (
                <div key={category} className={styles.compatBlock}>
                  <h3>{category}</h3>
                  <ul>
                    {devices.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Box contents */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What&apos;s In the Box</h2>
            <div className={styles.boxGrid}>
              {['DIDI.BIKE Sensor (14g)', 'Saddle rail mount (7mm & 9mm adapters)', 'USB-C charging cable (30cm)', 'Quick start guide', 'Calibration certificate (individual unit)', 'Hex key for mount adjustment'].map((item) => (
                <div key={item} className={styles.boxItem}>{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
