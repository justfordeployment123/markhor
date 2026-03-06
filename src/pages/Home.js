import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ParticleField from '../components/ParticleField';
import MagneticButton from '../components/MagneticButton';
import RevealOnScroll from '../components/RevealOnScroll';
import TextScramble from '../components/TextScramble';
import LogoModel3D from '../components/LogoModel3D';
import logoImg from '../assets/markhor_logo.png';
import './Home.css';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const FloatingOrb = ({ className, delay = 0, size = 400, color = 'rgba(99,102,241,0.15)' }) => (
  <div
    className={`floating-orb ${className || ''}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animationDelay: `${delay}s`,
    }}
  />
);

const GlassCard = ({ children, className = '', hover3d = true, glowColor = 'rgba(139,92,246,0.3)' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!hover3d || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    cardRef.current.style.setProperty('--glow-x', `${x * 100}%`);
    cardRef.current.style.setProperty('--glow-y', `${y * 100}%`);
  }, [hover3d]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--glow-color': glowColor }}
    >
      <div className="glass-card-glow" />
      {children}
    </div>
  );
};


const Home = () => {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      num: '01',
      title: 'Mobile\nDevelopment',
      desc: 'iOS & Android apps that feel native and perform flawlessly across every device.',
      accent: '#818cf8',
    },
    {
      num: '02',
      title: 'Web\nApplications',
      desc: 'Scalable platforms and SaaS products engineered for real-world performance.',
      accent: '#a78bfa',
    },
    {
      num: '03',
      title: 'AI & Machine\nLearning',
      desc: 'Intelligent systems that learn, automate, and transform your business.',
      accent: '#c084fc',
    },
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 99, suffix: '%', label: 'Client Satisfaction' }
  ];

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      year: '2024',
      color: 'rgba(99,102,241,0.4)',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Mobile App',
      year: '2024',
      color: 'rgba(139,92,246,0.4)',
    },
  ];

  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════
          HERO — Futuristic Energy
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="hero-fx">
        {/* Deep background */}
        <div className="hero-fx-bg" />
        <div className="hero-fx-stars" />

        {/* Energy streaks */}
        <div className="hero-streak hero-streak-1" />
        <div className="hero-streak hero-streak-2" />
        <div className="hero-streak hero-streak-3" />
        <div className="hero-streak hero-streak-4" />
        <div className="hero-streak hero-streak-5" />

        {/* Scan line */}
        <div className="hero-scan-line" />

        {/* Floating particles */}
        <div className="hero-fx-particles">
          {[...Array(35)].map((_, i) => (
            <span key={i} className="hero-fx-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }} />
          ))}
        </div>

        {/* Hex grid with parallax */}
        <div
          className="hero-fx-hex"
          style={{
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          }}
        />

        {/* Right side — 3D logo model */}
        <div className="hero-holo-logo" aria-hidden="true">
          <LogoModel3D mousePos={mousePos} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-36 lg:pb-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">

              <RevealOnScroll animation="fadeUp" delay={0}>
                <div className="hero-status-badge">
                  <span className="status-dot" />
                  <span className="status-text">Available for projects</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={100}>
                <p className="hero-pre-title" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  — We craft
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={280}>
                <h1 className="hero-display-title hero-display-outline" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <TextScramble
                    text="digital"
                    scrambleSpeed={30}
                    delay={800}
                  />
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={420}>
                <h1 className="hero-display-title hero-display-solid" style={{ fontFamily: 'Syne, sans-serif' }}>
                  experiences.
                </h1>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={580}>
                <p className="hero-fx-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Mobile apps, web platforms & AI — engineered
                  with precision from Lahore to the world.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fadeUp" delay={750}>
                <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                  <MagneticButton
                    to="/contact"
                    className="hero-btn-primary"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    strength={0.3}
                  >
                    <span className="hero-btn-shine" />
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </MagneticButton>

                  <MagneticButton
                    to="/services"
                    className="hero-btn-glass"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    strength={0.2}
                  >
                    View Our Work
                  </MagneticButton>
                </div>
              </RevealOnScroll>
            </div>

            {/* Mobile logo fallback */}
            <div className="flex items-center justify-center lg:hidden mt-8">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(160,130,255,0.2) 0%, transparent 70%)' }} />
                <img src={logoImg} alt="Markhor Systems" className="w-full h-full object-contain opacity-60" style={{ filter: 'drop-shadow(0 0 20px rgba(160,130,255,0.4))' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-stats-bar">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5">
            <RevealOnScroll animation="fadeUp" delay={1100}>
              <div className="flex flex-wrap items-center justify-between gap-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="stat-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text" style={{ fontFamily: 'Space Grotesk, sans-serif', writingMode: 'vertical-lr' }}>Scroll</span>
          <div className="scroll-mouse" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <div className="scroll-wheel" />
          </div>
        </div>

        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 -rotate-90 text-white/[0.07] text-[10px] tracking-[0.5em] hidden lg:block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          EST. 2019
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Futuristic Holographic
      ═══════════════════════════════════════════ */}
      <section className="wwd-section">
        <div className="wwd-bg" />
        <div className="wwd-stars" />
        <div className="wwd-streak wwd-streak-1" />
        <div className="wwd-streak wwd-streak-2" />
        <div className="wwd-streak wwd-streak-3" />
        <div className="wwd-streak wwd-streak-4" />
        <div className="wwd-scan-line" />

        <div className="wwd-particles">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="wwd-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          <RevealOnScroll animation="fadeUp">
            <div className="wwd-intro">
              <h2 className="wwd-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                Crafted for <span className="wwd-heading-italic">impact,</span><br />
                <span className="wwd-heading-gradient">built to last.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="wwd-connector" aria-hidden="true">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
              <path
                d="M 80 50 C 220 5, 340 95, 600 50 C 760 5, 980 95, 1120 50"
                stroke="url(#wwdGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.5"
                className="wwd-connector-path"
              />
              <circle cx="80" cy="50" r="5" fill="#818cf8" opacity="0.8">
                <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="600" cy="50" r="5" fill="#a78bfa" opacity="0.8">
                <animate attributeName="r" values="4;6;4" dur="3s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="1120" cy="50" r="5" fill="#c084fc" opacity="0.8">
                <animate attributeName="r" values="4;6;4" dur="3s" begin="2s" repeatCount="indefinite"/>
              </circle>
              <circle r="3" fill="white" opacity="0.9">
                <animateMotion dur="4s" repeatCount="indefinite"
                  path="M 80 50 C 220 5, 340 95, 600 50 C 760 5, 980 95, 1120 50" />
              </circle>
              <defs>
                <linearGradient id="wwdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="wwd-grid">
            {services.map((service, index) => (
              <RevealOnScroll key={index} animation="fadeUp" delay={index * 180}>
                <Link to="/services" className="wwd-col" style={{ '--wwd-accent': service.accent, '--wwd-index': index }}>

                  <div className="wwd-num" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {service.num}
                  </div>

                  <div className="wwd-platform">
                    <div className="wwd-hex-grid" />
                    <div className="wwd-orb" />
                    <div className="wwd-orb-core" />
                    <div className="wwd-spin-ring wwd-spin-ring-1" />
                    <div className="wwd-spin-ring wwd-spin-ring-2" />
                    <div className="wwd-spin-ring wwd-spin-ring-3" />
                    <div className="wwd-energy-pulse" />
                    <div className="wwd-energy-pulse wwd-energy-pulse-2" />
                    <div className="wwd-energy-pulse wwd-energy-pulse-3" />
                    <div className="wwd-energy-trail" />
                    <div className="wwd-energy-trail wwd-energy-trail-2" />
                    <div className="wwd-beam" />
                    <div className="wwd-beam wwd-beam-2" />
                    <div className="wwd-base" />
                    <div className="wwd-base-reflection" />
                  </div>

                  <h3 className="wwd-title" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {service.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                    ))}
                  </h3>

                  <p className="wwd-desc" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {service.desc}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="fadeUp" delay={600}>
            <p className="wwd-note" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every project starts with listening. We work closely with you to understand
              the problem before writing a single line of code.
            </p>
          </RevealOnScroll>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / MANIFESTO — Glass Split
      ═══════════════════════════════════════════ */}
      <section className="about-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <RevealOnScroll animation="fadeUp">
              <div className="about-glass-panel">
                <h2 className="about-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  We believe great software should feel
                  <span className="about-heading-accent"> invisible.</span>
                </h2>
                <div className="about-decorative-line" />
              </div>
            </RevealOnScroll>

            <div className="lg:pt-3">
              <RevealOnScroll animation="fadeUp" delay={150}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Founded in 2019 in Lahore, we've delivered over 50 projects spanning mobile
                  apps, web platforms, and AI-driven systems for clients across the globe.
                  We don't follow templates — we study your problem and craft the right solution.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={250}>
                <p className="about-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Our team moves fast, communicates clearly, and obsesses over the details
                  that separate good products from great ones.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={350}>
                <MagneticButton
                  to="/about"
                  className="about-cta-link"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  strength={0.2}
                >
                  Learn more about us
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MagneticButton>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED WORK — 3D Project Cards
      ═══════════════════════════════════════════ */}
      <section className="work-section">
        <div className="section-orbs">
          <FloatingOrb className="orb-section-1" size={500} color="rgba(139,92,246,0.06)" delay={0} />
          <FloatingOrb className="orb-section-2" size={350} color="rgba(99,102,241,0.05)" delay={2} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex items-end justify-between mb-16">
            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Portfolio</span>
                <h2 className="section-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Selected
                  <span className="heading-gradient"> Work</span>
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <MagneticButton
                to="/services"
                className="group hidden sm:inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                strength={0.2}
              >
                View all
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <RevealOnScroll
                key={index}
                animation="fadeUp"
                delay={index * 150}
                className={index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}
              >
                <GlassCard className="project-glass-card" glowColor={project.color}>
                  <div className="project-card-bg" style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.color} 0%, transparent 70%)` }} />
                  <div className="project-card-content">
                    <span className="project-category" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {project.category}
                    </span>
                    <h3 className="project-title" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {project.title}
                    </h3>
                  </div>
                  <span className="project-year" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.year}
                  </span>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIAL — Glass Quote
      ═══════════════════════════════════════════ */}
      <section className="testimonial-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <RevealOnScroll animation="fadeUp">
            <GlassCard className="testimonial-glass-card" hover3d={false}>
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Markhor Systems transformed our vision into a beautiful, functional app.
                Their attention to detail and technical expertise is unmatched.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SC</div>
                <div>
                  <span className="testimonial-name" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Sarah Chen
                  </span>
                  <span className="testimonial-role" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    CEO, TechStart Inc.
                  </span>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — 3D Glass Portal
      ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="cta-orbs">
          <FloatingOrb className="orb-cta-1" size={500} color="rgba(99,102,241,0.1)" delay={0} />
          <FloatingOrb className="orb-cta-2" size={400} color="rgba(139,92,246,0.08)" delay={2} />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <RevealOnScroll animation="fadeUp">
            <h2 className="cta-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's build something
              <br />
              <span className="heading-gradient">worth talking about.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={200}>
            <MagneticButton
              to="/contact"
              className="cta-btn-primary"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              strength={0.3}
            >
              <span className="hero-btn-shine" />
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={350}>
            <a href="mailto:hello@markhorsystems.com" className="cta-email" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              hello@markhorsystems.com
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
