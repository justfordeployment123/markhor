import React, { useEffect, useState, useRef, useCallback } from 'react';

const TextScramble = ({ 
  text, 
  className = '', 
  style = {},
  delay = 0,
  scrambleSpeed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const scramble = useCallback(() => {
    setIsAnimating(true);
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, scrambleSpeed);
  }, [text, scrambleSpeed, chars]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => {
            scramble();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [text, delay, scramble]);

  return (
    <span 
      ref={ref} 
      className={`text-scramble ${className} ${isAnimating ? 'animating' : ''}`}
      style={style}
    >
      {displayText || text.split('').map(() => ' ').join('')}
    </span>
  );
};

export default TextScramble;

