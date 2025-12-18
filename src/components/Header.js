import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/markhor_logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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

  // Check if we're on a dark hero page (home)
  const isDarkHero = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
      : isDarkHero
        ? 'bg-transparent'
        : 'bg-white/95 backdrop-blur-xl border-b border-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 group" onClick={closeMobileMenu}>
            <div className="relative w-14 h-14 flex-shrink-0">
              <img
                src={logoImg}
                alt="Markhor Systems"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || !isDarkHero ? 'text-black' : 'text-white'
                }`} style={{ fontFamily: 'Syne, sans-serif' }}>
                MARKHOR
              </span>
              <span className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled || !isDarkHero ? 'text-gray-500' : 'text-gray-400'
                }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Systems
              </span>
            </div>
          </Link>

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
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive(item.path)
                  ? isScrolled || !isDarkHero
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                  : isScrolled || !isDarkHero
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${isScrolled || !isDarkHero
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-white text-black hover:bg-gray-100'
                }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 transition-all duration-300 ${isScrolled || !isDarkHero ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 my-1 transition-all duration-300 ${isScrolled || !isDarkHero ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${isScrolled || !isDarkHero ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${isMobileMenuOpen ? 'max-h-screen pb-6 border-t border-gray-100' : 'max-h-0'
          }`}>
          <div className="pt-6 space-y-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/reviews', label: 'Reviews' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-lg font-medium transition-all duration-300 rounded-xl ${isActive(item.path)
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }`}
                onClick={closeMobileMenu}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/contact"
                className="block w-full text-center py-3 px-6 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
                onClick={closeMobileMenu}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
