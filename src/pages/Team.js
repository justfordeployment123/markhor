import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import PageHero from '../components/PageHero';
import './pages.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech. Passionate about building products that make a real difference.",
      expertise: ["Strategy", "Leadership", "Product Vision"],
      avatar: "AM",
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "CTO",
      bio: "Full-stack engineer specializing in scalable architectures. Loves solving complex technical challenges.",
      expertise: ["Architecture", "Backend", "DevOps"],
      avatar: "SK",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Mobile Developer",
      bio: "Mobile app enthusiast with expertise in iOS and Android. Creates beautiful, performant mobile experiences.",
      expertise: ["iOS", "Android", "React Native"],
      avatar: "MC",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Lead Web Developer",
      bio: "Frontend specialist crafting modern, responsive web applications. Expert in React and Next.js.",
      expertise: ["React", "Next.js", "TypeScript"],
      avatar: "ER",
    },
    {
      id: 5,
      name: "David Park",
      role: "AI/ML Engineer",
      bio: "Machine learning expert building intelligent solutions. Passionate about AI innovation and automation.",
      expertise: ["Machine Learning", "Python", "TensorFlow"],
      avatar: "DP",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design. Transforms ideas into beautiful, intuitive interfaces.",
      expertise: ["UI Design", "UX Research", "Prototyping"],
      avatar: "LA",
    },
  ];

  return (
    <div className="dark-page">

      <PageHero
        label="Our Team"
        preTitle="— The minds"
        outlineTitle="behind"
        solidTitle="every product."
        description="A passionate team of developers, designers, and innovators dedicated to crafting exceptional digital experiences."
      />

      {/* ── Team Grid ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16">
              <span className="page-section-label">The People</span>
              <h2 className="page-section-heading">Who we are.</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={member.id} animation="fadeUp" delay={i * 80}>
                <div className="pg-card p-8">
                  {/* Avatar */}
                  <div className="pg-avatar-lg" style={{ marginBottom: '24px' }}>
                    {member.avatar}
                  </div>

                  {/* Name & Role */}
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {member.expertise.map((skill, j) => (
                      <span key={j} className="pg-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16 text-center">
              <span className="page-section-label">Our Culture</span>
              <h2 className="page-section-heading">What drives us.</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Innovation', description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.' },
              { num: '02', title: 'Excellence', description: 'Committed to delivering the highest quality work in every project we undertake.' },
              { num: '03', title: 'Collaboration', description: 'We work closely with our clients — your goals become our goals.' },
              { num: '04', title: 'Integrity', description: 'Honest, transparent, and ethical in every decision we make.' },
            ].map((v, i) => (
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

      {/* ── CTA ── */}
      <section className="page-cta">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <h2 className="page-cta-heading">Want to join<br />our team?</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">We're always looking for talented people who share our passion for exceptional digital experiences.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton to="/about" className="pg-btn-ghost" strength={0.2}>Our Story</MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Team;
