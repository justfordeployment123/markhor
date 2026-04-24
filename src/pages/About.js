import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import logoImg from '../assets/markhor_logo.png';
import './Home.css';

const VALUES = [
  {
    num: '01',
    tag: 'Why it matters',
    title: 'We say no to more work than we take',
    desc: 'Three disciplines, done properly, beats ten done "fine". You never get a junior pretending to be a senior — because we only hire seniors.',
    proof: '~70% of inbound inquiries',
    proofKey: 'we politely decline',
  },
  {
    num: '02',
    tag: 'The agreement',
    title: 'Your code, your IP — from commit one',
    desc: 'Every repo lives in your GitHub org. Every credential in your 1Password. Every design file in your Figma. You own it all from day one — not day 180.',
    proof: '0',
    proofKey: 'hostage situations',
  },
  {
    num: '03',
    tag: 'The pace',
    title: 'Something ships every Friday',
    desc: 'A Loom walkthrough of real, working software every week — starting in week two. If you ever ask "what did they ship this week?", something\'s already wrong.',
    proof: 'Every Friday',
    proofKey: 'a staging demo lands',
  },
  {
    num: '04',
    tag: 'The safety net',
    title: 'Walk away clean, any time',
    desc: 'Month-to-month for retainers. Sprint-boundary exit for projects. We hand over clean code and full documentation within 48 hours — no penalties, no drama.',
    proof: '48 h',
    proofKey: 'to full handover',
  },
];

