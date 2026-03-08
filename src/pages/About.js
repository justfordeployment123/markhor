import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import logoImg from '../assets/markhor_logo.png';
import './Home.css';

const About = () => {
  const values = [
    { num: '01', title: 'Innovation First', description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.' },
    { num: '02', title: 'Partnership', description: 'We work alongside you as partners, not just vendors. Your success is our success.' },
    { num: '03', title: 'Quality Obsessed', description: 'We deliver pixel-perfect designs and clean, maintainable code. No shortcuts.' },
    { num: '04', title: 'Speed & Agility', description: 'We move fast without breaking things. Rapid iteration meets rigorous testing.' },
  ];

  const milestones = [
    { year: '2019', title: 'Founded', description: 'Markhor Systems was born with a vision to build exceptional digital products.' },
    { year: '2020', title: 'First Major Client', description: 'Delivered our first enterprise-scale mobile application.' },
    { year: '2021', title: 'AI Division', description: 'Expanded services to include AI and machine learning solutions.' },
    { year: '2022', title: '30+ Projects', description: 'Crossed 30 successful project deliveries milestone.' },
    { year: '2023', title: 'Global Reach', description: 'Serving clients across North America, Europe, and Asia.' },
    { year: '2024', title: 'AI Innovation', description: 'Launched advanced AI development services with LLM expertise.' },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RevealOnScroll animation="fadeUp" delay={0}>
                <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  About Us
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={120}>
                <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  We believe great software should feel
                  <br /><span className="hero-heading-accent">invisible.</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={280}>
                <p className="hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Founded in 2019 in Lahore — a passionate team dedicated to building
                  digital products that make a real difference.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={400}>
                <div className="hero-actions">
                  <MagneticButton to="/contact" className="btn-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.3}>
                    Work with us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                  <MagneticButton to="/services" className="btn-ghost" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.2}>
                    Our Services
                  </MagneticButton>
                </div>
              </RevealOnScroll>
            </div>

            {/* Logo */}
            <RevealOnScroll animation="fadeUp" delay={200} className="hidden lg:flex items-center justify-center">
              <div className="hero-logo-wrap" style={{ width: '320px', height: '320px' }}>
                <div className="hero-logo-glow" />
                <img src={logoImg} alt="Markhor Systems" className="hero-logo" style={{ mixBlendMode: 'screen' }} />
              </div>
            </RevealOnScroll>
          </div>

          {/* Stats row */}
          <RevealOnScroll animation="fadeUp" delay={550}>
            <div className="hero-stats">
              {[
                { val: '50+', label: 'Projects' },
                { val: '30+', label: 'Clients' },
                { val: '5+', label: 'Years' },
                { val: '99%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat-val" style={{ fontFamily: 'Syne, sans-serif' }}>{s.val}</span>
                  <span className="hero-stat-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── OUR STORY (same as landing about section) ── */}
      <section className="about-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="about-split">
            {/* Left — heading inside glass card */}
            <RevealOnScroll animation="fadeUp">
              <div className="about-heading-card">
                <div className="about-heading-card-glow" />
                <h2 className="about-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  From idea to
                  <span className="text-accent"> impact.</span>
                </h2>
                <div className="about-heading-line" />
              </div>
            </RevealOnScroll>

            {/* Right — body text */}
            <div className="about-body">
              <RevealOnScroll animation="fadeUp" delay={150}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Markhor Systems was founded with a simple belief: technology should empower businesses
                  and delight users. Named after the majestic Markhor — Pakistan's national animal known
                  for its strength and resilience — we embody those same qualities.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={250}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  What started as a small team passionate about mobile development has grown into a
                  full-service digital agency. Today, we help startups and enterprises transform their
                  ideas into powerful mobile apps, web platforms, and AI-driven solutions.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={350}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  We don't just write code — we craft experiences that people love to use.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (split layout — heading left, stacked values right) ── */}
      <section className="about-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="about-split">
            <RevealOnScroll animation="fadeUp">
              <div className="about-heading-card">
                <div className="about-heading-card-glow" />
                <h2 className="about-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  What drives
                  <span className="text-accent"> us.</span>
                </h2>
                <div className="about-heading-line" />
              </div>
            </RevealOnScroll>

            <div className="about-body">
              {values.map((v, i) => (
                <RevealOnScroll key={i} animation="fadeUp" delay={80 + i * 80}>
                  <div style={{
                    borderLeft: '2px solid rgba(180,160,255,0.15)',
                    paddingLeft: '20px',
                    marginBottom: '24px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', color: 'rgba(180,160,255,0.3)', letterSpacing: '0.1em' }}>{v.num}</span>
                      <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{v.title}</h4>
                    </div>
                    <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif', marginBottom: 0 }}>{v.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES (text rows with thin borders) ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Journey</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Milestones<span className="text-accent">.</span>
              </h2>
            </div>
          </RevealOnScroll>

          {milestones.map((m, i) => (
            <RevealOnScroll key={i} animation="fadeUp" delay={i * 70}>
              <div style={{
                padding: '24px 0',
                borderBottom: '1px solid rgba(180,160,255,0.06)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '32px',
                alignItems: 'baseline',
              }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 800,
                  color: 'rgba(180,160,255,0.18)',
                  minWidth: '60px',
                }}>{m.year}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '4px',
                  }}>{m.title}</h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.65,
                  }}>{m.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL (same as landing) ── */}
      <section className="testimonial-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What They Say</p>
            <div className="testimonial-card">
              <div className="testimonial-card-glow" />
              <blockquote className="testimonial-quote" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                "Markhor Systems transformed our vision into a beautiful, functional app.
                Their attention to detail and technical expertise is unmatched."
              </blockquote>
              <div className="testimonial-divider" />
              <p className="testimonial-author" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Sarah Chen
              </p>
              <p className="testimonial-role" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                CEO, TechStart Inc.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA (same as landing) ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-glow" />

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to work<br />
              <span className="text-accent">together?</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={150}>
            <MagneticButton to="/contact" className="btn-primary btn-primary-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.3}>
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={280}>
            <a href="mailto:hello@markhorsystems.com" className="cta-email" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              hello@markhorsystems.com
            </a>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default About;
