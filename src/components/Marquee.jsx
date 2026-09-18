import React from 'react';
import styles from './Marquee.module.css';

const LOGOS = [
  { id: 1, src: '/assets/images/3ICxPpL7nA6WiDyreZSZlU70E8.png', alt: 'CVS Pharmacy' },
  { id: 2, src: '/assets/images/qWpzthqQ4FGQWP39IeKgah1OP8.png', alt: 'United Healthcare' },
  { id: 3, src: '/assets/images/pEct5trUmjDYAblzuKYq2MpHaA.png', alt: 'Aetna' },
  { id: 4, src: '/assets/images/3EwtMm1CTn3V13Xu2ufZVUnW4.png', alt: 'Cigna' },
  { id: 5, src: '/assets/images/8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png', alt: 'Anthem' },
];

export default function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* Render twice for continuous loop */}
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
          <img key={`${logo.id}-${idx}`} src={logo.src} alt={logo.alt} className={styles.marqueeLogo} />
        ))}
      </div>
    </div>
  );
}
