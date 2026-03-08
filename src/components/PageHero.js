import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const PageHero = ({ label, title, titleAccent, preTitle, outlineTitle, solidTitle, description }) => {
  // Build heading from either new props (title + titleAccent) or legacy (outlineTitle + solidTitle)
  const headingText = title || [outlineTitle, solidTitle].filter(Boolean).join(' ');
  const accent = titleAccent || null;

  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-glow-1" />
      <div className="page-hero-glow-2" />
      <div className="page-hero-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealOnScroll animation="fadeUp">
          <span className="page-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{label}</span>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={120}>
          <h1 className="page-hero-title" style={{ fontFamily: 'Syne, sans-serif' }}>
            {headingText}
            {accent && <><br /><span className="page-hero-title-accent">{accent}</span></>}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={280}>
          <p className="page-hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>{description}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PageHero;
