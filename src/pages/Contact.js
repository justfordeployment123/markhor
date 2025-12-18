import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = {
    email: "hello@markhorsystems.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM PKT"
  };

  const projectTypes = [
    'Mobile App Development',
    'Web Application',
    'AI/ML Solution',
    'UI/UX Design',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Less than $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: '', email: '', company: '', budget: '', projectType: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
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
              Contact Us
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Something Amazing
                </span>
              </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Have a project in mind? We'd love to hear about it. 
              Reach out and let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

  {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Email',
                value: contactInfo.email,
                link: `mailto:${contactInfo.email}`
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: 'Phone',
                value: contactInfo.phone,
                link: `tel:${contactInfo.phone.replace(/\s/g, '')}`
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Location',
                value: contactInfo.location,
                link: '#'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Hours',
                value: contactInfo.hours,
                link: '#'
              }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
          </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-black font-medium"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                Tell Us About Your Project
              </h2>
              <p className="text-gray-600 mb-8"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
              </div>
              
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Company Name
                </label>
                <input
                  type="text"
                    name="company"
                    value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
              </div>
              <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Budget Range
                </label>
                    <select
                      name="budget"
                      value={formData.budget}
                  onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
              </div>
              
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                    rows="5"
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
              </div>
              
                <button 
                  type="submit"
                disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`p-4 rounded-xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif' }}>{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
            
            {/* Side Content */}
            <div className="lg:pl-8">
              {/* Quick FAQ */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-bold text-black mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  Frequently Asked
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: 'What is your typical project timeline?',
                      a: 'Most projects take 2-4 months depending on complexity. We\'ll provide a detailed timeline after our initial consultation.'
                    },
                    {
                      q: 'Do you offer ongoing support?',
                      a: 'Yes! We offer maintenance packages and ongoing support to ensure your product stays up-to-date and running smoothly.'
                    },
                    {
                      q: 'Can you work with our existing team?',
                      a: 'Absolutely. We often collaborate with in-house teams to augment their capabilities and accelerate development.'
                    }
                  ].map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-black mb-2"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: 'LinkedIn',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                      link: '#'
                    },
                    {
                      name: 'Twitter',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ),
                      link: '#'
                    },
                    {
                      name: 'GitHub',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      ),
                      link: '#'
                    },
                    {
                      name: 'Instagram',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ),
                      link: '#'
                    }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Visit Our Office
            </h2>
            <p className="mt-4 text-gray-600"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We'd love to meet you in person. Schedule a visit to our office in Lahore.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="aspect-[21/9] bg-gray-200 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </div>
                <p className="text-gray-600 font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
