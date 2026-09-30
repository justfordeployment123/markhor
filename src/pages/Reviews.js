import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ClientStrip from '../components/ClientStrip';
import { spotlight } from '../components/effects';
import { projects } from '../data/projects';

const STORIES = [
  {
    project: 'ExplainMyLetter',
    mark: 'EML',
    quote: 'The brief was complex — an AI that reads UK official letters (pension notices, court summons, NHS letters) and explains them in plain English, gated behind Stripe. Markhor delivered exactly that. The pipeline handles edge cases we didn’t anticipate, and the Stripe integration went live without a single support ticket on launch day.',
    excerpt: 'The pipeline handles edge cases we didn’t anticipate.',
    author: 'James Hargreaves',
    role: 'Founder · ExplainMyLetter',
    category: 'AI · WEB APPLICATION',
    sector: 'ai',
    metric: { value: '< 3s', label: 'Average letter analysis' },
  },
  {
    project: 'Remax Hub',
    mark: 'RMX',
    quote: 'We needed a property platform that could handle the UAE’s RE/MAX agent network — listings, lead capture, CMS, agent profiles, the lot. Markhor built it end-to-end and handed over a codebase our in-house team can actually maintain. The admin CMS alone saved us thousands in ongoing vendor costs.',
    author: 'Khalid Al-Rashid',
    role: 'Head of Digital · Remax Hub UAE',
    category: 'REAL ESTATE · WEB PLATFORM',
    sector: 'web',
    metric: { value: '100+', label: 'Agents onboarded at launch' },
  },
  {
    project: 'Enhancia.ai',
    mark: 'ENH',
    quote: 'We had the idea — AI staging for property photos — but no idea how to build a job queue that handles bulk image processing, marketing video generation, and floor plan parsing at the same time. Markhor figured it out. The SaaS launched on time and the pipeline hasn’t gone down since.',
    excerpt: 'The SaaS launched on time and the pipeline hasn’t gone down since.',
    author: 'Sofia Brennan',
    role: 'Co-Founder · Enhancia.ai',
    category: 'SAAS · GENERATIVE AI',
    sector: 'ai',
    metric: { value: '98%', label: 'Job queue uptime' },
  },
  {
    project: 'Stilo E-Commerce',
    mark: 'STL',
    quote: 'Multi-vendor with role-based auth, real-time chat, order tracking, and Stripe payments. We’d been quoted 12 months by two agencies. Markhor shipped a working platform in under five months. The code is clean, the dashboards are intuitive, and sellers onboarded without a single support call.',
    author: 'Nadia Farooq',
    role: 'Founder · Stilo E-Commerce',
    category: 'RETAIL · MARKETPLACE',
    sector: 'commerce',
    metric: { value: '5 months', label: 'Brief to go-live' },
  },
  {
    project: 'Memora Study',
    mark: 'MEM',
    quote: 'Turning lecture PDFs into flashcards, MCQs, and mind maps with Arabic support — I couldn’t find anyone willing to tackle Arabic NLP alongside everything else. Markhor treated it like any other requirement, shipped a working model, and the Arabic support actually works.',
    excerpt: 'Markhor treated it like any other requirement — and the Arabic support actually works.',
    author: 'Tariq Al-Mansouri',
    role: 'Founder · Memora Study',
    category: 'EDTECH · AI',
    sector: 'ai',
    metric: { value: '4 languages', label: 'Supported at launch' },
  },
].map(story => ({ ...story, site: projects.find(project => project.name === story.project) }));

const FEATURED = STORIES[0];
const FILTERS = [
  { id: 'all', label: 'All stories' },
  { id: 'ai', label: 'AI-powered' },
  { id: 'web', label: 'Web platforms' },
  { id: 'commerce', label: 'E-commerce' },
];
const FACTS = [
  { value: '5/5', label: 'Rating on every story' },
  { value: STORIES.length, label: 'Founders & teams featured', count: true },
  { value: 'UK · UAE', label: 'Where they’re building' },
  { value: 7, suffix: '+', label: 'Products brought to life', count: true },
];
const INTRO_STEPS = [
  { title: 'Scope your project', text: 'A 30-minute call to understand what you’re building and why.' },
  { title: 'We make the introduction', text: 'One or two past clients at a similar stage or in a similar space.' },
  { title: 'Ask them anything', text: 'Including the hard questions. We won’t be on the call.' },
];

const initials = name => name.split(' ').map(part => part[0]).join('');

function Stars({ label = true }) {
  return <span className="mk-stars" role={label ? 'img' : undefined} aria-label={label ? 'Rated 5 out of 5' : undefined} aria-hidden={label ? undefined : true}>★★★★★</span>;
}

