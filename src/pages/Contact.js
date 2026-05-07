import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import MarqueeStrip from '../components/MarqueeStrip';
import './Home.css';

const STEPS = [
  {
    num: '01',
    phase: 'Step I',
    title: 'A real human reads it',
    desc: 'No auto-responder. One of the founding engineers reads your message and writes back with thoughtful questions — usually within 4 hours, always within 24.',
    duration: '< 24h',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    num: '02',
    phase: 'Step II',
    title: '30-minute scoping call',
    desc: 'A real conversation about what you\'re building, constraints, deadlines, budget. No pitch deck. No sales pressure. If we\'re not the right fit, we\'ll say so.',
    duration: '30 min',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l3-3h12l3 3v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        <path strokeLinecap="round" d="M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    num: '03',
    phase: 'Step III',
    title: 'Fixed-price proposal',
    desc: 'A line-by-line proposal: what\'s in, what\'s out, fixed price, realistic timeline. No "we\'ll send numbers later." No change-order shakedown in month three.',
    duration: '3 days',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9l4 4v13a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    num: '04',
    phase: 'Step IV',
    title: 'Kickoff & first demo',
    desc: 'You meet the engineers by name. Contract + NDA signed. Your GitHub org set up. First Loom demo of working code lands in 10 days — not "soon".',
    duration: '10 days',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h8l-1 8L20 9h-8l1-7z" />
      </svg>
    ),
  },
];

const REASSURANCES = [
  {
    title: 'NDAs on request',
    desc: 'Mutual NDA signed before the first call — just reply to our intake email saying so.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Honest referrals',
    desc: 'If we\'re not the right fit, we\'ll point you somewhere better — we\'d rather lose a bad project than win one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    ),
  },
  {
    title: 'No pitch deck required',
    desc: 'Come with a Notion doc, a napkin sketch, or a Loom. Or just a problem. We\'ve started with less.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" d="M7 10h10M7 14h6" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
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
        message: "Message received. A founding engineer will reply within 4 hours.",
      });
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
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
                Tell us what you're building.
                <span className="hero-title-accent"> We'll tell you if we can help.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                A real message gets a real reply — usually within 4 hours, always
                within 24. No auto-responders. No templated "thanks for reaching out."
                One of the founding engineers will write you back.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={300} immediate>
            <div className="hero-trust">
              {[
                { val: '< 4h',   label: 'Avg reply time' },
                { val: '< 24h',  label: 'Guaranteed reply' },
                { val: '30 min', label: 'Scoping call' },
                { val: 'Free',   label: 'No obligation' },
              ].map((s, i) => (
                <div key={i} className="trust-stat">
                  <span className="trust-stat-val">{s.val}</span>
                  <span className="trust-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* MAIN CONTACT */}
      <section className="services">
        <div className="container">
          <div className="contact-layout">

            <RevealOnScroll animation="fadeUp">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Start a Conversation</span>
                </span>
                <h2 className="contact-info-title">
                  Come with a problem.
                  <span className="section-title-accent"> Leave with a plan.</span>
                </h2>
                <p className="contact-info-lead">
                  Tell us a bit about what you're working on. If we're the right fit,
                  you'll get a scoping call within 48 hours. If we're not, we'll tell
                  you which studio we'd send the project to — no retainer, no referral
                  fee, no hard feelings.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="contact-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-detail-label">Email us directly</p>
                      <a
                        href="mailto:hello@markhorsystems.com"
                        className="contact-detail-value"
                      >
                        hello@markhorsystems.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-detail-label">Based in</p>
                      <p className="contact-detail-value">
                        Islamabad, Pakistan · building for 12 countries
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="9" />
                        <path strokeLinecap="round" d="M12 7v5l3 2" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-detail-label">Typical reply</p>
                      <p className="contact-detail-value">
                        Under 4 hours during business days · always within 24
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reassurance chips */}
                <div className="contact-reassure">
                  {REASSURANCES.map((r) => (
                    <div key={r.title} className="contact-reassure-item">
                      <span className="contact-reassure-icon">{r.icon}</span>
                      <div>
                        <p className="contact-reassure-title">{r.title}</p>
                        <p className="contact-reassure-desc">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={120}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-head">
                  <span className="form-head-dot" />
                  <span className="form-head-label">Usually a 4-hour reply</span>
                </div>

                <div className="form-field">
                  <label htmlFor="name" className="form-label">Your name</label>
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

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email" className="form-label">Email</label>
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
                    <label htmlFor="company" className="form-label">Company <span className="form-label-opt">(optional)</span></label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company or product name"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="budget" className="form-label">Rough budget <span className="form-label-opt">(keeps our call useful)</span></label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-input"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Pick a range…</option>
                    <option value="discovery">$5K discovery sprint (1 week)</option>
                    <option value="mvp-low">$35K–$60K MVP (8–10 weeks)</option>
                    <option value="mvp-high">$60K–$90K+ MVP (10–14 weeks)</option>
                    <option value="retainer">Embedded senior (from $8K/mo)</option>
                    <option value="exploring">Just exploring — tell me more</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label">What are you building?</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Problem · users · rough timeline · anything we should know. If you want an NDA before the call, just say so here."
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
                  {isSubmitting ? 'Sending…' : (
                    <>
                      Send message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className="form-status">
                    <span className="form-status-dot" />
                    {submitStatus.message}
                  </div>
                )}

                <p className="form-microcopy">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                  We never share your info. NDA signed before any call if you want one.
                </p>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* BRIDGE STAT */}
      <section className="bridge">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="bridge-inner">
              <span className="bridge-divider" aria-hidden="true" />
              <div className="bridge-content">
                <span className="bridge-stat">&lt; 4h</span>
                <p className="bridge-text">
                  typical reply from a founding engineer —
                  <span className="bridge-text-accent"> not a form-letter bot.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT — editorial timeline */}
      <section className="process process-home">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>What Happens Next</span>
              </span>
              <h2 className="section-title">
                From message
                <span className="section-title-accent"> to kickoff.</span>
              </h2>
              <p className="howwe-lead">
                Most agencies disappear after "thanks for reaching out."
                Here's exactly what happens after you hit send — with
                deadlines we stick to.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={100}>
            <div className="howwe">
              <div className="howwe-rail" aria-hidden="true" />

              <div className="howwe-grid">
                {STEPS.map((s) => (
                  <div key={s.num} className="howwe-step">
                    <span className="howwe-step-phase">{s.phase}</span>
                    <div className="howwe-step-marker" aria-hidden="true">
                      <span className="howwe-step-marker-dot" />
                    </div>
                    <div className="howwe-step-body">
                      <div className="howwe-step-head">
                        <span className="howwe-step-num">{s.num}</span>
                        <span className="howwe-step-icon" aria-hidden="true">{s.glyph}</span>
                      </div>
                      <h3 className="howwe-step-title">{s.title}</h3>
                      <p className="howwe-step-desc">{s.desc}</p>
                      <div className="howwe-step-duration">
                        <span className="howwe-step-duration-dot" />
                        {s.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={200}>
            <p className="steps-footnote">
              <span className="steps-footnote-dot" />
              Not ready to send a full brief? <Link to="mailto:hello@markhorsystems.com">Email us directly</Link> — even a paragraph is fine.
            </p>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Contact;
