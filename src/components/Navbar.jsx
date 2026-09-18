import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        {/* Left: logo + links */}
        <div className={styles.navLeft}>
          {/* Spartan logo — framer-bgd74x: 60×34px */}
          <a href="#" className={styles.navLogo} aria-label="Spartan AI Home">
            <svg width="37" height="15" viewBox="0 0 37 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36.9388" height="15" rx="7.5" fill="#1a1a1a"/>
              <path d="M12.2891 10.9701V11C12.2891 12.9238 10.7293 14.4836 8.80556 14.4836C6.88179 14.4836 5.32202 12.9238 5.32202 11V3.99998H12.2891V10.9701Z" fill="white"/>
            </svg>
          </a>

          {/* Nav links — framer-1gkesmg: gap:0, each link: padding 7px 16px, opacity:0.65 */}
          <div className={styles.navLinks}>
            <a href="#works"    className={styles.navLink}>Works</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#insights" className={styles.navLink}>Insights</a>
            <a href="#pricing"  className={styles.navLink}>Pricing</a>
            <a href="#company"  className={styles.navLink}>Company</a>
          </div>
        </div>

        {/* CTA "Hire Team" — Secondary small variant
            bg white, border 1px solid rgba(26,26,26,0.1), border-radius 12px
            icon box: dark bg (#1f1f1f), radius 10px, 40×36 */}
        <a href="#contact" className={styles.navCta}>
          <span className={styles.navCtaIcon}>
            {/* White pill logo on dark bg — exact SVG from reference */}
            <svg width="22" height="9" viewBox="0 0 37 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36.9388" height="15" rx="7.5" fill="white"/>
              <path d="M12.2891 10.9701V11C12.2891 12.9238 10.7293 14.4836 8.80556 14.4836C6.88179 14.4836 5.32202 12.9238 5.32202 11V3.99998H12.2891V10.9701Z" fill="#1f1f1f"/>
            </svg>
          </span>
          <span className={styles.navCtaText}>Hire Team</span>
        </a>
      </div>
    </nav>
  );
}
