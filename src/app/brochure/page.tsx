import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Target, Rocket, Heart, Phone, Mail, CheckCircle2, MapPin } from 'lucide-react';
import styles from './brochure.module.css';

export const metadata: Metadata = {
  title: 'Brochure | Zeroday Tax Consultancy',
  description: 'Zeroday Tax Consultancy — Fueling Your Growth. Comprehensive tax, accountancy, corporate and consultancy services.',
};

const PILLARS = [
  {
    icon: <Target size={28} />,
    number: '01',
    label: 'Mission',
    text: 'Build & train a team of exceptional people in our firm so they can help our clients thrive in their performance.',
  },
  {
    icon: <Rocket size={28} />,
    number: '02',
    label: 'Vision',
    text: 'We strive to set the Standard of Excellence, becoming the top choice for the most esteemed clients and talent.',
  },
  {
    icon: <Heart size={28} />,
    number: '03',
    label: 'Values',
    text: 'Integrity, Client-Centricity, Professional Mastery, Confidentiality, Collaboration, Responsibility and Growth Mindset.',
  },
];

const SERVICES = [
  {
    category: 'Taxation',
    items: [
      'Tax Registration',
      'Income Tax Return (ITR) Filing',
      'Withholding Tax Statements Filing',
      'Monthly Sales Tax Return Filing',
      'Monthly SST Return Filing',
      'Tax Consultancy',
      'Tax Management',
      'Tax Notices Reply',
      'Monitoring of Withholding Taxes',
      'Tax Audit',
      'Income Tax Refund',
      'Sales Tax Refund',
      'Appeal Filing',
      'Tribunal Appeal Filing',
    ],
  },
  {
    category: 'Accountancy',
    items: [
      'Accounting & Book Keeping',
      'Feasibility Reporting',
      'Preparation & Review of Annual Financial Statements',
      'Management Reporting (Annually, Semi-Annually & Quarterly)',
      'Internal Audit',
      'GAAP Analysis',
      'Budgeting',
      'Financial Advisory',
      'ERP Implementation',
    ],
  },
  {
    category: 'Corporate',
    items: [
      'Company Incorporation',
      'Annual Form Filing',
      'Statutory Forms Filing',
      'Appointment of CEO / Director / Auditor',
      'Change in Principal Business Activity',
      'Enhancement of Authorized Capital',
      'Enhancement of Paid-up Capital',
      'Ultimate Beneficial Ownership (UBO)',
      'Transfer of Shares Documents Filing',
      'Change of Registration & Updates',
      'SECP Notice & Showcause Reply',
      'Company Windup in SECP',
      'WPPF Registration & Compliances',
      'Corporate Outsourcing',
    ],
  },
  {
    category: 'Legal Advisory',
    items: [
      'Trademark Copyright',
      'Intellectual Property Organization',
      'NGO / NPO Registration',
      'Partnership Deed Registration',
      'Trust Deed Registration',
      'Society Registration',
      'Joint Venture Registration',
      'Contract & Agreement Drafting',
      'Gift Deed Preparation',
      'PPRA Registration',
      'PSEB Registration',
      'License & Renewal',
      'PF Registration & Compliances',
      'Gratuity Fund Registration & Compliances',
      'KCCI Registration',
    ],
  },
];

const ACCREDITATIONS = ['ACCA', 'ICMA', 'FBR', 'High Court Bar Council', 'Karachi Bar Council', 'ISO 9001:2015'];

export default function BrochurePage() {
  return (
    <div className={styles.brochure}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoBlock}>
            <Shield size={40} />
            <h1>Zeroday Tax Consultancy</h1>
          </div>
          <p className={styles.tagline}>Fueling Your Growth</p>
          <p className={styles.categories}>Taxation &nbsp;|&nbsp; Accountancy &nbsp;|&nbsp; Corporate &nbsp;|&nbsp; Consultancy</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.aboutText}>
            <strong>Zeroday Tax Consultancy</strong> provides comprehensive consulting services
            across <strong>taxation</strong>, <strong>corporate</strong> and <strong>secretarial compliance</strong>,{' '}
            <strong>auditing</strong>, and <strong>management</strong>. The firm employs advanced digital tools and
            maintains a multidisciplinary tax and compliance practice staffed by chartered accountants, ACCAs, ICMAs,
            MBAs, LLBs, and other experts to deliver tailored solutions aligned with the needs of Pakistan&apos;s
            business environment.
          </p>
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.container}>
          <div className={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <div key={p.label} className={styles.pillarCard}>
                <span className={styles.pillarNumber}>{p.number}</span>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3>{p.label}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.accreditations}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Accreditations</h2>
          <p className={styles.accredText}>
            We pride ourselves on maintaining the highest standards of professionalism and expertise.
          </p>
          <div className={styles.accredGrid}>
            {ACCREDITATIONS.map((a) => (
              <span key={a} className={styles.accredBadge}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.serviceGrid}>
            {SERVICES.map((group) => (
              <div key={group.category} className={styles.serviceColumn}>
                <h3 className={styles.serviceCategory}>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <MapPin size={20} />
              <span>Karachi, Pakistan</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={20} />
              <span>+92 300 1234567</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <span>info@zerodaytax.pk</span>
            </div>
          </div>
          <Link href="/#contact" className={styles.downloadBtn}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
