import React, { useEffect, useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import './pages.css';
import './FAQ.css';
import { fetchJSON } from '../config/apiBase';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true); setError('');
      const { ok, data } = await fetchJSON('/faqs?published=true');
      if (!active) return;
      if (ok) {
        const items = Array.isArray(data.items) ? data.items : (data.faqs || []);
        setFaqData(items);
        setLoading(false);
      } else {
        setError(data?.error || 'Failed to load FAQs');
        setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="faq-container">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-stars" />
        <div className="page-hero-streak page-hero-streak-1" />
        <div className="page-hero-streak page-hero-streak-2" />
        <div className="page-hero-streak page-hero-streak-3" />
        <div className="page-hero-scan" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <span className="page-label">FAQ</span>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <p className="page-pre-title">Questions</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={200}>
            <h1 className="page-hero-title page-hero-title-outline" data-text="frequently">frequently</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={320}>
            <h1 className="page-hero-title page-hero-title-solid">asked.</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={440}>
            <p className="page-hero-desc">
              Find answers to the most common questions about Markhor Systems,
              our services, and how we work.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-section">
        <div className="faq-content">
          {loading && <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>Loading FAQs...</p>}
          {error && <p style={{ textAlign: 'center', color: 'rgba(255,100,100,0.7)', fontSize: '0.9rem' }}>{error}</p>}
          {!loading && !error && faqData.map((faq, idx) => (
            <div
              key={faq._id || idx}
              className={`faq-item ${expandedFaq === (faq._id || idx) ? 'expanded' : ''}`}
            >
              <button
                type="button"
                className="faq-button"
                onClick={() => toggleFaq(faq._id || idx)}
              >
                <div className="faq-question">
                  <span className="question-number">{String(Number(faq.order ?? idx) + 1).padStart(2, '0')}</span>
                  <h3 className="question-text">{faq.question}</h3>
                </div>
                <div className="faq-icon">
                  <svg
                    className="icon-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: expandedFaq === (faq._id || idx) ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              {expandedFaq === (faq._id || idx) && (
                <div className="faq-answer">
                  <div className="answer-content">
                    <span className="answer-icon">A</span>
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {!loading && !error && faqData.length === 0 && (
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans, sans-serif', padding: '40px 0' }}>No FAQs published yet.</div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-header">
            <h2 className="resources-title">Helpful Resources</h2>
            <p className="resources-subtitle">Dive deeper into the digital experience.</p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon resource-icon-pink">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="resource-title">Our Blog</h3>
              <p className="resource-description">Insights, guides, and updates from the Markhor Systems team.</p>
              <button
                type="button"
                onClick={() => window.location.href = '/blog'}
                className="resource-button"
              >
                Read Blog →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <h2 className="page-cta-heading">Still have<br />questions?</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">We'd love to help. Reach out and let's discuss your project.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton to="/services" className="pg-btn-ghost" strength={0.2}>View Services</MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default FAQ;
