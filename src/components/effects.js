import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

// Cards track the pointer so their hover glow follows it.
export const spotlight = event => {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--x', `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty('--y', `${event.clientY - box.top}px`);
};

// Counts up to `value` the first time it scrolls into view.
export function CountUp({ value }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (reducedMotion) { setShown(value); return; }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1400, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .6 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, reducedMotion]);
  return <span ref={ref}>{shown}</span>;
}

// In-page jump that scrolls smoothly; a plain hash link would be re-handled by the router's scroll reset.
export function SectionLink({ to, className, children }) {
  const reducedMotion = useReducedMotion();
  const jump = event => {
    event.preventDefault();
    document.getElementById(to)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };
  return <a href={`#${to}`} className={className} onClick={jump}>{children}</a>;
}