const MILESTONES = [
  {
    year: '2019',
    title: 'Three engineers, one small idea',
    desc: 'Markhor starts in a shared office in Gulberg — three engineers who\'d quit better-paying jobs to build products that mattered more.',
    stat: '3 founders',
  },
  {
    year: '2020',
    title: 'First six-figure project',
    desc: 'We ship a mobile app for a Series A fintech — on time, under budget. They refer us to two more founders in the same accelerator.',
    stat: '4.9★ App Store',
  },
  {
    year: '2021',
    title: 'AI practice opens',
    desc: 'We ship our first production ML pipeline — a HIPAA-scoped triage model that classifies patient intake in under three seconds.',
    stat: '97% accuracy',
  },
  {
    year: '2022',
    title: '30 products shipped across three continents',
    desc: 'From a logistics platform in Berlin to a retail app in São Paulo. Every one of them still live, still updating.',
    stat: '3 continents',
  },
  {
    year: '2023',
    title: 'The team crosses a dozen',
    desc: 'Twelve senior engineers — all hired, zero contracted. Flat structure. Weekly architecture reviews. No middle management, ever.',
    stat: '12 seniors',
  },
  {
    year: '2024',
    title: 'A very quiet year of compounding',
    desc: 'No rebrand. No Series A of our own. Just seventeen new products shipped — and the first client we built with in 2019 renewed again.',
    stat: '50+ shipped',
  },
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
                  Named after a mountain goat.
                  <span className="hero-title-accent"> Built for founders who can't afford to guess.</span>
                </h1>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={180} immediate>
                <p className="hero-lead">
                  Markhor is a small, senior product studio in Lahore.
                  Since 2019, we've shipped 50+ products for founders in
                  12 countries — quietly, on time, without the agency theatre.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={260} immediate>
                <div className="hero-ctas">
                  <Link to="/contact" className="btn btn-primary">
                    Book a free scoping call
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link to="/team" className="btn btn-ghost">
                    Meet the team
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={320} immediate>
                <p className="hero-microtrust">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                  30-minute call · NDA on request · No pitch deck required
                </p>
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

                <div className="hero-orbits" aria-hidden="true">
                  <span className="hero-orb hero-orb-1"><span className="hero-orb-dot" />React</span>
                  <span className="hero-orb hero-orb-2"><span className="hero-orb-dot" />Swift</span>
                  <span className="hero-orb hero-orb-3"><span className="hero-orb-dot" />Python</span>
                  <span className="hero-orb hero-orb-4"><span className="hero-orb-dot" />GPT-4</span>
                  <span className="hero-orb hero-orb-5"><span className="hero-orb-dot" />Next.js</span>
                  <span className="hero-orb hero-orb-6"><span className="hero-orb-dot" />Go</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={400} immediate>
            <div className="hero-trust">
              {[
                { val: '50+',   label: 'Products shipped' },
                { val: '12',    label: 'Countries served' },
                { val: '7 yrs', label: 'Climbing together' },
                { val: '4.9★',  label: 'Avg App Store' },
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

      {/* OUR STORY */}
      <section className="services">
        <div className="container">
          <div className="about-grid">

            <RevealOnScroll animation="fadeUp">
              <div className="about-copy">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Our Story</span>
                </span>
                <h2 className="section-title">
                  Three engineers,
                  <span className="section-title-accent"> a better bet.</span>
                </h2>
                <p className="about-text" style={{ marginTop: 24 }}>
                  Markhor started the way most studios don't — three engineers
                  who'd quit better-paying jobs at larger firms because we
                  were tired of watching good founders get sold "senior teams"
                  and delivered juniors on a Discord.
                </p>
                <p className="about-text">
                  We're named after Pakistan's national animal — a mountain goat
                  that climbs where others can't. It's an on-the-nose metaphor
                  for the work we take on: the technical climbs that early-stage
                  founders can't staff for, done by a team small enough to still
                  care who the client is.
                </p>
                <p className="about-text">
                  Seven years later, the company has grown to twelve seniors —
                  all hired, zero contracted — shipping from Lahore to 12 countries.
                  Same four founding engineers, same office, same principles.
                  We've turned away more work than we've taken. That part isn't
                  changing.
                </p>

                <Link to="/team" className="btn btn-ghost" style={{ marginTop: 28 }}>
                  Meet every engineer
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="about-values">
                {VALUES.map((v) => (
                  <div key={v.num} className="value-card value-card-rich">
                    <div className="value-card-head">
                      <span className="value-card-num">{v.num}</span>
                      <span className="value-card-tag">{v.tag}</span>
                    </div>
                    <h4 className="value-card-title">{v.title}</h4>
                    <p className="value-card-desc">{v.desc}</p>
                    <div className="value-card-proof">
                      <span className="value-card-proof-val">{v.proof}</span>
                      <span className="value-card-proof-key">{v.proofKey}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
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
                <span className="bridge-stat">100%</span>
                <p className="bridge-text">
                  senior engineers, zero subcontractors —
                  <span className="bridge-text-accent"> the team that sells is the team that ships.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY LAHORE — timezone as feature */}
      <section className="studio">
        <div className="studio-bg-grid" aria-hidden="true" />
        <div className="studio-bg-glow" aria-hidden="true" />

        <div className="container studio-container">
          <div className="timezone-layout">
            <RevealOnScroll animation="fadeUp">
              <div className="timezone-copy">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Why Lahore</span>
                </span>
                <h2 className="section-title">
                  A timezone that does
                  <span className="section-title-accent"> overnight work.</span>
                </h2>
                <p className="studio-lead" style={{ marginTop: 20 }}>
                  The thing no one tells you about hiring from Lahore is that
                  timezone can be an asset. Send a bug at 6 pm in New York
                  and wake up to a PR merged, a staging link, and a Loom
                  walking you through the fix. A full workday overlap with
                  London. Late afternoons with San Francisco.
                </p>
                <p className="studio-lead" style={{ marginTop: 14 }}>
                  Most of our US clients say it feels faster than working
                  with a team next door — because by the time they open Slack,
                  we've already shipped the thing they asked for yesterday.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="timezone-grid">
                {[
                  { city: 'London', overlap: 'Full workday', detail: '9:00 – 17:00 GMT aligns with our core hours' },
                  { city: 'Berlin', overlap: 'Full workday', detail: 'Our afternoon is their morning, end to end' },
                  { city: 'New York', overlap: '4–5 hours', detail: 'Overnight async handoff — bug at 6pm, fix by 9am' },
                  { city: 'San Francisco', overlap: 'Late afternoon', detail: 'Your morning standup is our wind-down' },
                ].map((tz) => (
                  <div key={tz.city} className="timezone-card">
                    <div className="timezone-card-head">
                      <span className="timezone-card-city">{tz.city}</span>
                      <span className="timezone-card-pill">{tz.overlap}</span>
                    </div>
                    <p className="timezone-card-detail">{tz.detail}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* MILESTONES — editorial timeline with stats */}
      <section className="process process-home">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Our Journey</span>
              </span>
              <h2 className="section-title">
                Seven years,
                <span className="section-title-accent"> quietly compounding.</span>
              </h2>
              <p className="howwe-lead">
                No rebrands. No raises of our own. Just a steady climb —
                one year, one client, one milestone at a time.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={100}>
            <div className="milestones">
              <div className="milestones-rail" aria-hidden="true" />
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`milestone-item milestone-item-${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="milestone-marker" aria-hidden="true">
                    <span className="milestone-marker-dot" />
                  </div>
                  <div className="milestone-card">
                    <span className="milestone-year">{m.year}</span>
                    <h3 className="milestone-title">{m.title}</h3>
                    <p className="milestone-desc">{m.desc}</p>
                    {m.stat && (
                      <span className="milestone-stat">
                        <span className="milestone-stat-dot" />
                        {m.stat}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        status="Accepting 2 new projects · Q3 2026"
        title="Your next product."
        titleAccent="Our next Monday."
        lead="You've got an idea, a deadline, or a pile of legacy code you've stopped enjoying. We've got 12 senior engineers and a Monday morning that's wide open."
        bullets={[
          '30-minute call — no pitch deck required',
          'NDA on request, before the first call',
          'Honest referral if we\'re not the right fit',
        ]}
        ctaLabel="Book a scoping call"
      />

    </div>
  );
};

export default About;
