'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Landmark, Users2, CheckCircle2 } from 'lucide-react';
import { serviceCategories } from '@/data/services';
import styles from './Hero.module.css';

const FEATURES = [
  {
    icon: <BarChart3 size={22} />,
    title: 'Advanced Analytic',
    text: 'Growth, focus & analysis.',
  },
  {
    icon: <Landmark size={22} />,
    title: 'Corporate Finance',
    text: 'Strategy is the foundation.',
  },
  {
    icon: <Users2 size={22} />,
    title: 'Business Consultation',
    text: 'Professional skilled team.',
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#services-', '');
      if (serviceCategories.some((c) => c.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const active = serviceCategories.find((c) => c.id === activeId) ?? serviceCategories[0];

  return (
    <section id="services" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroTop}
        >
          <span className={styles.badge}>Tax Consultancy Firm</span>
          <h1 className={styles.title}>Zeroday Tax Consultancy</h1>
          <p className={styles.subtitle}>
            One firm for every filing, registration, and compliance need — Taxation,
            Accountancy, Corporate, Human Resource and beyond.
          </p>
        </motion.div>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                id={`services-${cat.id}`}
                type="button"
                className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ''}`}
                onClick={() => setActiveId(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.panel}
          >
            <ul className={styles.itemGrid}>
              {active.items.map((item) => (
                <li key={item} className={styles.item}>
                  <CheckCircle2 size={16} className={styles.itemIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/#contact" className={styles.primaryCta}>Get Started</Link>
          <a href="/brochure" className={styles.secondaryCta}>View Brochure</a>
        </div>
      </div>
    </section>
  );
}
