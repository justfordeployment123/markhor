import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import mobileImg from '../assets/mobile-dev.png';
import webImg from '../assets/web-dev.png';
import aiImg from '../assets/ai.png';
import './Home.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'mobile', num: '01', title: 'Mobile Development', subtitle: 'iOS & Android Applications', img: mobileImg,
      description: 'We build high-performance native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['Native iOS (Swift) & Android (Kotlin)', 'Cross-Platform with React Native & Flutter', 'UI/UX Design & Prototyping', 'App Store Optimization', 'Push Notifications & Real-time Features', 'Offline-First Architecture', 'Third-Party API Integrations', 'App Maintenance & Updates'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
    },
    {
      id: 'web', num: '02', title: 'Web Applications', subtitle: 'Websites & SaaS Platforms', img: webImg,
      description: 'From stunning corporate websites to complex SaaS platforms, we create web solutions that scale.',
      features: ['Custom Web Applications & SaaS Platforms', 'Progressive Web Apps (PWA)', 'E-Commerce Solutions', 'Content Management Systems', 'API Development & Integration', 'Cloud Infrastructure & DevOps', 'Performance Optimization', 'Security & Compliance'],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    },
    {
      id: 'ai', num: '03', title: 'AI & Machine Learning', subtitle: 'Intelligent Systems', img: aiImg,
      description: 'Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent products.',
      features: ['Custom AI/ML Model Development', 'Natural Language Processing (NLP)', 'Computer Vision Solutions', 'Chatbots & Conversational AI', 'Predictive Analytics', 'AI-Powered Automation', 'LLM Integration & Fine-tuning', 'Data Pipeline Development'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    },
  ];

  const pricingTiers = [
    { name: 'Starter', price: 'From $5,000', description: 'Perfect for MVPs and small projects', features: ['Project scope analysis', 'UI/UX design', 'Core feature development', 'Basic testing & QA', '30-day post-launch support'] },
    { name: 'Professional', price: 'From $15,000', description: 'Ideal for growing businesses', features: ['Everything in Starter', 'Advanced features & integrations', 'Cloud infrastructure setup', 'Comprehensive testing', '90-day post-launch support', 'Performance optimization'], popular: true },
    { name: 'Enterprise', price: 'Custom', description: 'For large-scale applications', features: ['Everything in Professional', 'Dedicated team', 'Custom architecture', 'Security audits', 'SLA guarantee', 'Ongoing maintenance', '24/7 support'] },
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
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full pt-32 pb-12 lg:pt-40 lg:pb-16">
          <RevealOnScroll animation="fadeUp">
            <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Services</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={120}>
            <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Crafted for <span className="hero-heading-accent">impact,</span><br />
              built to last.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <p className="hero-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              From concept to launch — mobile apps, web platforms, and AI systems
              engineered with precision from Lahore to the world.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES CARDS (same as landing) ── */}
      <section className="services-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="services-grid">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.id} animation="fadeUp" delay={i * 150}>
                <button
                  onClick={() => setActiveService(i)}
                  className="service-card"
                  style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%' }}
                >
                  <div className="service-num-badge" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{svc.num}</div>
                  <div className="service-image-area">
                    <div className="service-image-glow" />
                    <img src={svc.img} alt={svc.title} className="service-img" />
                  </div>
                  <h3 className="service-title" style={{ fontFamily: 'Syne, sans-serif' }}>{svc.title}</h3>
                  <p className="service-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>{svc.description}</p>
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL (split layout like about section) ── */}
      <section className="about-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="about-split">
            <RevealOnScroll animation="fadeUp">
              <div className="about-heading-card">
                <div className="about-heading-card-glow" />
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(180,160,255,0.45)', marginBottom: '16px' }}>
                  {services[activeService].subtitle}
                </p>
                <h2 className="about-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {services[activeService].title}<span className="text-accent">.</span>
                </h2>
                <div className="about-heading-line" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
                  {services[activeService].technologies.map((t, i) => (
                    <span key={i} style={{
                      padding: '4px 14px', background: 'rgba(140,100,240,0.06)', border: '1px solid rgba(180,160,255,0.12)',
                      borderRadius: '100px', fontSize: '11px', fontWeight: 500, color: 'rgba(180,160,255,0.55)',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <div className="about-body">
              <RevealOnScroll animation="fadeUp" delay={100}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {services[activeService].description}
                </p>
              </RevealOnScroll>
              {services[activeService].features.map((f, i) => (
                <RevealOnScroll key={i} animation="fadeUp" delay={150 + i * 30}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: 'rgba(180,160,255,0.3)', flexShrink: 0,
                    }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Tab buttons below */}
          <RevealOnScroll animation="fadeUp" delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px', flexWrap: 'wrap' }}>
              {services.map((svc, i) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(i)}
                  className={activeService === i ? 'btn-primary' : 'btn-ghost'}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', padding: '10px 22px', cursor: 'pointer' }}
                >
                  {svc.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TECH STACK (simple text, no cards) ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Technology</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Our Tech <span className="text-accent">Stack</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Object.entries(techStack).map(([cat, techs], i) => (
              <RevealOnScroll key={cat} animation="fadeUp" delay={i * 80}>
                <div>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(180,160,255,0.35)', marginBottom: '16px' }}>{cat}</p>
                  {techs.map((t, j) => (
                    <p key={j} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 2 }}>{t}</p>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="services-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-right" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="services-heading-wrap">
              <h2 className="services-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Transparent <span className="text-accent">Pricing</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 120}>
                <div className="work-card" style={{
                  cursor: 'default',
                  border: tier.popular ? '1px solid rgba(180,160,255,0.25)' : undefined,
                  background: tier.popular ? 'rgba(140,100,240,0.06)' : undefined,
                }}>
                  <div className="work-card-glow" />
                  <div style={{ padding: '32px 28px', position: 'relative' }}>
                    {tier.popular && (
                      <span style={{
                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                        padding: '4px 18px', background: '#fff', color: '#100D25', fontSize: '11px',
                        fontWeight: 700, borderRadius: '100px', fontFamily: 'Space Grotesk, sans-serif',
                        letterSpacing: '0.05em', whiteSpace: 'nowrap',
                      }}>Most Popular</span>
                    )}
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{tier.name}</h3>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{tier.price}</div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>{tier.description}</p>

                    {tier.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(180,160,255,0.3)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)' }}>{f}</span>
                      </div>
                    ))}

                    <Link to="/contact" className={tier.popular ? 'btn-primary' : 'btn-ghost'}
                      style={{ justifyContent: 'center', width: '100%', textAlign: 'center', marginTop: '24px', fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px' }}>
                      {tier.popular ? 'Get Started' : 'Contact Us'}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-glow" />

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's build your<br />
              <span className="text-accent">next project.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <MagneticButton to="/contact" className="btn-primary btn-primary-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }} strength={0.3}>
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <a href="mailto:hello@markhorsystems.com" className="cta-email" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              hello@markhorsystems.com
            </a>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Services;
