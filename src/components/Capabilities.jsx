import React, { useState } from 'react';
import styles from './Capabilities.module.css';
import { FiArrowRight } from 'react-icons/fi';
import { TbZoomCode } from 'react-icons/tb';
import { BiNetworkChart } from 'react-icons/bi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { BsGlobe } from 'react-icons/bs';

const ACCORDION_DATA = [
  {
    id: '001',
    title: 'Autonomous Agent\nArchitecture Labs',
    desc: 'Architecting robust server environments and local LLM integrations to ensure data remains secure and local.',
    img: '/assets/images/liXydHdt7Kdt6VKUzzjSZwFJ4FA.png',
    bgImg: '/assets/images/pEct5trUmjDYAblzuKYq2MpHaA.png'
  },
  {
    id: '002',
    title: 'Autonomous Agentic\nWorkflows',
    desc: 'Building self-optimizing task bots that handle complex multi-step workflows with zero human intervention.',
    img: '/assets/images/WTuFQeqWgOcQVCks16yKxgDaefI.png',
    bgImg: '/assets/images/qWpzthqQ4FGQWP39IeKgah1OP8.png'
  },
  {
    id: '003',
    title: 'Data Pipelines & RAG\nSystems',
    desc: 'Engineering efficient data pipelines and retrieval-augmented generation systems for enhanced AI reasoning.',
    img: '/assets/images/LYQLqywSoqlHG7KLRJM70MIk.png',
    bgImg: '/assets/images/QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png'
  }
];

const FEATURES_DATA = [
  {
    icon: <TbZoomCode size={24} strokeWidth={1.5} />,
    title: 'Semantic vector search for\nhyper-accurate retrieval'
  },
  {
    icon: <BiNetworkChart size={24} />,
    title: 'Unified data lakes for\nexpansive model context.'
  },
  {
    icon: <HiOutlineAdjustmentsVertical size={24} />,
    title: 'Token-optimized flows for high\nspeed processing'
  },
  {
    icon: <BsGlobe size={24} />,
    title: 'Global LLM deployment.\nSupport for 95+ languages.'
  }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('001');

  return (
    <section className={styles.capabilitiesSection}>
      {/* 1. Capabilities Accordion */}
      <div className={styles.capabilitiesContent}>
        <div className={styles.leftCol}>
          <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <span className={styles.label}>CAPABILITIES</span>
          </div>
          
          <p className={styles.introText}>
            We bridge the gap between abstract machine learning and practical business utility through bespoke engineering.
          </p>
          
          <h2 className={styles.mainTitle}>
            Tailored Intelligence for<br />Modern Enterprises.
          </h2>
          
          <button className={styles.btnSecondary}>
            <div className={styles.btnIcon}>
              <FiArrowRight />
            </div>
            Start Build
          </button>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.accordionContainer}>
            {ACCORDION_DATA.map((item) => {
              const isActive = activeTab === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`${styles.accordionPanel} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    backgroundImage: isActive ? `url(${item.bgImg})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={styles.panelHeader}>
                    <span className={styles.panelId}>{item.id}</span>
                    {!isActive && <span className={styles.verticalTitle}>{item.title.replace('\n', ' ')}</span>}
                  </div>
                  
                  {isActive && (
                    <div className={styles.panelContent}>
                      <h3 className={styles.panelTitle}>{item.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h3>
                      <p className={styles.panelDesc}>{item.desc}</p>
                      
                      <div className={styles.panelImageWrapper}>
                        <img src={item.img} alt={item.title.replace('\n', ' ')} className={styles.panelImage} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className={styles.sectionDivider}></div>

      {/* 2. Vision Section */}
      <div className={styles.visionContent}>
        <div className={styles.visionLeft}>
          <div className={styles.founderCard}>
            <div className={styles.founderImageWrapper}>
              <img src="/assets/images/jnIpVvHAXWiAGa8gLEmWtRuDwQ.png" alt="Alexander Vacca" className={styles.founderImage} />
              {/* Corner accents */}
              <div className={`${styles.cornerAccent} ${styles.tl}`}></div>
              <div className={`${styles.cornerAccent} ${styles.tr}`}></div>
              <div className={`${styles.cornerAccent} ${styles.bl}`}></div>
              <div className={`${styles.cornerAccent} ${styles.br}`}></div>
            </div>
            <div className={styles.founderInfo}>
              <span className={styles.founderName}>ALEXANDER VACCA</span>
              <span className={styles.founderRole}>Founder & Lead Engineer</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visionRight}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>OUR VISION</span>
            <div className={styles.line} style={{ maxWidth: '120px' }}></div>
            <div className={styles.pillIcon}></div>
          </div>
          
          <h2 className={styles.visionTitle}>
            We believe that AI<br />
            should not just<br />
            automate tasks, but<br />
            <span className={styles.visionTextMuted}>
              amplify the creative<br />
              and strategic potential<br />
              of every human.
            </span>
          </h2>
          
          <p className={styles.visionDesc}>
            By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth.
          </p>
        </div>
      </div>
      
      {/* Divider */}
      <div className={styles.sectionDivider}></div>
      
      {/* 3. Tech Features Grid */}
      <div className={styles.techFeaturesHeader}>
        <p className={styles.techIntroText}>
          ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION.<br />
          WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM<br />
          NEURAL SOLUTIONS TAILORED TO YOUR STACK.
        </p>
        
        <div className={styles.techIconsBadge}>
           {/* Small logo badges */}
           <div className={styles.badgeIconWrapper}><div className={styles.badgeCircle}></div></div>
           <div className={styles.badgeIconWrapper}><div className={styles.badgeCircle}></div></div>
           <div className={styles.badgeIconWrapper}><div className={styles.badgeCircle}></div></div>
           <div className={styles.badgeIconWrapper}><div className={styles.badgeCircle}></div></div>
        </div>
        
        <button className={styles.btnOutline}>
          Digital Brain v4.0.2 •
          <FiArrowRight style={{ marginLeft: 4 }} />
        </button>
      </div>
      
      <div className={styles.techGrid}>
        {FEATURES_DATA.map((feature, idx) => (
          <div key={idx} className={styles.techCard}>
            <div className={styles.techIcon}>{feature.icon}</div>
            <div className={styles.techDivider}></div>
            <p className={styles.techTitle}>
              {feature.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
