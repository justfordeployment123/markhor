import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import PageHero from '../components/PageHero';
import './pages.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      quote: "Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched. The team delivered exactly what we needed, on time and within budget.",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "SC",
      project: "Mobile App Development",
      date: "2024"
    },
    {
      id: 2,
      quote: "Working with Markhor was a game-changer for our business. They delivered our AI solution ahead of schedule and exceeded expectations. The quality of work is exceptional, and their team is professional and responsive.",
      author: "Michael Roberts",
      role: "CTO",
      company: "DataFlow",
      avatar: "MR",
      project: "AI Development",
      date: "2024"
    },
    {
      id: 3,
      quote: "Outstanding web development services! Markhor Systems built our e-commerce platform with incredible attention to user experience. Our sales have increased by 40% since launch. Highly recommended!",
      author: "Emily Johnson",
      role: "Founder",
      company: "EcoMarket",
      avatar: "EJ",
      project: "Web Development",
      date: "2023"
    },
    {
      id: 4,
      quote: "The team at Markhor Systems is incredibly talented. They took our complex requirements and turned them into a seamless mobile application. The entire process was smooth, and communication was excellent throughout.",
      author: "David Park",
      role: "Product Manager",
      company: "FinTech Solutions",
      avatar: "DP",
      project: "Mobile App Development",
      date: "2024"
    },
    {
      id: 5,
      quote: "We needed a custom AI solution for our analytics platform, and Markhor delivered beyond our expectations. Their technical knowledge and problem-solving skills are top-notch. A pleasure to work with!",
      author: "Lisa Anderson",
      role: "Director of Technology",
      company: "Analytics Pro",
      avatar: "LA",
      project: "AI Development",
      date: "2023"
    },
    {
      id: 6,
      quote: "Markhor Systems built our SaaS platform from scratch, and the results have been phenomenal. The platform is fast, scalable, and user-friendly. Their team's expertise in modern web technologies is evident in every aspect.",
      author: "James Wilson",
      role: "CEO",
      company: "CloudSync",
      avatar: "JW",
      project: "Web Development",
      date: "2024"
    }
  ];

  const stats = [
    { value: '4.9', label: 'Average Rating', suffix: '/5' },
    { value: '50+', label: 'Client Reviews' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '100%', label: 'Would Recommend' },
  ];

  return (
    <div className="dark-page">

      <PageHero
        label="Client Reviews"
        preTitle="— They say"
        outlineTitle="what clients"
        solidTitle="think of us."
        description="Don't just take our word for it. Real feedback from real clients across mobile, web, and AI projects."
      />

      {/* ── Stats ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
                <div>
                  <div className="pg-stat-value">
                    {stat.value}
                    {stat.suffix && <span style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.25)' }}>{stat.suffix}</span>}
                  </div>
                  <div className="pg-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Quote ── */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <RevealOnScroll animation="fadeUp">
            <div style={{ marginBottom: '32px' }}>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 32px' }}>
                <path d="M0 32V19.2C0 8.533 5.867 2.4 17.6 0L19.2 3.2C14.4 4.533 11.467 7.467 10.4 12H16V32H0ZM24 32V19.2C24 8.533 29.867 2.4 41.6 0L43.2 3.2C38.4 4.533 35.467 7.467 34.4 12H40V32H24Z" fill="rgba(255,255,255,0.08)" />
              </svg>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '36px' }}>
              "Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched."
            </p>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
              — Sarah Chen, CEO at TechStart Inc. &nbsp;·&nbsp; 2024
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16">
              <span className="page-section-label">All Reviews</span>
              <h2 className="page-section-heading">50+ happy clients.</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <RevealOnScroll key={review.id} animation="fadeUp" delay={i * 80}>
                <div className="pg-card p-8 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="rgba(255,255,255,0.5)">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, flexGrow: 1, marginBottom: '28px' }}>
                    "{review.quote}"
                  </p>

                  {/* Project tag */}
                  <div style={{ marginBottom: '24px' }}>
                    <span className="pg-tag">{review.project}</span>
                  </div>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="pg-avatar">{review.avatar}</div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{review.author}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{review.role}, {review.company}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>{review.date}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <h2 className="page-cta-heading">Ready to join our<br />success stories?</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">Let's work together to create something your clients will love talking about.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton to="/services" className="pg-btn-ghost" strength={0.2}>View Services</MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Reviews;
