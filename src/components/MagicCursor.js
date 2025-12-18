import React, { useEffect, useRef, useState } from 'react';

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle hover states for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor
      ) {
        setIsHovering(true);
        if (target.dataset.cursorText) {
          setCursorText(target.dataset.cursorText);
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor
      ) {
        setIsHovering(false);
        setCursorText('');
      }
    };

      // Smooth animation loop
      const animate = () => {
        // Smooth follow for main cursor
        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;
        
        // Faster follow for dot
        dotX += (mouseX - dotX) * 0.4;
        dotY += (mouseY - dotY) * 0.4;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`magic-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`magic-cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />

      <style jsx>{`
        .magic-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border: 1.5px solid rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: width 0.2s ease, height 0.2s ease, border-width 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .magic-cursor.hovering {
          width: 50px;
          height: 50px;
          border-width: 2px;
          border-color: rgba(0, 0, 0, 0.8);
        }

        .magic-cursor.clicking {
          width: 15px;
          height: 15px;
          border-width: 2px;
        }

        .cursor-text {
          font-size: 10px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .magic-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 4px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: opacity 0.2s ease, transform 0.1s ease;
        }

        .magic-cursor-dot.hovering {
          opacity: 0.3;
        }

        .magic-cursor-dot.clicking {
          transform: scale(1.5);
        }

        @media (max-width: 768px) {
          .magic-cursor,
          .magic-cursor-dot {
            display: none;
          }
        }

        @media (hover: none) {
          .magic-cursor,
          .magic-cursor-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MagicCursor;

