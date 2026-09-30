import React from 'react';

// The Home section heading: ruled eyebrow, two-line title with an accent line, and an optional aside.
export default function SectionHeading({ eyebrow, title, accent, children }) {
  return <div className="mk-section-heading">
    <div><span className="mk-eyebrow">{eyebrow}</span><h2>{title}<br /><em>{accent}</em></h2></div>
    {children}
  </div>;
}
