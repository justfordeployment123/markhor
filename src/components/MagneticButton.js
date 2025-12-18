import React, { useRef, useState } from 'react';
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
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonStyle = {
    ...style,
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 
      ? 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)' 
      : 'transform 0.1s ease-out',
  };

  const innerStyle = {
    transform: `translate(${position.x * 0.3}px, ${position.y * 0.3}px)`,
    transition: position.x === 0 && position.y === 0 
      ? 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)' 
      : 'transform 0.1s ease-out',
  };

  const content = (
    <span style={innerStyle} className="magnetic-inner">
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



