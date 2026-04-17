import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import './Home.css';

const STEPS = [
  {
    num: '01',
    title: 'We reply within 24 hours',
    desc: 'No auto-responders. A real person reads your message and responds with thoughtful questions.',
  },
  {
    num: '02',
    title: 'Discovery call',
    desc: 'A 30-minute conversation to understand your vision, constraints, and what success looks like for you.',
  },
  {
    num: '03',
    title: 'Tailored proposal',
    desc: 'A clear scope, timeline and investment breakdown — no surprises, no hidden costs.',
  },
  {
    num: '04',
    title: 'Kickoff & build',
    desc: 'Weekly demos, tight feedback loops, and a product you can feel growing each sprint.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: "Thank you — we'll be in touch within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

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
                <span>Get in Touch</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                Let's build something
                <span className="hero-title-accent"> together.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                Whether you have a clear vision or just an idea — we're here
                to listen, advise and build. No templates, no generic proposals.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="services">
        <div className="container">
          <div className="contact-layout">

            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="eyebrow"><span>Start a Conversation</span></span>
                <h2 className="contact-info-title">
                  Every great product begins with a
                  <span className="section-title-accent"> conversation.</span>
                </h2>
                <p className="contact-info-lead">
                  Tell us a bit about what you're working on. We'll reply
                  within one business day with thoughtful questions and a
                  clear next step.
                </p>

                <div className="contact-detail">
                  <p className="contact-detail-label">Email</p>
                  <a
                    href="mailto:hello@markhorsystems.com"
                    className="contact-detail-value"
                  >
                    hello@markhorsystems.com
                  </a>
                </div>
                <div className="contact-detail">
                  <p className="contact-detail-label">Based In</p>
                  <p className="contact-detail-value">
                    Lahore, Pakistan — working globally
                  </p>
                </div>
                <div className="contact-detail">
                  <p className="contact-detail-label">Response Time</p>
                  <p className="contact-detail-value">Within 24 hours</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={120}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are you building? What problem are you solving?"
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit"
                  style={{ opacity: isSubmitting ? 0.65 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus && (
                  <p className="form-status">{submitStatus.message}</p>
                )}
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="process">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow"><span>What Happens Next</span></span>
              <h2 className="section-title">
                From message
                <span className="section-title-accent"> to momentum.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="steps-list">
            {STEPS.map((s, i) => (
              <RevealOnScroll key={s.num} animation="fadeUp" delay={i * 70}>
                <div className="step-row">
                  <span className="step-num">{s.num}</span>
                  <div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
