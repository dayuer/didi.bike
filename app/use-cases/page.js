import styles from './use-cases.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Use Cases — Who Uses the DIDI.BIKE Sensor',
  description:
    'Real-world applications: professional cycling teams, bike fitters, individual athletes, and OEM hardware partners. See how the DIDI.BIKE Sensor fits your workflow.',
  alternates: { canonical: '/use-cases' },
};

const CASES = [
  {
    tag: 'Pro Teams',
    title: 'Race Day Aero Without the Wind Tunnel',
    desc: `We originally built this sensor because a Continental-level team in Belgium asked us to. Their riders were losing 45 seconds per 40km TT compared to WorldTour teams — not because they were less fit, but because they couldn't afford quarterly wind tunnel sessions at €1,200 a pop.

Now they test positions during Tuesday morning training rides. The sensor logs CdA alongside power, so their coach can see exactly which position costs watts and which saves them. Last season, their average TT ranking improved by 11 places across the team.

The trick is that real-road data is actually more useful than tunnel data in many situations. Wind tunnels give you zero-yaw perfection. Roads give you crosswinds coming off buildings, updrafts on bridge approaches, and the messy reality of a peloton's wake. Our sensor captures all of that.`,
    stats: [
      { value: '45s', label: 'Time saved per 40km TT' },
      { value: '11', label: 'Average ranking improvement' },
      { value: '€0', label: 'Per-session aero testing cost' },
    ],
  },
  {
    tag: 'Bike Fitters',
    title: 'Quantify What Your Eyes Can\'t See',
    desc: `Most bike fits end with the fitter saying "that looks about right." And they're usually correct — experienced fitters have incredible intuition. But intuition doesn't give the client a number to take home.

We've partnered with 23 fitting studios across Europe and Australia who now include a DIDI.BIKE aero profile as part of their premium fit package. The rider does a 15-minute ride on the road outside the studio in their old position, then returns for adjustments, and repeats. The before/after CdA comparison becomes a tangible deliverable — something the client can see, understand, and share.

Studio owners tell us this single addition increased their premium fit conversions by 35%. Riders want data, not just feel. The sensor gives fitters a way to prove their expertise with numbers.`,
    stats: [
      { value: '23', label: 'Partner studios' },
      { value: '35%', label: 'Premium fit conversion increase' },
      { value: '15min', label: 'Time for baseline profile' },
    ],
  },
  {
    tag: 'Individual Athletes',
    title: 'Your Personal Aero Season',
    desc: `You don't need a coach or a team to use this. Mount it, pair it with your Garmin or Wahoo, and ride. The companion app shows your CdA trend over time alongside your FTP progression.

Most riders discover a 3–8% CdA improvement in their first season just by experimenting with bar reach, saddle height, and helmet choice. At FTP 250W and 40km/h, a 5% CdA drop translates to roughly 1.2 km/h faster — or 18W saved at the same speed. That's a meaningful chunk of watts you don't have to train for.

One thing we hear a lot: "I never realized how much my head position mattered." The sensor picks up the CdA difference between looking at the road 30m ahead versus 10m ahead. It's usually 2–4% — more than the difference between most helmets on the market.`,
    stats: [
      { value: '3–8%', label: 'Typical CdA improvement' },
      { value: '18W', label: 'Saved at same speed' },
      { value: '2–4%', label: 'Head position CdA impact' },
    ],
  },
  {
    tag: 'OEM Partners',
    title: 'Integrate Our Sensor Into Your Product',
    desc: `We supply the sensor module as an OEM component to bike manufacturers, helmet companies, and cycling accessory brands. The module ships as a 14g package with exposed I²C and SPI interfaces — drop it into your PCB design and access all raw sensor data.

Current OEM integrations include saddle-embedded builds (no external mount visible), integrated handlebar stems, and helmet-mounted configurations for motorcycle aero R&D. We handle calibration and certification; you handle industrial design. Minimum order: 500 units.

Our OEM SDK supports C, Python, and JavaScript. Full documentation at docs.didi.bike (under NDA). We also offer white-label firmware for partners who want to ship under their own brand.`,
    stats: [
      { value: '500+', label: 'OEM partners worldwide' },
      { value: '50+', label: 'Countries shipped' },
      { value: '500', label: 'Minimum order quantity' },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Use Cases</span>
            <h1 className={styles.pageTitle}>
              Built for People Who<br />
              <span className={styles.accent}>Actually Ride Bikes.</span>
            </h1>
            <p className={styles.heroDesc}>
              We didn&apos;t design this in a boardroom. Every feature exists because
              a real cyclist, fitter, or engineer asked for it during testing.
            </p>
          </div>
        </section>

        {CASES.map((c, i) => (
          <section key={c.tag} className={`${styles.caseSection} ${i % 2 ? styles.sectionAlt : ''}`}>
            <div className="container">
              <div className={styles.caseLayout}>
                <div className={styles.caseContent}>
                  <span className={styles.caseTag}>{c.tag}</span>
                  <h2 className={styles.caseTitle}>{c.title}</h2>
                  {c.desc.split('\n\n').map((p, j) => (
                    <p key={j} className={styles.casePara}>{p}</p>
                  ))}
                </div>
                <div className={styles.caseStats}>
                  {c.stats.map((s) => (
                    <div key={s.label} className={styles.stat}>
                      <span className={styles.statValue}>{s.value}</span>
                      <span className={styles.statLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
