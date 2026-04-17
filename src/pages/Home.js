import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import logoImg from '../assets/markhor_logo.png';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const SERVICES = [
  {
    num: '01',
    title: 'Mobile Development',
    desc: 'Native iOS and Android apps with polished UX that users keep coming back to. Built for performance and delight.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    img: mobileImg,
  },
  {
    num: '02',
    title: 'Web Applications',
    desc: 'Scalable SaaS platforms and web apps engineered for performance, reliability and long-term growth.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    img: webImg,
  },
  {
    num: '03',
    title: 'AI & Machine Learning',
    desc: 'Intelligent systems that learn, automate, and reshape how your business operates at scale.',
    tags: ['LLMs', 'Computer Vision', 'Automation', 'Pipelines'],
    img: aiImg,
  },
];

const WORK = [
  {
    cat: 'FinTech · Web App',
    title: 'NovaPay Dashboard',
    year: '2024',
    tag: 'Featured',
  },
  {
    cat: 'Retail · Mobile',
    title: 'Shopkart Commerce',
    year: '2024',
  },
  {
    cat: 'Healthcare · AI',
    title: 'Clearpath Triage',
    year: '2023',
  },
  {
    cat: 'Logistics · Platform',
    title: 'Routeflow OS',
    year: '2023',
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We start by understanding your business, users, and constraints. No templates, no assumptions.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Interfaces and systems designed with intent — every screen, every interaction, purposefully shaped.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Engineered with production-grade tooling. Tested, reviewed, and shipped in focused sprints.',
  },
  {
    num: '04',
    title: 'Iterate',
    desc: 'We measure, learn and refine. Great software is never finished — it evolves with its users.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Markhor transformed our vision into a beautiful, functional app. Their technical expertise and attention to detail is genuinely unmatched.',
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote: 'They understood our business deeply before writing a single line of code. Exactly the kind of thoughtful partner we needed.',
    name: 'Ahmed Khalil',
    role: 'Founder, NovaPay',
  },
  {
    quote: 'From first call to final deployment — the quality, speed, and communication were exceptional throughout the whole project.',
    name: 'Priya Sharma',
    role: 'CTO, Clearpath Health',
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
                  <span>Software Studio · Lahore</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={100} immediate>
                <h1 className="hero-title">
                  Digital products,
                  <span className="hero-title-accent"> crafted with care.</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={180} immediate>
                <p className="hero-lead">
                  We design and build mobile apps, web platforms and AI systems
                  for ambitious teams — blending thoughtful design with
                  reliable engineering.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={260} immediate>
                <div className="hero-ctas">
                  <Link to="/contact" className="btn btn-primary">
                    Start a Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link to="/services" className="btn btn-ghost">
                    View Services
                  </Link>
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
                <span className="hero-visual-badge">EST · 2019</span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Trust bar */}
          <RevealOnScroll animation="fadeUp" delay={400} immediate>
            <div className="hero-trust">
              {[
                { val: '50+', label: 'Projects Shipped' },
                { val: '30+', label: 'Happy Clients' },
                { val: '7',   label: 'Years Building' },
                { val: '12',  label: 'Team Members' },
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

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header">
              <span className="eyebrow"><span>What We Do</span></span>
              <h2 className="section-title">
                Three disciplines,
                <span className="section-title-accent"> one vision.</span>
              </h2>
              <p className="section-lead">
                We focus on what we do best — so your product doesn't just ship,
                it lands.
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

      {/* ══════════════ ABOUT ══════════════ */}
      <section className="about">
        <div className="container">
          <div className="about-grid">

            <RevealOnScroll animation="fadeUp">
              <div className="about-copy">
                <span className="eyebrow"><span>About the Studio</span></span>
                <h2 className="section-title">
                  We believe great software
                  <span className="section-title-accent"> should feel invisible.</span>
                </h2>
                <p className="about-text">
                  Founded in 2019 in Lahore, we've delivered over 50 projects
                  spanning mobile apps, web platforms and AI-driven systems for
                  clients across the globe.
                </p>
                <p className="about-text">
                  We don't follow templates — we study your problem, sketch
                  solutions with you, and ship with craft. Our team moves fast,
                  communicates clearly and obsesses over the details that
                  separate good products from great ones.
                </p>
                <Link to="/about" className="btn btn-ghost">
                  Meet the Team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="about-values">
                {[
                  { t: 'Senior team', d: 'No handoffs to juniors. You work with the people building your product.' },
                  { t: 'Clear pricing', d: 'Fixed-scope proposals. No surprises halfway through the engagement.' },
                  { t: 'Fast cadence', d: 'Weekly demos, tight feedback loops, and deliverables you can feel.' },
                  { t: 'Built to last', d: 'Tested code, documented systems, and teams you can hand off to.' },
                ].map((v, i) => (
                  <div key={i} className="value-card">
                    <div className="value-card-num">0{i + 1}</div>
                    <h4 className="value-card-title">{v.t}</h4>
                    <p className="value-card-desc">{v.d}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="process">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>How We Work</span></span>
              <h2 className="section-title">
                A clear path
                <span className="section-title-accent"> from idea to impact.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <RevealOnScroll key={p.num} animation="fadeUp" delay={i * 90}>
                <div className="process-step">
                  <div className="process-step-num">{p.num}</div>
                  <h3 className="process-step-title">{p.title}</h3>
                  <p className="process-step-desc">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WORK ══════════════ */}
      <section className="work">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-row">
              <div>
                <span className="eyebrow"><span>Selected Work</span></span>
                <h2 className="section-title">
                  Products we're
                  <span className="section-title-accent"> proud of.</span>
                </h2>
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
                <Link to="/services" className={`work-card ${i === 0 ? 'work-card-lg' : ''}`}>
                  <div className="work-card-visual">
                    <div className="work-card-visual-grid" />
                    <div className="work-card-visual-glow" />
                    <div className="work-card-visual-mark">
                      {w.title.split(' ').map(x => x[0]).join('')}
                    </div>
                    {w.tag && <span className="work-card-tag">{w.tag}</span>}
                  </div>
                  <div className="work-card-body">
                    <span className="work-card-cat">{w.cat}</span>
                    <h3 className="work-card-title">{w.title}</h3>
                    <div className="work-card-foot">
                      <span className="work-card-year">{w.year}</span>
                      <span className="work-card-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
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
                Trusted by founders
                <span className="section-title-accent"> who care.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 100}>
                <figure className="testi-card">
                  <div className="testi-quote-mark">"</div>
                  <blockquote className="testi-quote">{t.quote}</blockquote>
                  <figcaption className="testi-foot">
                    <div className="testi-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <p className="testi-name">{t.name}</p>
                      <p className="testi-role">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="cta">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="cta-panel">
              <div className="cta-copy">
                <span className="eyebrow"><span>Ready to Build?</span></span>
                <h2 className="section-title">
                  Let's make something
                  <span className="section-title-accent"> worth talking about.</span>
                </h2>
                <p className="cta-lead">
                  Have a project in mind? We'd love to hear about it. Drop us a
                  line — we reply within 24 hours.
                </p>
              </div>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start a Project
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

export default Home;
