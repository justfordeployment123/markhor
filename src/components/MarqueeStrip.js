import React from 'react';

const DEFAULT_ITEMS = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Swift', 'Kotlin',
  'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Firebase', 'GraphQL',
  'Figma', 'Stripe', 'AWS', 'Docker', 'App Store', 'Google Play',
];

const MarqueeStrip = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section className="marquee-strip" aria-label="Technologies we use">
      <div className="marquee-strip-track">
        {[...items, ...items].map((m, i) => (
          <span key={i} className="marquee-strip-item">
            <span className="marquee-strip-dot" />
            {m}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeStrip;
