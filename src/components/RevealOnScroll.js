import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ 
  children, 
  className = '',
  animation = 'fadeUp', // fadeUp, fadeDown, fadeLeft, fadeRight, scale, rotate, flip
  delay = 0,
  duration = 800,
  threshold = 0.2,
  once = true,
  stagger = 0, // for staggering children
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, transform: 'translateY(60px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeDown: {
      hidden: { opacity: 0, transform: 'translateY(-60px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeLeft: {
      hidden: { opacity: 0, transform: 'translateX(-60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    fadeRight: {
      hidden: { opacity: 0, transform: 'translateX(60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scale: {
      hidden: { opacity: 0, transform: 'scale(0.8)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    rotate: {
      hidden: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      visible: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
    },
    flip: {
      hidden: { opacity: 0, transform: 'perspective(600px) rotateX(-90deg)' },
      visible: { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
    },
    blur: {
      hidden: { opacity: 0, transform: 'scale(1.1)', filter: 'blur(10px)' },
      visible: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    },
    slideRotate: {
      hidden: { opacity: 0, transform: 'translateY(100px) rotate(5deg)' },
      visible: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
    },
  };

  const currentAnimation = animations[animation] || animations.fadeUp;
  const state = isVisible ? currentAnimation.visible : currentAnimation.hidden;

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className} ${isVisible ? 'is-visible' : ''}`}
      style={{
        ...state,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay + stagger}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;



