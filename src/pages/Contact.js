import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import PageHero from '../components/PageHero';
import './pages.css';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setSubmitStatus({ type: 'success', message: "Thank you for reaching out! We'll get back to you within 24 hours." });
      setFormData({ name: '', email: '', company: '', budget: '', projectType: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="dark-page">

      <PageHero
        label="Contact Us"
        preTitle="— Let's talk"
        outlineTitle="start a"
        solidTitle="conversation."
        description="Have a project in mind? We'd love to hear about it. Reach out and let's explore what we can build together."
      />

      {/* ── Contact Info Cards ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                label: 'Email',
                value: 'hello@markhorsystems.com',
                link: 'mailto:hello@markhorsystems.com',
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                label: 'Phone',
                value: '+92 300 1234567',
                link: 'tel:+923001234567',
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                label: 'Location',
                value: 'Lahore, Pakistan',
                link: '#',
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                label: 'Hours',
                value: 'Mon–Fri  9 AM – 6 PM PKT',
                link: '#',
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
                <a href={item.link} className="pg-contact-card">
                  <div className="pg-contact-icon">{item.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '6px' }}>{item.label}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + FAQ ── */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="page-section-label">Project Inquiry</span>
                <h2 className="page-section-heading">Tell us about<br />your project.</h2>
                <p className="page-section-desc" style={{ marginBottom: '40px' }}>Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="pg-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="pg-input"
                      />
                    </div>
                    <div>
                      <label className="pg-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="pg-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="pg-label">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="pg-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="pg-label">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="pg-input"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="pg-label">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="pg-input"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map((range, i) => (
                          <option key={i} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="pg-label">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="pg-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pg-btn-primary"
                    style={{ justifyContent: 'center', opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{ width: '16px', height: '16px', border: '2px solid rgba(16,13,37,0.3)', borderTopColor: '#100D25', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
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
                    <div style={{ padding: '16px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </RevealOnScroll>

            {/* FAQ + Socials */}
            <RevealOnScroll animation="fadeUp" delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* FAQ */}
                <div className="pg-card p-8">
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>Frequently Asked</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {[
                      {
                        q: 'What is your typical project timeline?',
                        a: 'Most projects take 2–4 months depending on complexity. We\'ll provide a detailed timeline after our initial consultation.'
                      },
                      {
                        q: 'Do you offer ongoing support?',
                        a: 'Yes! We offer maintenance packages and ongoing support to ensure your product stays up-to-date and running smoothly.'
                      },
                      {
                        q: 'Can you work with our existing team?',
                        a: 'Absolutely. We often collaborate with in-house teams to augment their capabilities and accelerate development.'
                      }
                    ].map((faq, i) => (
                      <div key={i} style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: i < 2 ? '20px' : 0 }}>
                        <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.92rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>{faq.q}</h4>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Socials */}
                <div className="pg-card p-8">
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                      {
                        name: 'LinkedIn', link: '#',
                        icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      },
                      {
                        name: 'Twitter', link: '#',
                        icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      },
                      {
                        name: 'GitHub', link: '#',
                        icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      },
                      {
                        name: 'Instagram', link: '#',
                        icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      },
                    ].map((social, i) => (
                      <a key={i} href={social.link} className="pg-social-btn" aria-label={social.name}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── Location Placeholder ── */}
      <section className="page-section-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-12 text-center">
              <span className="page-section-label">Location</span>
              <h2 className="page-section-heading">Visit our office.</h2>
              <p className="page-section-desc mx-auto" style={{ textAlign: 'center' }}>We're based in Lahore, Pakistan. Schedule a visit and let's talk in person.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <div className="pg-placeholder" style={{ aspectRatio: '21/9', minHeight: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <svg width="32" height="32" fill="none" stroke="rgba(255,255,255,0.25)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>Lahore, Pakistan</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Contact;
