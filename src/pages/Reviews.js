import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import './Home.css';

const REVIEWS = [
  {
    id: 1,
    quote: 'Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched. The team delivered exactly what we needed, on time and within budget.',
    author: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    project: 'Mobile App',
    year: '2024',
  },
  {
    id: 2,
    quote: 'Working with Markhor was a game-changer for our business. They delivered our AI solution ahead of schedule and exceeded expectations. The quality of work is exceptional.',
    author: 'Michael Roberts',
    role: 'CTO, DataFlow',
    project: 'AI Development',
    year: '2024',
  },
  {
    id: 3,
    quote: 'Outstanding web development services. They built our e-commerce platform with incredible attention to user experience. Our sales have increased by 40% since launch.',
    author: 'Emily Johnson',
    role: 'Founder, EcoMarket',
    project: 'Web Development',
    year: '2023',
  },
  {
    id: 4,
    quote: 'Incredibly talented team. They took our complex requirements and turned them into a seamless mobile application. Communication was excellent throughout the entire engagement.',
    author: 'David Park',
    role: 'Product Manager, FinTech Solutions',
    project: 'Mobile App',
    year: '2024',
  },
  {
    id: 5,
    quote: 'We needed a custom AI solution for our analytics platform, and Markhor delivered beyond our expectations. Their technical knowledge and problem-solving skills are top-notch.',
    author: 'Lisa Anderson',
    role: 'Director of Technology, Analytics Pro',
    project: 'AI Development',
    year: '2023',
  },
  {
    id: 6,
    quote: 'They built our SaaS platform from scratch and the results have been phenomenal. The platform is fast, scalable and a genuine joy to use.',
    author: 'James Wilson',
    role: 'CEO, CloudSync',
    project: 'Web Development',
    year: '2024',
  },
];

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

const Reviews = () => {
  const featured = REVIEWS[0];

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero hero-sm">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="hero-bg-glow-2" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-copy">
            <RevealOnScroll animation="fadeUp" delay={0} immediate>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Client Reviews</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                What clients
                <span className="hero-title-accent"> think of us.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                Don't just take our word for it. Real feedback from real
                clients across mobile, web and AI projects.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={300} immediate>
            <div className="hero-trust">
              {[
                { val: '4.9/5', label: 'Rating' },
                { val: '50+',   label: 'Reviews' },
                { val: '98%',   label: 'Satisfaction' },
                { val: '100%',  label: 'Would Recommend' },
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

      {/* FEATURED REVIEW */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>Featured Review</span></span>
              <h2 className="section-title">
                Words from a
                <span className="section-title-accent"> long-term partner.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={100}>
            <div className="review-featured">
              <div className="review-featured-mark">"</div>
              <blockquote className="review-featured-quote">
                {featured.quote}
              </blockquote>
              <div className="review-featured-meta">
                <p className="review-featured-name">{featured.author}</p>
                <p className="review-featured-role">{featured.role}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="process">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-row">
              <div>
                <span className="eyebrow"><span>All Reviews</span></span>
                <h2 className="section-title">
                  50+ happy
                  <span className="section-title-accent"> clients.</span>
                </h2>
              </div>
              <Link to="/contact" className="btn btn-ghost">
                Work With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>

          <div className="review-list">
            {REVIEWS.map((r, i) => (
              <RevealOnScroll key={r.id} animation="fadeUp" delay={i * 60}>
                <div className="review-row">
                  <div className="review-avatar">{initials(r.author)}</div>
                  <div>
                    <p className="review-quote">"{r.quote}"</p>
                    <div className="review-meta">
                      <span className="review-meta-name">{r.author}</span>
                      <span className="review-meta-dot" />
                      <span className="review-meta-role">{r.role}</span>
                      <span className="review-meta-dot" />
                      <span className="review-tag">{r.project}</span>
                    </div>
                  </div>
                  <span className="review-year">{r.year}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="cta-panel">
              <div className="cta-copy">
                <span className="eyebrow"><span>Your Story Next</span></span>
                <h2 className="section-title">
                  Ready to join our
                  <span className="section-title-accent"> success stories?</span>
                </h2>
                <p className="cta-lead">
                  Let's talk about your project. We'll give you a clear path
                  forward — and honest advice, either way.
                </p>
              </div>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started
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

export default Reviews;
