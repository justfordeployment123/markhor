import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BrandMark } from '../components/Brand';
import { SectionLink } from '../components/effects';

const ENGINEER = {
  name: 'Muhammad Fizan Tariq',
  firstName: 'Fizan',
  role: 'Full-Stack Engineer',
  bio: 'Builds end-to-end web platforms and AI-powered products — from architecture to deployment. Has shipped real estate, e-commerce, edtech, and SaaS platforms for clients across the UK and UAE.',
  skills: ['React', 'Next.js', 'Node.js', 'Docker', 'AI integration'],
  stats: [{ value: '3 yrs', label: 'Building products' }, { value: '7+', label: 'Products live' }, { value: 'UK · UAE', label: 'Client base' }],
  phone: '+92 346 5833438',
  email: 'hello@markhorsystems.com',
  photo: '/Faizan.jpg',
};

// Photos live in public/team/; anyone without one shows their initials.
const TEAM = [
  { name: 'Ali Hassan', initials: 'AH', role: 'Business Development Lead', linkedin: 'https://www.linkedin.com/in/ali-hassan-250547324/' },
  { name: 'Abdul Ahad', initials: 'AA', linkedin: 'https://www.linkedin.com/in/abdulahad-zarinc/' },
  { name: 'Abdul Rafay', initials: 'AR', linkedin: 'https://www.linkedin.com/in/abdul-rafay-25a102230/' },
  { name: 'Muhammad Faizan Shakeel', initials: 'FS', linkedin: 'https://www.linkedin.com/in/muhammad-faizan-shakeel-7aab3a314/' },
  { name: 'Muhammad Bilal Tahir', initials: 'BT', linkedin: 'https://www.linkedin.com/in/m-bilaltahir/' },
];

const FACTS = [
  { value: 3, suffix: ' yrs', label: 'Shipping real products', count: true },
  { value: 7, suffix: '+', label: 'Products brought to life', count: true },
  { value: 0, label: 'Account managers or middlemen' },
  { value: 24, suffix: 'h', label: 'Reply from a founding engineer', count: true },
];

const CULTURE = [
  { label: 'Direct line', text: 'You talk to the engineer building your product — not an account manager relaying messages. Decisions happen in one conversation, not five.' },
  { label: 'Craft first', text: 'If we have to choose between shipping fast and shipping well, we ship well. With a senior team, you rarely have to choose.' },
  { label: 'Curiosity', text: 'We look for people who have built something ambitious on the side. What you’ve shipped, and why, matters more than a CV.' },
  { label: 'Small on purpose', text: 'We take on a handful of projects at a time, so every client gets real attention. Growing slowly is a feature, not a limitation.' },
];

const ROLES = [
  { role: 'Senior Full-Stack Engineer', type: 'Full-time · Pakistan' },
  { role: 'Senior Mobile Engineer (iOS)', type: 'Full-time · Pakistan' },
  { role: 'Product Designer', type: 'Full-time · Pakistan or remote' },
];

// The hero diagram: the person you brief is the person who builds.
function DirectLine() {
  return <div className="mk-direct-line" aria-hidden="true">
    <span className="mk-direct-rail"><i /></span>
    <div className="mk-glass-chip mk-direct-node"><span><Icon name="user" size={17} /></span><div><strong>You</strong><small>The idea, the goals, the deadline</small></div></div>
    <div className="mk-glass-chip mk-direct-node mk-direct-node-main">
      <img src={ENGINEER.photo} alt="" width="800" height="800" />
      <div><strong>{ENGINEER.firstName} · {ENGINEER.role}</strong><small>Scopes it, designs it, builds it</small></div>
      <span className="mk-direct-badge"><span className="mk-status-dot" />Same person throughout</span>
    </div>
    <div className="mk-glass-chip mk-direct-node"><span><Icon name="cloud" size={17} /></span><div><strong>Your product</strong><small>Live, documented, and yours</small></div></div>
  </div>;
}

