'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown, Menu, X, FileText, BookOpen } from 'lucide-react';
import { serviceCategories } from '@/data/services';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Shield size={30} />
          <span>
            Zeroday <span className={styles.logoSpan}>Tax Consultancy</span>
          </span>
        </Link>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/#about" className={styles.navLink} onClick={closeAll}>
            About Us
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={styles.navLink}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown size={16} />
            </button>
            <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ''}`}>
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/#services-${cat.id}`}
                  className={styles.dropdownItem}
                  onClick={closeAll}
                >
                  {cat.label === 'Taxation' && 'Tax Consultancy Services'}
                  {cat.label === 'Accountancy' && 'Accounting And Audit Services'}
                  {cat.label === 'Corporate' && 'Corporate Services'}
                  {cat.label === 'Human Resource' && 'Human Resource Services'}
                  {cat.label === 'Others' && 'Other Services'}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/career" className={styles.navLink} onClick={closeAll}>
            Career
          </Link>
          <Link href="/#contact" className={styles.navLink} onClick={closeAll}>
            Contacts
          </Link>
          <Link href="/blog" className={styles.navLink} onClick={closeAll}>
            Blog
          </Link>
          <Link href="/events" className={styles.navLink} onClick={closeAll}>
            Events
          </Link>
          <Link href="/faas" className={styles.navLink} onClick={closeAll}>
            FaaS
          </Link>

          <div className={styles.mobileActions}>
            <Link href="/company-profile" className={styles.ghostButton} onClick={closeAll}>
              <FileText size={16} /> Company Profile
            </Link>
            <Link href="/brochure" className={styles.ctaButton} onClick={closeAll}>
              <BookOpen size={16} /> Brochure
            </Link>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <Link href="/company-profile" className={styles.ghostButton}>
            Company Profile
          </Link>
          <Link href="/brochure" className={styles.ctaButton}>
            Brochure
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}
