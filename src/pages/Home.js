import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import RevealOnScroll from '../components/RevealOnScroll';
import Icon from '../components/Icon';
import FaqSection from '../components/FaqSection';
import ClientStrip from '../components/ClientStrip';
import { spotlight, CountUp } from '../components/effects';
import { BrandMark } from '../components/Brand';
import { projects } from '../data/projects';
import webImage from '../assets/hero/hero-pakistani-web.webp';
import webImageSmall from '../assets/hero/hero-pakistani-web-768.webp';
import mobileImage from '../assets/hero/hero-pakistani-mobile.webp';
import mobileImageSmall from '../assets/hero/hero-pakistani-mobile-768.webp';
import collaborationImage from '../assets/hero/hero-pakistani-collaboration.webp';
import collaborationImageSmall from '../assets/hero/hero-pakistani-collaboration-768.webp';
import launchImage from '../assets/hero/hero-pakistani-launch.webp';
import launchImageSmall from '../assets/hero/hero-pakistani-launch-768.webp';

const SLIDES = [
  { label: 'Website development', eyebrow: 'WEBSITE & MOBILE APP DEVELOPMENT', title: 'Intelligent systems.', accent: 'Built to scale.', description: 'We design and build custom websites and web applications for businesses that need reliable, fast, and scalable digital products — from business sites to full SaaS platforms.', image: webImage, imageSmall: webImageSmall, to: '/services?service=web#capabilities', cta: 'Explore website development', chips: [{ icon: 'check', title: '7+ products live', detail: 'Platforms, SaaS & AI' }, { icon: 'code', title: 'Your code, your IP', detail: 'Built in your repositories' }] },
  { label: 'Mobile app development', eyebrow: 'iOS & ANDROID APPS', title: 'Your business.', accent: 'In every hand.', description: 'Native and cross-platform mobile apps for iOS and Android that connect you with your customers, wherever their day takes them.', image: mobileImage, imageSmall: mobileImageSmall, to: '/services?service=mobile#capabilities', cta: 'Explore mobile app development', chips: [{ icon: 'mobile', title: 'iOS + Android', detail: 'One shared codebase' }, { icon: 'cloud', title: 'Launch handled', detail: 'App Store & Google Play' }] },
  { label: 'Product collaboration', eyebrow: 'FROM IDEA TO PRODUCT', title: 'Your vision.', accent: 'Built together.', description: 'Work closely with our team to shape your ideas into clear plans, thoughtful designs, and web products built around your customers.', image: collaborationImage, imageSmall: collaborationImageSmall, to: '/services?service=web#capabilities', cta: 'Explore web products', chips: [{ icon: 'design', title: 'Thoughtful design', detail: 'Built around your users' }, { icon: 'code', title: 'Close collaboration', detail: 'From discovery to delivery' }] },
  { label: 'App launch & support', eyebrow: 'READY FOR THE REAL WORLD', title: 'Launch confidently.', accent: 'Keep growing.', description: 'From testing and app store submission to updates and ongoing support, we help your mobile product reach its users and keep getting better.', image: launchImage, imageSmall: launchImageSmall, to: '/services?service=mobile#capabilities', cta: 'Explore app launch & support', chips: [{ icon: 'check', title: 'Launch ready', detail: 'Tested across devices' }, { icon: 'cloud', title: 'Ongoing support', detail: 'Updates and product care' }] },
];
const SERVICES = [
  { icon: 'code', title: 'Business websites', description: 'Fast, polished websites that explain what you do, rank in search, and turn visitors into enquiries.', to: '/services?service=web#capabilities', tag: 'WEBSITE DEVELOPMENT' },
  { icon: 'globe', title: 'Web apps & SaaS platforms', description: 'Dashboards, portals, and SaaS products with accounts, payments, and admin tools, engineered to scale.', to: '/services?service=web#capabilities', tag: 'WEBSITE DEVELOPMENT' },
  { icon: 'design', title: 'E-commerce & marketplaces', description: 'Online stores and multi-vendor marketplaces with payments, real-time chat, and order tracking.', to: '/services?service=web#capabilities', tag: 'WEBSITE DEVELOPMENT' },
  { icon: 'mobile', title: 'iOS & Android apps', description: 'Native and cross-platform apps that feel right at home on every device, built from one shared codebase where it makes sense.', to: '/services?service=mobile#capabilities', tag: 'MOBILE APP DEVELOPMENT' },
  { icon: 'cloud', title: 'App Store launch & support', description: 'We handle App Store and Google Play submission, updates, and the ongoing care that keeps your app running smoothly.', to: '/services?service=mobile#capabilities', tag: 'MOBILE APP DEVELOPMENT' },
  { icon: 'ai', title: 'AI-powered features', description: 'Chat assistants, document understanding, and smart search, built into your website or app where they add real value.', to: '/services#capabilities', tag: 'WEB & MOBILE' },
];
const BRAND_STORY = [
  { label: 'Who?', text: 'Markhor Systems is a premium website and mobile app development company serving international businesses that need reliable, intelligent, and scalable digital products.' },
  { label: 'What?', text: 'We design and build custom websites and mobile apps, with AI built in where it helps, so businesses operate smarter, faster, and with long-term stability.' },
  { label: 'How?', text: 'Through precise engineering, structured system design, and thoughtful UI/UX — focusing on clarity, trust, and performance, not hype or gimmicks.' },
];
const TESTIMONIALS = [
  { quote: 'We needed a property platform that could handle UAE’s RE/MAX agent network — listings, lead capture, CMS, agent profiles, the lot. Markhor built it end-to-end and handed over a codebase our in-house team can actually maintain. The admin CMS alone saved us thousands in ongoing vendor costs.', name: 'Khalid Al-Rashid', role: 'Head of Digital · Remax Hub UAE', initials: 'KA', project: 'WEB DEVELOPMENT / REAL ESTATE' },
  { quote: 'We had the idea — AI staging for property photos — but no idea how to build a job queue that handles bulk image processing, marketing video generation, and floor plan parsing at the same time. Markhor figured it out. The SaaS launched on time and the pipeline hasn’t gone down since.', name: 'Sofia Brennan', role: 'Co-Founder · Enhancia.ai', initials: 'SB', project: 'WEB DEVELOPMENT / SAAS' },
  { quote: 'Turning lecture PDFs into flashcards, MCQs, and mind maps with Arabic support — I couldn’t find anyone willing to tackle Arabic NLP alongside everything else. Markhor treated it like any other requirement, shipped a working model, and the Arabic support actually works.', name: 'Tariq Al-Mansouri', role: 'Founder · Memora Study', initials: 'TM', project: 'WEB DEVELOPMENT / EDTECH' },
];
const FAQS = [
  { q: 'How do we get started?', a: 'Tell us about your idea, the problem you want to solve, and your timeline. We’ll arrange a scoping conversation, explore the fit, and put together a clear proposal with deliverables, pricing, and next steps.' },
  { q: 'Can you work with our existing team?', a: 'Yes. We can own a project from discovery to launch or work alongside your existing team. The engagement can follow your tools, development process, and communication rhythm.' },
  { q: 'Who owns the code and intellectual property?', a: 'You do. The code, design files, and project documentation belong to you. We work in your repositories so you have visibility and ownership from the start.' },
  { q: 'Do you provide support after launch?', a: 'Every build includes 30 days of post-launch bug fixes. We can then agree on ongoing support and product development, or prepare a documented handover to your team.' },
];
const PROCESS = [
  { icon: 'globe', title: 'Understand', description: 'We listen, ask questions, and get to the heart of your business, your users, and your goals.' },
  { icon: 'design', title: 'Shape', description: 'We turn what we learn into a clear roadmap, thoughtful designs, and a shared definition of success.' },
  { icon: 'code', title: 'Build', description: 'We work in focused sprints, share regular demos, and keep you involved as your product comes to life.' },
  { icon: 'diagonal', title: 'Evolve', description: 'We help you launch with confidence, learn from real users, and keep building on what works.' },
];
const TECH = [
  { icon: 'code', name: 'Websites & web apps', tech: ['React', 'Next.js', 'Node.js'] },
  { icon: 'mobile', name: 'Mobile apps', tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { icon: 'globe', name: 'Backend & data', tech: ['Python', 'PostgreSQL', 'Firebase'] },
  { icon: 'cloud', name: 'Launch & hosting', tech: ['AWS', 'Docker', 'App Store', 'Google Play'] },
];
const TECH_STACK = ['React', 'Next.js', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Firebase', 'GraphQL', 'Figma', 'Stripe', 'AWS', 'Docker', 'App Store', 'Google Play'];
const STATS = [
  { value: 7, suffix: '+', label: 'Products brought to life', count: true },
  { value: 2, suffix: '', label: 'Core services: web & mobile', count: true },
  { value: 2023, suffix: '', label: 'The year our journey began' },
  { value: 100, suffix: '%', label: 'Your code. Your ownership.', count: true },
];

function ProjectVisual({ project }) {
  return <div className={`mk-project-visual mk-visual-${project.type}${project.image ? ' mk-project-photo' : ''}`} aria-hidden="true">
    <span className="mk-visual-label">{project.name}</span>
    {project.image ? <img
      className="mk-project-image"
      src={project.image}
      srcSet={`${project.imageSmall} 640w, ${project.image} 1280w`}
      sizes="(max-width: 540px) calc(100vw - 44px), (max-width: 800px) calc((100vw - 62px) / 2), (max-width: 1100px) calc((100vw - 108px) / 3), (max-width: 1352px) calc((100vw - 160px) / 3), 397px"
      alt=""
      width="1280"
      height="800"
      loading="lazy"
      decoding="async"
    /> : <div className="mk-project-symbol"><Icon name={{ commerce: 'globe', study: 'ai', access: 'design', flight: 'diagonal' }[project.type]} size={74} /><span>{project.name}</span><div className="mk-symbol-orbit" /></div>}
    <span className="mk-visual-visit">Visit live site <Icon name="diagonal" size={13} /></span>
  </div>;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const hero = useRef(null);
  const tiltFrame = useRef(0);
  const [filter, setFilter] = useState('featured');
  const [testimonial, setTestimonial] = useState(0);
  const current = SLIDES[slide];
  const review = TESTIMONIALS[testimonial];
  const visibleProjects = filter === 'featured' ? projects.slice(0, 3) : filter === 'all' ? projects : projects.filter(project => project.sector === filter);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = setInterval(() => setSlide(value => (value + 1) % SLIDES.length), 7500);
    return () => clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, slide]);
  useEffect(() => () => cancelAnimationFrame(tiltFrame.current), []);

  // Pointer parallax: the hero exposes --mx/--my and each art layer moves by its own depth.
  const tilt = (x = 0, y = 0) => {
    cancelAnimationFrame(tiltFrame.current);
    tiltFrame.current = requestAnimationFrame(() => { hero.current?.style.setProperty('--mx', x.toFixed(3)); hero.current?.style.setProperty('--my', y.toFixed(3)); });
  };
  const onHeroPointerMove = event => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    tilt((event.clientX - box.left) / box.width - .5, (event.clientY - box.top) / box.height - .5);
  };

  return <div className="mk-home">
    <section ref={hero} className="mk-hero" aria-label="What we build" aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); tilt(); }} onPointerMove={onHeroPointerMove} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="mk-hero-frame" aria-hidden="true">
        <div className="mk-hero-layer">{SLIDES.map((item, index) => <img key={item.label} src={item.image} srcSet={`${item.imageSmall} 768w, ${item.image} 1536w`} sizes="(max-width: 540px) 140vw, (max-width: 900px) 760px, min(66vw, 960px)" width="1536" height="1024" alt="" decoding="async" className={slide === index ? 'is-current' : ''} fetchPriority={index === 0 ? 'high' : 'auto'} />)}</div>
      </div>
      <div className="mk-hero-shade" />
      <div className="mk-hero-frame mk-hero-chips" aria-hidden="true">{SLIDES.map((item, index) => <div key={item.label} className={`mk-hero-chipset mk-hero-chipset-${index % 2 + 1} ${slide === index ? 'is-current' : ''}`}>{item.chips.map(chip => <div key={chip.title} className="mk-hero-chip"><span><Icon name={chip.icon} size={17} /></span><div><strong>{chip.title}</strong><small>{chip.detail}</small></div></div>)}</div>)}</div>
      <div className="mk-wrap mk-hero-inner">
        <div className="mk-hero-copy" key={slide} aria-live={paused || focused ? 'polite' : 'off'}>
          <span className="mk-eyebrow"><span className="mk-status-dot" />{current.eyebrow}</span>
          <h1>{current.title}<br /><span>{current.accent}</span></h1>
          <p>{current.description}</p>
          <Link to={current.to} className="mk-button mk-button-light">{current.cta}<Icon name="diagonal" size={18} /></Link>
          <span className="mk-hero-note">Clarity, trust, and performance. Not hype or gimmicks.</span>
        </div>
        <div className="mk-hero-bottom">
          <div className="mk-hero-tabs" role="group" aria-label="Choose a featured service">{SLIDES.map((item, index) => <button key={item.label} className={slide === index ? 'is-active' : ''} onClick={() => { setSlide(index); setPaused(true); }} aria-pressed={slide === index}><span>0{index + 1}</span>{item.label}<Icon name="diagonal" size={15} /></button>)}</div>
          <div className="mk-hero-controls"><span>0{slide + 1}<i> / 0{SLIDES.length}</i></span><button aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(!paused)}><Icon name={paused ? 'play' : 'pause'} size={15} /></button><button aria-label="Next slide" onClick={() => { setSlide((slide + 1) % SLIDES.length); setPaused(true); }}><Icon size={19} /></button></div>
        </div>
      </div>
    </section>

    <ClientStrip />

    <section className="mk-panel mk-intro">
      <BrandMark className="mk-intro-mark" variant="mono" />
      <div className="mk-wrap mk-intro-grid">
        <RevealOnScroll className="mk-intro-head"><span className="mk-eyebrow">ABOUT MARKHOR SYSTEMS</span><h2>Reliable.<br />Intelligent.<br />{' '}<em>Built for the long run.</em></h2></RevealOnScroll>
        <RevealOnScroll className="mk-intro-body" delay={100}><dl className="mk-intro-story">{BRAND_STORY.map((item, index) => <div key={item.label}><dt><span>0{index + 1}</span>{item.label}</dt><dd>{item.text}</dd></div>)}</dl></RevealOnScroll>
        <RevealOnScroll className="mk-intro-foot" delay={200}><div className="mk-intro-points">{['Precise engineering', 'Structured system design', 'Web & mobile under one roof'].map(point => <span key={point}><Icon name="check" size={14} />{point}</span>)}</div><Link to="/about" className="mk-button mk-button-outline">Get to know Markhor <Icon name="diagonal" size={17} /></Link></RevealOnScroll>
      </div>
    </section>

    <section className="mk-services mk-section" id="services">
      <div className="mk-wrap">
        <RevealOnScroll><div className="mk-section-heading"><div><span className="mk-eyebrow">OUR SERVICES</span><h2>Websites and mobile apps.<br /><em>Built properly.</em></h2></div><Link to="/services" className="mk-button mk-button-outline">Explore our services <Icon name="diagonal" size={17} /></Link></div></RevealOnScroll>
        <div className="mk-services-grid">{SERVICES.map((service, index) => <RevealOnScroll key={service.title} delay={(index % 3) * 70}><Link to={service.to} className="mk-service-card mk-spot" onPointerMove={spotlight}><div className="mk-service-top"><span className="mk-service-icon"><Icon name={service.icon} size={26} /></span><span className="mk-card-number">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="mk-service-bottom"><span>{service.tag}</span><span className="mk-round-arrow"><Icon name="diagonal" size={17} /></span></div></Link></RevealOnScroll>)}</div>
        <RevealOnScroll><div className="mk-services-note"><span className="mk-services-note-icon"><Icon name="design" size={20} /></span><p><strong>Not sure which fits?</strong> Tell us what you’re building and we’ll recommend the right approach.</p><Link to="/contact" className="mk-text-link">Start a conversation <Icon name="diagonal" size={17} /></Link></div></RevealOnScroll>
      </div>
    </section>

    <section className="mk-impact">
      <div className="mk-impact-grid" aria-hidden="true" />
      <div className="mk-wrap"><RevealOnScroll><div className="mk-impact-heading"><div><span className="mk-eyebrow">SMALL STUDIO. BIG POSSIBILITIES.</span><h2>Built on trust.<br /><em>Measured in progress.</em></h2></div><p>From AI platforms in the UK to property experiences in the UAE. We turn ambitious challenges into products people use.</p></div></RevealOnScroll><div className="mk-stats">{STATS.map((stat, index) => <RevealOnScroll key={stat.label} delay={index * 90}><div className="mk-stat"><strong><span className="mk-sr-only">{stat.value}{stat.suffix}</span><span aria-hidden="true">{stat.count ? <CountUp value={stat.value} /> : stat.value}<span className="mk-stat-suffix">{stat.suffix}</span></span></strong><span>{stat.label}</span></div></RevealOnScroll>)}</div></div>
    </section>

    <section className="mk-work mk-section" id="work">
      <div className="mk-wrap">
        <RevealOnScroll><div className="mk-section-heading"><div><span className="mk-eyebrow">SELECTED WORK</span><h2>Real challenges.<br /><em>Thoughtful solutions.</em></h2></div><p className="mk-heading-description">A closer look at the products we’ve helped shape, build, and bring to the world.</p></div></RevealOnScroll>
        <div className="mk-work-filters"><div className="mk-work-tabs" role="group" aria-label="Filter projects">{[{ id: 'featured', label: 'Featured projects' }, { id: 'web', label: 'Websites & platforms' }, { id: 'ai', label: 'AI-powered apps' }, { id: 'all', label: 'All projects' }].map(item => <button key={item.id} onClick={() => setFilter(item.id)} className={filter === item.id ? 'is-active' : ''} aria-pressed={filter === item.id}>{item.label}</button>)}</div><span>{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span></div>
        <div className="mk-project-grid" aria-live="polite">{visibleProjects.map(project => <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="mk-project-card" aria-label={`Visit ${project.name} (opens in a new tab)`}><ProjectVisual project={project} /><div className="mk-project-body"><span className="mk-eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="mk-project-bottom"><span>{project.tags[0]}</span><span className="mk-round-arrow"><Icon name="diagonal" size={17} /></span></div></div></a>)}</div>
        {filter === 'featured' && <div className="mk-work-more"><span>Every project starts with a conversation.</span><button className="mk-text-link" onClick={() => setFilter('all')}>Discover more of our work <Icon size={17} /></button></div>}
      </div>
    </section>

    <section className="mk-testimonials mk-panel">
      <div className="mk-testimonials-glow" aria-hidden="true" />
      <div className="mk-wrap"><div className="mk-section-heading"><div><span className="mk-eyebrow">THE PEOPLE WE BUILD WITH</span><h2>Good work builds products.<br /><em>Great partnerships build trust.</em></h2></div><Link to="/reviews" className="mk-button mk-button-glass">More client stories <Icon name="diagonal" size={16} /></Link></div>
        <div className="mk-quote-layout">
          <figure className="mk-quote-card" aria-live="polite"><div className="mk-quote-top"><span className="mk-quote-mark" aria-hidden="true">“</span><span className="mk-stars" role="img" aria-label="Rated 5 out of 5">★★★★★</span></div><span className="mk-eyebrow">{review.project}</span><blockquote key={testimonial}>{review.quote}</blockquote><figcaption className="mk-quote-person"><span className="mk-avatar">{review.initials}</span><span><strong>{review.name}</strong><small>{review.role}</small></span></figcaption></figure>
          <div className="mk-quote-list" role="group" aria-label="Choose a client story">{TESTIMONIALS.map((item, index) => <button key={item.name} className={testimonial === index ? 'is-active' : ''} aria-pressed={testimonial === index} onClick={() => setTestimonial(index)}><span className="mk-avatar">{item.initials}</span><span><strong>{item.name}</strong><small>{item.role}</small></span><Icon size={16} /></button>)}<p>Stories from founders and teams in the UK and UAE.</p></div>
        </div>
      </div>
    </section>

    <section className="mk-process mk-section"><div className="mk-wrap"><RevealOnScroll><div className="mk-section-heading"><div><span className="mk-eyebrow">CLEAR STEPS. SHARED MOMENTUM.</span><h2>From “what if”<br /><em>to what’s next.</em></h2></div><p className="mk-heading-description">A collaborative process that keeps you close to the work, and your product moving in the right direction.</p></div></RevealOnScroll><RevealOnScroll className="mk-process-track"><ol className="mk-process-grid">{PROCESS.map((step, index) => <li key={step.title} className="mk-process-step" style={{ '--i': index }}><span className="mk-process-node">0{index + 1}</span><h3><Icon name={step.icon} size={20} />{step.title}</h3><p>{step.description}</p></li>)}</ol></RevealOnScroll></div></section>

    <section className="mk-tech mk-panel"><div className="mk-wrap"><div className="mk-section-heading"><div><span className="mk-eyebrow">THE RIGHT TOOLS FOR THE JOB</span><h2>Modern foundations.<br /><em>Lasting possibilities.</em></h2></div><p className="mk-heading-description">Established technologies, chosen for your product. A stack your future team will be happy to inherit.</p></div><div className="mk-tech-grid">{TECH.map((item, index) => <RevealOnScroll key={item.name} delay={index * 70}><div className="mk-tech-card mk-spot" onPointerMove={spotlight}><span className="mk-tech-icon"><Icon name={item.icon} size={24} /></span><h3>{item.name}</h3><ul>{item.tech.map(tool => <li key={tool}>{tool}</li>)}</ul></div></RevealOnScroll>)}</div><div className="mk-marquee mk-tech-marquee"><div className="mk-marquee-track">{[0, 1].map(copy => <div key={copy} className="mk-marquee-set" aria-hidden={copy ? true : undefined}>{TECH_STACK.map(tool => <span key={tool}>{tool}</span>)}</div>)}</div></div></div></section>

    <FaqSection eyebrow="LET’S CLEAR THINGS UP" title="A few things" accent="you might be wondering." lead="Have something else in mind? We’re always up for a conversation." items={FAQS} />
  </div>;
}
