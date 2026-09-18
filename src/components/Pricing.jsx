import React, { useState } from 'react';
import styles from './Pricing.module.css';

const PRICING_PLANS = [
  {
    name: 'Core',
    price: { monthly: 618, annually: 494 },
    desc: 'Automate your\nrepetitive tasks.',
    features: [
      '3 Automation Flows',
      'Standard RAG Support',
      '1 Admin Seat',
      'Discord Support'
    ],
    theme: 'light'
  },
  {
    name: 'Growth',
    price: { monthly: 1570, annually: 1256 },
    desc: 'Advanced agentic\nworkflows.',
    features: [
      '10 Automation Flows',
      'Vector DB Hosting',
      '5 Admin Seats',
      'Priority Email'
    ],
    theme: 'light'
  },
  {
    name: 'Pro',
    price: { monthly: 3650, annually: 2920 },
    desc: 'Custom neural\narchitecture.',
    features: [
      'Unlimited Flows',
      'Custom Fine-Tuning',
      '15 Admin Seats',
      '24/7 Slack Connect'
    ],
    theme: 'dark'
  },
  {
    name: 'Scale',
    price: { monthly: 9380, annually: 7504 },
    desc: 'Enterprise\ninfrastructure.',
    features: [
      'Full Neural Stack',
      'On-Premise LLMs',
      'Unlimited Seats',
      'Dedicated Engineer'
    ],
    theme: 'light'
  }
];

const Asterisk = () => (
  <svg viewBox="0 0 100 100" className={styles.asterisk}>
    <path fill="currentColor" d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
    <path fill="currentColor" d="M15 15 L46 46 L85 15 L54 54 L85 85 L54 54 L15 85 L46 46 Z" />
  </svg>
);

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={styles.pricingSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className={styles.marqueeText}>Pricing</span>
              <Asterisk />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.toggleWrapper}>
          <span className={`${styles.toggleLabel} ${!isAnnual ? styles.active : ''}`}>Monthly</span>
          <button 
            className={`${styles.toggleBtn} ${isAnnual ? styles.toggled : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div className={styles.toggleThumb}></div>
          </button>
          <span className={`${styles.toggleLabel} ${isAnnual ? styles.active : ''}`}>
            Annually <span className={styles.badge}>(Save 20%)</span>
          </span>
        </div>
        
        <p className={styles.description}>
          Flexible intelligence tiers designed to scale alongside<br />
          your business. No hidden costs, just high-<br />
          performance results.
        </p>
      </div>

      <div className={styles.grid}>
        {PRICING_PLANS.map((plan, idx) => {
          const price = isAnnual ? plan.price.annually : plan.price.monthly;
          const isDark = plan.theme === 'dark';
          
          return (
            <div key={idx} className={`${styles.card} ${isDark ? styles.darkCard : ''}`}>
              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{price.toLocaleString()}</span>
                  <span className={styles.period}>/mo</span>
                </div>
                <div className={styles.billedText}>USD Billed {isAnnual ? 'Annually' : 'Monthly'}</div>
              </div>
              
              <div className={styles.cardMiddle}>
                <p className={styles.planDesc}>{plan.desc.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
                <button className={styles.btnSecondary}>
                  <div className={styles.btnIcon}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  Get started
                </button>
              </div>
              
              <div className={styles.cardBottom}>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Lower Marquee */}
      <div className={styles.lowerMarqueeWrapper}>
        <div className={styles.lowerMarqueeTrack}>
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <div className={styles.spartanBadge}>//SPARTAN</div>
              <span className={styles.lowerMarqueeText}>
                We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America.
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
