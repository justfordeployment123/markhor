import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const PageHero = ({ label, preTitle, outlineTitle, solidTitle, description }) => {
  const cleanPreTitle = preTitle?.replace(/^—\s*/, '') || '';

  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-stars" />
      <div className="page-hero-streak page-hero-streak-1" />
      <div className="page-hero-streak page-hero-streak-2" />
      <div className="page-hero-streak page-hero-streak-3" />
      <div className="page-hero-scan" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealOnScroll animation="fadeUp">
          <span className="page-label">{label}</span>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={100}>
          <p className="page-pre-title">{cleanPreTitle}</p>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={200}>
          <h1
            className="page-hero-title page-hero-title-outline"
            data-text={outlineTitle}
          >
            {outlineTitle}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={320}>
          <h1 className="page-hero-title page-hero-title-solid">{solidTitle}</h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={440}>
          <p className="page-hero-desc">{description}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PageHero;
