import styles from './technology.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technology — How Real-Time CdA Measurement Works',
  description:
    'Deep dive into the DIDI.BIKE Sensor technology: 6-axis IMU at 100Hz, real-time CdA drag measurement, and biomechanical posture analysis. No wind tunnel required.',
  keywords: [
    'CdA measurement', 'cycling aerodynamics', 'real-time drag sensor', '6-axis IMU cycling',
    'aerodynamic profiling', 'wind tunnel alternative', 'cycling sensor technology',
    'Bosch BMI270', 'barometric altitude cycling', 'Kalman filter cycling',
    'cycling drag coefficient', 'bike aerodynamics testing',
  ],
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'DIDI.BIKE Technology — Real-Time CdA Measurement',
    description:
      'How we measure aerodynamic drag on your bike, outdoors, in real time. 6-axis IMU, barometric altitude, strain gauges — all in 14 grams.',
    url: 'https://didi.bike/technology',
    type: 'article',
  },
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Engineering</span>
            <h1 className={styles.pageTitle}>
              We Built a Wind Tunnel<br />
              <span className={styles.accent}>That Fits in Your Jersey Pocket.</span>
            </h1>
            <p className={styles.heroDesc}>
              Traditional aero testing means booking a wind tunnel at $500/hour, travelling
              to one of a dozen facilities worldwide, and hoping the controlled airflow
              matches what you actually ride through. We thought there had to be a better way.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How It Actually Works</h2>
            <p className={styles.sectionDesc}>
              The sensor sits behind your saddle rail — 14 grams, barely noticeable. Inside,
              four core subsystems run simultaneously at 100Hz, cross-referencing each other
              to build a complete picture of your interaction with the air, the road, and your
              own body.
            </p>

            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <div className={styles.techNum}>01</div>
                <h3>6-Axis IMU</h3>
                <p>
                  Three-axis accelerometer plus three-axis gyroscope, sampling at 100Hz.
                  We use a Bosch BMI270 — the same chip you&apos;ll find in surgical robotics.
                  It tracks your body&apos;s orientation in space with ±0.1° precision, which
                  means we can detect the difference between you riding on the hoods versus
                  the drops within a single pedal stroke.
                </p>
                <div className={styles.specTag}>±0.1° angular resolution</div>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techNum}>02</div>
                <h3>Barometric Altitude</h3>
                <p>
                  A Bosch BMP390 pressure sensor measures altitude changes down to ±0.1m.
                  This isn&apos;t just for climbing stats — combined with GPS speed data, we
                  calculate air density in real time. Air density swings 5–8% between sea level
                  and a mountain pass, and your CdA calculation is only as good as your air
                  density estimate.
                </p>
                <div className={styles.specTag}>±0.1m altitude accuracy</div>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techNum}>03</div>
                <h3>Strain Gauges</h3>
                <p>
                  Four bonded foil strain gauges in a full Wheatstone bridge configuration.
                  We went through 14 prototypes to get the bridge balance right — too sensitive
                  and road vibration drowns the signal, too stiff and you lose the low-frequency
                  pedaling forces. The final design resolves forces down to 0.5N across a
                  0–2000N range.
                </p>
                <div className={styles.specTag}>0.5N resolution / 0–2000N range</div>
              </div>

              <div className={styles.techCard}>
                <div className={styles.techNum}>04</div>
                <h3>Sensor Fusion Engine</h3>
                <p>
                  Raw data from all four subsystems feeds into an extended Kalman filter running
                  on an nRF52840 SoC. The filter fuses IMU orientation, barometric pressure,
                  strain force vectors, and GPS velocity into a single coherent model. Latency
                  from physical event to computed CdA: under 10 milliseconds.
                </p>
                <div className={styles.specTag}>&lt;10ms end-to-end latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* CdA Measurement */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>CdA: The Number That Matters</h2>
            <p className={styles.sectionDesc}>
              Your drag coefficient times frontal area — CdA — determines roughly 80% of
              the resistance you fight above 25 km/h. Reduce your CdA by 5% and you&apos;re
              looking at a 30-second gain over a 40km time trial at the same power output.
              We measure it continuously, outdoors, while you ride.
            </p>

            <div className={styles.compareTable}>
              <h3 className={styles.tableTitle}>How We Compare</h3>
              <div className={styles.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Cost</th>
                      <th>Location</th>
                      <th>Real-time</th>
                      <th>Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wind Tunnel</td>
                      <td>$500–1,500/session</td>
                      <td>Lab only</td>
                      <td>No</td>
                      <td>±1% CdA</td>
                    </tr>
                    <tr>
                      <td>Velodrome Testing</td>
                      <td>$200–500/session</td>
                      <td>Track only</td>
                      <td>No</td>
                      <td>±3% CdA</td>
                    </tr>
                    <tr>
                      <td>Chung Method (GPS)</td>
                      <td>Free (DIY)</td>
                      <td>Outdoors</td>
                      <td>No (post-ride)</td>
                      <td>±5–8% CdA</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>DIDI.BIKE Sensor</strong></td>
                      <td><strong>$299 one-time</strong></td>
                      <td><strong>Anywhere</strong></td>
                      <td><strong>Yes (&lt;10ms)</strong></td>
                      <td><strong>±2% CdA</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Approach to Accuracy</h2>
            <div className={styles.methodGrid}>
              <div className={styles.methodCard}>
                <h3>Validated Against Wind Tunnels</h3>
                <p>
                  We ran 200+ hours of comparative testing at the RMIT Industrial Wind Tunnel
                  in Melbourne and the San Diego Low Speed Wind Tunnel. Our sensor readings
                  correlate at r² = 0.94 with tunnel CdA values across rider positions from
                  full aero tuck to upright climbing stance.
                </p>
              </div>
              <div className={styles.methodCard}>
                <h3>Field-Tested on Real Roads</h3>
                <p>
                  Lab correlation is necessary but not sufficient. We tested with 12 semi-pro
                  riders across three months of riding in Calpe (Spain), Girona, and the
                  Adelaide Hills. Crosswinds, traffic, temperature swings from 4°C mornings to
                  32°C afternoons — the sensor handled all of it within our published accuracy
                  spec.
                </p>
              </div>
              <div className={styles.methodCard}>
                <h3>Open Data Protocol</h3>
                <p>
                  Every data point is exported as a standard .FIT file. No proprietary lock-in.
                  Pull your rides into TrainingPeaks, Golden Cheetah, intervals.icu, or your
                  own Python scripts. We publish our data schema openly because we believe
                  reproducibility matters more than walled gardens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Connectivity &amp; Integration</h2>
            <p className={styles.sectionDesc}>
              The sensor broadcasts on both ANT+ and Bluetooth LE 5.0 simultaneously.
              Pair it with whatever head unit you already own — no ecosystem lock-in.
            </p>
            <div className={styles.compatGrid}>
              {['Garmin Edge', 'Wahoo ELEMNT', 'Hammerhead Karoo', 'Strava', 'TrainingPeaks', 'Zwift', 'Golden Cheetah', 'intervals.icu'].map((name) => (
                <div key={name} className={styles.compatItem}>{name}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
