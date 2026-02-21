'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import SensorSVG from './SensorSVG';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 创建粒子
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // 边界回弹
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        // 连线
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* 背景光晕 */}
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.gridOverlay} />

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <span className={styles.tagline}>Data-Integrated Dynamic Intelligence</span>
          <h1 className={styles.title}>
            Precision in<br />
            <span className={styles.highlight}>Every Pedal.</span>
          </h1>
          <p className={styles.subtitle}>
            Millisecond-level telemetry for elite cyclists. Aerodynamic profiling,
            posture analysis, and power measurement — in one ultra-light 14g sensor.
          </p>
          <div className={styles.cta}>
            <a href="#sensor" className="btn btn-primary">View Specs</a>
            <a href="#business" className="btn btn-secondary">OEM Integration</a>
          </div>

          {/* 微数据指标 */}
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>14g</span>
              <span className={styles.metricLabel}>Weight</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.metric}>
              <span className={styles.metricValue}>100Hz</span>
              <span className={styles.metricLabel}>Sample Rate</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.metric}>
              <span className={styles.metricValue}>&lt;10ms</span>
              <span className={styles.metricLabel}>Latency</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.metric}>
              <span className={styles.metricValue}>120h</span>
              <span className={styles.metricLabel}>Battery</span>
            </div>
          </div>
        </div>

        {/* 传感器 SVG 动画 */}
        <div className={styles.right}>
          <SensorSVG />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
