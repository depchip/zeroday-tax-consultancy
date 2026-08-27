import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Target,
  Rocket,
  FileText,
  Scale,
  Landmark,
  BriefcaseBusiness,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Award,
  Users,
  Building2,
  Mail,
  MapPin,
  ChevronRight,
  Car,
  Plane,
  GraduationCap,
  Wrench,
  Heart,
  Monitor,
  Truck,
  Factory,
  Tv,
  Fuel,
  Shirt,
  ArrowLeftRight,
  ShoppingCart,
} from 'lucide-react';
import styles from './company-profile.module.css';

export const metadata: Metadata = {
  title: 'Company Profile | Zeroday Tax Consultancy',
  description:
    'Zeroday Tax Consultancy company profile — excellence in tax, corporate, accounting, and management consultancy services in Pakistan.',
};

const CONSULTING_AREAS = [
  {
    icon: <FileText size={28} />,
    title: 'Tax Filing',
    text: 'Expert guidance on all aspects of tax filing, ensuring a smooth and efficient process that minimizes liabilities and ensures compliance with the latest tax laws.',
    anchor: 'tax-filing',
  },
  {
    icon: <Scale size={28} />,
    title: 'Tax Compliance & Litigation',
    text: 'Helping businesses navigate complex tax regulations, providing robust support in compliance and managing tax-related disputes and litigation effectively.',
    anchor: 'tax-compliance',
  },
  {
    icon: <Landmark size={28} />,
    title: 'Corporate & Secretarial',
    text: 'Assisting companies in corporate structuring, governance, and compliance — optimizing operations, protecting shareholder interests, and facilitating successful transactions.',
    anchor: 'corporate',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Financial Advisory',
    text: 'Providing insights into financial planning, investment strategies, and overall financial health to help businesses make informed decisions.',
    anchor: 'financial',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Specialized Consulting',
    text: 'Tailored solutions in risk management, strategic planning, mergers & acquisitions, and market entry strategies with a customized approach.',
    anchor: 'specialized',
  },
];

