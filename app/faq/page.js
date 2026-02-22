import styles from './faq.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAQ — Common Questions About the DIDI.BIKE Sensor',
  description:
    'Answers to the most common questions about the DIDI.BIKE Sensor: how CdA is measured, battery life, compatibility, accuracy, and more.',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  {
    q: 'How accurate is the CdA measurement compared to a wind tunnel?',
    a: 'Our sensor correlates at r² = 0.94 with wind tunnel CdA values, validated across 200+ hours of comparative testing at the RMIT wind tunnel in Melbourne. In practical terms, that translates to ±2% CdA accuracy — close enough to make meaningful position decisions, though we\'d always recommend a tunnel session for final race-day optimization at the WorldTour level.',
  },
  {
    q: 'Do I need a power meter to use the sensor?',
    a: 'No. The sensor computes virtual power from its own force and velocity model. However, if you pair it with a dedicated power meter (crank-based, pedal, or hub), the CdA calculation becomes more accurate because we can use measured power instead of estimated power. Most riders see a 1-2% accuracy improvement with a paired power meter.',
  },
  {
    q: 'How does it mount to the bike?',
    a: 'Saddle rail clip — takes about 30 seconds. The mount accommodates both standard 7mm round rails and 9mm oval rails (common on carbon saddles). Once clipped, the sensor sits in the aerodynamic shadow behind your saddle, so it has zero drag impact on your ride. The clip is tool-free, but we include a 3mm hex key for fine angle adjustment.',
  },
  {
    q: 'What happens in rain or if I ride through a puddle?',
    a: 'The sensor is rated IPX7 — that means it can be submerged in 1 meter of water for 30 minutes without damage. Belgian cobbles in November rain? No problem. We tested units through an entire Australian winter (yes, the wet one) without a single failure.',
  },
  {
    q: 'How long does the battery last?',
    a: '40 hours of continuous recording with all sensors active and both ANT+ and Bluetooth broadcasting. In practice, for a rider training 12–15 hours per week, that\'s roughly 3 weeks between charges. Charging takes 45 minutes via USB-C. Standby time is approximately 6 months.',
  },
  {
    q: 'Which head units and apps does it work with?',
    a: 'Anything that supports ANT+ or Bluetooth LE. We\'ve verified compatibility with Garmin Edge (540, 840, 1040), Wahoo ELEMNT (BOLT, ROAM), Hammerhead Karoo 2 and 3, and Bryton Rider S800. On the software side: Strava, TrainingPeaks, Golden Cheetah, intervals.icu, TrainerRoad, and Zwift all read the .FIT files natively.',
  },
  {
    q: 'Can I use it on a TT bike with a deep aero seatpost?',
    a: 'Yes, though the mounting is slightly different. For TT bikes without standard saddle rails, we offer an optional seatpost clamp adapter (sold separately, $29) that fits cylindrical and aero-shaped seatposts from 25–36mm diameter. The sensor functionality is identical regardless of mount type.',
  },
  {
    q: 'What\'s the difference between this and just using the Chung Method in Golden Cheetah?',
    a: 'The Chung Method is a great free tool for estimating CdA from power and GPS data post-ride. The key differences: (1) our sensor gives real-time feedback during the ride, not post-ride analysis, (2) we measure body position directly via IMU rather than inferring it from power residuals, and (3) Chung Method accuracy degrades significantly in variable wind conditions — our barometric and IMU data compensate for that. Think of Chung as a rough GPS versus our approach as a proper survey instrument.',
  },
  {
    q: 'Does body position tracking work for mountain biking?',
    a: 'For aerodynamics, MTB speeds are generally too low for CdA to be meaningful (drag becomes relevant above ~25km/h). However, the posture analysis features — pedaling dynamics, body position classification, and force distribution — work perfectly on mountain bikes and are useful for technique coaching and injury prevention.',
  },
  {
    q: 'How does the OEM program work?',
    a: 'We supply the sensor module as a component with exposed I²C and SPI interfaces. You integrate it into your own hardware design — saddle, helmet, stem, wherever makes sense for your product. Minimum order is 500 units, pricing is volume-dependent. We handle sensor calibration and provide a white-label firmware option. Contact partners@didi.bike for the OEM datasheet and pricing.',
  },
  {
    q: 'Is the data format proprietary?',
    a: 'No. All data exports as standard .FIT files — the same format used by Garmin, Wahoo, and virtually every training platform. We also provide a developer API (REST + WebSocket) for partners who want to build real-time applications. We believe in open data because locking cyclists into a single ecosystem benefits nobody except the company doing the locking.',
  },
  {
    q: 'What firmware updates have you released recently?',
    a: 'Firmware v2.4 (January 2026) added left-right pedaling balance detection and improved the Kalman filter convergence time from 45 seconds to under 15 seconds. v2.3 (October 2025) introduced automatic ride detection — the sensor starts recording when it detects movement and stops after 5 minutes idle. All updates are free and install over-the-air via the companion app.',
  },
  {
    q: 'How do you handle crosswinds in CdA calculations?',
    a: 'This is the hardest problem in outdoor aero testing, and honestly, no method solves it perfectly. Our approach uses the IMU to detect lateral force perturbations (crosswinds push you sideways — the accelerometer sees that) combined with barometric turbulence signatures. We then apply a correction factor to the CdA estimate. In steady crosswinds, our correction works well. In gusty, variable conditions, we mark those segments with lower confidence scores so you know which data to trust.',
  },
  {
    q: 'Can two riders share one sensor?',
    a: 'Yes. The sensor stores rider profiles internally. When you pair it via the app, you select your profile, and the sensor uses your weight, height, and bike parameters for calculations. Switching profiles takes about 10 seconds. We tested this with a husband-wife pair who share a TT bike (different saddle heights, same sensor) and it works seamlessly.',
  },
  {
    q: 'Where is the sensor manufactured?',
    a: 'Final assembly and calibration happen at our facility in Shenzhen, China. The IMU and barometer are sourced from Bosch (Germany), the nRF52840 SoC from Nordic Semiconductor (Norway), and the strain gauges from Vishay (USA). Each unit undergoes individual calibration on a 6-axis Stewart platform before shipping — that\'s why your box includes a calibration certificate with your specific unit\'s serial number.',
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>FAQ</span>
            <h1 className={styles.pageTitle}>Questions We Actually Get Asked</h1>
            <p className={styles.heroDesc}>
              Not a marketing FAQ — these are real questions from riders, fitters, and
              engineers who've emailed us or cornered us at trade shows.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.faqList}>
              {FAQS.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>

            <div className={styles.contact}>
              <h2>Still have questions?</h2>
              <p>
                Email us at <a href="mailto:info@didi.bike">info@didi.bike</a> — a human
                will reply within 24 hours. For OEM inquiries:{' '}
                <a href="mailto:partners@didi.bike">partners@didi.bike</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
