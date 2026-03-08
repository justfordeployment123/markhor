import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import './Home.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      setSubmitStatus({ type: 'success', message: "Thank you — we'll be in touch within 24 hours." });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="home-page">

      {/* ── HERO — editorial, large email as focal point ── */}
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full pt-32 pb-16 lg:pt-40 lg:pb-24">
          <RevealOnScroll animation="fadeUp">
            <p className="hero-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Get in Touch</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={120}>
            <h1 className="hero-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's build something<br />
              <span className="hero-heading-accent">together.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <a
              href="mailto:hello@markhorsystems.com"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: 'rgba(180,160,255,0.6)',
                textDecoration: 'none',
                display: 'inline-block',
                marginTop: '8px',
                borderBottom: '1px solid rgba(180,160,255,0.15)',
                paddingBottom: '4px',
                transition: 'color 0.3s ease, border-color 0.3s ease',
              }}
            >
              hello@markhorsystems.com
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MAIN — asymmetric split: left statement + details, right form ── */}
      <section className="about-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-center" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
          }}>

            {/* ── Left column: statement + reach us ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
            }}
              className="contact-main-grid"
            >
              <RevealOnScroll animation="fadeUp">
                <div>
                  <h2 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.25,
                    marginBottom: '24px',
                  }}>
                    Every great product starts with a
                    <span className="text-accent"> conversation.</span>
                  </h2>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.75,
                    marginBottom: '40px',
                  }}>
                    Whether you have a clear vision or just an idea — we're here to
                    listen, advise, and build. No templates, no generic proposals.
                    Just honest conversation about what you need.
                  </p>

                  {/* Contact details — stacked, minimal */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <p style={{
                        fontFamily: 'Space Grotesk, sans-serif', fontSize: '10px',
                        letterSpacing: '0.25em', textTransform: 'uppercase',
                        color: 'rgba(180,160,255,0.3)', marginBottom: '6px',
                      }}>Email</p>
                      <a href="mailto:hello@markhorsystems.com" style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                      }}>hello@markhorsystems.com</a>
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'Space Grotesk, sans-serif', fontSize: '10px',
                        letterSpacing: '0.25em', textTransform: 'uppercase',
                        color: 'rgba(180,160,255,0.3)', marginBottom: '6px',
                      }}>Based in</p>
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.55)',
                      }}>Lahore, Pakistan — working globally</p>
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'Space Grotesk, sans-serif', fontSize: '10px',
                        letterSpacing: '0.25em', textTransform: 'uppercase',
                        color: 'rgba(180,160,255,0.3)', marginBottom: '6px',
                      }}>Response time</p>
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.55)',
                      }}>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* ── Right column: form ── */}
              <RevealOnScroll animation="fadeUp" delay={100}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {/* Name */}
                  <div style={{
                    borderBottom: '1px solid rgba(180,160,255,0.08)',
                    paddingBottom: '24px',
                    marginBottom: '24px',
                  }}>
                    <label style={{
                      display: 'block', fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: 'rgba(180,160,255,0.3)', marginBottom: '12px',
                    }}>Your Name</label>
                    <input
                      type="text" name="name" value={formData.name}
                      onChange={handleInputChange} required
                      placeholder="Full name"
                      style={{
                        width: '100%', padding: '0', background: 'transparent',
                        border: 'none', borderBottom: '1px solid rgba(180,160,255,0.12)',
                        color: '#fff', fontSize: '1rem', fontFamily: 'DM Sans, sans-serif',
                        outline: 'none', paddingBottom: '8px',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{
                    borderBottom: '1px solid rgba(180,160,255,0.08)',
                    paddingBottom: '24px',
                    marginBottom: '24px',
                  }}>
                    <label style={{
                      display: 'block', fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: 'rgba(180,160,255,0.3)', marginBottom: '12px',
                    }}>Email Address</label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleInputChange} required
                      placeholder="you@company.com"
                      style={{
                        width: '100%', padding: '0', background: 'transparent',
                        border: 'none', borderBottom: '1px solid rgba(180,160,255,0.12)',
                        color: '#fff', fontSize: '1rem', fontFamily: 'DM Sans, sans-serif',
                        outline: 'none', paddingBottom: '8px',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={{
                      display: 'block', fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: 'rgba(180,160,255,0.3)', marginBottom: '12px',
                    }}>Tell us about your project</label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleInputChange} required rows="4"
                      placeholder="What are you building? What problem are you solving?"
                      style={{
                        width: '100%', padding: '0', background: 'transparent',
                        border: 'none', borderBottom: '1px solid rgba(180,160,255,0.12)',
                        color: '#fff', fontSize: '1rem', fontFamily: 'DM Sans, sans-serif',
                        outline: 'none', resize: 'none', paddingBottom: '8px',
                        transition: 'border-color 0.3s ease',
                        lineHeight: 1.7,
                      }}
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif',
                      opacity: isSubmitting ? 0.6 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      border: 'none', alignSelf: 'flex-start',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {submitStatus && (
                    <p style={{
                      marginTop: '16px', fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem', color: 'rgba(180,160,255,0.6)',
                    }}>
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT — simple text rows, no cards ── */}
      <section className="work-section">
        <div className="section-bg" />
        <div className="section-glow section-glow-left" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="work-heading-wrap">
              <p className="section-label" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What Happens Next</p>
              <h2 className="work-heading" style={{ fontFamily: 'Syne, sans-serif' }}>
                From message to <span className="text-accent">momentum.</span>
              </h2>
            </div>
          </RevealOnScroll>

          {[
            { num: '01', title: 'We reply within 24 hours', desc: 'No auto-responders. A real person reads your message and responds with thoughtful questions.' },
            { num: '02', title: 'Discovery call', desc: 'A 30-minute conversation to understand your vision, constraints, and what success looks like for you.' },
            { num: '03', title: 'Tailored proposal', desc: 'A clear scope, timeline, and investment breakdown — no surprises, no hidden costs.' },
          ].map((step, i) => (
            <RevealOnScroll key={i} animation="fadeUp" delay={i * 80}>
              <div style={{
                padding: '28px 0',
                borderBottom: '1px solid rgba(180,160,255,0.06)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '24px',
                alignItems: 'baseline',
              }}>
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(180,160,255,0.25)',
                  letterSpacing: '0.1em',
                  minWidth: '28px',
                }}>{step.num}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '6px',
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.7,
                  }}>{step.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Responsive grid style ── */}
      <style>{`
        .contact-main-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        .contact-main-grid input:focus,
        .contact-main-grid textarea:focus {
          border-bottom-color: rgba(180,160,255,0.35) !important;
        }
        .contact-main-grid input::placeholder,
        .contact-main-grid textarea::placeholder {
          color: rgba(255,255,255,0.15);
        }
      `}</style>

    </div>
  );
};

export default Contact;
