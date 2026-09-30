import React from 'react';
import Icon from './Icon';

const CLIENT_LOGOS = [
  <span key="remax" className="mk-client-remax">RE/MAX <small>HUB</small></span>,
  <span key="enhancia" className="mk-client-enhancia">enhancia<span>ai</span></span>,
  <span key="letter" className="mk-client-letter"><Icon name="mail" size={25} />ExplainMyLetter</span>,
  <span key="memora" className="mk-client-memora">memora<span>✦</span></span>,
  <span key="stilo" className="mk-client-stilo">stilo.</span>,
];

export default function ClientStrip({ label = 'THE IDEAS WE’VE HELPED BRING TO LIFE' }) {
  return <section className="mk-clients" aria-label="Selected projects">
    <div className="mk-wrap"><span className="mk-eyebrow">{label}</span><div className="mk-marquee"><div className="mk-marquee-track">{[0, 1].map(copy => <div key={copy} className="mk-marquee-set mk-client-logos" aria-hidden={copy ? true : undefined}>{CLIENT_LOGOS}</div>)}</div></div></div>
  </section>;
}
