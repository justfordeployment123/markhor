import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import './Home.css';

const TEAM = [
  {
    id: 1,
    name: 'Muhammad Fizan Tariq',
    role: 'Full-Stack Engineer',
    years: '3 yrs',
    bio: 'Builds end-to-end web platforms and AI-powered products — from architecture to deployment. Has shipped real estate, e-commerce, edtech, and SaaS platforms for clients across the UK and UAE.',
    skills: ['React', 'Next.js', 'Node.js', 'Docker', 'AI Integration'],
    shipped: '7+ products live',
    phone: '+92 346 5833438',
    photo: '/Faizan.jpg',
  },
];

const CULTURE = [
  {
    num: '01',
    title: 'Flat structure, fast decisions',
    desc: 'Twelve people, zero middle management. Every engineer can reach every other engineer in a single Slack message — and every one of them is empowered to push back on a spec.',
  },
  {
    num: '02',
    title: 'Seniors only — no exceptions',
    desc: 'Every full-time hire has shipped at least three production products before we offered them a seat. No "junior developer" role exists on our org chart.',
  },
  {
    num: '03',
    title: 'We hire for curiosity',
    desc: 'Everyone on the team has shipped something weird and ambitious on the side. That\'s the filter. Resumes come second to what you\'ve built, and why.',
  },
  {
    num: '04',
    title: 'Craft, then velocity',
    desc: 'If we have to choose between shipping fast and shipping well, we ship well. Good news: with a senior team, you rarely have to choose.',
  },
];

const HIRING = [
  { role: 'Senior Full-Stack Engineer', type: 'Full-time · Islamabad', status: 'Open' },
  { role: 'Senior Mobile Engineer (iOS)', type: 'Full-time · Islamabad', status: 'Open' },
  { role: 'Product Designer', type: 'Full-time · Islamabad / Remote', status: 'Open' },
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
                <span>The Team</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                Senior engineer.
                <span className="hero-title-accent"> Ships end-to-end.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                The engineer who scopes your project builds your project.
                No account managers, no bait-and-switch, no offshore re-routing.
                Just Fizan — full-stack, Lahore-based, available to meet on a call
                before you sign a thing.
              </p>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={260} immediate>
              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-primary">
                  Book a call with a founder
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="#hiring" className="btn btn-ghost">
                  We're hiring
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={300} immediate>
            <div className="hero-trust">
              {[
                { val: '3 yrs', label: 'Experience' },
                { val: '7+',    label: 'Products shipped' },
                { val: '0',     label: 'Middlemen' },
                { val: '100%',  label: 'In-house · no subs' },
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

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* TEAM GRID */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>The People</span>
              </span>
              <h2 className="section-title">
                Meet the engineer
                <span className="section-title-accent"> who'll build your product.</span>
              </h2>
              <p className="section-lead">
                Not a sales team, not a marketplace. Fizan is who you meet on the
                intro call — and the same person who ships your product from
                kickoff to launch.
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
                    {m.photo
                      ? <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block' }} />
                      : <span className="team-initials">{m.name.split(' ').map((n) => n[0]).join('')}</span>
                    }
                    <span className="team-online" aria-hidden="true">
                      <span className="team-online-dot" />
                      {m.years}
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
                    <div className="team-shipped">
                      <span className="team-shipped-dot" />
                      {m.shipped}
                    </div>
                    {m.phone && (
                      <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="team-shipped" style={{ marginTop: 8, textDecoration: 'none' }}>
                        <span className="team-shipped-dot" />
                        {m.phone}
                      </a>
                    )}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE STAT */}
      <section className="bridge">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="bridge-inner">
              <span className="bridge-divider" aria-hidden="true" />
              <div className="bridge-content">
                <span className="bridge-stat">0</span>
                <p className="bridge-text">
                  juniors, account managers, or middlemen —
                  <span className="bridge-text-accent"> every person you meet ships code.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CULTURE */}
      <section className="studio">
        <div className="studio-bg-grid" aria-hidden="true" />
        <div className="studio-bg-glow" aria-hidden="true" />

        <div className="container studio-container">
          <div className="about-grid">

            <RevealOnScroll animation="fadeUp">
              <div className="about-copy">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Our Culture</span>
                </span>
                <h2 className="section-title">
                  How the studio
                  <span className="section-title-accent"> actually runs.</span>
                </h2>
                <p className="about-text" style={{ marginTop: 24 }}>
                  We take our craft seriously — and ourselves lightly. A small,
                  senior team means flat structure, fast decisions, and high
                  standards across everything we ship. Everyone reviews code
                  everyone else writes. Nobody gets senior-level pay for
                  junior-level work.
                </p>
                <p className="about-text">
                  We hire for curiosity, judgment, and care. Then we trust
                  people to do their best work — with four-day weeks of deep
                  focus, one day of collaboration, and Fridays that end on
                  a shipped demo.
                </p>

                <div className="culture-pulse">
                  <div className="culture-pulse-item">
                    <span className="culture-pulse-val">7+</span>
                    <span className="culture-pulse-key">products shipped</span>
                  </div>
                  <div className="culture-pulse-item">
                    <span className="culture-pulse-val">3</span>
                    <span className="culture-pulse-key">years of experience</span>
                  </div>
                  <div className="culture-pulse-item">
                    <span className="culture-pulse-val">0</span>
                    <span className="culture-pulse-key">layers of management</span>
                  </div>
                </div>
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

      {/* HIRING */}
      <section className="process process-home" id="hiring">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Join the Team</span>
              </span>
              <h2 className="section-title">
                Three open seats.
                <span className="section-title-accent"> Seniors only.</span>
              </h2>
              <p className="howwe-lead">
                We grow slowly on purpose. Three roles below — in-person in
                Islamabad, or a hybrid / remote setup for the right designer.
                Send a project you've shipped, not a CV.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={80}>
            <div className="hiring-list">
              {HIRING.map((h) => (
                <div key={h.role} className="hiring-row">
                  <div className="hiring-row-main">
                    <span className="hiring-row-status">
                      <span className="hiring-row-dot" />
                      {h.status}
                    </span>
                    <h3 className="hiring-row-title">{h.role}</h3>
                    <p className="hiring-row-type">{h.type}</p>
                  </div>
                  <a
                    href="mailto:careers@markhorsystems.com?subject=Application"
                    className="hiring-row-cta"
                  >
                    Apply
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <p className="hiring-note">
              <span className="hiring-note-dot" />
              Don't see your role? Email{' '}
              <a href="mailto:careers@markhorsystems.com">careers@markhorsystems.com</a>{' '}
              — we read every message.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        status="Accepting 2 new projects · Q3 2026"
        title="Want to work with"
        titleAccent="this exact team?"
        lead="The engineers above are the ones who'll meet you on the intro call — and the same team who'll ship your product from kickoff to launch."
        bullets={[
          'Meet engineers by name before you sign',
          'Same team from discovery to launch',
          '30-min scoping call · NDA on request',
        ]}
        ctaLabel="Book a scoping call"
      />

    </div>
  );
};

export default Team;
