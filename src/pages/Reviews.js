import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import './Home.css';

const REVIEWS = [
  {
    id: 1,
    quote: 'The brief was complex — an AI that reads UK official letters (pension notices, court summons, NHS letters) and explains them in plain English, gated behind Stripe. Markhor delivered exactly that. The pipeline handles edge cases we didn\'t anticipate, and the Stripe integration went live without a single support ticket on launch day.',
    author: 'James Hargreaves',
    role: 'Founder · ExplainMyLetter',
    company: 'EML',
    project: 'AI · Web App',
    industry: 'ai',
    rating: 5,
    year: '2024',
    featured: true,
    metric: { v: '< 3s', k: 'avg letter analysis time' },
  },
  {
    id: 2,
    quote: 'We needed a property platform that could handle UAE\'s RE/MAX agent network — listings, lead capture, CMS, agent profiles, the lot. Markhor built it end-to-end and handed over a codebase our in-house team can actually maintain. The admin CMS alone saved us thousands in ongoing vendor costs.',
    author: 'Khalid Al-Rashid',
    role: 'Head of Digital · Remax Hub UAE',
    company: 'RMX',
    project: 'Real Estate · Web',
    industry: 'web',
    rating: 5,
    year: '2024',
    metric: { v: '100+', k: 'agents onboarded at launch' },
  },
  {
    id: 3,
    quote: 'We had the idea — AI staging for property photos — but no idea how to build a job queue that handles bulk image processing, marketing video generation, and floor plan parsing at the same time. Markhor figured it out. The SaaS launched on time and the pipeline hasn\'t gone down since.',
    author: 'Sofia Brennan',
    role: 'Co-Founder · Enhancia.ai',
    company: 'ENH',
    project: 'AI · SaaS',
    industry: 'ai',
    rating: 5,
    year: '2024',
    metric: { v: '98%', k: 'job queue uptime' },
  },
  {
    id: 4,
    quote: 'Multi-vendor with role-based auth, real-time chat, order tracking, and Stripe payments. We\'d been quoted 12 months by two agencies. Markhor shipped a working platform in under five months. The code is clean, the dashboards are intuitive, and sellers onboarded without a single support call.',
    author: 'Nadia Farooq',
    role: 'Founder · Stilo E-Commerce',
    company: 'STL',
    project: 'Retail · Web',
    industry: 'retail',
    rating: 5,
    year: '2023',
    metric: { v: '5 months', k: 'brief to go-live' },
  },
  {
    id: 5,
    quote: 'Turning lecture PDFs into flashcards, MCQs, and mind maps with Arabic support — I couldn\'t find anyone willing to tackle Arabic NLP alongside everything else. Markhor treated it like any other requirement, shipped a working model, and the Arabic support actually works.',
    author: 'Tariq Al-Mansouri',
    role: 'Founder · Memora Study',
    company: 'MEM',
    project: 'EdTech · AI',
    industry: 'ai',
    rating: 5,
    year: '2024',
    metric: { v: '4 languages', k: 'supported at launch' },
  },
  {
    id: 6,
    quote: 'We needed a corporate platform that communicated the legitimacy of our UAV operation — civil logistics, emergency rescue, pilot training, regulatory info. Markhor understood the space immediately, designed something that looked the part, and delivered in six weeks flat.',
    author: 'Liang Wei',
    role: 'Product Lead · Aeroplane UAV',
    company: 'APL',
    project: 'Logistics · Web',
    industry: 'logistics',
    rating: 5,
    year: '2023',
    metric: { v: '6 weeks', k: 'concept to launch' },
  },
];

const FILTERS = [
  { id: 'all', label: 'All reviews' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'web', label: 'Web' },
  { id: 'retail', label: 'Retail' },
  { id: 'logistics', label: 'Logistics' },
];

