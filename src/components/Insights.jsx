import React from 'react';
import styles from './Insights.module.css';

const Asterisk = () => (
  <svg viewBox="0 0 100 100" className={styles.asterisk}>
    <path fill="currentColor" d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
    <path fill="currentColor" d="M15 15 L46 46 L85 15 L54 54 L85 85 L54 54 L15 85 L46 46 Z" />
  </svg>
);

const ARTICLES = [
  {
    type: 'image',
    src: '/assets/images/862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg', // placeholder
  },
  {
    type: 'text',
    category: 'ARCHITECTURE',
    title: 'The Architecture of Autonomy: Scaling AI Within Legacy Frameworks',
    desc: 'A comprehensive guide on integrating custom machine learning models into complex enterprise environments.',
    author: 'Damilola Manuel',
    theme: 'light'
  },
  {
    type: 'image',
    src: '/assets/images/YKAEpvQFebP2OETEJDVNip8UTg.jpeg', // placeholder
  },
  {
    type: 'text',
    category: 'TRANSFORMATION',
    title: 'The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy',
    desc: 'Explore how federated learning and private hosting are allowing firms to innovate without risking security.',
    author: 'Frank Joel',
    theme: 'dark'
  },
  {
    type: 'image',
    src: '/assets/images/egDVD5dc2AvUIZKG0seuGXtH0.jpeg', // placeholder
  },
  {
    type: 'text',
    category: 'PRIVACY',
    title: 'Human-Centric Automation: Designing AI That Empowers Your Workforce',
    desc: 'Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it.',
    author: 'Deborah Reachie',
    theme: 'light'
  }
];

export default function Insights() {
  return (
    <section className={styles.insightsSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className={styles.marqueeText}>Insights</span>
              <Asterisk />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {ARTICLES.map((item, idx) => {
            if (item.type === 'image') {
              return (
                <div key={idx} className={styles.imageCard}>
                  <img src={item.src} alt="Article visual" className={styles.image} />
                </div>
              );
            }
            
            const isDark = item.theme === 'dark';
            return (
              <div key={idx} className={`${styles.textCard} ${isDark ? styles.darkCard : styles.lightCard}`}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
                
                <div className={styles.cardBottom}>
                  <div className={styles.authorWrapper}>
                    <span className={styles.authorLabel}>Written by</span>
                    <span className={styles.authorName}>{item.author}</span>
                  </div>
                  <button className={styles.readBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
