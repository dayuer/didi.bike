/**
 * JSON-LD Structured Data for SEO Rich Snippets
 * Server component — no 'use client' needed
 */

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DIDI.BIKE',
  alternateName: 'Data-Integrated Dynamic Intelligence',
  url: 'https://didi.bike',
  logo: 'https://didi.bike/og-image.png',
  description:
    'Sports technology hardware manufacturer specializing in cycling telemetry sensors and biomechanics analysis systems.',
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
};

const PRODUCT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'DIDI.BIKE Sensor',
  description:
    'Professional cycling telemetry sensor for aerodynamic profiling, posture analysis, and power measurement. 14g ultra-lightweight with 100Hz sampling rate and <10ms latency.',
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
    { '@type': 'PropertyValue', name: 'Battery Life', value: '120 hours' },
    { '@type': 'PropertyValue', name: 'Connectivity', value: 'ANT+ & Bluetooth LE 5.0' },
    { '@type': 'PropertyValue', name: 'Protection', value: 'IP67' },
    { '@type': 'PropertyValue', name: 'IMU Precision', value: 'Gyro: ±2000°/s, Accel: ±16g' },
  ],
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
    url: 'https://didi.bike/#contact',
  },
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DIDI.BIKE',
  alternateName: 'Data-Integrated Dynamic Intelligence',
  url: 'https://didi.bike',
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
    </>
  );
}
