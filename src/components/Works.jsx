import React from 'react';
import styles from './Works.module.css';

const WORKS_DATA = [
  {
    id: 1,
    badge: 'HEALTHCARE AI',
    logo: '/assets/images/3EwtMm1CTn3V13Xu2ufZVUnW4.png',
    stats: [
      { value: '$45M+', label: 'Funds raised' },
      { value: '700%', label: 'Social growth' },
      { value: '41x', label: 'ATH ROI' },
      { value: '84', label: 'Partnerships' }
    ]
  },
  {
    id: 2,
    badge: 'HEALTHCARE',
    logo: '/assets/images/pEct5trUmjDYAblzuKYq2MpHaA.png',
    stats: [
      { value: '$62M+', label: 'Funds raised' },
      { value: '450%', label: 'Social growth' },
      { value: '32x', label: 'ATH ROI' },
      { value: '91', label: 'Partnerships' }
    ]
  },
  {
    id: 3,
    badge: 'HEALTHCARE',
    logo: '/assets/images/8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png',
    stats: [
      { value: '$82M+', label: 'Funds raised' },
      { value: '340%', label: 'Social growth' },
      { value: '19x', label: 'ATH ROI' },
      { value: '56', label: 'Partnerships' }
    ]
  },
  {
    id: 4,
    badge: 'RETAIL & LOGISTICS',
    logo: '/assets/images/3ICxPpL7nA6WiDyreZSZlU70E8.png',
    stats: [
      { value: '$59M+', label: 'Funds raised' },
      { value: '215%', label: 'Social growth' },
      { value: '73x', label: 'ATH ROI' },
      { value: '28', label: 'Partnerships' }
    ]
  },
  {
    id: 5,
    badge: 'CYBERSECURITY',
    logo: '/assets/images/qWpzthqQ4FGQWP39IeKgah1OP8.png',
    stats: [
      { value: '$94M+', label: 'Funds raised' },
      { value: '120%', label: 'Social growth' },
      { value: '66x', label: 'ATH ROI' },
      { value: '12', label: 'Partnerships' }
    ]
  }
];

export default function Works() {
  return (
    <section className={styles.worksSection}>
      <div className={styles.worksMarqueeContainer}>
        <div className={styles.worksMarquee}>
          <span>Our Works</span>
          <span className={styles.asterisk}>*</span>
          <span>Our Works</span>
          <span className={styles.asterisk}>*</span>
          <span>Our Works</span>
          <span className={styles.asterisk}>*</span>
        </div>
      </div>
      
      <div className={styles.worksGrid}>
        {WORKS_DATA.map((work) => (
          <div key={work.id} className={styles.workCard}>
            <div className={styles.cardTop}>
              <span className={styles.badge}>{work.badge}</span>
              <img src={work.logo} alt="Company Logo" className={styles.companyLogo} />
            </div>
            <div className={styles.cardBottom}>
              {work.stats.map((stat, i) => (
                <div key={i} className={styles.statBox}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
