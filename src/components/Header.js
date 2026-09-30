import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PrefetchLink from './PrefetchLink';
import Brand from './Brand';
import Icon from './Icon';

const menus = {
  Services: [
    { name: 'Website development', detail: 'Websites, web apps, and e-commerce', to: '/services?service=web#capabilities', icon: 'code' },
    { name: 'Mobile app development', detail: 'iOS and Android apps for every device', to: '/services?service=mobile#capabilities', icon: 'mobile' },
    { name: 'Pricing & engagement', detail: 'Fixed-price builds and ongoing support', to: '/services#pricing', icon: 'check' },
  ],
  Company: [
    { name: 'About Markhor', detail: 'Our story and what we stand for', to: '/about', icon: 'globe' },
    { name: 'Our team', detail: 'Meet the people behind the work', to: '/team', icon: 'team' },
    { name: 'Careers', detail: 'Build your next chapter with us', to: '/team#hiring', icon: 'diagonal' },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const header = useRef(null);
  const toggleButton = useRef(null);
  useEffect(() => { setMobileOpen(false); setMenu(null); }, [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenu(null);
        if (mobileOpen) { setMobileOpen(false); toggleButton.current?.focus(); }
      }
    };
    const onOutside = (event) => { if (!header.current?.contains(event.target)) setMenu(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onOutside); };
  }, [mobileOpen]);

  return <header ref={header} className={`mk-header ${scrolled || mobileOpen ? 'mk-header-solid' : ''}`}>
    <div className="mk-wrap mk-header-inner">
      <Brand />
      <button ref={toggleButton} className="mk-menu-toggle" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={() => setMobileOpen(!mobileOpen)}><Icon name={mobileOpen ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" className={`mk-nav ${mobileOpen ? 'mk-nav-open' : ''}`} aria-label="Main navigation">
        {['Services', 'Our work', 'Company', 'Client stories'].map(label => menus[label] ? (
          <div key={label} className="mk-nav-group" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMenu(null); }}>
            <button className={`mk-nav-link ${menu === label ? 'is-active' : ''}`} aria-expanded={menu === label} aria-controls={`menu-${label}`} onClick={() => setMenu(menu === label ? null : label)}>{label}<Icon name="chevron" size={13} /></button>
            {menu === label && <div className="mk-dropdown" id={`menu-${label}`}>
              <span className="mk-dropdown-label">{label === 'Services' ? 'Websites & mobile apps' : 'Get to know Markhor'}</span>
              {menus[label].map(item => <PrefetchLink key={item.name} to={item.to} className="mk-dropdown-link"><span className="mk-dropdown-icon"><Icon name={item.icon} /></span><span><strong>{item.name}</strong><small>{item.detail}</small></span><Icon name="diagonal" size={15} /></PrefetchLink>)}
              {label === 'Services' && <PrefetchLink to="/services" className="mk-dropdown-all">Explore all services <Icon size={16} /></PrefetchLink>}
            </div>}
          </div>
        ) : <PrefetchLink key={label} to={label === 'Our work' ? '/#work' : '/reviews'} className="mk-nav-link">{label}</PrefetchLink>)}
        <PrefetchLink to="/contact" className="mk-button mk-button-light mk-nav-cta">Get a quote <Icon name="diagonal" size={16} /></PrefetchLink>
      </nav>
    </div>
  </header>;
}
