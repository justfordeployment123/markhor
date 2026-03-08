import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import './Home.css';

const Reviews = () => {
  const reviews = [
    { id: 1, quote: "Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched. The team delivered exactly what we needed, on time and within budget.", author: "Sarah Chen", role: "CEO", company: "TechStart Inc.", project: "Mobile App", date: "2024" },
    { id: 2, quote: "Working with Markhor was a game-changer for our business. They delivered our AI solution ahead of schedule and exceeded expectations. The quality of work is exceptional.", author: "Michael Roberts", role: "CTO", company: "DataFlow", project: "AI Development", date: "2024" },
    { id: 3, quote: "Outstanding web development services! Markhor Systems built our e-commerce platform with incredible attention to user experience. Our sales have increased by 40% since launch.", author: "Emily Johnson", role: "Founder", company: "EcoMarket", project: "Web Development", date: "2023" },
    { id: 4, quote: "The team at Markhor Systems is incredibly talented. They took our complex requirements and turned them into a seamless mobile application. Communication was excellent throughout.", author: "David Park", role: "Product Manager", company: "FinTech Solutions", project: "Mobile App", date: "2024" },
    { id: 5, quote: "We needed a custom AI solution for our analytics platform, and Markhor delivered beyond our expectations. Their technical knowledge and problem-solving skills are top-notch.", author: "Lisa Anderson", role: "Director of Technology", company: "Analytics Pro", project: "AI Development", date: "2023" },
    { id: 6, quote: "Markhor Systems built our SaaS platform from scratch, and the results have been phenomenal. The platform is fast, scalable, and user-friendly.", author: "James Wilson", role: "CEO", company: "CloudSync", project: "Web Development", date: "2024" },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full pt-32 pb-12 lg:pt-40 lg:pb-16">
          <RevealOnScroll animation="fadeUp">
            <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Client Reviews</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={120}>
            <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              What clients<br />
              <span className="hero-heading-accent">think of us.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <p className="hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Don't just take our word for it. Real feedback from real clients
              across mobile, web, and AI projects.
            </p>
          </RevealOnScroll>

          {/* Stats */}
          <RevealOnScroll animation="fadeUp" delay={450}>
            <div className="hero-stats">
              {[
                { val: '4.9/5', label: 'Rating' },
                { val: '50+', label: 'Reviews' },
                { val: '98%', label: 'Satisfaction' },
                { val: '100%', label: 'Recommend' },
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

      {/* ── FEATURED QUOTE (like landing testimonial) ── */}
      <section className="testimonial-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Featured Review</p>
            <div className="testimonial-card">
              <div className="testimonial-card-glow" />
              <blockquote className="testimonial-quote" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                "Markhor Systems transformed our vision into a beautiful, functional app.
                Their attention to detail and technical expertise is unmatched."
              </blockquote>
              <div className="testimonial-divider" />
              <p className="testimonial-author" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Sarah Chen</p>
              <p className="testimonial-role" style={{ fontFamily: 'DM Sans, sans-serif' }}>CEO, TechStart Inc.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ALL REVIEWS (text rows, editorial style, not card grid) ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>All Reviews</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                50+ happy <span className="text-accent">clients.</span>
              </h2>
            </div>
          </RevealOnScroll>

          {reviews.map((review, i) => (
            <RevealOnScroll key={review.id} animation="fadeUp" delay={i * 80}>
              <div className="review-row" style={{
                padding: '32px 0',
                borderBottom: '1px solid rgba(180,160,255,0.06)',
                display: 'grid',
                gridTemplateColumns: '44px 1fr auto',
                gap: '20px',
                alignItems: 'start',
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: `linear-gradient(135deg, rgba(${110 + i * 20},${90 + i * 12},240,0.15), rgba(${150 - i * 8},${110 + i * 18},255,0.06))`,
                  border: '1px solid rgba(180,160,255,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'rgba(180,160,255,0.3)',
                    userSelect: 'none',
                  }}>
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '16px' }}>
                    "{review.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                      {review.author}
                    </span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(180,160,255,0.25)' }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>
                      {review.role}, {review.company}
                    </span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(180,160,255,0.15)' }} />
                    <span style={{
                      padding: '2px 12px', background: 'rgba(140,100,240,0.06)', border: '1px solid rgba(180,160,255,0.10)',
                      borderRadius: '100px', fontSize: '10px', fontWeight: 500, color: 'rgba(180,160,255,0.45)',
                      fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em',
                    }}>{review.project}</span>
                  </div>
                </div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', color: 'rgba(180,160,255,0.2)', letterSpacing: '0.1em', whiteSpace: 'nowrap', paddingTop: '4px' }}>
                  {review.date}
                </span>
              </div>
            </RevealOnScroll>
          ))}

          <style>{`
            @media (max-width: 640px) {
              .review-row {
                grid-template-columns: 44px 1fr !important;
              }
              .review-row > span:last-child {
                grid-column: 1 / -1;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-glow" />

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to join our<br />
              <span className="text-accent">success stories?</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <MagneticButton to="/contact" className="btn-primary btn-primary-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.3}>
              Get Started
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

export default Reviews;