export default function Team() {
  return <div className="mk-home mk-page">
    <PageHero
      eyebrow="THE TEAM"
      title="Meet the person"
      accent="who builds it."
      lead="No account managers, no bait-and-switch, no hidden subcontractors. The person you meet on the first call is the person who ships your product — and you can meet them before you sign a thing."
      actions={<>
        <Link to="/contact" className="mk-button mk-button-light">Book a call with {ENGINEER.firstName} <Icon name="diagonal" size={18} /></Link>
        <SectionLink to="hiring" className="mk-button mk-button-glass">We’re hiring <Icon name="arrow" size={17} /></SectionLink>
      </>}
      visual={<DirectLine />}
      facts={FACTS}
    />

    <section className="mk-section mk-people" id="people">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="THE PEOPLE" title="Meet the engineer" accent="who’ll build your product."><p className="mk-heading-description">Not a sales team, not a marketplace — the same person from kickoff to launch.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll>
          <article className="mk-profile">
            <div className="mk-profile-photo">
              <img src={ENGINEER.photo} alt={ENGINEER.name} width="800" height="800" loading="lazy" decoding="async" />
              <span className="mk-profile-badge"><span className="mk-status-dot" />Founding engineer</span>
            </div>
            <div className="mk-profile-body">
              <span className="mk-eyebrow">{ENGINEER.role.toUpperCase()}</span>
              <h3>{ENGINEER.name}</h3>
              <p>{ENGINEER.bio}</p>
              <ul className="mk-pills" aria-label="Core skills">{ENGINEER.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
              <dl className="mk-profile-stats">{ENGINEER.stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
              <div className="mk-profile-actions">
                <Link to="/contact" className="mk-button mk-button-primary">Book a scoping call <Icon name="diagonal" size={17} /></Link>
                <a href={`tel:${ENGINEER.phone.replace(/\s/g, '')}`} className="mk-profile-link"><Icon name="phone" size={16} />{ENGINEER.phone}</a>
                <a href={`mailto:${ENGINEER.email}`} className="mk-profile-link"><Icon name="mail" size={16} />{ENGINEER.email}</a>
              </div>
            </div>
          </article>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mk-team-head"><h3>The team <em>around every build.</em></h3><p>The people working alongside {ENGINEER.firstName} to keep your project moving.</p></div>
          <ul className="mk-team">{TEAM.map(member => <li key={member.name} className="mk-team-card">
            <div className="mk-team-photo">{member.photo ? <img src={member.photo} alt={member.name} width="600" height="750" loading="lazy" decoding="async" /> : <span className="mk-team-initials" aria-hidden="true">{member.initials}</span>}</div>
            <div className="mk-team-body">
              <strong>{member.name}</strong>
              {member.role && <small>{member.role}</small>}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mk-team-link" aria-label={`${member.name} on LinkedIn`}><Icon name="linkedin" size={16} />LinkedIn</a>
            </div>
          </li>)}</ul>
        </RevealOnScroll>
      </div>
    </section>

    <section className="mk-panel mk-intro mk-culture">
      <BrandMark className="mk-intro-mark" variant="mono" />
      <div className="mk-wrap mk-intro-grid">
        <RevealOnScroll className="mk-intro-head"><span className="mk-eyebrow">OUR CULTURE</span><h2>How the studio<br /><em>actually runs.</em></h2></RevealOnScroll>
        <RevealOnScroll className="mk-intro-body" delay={100}><dl className="mk-intro-story">{CULTURE.map((item, index) => <div key={item.label}><dt><span>0{index + 1}</span>{item.label}</dt><dd>{item.text}</dd></div>)}</dl></RevealOnScroll>
        <RevealOnScroll className="mk-intro-foot" delay={200}><div className="mk-intro-points">{['Everyone reviews code', 'Flat structure', 'Fast decisions'].map(point => <span key={point}><Icon name="check" size={14} />{point}</span>)}</div><Link to="/about" className="mk-button mk-button-outline">Our story <Icon name="diagonal" size={17} /></Link></RevealOnScroll>
      </div>
    </section>

    <section className="mk-section mk-hiring" id="hiring">
      <div className="mk-wrap">
        <RevealOnScroll><SectionHeading eyebrow="CAREERS" title="Build your next chapter" accent="with us."><p className="mk-heading-description">We grow slowly and on purpose. Send us something you’ve shipped — not just a CV.</p></SectionHeading></RevealOnScroll>
        <RevealOnScroll>
          <ul className="mk-roles">{ROLES.map((item, index) => <li key={item.role}>
            <a className="mk-role" href={`mailto:careers@markhorsystems.com?subject=${encodeURIComponent(`Application: ${item.role}`)}`}>
              <span className="mk-card-number">0{index + 1}</span>
              <span className="mk-role-main"><strong>{item.role}</strong><small><Icon name="pin" size={13} />{item.type}</small></span>
              <span className="mk-role-status"><span />Open</span>
              <span className="mk-role-apply">Apply <span className="mk-round-arrow"><Icon name="diagonal" size={16} /></span></span>
            </a>
          </li>)}</ul>
          <div className="mk-services-note mk-hiring-note"><span className="mk-services-note-icon"><Icon name="mail" size={20} /></span><p><strong>Don’t see your role?</strong> Email <a href="mailto:careers@markhorsystems.com">careers@markhorsystems.com</a> with something you’ve built. We read every message.</p></div>
        </RevealOnScroll>
      </div>
    </section>
  </div>;
}
