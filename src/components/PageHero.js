import React from 'react';
import { CountUp, SectionLink } from './effects';

// Inner-page opening: the Home hero's midnight canvas, copy rhythm, and ruled bottom bar.
// The bottom bar shows either in-page `sections` or headline `facts`.
export default function PageHero({ eyebrow, title, accent, lead, actions, note, visual, sections, facts, className = '' }) {
  return <section className={`mk-page-hero ${className}`}>
    <div className="mk-page-hero-bg" aria-hidden="true" />
    <div className="mk-wrap mk-page-hero-inner">
      <div className="mk-page-hero-grid">
        <div className="mk-page-hero-copy">
          <span className="mk-eyebrow"><span className="mk-status-dot" />{eyebrow}</span>
          <h1>{title}<br /><span>{accent}</span></h1>
          <p>{lead}</p>
          {actions && <div className="mk-page-hero-actions">{actions}</div>}
          {note && <span className="mk-hero-note">{note}</span>}
        </div>
        {visual && <div className="mk-page-hero-visual">{visual}</div>}
      </div>
      {sections && <nav className="mk-page-hero-bottom mk-page-nav" aria-label="On this page">
        <span>ON THIS PAGE</span>
        {sections.map((section, index) => <SectionLink key={section.id} to={section.id}><small>0{index + 1}</small>{section.label}</SectionLink>)}
      </nav>}
      {facts && <dl className="mk-page-hero-bottom mk-page-facts">
        {facts.map(fact => <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd><span className="mk-sr-only">{fact.value}{fact.suffix}</span><span aria-hidden="true">{fact.count ? <CountUp value={fact.value} /> : fact.value}{fact.suffix && <em>{fact.suffix}</em>}</span></dd>
        </div>)}
      </dl>}
    </div>
  </section>;
}
