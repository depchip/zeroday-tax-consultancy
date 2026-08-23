'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Faq.module.css';

const FAQS = [
  {
    q: 'How can I initiate a working relationship with Zeroday Tax Consultancy?',
    a: 'We welcome prospective clients to schedule a complimentary initial consultation. During this session, we assess your specific business and financial requirements and explain how our services can be aligned to support your goals effectively.',
  },
  {
    q: 'What services does Zeroday Tax Consultancy offer, and how can they benefit me?',
    a: 'At Zeroday Tax Consultancy, we provide comprehensive management consultancy services tailored to your business objectives. Our team works closely with you to devise strategic solutions, manage financial affairs, and monitor ongoing progress—guiding you toward long-term growth, financial stability, and independence.',
  },
  {
    q: 'Why is FBR registration important?',
    a: 'Registering with the Federal Board of Revenue (FBR) ensures legal compliance and offers financial advantages, including reduced tax liabilities on property transactions, vehicle registration, and other taxable activities. It also enhances your credibility in the business ecosystem.',
  },
  {
    q: 'What is the typical duration of an audit engagement?',
    a: "The timeframe for completing an audit varies depending on the organization's size, complexity, and the robustness of its internal controls. While some audits may be finalized within a few weeks, others may require several months. The audit scope may evolve during the process as new insights emerge.",
  },
  {
    q: 'How much involvement is required from our team during an audit?',
    a: 'Your organization will designate a primary liaison who will coordinate the audit process, assist in defining the scope, provide documentation, and facilitate discussions. Additionally, our team may meet with other key personnel to gain insights into your business processes. The extent of involvement depends on the complexity of your operations.',
  },
  {
    q: 'What elements should be included in my Profit and Loss (P&L) statement?',
    a: 'A comprehensive P&L statement should include the following categories: 1. Revenue (Sales/Income) 2. Cost of Goods Sold (COGS) 3. Direct and Indirect Labor Costs 4. Operating Expenses (e.g., Rent, Utilities, Marketing)',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Your questions, our expert answers!</h2>

        <div className={styles.list}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                </button>
                <div className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
