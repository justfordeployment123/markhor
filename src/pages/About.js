import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import PageHero from '../components/PageHero';
import MagneticButton from '../components/MagneticButton';
import './pages.css';

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

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="dark-page">

      <PageHero
        label="About Us"
        preTitle="— We believe"
        outlineTitle="software"
        solidTitle="should feel invisible."
        description="Founded in 2019 in Lahore — a passionate team dedicated to building digital products that make a real difference."
      />

      {/* ── Stats ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
                <div>
                  <div className="pg-stat-value">{stat.value}</div>
                  <div className="pg-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="page-section-label">Our Story</span>
                <h2 className="page-section-heading">From idea to impact.</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
                  <p className="page-section-desc">
                    Markhor Systems was founded with a simple belief: technology should empower businesses
                    and delight users. Named after the majestic Markhor — Pakistan's national animal known
                    for its strength and resilience — we embody those same qualities.
                  </p>
                  <p className="page-section-desc">
                    What started as a small team passionate about mobile development has grown into a
                    full-service digital agency. Today, we help startups and enterprises transform their
                    ideas into powerful mobile apps, web platforms, and AI-driven solutions.
                  </p>
                  <p className="page-section-desc">
                    We don't just write code — we craft experiences that people love to use.
                  </p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <MagneticButton to="/contact" className="pg-btn-primary" strength={0.2}>
                    Work with us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="pg-placeholder aspect-square" style={{ minHeight: '360px' }}>
                Image Placeholder
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16">
              <span className="page-section-label">Our Values</span>
              <h2 className="page-section-heading">What drives us.</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 100}>
                <div className="pg-card p-8">
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>{v.num}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{v.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16 text-center">
              <span className="page-section-label">Our Journey</span>
              <h2 className="page-section-heading">Milestones.</h2>
            </div>
          </RevealOnScroll>

          <div className="relative max-w-4xl mx-auto">
            <div className="pg-timeline-line hidden md:block" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {milestones.map((m, i) => (
                <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="pg-card p-6" style={{ display: 'inline-block', width: '100%' }}>
                        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.08)', marginBottom: '4px' }}>{m.year}</div>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{m.title}</h3>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{m.description}</p>
                      </div>
                    </div>
                    <div className="pg-timeline-dot hidden md:flex" />
                    <div className="flex-1" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <h2 className="page-cta-heading">Ready to work<br />together?</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">Let's discuss your next project and explore how we can bring your vision to life.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton to="/services" className="pg-btn-ghost" strength={0.2}>View Our Services</MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default About;
