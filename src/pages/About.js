import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import logoImg from '../assets/markhor_logo.png';
import './Home.css';

const VALUES = [
  {
    num: '01',
    title: 'Innovation First',
    desc: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
  },
  {
    num: '02',
    title: 'True Partnership',
    desc: 'We work alongside you as partners, not vendors. Your success is our success.',
  },
  {
    num: '03',
    title: 'Quality Obsessed',
    desc: 'Pixel-perfect designs and clean, maintainable code. No shortcuts, ever.',
  },
  {
    num: '04',
    title: 'Speed & Agility',
    desc: 'We move fast without breaking things. Rapid iteration meets rigorous testing.',
  },
];

const MILESTONES = [
  { year: '2019', title: 'Founded in Lahore', desc: 'Markhor Systems was born with a vision to build exceptional digital products.' },
  { year: '2020', title: 'First Major Client', desc: 'Delivered our first enterprise-scale mobile application.' },
  { year: '2021', title: 'AI Division Launched', desc: 'Expanded services to include AI and machine learning solutions.' },
  { year: '2022', title: '30+ Projects Shipped', desc: 'Crossed 30 successful project deliveries across three continents.' },
  { year: '2023', title: 'Global Reach', desc: 'Serving clients across North America, Europe and Asia.' },
  { year: '2024', title: 'AI Innovation', desc: 'Launched advanced AI development services with LLM and RAG expertise.' },
];

const About = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero hero-sm hero-split-sm">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="hero-bg-glow-2" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-layout">

            <div className="hero-copy">
              <RevealOnScroll animation="fadeUp" delay={0} immediate>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>About the Studio</span>
                </div>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={100} immediate>
                <h1 className="hero-title">
                  We believe great software
                  <span className="hero-title-accent"> should feel invisible.</span>
                </h1>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={180} immediate>
                <p className="hero-lead">
                  Founded in 2019 in Lahore — a small, senior team dedicated
                  to building digital products that make a real difference.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={260} immediate>
                <div className="hero-ctas">
                  <Link to="/contact" className="btn btn-primary">
                    Work With Us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link to="/services" className="btn btn-ghost">
                    Our Services
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fadeUp" delay={150} immediate>
              <div className="hero-visual">
                <div className="hero-visual-ring" />
                <div className="hero-visual-ring-2" />
                <div className="hero-visual-glow" />
                <div className="hero-visual-inner">
                  <img
                    src={logoImg}
                    alt="Markhor Systems"
                    className="hero-visual-logo"
                    decoding="async"
                  />
                </div>
                <span className="hero-visual-badge">EST · 2019</span>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={400} immediate>
            <div className="hero-trust">
              {[
                { val: '50+',  label: 'Projects' },
                { val: '30+',  label: 'Clients' },
                { val: '7',    label: 'Years' },
                { val: '99%',  label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="trust-stat">
                  <span className="trust-stat-val">{s.val}</span>
                  <span className="trust-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="services">
        <div className="container">
          <div className="about-grid">

            <RevealOnScroll animation="fadeUp">
              <div className="about-copy">
                <span className="eyebrow"><span>Our Story</span></span>
                <h2 className="section-title">
                  From an idea
                  <span className="section-title-accent"> to impact.</span>
                </h2>
                <p className="about-text" style={{ marginTop: 24 }}>
                  Markhor Systems was founded on a simple belief: technology
                  should empower businesses and delight users. Named after the
                  majestic Markhor — Pakistan's national animal known for its
                  strength and resilience — we embody those same qualities.
                </p>
                <p className="about-text">
                  What began as a small team passionate about mobile development
                  has grown into a full-service digital studio. Today, we help
                  startups and enterprises transform their ideas into powerful
                  mobile apps, web platforms and AI-driven systems.
                </p>
                <p className="about-text">
                  We don't just write code — we craft experiences that people
                  genuinely enjoy using.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="about-values">
                {VALUES.map((v, i) => (
                  <div key={i} className="value-card">
                    <div className="value-card-num">{v.num}</div>
                    <h4 className="value-card-title">{v.title}</h4>
                    <p className="value-card-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="process">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>Our Journey</span></span>
              <h2 className="section-title">
                Milestones along
                <span className="section-title-accent"> the way.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <RevealOnScroll key={m.year} animation="fadeUp" delay={i * 70}>
                <div className="timeline-item">
                  <span className="timeline-year">{m.year}</span>
                  <div>
                    <h3 className="timeline-title">{m.title}</h3>
                    <p className="timeline-desc">{m.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testi">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="review-featured">
              <div className="review-featured-mark">"</div>
              <blockquote className="review-featured-quote">
                Markhor Systems transformed our vision into a beautiful,
                functional app. Their attention to detail and technical
                expertise is genuinely unmatched.
              </blockquote>
              <div className="review-featured-meta">
                <p className="review-featured-name">Sarah Chen</p>
                <p className="review-featured-role">CEO, TechStart Inc.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="cta-panel">
              <div className="cta-copy">
                <span className="eyebrow"><span>Let's Collaborate</span></span>
                <h2 className="section-title">
                  Ready to work
                  <span className="section-title-accent"> together?</span>
                </h2>
                <p className="cta-lead">
                  Got a project in mind? We'd love to hear about it. Drop us a
                  line — we reply within 24 hours.
                </p>
              </div>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="mailto:hello@markhorsystems.com" className="cta-email">
                  hello@markhorsystems.com
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default About;
