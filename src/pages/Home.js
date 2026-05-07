import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LogoWall from '../components/LogoWall';
import Guarantees from '../components/Guarantees';
import FAQ from '../components/FAQ';
import logoImg from '../assets/markhor_logo.png';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const SERVICES = [
  {
    num: '01',
    title: 'Mobile that feels native, wherever it runs',
    desc: 'iOS, Android, React Native, Flutter. We\'ve shipped apps in 12 countries with a 4.9 average App Store rating — so your first review doesn\'t come with a screenshot of a crash.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    img: mobileImg,
  },
  {
    num: '02',
    title: 'Web apps built to outlive your Series A',
    desc: 'React, Next.js, Node.js, PostgreSQL. Clean architecture, documented code, tests where they matter. When your in-house team takes over, they\'ll thank us — not curse us.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    img: webImg,
  },
  {
    num: '03',
    title: 'AI that ships, not AI that demos',
    desc: 'LLMs, computer vision, automation pipelines. We\'ve embedded AI into healthcare triage, logistics routing, and customer support — the kind of work that has to be right, not just impressive.',
    tags: ['LLMs', 'Computer Vision', 'Automation', 'Pipelines'],
    img: aiImg,
  },
];

const WORK = [
  {
    cat: 'AI · Web App',
    title: 'ExplainMyLetter',
    year: '2024',
    href: 'https://test.explainmyletter.co.uk/',
    oneliner: 'AI platform that reads complex UK official letters and delivers plain-English explanations, gated behind Stripe.',
  },
  {
    cat: 'Real Estate · Web',
    title: 'Remax Hub',
    year: '2024',
    href: 'https://remaxhub.ae/',
    oneliner: 'Full-stack property platform for UAE\'s RE/MAX network — listings, lead capture, agent profiles, and a rich-text admin CMS.',
  },
  {
    cat: 'AI · SaaS',
    title: 'Enhancia.ai',
    year: '2024',
    href: 'https://enhancia.ai/',
    oneliner: 'AI SaaS that auto-stages property photos, generates marketing videos, and processes floor plans through a job queue.',
  },
  {
    cat: 'Retail · Web',
    title: 'Stilo E-Commerce',
    year: '2023',
    href: 'http://xs8ssw0g0cssscw8scowwkwg.72.60.29.89.sslip.io',
    oneliner: 'Multi-vendor platform with role-based auth, real-time chat, order tracking, and Stripe payments.',
  },
  {
    cat: 'EdTech · AI',
    title: 'Memora Study',
    year: '2024',
    href: 'https://memora-study.com/',
    oneliner: 'Smart study platform that converts lectures and PDFs into AI-generated flashcards, MCQs, and mind maps with Arabic support.',
  },
  {
    cat: 'Accessibility · Web',
    title: 'SilverSurfers.ai',
    year: '2024',
    href: 'https://silversurfers.ai',
    oneliner: 'Accessibility score calculator that evaluates website usability for elderly users and scores digital inclusivity in real time.',
  },
  {
    cat: 'Logistics · Web',
    title: 'Aeroplane UAV',
    year: '2023',
    href: 'http://g0kskg4c8cssko0skskkc0ok.72.60.29.89.sslip.io',
    oneliner: 'Corporate UAV platform presenting drone services across civil logistics, emergency rescue, and low-altitude economy.',
  },
];

const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Swift', 'Kotlin', 'Python', 'PyTorch',
  'Go', 'Rust', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL',
  'Figma', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'OpenAI',
];

