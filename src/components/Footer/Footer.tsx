import Link from 'next/link';
import { Shield, MapPin, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedInIcon } from './SocialIcons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>
              <Shield size={24} />
              <span>Zeroday <span className={styles.logoSpan}>Tax Consultancy</span></span>
            </div>
            <p>
              Premium tax, corporate, accounting and HR consultancy services for
              individuals and businesses across Pakistan.
            </p>
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                <FacebookIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
                <TwitterIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link href="/#about" className={styles.link}>About</Link></li>
              <li><Link href="/career" className={styles.link}>Career</Link></li>
              <li><Link href="/company-profile" className={styles.link}>Company Profile</Link></li>
              <li><a href="/downloads/zeroday-brochure.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Services Brochure</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Accreditation</h3>
            <ul className={styles.links}>
              <li className={styles.link}>ACCA</li>
              <li className={styles.link}>ICMA</li>
              <li className={styles.link}>FBR</li>
              <li className={styles.link}>High Court Bar Council</li>
              <li className={styles.link}>Karachi Bar Council</li>
              <li className={styles.link}>ISO 9001:2015</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Downloads</h3>
            <ul className={styles.links}>
              <li><a href="/downloads/business-return-requirements-2020-2025.pdf" className={styles.link}>Business Return Requirement List 2020-2025</a></li>
              <li><a href="/downloads/business-return-requirements-2025.pdf" className={styles.link}>Business Return Requirement List 2025</a></li>
              <li><a href="/downloads/salary-return-requirements-2020-2025.pdf" className={styles.link}>Salary Return Requirement List 2020-2025</a></li>
              <li><a href="/downloads/salary-return-requirements-2025.pdf" className={styles.link}>Salary Return Requirement List 2025</a></li>
              <li><a href="/downloads/budget-brief.pdf" className={styles.link}>Budget Brief 2026-27</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Contact</h3>
            <ul className={styles.links}>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>Karachi, Pakistan</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} />
                <span>hello@zeroday-tax-consultancy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright © {new Date().getFullYear()} Zeroday Tax Consultancy. All Rights Reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
