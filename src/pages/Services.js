import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import Guarantees from '../components/Guarantees';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const SERVICES = [
  {
    id: 'mobile',
    num: '01',
    title: 'Mobile',
    headline: 'Mobile that feels native, wherever it runs.',
    subtitle: 'iOS · Android · React Native · Flutter',
    img: mobileImg,
    description:
      'iOS, Android, React Native, Flutter. We\'ve shipped apps in 12 countries with a 4.9 average App Store rating — so your first review doesn\'t come with a screenshot of a crash.',
    features: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-platform React Native & Flutter',
      'App Store & Play Store submission, start to finish',
      'Offline-first architecture & sync',
      'Push notifications & real-time infrastructure',
      'Biometric, face ID, in-app purchases',
      'Third-party API & SDK integrations',
      'Crash reporting, analytics, performance SLAs',
    ],
    tags: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
    proof: { v: '4.9★', k: 'avg App Store rating' },
  },
  {
    id: 'web',
    num: '02',
    title: 'Web',
    headline: 'Web apps built to outlive your Series A.',
    subtitle: 'SaaS platforms · Dashboards · Marketing sites',
    img: webImg,
    description:
      'React, Next.js, Node.js, PostgreSQL. Clean architecture, documented code, tests where they matter. When your in-house team takes over, they\'ll thank us — not curse us.',
    features: [
      'Custom SaaS platforms & dashboards',
      'Marketing sites & Next.js apps',
      'API design & GraphQL schemas',
      'Cloud infrastructure on AWS, GCP, Vercel',
      'CI/CD pipelines + automated testing',
      'SOC 2-ready audit trails & role-based access',
      'Performance budgets we actually hit',
      'Documented handover to your in-house team',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    proof: { v: '90%+', k: 'test coverage on core paths' },
  },
  {
    id: 'ai',
    num: '03',
    title: 'AI',
    headline: 'AI that ships, not AI that demos.',
    subtitle: 'LLMs · Computer vision · Pipelines',
    img: aiImg,
    description:
      'LLMs, computer vision, automation pipelines. We\'ve embedded AI into healthcare triage, logistics routing, and customer support — the kind of work that has to be right, not just impressive.',
    features: [
      'Custom LLM fine-tuning & RAG pipelines',
      'Computer vision — object detection & OCR',
      'Chatbots & conversational AI with guardrails',
      'Predictive analytics & recommendation engines',
      'HIPAA-scoped medical AI (auditable end-to-end)',
      'Private-cloud deployment · zero vendor lock-in',
      'Evaluation harnesses for every model we ship',
      'Data pipelines · from raw → production',
    ],
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    proof: { v: '3.2s', k: 'avg inference on triage model' },
  },
];

const PRICING = [
  {
    name: 'Discovery Sprint',
    price: 'Fixed $5K',
    period: '1 week',
    description: 'A de-risk week. User interviews, competitive teardown, and a feature priority map. Hate the output? Walk away with everything.',
    features: [
      'User interviews · 3–5 real candidates',
      'Competitive teardown & landscape audit',
      'Clickable feature priority map',
      'Fixed-price Build proposal for phase 2',
      'Walk-away clause · you keep the work',
    ],
    cta: 'Book discovery',
  },
  {
    name: 'Production Build',
    price: '$35K – $90K',
    period: '8–14 weeks',
    description: 'Full MVP build with a senior 3–4 engineer team. Fixed scope, fixed price, weekly demos, code in your GitHub from day one.',
    features: [
      'Senior team · 3–4 engineers named upfront',
      'Clickable Figma prototype + user testing',
      'Weekly Friday Loom demos of staging',
      'CI/CD, tests, analytics, App Store submission',
      '30-day post-launch bug warranty — free',
      'Full handover docs + walkthrough video',
    ],
    cta: 'Get a quote',
    popular: true,
  },
  {
    name: 'Embedded Seniors',
    price: 'From $8K / mo',
    period: 'Per engineer',
    description: 'One or two of our engineers inside your team, on your standups, in your codebase. Month-to-month. 30-day exit.',
    features: [
      'One or two seniors, named & matched',
      'Works on your process, your standups',
      'Four-week minimum, month-to-month after',
      '30-day exit clause — no penalties',
      'Weekly sync with our lead engineer',
      'Full IP + code in your GitHub org',
    ],
    cta: 'Talk to us',
  },
];

const TECH_STACK = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  Backend: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL'],
  'AI / ML': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
  Cloud: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
};

