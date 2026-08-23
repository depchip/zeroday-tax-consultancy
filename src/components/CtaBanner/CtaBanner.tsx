'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './CtaBanner.module.css';

const STATS = [
  { label: 'Trusted Clients', value: 1000 },
  { label: 'Finished Projects', value: 500 },
  { label: 'Years of Experience', value: 15 },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatBlock({ label, value, active }: { label: string; value: number; active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{count}+</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function CtaBanner() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Looking for a First-Class Tax Consultancy Firm?</h2>
        <p className={styles.text}>
          We welcome and celebrate different perspectives to help our firm, our clients and our people.
        </p>
        <Link href="/#contact" className={styles.cta}>Get in Touch</Link>

        <div className={styles.stats}>
          {STATS.map((stat) => (
            <StatBlock key={stat.label} label={stat.label} value={stat.value} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
