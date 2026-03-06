import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import './pages.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'mobile',
      num: '01',
      title: 'Mobile Development',
      subtitle: 'iOS & Android Applications',
      description: 'We build high-performance native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store launch, we handle every aspect of mobile development.',
      features: [
        'Native iOS (Swift) & Android (Kotlin)',
        'Cross-Platform with React Native & Flutter',
        'UI/UX Design & Prototyping',
        'App Store Optimization',
        'Push Notifications & Real-time Features',
        'Offline-First Architecture',
        'Third-Party API Integrations',
        'App Maintenance & Updates',
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
    },
    {
      id: 'web',
      num: '02',
      title: 'Web Applications',
      subtitle: 'Websites & SaaS Platforms',
      description: 'From stunning corporate websites to complex SaaS platforms, we create web solutions that scale. Our development process focuses on performance, security, and maintainability.',
      features: [
        'Custom Web Applications & SaaS Platforms',
        'Progressive Web Apps (PWA)',
        'E-Commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Cloud Infrastructure & DevOps',
        'Performance Optimization',
        'Security & Compliance',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    },
    {
      id: 'ai',
      num: '03',
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Systems',
      description: 'Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent products. We build custom AI solutions tailored to your business needs.',
      features: [
        'Custom AI/ML Model Development',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'Chatbots & Conversational AI',
        'Predictive Analytics',
        'AI-Powered Automation',
        'LLM Integration & Fine-tuning',
        'Data Pipeline Development',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'From $5,000',
      description: 'Perfect for MVPs and small projects',
      features: ['Project scope analysis', 'UI/UX design', 'Core feature development', 'Basic testing & QA', '30-day post-launch support'],
    },
    {
      name: 'Professional',
      price: 'From $15,000',
      description: 'Ideal for growing businesses',
      features: ['Everything in Starter', 'Advanced features & integrations', 'Cloud infrastructure setup', 'Comprehensive testing', '90-day post-launch support', 'Performance optimization'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale applications',
      features: ['Everything in Professional', 'Dedicated team', 'Custom architecture', 'Security audits', 'SLA guarantee', 'Ongoing maintenance', '24/7 support'],
    },
  ];

  const techStack = {
    Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    Backend: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    Cloud: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker'],
    Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  };

  return (
    <div className="dark-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-stars" />
        <div className="page-hero-streak page-hero-streak-1" />
        <div className="page-hero-streak page-hero-streak-2" />
        <div className="page-hero-streak page-hero-streak-3" />
        <div className="page-hero-scan" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <span className="page-label">Our Services</span>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <p className="page-pre-title">We build</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={200}>
            <h1 className="page-hero-title page-hero-title-outline" data-text="digital">digital</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={320}>
            <h1 className="page-hero-title page-hero-title-solid">solutions.</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={440}>
            <p className="page-hero-desc">
              From concept to launch — mobile apps, web platforms, and AI systems
              engineered with precision from Lahore to the world.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Service Tabs + Detail ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Tabs */}
          <RevealOnScroll animation="fadeUp">
            <div className="flex flex-wrap gap-3 mb-16">
              {services.map((svc, i) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(i)}
                  className={`pg-tab${activeService === i ? ' active' : ''}`}
                >
                  <span style={{ color: 'inherit', marginRight: '8px', opacity: 0.5, fontSize: '11px' }}>{svc.num}</span>
                  {svc.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Active Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="page-section-label">{services[activeService].subtitle}</span>
                <h2 className="page-section-heading">{services[activeService].title}</h2>
                <p className="page-section-desc" style={{ marginBottom: '40px' }}>{services[activeService].description}</p>

                <div className="pg-check-list" style={{ marginBottom: '32px' }}>
                  {services[activeService].features.map((f, i) => (
                    <div key={i} className="pg-check-item">
                      <div className="pg-check-icon">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((t, i) => (
                    <span key={i} className="pg-tag">{t}</span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Placeholder for future image/graphic */}
            <RevealOnScroll animation="fadeUp" delay={150}>
              <div className="pg-placeholder aspect-[4/3]" style={{ minHeight: '280px' }}>
                Image Placeholder
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── All Services Overview (text rows) ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16">
              <span className="page-section-label">Complete Solutions</span>
              <h2 className="page-section-heading">What we do</h2>
            </div>
          </RevealOnScroll>

          {services.map((svc, i) => (
            <RevealOnScroll key={svc.id} animation="fadeUp" delay={i * 100}>
              <button
                onClick={() => { setActiveService(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full text-left"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div
                  className="flex items-center justify-between py-8 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-8">
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>{svc.num}</span>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', transition: 'color 0.3s ease' }} className="group-hover:text-white">
                      {svc.title}
                    </span>
                  </div>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" style={{ color: 'rgba(255,255,255,0.2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16 text-center">
              <span className="page-section-label">Technology</span>
              <h2 className="page-section-heading">Our Tech Stack</h2>
              <p className="page-section-desc mx-auto" style={{ textAlign: 'center' }}>Cutting-edge technologies to build robust, scalable, future-proof solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Object.entries(techStack).map(([cat, techs], i) => (
              <RevealOnScroll key={cat} animation="fadeUp" delay={i * 80}>
                <div>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>{cat}</p>
                  <ul className="space-y-2">
                    {techs.map((t, j) => (
                      <li key={j} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>{t}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16 text-center">
              <span className="page-section-label">Pricing</span>
              <h2 className="page-section-heading">Transparent Pricing</h2>
              <p className="page-section-desc mx-auto" style={{ textAlign: 'center' }}>Choose the engagement model that works best. All prices are starting points and vary by complexity.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 100}>
                <div
                  className="pg-card p-8 relative flex flex-col h-full"
                  style={tier.popular ? { border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' } : {}}
                >
                  {tier.popular && (
                    <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '4px 18px', background: '#fff', color: '#100D25', fontSize: '11px', fontWeight: 700, borderRadius: '100px', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </span>
                  )}
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{tier.name}</h3>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{tier.price}</div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '28px' }}>{tier.description}</p>

                  <div className="pg-check-list flex-1" style={{ marginBottom: '32px' }}>
                    {tier.features.map((f, j) => (
                      <div key={j} className="pg-check-item">
                        <div className="pg-check-icon">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className={tier.popular ? 'pg-btn-primary' : 'pg-btn-ghost'} style={{ justifyContent: 'center' }}>
                    {tier.popular ? 'Get Started' : 'Contact Us'}
                  </Link>
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
            <h2 className="page-cta-heading">Let's build your<br />next project.</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">Ready to transform your idea into a digital reality? Let's discuss how we can help.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <a href="mailto:hello@markhorsystems.com" className="pg-btn-ghost">hello@markhorsystems.com</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Services;
