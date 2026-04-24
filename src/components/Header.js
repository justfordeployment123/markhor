import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PrefetchLink from './PrefetchLink';
import logoImg from '../assets/markhor_logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          if (scrolled !== lastScrolled) {
            lastScrolled = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isDarkHero = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'header-glass-scrolled'
          : isDarkHero
            ? 'bg-transparent'
            : 'header-glass-scrolled'
      }`}
      style={isScrolled || !isDarkHero ? {
        background: 'rgba(8, 6, 19, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <PrefetchLink to="/" className="flex items-center space-x-2.5 group" onClick={closeMobileMenu}>
            <div className="relative w-11 h-11 flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              <img
                src={logoImg}
                alt="Markhor Systems"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight transition-colors duration-300 text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                MARKHOR
              </span>
              <span className="text-xs tracking-[0.3em] uppercase transition-colors duration-300 text-gray-400"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Systems
              </span>
            </div>
          </PrefetchLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/reviews', label: 'Reviews' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <PrefetchLink
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  ...(isActive(item.path) ? {
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  } : {}),
                }}
              >
                {item.label}
              </PrefetchLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <PrefetchLink
              to="/contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: '#ffffff',
                color: '#100D25',
                boxShadow: '0 2px 16px rgba(255, 255, 255, 0.15)',
              }}
            >
              Start a Project
            </PrefetchLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 my-1 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}
          style={{
            background: 'rgba(8, 6, 19, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: isMobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
          }}
        >
          <div className="pt-6 space-y-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/reviews', label: 'Reviews' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <PrefetchLink
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-lg font-medium transition-all duration-300 rounded-xl ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={closeMobileMenu}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  ...(isActive(item.path) ? {
                    background: 'rgba(255, 255, 255, 0.07)',
                  } : {}),
                }}
              >
                {item.label}
              </PrefetchLink>
            ))}
            <div className="pt-4 px-4">
              <PrefetchLink
                to="/contact"
                className="block w-full text-center py-3 px-6 text-white font-semibold rounded-full transition-all duration-300"
                onClick={closeMobileMenu}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  background: '#ffffff',
                  color: '#100D25',
                  boxShadow: '0 2px 16px rgba(255, 255, 255, 0.15)',
                }}
              >
                Start a Project
              </PrefetchLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
