import React from 'react';
import styles from './BentoGrid.module.css';
import { FiTrendingUp } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';

export default function BentoGrid() {
  return (
    <section className={styles.bentoSection}>
      <div className={styles.bentoHeader}>
        <h2 className={styles.bentoTitle}>
          Automate the manual, accelerate the future. <span className={styles.textGray}>Our custom AI solutions deliver measurable growth and operational excellence.</span>
        </h2>
        <p className={styles.bentoSubtitle}>
          Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        {/* Card 1: $45M */}
        <div className={`${styles.bentoCard} ${styles.cardDark}`}>
          <div className={styles.cardIconWrapper}>
            <FiTrendingUp size={24} color="#000" />
          </div>
          <h3 className={styles.cardNumber}>$45M</h3>
          <p className={styles.cardDesc}>Revenue generated for our clients through AI-led optimizations.</p>
        </div>

        {/* Card 2: 5x Faster */}
        <div className={styles.bentoCard}>
          <div className={styles.avatars}>
            <img src="/assets/images/8k7FcfFSjgocOslFu94p0ih1UY.png" alt="Avatar 1" />
            <img src="/assets/images/FnCj7jgTvcpKSt0CUVIqbyiS9o.png" alt="Avatar 2" />
            <img src="/assets/images/OrsgMbvM0AZiEvhgHFZUJM2g.png" alt="Avatar 3" />
          </div>
          <p className={styles.cardSubtext}><strong>15,400</strong> active agents</p>
          <div className={styles.speedMetric}>
            <span className={styles.speedNumber}>5x</span>
            <span className={styles.speedLabel}>Faster speed to market.</span>
          </div>
        </div>

        {/* Card 3: Inference speed */}
        <div className={styles.bentoCard}>
          <div className={styles.inferenceWheel}>
            <div className={styles.wheelCenter}>
              <IoRocketOutline size={20} color="#fff" />
            </div>
          </div>
          <h4 className={styles.cardTitle}>Inference speed</h4>
          <p className={styles.cardDesc}>Real-time processing for enterprise-grade deployments.</p>
        </div>

        {/* Card 4: Testimonial */}
        <div className={`${styles.bentoCard} ${styles.cardTestimonial}`}>
          <div className={styles.testimonialHeader}>
            <span className={styles.quoteMark}>"</span>
            <img src="/assets/images/3EwtMm1CTn3V13Xu2ufZVUnW4.png" alt="Cigna logo" className={styles.companyLogo} />
          </div>
          <p className={styles.testimonialText}>
            The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction.
          </p>
          <p className={styles.testimonialAuthor}>• CTO, Cigna</p>
          
          <div className={styles.buyTemplate}>
            <img src="/assets/images/4GMiBYbu9SI4dXo9ENcqlNA.jpg" alt="Template thumbnail" />
            <div className={styles.buyText}>
              <span>Buy Spartan AI Template</span>
              <span className={styles.price}>from <strong>$129</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
