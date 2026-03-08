import React from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import RevealOnScroll from '../components/RevealOnScroll';
import logoImg from '../assets/markhor_logo.png';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <RevealOnScroll animation="fadeUp" delay={0}>
                <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Software Studio — Lahore
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={120}>
                <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  We build products<br />
                  <span className="hero-heading-accent">people actually use.</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={280}>
                <p className="hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Mobile apps, web platforms, and AI systems — designed
                  with care, engineered to last.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={400}>
                <div className="hero-actions">
                  <MagneticButton
                    to="/contact"
                    className="btn-primary"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    strength={0.3}
                  >
                    Start a Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                  <MagneticButton
                    to="/services"
                    className="btn-ghost"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    strength={0.2}
                  >
                    Our Services
                  </MagneticButton>
                </div>
              </RevealOnScroll>
            </div>

            {/* Logo */}
            <RevealOnScroll animation="fadeUp" delay={200} className="hidden lg:flex items-center justify-center">
              <div className="hero-logo-wrap">
                <div className="hero-logo-glow" />
                <img
                  src={logoImg}
                  alt="Markhor Systems"
                  className="hero-logo"
                  style={{ mixBlendMode: 'screen' }}
                />
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

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          <RevealOnScroll animation="fadeUp">
            <div className="services-heading-wrap">
              <h2 className="services-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Crafted for <span className="text-accent">impact,</span><br />
                <span className="text-accent">built to last.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="services-grid">
            {[
              {
                num: '01',
                title: 'Mobile\nDevelopment',
                desc: 'iOS & Android apps that feel native and perform flawlessly across every device.',
                img: mobileImg,
              },
              {
                num: '02',
                title: 'Web\nApplications',
                desc: 'Scalable platforms and SaaS products engineered for real-world performance.',
                img: webImg,
              },
              {
                num: '03',
                title: 'AI & Machine\nLearning',
                desc: 'Intelligent systems that learn, automate, and transform your business.',
                img: aiImg,
              },
            ].map((service, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 150}>
                <Link to="/services" className="service-card">
                  <div className="service-num-badge" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {service.num}
                  </div>

                  <div className="service-image-area">
                    <div className="service-image-glow" />
                    <img
                      src={service.img}
                      alt={service.title.replace('\n', ' ')}
                      className="service-img"
                    />
                  </div>

                  <h3 className="service-title" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {service.title.split('\n').map((line, j) => (
                      <span key={j}>{line}{j === 0 && <br />}</span>
                    ))}
                  </h3>

                  <p className="service-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {service.desc}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="fadeUp" delay={500}>
            <p className="services-note" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every project starts with listening. We work closely with you to understand
              the problem before writing a single line of code.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ABOUT ── */}
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
                  We believe great software should feel
                  <span className="text-accent"> invisible.</span>
                </h2>
                <div className="about-heading-line" />
              </div>
            </RevealOnScroll>

            {/* Right — body text + link */}
            <div className="about-body">
              <RevealOnScroll animation="fadeUp" delay={150}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Founded in 2019 in Lahore, we've delivered over 50 projects spanning
                  mobile apps, web platforms, and AI-driven systems for clients across the
                  globe. We don't follow templates — we study your problem and craft the
                  right solution.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={250}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Our team moves fast, communicates clearly, and obsesses over the details
                  that separate good products from great ones.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={350}>
                <Link to="/about" className="about-link" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Portfolio</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Selected <span className="text-accent">Work</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="work-grid">
            {[
              { title: 'FinTech Dashboard', category: 'Web Application', year: '2024' },
              { title: 'E-Commerce Platform', category: 'Mobile App', year: '2024' },
            ].map((project, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 150}>
                <div className="work-card">
                  <div className="work-card-glow" />
                  <div className="work-card-image">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="work-image-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Add Image</span>
                  </div>
                  <div className="work-card-info">
                    <span className="work-card-category" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.category}</span>
                    <h3 className="work-card-title" style={{ fontFamily: 'Syne, sans-serif' }}>{project.title}</h3>
                  </div>
                  <span className="work-card-year" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.year}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="fadeUp" delay={350}>
            <div className="work-footer">
              <MagneticButton to="/services" className="btn-ghost" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.2}>
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
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

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-glow" />

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's build something<br />
              <span className="text-accent">worth talking about.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={150}>
            <MagneticButton
              to="/contact"
              className="btn-primary btn-primary-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              strength={0.3}
            >
              Start a Project
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

export default Home;
