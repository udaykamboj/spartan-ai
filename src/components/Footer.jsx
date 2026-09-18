import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      {/* Background Image layer */}
      <div className={styles.backgroundLayer}>
        <img src="/assets/images/ZK0k9kMGgE21P7r3puSMYZ8548.jpg" alt="Footer background" className={styles.bgImage} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}></div>
              <h2 className={styles.logoText}>spartan</h2>
            </div>
            
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultrices massa. Vivamus faucibus egestas nulla
            </p>
            
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="jane@framer.com" className={styles.input} />
              <button type="submit" className={styles.subscribeBtn}>
                <div className={styles.btnIcon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                Subscribe
              </button>
            </form>
            
            <div className={styles.socials}>
              <span className={styles.socialLabel}>FOLLOW US:</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeader}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Company</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeader}>Company</h4>
              <ul className={styles.linkList}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Book A Call</a></li>
                <li><a href="#">More Templates</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeader}>Policies</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <h1 className={styles.hugeText}>spartan</h1>
        </div>
      </div>
    </footer>
  );
}
