import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

const DEFAULT_BULLETS = [
  '30-minute call — no pitch deck required',
  'NDA on request, before the first call',
  'Honest referral if we\'re not the right fit',
];

const CTASection = ({
  status = 'Accepting 2 new projects · Q3 2026',
  title = 'Let\'s make something',
  titleAccent = 'worth talking about.',
  lead = 'You\'ve got an idea, a deadline, or a pile of legacy code you\'ve stopped enjoying. We\'ve got 12 senior engineers and a Monday morning that\'s wide open.',
  bullets = DEFAULT_BULLETS,
  ctaLabel = 'Book a 30-min call',
  ctaHref = '/contact',
  email = 'hello@markhorsystems.com',
  responseTime = 'under 4 hours',
}) => {
  return (
    <section className="cta">
      <div className="cta-bg-glow" aria-hidden="true" />
      <div className="cta-bg-grid" aria-hidden="true" />
      <div className="container">
        <RevealOnScroll animation="fadeUp">
          <div className="cta-panel">
            <div className="cta-panel-decor" aria-hidden="true">
              <span className="cta-panel-ring cta-panel-ring-1" />
              <span className="cta-panel-ring cta-panel-ring-2" />
              <span className="cta-panel-ring cta-panel-ring-3" />
              <span className="cta-panel-glow" />
            </div>

            <div className="cta-copy">
              <div className="cta-status">
                <span className="cta-status-dot" />
                <span>{status}</span>
              </div>
              <h2 className="section-title">
                {title}
                <span className="section-title-accent"> {titleAccent}</span>
              </h2>
              <p className="cta-lead">{lead}</p>

              {bullets && bullets.length > 0 && (
                <ul className="cta-bullets">
                  {bullets.map((b) => (
                    <li key={b} className="cta-bullet">
                      <span className="cta-bullet-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="cta-actions">
              <Link to={ctaHref} className="btn btn-primary btn-lg">
                {ctaLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="cta-divider">
                <span className="cta-divider-line" />
                <span className="cta-divider-text">or email us directly</span>
                <span className="cta-divider-line" />
              </div>

              <a href={`mailto:${email}`} className="cta-email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                </svg>
                {email}
              </a>

              <div className="cta-response">
                <span className="cta-response-dot" />
                <span>
                  Typical reply · <strong>{responseTime}</strong>
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
