import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      quote: "Markhor Systems transformed our vision into a beautiful, functional app. Their attention to detail and technical expertise is unmatched. The team delivered exactly what we needed, on time and within budget.",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "SC",
      rating: 5,
      project: "Mobile App Development",
      date: "2024"
    },
    {
      id: 2,
      quote: "Working with Markhor was a game-changer for our business. They delivered our AI solution ahead of schedule and exceeded expectations. The quality of work is exceptional, and their team is professional and responsive.",
      author: "Michael Roberts",
      role: "CTO",
      company: "DataFlow",
      avatar: "MR",
      rating: 5,
      project: "AI Development",
      date: "2024"
    },
    {
      id: 3,
      quote: "Outstanding web development services! Markhor Systems built our e-commerce platform with incredible attention to user experience. Our sales have increased by 40% since launch. Highly recommended!",
      author: "Emily Johnson",
      role: "Founder",
      company: "EcoMarket",
      avatar: "EJ",
      rating: 5,
      project: "Web Development",
      date: "2023"
    },
    {
      id: 4,
      quote: "The team at Markhor Systems is incredibly talented. They took our complex requirements and turned them into a seamless mobile application. The entire process was smooth, and communication was excellent throughout.",
      author: "David Park",
      role: "Product Manager",
      company: "FinTech Solutions",
      avatar: "DP",
      rating: 5,
      project: "Mobile App Development",
      date: "2024"
    },
    {
      id: 5,
      quote: "We needed a custom AI solution for our analytics platform, and Markhor delivered beyond our expectations. Their technical knowledge and problem-solving skills are top-notch. A pleasure to work with!",
      author: "Lisa Anderson",
      role: "Director of Technology",
      company: "Analytics Pro",
      avatar: "LA",
      rating: 5,
      project: "AI Development",
      date: "2023"
    },
    {
      id: 6,
      quote: "Markhor Systems built our SaaS platform from scratch, and the results have been phenomenal. The platform is fast, scalable, and user-friendly. Their team's expertise in modern web technologies is evident in every aspect of the project.",
      author: "James Wilson",
      role: "CEO",
      company: "CloudSync",
      avatar: "JW",
      rating: 5,
      project: "Web Development",
      date: "2024"
    }
  ];

  const stats = [
    { value: '4.9', label: 'Average Rating', suffix: '/5' },
    { value: '50+', label: 'Client Reviews', suffix: '' },
    { value: '98%', label: 'Satisfaction Rate', suffix: '' },
    { value: '100%', label: 'Would Recommend', suffix: '' }
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Client Reviews
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                What Our Clients
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Say About Us
                </span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={200}>
              <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Don't just take our word for it. Here's what our clients have to say about working with Markhor Systems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} animation="scale" delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold text-black mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {stat.value}
                    {stat.suffix && <span className="text-3xl text-gray-400">{stat.suffix}</span>}
                  </div>
                  <div className="text-gray-600 text-sm uppercase tracking-widest"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <RevealOnScroll key={review.id} animation="fadeUp" delay={index * 100}>
                <TiltCard 
                  className="p-8 bg-white border border-gray-200 rounded-3xl h-full flex flex-col"
                  intensity={5}
                  scale={1.01}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <svg className="w-10 h-10 text-gray-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    "{review.quote}"
                  </p>

                  {/* Project Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {review.project}
                    </span>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-black"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {review.author}
                      </div>
                      <div className="text-sm text-gray-500"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {review.role}, {review.company}
                      </div>
                      <div className="text-xs text-gray-400 mt-1"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {review.date}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll animation="fadeUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Join Our
              <br />
              Success Stories?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <p className="text-xl text-gray-400 mb-10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Let's work together to create something amazing. Get in touch and let's discuss your project.
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton 
                to="/contact" 
                className="group px-10 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Get Started
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton 
                to="/services" 
                className="px-10 py-5 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                View Services
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

