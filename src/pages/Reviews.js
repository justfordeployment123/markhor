import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import CTASection from '../components/CTASection';
import MarqueeStrip from '../components/MarqueeStrip';
import './Home.css';

const REVIEWS = [
  {
    id: 1,
    quote: 'We\'d been burned twice before Markhor — once by a shop that shipped nothing for six months, once by a "senior team" that turned out to be two juniors on a Discord. Markhor was different from the first week. Same four engineers kickoff to launch. Weekly demos that actually worked. Our MVP shipped in 11 weeks and we closed our seed round two months later.',
    author: 'Sarah Chen',
    role: 'Founder & CEO · NovaPay (YC W24)',
    company: 'NP',
    project: 'FinTech · Web',
    industry: 'fintech',
    rating: 5,
    year: '2024',
    featured: true,
    metric: { v: '11 weeks', k: 'MVP shipped → seed raised' },
  },
  {
    id: 2,
    quote: 'The thing no one tells you about hiring offshore is that timezone can be an asset. I\'d send a bug at 6 pm in New York and wake up to a PR merged, a staging link, and a Loom walking me through the fix. Ahmed and the team felt less like a vendor and more like the CTO I couldn\'t afford yet.',
    author: 'Ahmed Khalil',
    role: 'Co-founder · Routeflow (Series A, €4.2M)',
    company: 'RF',
    project: 'Logistics · Platform',
    industry: 'logistics',
    rating: 5,
    year: '2024',
    metric: { v: '40k/day', k: 'deliveries routed' },
  },
  {
    id: 3,
    quote: 'We pivoted twice during the build. Most agencies would have sent a change-order shakedown. Markhor re-scoped in a 30-minute call and kept shipping. The final product is the only code I\'ve ever inherited that I didn\'t immediately want to rewrite — and my in-house team agrees.',
    author: 'Priya Sharma',
    role: 'CTO · Shopkart Commerce',
    company: 'SK',
    project: 'Retail · Mobile',
    industry: 'retail',
    rating: 5,
    year: '2024',
    metric: { v: '4.8★', k: 'App Store rating' },
  },
  {
    id: 4,
    quote: 'We needed a HIPAA-scoped triage model that could actually make it past hospital compliance. Markhor shipped it in twelve weeks — auditable end-to-end, deployed in our private cloud, and reading intake notes faster than our nurses could type them.',
    author: 'Dr. Michael Roberts',
    role: 'Chief Medical Officer · Clearpath Triage',
    company: 'CP',
    project: 'Healthcare · AI',
    industry: 'ai',
    rating: 5,
    year: '2023',
    metric: { v: '97%', k: 'classifier accuracy' },
  },
  {
    id: 5,
    quote: 'Our e-commerce site was held together with PHP and hope. Markhor rebuilt the whole platform in four months — and our conversion rate jumped 40% the week after launch, because the checkout finally worked on mobile.',
    author: 'Emily Johnson',
    role: 'Founder · EcoMarket',
    company: 'EM',
    project: 'Retail · Web',
    industry: 'retail',
    rating: 5,
    year: '2023',
    metric: { v: '+40%', k: 'conversion lift' },
  },
  {
    id: 6,
    quote: 'They saved us from a disaster. Our previous vendor had pushed an untested deploy on a Friday and gone dark. Markhor took over the repo on Monday, fixed the production bug by Wednesday, and documented everything we\'d been missing in a README that should have existed year one.',
    author: 'James Wilson',
    role: 'CEO · CloudSync',
    company: 'CS',
    project: 'Web · Recovery',
    industry: 'web',
    rating: 5,
    year: '2024',
    metric: { v: '72h', k: 'rescue → stabilised' },
  },
];

const FILTERS = [
  { id: 'all', label: 'All reviews' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'retail', label: 'Retail' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'web', label: 'Web' },
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
                We asked six recent clients what they'd tell a first-time founder
                about working with Markhor. These are their words — unedited,
                with the specific metrics and moments that earned them.
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
                Featured Story · YC W24
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
                Six stories,
                <span className="section-title-accent"> one consistent pattern.</span>
              </h2>
              <p className="howwe-lead">
                A rescue project, a pivot in month two, a timezone advantage —
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
