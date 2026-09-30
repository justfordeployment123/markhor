import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BrandMark } from '../components/Brand';
import { spotlight } from '../components/effects';
import teamImage from '../assets/hero/hero-pakistani-collaboration.webp';
import teamImageSmall from '../assets/hero/hero-pakistani-collaboration-768.webp';

const FACTS = [
  { value: 7, suffix: '+', label: 'Products brought to life', count: true },
  { value: 2023, label: 'The year our climb began' },
  { value: 'UK · UAE', label: 'Where our clients build' },
  { value: 100, suffix: '%', label: 'Your code, your ownership', count: true },
];

const PRINCIPLES = [
  { tag: 'The approach', title: 'Clarity over hype', description: 'Plain-English proposals, honest timelines, and straight answers. If we’re not the right fit for your project, we’ll say so — and point you somewhere better.', proof: 'Honest referrals when we’re not the fit' },
  { tag: 'The agreement', title: 'Your code, your IP — from commit one', description: 'Every repository lives in your GitHub organisation, every credential in your vault, every design file in your Figma. You own it all from day one, not day 180.', proof: 'IP assignment signed before kickoff' },
  { tag: 'The pace', title: 'Something to see every week', description: 'Working software on a staging link every week — not slides or status reports. If you ever have to ask what shipped this week, something has already gone wrong.', proof: 'Weekly demos on staging' },
  { tag: 'The safety net', title: 'Walk away clean, any time', description: 'Month-to-month for retainers, sprint-boundary exits for projects. You get clean code and full documentation within 48 hours — no penalties, no drama.', proof: 'Full handover within 48 hours' },
];

const MARK_TRAITS = [
  { label: 'Strength', text: 'Architecture that holds up under real users, real data, and real growth.' },
  { label: 'Precision', text: 'Structured system design and careful engineering, right down to the details.' },
  { label: 'Balance', text: 'Thoughtful UI/UX that keeps powerful products simple to use.' },
];

const ZONES = [
  { city: 'London', zone: 'Europe/London', overlap: 'Full workday', detail: '9:00 – 17:00 GMT aligns with our core hours.' },
  { city: 'Dubai', zone: 'Asia/Dubai', overlap: 'Same day', detail: 'Just an hour apart — practically the same working day.' },
  { city: 'Berlin', zone: 'Europe/Berlin', overlap: 'Full workday', detail: 'Our afternoon is your morning, end to end.' },
  { city: 'New York', zone: 'America/New_York', overlap: 'Overnight handoff', detail: 'Send a bug at 6 pm, wake up to a fix and a walkthrough.' },
];

const MILESTONES = [
  { year: '2023', title: 'One engineer, one clear idea', description: 'Markhor Systems launches in Pakistan — a focused studio shipping real products for founders, not wireframes and retainers.', tag: 'The climb begins' },
  { year: '2023', title: 'First international client', description: 'Remax Hub goes live: a full property platform for the UAE’s RE/MAX network, built end-to-end and handed over with complete documentation.', tag: 'UAE · Live' },
  { year: '2024', title: 'First AI-powered web app', description: 'ExplainMyLetter ships: an AI pipeline that reads UK official letters and explains them in plain English, with Stripe payments from launch day.', tag: 'UK · Live' },
  { year: 'Today', title: '7+ products brought to life', description: 'From AI SaaS to e-commerce, education, and accessibility — every product still live and still used by real customers.', tag: 'And counting' },
];

const NEXT = [
  { icon: 'code', title: 'Explore our services', description: 'Websites, web apps, and mobile apps — what we build, how we build it, and what it costs.', to: '/services', tag: 'SERVICES' },
  { icon: 'team', title: 'Meet the team', description: 'The engineer who scopes your project is the one who builds it. Meet them before you sign.', to: '/team', tag: 'TEAM' },
  { icon: 'chat', title: 'Read client stories', description: 'Founders in the UK and UAE on what it’s actually like to build with Markhor.', to: '/reviews', tag: 'CLIENT STORIES' },
];

const clockFormat = zone => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: zone });

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

