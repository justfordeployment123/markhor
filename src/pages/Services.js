import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mobileDetailImg from '../assets/real-mobile-dev.png';
import webDetailImg from '../assets/real-web-dev.png';
import aiDetailImg from '../assets/real-ai-dev.png';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'mobile',
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Applications',
      description: 'We build high-performance native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store launch, we handle every aspect of mobile development.',
      features: [
        'Native iOS (Swift) & Android (Kotlin) Development',
        'Cross-Platform with React Native & Flutter',
        'UI/UX Design & Prototyping',
        'App Store Optimization (ASO)',
        'Push Notifications & Real-time Features',
        'Offline-First Architecture',
        'Third-Party API Integrations',
        'App Maintenance & Updates'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      image: mobileDetailImg
    },
    {
      id: 'web',
      title: 'Web Development',
      subtitle: 'Websites & Web Applications',
      description: 'From stunning corporate websites to complex SaaS platforms, we create web solutions that scale. Our development process focuses on performance, security, and maintainability.',
      features: [
        'Custom Web Applications & SaaS Platforms',
        'Progressive Web Apps (PWA)',
        'E-Commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Cloud Infrastructure & DevOps',
        'Performance Optimization',
        'Security & Compliance'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: webDetailImg
    },
    {
      id: 'ai',
      title: 'AI Development',
      subtitle: 'Artificial Intelligence Solutions',
      description: 'Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent products. We build custom AI solutions tailored to your business needs.',
      features: [
        'Custom AI/ML Model Development',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'Chatbots & Conversational AI',
        'Predictive Analytics',
        'AI-Powered Automation',
        'LLM Integration & Fine-tuning',
        'Data Pipeline Development'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: aiDetailImg
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'From $5,000',
      description: 'Perfect for MVPs and small projects',
      features: [
        'Project scope analysis',
        'UI/UX design',
        'Core feature development',
        'Basic testing & QA',
        '30-day post-launch support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: 'From $15,000',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced features & integrations',
        'Cloud infrastructure setup',
        'Comprehensive testing',
        '90-day post-launch support',
        'Performance optimization'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale applications',
      features: [
        'Everything in Professional',
        'Dedicated team',
        'Custom architecture',
        'Security audits',
        'SLA guarantee',
        'Ongoing maintenance',
        '24/7 support'
      ],
      cta: 'Contact Us'
    }
  ];

  const techStack = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    'Backend': ['Node.js', 'Python', 'Go', 'Java', 'GraphQL'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    'Cloud': ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase']
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Services
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Digital Solutions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                That Drive Growth
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              From concept to launch, we deliver end-to-end digital products that transform businesses.
              Our expertise spans mobile, web, and AI development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Tabs */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeService === index
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                {services[activeService].icon}
              </div>

              <h2 className="text-4xl font-bold text-black mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                {services[activeService].title}
              </h2>
              <p className="text-gray-500 text-lg mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {services[activeService].subtitle}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {services[activeService].description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {services[activeService].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Complete Solutions
            </span>
            <h2 className="mt-4 text-4xl font-bold text-black"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              All Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-black font-medium group-hover:gap-4 transition-all"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Technology
            </span>
            <h2 className="mt-4 text-4xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Our Tech Stack
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We use cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {techs.map((tech, index) => (
                    <li key={index} className="text-gray-300"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Pricing
            </span>
            <h2 className="mt-4 text-4xl font-bold text-black"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Choose the engagement model that works best for your project.
              All prices are starting points and vary based on project complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${tier.popular
                  ? 'border-black bg-black text-white scale-105 shadow-2xl'
                  : 'border-gray-200 bg-white hover:border-black'
                  }`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-semibold rounded-full"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Most Popular
                  </span>
                )}

                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-black'}`}
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {tier.name}
                </h3>
                <div className={`text-3xl font-bold mb-4 ${tier.popular ? 'text-white' : 'text-black'}`}
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {tier.price}
                </div>
                <p className={`mb-6 ${tier.popular ? 'text-gray-300' : 'text-gray-600'}`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tier.popular ? 'text-gray-300' : 'text-gray-600'}
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-4 text-center font-semibold rounded-full transition-all duration-300 ${tier.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            Let's Build Your Next Project
          </h2>
          <p className="text-xl text-gray-600 mb-10"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Ready to transform your idea into a digital reality?
            Get in touch and let's discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start a Project
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:hello@markhorsystems.com"
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              hello@markhorsystems.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