const Services = () => {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

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
                <span>What We Build</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                Three disciplines.
                <span className="hero-title-accent"> Real outcomes. Fixed price.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                Mobile apps, web platforms, and AI systems — engineered for
                production, not pitch decks. Transparent pricing. Senior team.
                Code you own from day one.
              </p>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={260} immediate>
              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-primary">
                  Get a fixed-price quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="#pricing" className="btn btn-ghost">
                  See pricing
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={320} immediate>
              <p className="hero-microtrust">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
                Fixed-scope proposals · 30-day bug warranty · Code in your GitHub
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={380} immediate>
            <div className="hero-trust" style={{ marginTop: 48 }}>
              {[
                { val: '$35K+',  label: 'MVP price range' },
                { val: '1 week', label: 'Discovery sprint' },
                { val: '30 day', label: 'Bug warranty' },
                { val: '100%',   label: 'Fixed-scope' },
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

      {/* SERVICE CARDS */}
      <section className="services">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Three Disciplines</span>
              </span>
              <h2 className="section-title">
                Deep in three.
                <span className="section-title-accent"> No to the rest.</span>
              </h2>
              <p className="section-lead">
                We don't spread thin. We go deep in the three areas most
                early-stage products actually need — and politely turn away
                the rest.
              </p>
            </div>
          </RevealOnScroll>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <RevealOnScroll key={s.id} animation="fadeUp" delay={i * 100}>
                <article className="service-card">
                  <div className="service-media">
                    <div className="service-media-glow" />
                    <img src={s.img} alt={s.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="service-body">
                    <span className="service-num">{s.num}</span>
                    <h3 className="service-title">{s.headline}</h3>
                    <p className="service-desc">{s.description}</p>
                    <div className="service-tags">
                      {s.tags.slice(0, 4).map((t) => (
                        <span key={t} className="service-tag">{t}</span>
                      ))}
                    </div>
                    <div className="service-proof">
                      <span className="service-proof-val">{s.proof.v}</span>
                      <span className="service-proof-key">{s.proof.k}</span>
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
                <span className="bridge-stat">50+</span>
                <p className="bridge-text">
                  products shipped across 12 countries —
                  <span className="bridge-text-accent"> every one of them still live.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICE DETAIL TABS */}
      <section className="process process-home">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Full Capability Sheet</span>
              </span>
              <h2 className="section-title">
                Everything we do,
                <span className="section-title-accent"> in detail.</span>
              </h2>
              <p className="howwe-lead">
                Click a discipline to see exactly what we cover — the tech,
                the deliverables, the proof points.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={80}>
            <div className="svc-tabs">
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`svc-tab ${active === i ? 'svc-tab-active' : ''}`}
                  type="button"
                >
                  <span className="svc-tab-num">{s.num}</span>
                  {s.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={120} key={service.id}>
            <div className="svc-detail">
              <div>
                <p className="svc-detail-subtitle">{service.subtitle}</p>
                <h3 className="svc-detail-title">{service.headline}</h3>
                <p className="svc-detail-desc">{service.description}</p>
                <div className="svc-detail-tags">
                  {service.tags.map((t) => (
                    <span key={t} className="svc-detail-tag">{t}</span>
                  ))}
                </div>
                <div className="svc-detail-proof">
                  <span className="svc-detail-proof-val">{service.proof.v}</span>
                  <span className="svc-detail-proof-key">{service.proof.k}</span>
                </div>
              </div>
              <ul className="svc-feature-list">
                {service.features.map((f) => (
                  <li key={f} className="svc-feature">
                    <span className="svc-feature-icon">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GUARANTEES — trust commitments */}
      <Guarantees />

      {/* TECH STACK */}
      <section className="studio">
        <div className="studio-bg-grid" aria-hidden="true" />
        <div className="studio-bg-glow" aria-hidden="true" />

        <div className="container studio-container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Tech Stack</span>
              </span>
              <h2 className="section-title">
                Battle-tested tools —
                <span className="section-title-accent"> boringly reliable.</span>
              </h2>
              <p className="section-lead">
                We choose technologies because they ship products, not because
                they trend on Hacker News. Every tool here has shipped to
                production in the last twelve months.
              </p>
            </div>
          </RevealOnScroll>

          <div className="techstack-grid">
            {Object.entries(TECH_STACK).map(([cat, items], i) => (
              <RevealOnScroll key={cat} animation="fadeUp" delay={i * 70}>
                <div className="techstack-cat">
                  <p className="techstack-cat-title">{cat}</p>
                  <div className="techstack-items">
                    {items.map((t) => (
                      <span key={t} className="techstack-item">{t}</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="work" id="pricing">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Investment</span>
              </span>
              <h2 className="section-title">
                Price transparency is
                <span className="section-title-accent"> a trust signal.</span>
              </h2>
              <p className="section-lead">
                Most studios won't quote until they've chased you for two weeks.
                We'll tell you our range today. Real numbers for real projects —
                and a walk-away clause if the discovery week doesn't deliver.
              </p>
            </div>
          </RevealOnScroll>

          <div className="pricing-grid">
            {PRICING.map((tier, i) => (
              <RevealOnScroll key={tier.name} animation="fadeUp" delay={i * 100}>
                <div className={`pricing-card ${tier.popular ? 'pricing-card-popular' : ''}`}>
                  {tier.popular && <span className="pricing-badge">Most common</span>}
                  <p className="pricing-name">{tier.name}</p>
                  <div className="pricing-price">{tier.price}</div>
                  {tier.period && (
                    <p className="pricing-period">{tier.period}</p>
                  )}
                  <p className="pricing-desc">{tier.description}</p>
                  <ul className="pricing-features">
                    {tier.features.map((f) => (
                      <li key={f} className="pricing-feature">
                        <span className="pricing-check">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`btn pricing-cta ${tier.popular ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="fadeUp" delay={300}>
            <p className="pricing-note">
              <span className="pricing-note-dot" />
              Not sure which fits? <Link to="/contact">Book a 30-min call</Link> —
              we'll tell you honestly which track is right, even if it's none of them.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        status="Accepting 2 new projects · Q3 2026"
        title="Ready for a"
        titleAccent="real quote?"
        lead="Tell us what you're building. You'll get honest questions, a scoped proposal, and a fixed price — not a pitch deck."
        bullets={[
          '30-minute call — no pitch deck required',
          'Fixed-price proposal within 3 days',
          'NDA on request, before the first call',
        ]}
        ctaLabel="Book a scoping call"
      />

    </div>
  );
};

export default Services;
