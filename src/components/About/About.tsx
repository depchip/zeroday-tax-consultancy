import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>About Zeroday Tax Consultancy</h2>
            <p className={styles.text}>
              The aim of providing consultancy services in the fields of Tax, Corporate,
              Accounting, Bookkeeping, Audit, HR and other management consultancy services
              to clients. The firm has provided consultancy services to 1000+ clients and
              prides itself in being client&apos;s first choice to fulfill their business
              needs. We work with a wide range of clients – from local businesses to large
              corporate companies and global organizations.
            </p>
            <Link href="/#contact" className={styles.cta}>About Us</Link>
          </div>
          <div className={styles.graphic}>
            <ShieldCheck size={72} className={styles.graphicIcon} />
            <h3>1000+ Clients Served</h3>
            <p>Trusted for accuracy, confidentiality and consistent compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
