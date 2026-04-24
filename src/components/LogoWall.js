import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const DEFAULT_LOGOS = [
  { name: 'TechStart',   type: 'serif' },
  { name: 'NovaPay',     type: 'bold' },
  { name: 'Clearpath',   type: 'thin' },
  { name: 'Shopkart',    type: 'bold' },
  { name: 'DataFlow',    type: 'serif' },
  { name: 'EcoMarket',   type: 'thin' },
  { name: 'Analytics Pro', type: 'bold' },
  { name: 'CloudSync',   type: 'serif' },
];

const LogoWall = ({ logos = DEFAULT_LOGOS }) => {
  return (
    <section className="logo-wall">
      <div className="container">
        <RevealOnScroll animation="fadeUp">
          <div className="logo-wall-head">
            <span className="logo-wall-line" aria-hidden="true" />
            <span className="logo-wall-eyebrow">Trusted by founders at</span>
            <span className="logo-wall-line" aria-hidden="true" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={80}>
          <div className="logo-wall-grid">
            {logos.map((l, i) => (
              <div key={i} className={`logo-wall-item logo-wall-item-${l.type}`}>
                {/* Replace with <img src={...} alt={l.name} /> later */}
                <span className="logo-wall-placeholder">{l.name}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeUp" delay={160}>
          <div className="logo-wall-note">
            <span className="logo-wall-note-dot" />
            <span>
              Plus 40+ more across mobile, web and AI —
              <strong> ask for a reference</strong> in any vertical.
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default LogoWall;