function TimezoneBoard() {
  const now = useNow();
  return <div className="mk-clock-board">
    <div className="mk-clock-home">
      <span className="mk-clock-live"><span />Live</span>
      <small>Pakistan · PKT (GMT+5)</small>
      <strong><time>{clockFormat('Asia/Karachi').format(now)}</time></strong>
      <span className="mk-clock-note">Where your product is being built right now</span>
    </div>
    <ul className="mk-clock-list">{ZONES.map(zone => <li key={zone.city}>
      <div><strong>{zone.city}</strong><small>{zone.detail}</small></div>
      <div className="mk-clock-side"><time>{clockFormat(zone.zone).format(now)}</time><span>{zone.overlap}</span></div>
    </li>)}</ul>
  </div>;
}

function HeroPhoto() {
  return <div className="mk-framed-photo">
    <div className="mk-framed-photo-frame">
      <img src={teamImage} srcSet={`${teamImageSmall} 768w, ${teamImage} 1536w`} sizes="(max-width: 900px) 92vw, 560px" width="1536" height="1024" alt="The Markhor Systems team reviewing a product plan together" fetchPriority="high" decoding="async" />
    </div>
    <div className="mk-glass-chip mk-framed-chip-1" aria-hidden="true"><span><BrandMark className="mk-chip-mark" variant="mono" /></span><div><strong>Est. 2023</strong><small>Built in Pakistan</small></div></div>
    <div className="mk-glass-chip mk-framed-chip-2" aria-hidden="true"><span><Icon name="globe" size={16} /></span><div><strong>Working globally</strong><small>UK · UAE · and beyond</small></div></div>
  </div>;
}