function QuoteStack() {
  return <div className="mk-quote-stack" aria-hidden="true">
    {STORIES.filter(story => story.excerpt).map((story, index) => <figure key={story.author} className={`mk-stack-card mk-stack-card-${index + 1}`}>
      <Stars label={false} />
      <p>“{story.excerpt}”</p>
      <figcaption><span className="mk-avatar">{initials(story.author)}</span><span><strong>{story.author}</strong><small>{story.project}</small></span></figcaption>
    </figure>)}
  </div>;
}

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const rest = STORIES.filter(story => story !== FEATURED);
  const visible = filter === 'all' ? rest : rest.filter(story => story.sector === filter);

  return <div className="mk-home mk-page">
    <PageHero
      eyebrow="CLIENT STORIES"
      title="What founders say"
      accent="when we’re not in the room."
      lead="We asked clients what they’d tell a first-time founder about working with Markhor. These are their words — with the specific moments and metrics that earned them."
      actions={<>
        <Link to="/contact" className="mk-button mk-button-light">Start your project <Icon name="diagonal" size={18} /></Link>
        <Link to="/#work" className="mk-button mk-button-glass">See the work <Icon name="arrow" size={17} /></Link>
      </>}
      visual={<QuoteStack />}
      facts={FACTS}
    />

    <section className="mk-section mk-featured-story">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="FEATURED STORY" title="A complex brief." accent="Delivered exactly."><p className="mk-heading-description">An AI that explains UK official letters in plain English — and a launch day without a single support ticket.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll>
          <figure className="mk-feature-story">
            <a className="mk-feature-media" href={FEATURED.site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${FEATURED.project} (opens in a new tab)`}>
              <img src={FEATURED.site.image} srcSet={`${FEATURED.site.imageSmall} 640w, ${FEATURED.site.image} 1280w`} sizes="(max-width: 900px) 100vw, 600px" width="1280" height="800" alt="" loading="lazy" decoding="async" />
              <span className="mk-visual-label">{FEATURED.project}</span>
              <span className="mk-visual-visit">Visit live site <Icon name="diagonal" size={13} /></span>
            </a>
            <div className="mk-feature-quote">
              <div className="mk-quote-top"><span className="mk-quote-mark" aria-hidden="true">“</span><Stars /></div>
              <span className="mk-eyebrow">{FEATURED.category}</span>
              <blockquote>{FEATURED.quote}</blockquote>
              <figcaption className="mk-feature-foot">
                <span className="mk-quote-person"><span className="mk-avatar">{initials(FEATURED.author)}</span><span><strong>{FEATURED.author}</strong><small>{FEATURED.role}</small></span></span>
                <span className="mk-feature-metric"><strong>{FEATURED.metric.value}</strong><small>{FEATURED.metric.label}</small></span>
              </figcaption>
            </div>
          </figure>
        </RevealOnScroll>
      </div>
    </section>

    <section className="mk-band mk-panel mk-stories" id="stories">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="MORE CLIENT STORIES" title="Different industries." accent="The same ending."><p className="mk-heading-description">Shipped on time, handed over properly, and still live today.</p></SectionHeading></RevealOnScroll>
        <div className="mk-work-filters">
          <div className="mk-work-tabs" role="group" aria-label="Filter client stories">{FILTERS.map(item => <button key={item.id} onClick={() => setFilter(item.id)} className={filter === item.id ? 'is-active' : ''} aria-pressed={filter === item.id}>{item.label}</button>)}</div>
          <span>{String(visible.length).padStart(2, '0')} {visible.length === 1 ? 'STORY' : 'STORIES'}</span>
        </div>
        <div className="mk-story-grid-cards" aria-live="polite">{visible.map(story => <figure key={story.author} className="mk-review-card mk-spot" onPointerMove={spotlight}>
          <div className="mk-review-top"><span className="mk-review-mark">{story.mark}</span><span className="mk-review-category">{story.category}</span><Stars /></div>
          <blockquote>{story.quote}</blockquote>
          <div className="mk-review-metric"><strong>{story.metric.value}</strong><span>{story.metric.label}</span></div>
          <figcaption className="mk-review-foot">
            <span className="mk-avatar">{initials(story.author)}</span>
            <span><strong>{story.author}</strong><small>{story.role}</small></span>
            {story.site && <a href={story.site.url} target="_blank" rel="noopener noreferrer" className="mk-round-arrow" aria-label={`Visit ${story.project} (opens in a new tab)`}><Icon name="diagonal" size={16} /></a>}
          </figcaption>
        </figure>)}</div>
      </div>
    </section>

    <section className="mk-impact mk-intro-offer">
      <div className="mk-impact-grid" aria-hidden="true" />
      <div className="mk-wrap mk-offer-grid">
        <RevealOnScroll className="mk-offer-copy">
          <div className="mk-impact-heading"><div><span className="mk-eyebrow">WANT A SECOND OPINION?</span><h2>Talk to a past client.<br /><em>Before you sign anything.</em></h2></div></div>
          <p>Once we’ve scoped your project, we’ll introduce you to one or two past clients at a similar stage or in a similar industry. Ask them anything.</p>
          <Link to="/contact" className="mk-button mk-button-light">Book a scoping call <Icon name="diagonal" size={18} /></Link>
        </RevealOnScroll>
        <div className="mk-offer-steps">{INTRO_STEPS.map((step, index) => <RevealOnScroll key={step.title} delay={index * 90}><div className="mk-offer-step"><span className="mk-offer-num">0{index + 1}</span><div><strong>{step.title}</strong><span>{step.text}</span></div></div></RevealOnScroll>)}</div>
      </div>
    </section>

    <ClientStrip label="THE PRODUCTS BEHIND THESE STORIES" />
  </div>;
}
