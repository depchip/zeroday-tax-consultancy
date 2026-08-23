import { Sparkles, Lock, HeartHandshake } from 'lucide-react';
import styles from './WhyUs.module.css';

const BLOCKS = [
  {
    icon: <Sparkles size={28} />,
    title: 'Specialized Skills',
    text: 'Our deep understanding of income tax, sales tax, services tax laws and compliances services help us to provide distinguished services to our clients. We have innovative and efficient ways of performing our work in tax consultancy, accounting services and corporate affairs.',
  },
  {
    icon: <Lock size={28} />,
    title: 'Confidentiality',
    text: "Most of our work involves dealing with privileged and sensitive information. From NTN registration to income tax return filing turnover we prioritized safeguarding all levels of confidential data. In the process we earn the trust of our client and cultivate long term relations.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Client Satisfaction',
    text: "Our team works with the aim of client satisfaction at heart. All of our work is focused on maintaining the utmost level of client satisfaction. We cater each client individually and provide solutions to their tax, accountancy and corporate concerns.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Zeroday Tax Consultancy</h2>
        </div>
        <div className={styles.grid}>
          {BLOCKS.map((block) => (
            <div key={block.title} className={styles.block}>
              <div className={styles.icon}>{block.icon}</div>
              <h3 className={styles.blockTitle}>{block.title}</h3>
              <p className={styles.blockText}>{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