export default function About() {
  return <div className="mk-home mk-page">
    <PageHero
      eyebrow="ABOUT MARKHOR SYSTEMS"
      title="Named after a mountain goat."
      accent="Built to climb."
      lead="Markhor Systems is a website and mobile app development studio from Pakistan. Since 2023, we’ve helped founders and businesses in the UK, UAE, and beyond turn ambitious ideas into reliable products — quietly, carefully, and without the agency theatre."
      actions={<>
        <Link to="/contact" className="mk-button mk-button-light">Start a conversation <Icon name="diagonal" size={18} /></Link>
        <Link to="/team" className="mk-button mk-button-glass">Meet the team <Icon name="arrow" size={17} /></Link>
      </>}
      visual={<HeroPhoto />}
      facts={FACTS}
    />

    <section className="mk-band mk-panel mk-story">
      <BrandMark className="mk-intro-mark" variant="mono" />
      <div className="mk-wrap mk-story-grid">
        <RevealOnScroll className="mk-story-head">
          <SectionHeading eyebrow="OUR STORY" title="Climbing where" accent="others can’t." />
          <aside className="mk-story-card">
            <span className="mk-story-card-mark"><BrandMark variant="dark" /></span>
            <div><small>WHY “MARKHOR”?</small><strong>Pakistan’s national animal</strong><p>A wild mountain goat that thrives on terrain most would never attempt.</p></div>
          </aside>
        </RevealOnScroll>
        <RevealOnScroll className="mk-story-body" delay={100}>
          <p className="mk-story-lead">The markhor climbs where others can’t. It’s an on-the-nose metaphor for the work we take on: the technical climbs growing businesses can’t always staff for, handled by a studio small enough to care who the client is.</p>
          <p>Markhor Systems began in 2023 with a simple idea — build digital products the way you’d want your own built. Clear plans, honest timelines, clean code, and the same people from the first call to launch day.</p>
          <p>Today, more than seven products are live across AI, real estate, education, retail, and accessibility, for clients in the UK, the UAE, and beyond. We’ve grown carefully, turned down work that wasn’t a fit, and kept the principles we started with.</p>
          <blockquote className="mk-story-quote">“Clarity, trust, and performance. Not hype or gimmicks.”</blockquote>
        </RevealOnScroll>
      </div>
    </section>

    <section className="mk-section mk-principles">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="WHAT WE STAND FOR" title="Principles we" accent="actually work by."><p className="mk-heading-description">Not values on a wall — commitments that shape every proposal, sprint, and handover.</p></SectionHeading></RevealOnScroll>
        <div className="mk-principle-grid">{PRINCIPLES.map((item, index) => <RevealOnScroll key={item.title} delay={(index % 2) * 90}>
          <article className="mk-principle mk-spot" onPointerMove={spotlight}>
            <div className="mk-principle-top"><span className="mk-card-number">0{index + 1}</span><span className="mk-principle-tag">{item.tag}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="mk-principle-proof"><Icon name="check" size={13} />{item.proof}</span>
          </article>
        </RevealOnScroll>)}</div>
      </div>
    </section>

    <section className="mk-dark-panel mk-panel mk-mark-section">
      <div className="mk-dark-glow" aria-hidden="true" />
      <div className="mk-wrap mk-mark-grid">
        <RevealOnScroll className="mk-blueprint">
          <div className="mk-blueprint-canvas" aria-hidden="true">
            <span className="mk-blueprint-circle" /><span className="mk-blueprint-circle mk-blueprint-circle-2" />
            <BrandMark className="mk-blueprint-mark" variant="dark" />
            <span className="mk-blueprint-tag mk-blueprint-tag-1">Symmetry · 1:1</span>
            <span className="mk-blueprint-tag mk-blueprint-tag-2">Three forms</span>
            <span className="mk-blueprint-tag mk-blueprint-tag-3">#432DD7 → #A28DEC</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="mk-mark-copy" delay={100}>
          <span className="mk-eyebrow">THE MARK</span>
          <h2>Engineered,<br /><em>not decorated.</em></h2>
          <p>Our mark is an abstract interpretation of the markhor’s horns, drawn with precise geometry and symmetry. It stands for the three qualities every product we build should have.</p>
          <dl className="mk-mark-traits">{MARK_TRAITS.map((trait, index) => <div key={trait.label}><dt><span>0{index + 1}</span>{trait.label}</dt><dd>{trait.text}</dd></div>)}</dl>
        </RevealOnScroll>
      </div>
    </section>

    <section className="mk-section mk-timezones">
      <div className="mk-wrap mk-timezone-grid">
        <RevealOnScroll className="mk-timezone-copy">
          <SectionHeading eyebrow="WHY PAKISTAN" title="A timezone that" accent="works overnight." />
          <p>Timezone can be an asset. Send a bug at 6 pm in New York and wake up to a merged fix, a staging link, and a walkthrough video. Share a full workday with London and Dubai.</p>
          <p>By the time you open your inbox, the thing you asked for yesterday is often already done.</p>
          <div className="mk-intro-points">{['Shared Slack & GitHub', 'Weekly demos', 'Your communication rhythm'].map(point => <span key={point}><Icon name="check" size={14} />{point}</span>)}</div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}><TimezoneBoard /></RevealOnScroll>
      </div>
    </section>

    <section className="mk-band mk-panel mk-journey">
      <div className="mk-wrap mk-journey-grid">
        <RevealOnScroll className="mk-journey-intro">
          <SectionHeading eyebrow="OUR JOURNEY" title="Since 2023." accent="Quietly compounding." />
          <p>No rebrands and no shortcuts. Just a steady climb — one client, one product, one milestone at a time.</p>
          <Link to="/#work" className="mk-button mk-button-outline">See our work <Icon name="diagonal" size={17} /></Link>
        </RevealOnScroll>
        <div className="mk-journey-list">{MILESTONES.map((item, index) => <RevealOnScroll key={item.title} delay={index * 60}>
          <article className="mk-journey-item">
            <span className="mk-journey-node" aria-hidden="true" />
            <span className="mk-journey-year">{item.year}</span>
            <div className="mk-journey-card"><h3>{item.title}</h3><p>{item.description}</p><span className="mk-journey-tag"><span className="mk-status-dot" />{item.tag}</span></div>
          </article>
        </RevealOnScroll>)}</div>
      </div>
    </section>

    <section className="mk-section mk-next">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="KEEP EXPLORING" title="Get to know us" accent="a little better." /></RevealOnScroll>
        <div className="mk-services-grid">{NEXT.map((item, index) => <RevealOnScroll key={item.title} delay={index * 70}><Link to={item.to} className="mk-service-card mk-spot mk-next-card" onPointerMove={spotlight}><div className="mk-service-top"><span className="mk-service-icon"><Icon name={item.icon} size={26} /></span><span className="mk-card-number">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="mk-service-bottom"><span>{item.tag}</span><span className="mk-round-arrow"><Icon name="diagonal" size={17} /></span></div></Link></RevealOnScroll>)}</div>
      </div>
    </section>
  </div>;
}
