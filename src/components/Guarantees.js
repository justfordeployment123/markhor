import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const GUARANTEES = [
  {
    title: 'Your Code, Your IP — from day one',
    desc: 'Every line of code, every asset, every credential is yours. We sign IP assignment before kickoff, not at some future milestone.',
    proof: 'IP assignment signed pre-kickoff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fire us anytime',
    desc: 'No retainer lock-ins, no minimum contracts. If something doesn\'t click, you walk — we hand over clean code within 48 hours.',
    proof: 'Month-to-month · no lock-in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7l-3-3m0 0L9 7m3-3v12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
      </svg>
    ),
  },
  {
    title: 'NDAs first, questions later',
    desc: 'Mutual NDA signed before any discovery call. Your idea, your numbers, your customers — none of it leaves the room.',
    proof: 'Mutual NDA · standard template',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: '30-day bug warranty',
    desc: 'We fix any bug you report within 30 days of launch, for free. Not "we\'ll bill hourly" — actually free.',
    proof: 'Zero-cost post-launch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Fixed scope, fixed price',
    desc: 'The number on your proposal is the number on your invoice. If we mis-scope, we eat the cost — not you.',
    proof: 'Scope-creep absorbed by us',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10M7 14h6" />
      </svg>
    ),
  },
  {
    title: 'Weekly demos, shared everything',
    desc: 'Every Friday you see working software — not slides. Shared Slack, shared GitHub, shared Figma. Never a black box.',
    proof: 'Slack · GitHub · Figma access',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
      </svg>
    ),
  },
];

const Guarantees = () => {
  return (
    <section className="guarantees">
      <div className="guarantees-bg-grid" aria-hidden="true" />
      <div className="guarantees-bg-glow" aria-hidden="true" />

      <div className="container">
        <RevealOnScroll animation="fadeUp">
          <div className="section-header section-header-center">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              <span>How We Protect You</span>
            </span>
            <h2 className="section-title">
              Six commitments,
              <span className="section-title-accent"> in writing.</span>
            </h2>
            <p className="section-lead">
              The reasons most agency engagements go wrong — and the promises
              we make so they don't happen here.
            </p>
          </div>
        </RevealOnScroll>

        <div className="guarantees-grid">
          {GUARANTEES.map((g, i) => (
            <RevealOnScroll key={g.title} animation="fadeUp" delay={i * 80}>
              <article className="guarantee-card">
                <div className="guarantee-card-top">
                  <span className="guarantee-icon" aria-hidden="true">{g.icon}</span>
                  <span className="guarantee-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                </div>
                <h3 className="guarantee-title">{g.title}</h3>
                <p className="guarantee-desc">{g.desc}</p>
                <div className="guarantee-proof">
                  <span className="guarantee-proof-dot" />
                  {g.proof}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