const Reviews = () => {
  const [filter, setFilter] = useState('all');
  const featured = REVIEWS.find((r) => r.featured) || REVIEWS[0];
  const rest = REVIEWS.filter((r) => !r.featured);
  const visible = filter === 'all' ? rest : rest.filter((r) => r.industry === filter);

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
                <span>Client Reviews</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100} immediate>
              <h1 className="hero-title">
                What founders say
                <span className="hero-title-accent"> when we're not in the room.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={180} immediate>
              <p className="hero-lead">
                We asked clients what they'd tell a first-time founder about
                working with Markhor. These are their words — with the specific
                metrics and moments that earned them.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fadeUp" delay={300} immediate>
            <div className="hero-trust">
              {[
                { val: '4.9★',  label: 'Avg review' },
                { val: '50+',   label: 'Reviews collected' },
                { val: '92%',   label: 'Return for second project' },
                { val: '100%',  label: 'Would refer' },
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

      {/* FEATURED REVIEW */}
      <section className="testi">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Featured Review</span>
              </span>
              <h2 className="section-title">
                Words from a
                <span className="section-title-accent"> long-term partner.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={80}>
            <figure className="testi-card testi-card-featured testi-card-featured-solo">
              <span className="testi-featured-badge">
                <span className="testi-featured-dot" />
                Featured Story · AI · Web
              </span>
              <div className="testi-head">
                <div className="testi-company" aria-hidden="true">{featured.company}</div>
                <div className="testi-rating" aria-label={`${featured.rating} out of 5 stars`}>
                  {[...Array(featured.rating)].map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="testi-quote">{featured.quote}</blockquote>
              <figcaption className="testi-foot">
                <div className="testi-avatar">{featured.author.charAt(0)}</div>
                <div className="testi-foot-text">
                  <p className="testi-name">{featured.author}</p>
                  <p className="testi-role">{featured.role}</p>
                </div>
                <div className="testi-metric">
                  <span className="testi-metric-val">{featured.metric.v}</span>
                  <span className="testi-metric-key">{featured.metric.k}</span>
                </div>
              </figcaption>
            </figure>
          </RevealOnScroll>
        </div>
      </section>

      {/* BRIDGE STAT */}
      <section className="bridge">
        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="bridge-inner">
              <span className="bridge-divider" aria-hidden="true" />
              <div className="bridge-content">
                <span className="bridge-stat">92%</span>
                <p className="bridge-text">
                  of our clients return for a second project —
                  <span className="bridge-text-accent"> the best signal of trust we have.</span>
                </p>
              </div>
              <span className="bridge-divider" aria-hidden="true" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="process process-home">
        <div className="howwe-bg-grid" aria-hidden="true" />
        <div className="howwe-bg-glow" aria-hidden="true" />

        <div className="container">
          <RevealOnScroll animation="fadeUp">
            <div className="section-header section-header-center">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>All Reviews</span>
              </span>
              <h2 className="section-title">
                Real projects,
                <span className="section-title-accent"> real results.</span>
              </h2>
              <p className="howwe-lead">
                From an AI letter reader in the UK to a UAE real estate platform —
                different industries, same ending: shipped on time, still live.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={80}>
            <div className="reviews-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`reviews-filter ${filter === f.id ? 'reviews-filter-active' : ''}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="testi-grid">
            {visible.map((r, i) => (
              <RevealOnScroll key={r.id} animation="fadeUp" delay={i * 80}>
                <figure className="testi-card">
                  <div className="testi-head">
                    <div className="testi-company" aria-hidden="true">{r.company}</div>
                    <div className="testi-rating" aria-label={`${r.rating} out of 5 stars`}>
                      {[...Array(r.rating)].map((_, s) => (
                        <svg key={s} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                          <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="testi-quote">{r.quote}</blockquote>
                  <figcaption className="testi-foot">
                    <div className="testi-avatar">{r.author.charAt(0)}</div>
                    <div className="testi-foot-text">
                      <p className="testi-name">{r.author}</p>
                      <p className="testi-role">{r.role}</p>
                    </div>
                    <span className="testi-project-chip">{r.project}</span>
                  </figcaption>
                  {r.metric && (
                    <div className="testi-metric-row">
                      <span className="testi-metric-val">{r.metric.v}</span>
                      <span className="testi-metric-key">{r.metric.k}</span>
                    </div>
                  )}
                </figure>
              </RevealOnScroll>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="reviews-empty">
              No reviews tagged <strong>{FILTERS.find(f => f.id === filter)?.label}</strong> yet —
              but we're happy to introduce you to a past client in that space on request.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        status="Accepting 2 new projects · Q3 2026"
        title="Want to talk to"
        titleAccent="a past client?"
        lead="Once we've scoped your project, we'll introduce you to 1–2 past clients in a similar stage or industry. Ask them anything — including the hard questions."
        bullets={[
          'Direct intro to past clients in your vertical',
          'Ask them anything — we won\'t be on the call',
          '30-min scoping call · NDA on request',
        ]}
        ctaLabel="Book a scoping call"
      />

    </div>
  );
};

export default Reviews;
