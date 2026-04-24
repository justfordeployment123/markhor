import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const FAQS = [
  {
    q: 'Who actually owns the code we pay you to write?',
    a: 'You do — from commit number one. We push directly to your GitHub organization, not ours. Your repo is yours the day we start, not the day we finish. We keep zero rights to reuse your product-specific code. If you ever want to move to an in-house team or another vendor, you take everything: repo, Figma, credentials, documentation, test coverage reports. No hostage-taking.',
  },
  {
    q: 'How much does a typical project cost?',
    a: 'Our sweet spot is $35K–$90K for a production-ready MVP, depending on scope and platforms. A simple mobile app with a clean backend sits near the bottom. A complex AI pipeline with multiple integrations sits near the top. We always start with a fixed-price 1-week discovery sprint so you get a real number and a real plan before committing to the full build. Monthly retainers for post-launch work start at a per-engineer rate we\'ll quote on the call.',
  },
  {
    q: 'How does the timezone thing actually work from Lahore?',
    a: 'Lahore overlaps a full workday with London, 4–5 hours with New York, and late afternoons with San Francisco. One live standup a day at your timezone (we flex, not you), daily async updates on Slack, and a weekly Loom demo every Friday. Our Slack response SLA during business hours is under 2 hours — usually under 30 minutes. Most US clients say the overnight overlap is a feature, not a bug: problems you surface at 5 pm are often solved by breakfast.',
  },
  {
    q: 'What if my team is three engineers who need help, not a full studio?',
    a: 'That\'s half our book. We offer two models: project-based (fixed scope, fixed price, full team) or embedded seniors (one or two of our engineers working inside your team on your process, your standups, your codebase). Embedded starts at four weeks, month-to-month after that, 30-day exit clause.',
  },
  {
    q: 'What if we pivot mid-build?',
    a: 'Honestly? Most of our clients do. It\'s normal. We re-scope at sprint boundaries — no change-order shakedown, no "that\'ll be another $15K" emails. If the pivot is big enough to reset the plan, we spend a day re-scoping and hand you a new fixed-price proposal. You pay for what\'s done, approve the new scope, and we keep shipping.',
  },
  {
    q: 'Who exactly will be working on my project?',
    a: 'The senior engineers whose names and GitHub profiles we show you on the intro call. We do not swap juniors in after you sign. That team stays on your project from discovery through launch — it\'s in the contract. If anyone does need to roll off (it\'s happened twice in seven years), the replacement is also senior, also named, and they pair with the outgoing engineer for at least a full sprint before handoff.',
  },
  {
    q: 'What about security, NDAs, and compliance?',
    a: 'NDA before the first call if you want one — just reply to our intake email saying so. We follow a secure SDLC: signed commits, dependency scanning, secrets never in repos, role-based access across every tool. We\'ve shipped projects under HIPAA and PCI scope and can provide a DPA on request. For enterprise clients, we offer code escrow. For any founder: ask us for our security one-pager and we\'ll send it the same day.',
  },
  {
    q: 'What happens after you deliver?',
    a: 'Every contract includes 30 days of free bug fixes post-launch because real users break things beta testers don\'t. After that, roughly 70% of our founders keep one or two engineers on a monthly retainer to ship features, monitor performance, and help interview in-house replacements. If you\'d rather go fully in-house, we hand off with a README, an architecture diagram, a walkthrough video, and two weeks of pair-programming with your new hires — all included.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-layout">

          <RevealOnScroll animation="fadeUp">
            <div className="faq-intro">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Questions · Answered</span>
              </span>
              <h2 className="section-title">
                Questions founders
                <span className="section-title-accent"> actually ask us.</span>
              </h2>
              <p className="faq-lead">
                If you're comparing studios, these are the questions that
                separate the real ones from the resellers. Our honest answers below.
              </p>

              <div className="faq-contact">
                <a href="mailto:hello@markhorsystems.com" className="faq-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                  </svg>
                  Ask anything
                </a>
                <span className="faq-contact-hint">
                  We reply within 24 hours, in writing.
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeUp" delay={100}>
            <ul className="faq-list">
              {FAQS.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <li key={i} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="faq-q-text">{f.q}</span>
                      <span className="faq-chevron" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer-wrap">
                      <p className="faq-answer">{f.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
