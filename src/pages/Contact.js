import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import FaqSection from '../components/FaqSection';

const EMAIL = 'hello@markhorsystems.com';

const SERVICES = [
  { value: 'website', label: 'Website' },
  { value: 'mobile', label: 'Mobile app' },
  { value: 'both', label: 'Website + app' },
  { value: 'unsure', label: 'Not sure yet' },
];

const BUDGETS = [
  { value: 'discovery', label: '$5K discovery sprint (1 week)' },
  { value: 'mvp-low', label: '$35K–$60K MVP (8–10 weeks)' },
  { value: 'mvp-high', label: '$60K–$90K+ MVP (10–14 weeks)' },
  { value: 'retainer', label: 'Embedded engineer (from $8K/mo)' },
  { value: 'exploring', label: 'Just exploring — tell me more' },
];

const DETAILS = [
  { icon: 'mail', label: 'Email us directly', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'pin', label: 'Based in', value: 'Pakistan · working globally' },
  { icon: 'clock', label: 'Reply time', value: 'Within 24 hours, from a founding engineer' },
];

const STEPS = [
  { icon: 'mail', title: 'A real person reads it', meta: 'Within 24 hours', description: 'No auto-responder. A founding engineer reads your message and replies with thoughtful questions.' },
  { icon: 'chat', title: 'A scoping call', meta: '30 minutes', description: 'A real conversation about what you’re building, your constraints, and your budget. No pitch deck, no pressure.' },
  { icon: 'doc', title: 'A fixed-price proposal', meta: 'Within 3 days', description: 'A line-by-line proposal: what’s in, what’s out, a fixed price, and a realistic timeline.' },
  { icon: 'bolt', title: 'Kickoff & first demo', meta: 'Within 10 days', description: 'Contracts signed, repositories set up in your name, and your first demo of working code.' },
];

const REASSURANCES = [
  { icon: 'shield', title: 'NDAs on request', text: 'A mutual NDA signed before the first call — just mention it in your message.' },
  { icon: 'handover', title: 'Honest referrals', text: 'If we’re not the right fit, we’ll point you somewhere better. We’d rather lose a project than win the wrong one.' },
  { icon: 'design', title: 'No pitch deck required', text: 'A Notion doc, a napkin sketch, a Loom, or just a problem. We’ve started with less.' },
];

const FAQS = [
  { q: 'What should I include in my message?', a: 'Whatever you have. A few lines about the problem, who it’s for, and your rough timeline is plenty. A document, a sketch, or a short video works too.' },
  { q: 'Will you sign an NDA?', a: 'Yes. We’re happy to sign a mutual NDA before the first call — just mention it in your message and we’ll send one over.' },
  { q: 'How much does a project cost?', a: 'Discovery sprints are a fixed $5K, and most MVP builds land between $35K and $90K depending on scope. After a short scoping call, you get a fixed-price proposal — no hourly surprises.' },
  { q: 'What if you’re not the right fit?', a: 'We’ll tell you honestly and point you to someone who is. There’s no retainer, no referral fee, and no hard feelings.' },
];

