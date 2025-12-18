import React, { useEffect, useRef, useState } from 'react';
import ParticleField from '../components/ParticleField';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import RevealOnScroll from '../components/RevealOnScroll';
import MorphingBlob from '../components/MorphingBlob';
import fintechImg from '../assets/real-fintech.png';
import ecommerceImg from '../assets/real-ecommerce.png';
import analyticsImg from '../assets/real-analytics.png';
import heroVideo from '../assets/hero_section.mp4';
import heroPoster from '../assets/hero-poster.jpg';

// Animated Counter Component with crazy effect
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native iOS & Android applications with stunning UI/UX that users love.',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: 'Web Applications',
      description: 'Scalable web platforms and SaaS products built for performance.',
      tech: ['React', 'Next.js', 'Node.js', 'Python']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: 'AI Development',
      description: 'Custom AI solutions, machine learning models, and intelligent automation.',
      tech: ['OpenAI', 'TensorFlow', 'LangChain', 'Computer Vision']
    }
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
      image: fintechImg,
    },
    {
      title: 'E-Commerce Platform',
      category: 'Mobile App',
      image: ecommerceImg,
    },
    {
      title: 'AI Analytics Tool',
      category: 'AI Solution',
      image: analyticsImg,
    }
  ];

  const testimonials = [
    {
      quote: "Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      avatar: "S"
    },
    {
      quote: "Working with Markhor was a game-changer for our business. They delivered our AI solution ahead of schedule and exceeded expectations.",
      author: "Michael Roberts",
      role: "CTO, DataFlow",
      avatar: "M"
    }
  ];

  const clients = [
    'TechCorp', 'InnovateLab', 'DataFlow', 'CloudNine', 'FutureScale',
    'DigitalFirst', 'SmartSolutions', 'NextGen', 'Quantum', 'Elevate'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Particles */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* specific video background */}
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            poster={heroPoster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Particle Field Background */}
        <ParticleField color="#ffffff" particleCount={50} speed={0.3} className="relative z-1" />

        {/* Morphing Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <MorphingBlob
            color1="rgba(255,255,255,0.1)"
            color2="rgba(150,150,150,0.05)"
            size={800}
            speed={0.003}
            className="absolute -top-40 -left-40"
          />
          <MorphingBlob
            color1="rgba(200,200,200,0.08)"
            color2="rgba(100,100,100,0.05)"
            size={600}
            speed={0.002}
            className="absolute -bottom-20 -right-20"
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating gradient orb that follows mouse */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            left: `${mousePosition.x * 100 - 40}%`,
            top: `${mousePosition.y * 100 - 40}%`,
            transition: 'left 0.8s ease-out, top 0.8s ease-out',
          }}
        />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-20 w-32 h-32 border border-white/10"
            style={{
              transform: `rotate(${45 + scrollY * 0.1}deg)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <div
            className="absolute bottom-40 right-20 w-24 h-24 border border-white/10 rounded-full"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5"
            style={{
              transform: `rotate(${12 + scrollY * 0.05}deg)`,
              animation: 'float 10s ease-in-out infinite'
            }}
          />
          <div
            className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-white/5 rounded-full"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Animated Badge */}
            <RevealOnScroll animation="scale" delay={0}>
              <div className="relative overflow-hidden inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm group hover:bg-white/10 transition-all duration-500"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Available for New Projects
                </span>
              </div>
            </RevealOnScroll>

            {/* Main Heading */}
            <h1
              className="text-white leading-none"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <RevealOnScroll animation="fadeUp" delay={100}>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  We Build
                </span>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={200}>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Digital Products
                </span>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeUp" delay={300}>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-2">
                  That Matter
                </span>
              </RevealOnScroll>
            </h1>

            {/* Subheading */}
            <RevealOnScroll animation="fadeUp" delay={400}>
              <p
                className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Transform your ideas into powerful mobile apps, web platforms, and AI solutions. We're Markhor Systems — your partner in digital innovation.
              </p>
            </RevealOnScroll>

            {/* Magnetic CTA Buttons */}
            <RevealOnScroll animation="fadeUp" delay={500}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton
                  to="/contact"
                  className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 overflow-hidden relative hover-lift"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  data-cursor-text="Let's Go"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </MagneticButton>

                <MagneticButton
                  to="/services"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  View Our Work
                </MagneticButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-white/60 transition-colors cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>

        {/* Side Text */}
        <div
          className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-white/20 text-sm tracking-[0.5em] hidden lg:block"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-gray-50 overflow-hidden border-y border-gray-200">
        <RevealOnScroll animation="fadeUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Trusted by Industry Leaders
            </p>
          </div>
        </RevealOnScroll>

        <div className="overflow-hidden flex">
          <div className="animate-marquee flex whitespace-nowrap py-4">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl font-bold text-gray-200 mx-12 hover:text-gray-400 transition-colors duration-300 cursor-default"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with 3D Tilt Cards */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What We Do
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-black"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                Our Services
              </h2>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={200}>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                We specialize in building exceptional digital experiences that drive business growth.
              </p>
            </RevealOnScroll>
          </div>

          {/* Services Grid with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll
                key={index}
                animation="fadeUp"
                delay={index * 150}
              >
                <TiltCard
                  className="relative p-8 bg-white border border-gray-100 rounded-3xl h-full cursor-pointer card-glow hover-lift hover:border-gray-300 transition-colors duration-300 shadow-sm"
                  intensity={15}
                  scale={1.05}
                >
                  {/* Service Number */}
                  <span className="absolute top-8 right-8 text-6xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-300"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all duration-300"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-500 rounded-full border border-gray-100 group-hover:border-black/10 transition-all duration-300"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleField color="#ffffff" particleCount={30} speed={0.2} />

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} animation="scale" delay={index * 100}>
                <div className="text-center group cursor-default">
                  <div className="text-5xl sm:text-6xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Hover Effects */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <RevealOnScroll animation="fadeLeft">
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Portfolio
                </span>
              </RevealOnScroll>
              <RevealOnScroll animation="fadeLeft" delay={100}>
                <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-black"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  Featured Work
                </h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll animation="fadeRight" delay={200}>
              <MagneticButton
                to="/services"
                className="mt-6 md:mt-0 inline-flex items-center text-black font-semibold gap-2 group"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                View All Projects
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </RevealOnScroll>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} animation="fadeUp" delay={index * 150}>
                <TiltCard
                  className="group relative overflow-hidden rounded-3xl bg-black aspect-[4/3] cursor-pointer hover-lift shadow-2xl"
                  intensity={12}
                  scale={1.03}
                  glare={true}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    <span className="text-white/60 text-sm uppercase tracking-widest"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 rotate-0 group-hover:rotate-45 transition-all duration-500 shadow-lg z-10">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Testimonials
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-black"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                What Clients Say
              </h2>
            </RevealOnScroll>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={index} animation={index === 0 ? 'fadeLeft' : 'fadeRight'} delay={index * 150}>
                <TiltCard
                  className="p-10 bg-gray-50 rounded-3xl border border-gray-100 h-full"
                  intensity={5}
                  scale={1.01}
                >
                  {/* Quote */}
                  <svg className="w-12 h-12 text-gray-200 mb-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>

                  <p className="text-xl text-gray-700 leading-relaxed mb-8"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold transform hover:scale-110 transition-transform"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
        <ParticleField color="#ffffff" particleCount={40} speed={0.2} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Process
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                How We Work
              </h2>
            </RevealOnScroll>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into understanding your vision, goals, and target audience.' },
              { step: '02', title: 'Strategy', desc: 'We create a comprehensive roadmap tailored to your project needs.' },
              { step: '03', title: 'Development', desc: 'Our team builds your product using cutting-edge technologies.' },
              { step: '04', title: 'Launch', desc: 'We deploy, optimize, and provide ongoing support for your success.' },
            ].map((item, index) => (
              <RevealOnScroll key={index} animation="fadeUp" delay={index * 150}>
                <div className="text-center md:text-left group cursor-default">
                  <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-white/30 transition-all duration-500 transform group-hover:scale-110"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <MorphingBlob
            color1="rgba(200,200,200,0.3)"
            color2="rgba(150,150,150,0.2)"
            size={500}
            speed={0.002}
            className="absolute top-0 left-1/4"
          />
          <MorphingBlob
            color1="rgba(180,180,180,0.2)"
            color2="rgba(100,100,100,0.1)"
            size={400}
            speed={0.003}
            className="absolute bottom-0 right-1/4"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll animation="scale">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Build
              <br />
              <RevealOnScroll animation="fadeUp" delay={200}>
                Something Great?
              </RevealOnScroll>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={200}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Let's discuss your project and explore how we can help bring your vision to life.
            </p>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                to="/contact"
                className="group px-10 py-5 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                strength={0.4}
              >
                <span className="flex items-center gap-3">
                  Get in Touch
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@markhorsystems.com"
                className="px-10 py-5 border-2 border-black text-black text-lg font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                hello@markhorsystems.com
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
