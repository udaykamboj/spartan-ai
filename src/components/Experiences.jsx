import React, { useRef } from 'react';
import styles from './Experiences.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TESTIMONIALS = [
  {
    id: 1,
    logo: '/assets/images/8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png',
    quote: "The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly.",
    name: "MARCUS CHENG",
    role: "Head of AI, Aetna",
    avatar: '/assets/images/CLpXi6HupcG6YYxVylXG8rj7eo4.png' // generic avatar placeholder
  },
  {
    id: 2,
    logo: '/assets/images/fQ71Xa5nLv0lmW62RjPI68rMDcU.png',
    quote: "Their team didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI.",
    name: "DAVID ROSSI",
    role: "Lead Dev, Cigna",
    avatar: '/assets/images/3ICxPpL7nA6WiDyreZSZlU70E8.png'
  },
  {
    id: 3,
    logo: '/assets/images/SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png',
    quote: "A game-changer for our R&D. The neural infrastructure is robust, secure, and perfectly tailored to our niche stack.",
    name: "SARAH JENKINS",
    role: "CTO, Anthem Group",
    avatar: '/assets/images/Yhx5rRmY8EDv8iMIG0L554Xx3k.png'
  },
  {
    id: 4,
    logo: '/assets/images/qA80rXn5OyEhaPlYKJ8gIEE6Ds.png',
    quote: "Incredible technical depth. They handled our complex RAG implementation with ease and delivered ahead of schedule.",
    name: "ELENA VANCE",
    role: "VP Eng, UnitedHealth",
    avatar: '/assets/images/PNxA5d1umCQiNSezotkgCnArwqU.png'
  }
];

const Asterisk = () => (
  <svg viewBox="0 0 100 100" className={styles.asterisk}>
    <path fill="currentColor" d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
    <path fill="currentColor" d="M15 15 L46 46 L85 15 L54 54 L85 85 L54 54 L15 85 L46 46 Z" />
  </svg>
);

export default function Experiences() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // rough card width
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.experiencesSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className={styles.marqueeText}>Experiences</span>
              <Asterisk />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.header}>
        <p className={styles.description}>
          Empowering global enterprises through bespoke neural<br />
          architectures and autonomous agentic workflows.
        </p>
        
        <div className={styles.navButtons}>
          <button className={styles.navBtn} onClick={() => scroll('left')}>
            <FiChevronLeft size={20} />
          </button>
          <button className={styles.navBtn} onClick={() => scroll('right')}>
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className={styles.carouselContainer} ref={scrollRef}>
        <div className={styles.carouselTrack}>
          {/* Double the testimonials to allow infinite-like scrolling */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                </div>
                <div className={styles.logoWrapper}>
                  <img src={item.logo} alt="Company Logo" className={styles.companyLogo} />
                </div>
              </div>
              
              <div className={styles.quoteIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25-.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              
              <p className={styles.quoteText}>{item.quote}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
