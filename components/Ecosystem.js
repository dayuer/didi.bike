'use client';

import { useState } from 'react';
import styles from './Ecosystem.module.css';

const TELEMETRY_GROUPS = [
  {
    title: 'Posture & Aerodynamics',
    items: [
      { name: 'Torso Angle / CdA Proxy', detail: '0°-45° | ±0.1° | 100Hz' },
      { name: 'Pelvic Rocking', detail: 'Lateral sway | 0.1° resolution' },
      { name: 'Seated vs Standing', detail: 'Auto-detect 200ms latency' },
      { name: 'Aero Efficiency Score', detail: 'Real-time CdA estimation' },
    ],
  },
  {
    title: 'Pedaling Dynamics',
    items: [
      { name: 'Dead-Spot Duration', detail: 'TDC: 20-60ms | BDC: 15-50ms' },
      { name: 'Torque Effectiveness', detail: '65-85% positive phase' },
      { name: 'Pedaling Smoothness', detail: 'FFT-based, 85-98% typical' },
      { name: 'L/R Balance', detail: 'Real-time split + fatigue detect' },
    ],
  },
  {
    title: 'Chassis & Surface',
    items: [
      { name: 'Vibration Damping', detail: '5-500Hz | Surface classification' },
      { name: 'Tire Pressure Guide', detail: '60-120psi recommendation' },
      { name: 'Surface Roughness', detail: 'Scale 0-10, 1km rolling avg' },
      { name: 'Impact Detection', detail: 'Pothole sensing + GPS tag' },
    ],
  },
];

const LIVE_DATA = [
  { t: '14:32:45.123', m: 'Torso Angle', v: '14.7°', s: 'optimal' },
  { t: '14:32:45.133', m: 'Pelvic Rock', v: '0.3°L', s: 'normal' },
  { t: '14:32:45.143', m: 'Torque Eff.', v: '78.2%', s: 'excellent' },
  { t: '14:32:45.153', m: 'Vib Score', v: '4.2/10', s: 'moderate' },
  { t: '14:32:45.163', m: 'L/R Balance', v: '48.3/51.7', s: 'balanced' },
];

const PLATFORMS = ['Strava', 'TrainingPeaks', 'WKO5', 'Golden Cheetah', 'Wahoo SYSTM', 'Intervals.icu'];

const API_FEATURES = [
  { tag: 'STREAM', desc: 'Raw telemetry (WebSocket 100Hz)' },
  { tag: 'WEBHOOK', desc: 'HTTP POST notifications' },
  { tag: 'LIBRARY', desc: 'FIT parsing (Python/JS/Java)' },
  { tag: 'SDK', desc: 'Custom algorithm integration' },
  { tag: 'REST', desc: 'RESTful API endpoints' },
  { tag: 'BLE', desc: 'GATT characteristics access' },
];

export default function Ecosystem() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section id="ecosystem" className={`section ${styles.eco}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ecosystem</span>
          <h2 className="section-title">Biomechanics & Aerodynamics</h2>
          <p className="section-desc">Open Protocol. No vendor lock-in.</p>
        </div>

        {/* 遥测数据 */}
        <div className={`${styles.telemetryBlock} animate-on-scroll`}>
          <h3 className={styles.subheading}>Core Telemetry</h3>

          <div className={styles.groupTabs}>
            {TELEMETRY_GROUPS.map((g, i) => (
              <button
                key={g.title}
                className={`${styles.groupTab} ${activeGroup === i ? styles.groupTabActive : ''}`}
                onClick={() => setActiveGroup(i)}
              >
                {g.title}
              </button>
            ))}
          </div>

          <div className={styles.metricsGrid}>
            {TELEMETRY_GROUPS[activeGroup].items.map((item) => (
              <div key={item.name} className={styles.metricCard}>
                <div className={styles.metricName}>{item.name}</div>
                <div className={styles.metricDetail}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 实时数据 */}
        <div className={`${styles.liveBlock} animate-on-scroll delay-1`}>
          <h4 className={styles.liveTitle}>
            <span className={styles.liveDot} />
            Sample Real-Time Output
          </h4>
          <div className={styles.dataStream}>
            {LIVE_DATA.map((d) => (
              <div key={d.t} className={styles.dataRow}>
                <span className={styles.dataTs}>{d.t}</span>
                <span className={styles.dataMetric}>{d.m}</span>
                <span className={styles.dataVal}>{d.v}</span>
                <span className={`${styles.dataStatus} ${styles[d.s]}`}>{d.s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 平台集成 */}
        <div className={`${styles.integrationBlock} animate-on-scroll delay-2`}>
          <h3 className={styles.subheading}>Seamless Integration</h3>
          <p className={styles.intDesc}>No proprietary app required. Broadcasts directly to all major head units and platforms.</p>

          <div className={styles.platformGrid}>
            {PLATFORMS.map((p) => (
              <div key={p} className={styles.platformCard}>{p}</div>
            ))}
          </div>
        </div>

        {/* API */}
        <div className={`glass-card ${styles.apiBlock} animate-on-scroll delay-3`}>
          <h3 className={styles.subheading}>Developer API</h3>
          <p className={styles.intDesc}>Access raw 6-axis IMU data. Build custom analytics with our open REST API.</p>

          <div className={styles.apiGrid}>
            {API_FEATURES.map((f) => (
              <div key={f.tag} className={styles.apiItem}>
                <span className={styles.apiTag}>{f.tag}</span>
                <span className={styles.apiDesc}>{f.desc}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-ghost">
            View API Documentation <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