const PROCESS = [
  {
    num: '01',
    phase: 'Phase I',
    title: 'Discover',
    desc: 'One week of user interviews, competitive teardown, and hard questions. We\'ll probably tell you to cut half your feature list — and why. Hate the output? Pay for the week and walk away with everything we made.',
    duration: '1 Week',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
      </svg>
    ),
  },
  {
    num: '02',
    phase: 'Phase II',
    title: 'Design',
    desc: 'A senior product designer turns the priority map into clickable Figma prototypes — not mood boards. We test with 3–5 real users before the first engineer opens an IDE.',
    duration: '2 Weeks',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    num: '03',
    phase: 'Phase III',
    title: 'Build',
    desc: 'Two-week sprints. Weekly Loom demos of staging. Every pull request reviewed by a senior. Every commit pushed to your GitHub org, not ours — production-ready, not "almost done".',
    duration: '6–10 Weeks',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4-8 4-8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4 8-4M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    num: '04',
    phase: 'Phase IV',
    title: 'Iterate',
    desc: 'Thirty days of free bug fixes are in every contract — because real users find things beta testers don\'t. Keep us on retainer, hand off to your team (we\'ll train them), or walk cleanly.',
    duration: 'Week 14+',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0114-5.3L20 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 4v5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 01-14 5.3L4 15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20v-5h5" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote: 'We\'d been burned twice before Markhor — once by a shop that shipped nothing for six months, once by a "senior team" that turned out to be two juniors on a Discord. Markhor was different from the first week. Same four engineers kickoff to launch. Weekly demos that actually worked. Our MVP shipped in 11 weeks and we closed our seed round two months later.',
    name: 'Sarah Chen',
    role: 'Founder & CEO · NovaPay (YC W24)',
    company: 'NP',
    project: 'FinTech · Web',
    rating: 5,
    featured: true,
  },
  {
    quote: 'The thing no one tells you about hiring offshore is that timezone can be an asset. I\'d send a bug at 6 pm in New York and wake up to a PR merged, a staging link, and a Loom walking me through the fix. Ahmed and the team felt less like a vendor and more like the CTO I couldn\'t afford yet.',
    name: 'Ahmed Khalil',
    role: 'Co-founder · Routeflow (Series A, €4.2M)',
    company: 'RF',
    project: 'Logistics · Platform',
    rating: 5,
  },
  {
    quote: 'We pivoted twice during the build. Most agencies would have sent a change-order shakedown. Markhor re-scoped in a 30-minute call and kept shipping. The final product is the only code I\'ve ever inherited that I didn\'t immediately want to rewrite — and my in-house team agrees.',
    name: 'Priya Sharma',
    role: 'CTO · Shopkart Commerce',
    company: 'SK',
    project: 'Retail · Mobile',
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="home">

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="hero-bg-glow-2" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-layout">

            <div className="hero-copy">
              <RevealOnScroll animation="fadeUp" delay={0} immediate>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Senior Product Studio · Islamabad</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={100} immediate>
                <h1 className="hero-title">
                  Your product, shipped
                  <span className="hero-title-accent"> — not just promised.</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={180} immediate>
                <p className="hero-lead">
                  We're Markhor Systems, a senior product studio in Islamabad building
                  mobile, web, and AI products for early-stage founders in
                  12+ countries. Fixed scope. Weekly demos. Code you own from day one.
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
                  <Link to="/services" className="btn btn-ghost btn-ghost-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M13 6l6 6-6 6" />
                    </svg>
                    See what we've shipped
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

              {/* Proof strip — glanceable social proof */}
              <RevealOnScroll animation="fadeUp" delay={380} immediate>
                <div className="hero-proof">
                  <Link to="/reviews" className="hero-proof-stars" aria-label="4.9 out of 5 from 50+ clients">
                    <span className="hero-proof-avatars" aria-hidden="true">
                      {['S', 'A', 'P', 'D', 'L'].map((initial, i) => (
                        <span key={i} className={`hero-proof-avatar hero-proof-avatar-${i}`}>{initial}</span>
                      ))}
                    </span>
                    <span className="hero-proof-rating">
                      <span className="hero-proof-stars-row" aria-hidden="true">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                            <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
                          </svg>
                        ))}
                      </span>
                      <span className="hero-proof-label">
                        <strong>4.9</strong> · from 50+ clients
                      </span>
                    </span>
                  </Link>
                  <span className="hero-proof-divider" aria-hidden="true" />
                  <span className="hero-proof-avail">
                    <span className="hero-proof-avail-dot" />
                    <span>2 slots open · avg 6h reply</span>
                  </span>
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
                <span className="hero-visual-badge">EST · 2023</span>

                {/* Orbital tech badges */}
                <div className="hero-orbits" aria-hidden="true">
                  <span className="hero-orb hero-orb-1">
                    <span className="hero-orb-dot" />
                    React
                  </span>
                  <span className="hero-orb hero-orb-2">
                    <span className="hero-orb-dot" />
                    Swift
                  </span>
                  <span className="hero-orb hero-orb-3">
                    <span className="hero-orb-dot" />
                    Python
                  </span>
                  <span className="hero-orb hero-orb-4">
                    <span className="hero-orb-dot" />
                    GPT-4
                  </span>
                  <span className="hero-orb hero-orb-5">
                    <span className="hero-orb-dot" />
                    Next.js
                  </span>
                  <span className="hero-orb hero-orb-6">
                    <span className="hero-orb-dot" />
                    Go
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Trust bar — mix of scale proof + commitments */}
          <RevealOnScroll animation="fadeUp" delay={400} immediate>
            <div className="hero-trust">
              {[
                { val: '50+',   label: 'Projects Shipped', meta: 'scale' },
                { val: '3 yrs', label: 'Since 2023',       meta: 'scale' },
                { val: '< 24h', label: 'First Reply',      meta: 'promise' },
                { val: '100%',  label: 'Code is Yours',    meta: 'promise' },
              ].map((s, i) => (
                <div key={i} className={`trust-stat trust-stat-${s.meta}`}>
                  <span className="trust-stat-val">{s.val}</span>
                  <span className="trust-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════ MARQUEE STRIP ══════════════ */}
      <section className="marquee-strip" aria-label="Technologies we use">
        <div className="marquee-strip-fade marquee-strip-fade-l" aria-hidden="true" />
        <div className="marquee-strip-fade marquee-strip-fade-r" aria-hidden="true" />
        <div className="marquee-strip-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span key={i} className="marquee-strip-item">
              <span className="marquee-strip-dot" />
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header">
              <span className="eyebrow"><span>What We Do</span></span>
              <h2 className="section-title">
                Three disciplines.
                <span className="section-title-accent"> One senior team.</span>
              </h2>
              <p className="section-lead">
                We don't spread thin. We go deep in the three areas most
                early-stage products actually need — and say no to the rest.
              </p>
            </div>
          </RevealOnScroll>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <RevealOnScroll key={s.num} animation="fadeUp" delay={i * 100}>
                <article className="service-card">
                  <div className="service-media">
                    <div className="service-media-glow" />
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="service-body">
                    <span className="service-num">{s.num}</span>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                    <div className="service-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="service-tag">{t}</span>
                      ))}
                    </div>
                    <Link to="/services" className="service-link">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ LOGO WALL — social proof ══════════════ */}
      <LogoWall />

      {/* ══════════════ BRIDGE STAT ══════════════ */}
      <section className="bridge">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="bridge-inner">
              <span className="bridge-divider" aria-hidden="true" />
              <div className="bridge-content">
                <span className="bridge-stat">92%</span>
                <p className="bridge-text">
                  of our clients return for a second project —
                  <span className="bridge-text-accent"> we build for the long haul.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════ ABOUT / STUDIO ══════════════ */}
      <section className="studio">
        <div className="studio-bg-grid" aria-hidden="true" />
        <div className="studio-bg-glow" aria-hidden="true" />

        <div className="container studio-container">

          <div className="studio-top">
            <RevealOnScroll animation="fadeUp">
              <div className="studio-intro">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>About the Studio</span>
                </span>
                <h2 className="studio-title">
                  Born in Islamabad.
                  <br />
                  <span className="studio-title-accent">Built for the world.</span>
                </h2>
                <p className="studio-lead">
                  Markhor started in 2023 with a simple idea: founders deserve
                  senior engineering talent without the agency markup or the
                  offshore horror stories. In two years we've shipped{' '}
                  <strong>7+ live products for clients in the UK, UAE, and beyond</strong>,
                  from AI platforms to full-stack SaaS.
                </p>
                <p className="studio-lead">
                  We're named after Pakistan's national animal — a mountain goat
                  that climbs where others can't. Our Lahore hours overlap a full
                  workday with London and 4–5 hours with New York, so problems
                  you surface at 5 pm are often solved by breakfast.
                </p>

                <div className="studio-tags">
                  {['Mobile', 'Web', 'AI / ML', 'Design', 'Strategy'].map((t) => (
                    <span key={t} className="studio-tag">{t}</span>
                  ))}
                </div>

                <div className="studio-cta-row">
                  <Link to="/about" className="btn btn-ghost">
                    Our Story
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="studio-status">
                    <span className="studio-status-dot" />
                    <span>Accepting projects · Q3 2026</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="studio-medallion">
                <div className="medallion-ring medallion-ring-1" />
                <div className="medallion-ring medallion-ring-2" />
                <div className="medallion-ring medallion-ring-3" />
                <div className="medallion-glow" />

                <div className="medallion-core">
                  <span className="medallion-num">
                    50<span className="medallion-plus">+</span>
                  </span>
                  <span className="medallion-label">Products Shipped</span>
                </div>

                <span className="medallion-orbit medallion-orbit-1">
                  <span className="medallion-orbit-val">3</span>
                  <span className="medallion-orbit-key">YEARS</span>
                </span>
                <span className="medallion-orbit medallion-orbit-2">
                  <span className="medallion-orbit-val">10+</span>
                  <span className="medallion-orbit-key">CLIENTS</span>
                </span>
                <span className="medallion-orbit medallion-orbit-3">
                  <span className="medallion-orbit-val">4.9</span>
                  <span className="medallion-orbit-key">RATING</span>
                </span>
                <span className="medallion-orbit medallion-orbit-4">
                  <span className="medallion-orbit-val">12</span>
                  <span className="medallion-orbit-key">COUNTRIES</span>
                </span>
              </div>
            </RevealOnScroll>
          </div>

          <div className="principles-header">
            <RevealOnScroll animation="fadeUp">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Our Principles</span>
              </span>
              <h3 className="principles-heading">
                How we work,
                <span className="section-title-accent"> and why it matters to you.</span>
              </h3>
              <p className="principles-intro">
                Every early-stage founder we meet has been burned before —
                by an agency that sold seniors and delivered juniors,
                by a scope that tripled, by a team that went dark at launch.
                These principles exist because we've spent years fixing other
                people's messes. Here's how we do it differently.
              </p>
            </RevealOnScroll>
          </div>

          <div className="principles-grid">
            {[
              {
                roman: 'I',
                glyph: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.39 5.2 5.61.66-4.2 3.9 1.18 5.54L12 15.5l-4.98 2.8 1.18-5.54-4.2-3.9 5.61-.66L12 3z" />
                  </svg>
                ),
                t: 'The engineer who sells the project builds the project.',
                d: 'No account managers. No bait-and-switch. You\'ll meet the senior engineers on your project by name before you sign — and you\'ll work with the same team from kickoff to launch.',
                tag: 'Craft',
                proofs: [
                  'Meet engineers by name before you sign',
                  'Same team from kickoff to launch',
                  '3+ shipped products before touching your code',
                ],
                stat: { val: '100%', key: 'senior engineers' },
              },
              {
                roman: 'II',
                glyph: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 9-9 9-9-9 9-9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
                  </svg>
                ),
                t: 'Fixed scope. Fixed price. Fixed shame if we miss.',
                d: 'Every proposal lists what\'s in, what\'s out, and what it costs — line by line. If a sprint takes longer than we estimated, that\'s on us, not on your runway.',
                tag: 'Trust',
                proofs: [
                  'Line-by-line fixed-scope proposals',
                  'Written approval for any change order',
                  'We absorb overruns — not your runway',
                ],
                stat: { val: '0%', key: 'scope creep on you' },
              },
              {
                roman: 'III',
                glyph: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                  </svg>
                ),
                t: 'You\'ll see real software every Friday.',
                d: 'A Loom demo of working code every week, starting in week two. Daily Slack updates. A live standup at your timezone, not ours. If you ever wonder "what did they ship this week?", something\'s gone wrong.',
                tag: 'Velocity',
                proofs: [
                  'Loom demo of staging every Friday',
                  'Daily Slack updates · 2-hour SLA',
                  'Standup at your timezone, not ours',
                ],
                stat: { val: '< 2h', key: 'Slack reply SLA' },
              },
              {
                roman: 'IV',
                glyph: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4v10l-8 4-8-4V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 4 8-4M12 11v10" />
                  </svg>
                ),
                t: 'Code your future CTO will thank us for.',
                d: 'Every pull request reviewed by a senior. Test coverage reported weekly. Every delivery ships with a README, architecture diagram, and walkthrough video — so your next engineer can pick it up in an afternoon.',
                tag: 'Longevity',
                proofs: [
                  'Every PR reviewed by a senior',
                  'Weekly test coverage reports',
                  'README · diagram · walkthrough video',
                ],
                stat: { val: '30 days', key: 'free bug warranty' },
              },
            ].map((p, i) => (
              <RevealOnScroll key={p.roman} animation="fadeUp" delay={i * 80}>
                <article className="principle-card">
                  <div className="principle-card-top">
                    <span className="principle-card-roman">{p.roman}</span>
                    <span className="principle-card-tag">
                      <span className="principle-card-tag-dot" />
                      {p.tag}
                    </span>
                  </div>

                  <div className="principle-card-main">
                    <span className="principle-card-icon" aria-hidden="true">{p.glyph}</span>
                    <h4 className="principle-card-title">{p.t}</h4>
                  </div>

                  <p className="principle-card-desc">{p.d}</p>

                  <ul className="principle-card-proofs">
                    {p.proofs.map((pr) => (
                      <li key={pr} className="principle-card-proof">
                        <span className="principle-card-proof-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        {pr}
                      </li>
                    ))}
                  </ul>

                  <div className="principle-card-foot">
                    <div className="principle-card-stat">
                      <span className="principle-card-stat-val">{p.stat.val}</span>
                      <span className="principle-card-stat-key">{p.stat.key}</span>
                    </div>
                    <span className="principle-card-foot-dot" aria-hidden="true" />
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="process process-home">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>How We Work</span>
              </span>
              <h2 className="section-title">
                How a Markhor project
                <span className="section-title-accent"> actually runs.</span>
              </h2>
              <p className="howwe-lead">
                Most agency "process" pages are fiction. Here's the real
                week-by-week — the deliverables you'll get, the meetings
                you'll sit in, and roughly when.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={100}>
            <div className="howwe">
              <div className="howwe-rail" aria-hidden="true" />

              <div className="howwe-grid">
                {PROCESS.map((p, i) => (
                  <div key={p.num} className="howwe-step" style={{ '--i': i }}>
                    <span className="howwe-step-phase">{p.phase}</span>

                    <div className="howwe-step-marker" aria-hidden="true">
                      <span className="howwe-step-marker-dot" />
                    </div>

                    <div className="howwe-step-body">
                      <div className="howwe-step-head">
                        <span className="howwe-step-num">{p.num}</span>
                        <span className="howwe-step-icon" aria-hidden="true">{p.glyph}</span>
                      </div>
                      <h3 className="howwe-step-title">{p.title}</h3>
                      <p className="howwe-step-desc">{p.desc}</p>
                      <div className="howwe-step-duration">
                        <span className="howwe-step-duration-dot" />
                        {p.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════ GUARANTEES — trust commitments ══════════════ */}
      <Guarantees />

      {/* ══════════════ WORK ══════════════ */}
      <section className="work">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-row">
              <div>
                <span className="eyebrow"><span>Selected Work</span></span>
                <h2 className="section-title">
                  Selected
                  <span className="section-title-accent"> work.</span>
                </h2>
                <p className="section-lead" style={{ marginTop: 16 }}>
                  Seven live products. Different industries, different tech,
                  one thing in common: each one shipped to real users — not a demo reel.
                </p>
              </div>
              <Link to="/services" className="btn btn-ghost">
                View All Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>

          <div className="work-grid">
            {WORK.map((w, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="work-card">
                  <div className="work-card-visual">
                    <div className="work-card-visual-grid" />
                    <div className="work-card-visual-glow" />
                    {/* Swap this placeholder for <img src={...} alt={w.title} /> later */}
                    <div className="work-card-placeholder" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
                        <rect x="6" y="9" width="36" height="30" rx="3" />
                        <circle cx="17" cy="20" r="3" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M42 31L30 19 14 35" />
                      </svg>
                    </div>
                  </div>
                  <div className="work-card-body">
                    <span className="work-card-cat">{w.cat}</span>
                    <h3 className="work-card-title">{w.title}</h3>
                    {w.oneliner && <p className="work-card-oneliner">{w.oneliner}</p>}
                    <div className="work-card-foot">
                      <span className="work-card-year">{w.year}</span>
                      <span className="work-card-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="testi">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>What Clients Say</span></span>
              <h2 className="section-title">
                Their words,
                <span className="section-title-accent"> not ours.</span>
              </h2>
              <p className="section-lead" style={{ marginTop: 18 }}>
                We asked recent clients what they'd want a first-time founder
                to know about working with us. Here's what came back.
              </p>
            </div>
          </RevealOnScroll>

          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 90}>
                <figure className={`testi-card ${t.featured ? 'testi-card-featured' : ''}`}>
                  {t.featured && (
                    <span className="testi-featured-badge">
                      <span className="testi-featured-dot" />
                      Featured Story
                    </span>
                  )}
                  <div className="testi-head">
                    <div className="testi-company" aria-hidden="true">{t.company}</div>
                    <div className="testi-rating" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, s) => (
                        <svg key={s} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                          <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="testi-quote">{t.quote}</blockquote>
                  <figcaption className="testi-foot">
                    <div className="testi-avatar">{t.name.charAt(0)}</div>
                    <div className="testi-foot-text">
                      <p className="testi-name">{t.name}</p>
                      <p className="testi-role">{t.role}</p>
                    </div>
                    <span className="testi-project-chip">{t.project}</span>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ — objection handling ══════════════ */}
      <FAQ />

      {/* ══════════════ CTA ══════════════ */}
      <section className="cta">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="cta-bg-grid" aria-hidden="true" />
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="cta-panel">
              <div className="cta-panel-decor" aria-hidden="true">
                <span className="cta-panel-ring cta-panel-ring-1" />
                <span className="cta-panel-ring cta-panel-ring-2" />
                <span className="cta-panel-ring cta-panel-ring-3" />
                <span className="cta-panel-glow" />
              </div>

              <div className="cta-copy">
                <div className="cta-status">
                  <span className="cta-status-dot" />
                  <span>Accepting 2 new projects · Q3 2026</span>
                </div>
                <h2 className="section-title">
                  Let's make something
                  <span className="section-title-accent"> worth talking about.</span>
                </h2>
                <p className="cta-lead">
                  You've got an idea, a deadline, or a pile of legacy code you've
                  stopped enjoying. We've got a senior full-stack engineer, 3 years
                  of shipping experience, and a Monday morning that's wide open.
                </p>
                <p className="cta-lead" style={{ marginTop: 12 }}>
                  If we're not the right fit, we'll say so on the call and point
                  you somewhere better — we'd rather lose a bad project than win one.
                </p>

                <ul className="cta-bullets">
                  {[
                    '30-minute call — no pitch deck required',
                    'NDA on request, before the first call',
                    'Honest referral if we\'re not the right fit',
                  ].map((b) => (
                    <li key={b} className="cta-bullet">
                      <span className="cta-bullet-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Book a 30-min call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <div className="cta-divider">
                  <span className="cta-divider-line" />
                  <span className="cta-divider-text">or email directly</span>
                  <span className="cta-divider-line" />
                </div>

                <a href="mailto:hello@markhorsystems.com" className="cta-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                  </svg>
                  hello@markhorsystems.com
                </a>

                <div className="cta-response">
                  <span className="cta-response-dot" />
                  <span>
                    Typical reply · <strong>under 4 hours</strong>
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Home;