const SERVICE_DETAILS = [
  {
    id: 'tax-filing',
    icon: <FileText size={32} />,
    title: 'Tax Filing',
    description:
      'We specialize in providing comprehensive tax filing consulting tailored to your business. Our team ensures a smooth and efficient filing process, minimizing tax liabilities while guaranteeing full compliance. With extensive knowledge of tax legislation, we offer strategic advice to help you take advantage of opportunities presented by local tax laws and treaties.',
    capabilities: [
      { heading: 'Tax Registrations', items: ['NTN Registration', 'General Sales Tax Registration (GST)', 'Provincial Service ST Registration (SST)'] },
      { heading: 'Tax Advisory', items: ['Tax Planning & Strategy', 'Tax Consultancy', 'Tax Management'] },
      { heading: 'Tax Returns & Statements', items: ['Individuals & AOPs Annual Income Tax Return', 'Companies Annual Return of Income', 'Withholding Tax Statements (WHTS) Filing', 'Monthly GST & SST Return Filing'] },
    ],
  },
  {
    id: 'tax-compliance',
    icon: <Scale size={32} />,
    title: 'Tax Compliance & Litigation',
    description:
      'We have built a strong reputation for expertise in tax compliance and litigation consulting. Our dedicated team handles all aspects of tax compliance, ensuring your business adheres to the latest regulations. We offer robust support in tax audits and have a proven track record in managing tax-related disputes.',
    capabilities: [
      { heading: 'Income & Sales Tax Audit', items: ['Tax Audit Support', 'Income Tax Refund Claims', 'Sales Tax Refund Claims'] },
      { heading: 'Monitoring of Withholding', items: ['Withholding Tax Compliance', 'Monthly Monitoring & Reporting'] },
      { heading: 'Litigations', items: ['Appeal Proceedings', 'Tribunal Filing', 'SECP Notice & Showcause Reply'] },
    ],
  },
  {
    id: 'corporate',
    icon: <Landmark size={32} />,
    title: 'Corporate & Secretarial Services',
    description:
      'Our corporate consulting services help businesses navigate the complexities of corporate governance and compliance. We offer expert guidance on company incorporation, structuring, and regulatory compliance, ensuring your business meets all legal and statutory requirements.',
    capabilities: [
      { heading: 'Company Registration', items: ['Company Incorporation (Private / SMC / Public / Foreign / LLP)', 'Form A Filing', 'Partnership Deed Registration'] },
      { heading: 'Statutory Affairs', items: ['Appointment of CEO / Director / Auditor / CFO', 'Enhancement of Authorized & Paid-up Capital', 'Ultimate Beneficial Ownership (UBO)'] },
      { heading: 'Compliance & Filings', items: ['Statutory Forms Filing', 'Transfer of Shares Documents', 'WPPF / Provident Fund / Gratuity Fund Registration'] },
      { heading: 'Other Services', items: ['Company Windup in SECP', 'Corporate Outsourcing', 'Scheme of Amalgamation Filing'] },
    ],
  },
  {
    id: 'financial',
    icon: <TrendingUp size={32} />,
    title: 'Financial Advisory',
    description:
      'Our Financial Advisory services help businesses make informed financial decisions. We provide expert advice on financial planning, budgeting, and investment strategies, enabling clients to optimize financial performance and ensure sustainable growth.',
    capabilities: [
      { heading: 'Financial Reporting', items: ['Annual Financial Statements (Balance Sheet, P&L, Cash Flow)', 'Feasibility Reporting'] },
      { heading: 'Management Reporting', items: ['Annual, Semi-Annual & Quarterly Reporting', 'Budgeting', 'GAP Analysis'] },
      { heading: 'Internal Audit', items: ['Internal Audit', 'Financial Advisory', 'Risk Assessment'] },
      { heading: 'Financial Software', items: ['ERP Implementation', 'Accounting & Bookkeeping', 'Digital Tool Integration'] },
    ],
  },
  {
    id: 'specialized',
    icon: <Lightbulb size={32} />,
    title: 'Specialized Consulting',
    description:
      'Our Specialized Consulting services address the unique needs of our clients. We understand that every business faces distinct challenges, which is why we offer tailored solutions across various industries.',
    capabilities: [
      { heading: 'Legal & IP', items: ['Trademark & Copyright', 'IPO Services (Intellectual Property)', 'Contract & Agreement Drafting', 'Gift Deed Preparation'] },
      { heading: 'Registrations', items: ['NGO / NPO Registration', 'Trust Deed Registration', 'Society Registration', 'Joint Venture Registration'] },
      { heading: 'Licenses & Compliance', items: ['PPRA Registration', 'PSEB Registration', 'KCCI Registration', 'Domestic Tourist Licence & Renewal'] },
      { heading: 'HR Services', items: ['Recruitment & Selection', 'Payroll Management', 'EOBI / SESSI Registration & Compliances', 'HR Outsourcing'] },
    ],
  },
];

const INDUSTRIES = [
  { icon: <Car size={22} />, name: 'Automotive' },
  { icon: <Plane size={22} />, name: 'Aviation' },
  { icon: <Building2 size={22} />, name: 'Banking' },
  { icon: <Wrench size={22} />, name: 'Construction' },
  { icon: <GraduationCap size={22} />, name: 'Educational' },
  { icon: <Wrench size={22} />, name: 'Engineering' },
  { icon: <ShoppingCart size={22} />, name: 'FMCGs' },
  { icon: <Heart size={22} />, name: 'Healthcare' },
  { icon: <Monitor size={22} />, name: 'IT' },
  { icon: <Truck size={22} />, name: 'Logistics' },
  { icon: <Factory size={22} />, name: 'Manufacturing' },
  { icon: <Tv size={22} />, name: 'Media' },
  { icon: <Fuel size={22} />, name: 'Oil / Gas / Power' },
  { icon: <Shirt size={22} />, name: 'Textiles' },
  { icon: <ArrowLeftRight size={22} />, name: 'Trading' },
];

const ACCREDITATIONS = [
  {
    abbr: 'ACCA',
    full: 'Association of Chartered Certified Accountants',
    detail: 'Approved Employer — Trainee Development Platinum',
  },
  {
    abbr: 'ICMA',
    full: 'Institute of Cost & Management Accountants of Pakistan',
    detail: 'Authorized Corporate Partner & Registered Employer',
  },
  {
    abbr: 'FBR',
    full: 'Federal Board of Revenue',
    detail: 'Authorized Income Tax Practitioner',
  },
  {
    abbr: 'SHCBA',
    full: 'Sindh High Court Bar Association',
    detail: 'Recognized member of Karachi & Sindh Bar Councils',
  },
  {
    abbr: 'ISO',
    full: 'ISO 9001:2015 Certified',
    detail: 'Quality Management System certification',
  },
];

