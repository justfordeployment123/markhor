import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import Icon from './Icon';

export default function FaqSection({ id = 'faq', eyebrow, title, accent, lead, items, showAction = true }) {
  const [open, setOpen] = useState(0);
  return <section className="mk-faq mk-section" id={id}><div className="mk-wrap mk-faq-grid">
    <RevealOnScroll className="mk-faq-intro">
      <span className="mk-eyebrow">{eyebrow}</span>
      <h2>{title}<br /><em>{accent}</em></h2>
      <p>{lead}</p>
      <div className="mk-faq-contact"><span className="mk-faq-contact-icon"><Icon name="mail" size={20} /></span><div><strong>Prefer to write?</strong><a href="mailto:hello@markhorsystems.com">hello@markhorsystems.com</a><small>A founding engineer replies within 24 hours.</small></div></div>
      {showAction && <Link to="/contact" className="mk-button mk-button-primary">Ask us anything <Icon name="diagonal" size={17} /></Link>}
    </RevealOnScroll>
    <div className="mk-faq-list">{items.map((faq, index) => <div key={faq.q} className={`mk-faq-item ${open === index ? 'is-open' : ''}`}>
      <h3><button aria-expanded={open === index} aria-controls={`${id}-answer-${index}`} id={`${id}-question-${index}`} onClick={() => setOpen(open === index ? -1 : index)}><span className="mk-faq-num">0{index + 1}</span><span className="mk-faq-q">{faq.q}</span><span className="mk-faq-icon" aria-hidden="true" /></button></h3>
      <div id={`${id}-answer-${index}`} role="region" aria-labelledby={`${id}-question-${index}`} className="mk-faq-answer"><div><p>{faq.a}</p></div></div>
    </div>)}</div>
  </div></section>;
}
