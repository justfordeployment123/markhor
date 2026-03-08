import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import './Home.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Alex Morgan", role: "CEO & Founder", bio: "Visionary leader with 10+ years in tech. Passionate about building products that make a real difference.", expertise: ["Strategy", "Leadership", "Product Vision"] },
    { id: 2, name: "Sarah Kim", role: "CTO", bio: "Full-stack engineer specializing in scalable architectures. Loves solving complex technical challenges.", expertise: ["Architecture", "Backend", "DevOps"] },
    { id: 3, name: "Michael Chen", role: "Lead Mobile Developer", bio: "Mobile app enthusiast with expertise in iOS and Android. Creates beautiful, performant mobile experiences.", expertise: ["iOS", "Android", "React Native"] },
    { id: 4, name: "Emily Rodriguez", role: "Lead Web Developer", bio: "Frontend specialist crafting modern, responsive web applications. Expert in React and Next.js.", expertise: ["React", "Next.js", "TypeScript"] },
    { id: 5, name: "David Park", role: "AI/ML Engineer", bio: "Machine learning expert building intelligent solutions. Passionate about AI innovation and automation.", expertise: ["Machine Learning", "Python", "TensorFlow"] },
    { id: 6, name: "Lisa Anderson", role: "UI/UX Designer", bio: "Creative designer focused on user-centered design. Transforms ideas into beautiful, intuitive interfaces.", expertise: ["UI Design", "UX Research", "Prototyping"] },
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
            <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Team</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={120}>
            <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              The minds behind<br />
              <span className="hero-heading-accent">every product.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <p className="hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              A passionate team of developers, designers, and innovators
              dedicated to crafting exceptional digital experiences.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TEAM (text rows — editorial, not card grid) ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The People</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Who we <span className="text-accent">are.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={member.id} animation="fadeUp" delay={i * 100}>
                <div className="team-card">
                  {/* Image placeholder */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '20px',
                    background: `linear-gradient(145deg, rgba(${100 + i * 25},${80 + i * 15},240,0.12), rgba(${140 - i * 10},${100 + i * 20},255,0.05))`,
                    border: '1px solid rgba(180,160,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: 'rgba(180,160,255,0.2)',
                      letterSpacing: '0.05em',
                      userSelect: 'none',
                    }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(180,160,255,0.4)', marginBottom: '14px' }}>
                    {member.role}
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '16px' }}>
                    {member.bio}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {member.expertise.map((skill, j) => (
                      <span key={j} style={{
                        padding: '3px 12px', background: 'rgba(140,100,240,0.06)', border: '1px solid rgba(180,160,255,0.10)',
                        borderRadius: '100px', fontSize: '10px', fontWeight: 500, color: 'rgba(180,160,255,0.45)',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <style>{`
            .team-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
            }
            .team-card {
              padding: 0;
            }
            @media (max-width: 1024px) {
              .team-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 28px;
              }
            }
            @media (max-width: 640px) {
              .team-grid {
                grid-template-columns: 1fr;
                gap: 40px;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ── VALUES (split layout like about section) ── */}
      <section className="about-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="about-split">
            <RevealOnScroll animation="fadeUp">
              <div className="about-heading-card">
                <div className="about-heading-card-glow" />
                <h2 className="about-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Our culture is built on
                  <span className="text-accent"> trust.</span>
                </h2>
                <div className="about-heading-line" />
              </div>
            </RevealOnScroll>

            <div className="about-body">
              {[
                { title: 'Innovation', desc: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.' },
                { title: 'Excellence', desc: 'Committed to delivering the highest quality work in every project we undertake.' },
                { title: 'Collaboration', desc: 'We work closely with our clients — your goals become our goals.' },
                { title: 'Integrity', desc: 'Honest, transparent, and ethical in every decision we make.' },
              ].map((v, i) => (
                <RevealOnScroll key={i} animation="fadeUp" delay={100 + i * 80}>
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{v.title}</h4>
                    <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif', marginBottom: 0 }}>{v.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-glow" />

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Want to join<br />
              <span className="text-accent">our team?</span>
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

export default Team;
