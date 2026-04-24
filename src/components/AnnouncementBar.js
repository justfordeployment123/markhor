import React, { useState, useEffect } from 'react';
import PrefetchLink from './PrefetchLink';

const STORAGE_KEY = 'markhor-announcement-dismissed';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage?.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('has-announcement', visible);
    return () => document.body.classList.remove('has-announcement');
  }, [visible]);

  const dismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      window.sessionStorage?.setItem(STORAGE_KEY, '1');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="announcement-bar" role="region" aria-label="Studio availability">
      <PrefetchLink to="/contact" className="announcement-bar-link">
        <span className="announcement-bar-dot" aria-hidden="true" />
        <span className="announcement-bar-text">
          <strong>Accepting 2 new projects for Q3 2026</strong>
          <span className="announcement-bar-sep">·</span>
          <span className="announcement-bar-cta">
            Book a free scoping call
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </span>
      </PrefetchLink>
      <button
        type="button"
        className="announcement-bar-close"
        onClick={dismiss}
        aria-label="Dismiss announcement"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
