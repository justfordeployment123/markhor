import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FaqSection from '../components/FaqSection';
import { spotlight, SectionLink } from '../components/effects';
import webArt from '../assets/hero/hero-web.webp';
import webArtSmall from '../assets/hero/hero-web-768.webp';
import mobileArt from '../assets/hero/hero-mobile.webp';
import mobileArtSmall from '../assets/hero/hero-mobile-768.webp';

const SERVICES = [
  {
    id: 'web',
    icon: 'code',
    label: 'Website development',
    detail: 'Websites · Web apps · E-commerce · SaaS',
    title: 'Websites and web apps,',
    accent: 'built to last.',
    description: 'From a fast, polished business website to a full SaaS platform or marketplace. Clean architecture, documented code, and tests where they matter — so your product keeps performing long after launch.',
    art: webArt,
    artSmall: webArtSmall,
    chips: [{ icon: 'check', title: 'SEO & performance', detail: 'Built in from day one' }, { icon: 'code', title: 'Your repositories', detail: 'Code you own outright' }],
    features: ['Business & marketing websites', 'Custom web apps & dashboards', 'E-commerce & multi-vendor marketplaces', 'SaaS platforms with subscriptions', 'A CMS your team can edit', 'AI chat, document analysis & search', 'Accessibility built in', 'Hosting, deployment & handover'],
    tech: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    proof: { value: '7+', label: 'Products brought to life' },
  },
  {
    id: 'mobile',
    icon: 'mobile',
    label: 'Mobile app development',
    detail: 'iOS · Android · React Native · Flutter',
    title: 'Mobile apps that feel native,',
    accent: 'wherever they run.',
    description: 'Native and cross-platform apps for iOS and Android. We handle design, build, App Store and Google Play submission, and the updates that keep your app running smoothly after launch.',
    art: mobileArt,
    artSmall: mobileArtSmall,
    chips: [{ icon: 'mobile', title: 'iOS + Android', detail: 'One shared codebase' }, { icon: 'cloud', title: 'Launch handled', detail: 'App Store & Google Play' }],
    features: ['Native iOS (Swift) & Android (Kotlin)', 'Cross-platform with React Native & Flutter', 'App Store & Google Play submission', 'Offline-first data & sync', 'Push notifications & real-time features', 'Payments, in-app purchases & biometrics', 'AI assistants, image & text recognition', 'Crash reporting, analytics & support'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    proof: { value: 'iOS + Android', label: 'From one shared codebase' },
  },
];

const PROCESS = [
  { icon: 'globe', title: 'Discover', meta: '1 week', description: 'We map your goals, users, and scope, then hand you a fixed-price proposal. Not convinced? Walk away with the work.' },
  { icon: 'design', title: 'Design', meta: 'Clickable prototype', description: 'Flows and screens designed in Figma and tested with real users before a line of production code.' },
  { icon: 'code', title: 'Build', meta: 'Weekly demos', description: 'Focused sprints in your repositories, with working software on a staging link every single week.' },
  { icon: 'cloud', title: 'Launch & support', meta: '30 days included', description: 'Deployment, store submission, a documented handover, and 30 days of post-launch fixes.' },
];

const PRICING = [
  {
    name: 'Discovery sprint',
    price: 'Fixed $5K',
    period: '1 week',
    description: 'A de-risking week: user interviews, a competitive teardown, and a feature priority map. Hate the output? Walk away with everything.',
    features: ['User interviews with 3–5 real candidates', 'Competitive teardown & landscape audit', 'Clickable feature priority map', 'Fixed-price build proposal', 'Walk-away clause — you keep the work'],
    cta: 'Book discovery',
  },
  {
    name: 'Production build',
    price: '$35K – $90K',
    period: '8–14 weeks',
    description: 'A full MVP build by a dedicated senior team. Fixed scope, fixed price, weekly demos, and code in your GitHub from day one.',
    features: ['Your engineers named upfront', 'Clickable Figma prototype & user testing', 'Weekly demos on a staging link', 'CI/CD, tests, analytics & store submission', '30 days of post-launch fixes, free', 'Handover docs & walkthrough video'],
    cta: 'Get a quote',
    featured: true,
  },
  {
    name: 'Embedded engineer',
    price: 'From $8K',
    period: 'Per engineer, per month',
    description: 'A senior Markhor engineer inside your team — on your standups, in your codebase, following your process.',
    features: ['Senior engineer matched to your stack', 'Works in your tools and rituals', 'Four-week minimum, then month-to-month', '30-day exit clause — no penalties', 'Full IP and code in your GitHub org'],
    cta: 'Talk to us',
  },
];

const COMMITMENTS = [
  { icon: 'shield', title: 'Your code, your IP — from day one', description: 'Every line of code, every asset, every credential is yours. IP assignment is signed before kickoff, not at some future milestone.', proof: 'IP assignment signed pre-kickoff' },
  { icon: 'handover', title: 'Walk away any time', description: 'No lock-ins and no minimum contracts. If something doesn’t click, you leave with clean code and documentation within 48 hours.', proof: 'Full handover within 48 hours' },
  { icon: 'doc', title: 'NDAs first, questions later', description: 'A mutual NDA before any discovery call. Your idea, your numbers, and your customers never leave the room.', proof: 'Mutual NDA on request' },
  { icon: 'clock', title: '30 days of post-launch fixes', description: 'Any bug you report in the 30 days after launch is fixed for free. Not billed hourly — actually free.', proof: 'Zero-cost post-launch fixes' },
  { icon: 'layers', title: 'Fixed scope, fixed price', description: 'The number on your proposal is the number on your invoice. If we mis-scope, we absorb the cost — not you.', proof: 'Scope creep absorbed by us' },
  { icon: 'play', title: 'Weekly demos, shared everything', description: 'Working software every week — not slides. Shared Slack, GitHub, and Figma, so it’s never a black box.', proof: 'Slack · GitHub · Figma access' },
];

const TECH = [
  { icon: 'code', name: 'Frontend', tech: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: 'mobile', name: 'Mobile', tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { icon: 'globe', name: 'Backend', tech: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL'] },
  { icon: 'ai', name: 'AI features', tech: ['OpenAI', 'LangChain', 'Vector search'] },
  { icon: 'cloud', name: 'Cloud', tech: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker'] },
  { icon: 'layers', name: 'Data', tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
];

const FAQS = [
  { q: 'How long does a typical build take?', a: 'Most MVPs take 8–14 weeks from kickoff to launch, and business websites are usually quicker. After the discovery week, you get a realistic timeline alongside the fixed price.' },
  { q: 'Why a fixed price instead of hourly billing?', a: 'Because you should know what you’re paying before you start. We scope carefully during discovery, and if we mis-scope, we absorb the difference — not you.' },
  { q: 'Do you build native or cross-platform apps?', a: 'Both. For most products, React Native or Flutter gives you iOS and Android from one shared codebase. When an app needs deep device features or peak performance, we build natively in Swift and Kotlin.' },
  { q: 'Can you work on an existing product?', a: 'Yes. We can work alongside your current team or pick up an existing codebase. We start by reviewing what’s there, then agree on a clear plan before changing anything.' },
  { q: 'What happens after launch?', a: 'Every build includes 30 days of post-launch bug fixes. After that, we can agree on ongoing support, or hand over full documentation so your team can take it from there.' },
];

const SECTIONS = [
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'process', label: 'How we work' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const serviceIndex = id => Math.max(0, SERVICES.findIndex(service => service.id === id));

// A code-drawn browser and phone, so the hero shows both services without reusing a photo.
function DeviceScene() {
  return <div className="mk-device-scene" aria-hidden="true">
    <div className="mk-device-glow" />
    <div className="mk-browser">
      <div className="mk-browser-bar"><i /><i /><i /><span /></div>
      <div className="mk-browser-body">
        <div className="mk-browser-side"><b /><i /><i /><i /><i /></div>
        <div className="mk-browser-main">
          <div className="mk-ui-chart">
            <span className="mk-ui-label" />
            <svg viewBox="0 0 240 80" preserveAspectRatio="none"><defs><linearGradient id="mk-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a28dec" stopOpacity=".45" /><stop offset="1" stopColor="#a28dec" stopOpacity="0" /></linearGradient></defs><path d="M0 62 C 30 58, 42 30, 70 38 S 118 66, 146 40 S 196 12, 240 18 L 240 80 L 0 80 Z" fill="url(#mk-chart-fill)" /><path className="mk-ui-line" pathLength="1" d="M0 62 C 30 58, 42 30, 70 38 S 118 66, 146 40 S 196 12, 240 18" fill="none" stroke="#c9bcf7" strokeWidth="2" /></svg>
          </div>
          <div className="mk-ui-tiles"><span /><span /><span /></div>
        </div>
      </div>
    </div>
    <div className="mk-phone">
      <div className="mk-phone-screen">
        <span className="mk-phone-notch" />
        <span className="mk-phone-orb" />
        <span className="mk-phone-row" /><span className="mk-phone-row" /><span className="mk-phone-row" />
        <span className="mk-phone-dots"><i /><i /><i /></span>
      </div>
    </div>
    <div className="mk-glass-chip mk-device-chip-1"><span><Icon name="check" size={16} /></span><div><strong>Fixed-price proposals</strong><small>Scoped before we start</small></div></div>
    <div className="mk-glass-chip mk-device-chip-2"><span><Icon name="play" size={15} /></span><div><strong>Weekly demos</strong><small>Working software, not slides</small></div></div>
  </div>;
}

function Check() {
  return <span className="mk-check" aria-hidden="true"><Icon name="check" size={12} /></span>;
}

export default function Services() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('service');
  const [active, setActive] = useState(() => serviceIndex(requested));
  const tabs = useRef([]);
  const service = SERVICES[active];

  // Header links deep-link a service with ?service=; follow them even when this page is already open.
  useEffect(() => { if (requested) setActive(serviceIndex(requested)); }, [requested, location.key]);

  const onTabKey = event => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const next = (active + (event.key === 'ArrowRight' ? 1 : SERVICES.length - 1)) % SERVICES.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return <div className="mk-home mk-page">
    <PageHero
      eyebrow="WEBSITE & MOBILE APP DEVELOPMENT"
      title="Websites and mobile apps."
      accent="Built properly."
      lead="Two services, done with care: custom websites and web apps, and native-feeling mobile apps for iOS and Android. Transparent pricing, a senior team, and code you own from day one."
      actions={<>
        <Link to="/contact" className="mk-button mk-button-light">Get a fixed-price quote <Icon name="diagonal" size={18} /></Link>
        <SectionLink to="pricing" className="mk-button mk-button-glass">See pricing <Icon name="arrow" size={17} /></SectionLink>
      </>}
      note="Fixed-scope proposals · 30 days of post-launch fixes · Code in your repositories"
      visual={<DeviceScene />}
      sections={SECTIONS}
    />

    <section className="mk-section mk-capabilities" id="capabilities">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="WHAT WE BUILD" title="Two services." accent="Done properly."><p className="mk-heading-description">We don’t spread thin. Pick a service to see exactly what’s covered — the deliverables, the stack, and the proof.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll>
          <div className="mk-cap-tabs" role="tablist" aria-label="Services">
            {SERVICES.map((item, index) => <button key={item.id} ref={node => { tabs.current[index] = node; }} role="tab" id={`tab-${item.id}`} aria-selected={active === index} aria-controls="capability-panel" tabIndex={active === index ? 0 : -1} className="mk-cap-tab" onClick={() => setActive(index)} onKeyDown={onTabKey}>
              <span className="mk-cap-tab-icon"><Icon name={item.icon} size={22} /></span>
              <span className="mk-cap-tab-text"><small>0{index + 1}</small><strong>{item.label}</strong><span>{item.detail}</span></span>
              <span className="mk-round-arrow"><Icon name="diagonal" size={16} /></span>
            </button>)}
          </div>
          <div className="mk-cap-panel" role="tabpanel" id="capability-panel" aria-labelledby={`tab-${service.id}`}>
            <div className="mk-cap-art" key={`art-${service.id}`}>
              <img src={service.art} srcSet={`${service.artSmall} 768w, ${service.art} 1536w`} sizes="(max-width: 900px) 100vw, 560px" alt="" width="1536" height="1024" decoding="async" />
              <div className="mk-cap-chips">{service.chips.map(chip => <div key={chip.title} className="mk-glass-chip"><span><Icon name={chip.icon} size={16} /></span><div><strong>{chip.title}</strong><small>{chip.detail}</small></div></div>)}</div>
            </div>
            <div className="mk-cap-body" key={`body-${service.id}`}>
              <span className="mk-eyebrow">{service.detail.toUpperCase()}</span>
              <h3>{service.title} <em>{service.accent}</em></h3>
              <p>{service.description}</p>
              <ul className="mk-cap-features">{service.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
              <ul className="mk-pills" aria-label="Typical technologies">{service.tech.map(tool => <li key={tool}>{tool}</li>)}</ul>
              <div className="mk-cap-foot">
                <div className="mk-cap-proof"><strong>{service.proof.value}</strong><span>{service.proof.label}</span></div>
                <Link to="/contact" className="mk-button mk-button-primary">Discuss your project <Icon name="diagonal" size={17} /></Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section className="mk-band mk-panel mk-process" id="process">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="HOW A BUILD RUNS" title="Clear phases." accent="No black boxes."><p className="mk-heading-description">Every engagement follows the same rhythm, so you always know what’s happening, what’s next, and what it costs.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll className="mk-process-track"><ol className="mk-process-grid">{PROCESS.map((step, index) => <li key={step.title} className="mk-process-step" style={{ '--i': index }}>
          <span className="mk-process-node">0{index + 1}</span>
          <h3><Icon name={step.icon} size={20} />{step.title}</h3>
          <p>{step.description}</p>
          <span className="mk-process-meta"><Icon name="clock" size={13} />{step.meta}</span>
        </li>)}</ol></RevealOnScroll>
      </div>
    </section>

    <section className="mk-section mk-pricing" id="pricing">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="WAYS TO WORK TOGETHER" title="Transparent pricing." accent="No chasing for a quote."><p className="mk-heading-description">Real ranges up front, a fixed price once we’ve scoped your project, and a walk-away clause on discovery.</p></SectionHeading></RevealOnScroll>
        <div className="mk-pricing-grid">{PRICING.map((tier, index) => <RevealOnScroll key={tier.name} delay={index * 90}>
          <article className={`mk-price-card ${tier.featured ? 'is-featured' : 'mk-spot'}`} onPointerMove={tier.featured ? undefined : spotlight}>
            {tier.featured && <span className="mk-price-badge">MOST COMMON</span>}
            <h3 className="mk-price-name">{tier.name}</h3>
            <div className="mk-price-value">{tier.price}</div>
            <span className="mk-price-period">{tier.period}</span>
            <p>{tier.description}</p>
            <ul className="mk-price-list">{tier.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
            <Link to="/contact" className={`mk-button ${tier.featured ? 'mk-button-light' : 'mk-button-outline'}`}>{tier.cta} <Icon name="diagonal" size={17} /></Link>
          </article>
        </RevealOnScroll>)}</div>
        <RevealOnScroll><div className="mk-services-note"><span className="mk-services-note-icon"><Icon name="chat" size={20} /></span><p><strong>Not sure which fits?</strong> Book a 30-minute call and we’ll tell you honestly which track is right — even if it’s none of them.</p><Link to="/contact" className="mk-text-link">Book a call <Icon name="diagonal" size={17} /></Link></div></RevealOnScroll>
      </div>
    </section>

    <section className="mk-dark-panel mk-panel mk-commitments">
      <div className="mk-dark-glow" aria-hidden="true" />
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="HOW WE PROTECT YOU" title="Six commitments." accent="In writing."><p className="mk-heading-description">The reasons most agency engagements go wrong — and the promises we make so they don’t happen here.</p></SectionHeading></RevealOnScroll>
        <div className="mk-commit-grid">{COMMITMENTS.map((item, index) => <RevealOnScroll key={item.title} delay={(index % 3) * 80}>
          <article className="mk-commit-card">
            <span className="mk-commit-icon"><Icon name={item.icon} size={22} /></span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="mk-commit-proof"><Icon name="check" size={13} />{item.proof}</span>
          </article>
        </RevealOnScroll>)}</div>
      </div>
    </section>

    <section className="mk-section mk-stack">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="THE RIGHT TOOLS FOR THE JOB" title="Proven technology." accent="Boringly reliable."><p className="mk-heading-description">We choose tools because they ship products, not because they’re trending. A stack your future team will be happy to inherit.</p></SectionHeading></RevealOnScroll>
        <div className="mk-tech-grid mk-tech-grid-3">{TECH.map((item, index) => <RevealOnScroll key={item.name} delay={(index % 3) * 70}><div className="mk-tech-card mk-spot" onPointerMove={spotlight}><span className="mk-tech-icon"><Icon name={item.icon} size={24} /></span><h3>{item.name}</h3><ul>{item.tech.map(tool => <li key={tool}>{tool}</li>)}</ul></div></RevealOnScroll>)}</div>
      </div>
    </section>

    <div className="mk-rule mk-wrap" aria-hidden="true" />
    <FaqSection eyebrow="GOOD QUESTIONS" title="Before you" accent="get a quote." lead="The things founders usually ask us on the first call. Have another? Just ask." items={FAQS} />
  </div>;
}
