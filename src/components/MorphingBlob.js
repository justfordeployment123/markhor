import React, { useEffect, useRef } from 'react';

const MorphingBlob = ({ 
  color1 = 'rgba(100, 100, 100, 0.3)', 
  color2 = 'rgba(50, 50, 50, 0.2)',
  size = 600,
  speed = 0.002,
  className = ''
}) => {
  const blobRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += speed;
      
      if (blobRef.current) {
        // Create organic morphing using multiple sine waves
        const points = 8;
        const pathData = [];
        
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const wave1 = Math.sin(time + i * 0.5) * 30;
          const wave2 = Math.cos(time * 1.5 + i * 0.3) * 20;
          const wave3 = Math.sin(time * 0.7 + i * 0.8) * 15;
          
          const radius = (size / 2) + wave1 + wave2 + wave3;
          const x = Math.cos(angle) * radius + size / 2;
          const y = Math.sin(angle) * radius + size / 2;
          
          pathData.push({ x, y });
        }

        // Create smooth curve through points
        let d = `M ${pathData[0].x} ${pathData[0].y}`;
        
        for (let i = 0; i < pathData.length; i++) {
          const p0 = pathData[(i - 1 + pathData.length) % pathData.length];
          const p1 = pathData[i];
          const p2 = pathData[(i + 1) % pathData.length];
          const p3 = pathData[(i + 2) % pathData.length];

          const cp1x = p1.x + (p2.x - p0.x) / 6;
          const cp1y = p1.y + (p2.y - p0.y) / 6;
          const cp2x = p2.x - (p3.x - p1.x) / 6;
          const cp2y = p2.y - (p3.y - p1.y) / 6;

          d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
        }

        d += ' Z';
        blobRef.current.setAttribute('d', d);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, speed]);

  return (
    <svg 
      className={`morphing-blob ${className}`}
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      style={{
        position: 'absolute',
        overflow: 'visible',
        filter: 'blur(40px)',
      }}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <path 
        ref={blobRef}
        fill="url(#blobGradient)"
      />
    </svg>
  );
};

export default MorphingBlob;



