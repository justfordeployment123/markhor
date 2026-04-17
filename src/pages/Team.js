import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import './Home.css';

const TEAM = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech. Passionate about building products that genuinely make a difference.',
    skills: ['Strategy', 'Leadership', 'Product Vision'],
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'CTO',
    bio: 'Full-stack engineer specialising in scalable architectures. Loves solving complex technical challenges.',
    skills: ['Architecture', 'Backend', 'DevOps'],
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Mobile Developer',
    bio: 'Mobile app enthusiast with expertise in iOS and Android. Creates beautiful, performant mobile experiences.',
    skills: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Lead Web Developer',
    bio: 'Frontend specialist crafting modern, responsive web applications. Expert in React and Next.js.',
    skills: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 5,
    name: 'David Park',
    role: 'AI / ML Engineer',
    bio: 'Machine learning expert building intelligent solutions. Passionate about AI innovation and automation.',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'UI / UX Designer',
    bio: 'Creative designer focused on user-centered design. Transforms ideas into beautiful, intuitive interfaces.',
    skills: ['UI Design', 'UX Research', 'Prototyping'],
  },
];

const CULTURE = [
  { num: '01', title: 'Innovation', desc: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.' },
  { num: '02', title: 'Excellence', desc: 'Committed to delivering the highest quality work on every project we take on.' },
  { num: '03', title: 'Collaboration', desc: 'We work closely with clients — your goals become our goals from day one.' },
  { num: '04', title: 'Integrity',   desc: 'Honest, transparent and ethical in every decision we make together.' },
];

const Team = () => {
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
                <span>Our Team</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                The minds behind
                <span className="hero-title-accent"> every product.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                A passionate team of developers, designers and innovators
                dedicated to crafting exceptional digital experiences.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>The People</span></span>
              <h2 className="section-title">
                Small team,
                <span className="section-title-accent"> big ambitions.</span>
              </h2>
              <p className="section-lead">
                Every project you kick off here is shipped by senior engineers
                and designers — no handoffs, no middlemen.
              </p>
            </div>
          </RevealOnScroll>

          <div className="team-grid">
            {TEAM.map((m, i) => (
              <RevealOnScroll key={m.id} animation="fadeUp" delay={i * 90}>
                <article className="team-card">
                  <div className="team-media">
                    <div className="team-media-grid" />
                    <div className="team-media-glow" />
                    <span className="team-initials">
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div className="team-body">
                    <h3 className="team-name">{m.name}</h3>
                    <p className="team-role">{m.role}</p>
                    <p className="team-bio">{m.bio}</p>
                    <div className="team-skills">
                      {m.skills.map((s) => (
                        <span key={s} className="team-skill">{s}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="about">
        <div className="container">
          <div className="about-grid">

            <RevealOnScroll animation="fadeUp">
              <div className="about-copy">
                <span className="eyebrow"><span>Our Culture</span></span>
                <h2 className="section-title">
                  Built on
                  <span className="section-title-accent"> trust.</span>
                </h2>
                <p className="about-text" style={{ marginTop: 24 }}>
                  We take our craft seriously — and ourselves lightly. A small,
                  senior team means flat structure, fast decisions and high
                  standards across everything we ship.
                </p>
                <p className="about-text">
                  We hire for curiosity, judgment and care. Then we trust
                  people to do their best work.
                </p>
                <Link to="/contact" className="btn btn-ghost">
                  Join the Team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="about-values">
                {CULTURE.map((v) => (
                  <div key={v.num} className="value-card">
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

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="cta-panel">
              <div className="cta-copy">
                <span className="eyebrow"><span>Work With Us</span></span>
                <h2 className="section-title">
                  Want to join
                  <span className="section-title-accent"> our team?</span>
                </h2>
                <p className="cta-lead">
                  We're always looking for talented people. Tell us about
                  yourself and the work you'd love to do.
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

export default Team;
