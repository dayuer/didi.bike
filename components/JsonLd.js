/**
 * JSON-LD Structured Data for SEO Rich Snippets + GEO AI Visibility
 * Uses @graph format (schema best practice) with FAQPage for +40% AI visibility
 * Server component — no 'use client' needed
 */

const SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebSite
    {
      '@type': 'WebSite',
      '@id': 'https://didi.bike/#website',
      name: 'DIDI.BIKE',
      alternateName: 'Data-Integrated Dynamic Intelligence',
      url: 'https://didi.bike',
    },

    // 2. Organization
    {
      '@type': 'Organization',
      '@id': 'https://didi.bike/#organization',
      name: 'DIDI.BIKE',
      alternateName: 'Data-Integrated Dynamic Intelligence',
      url: 'https://didi.bike',
      logo: {
        '@type': 'ImageObject',
        url: 'https://didi.bike/og-image.png',
        width: 1200,
        height: 630,
      },
      description:
        'Sports technology hardware manufacturer specializing in cycling telemetry sensors and biomechanics analysis systems. Trusted by 500+ OEM partners across 50+ countries.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shenzhen',
        addressCountry: 'CN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@didi.bike',
          contactType: 'customer service',
        },
        {
          '@type': 'ContactPoint',
          email: 'partners@didi.bike',
          contactType: 'sales',
        },
      ],
      sameAs: [],
    },

    // 3. Product — DIDI.BIKE Sensor
    {
      '@type': 'Product',
      '@id': 'https://didi.bike/#product',
      name: 'DIDI.BIKE Sensor',
      description:
        'Professional cycling telemetry sensor for aerodynamic profiling, posture analysis, and power measurement. At just 14 grams with 100Hz sampling rate and <10ms latency, it replaces $15,000+ motion capture labs at 1/50th the cost.',
      brand: {
        '@type': 'Brand',
        name: 'DIDI.BIKE',
      },
      category: 'Cycling Sensors & Electronics',
      url: 'https://didi.bike/#sensor',
      image: 'https://didi.bike/og-image.png',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Weight', value: '14g' },
        { '@type': 'PropertyValue', name: 'Sampling Rate', value: '100Hz' },
        { '@type': 'PropertyValue', name: 'Latency', value: '<10ms' },
        { '@type': 'PropertyValue', name: 'Battery Life', value: '120 hours continuous' },
        { '@type': 'PropertyValue', name: 'Connectivity', value: 'ANT+ & Bluetooth LE 5.0' },
        { '@type': 'PropertyValue', name: 'Protection', value: 'IP67 dust & water resistant' },
        { '@type': 'PropertyValue', name: 'Angular Accuracy', value: '±0.1°' },
        { '@type': 'PropertyValue', name: 'IMU Precision', value: 'Gyro: ±2000°/s, Accel: ±16g' },
        { '@type': 'PropertyValue', name: 'Operating Temperature', value: '-20°C to 50°C' },
      ],
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://didi.bike/#contact',
      },
    },

    // 4. WebPage with SpeakableSpecification for voice/AI search
    {
      '@type': 'WebPage',
      '@id': 'https://didi.bike/#webpage',
      name: 'DIDI.BIKE — Precision Cycling Sensor',
      description:
        'The world\'s lightest cycling telemetry sensor at 14g. Aerodynamic profiling, posture analysis, and power measurement with ±0.1° angular precision.',
      url: 'https://didi.bike',
      isPartOf: { '@id': 'https://didi.bike/#website' },
      about: { '@id': 'https://didi.bike/#product' },
      publisher: { '@id': 'https://didi.bike/#organization' },
      inLanguage: 'en-US',
      dateModified: new Date().toISOString().split('T')[0],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.section-title', '.section-desc'],
      },
    },

    // 5. FAQPage — +40% AI visibility (Princeton GEO research)
    {
      '@type': 'FAQPage',
      '@id': 'https://didi.bike/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the DIDI.BIKE Sensor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The DIDI.BIKE Sensor is a 14-gram professional cycling telemetry device that measures aerodynamic drag (CdA), pedaling dynamics, and posture in real-time at 100Hz. It uses a 6-axis IMU (gyroscope ±2000°/s, accelerometer ±16g) with ±0.1° angular accuracy and <10ms latency. Priced at $299, it replaces traditional optical motion capture systems costing $15,000+ while supporting full outdoor use.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the DIDI.BIKE Sensor measure aerodynamics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The sensor calculates real-time CdA (coefficient of drag area) through 6-axis IMU integration at 100Hz. It continuously monitors torso angle (0°-45° range), pelvic rocking, and seated vs. standing position. According to cycling aerodynamics research (Blocken et al., 2018), optimizing riding position can save 15-20 watts at 40km/h — equivalent to a 30-second advantage over a 40km time trial.',
          },
        },
        {
          '@type': 'Question',
          name: 'What platforms does the DIDI.BIKE Sensor integrate with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The sensor broadcasts via ANT+ and Bluetooth LE 5.0, connecting directly to all major cycling computers and platforms — including Garmin, Wahoo, and Hammerhead head units, as well as Strava, TrainingPeaks, WKO5, Golden Cheetah, Wahoo SYSTM, and Intervals.icu. No proprietary app is required. A Developer API provides WebSocket streaming at 100Hz, REST endpoints, and SDK libraries for Python, JavaScript, and Java.',
          },
        },
        {
          '@type': 'Question',
          name: 'How accurate is the DIDI.BIKE Sensor compared to motion capture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The DIDI.BIKE Sensor achieves ±0.1° angular accuracy with 99.9% data retention and <5ms timing jitter. Setup takes under 30 seconds vs. 30-45 minutes for optical systems. It captures 600 data points per second (6-axis at 100Hz) compared to 240 points from 4-camera systems at 60fps. The key advantage is full outdoor support — traditional motion capture is limited to indoor labs only.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does the DIDI.BIKE Sensor cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The DIDI.BIKE Sensor retails at $299 USD for individual riders. For bike fitting professionals, the Pro license is $499 and supports up to 8 simultaneous sensors with ±2mm accuracy. OEM bulk licensing for manufacturers starts at $180/unit for 1000+ units with $15-25/unit BOM cost, custom firmware integration, and 24/7 enterprise SLA. Enterprise API access is available at $299/month with unlimited data retention and 99.99% uptime SLA.',
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_GRAPH) }}
    />
  );
}