const labelOf = (options, value) => options.find(option => option.value === value)?.label || 'Not specified';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [prepared, setPrepared] = useState(false);
  const update = event => setForm(current => ({ ...current, [event.target.name]: event.target.value }));

  const submit = event => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || 'Not specified'}`,
      `Service: ${labelOf(SERVICES, form.service)}`,
      `Budget: ${labelOf(BUDGETS, form.budget)}`,
      '',
      form.message,
    ].join('\n'));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setPrepared(true);
  };

  return <div className="mk-home mk-page">
    <section className="mk-page-hero mk-contact-hero">
      <div className="mk-page-hero-bg" aria-hidden="true" />
      <div className="mk-wrap mk-contact-grid">
        <div className="mk-page-hero-copy">
          <span className="mk-eyebrow"><span className="mk-status-dot" />GET IN TOUCH</span>
          <h1>Tell us what you’re building.<br /><span>We’ll tell you if we can help.</span></h1>
          <p>A real message gets a real reply. No auto-responders and no templated “thanks for reaching out” — a founding engineer reads every message and writes back.</p>
          <ul className="mk-contact-details">{DETAILS.map(detail => <li key={detail.label}>
            <span className="mk-contact-icon"><Icon name={detail.icon} size={18} /></span>
            <span><small>{detail.label}</small>{detail.href ? <a href={detail.href}>{detail.value}</a> : <strong>{detail.value}</strong>}</span>
          </li>)}</ul>
        </div>

        <form className="mk-form" onSubmit={submit}>
          <div className="mk-form-head">
            <div><h2>Start a project</h2><p>Takes about two minutes.</p></div>
            <span className="mk-form-live"><span />Replies within 24h</span>
          </div>
          <div className="mk-field"><label htmlFor="name">Your name</label><input id="name" name="name" className="mk-input" value={form.name} onChange={update} placeholder="Full name" autoComplete="name" required /></div>
          <div className="mk-form-row">
            <div className="mk-field"><label htmlFor="email">Email</label><input id="email" type="email" name="email" className="mk-input" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" required /></div>
            <div className="mk-field"><label htmlFor="company">Company <small>(optional)</small></label><input id="company" name="company" className="mk-input" value={form.company} onChange={update} placeholder="Company or product" autoComplete="organization" /></div>
          </div>
          <fieldset className="mk-field">
            <legend>What do you need?</legend>
            <div className="mk-choices">{SERVICES.map(option => <label key={option.value} className="mk-choice">
              <input type="radio" name="service" value={option.value} checked={form.service === option.value} onChange={update} />
              <span>{option.label}</span>
            </label>)}</div>
          </fieldset>
          <div className="mk-field"><label htmlFor="budget">Rough budget <small>(keeps our call useful)</small></label>
            <select id="budget" name="budget" className="mk-input" value={form.budget} onChange={update}>
              <option value="">Pick a range…</option>
              {BUDGETS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
          <div className="mk-field"><label htmlFor="message">What are you building?</label><textarea id="message" name="message" className="mk-input" value={form.message} onChange={update} rows="5" placeholder="The problem, who it’s for, and a rough timeline. Want an NDA before the call? Just say so here." required /></div>
          <button type="submit" className="mk-button mk-button-primary mk-form-submit">Prepare project email <Icon name="diagonal" size={17} /></button>
          {prepared && <p className="mk-form-status" role="status"><Icon name="check" size={16} />Your email draft is ready — send it from your email app to start the conversation. You can also write to {EMAIL} directly.</p>}
          <p className="mk-form-note"><Icon name="shield" size={14} />Opens a draft in your email app. Nothing is sent until you press send.</p>
        </form>
      </div>
    </section>

    <section className="mk-section mk-contact-next">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="WHAT HAPPENS NEXT" title="From first message" accent="to kickoff."><p className="mk-heading-description">Most agencies go quiet after “thanks for reaching out”. Here’s exactly what happens after you hit send.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll className="mk-process-track"><ol className="mk-process-grid">{STEPS.map((step, index) => <li key={step.title} className="mk-process-step" style={{ '--i': index }}>
          <span className="mk-process-node">0{index + 1}</span>
          <h3><Icon name={step.icon} size={20} />{step.title}</h3>
          <p>{step.description}</p>
          <span className="mk-process-meta"><Icon name="clock" size={13} />{step.meta}</span>
        </li>)}</ol></RevealOnScroll>
      </div>
    </section>

    <section className="mk-band mk-panel mk-reassure">
      <div className="mk-wrap mk-reassure-grid">{REASSURANCES.map((item, index) => <RevealOnScroll key={item.title} delay={index * 80}>
        <div className="mk-reassure-item"><span className="mk-services-note-icon"><Icon name={item.icon} size={20} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>
      </RevealOnScroll>)}</div>
    </section>

    <FaqSection eyebrow="BEFORE YOU WRITE" title="Quick answers" accent="to common questions." lead="Still unsure about something? Put it in your message — no question is too small." items={FAQS} showAction={false} />
  </div>;
}
