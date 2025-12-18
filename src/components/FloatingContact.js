import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after scrolling down
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Contact Button */}
      <div 
        className={`floating-contact ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Expanded Options */}
        <div className={`floating-options ${isExpanded ? 'show' : ''}`}>
          {/* Email */}
          <a 
            href="mailto:hello@markhorsystems.com" 
            className="floating-option"
            title="Email Us"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/923001234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="floating-option whatsapp"
            title="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          
          {/* Contact Page */}
          <Link 
            to="/contact" 
            className="floating-option contact"
            title="Contact Form"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>

        {/* Main Button */}
        <button 
          className="floating-main-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Contact options"
        >
          <svg 
            className={`icon-default ${isExpanded ? 'hidden' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <svg 
            className={`icon-close ${isExpanded ? '' : 'hidden'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Pulse Effect */}
        <div className="pulse-ring"></div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx>{`
        .floating-contact {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .floating-contact.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .floating-main-btn {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .floating-main-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
        }

        .floating-main-btn svg {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease;
        }

        .floating-main-btn svg.hidden {
          opacity: 0;
          transform: scale(0.5) rotate(90deg);
          position: absolute;
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 56px;
          height: 56px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.3);
          animation: pulseRing 2s ease-out infinite;
        }

        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.8);
            opacity: 0;
          }
        }

        .floating-contact.expanded .pulse-ring {
          animation: none;
          opacity: 0;
        }

        .floating-options {
          position: absolute;
          bottom: 70px;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .floating-options.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .floating-option {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .floating-option:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .floating-option.whatsapp {
          background: #25D366;
          color: white;
        }

        .floating-option.contact {
          background: #000;
          color: white;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 48px;
          height: 48px;
          background: white;
          border: 2px solid #e5e5e5;
          border-radius: 50%;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          z-index: 50;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          background: #000;
          color: white;
          border-color: #000;
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .floating-contact {
            bottom: 16px;
            right: 16px;
          }

          .floating-main-btn {
            width: 52px;
            height: 52px;
          }

          .scroll-to-top {
            bottom: 16px;
            left: 16px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;

