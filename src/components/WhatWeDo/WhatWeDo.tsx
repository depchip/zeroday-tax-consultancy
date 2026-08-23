import Link from 'next/link';
import { Landmark, Calculator, Building2, Users } from 'lucide-react';
import styles from './WhatWeDo.module.css';

const CARDS = [
  {
    number: '01',
    icon: <Landmark size={26} />,
    title: 'Taxation',
    text: 'We provide the best tax consultancy services to devise effective tax planning and trim down on tax exposure.',
    href: '/#services-taxation',
  },
  {
    number: '02',
    icon: <Calculator size={26} />,
    title: 'Accountancy',
    text: 'Quality bookkeeping and accounting is a crucial part of a business. Our accountancy department uses a wide range of tools, software to make it a hassle-free process.',
    href: '/#services-accountancy',
  },
  {
    number: '03',
    icon: <Building2 size={26} />,
    title: 'Corporate',
    text: 'Our corporate department is uniquely equipped to cater to the statutory affairs of our clients. We provide creative corporate solutions.',
    href: '/#services-corporate',
  },
  {
    number: '04',
    icon: <Users size={26} />,
    title: 'Human Resource',
    text: 'We provide best HR practices and solutions to ensure the proper functioning of the core competencies.',
    href: '/#services-hr',
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What We Do For You</h2>
        </div>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.number} className={styles.card}>
              <span className={styles.number}>{card.number}</span>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
              <Link href={card.href} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
