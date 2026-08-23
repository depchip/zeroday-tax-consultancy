import Link from 'next/link';
import styles from './ComingSoon.module.css';

export default function ComingSoon({ title, text }: { title: string; text: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>Coming Soon</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <Link href="/#contact" className={styles.cta}>Contact Us Instead</Link>
      </div>
    </section>
  );
}
