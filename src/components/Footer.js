import React from 'react';
import { useLocation } from 'react-router-dom';
import PrefetchLink from './PrefetchLink';
import Brand, { BrandLogo } from './Brand';
import Icon from './Icon';

export default function Footer() {
  const onContact = useLocation().pathname === '/contact';
  return <footer className="mk-footer">
    <div className="mk-wrap">
      {!onContact && <div className="mk-footer-top">
        <div><span className="mk-eyebrow">YOUR NEXT CHAPTER</span><h2>Great ideas deserve<br /><em>a great engineering partner.</em></h2><p>Tell us what you’re building. A founding engineer replies within 24 hours.</p></div>
        <div className="mk-footer-actions"><PrefetchLink to="/contact" className="mk-button mk-button-light">Let’s build something <Icon name="diagonal" size={18} /></PrefetchLink><a href="mailto:hello@markhorsystems.com" className="mk-button mk-button-glass">hello@markhorsystems.com</a></div>
      </div>}
      <div className="mk-footer-grid">
        <div className="mk-footer-brand"><Brand /><p><strong>Intelligent Systems. Built to Scale.</strong><br />Website and mobile app development<br />for reliable, high-performance products.</p><a href="mailto:hello@markhorsystems.com">hello@markhorsystems.com <Icon name="diagonal" size={14} /></a></div>
        <div><h3>Services</h3><PrefetchLink to="/services?service=web#capabilities">Website development</PrefetchLink><PrefetchLink to="/services?service=mobile#capabilities">Mobile app development</PrefetchLink><PrefetchLink to="/services#pricing">Ways to work together</PrefetchLink></div>
        <div><h3>Explore</h3><PrefetchLink to="/#work">Our work</PrefetchLink><PrefetchLink to="/reviews">Client stories</PrefetchLink><PrefetchLink to="/about">About us</PrefetchLink><PrefetchLink to="/team">Our team</PrefetchLink></div>
        <div><h3>Connect</h3><PrefetchLink to="/contact">Start a project</PrefetchLink><PrefetchLink to="/team#hiring">Careers <Icon name="diagonal" size={12} /></PrefetchLink><a href="mailto:hello@markhorsystems.com">Email us</a><span className="mk-footer-location"><Icon name="globe" size={16} /> Pakistan · Working globally</span></div>
      </div>
      <BrandLogo className="mk-footer-wordmark" variant="mono" title="" />
      <div className="mk-footer-bottom"><span>© {new Date().getFullYear()} Markhor Systems. All rights reserved.</span><span>Built in Pakistan. Made for the world.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <Icon name="diagonal" size={14} /></button></div>
    </div>
  </footer>;
}
