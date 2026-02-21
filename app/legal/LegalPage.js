import Link from 'next/link';
import styles from './legal.module.css';

/**
 * 法律页面通用布局组件
 * @param {{ title: string, children: React.ReactNode }} props
 */
export default function LegalPage({ title, children }) {
  return (
    <main className={styles.legal}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </main>
  );
}
