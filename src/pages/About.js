import React from 'react';
import { Link } from 'react-router-dom';
import ourStoryImg from '../assets/our-story.png';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partnership',
      description: 'We work alongside you as partners, not just vendors. Your success is our success.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Obsessed',
      description: 'We deliver pixel-perfect designs and clean, maintainable code. No shortcuts.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Speed & Agility',
      description: 'We move fast without breaking things. Rapid iteration meets rigorous testing.'
    }
  ];

  const team = [
    {
      name: 'Muhammad Fizan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in software development and digital transformation.',
      avatar: 'MF'
    },
    {
      name: 'Technical Team',
      role: 'Development',
      bio: 'Full-stack engineers specializing in React, Node.js, mobile development, and AI/ML.',
      avatar: 'TT'
    },
    {
      name: 'Design Team',
      role: 'UI/UX Design',
      bio: 'Creative designers crafting beautiful, intuitive user experiences.',
      avatar: 'DT'
    },
    {
      name: 'AI Team',
      role: 'AI/ML Engineering',
      bio: 'AI specialists building intelligent solutions with cutting-edge machine learning.',
      avatar: 'AI'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Founded', description: 'Markhor Systems was born with a vision to build exceptional digital products.' },
    { year: '2020', title: 'First Major Client', description: 'Delivered our first enterprise-scale mobile application.' },
    { year: '2021', title: 'AI Division', description: 'Expanded services to include AI and machine learning solutions.' },
    { year: '2022', title: '30+ Projects', description: 'Crossed 30 successful project deliveries milestone.' },
    { year: '2023', title: 'Global Reach', description: 'Serving clients across North America, Europe, and Asia.' },
    { year: '2024', title: 'AI Innovation', description: 'Launched advanced AI development services with LLM expertise.' },
  ];

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

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rotate-45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About Us
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Building the Future,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                One Product at a Time
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We're a passionate team of designers, developers, and innovators dedicated to creating
              digital products that make a real difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Story
              </span>
              <h2 className="mt-4 text-4xl font-bold text-black"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                From Idea to Impact
              </h2>
              <div className="mt-6 space-y-6 text-gray-600 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <p className="text-lg">
                  Markhor Systems was founded with a simple belief: technology should empower businesses
                  and delight users. Named after the majestic Markhor — Pakistan's national animal known
                  for its strength and resilience — we embody those same qualities in our work.
                </p>
                <p>
                  What started as a small team passionate about mobile development has grown into a
                  full-service digital agency. Today, we help startups and enterprises alike transform
                  their ideas into powerful mobile apps, web platforms, and AI-driven solutions.
                </p>
                <p>
                  Our approach combines deep technical expertise with a keen understanding of user
                  needs. We don't just write code — we craft experiences that people love to use.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden">
                <img
                  src={ourStoryImg}
                  alt="Our Story - From Idea to Impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Values
            </span>
            <h2 className="mt-4 text-4xl font-bold text-black"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Journey
            </span>
            <h2 className="mt-4 text-4xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="text-4xl font-bold text-white/20 mb-2"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-white rounded-full ring-4 ring-white/20" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The Team
            </span>
            <h2 className="mt-4 text-4xl font-bold text-black"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Meet Our Experts
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              A diverse team of passionate professionals dedicated to building exceptional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-black"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-widest"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-10"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Let's discuss your next project and explore how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get in Touch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
