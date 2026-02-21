'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟提交
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-desc">Questions, partnerships, or technical support — we're here.</p>
        </div>

        <div className={styles.grid}>
          {/* 左侧联系信息 */}
          <div className={`${styles.info} animate-on-scroll`}>
            <div className={styles.infoItem}>
              <span className={styles.infoTag}>LOCATION</span>
              <div>
                <h4>Headquarters</h4>
                <p>Tech Park, Shenzhen, China</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoTag}>EMAIL</span>
              <div>
                <h4>General Inquiries</h4>
                <p>info@didi.bike</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoTag}>BUSINESS</span>
              <div>
                <h4>Business Development</h4>
                <p>partners@didi.bike</p>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <form className={`glass-card ${styles.form} animate-on-scroll delay-1`} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required className={styles.input} />
            <input type="email" placeholder="Email" required className={styles.input} />
            <select className={styles.input} defaultValue="">
              <option value="" disabled>Select Inquiry Type</option>
              <option value="general">General Inquiry</option>
              <option value="business">Business Partnership</option>
              <option value="technical">Technical Support</option>
              <option value="press">Press & Media</option>
            </select>
            <textarea placeholder="Message" rows={5} required className={styles.input} />
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={submitted}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
