import React, { useEffect, useState } from 'react';
import logoImg from '../assets/markhor_logo.png';

const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const DURATION = 1400;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 2);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(() => onDone && onDone(), 550);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`loading-screen ${exiting ? 'exit' : ''}`} aria-hidden={exiting}>
      <div className="loading-bg-elements">
        <div className="bg-element bg-element-1" />
        <div className="bg-element bg-element-2" />
        <div className="bg-element bg-element-3" />
      </div>

      <div className="loading-content">
        <div className="loading-logo">
          <img src={logoImg} alt="Markhor Systems" className="loading-logo-img" />
          <div className="logo-text">
            <span className="logo-name">MARKHOR</span>
            <span className="logo-tagline">Systems</span>
          </div>
        </div>

        <div className="loading-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loading-percentage">{String(progress).padStart(3, '0')}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
