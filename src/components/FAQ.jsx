import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FiPlus, FiX } from 'react-icons/fi';

const FAQS = [
  {
    question: 'How do you ensure our data remains secure?',
    answer: 'We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure.'
  },
  {
    question: 'What is the typical deployment timeline?',
    answer: 'Most initial prototypes are deployed within 4-6 weeks, with full enterprise integration taking 3-6 months depending on complexity.'
  },
  {
    question: 'Can we integrate with our existing CRM?',
    answer: 'Yes, our agentic workflows are designed to integrate seamlessly with all major CRM platforms including Salesforce, HubSpot, and custom internal tools.'
  },
  {
    question: 'Do you provide model fine-tuning?',
    answer: 'Absolutely. We offer comprehensive model fine-tuning services to ensure outputs align perfectly with your brand voice and specific domain knowledge.'
  },
  {
    question: 'How do you calculate ROI for automation?',
    answer: 'We measure ROI through hours saved on manual tasks, reduction in error rates, and increased throughput in data processing pipelines.'
  },
  {
    question: 'Do we own the custom code you build?',
    answer: 'Yes, all bespoke architectures and workflows developed for your enterprise are fully owned by your organization upon project completion.'
  },
  {
    question: 'What models do you specialize in?',
    answer: 'We are model-agnostic but frequently deploy Llama 3, Claude 3.5 Sonnet, and GPT-4o depending on specific latency, cost, and capability requirements.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.headerTop}>
            <div className={styles.iconBox}>
              <div className={styles.innerBox}></div>
            </div>
            <span className={styles.sectionLabel}>COMMON QUERIES</span>
          </div>
          
          <p className={styles.subheading}>
            Find answers to technical specifications, deployment timelines, and our data security protocols.
          </p>
          
          <h2 className={styles.heading}>
            Everything you need to<br />
            know about our AI.
          </h2>
          
          <button className={styles.btnPrimary}>
            <div className={styles.btnIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
            Contact Support
          </button>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.accordion}>
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <div className={styles.questionRow}>
                    <h3 className={styles.question}>{faq.question}</h3>
                    <div className={styles.icon}>
                      {isOpen ? <FiX size={20} /> : <FiPlus size={20} />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className={styles.answer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
