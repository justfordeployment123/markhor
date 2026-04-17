import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const MagneticButton = ({ 
  children, 
  to, 
  href, 
  className = '', 
  strength = 0.3,
  style = {},
  onClick,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const innerRef = useRef(null);
  const rafId = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  const updateTransform = useCallback(() => {
    if (!buttonRef.current) return;
    const { x, y } = posRef.current;
    buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    buttonRef.current.style.transition = x === 0 && y === 0
      ? 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)'
      : 'none';
    if (innerRef.current) {
      innerRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      innerRef.current.style.transition = x === 0 && y === 0 ? 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)' : 'none';
    }
    rafId.current = null;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    posRef.current = {
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    };

    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(updateTransform);
    }
  }, [strength, updateTransform]);

  const handleMouseLeave = useCallback(() => {
    posRef.current = { x: 0, y: 0 };
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(updateTransform);
    }
  }, [updateTransform]);

  const buttonStyle = { ...style };

  const content = (
    <span ref={innerRef} className="magnetic-inner">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link
        ref={buttonRef}
        to={to}
        className={`magnetic-button ${className}`}
        style={buttonStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={`magnetic-button ${className}`}
        style={buttonStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      style={buttonStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default MagneticButton;