export default function CompanyProfilePage() {
  return (
    <div className={styles.profile}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoBlock}>
            <Shield size={44} />
            <h1>Zeroday Tax Consultancy</h1>
          </div>
          <p className={styles.tagline}>Fueling Your Growth</p>
          <p className={styles.categories}>
            Taxation &nbsp;|&nbsp; Financial Advisory &nbsp;|&nbsp; Corporate &nbsp;|&nbsp; Consultancy
          </p>
          <div className={styles.heroCtas}>
            <Link href="/#contact" className={styles.primaryBtn}>
              Get in Touch
            </Link>
            <a href="/downloads/zeroday-brochure.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              View Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Rocket size={28} />
              </div>
              <h2>Vision</h2>
              <blockquote>
                &ldquo;We strive to set the Standard of Excellence, becoming the top choice for the
                most esteemed clients and talent.&rdquo;
              </blockquote>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Target size={28} />
              </div>
              <h2>Mission</h2>
              <blockquote>
                &ldquo;Build & train a team of exceptional people in our firm so they can help our clients thrive in
                their performance.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Zeroday Tax Consultancy</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                <strong>Zeroday Tax Consultancy</strong> is a tale of entrepreneurship, shared values, and a commitment
                to excellence. Our firm provides top-tier consultancy services in Tax, Corporate and Secretarial
                Services, Accounting, Bookkeeping, Audit, Specialized Consulting and other management domains.
              </p>
              <p>
                We have built a deep understanding of local businesses and the unique Pakistani business landscape. In
                response to the evolving digital economy, we have embraced technological advancements, investing in
                digital tools and platforms to ensure our clients stay ahead.
              </p>
              <p>
                Our Tax filing and compliance units have gained multidisciplinary expertise, setting us apart as one of
                the few firms with such a comprehensive approach. Our team includes highly qualified professionals —{' '}
                <strong>CAs, ACCAs, ICMAs, MBAs, LLBs</strong> and other technically skilled experts.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.statCard}>
                <Award size={28} />
                <span className={styles.statValue}>1000+</span>
                <span className={styles.statLabel}>Clients Served</span>
              </div>
              <div className={styles.statCard}>
                <Users size={28} />
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statCard}>
                <BriefcaseBusiness size={28} />
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statCard}>
                <Building2 size={28} />
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Industries Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className={styles.accreditations}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Accreditations</h2>
          <p className={styles.sectionSubtext}>
            We pride ourselves on maintaining the highest standards of professionalism and expertise.
          </p>
          <div className={styles.accredGrid}>
            {ACCREDITATIONS.map((a) => (
              <div key={a.abbr} className={styles.accredCard}>
                <span className={styles.accredAbbr}>{a.abbr}</span>
                <span className={styles.accredFull}>{a.full}</span>
                <span className={styles.accredDetail}>{a.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Consulting Overview</h2>
          <p className={styles.sectionSubtext}>
            We offer a comprehensive range of consulting services designed to meet the diverse needs of our clients
            across five key areas.
          </p>
          <div className={styles.overviewGrid}>
            {CONSULTING_AREAS.map((area) => (
              <a key={area.title} href={`#${area.anchor}`} className={styles.overviewCard}>
                <div className={styles.overviewIcon}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <span className={styles.overviewLink}>
                  Learn More <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {SERVICE_DETAILS.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`${styles.serviceDetail} ${idx % 2 === 0 ? styles.serviceDetailAlt : ''}`}
        >
          <div className={styles.container}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>{svc.icon}</div>
              <h2>{svc.title}</h2>
            </div>
            <p className={styles.serviceDesc}>{svc.description}</p>
            <div className={styles.capGrid}>
              {svc.capabilities.map((cap) => (
                <div key={cap.heading} className={styles.capCard}>
                  <h4>{cap.heading}</h4>
                  <ul>
                    {cap.items.map((item) => (
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
      ))}

      {/* Industries */}
      <section className={styles.industries}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Key Industries We Serve</h2>
          <div className={styles.industryGrid}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className={styles.industryChip}>
                {ind.icon}
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactCta}>
        <div className={styles.container}>
          <h2>Ready to fuel your growth?</h2>
          <p>Reach out to discuss how we can help your business thrive.</p>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <MapPin size={20} />
              <span>Karachi, Pakistan</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <span>hello@zeroday-tax-consultancy.com</span>
            </div>
          </div>
          <Link href="/#contact" className={styles.primaryBtn}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
