'use client';

import { useState } from 'react';
import styles from './Sensor.module.css';

const SPECS = [
  { label: 'Weight', value: '14g (Ultra-lightweight)' },
  { label: 'Battery Life', value: '120 hours continuous' },
  { label: 'Charging', value: 'Magnetic quick-charge (USB-C)' },
  { label: 'Connectivity', value: 'ANT+ & Bluetooth LE 5.0' },
  { label: 'Mounting', value: 'Universal seat post & cleat' },
  { label: 'Protection', value: 'IP67 dust & water resistant' },
  { label: 'Sampling Rate', value: '100Hz data capture' },
  { label: 'Latency', value: '<10ms transmission delay' },
  { label: 'IMU Precision', value: 'Gyro: ±2000°/s, Accel: ±16g' },
  { label: 'Operating Temp', value: '-20°C to 50°C' },
  { label: 'Memory', value: '8MB internal (offline buffer)' },
  { label: 'Firmware', value: 'OTA updates via BLE' },
  { label: 'MTBF', value: '50,000 hours' },
];

const ACCURACY = [
  { value: '±0.1°', label: 'Angular Accuracy', desc: 'Full range precision' },
  { value: '±1.5%', label: 'Power Correlation', desc: 'With power meters' },
  { value: '99.9%', label: 'Data Retention', desc: 'Packet delivery rate' },
  { value: '<5ms', label: 'Jitter', desc: 'Timing consistency' },
];

const COMPARISON = [
  { metric: 'Setup Time', us: '<30 seconds', them: '30-45 minutes', gain: '60× faster' },
  { metric: 'Field Deploy', us: 'Full outdoor support', them: 'Indoor lab only', gain: '100% outdoor' },
  { metric: 'Cost', us: '$299 USD', them: '$15,000+ USD', gain: '50× lower' },
  { metric: 'Data Points/s', us: '600 (6-axis@100Hz)', them: '240 (4cam@60fps)', gain: '2.5× more' },
  { metric: 'Processing', us: 'Real-time onboard', them: '2-4h offline', gain: 'Instant' },
];

export default function Sensor() {
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <section id="sensor" className={`section ${styles.sensor}`}>
      <div className={styles.glowOrb} />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Hardware</span>
          <h2 className="section-title">The Sensor</h2>
          <p className="section-desc">Engineered for precision. Built for endurance.</p>
        </div>

        {/* Tab 切换 */}
        <div className={styles.tabs}>
          {['specs', 'accuracy', 'benchmark'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'specs' ? 'Specifications' : tab === 'accuracy' ? 'Calibrated Precision' : 'Technical Benchmark'}
            </button>
          ))}
        </div>

        {/* Specs Tab */}
        {activeTab === 'specs' && (
          <div className={`${styles.panel} animate-on-scroll`}>
            <div className={styles.specsGrid}>
              {SPECS.map((s) => (
                <div key={s.label} className={styles.specItem}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accuracy Tab */}
        {activeTab === 'accuracy' && (
          <div className={styles.panel}>
            <div className={styles.accuracyGrid}>
              {ACCURACY.map((a) => (
                <div key={a.label} className={`glass-card ${styles.accuracyCard}`}>
                  <div className={styles.accValue}>{a.value}</div>
                  <div className={styles.accLabel}>{a.label}</div>
                  <div className={styles.accDesc}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benchmark Tab */}
        {activeTab === 'benchmark' && (
          <div className={styles.panel}>
            <div className={styles.benchTable}>
              <div className={`${styles.benchRow} ${styles.benchHeader}`}>
                <span>Metric</span>
                <span>DIDI.BIKE</span>
                <span>Optical System</span>
                <span>Advantage</span>
              </div>
              {COMPARISON.map((c) => (
                <div key={c.metric} className={styles.benchRow}>
                  <span className={styles.benchMetric}>{c.metric}</span>
                  <span className={styles.benchUs}>{c.us}</span>
                  <span className={styles.benchThem}>{c.them}</span>
                  <span className={styles.benchGain}>{c.gain}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
