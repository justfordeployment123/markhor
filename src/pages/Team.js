import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import './Home.css';

const TEAM = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'CEO · Founding Engineer',
    years: '12 yrs',
    bio: 'Co-founder. Ex-ex-Enterprise-Java who quit to ship smaller, better things. Now picks up the phone when clients call on a Friday at 9 pm.',
    skills: ['Product Strategy', 'Team Leadership', 'Client Partnerships'],
    shipped: '14+ products shipped',
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'CTO · Architecture Lead',
    years: '11 yrs',
    bio: 'Backend and distributed systems. Wrote most of the internal infra. Reviews every architecture decision above a certain blast radius.',
    skills: ['Distributed Systems', 'AWS / GCP', 'API Design'],
    shipped: '30+ systems in prod',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead iOS / Android',
    years: '9 yrs',
    bio: 'Ex-fintech mobile lead. Obsessive about crash-free rates and launch-day readiness. Has shipped apps to 12 App Stores and 6 Play Store regions.',
    skills: ['Swift', 'Kotlin', 'React Native'],
    shipped: '18 apps on stores',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Lead Web Engineer',
    years: '8 yrs',
    bio: 'React / Next.js specialist. Built the first three NovaPay dashboards. Has opinions about form validation that you will eventually thank her for.',
    skills: ['React', 'Next.js', 'TypeScript'],
    shipped: '22 web apps live',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'AI / ML Engineer',
    years: '7 yrs',
    bio: 'Built our first LLM pipeline in 2021 before it was cool. Now specialises in HIPAA-scoped AI and production RAG. Hates demos that don\'t generalise.',
    skills: ['PyTorch', 'OpenAI', 'LangChain', 'RAG'],
    shipped: '9 AI systems in prod',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Lead Product Designer',
    years: '10 yrs',
    bio: 'Figma-to-production, end to end. Designs interfaces engineers can actually build — and users actually use. Runs our user research loop.',
    skills: ['UI Design', 'UX Research', 'Design Systems'],
    shipped: '40+ interfaces',
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
  { role: 'Senior Full-Stack Engineer', type: 'Full-time · Lahore', status: 'Open' },
  { role: 'Senior Mobile Engineer (iOS)', type: 'Full-time · Lahore', status: 'Open' },
  { role: 'Product Designer', type: 'Full-time · Lahore / Remote', status: 'Open' },
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
                Twelve seniors.
                <span className="hero-title-accent"> One very small room.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                The engineer who sells you the project builds the project.
                No account managers, no offshore re-routing, no "we'll assign
                someone from our Manila office." Just the people below —
                all on the same floor in Lahore.
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
                { val: '12',    label: 'Senior engineers' },
                { val: '7+ yrs', label: 'Avg experience' },
                { val: '0',     label: 'Juniors on your project' },
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
                Meet the engineers
                <span className="section-title-accent"> who'll build your product.</span>
              </h2>
              <p className="section-lead">
                Not a hired sales team. Not a marketplace. The team below is who
                you'll meet on the intro call — and the same team who'll ship
                the work from kickoff to launch.
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
                    <span className="culture-pulse-val">4</span>
                    <span className="culture-pulse-key">focus days / week</span>
                  </div>
                  <div className="culture-pulse-item">
                    <span className="culture-pulse-val">100%</span>
                    <span className="culture-pulse-key">of hires are seniors</span>
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
                Lahore, or a hybrid / remote setup for the right designer.
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
