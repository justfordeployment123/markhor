import React, { useState, useEffect } from 'react';
import PrefetchLink from './PrefetchLink';
import Icon from './Icon';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsVisible(y > 120);
          setShowScrollTop(y > 600);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        inert={!isVisible}
        onKeyDown={event => { if (event.key === 'Escape') setIsExpanded(false); }}
        className={`floating-contact ${isVisible ? 'floating-contact-visible' : ''} ${isExpanded ? 'floating-contact-expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div id="floating-contact-options" hidden={!isExpanded} className={`floating-options ${isExpanded ? 'floating-options-show' : ''}`}>
          <a
            href="mailto:hello@markhorsystems.com"
            className="floating-option"
            title="Email us"
            aria-label="Email us"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
            </svg>
          </a>

          <a
            href="tel:+923465833438"
            className="floating-option"
            title="Call Markhor"
            aria-label="Call Markhor"
          >
            <Icon name="phone" size={18} />
          </a>

          <PrefetchLink
            to="/contact"
            className="floating-option floating-option-calendar"
            title="Book a call"
            aria-label="Book a scoping call"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path strokeLinecap="round" d="M8 2v4M16 2v4M3 10h18" />
            </svg>
          </PrefetchLink>
        </div>

        <button
          className="floating-main-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
          aria-expanded={isExpanded}
          aria-controls="floating-contact-options"
        >
          <span className="floating-main-label">
            <span className="floating-main-dot" aria-hidden="true" />
            Talk to us
          </span>
          <svg
            className={`floating-main-icon-close ${isExpanded ? '' : 'floating-main-icon-hidden'}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="floating-pulse-ring" aria-hidden="true" />
      </div>

      <button
        className={`floating-scroll-top ${showScrollTop ? 'floating-scroll-top-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default FloatingContact;
