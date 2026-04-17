import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const SERVICES = [
  {
    id: 'mobile',
    num: '01',
    title: 'Mobile Development',
    subtitle: 'iOS & Android Applications',
    img: mobileImg,
    description:
      'We build high-performance native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store launch, we handle it all.',
    features: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-Platform React Native & Flutter',
      'UI / UX Design & Prototyping',
      'App Store Optimization',
      'Push Notifications & Real-time',
      'Offline-First Architecture',
      'Third-Party API Integrations',
      'Maintenance & Updates',
    ],
    tags: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
  },
  {
    id: 'web',
    num: '02',
    title: 'Web Applications',
    subtitle: 'Websites & SaaS Platforms',
    img: webImg,
    description:
      'From stunning corporate websites to complex SaaS platforms, we create web solutions that scale. Engineered for performance, reliability and long-term growth.',
    features: [
      'Custom Web Apps & SaaS Platforms',
      'Progressive Web Apps (PWA)',
      'E-Commerce Solutions',
      'Content Management Systems',
      'API Development & Integration',
      'Cloud Infrastructure & DevOps',
      'Performance Optimization',
      'Security & Compliance',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'ai',
    num: '03',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Systems',
    img: aiImg,
    description:
      'Leverage artificial intelligence to automate processes, gain insights and create intelligent products. From LLMs to computer vision — we ship AI that works.',
    features: [
      'Custom AI / ML Model Development',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Chatbots & Conversational AI',
      'Predictive Analytics',
      'AI-Powered Automation',
      'LLM Integration & Fine-tuning',
      'Data Pipeline Development',
    ],
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
  },
];

const PRICING = [
  {
    name: 'Starter',
    price: 'From $5,000',
    description: 'Perfect for MVPs and focused projects with a clear scope.',
    features: [
      'Project scope analysis',
      'UI / UX design',
      'Core feature development',
      'Basic testing & QA',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Professional',
    price: 'From $15,000',
    description: 'Ideal for growing businesses that need a complete product.',
    features: [
      'Everything in Starter',
      'Advanced features & integrations',
      'Cloud infrastructure setup',
      'Comprehensive testing',
      '90-day post-launch support',
      'Performance optimization',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications needing a dedicated team.',
    features: [
      'Everything in Professional',
      'Dedicated team',
      'Custom architecture',
      'Security audits',
      'SLA guarantee',
      'Ongoing maintenance',
      '24 / 7 priority support',
    ],
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
                <span>Our Services</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                Crafted for impact,
                <span className="hero-title-accent"> built to last.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                From concept to launch — mobile apps, web platforms and AI
                systems, engineered with precision from Lahore to the world.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services">
        <div className="container">
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
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.description}</p>
                    <div className="service-tags">
                      {s.tags.slice(0, 4).map((t) => (
                        <span key={t} className="service-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL */}
      <section className="about">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>Explore Each Service</span></span>
              <h2 className="section-title">
                The full
                <span className="section-title-accent"> capability sheet.</span>
              </h2>
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
                  {s.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={120} key={service.id}>
            <div className="svc-detail">
              <div>
                <p className="svc-detail-subtitle">{service.subtitle}</p>
                <h3 className="svc-detail-title">{service.title}</h3>
                <p className="svc-detail-desc">{service.description}</p>
                <div className="svc-detail-tags">
                  {service.tags.map((t) => (
                    <span key={t} className="svc-detail-tag">{t}</span>
                  ))}
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

      {/* TECH STACK */}
      <section className="process">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>Technology</span></span>
              <h2 className="section-title">
                Our proven
                <span className="section-title-accent"> tech stack.</span>
              </h2>
              <p className="section-lead">
                We choose tools that are battle-tested, well-supported and a
                joy to work with — because great tooling ships great products.
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
      <section className="work">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>Investment</span></span>
              <h2 className="section-title">
                Transparent
                <span className="section-title-accent"> pricing.</span>
              </h2>
              <p className="section-lead">
                No hidden fees. No surprises. Clear proposals tailored to your
                scope — pick the tier that fits your stage.
              </p>
            </div>
          </RevealOnScroll>

          <div className="pricing-grid">
            {PRICING.map((tier, i) => (
              <RevealOnScroll key={tier.name} animation="fadeUp" delay={i * 100}>
                <div className={`pricing-card ${tier.popular ? 'pricing-card-popular' : ''}`}>
                  {tier.popular && <span className="pricing-badge">Most Popular</span>}
                  <p className="pricing-name">{tier.name}</p>
                  <div className="pricing-price">{tier.price}</div>
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
                    {tier.popular ? 'Get Started' : 'Contact Us'}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
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
                <span className="eyebrow"><span>Ready to Build?</span></span>
                <h2 className="section-title">
                  Let's build your
                  <span className="section-title-accent"> next project.</span>
                </h2>
                <p className="cta-lead">
                  Tell us about what you're working on. We'll reply within 24
                  hours with thoughtful questions — and a clear next step.
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

export default Services;
