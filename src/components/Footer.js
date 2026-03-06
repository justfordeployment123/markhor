import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/markhor_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Mobile Development', href: '/services' },
      { name: 'Web Development', href: '/services' },
      { name: 'AI Solutions', href: '/services' },
      { name: 'UI/UX Design', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Team', href: '/team' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center space-x-2.5 group">
              {/* Logo Mark */}
              <div className="relative w-12 h-12 flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                <img
                  src={logoImg}
                  alt="Markhor Systems"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  MARKHOR
                </span>
                <span className="text-xs tracking-[0.3em] text-gray-500 uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Systems
                </span>
              </div>
            </Link>
            
            <p className="mt-6 text-gray-400 leading-relaxed max-w-md"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We build exceptional digital products that drive business growth. 
              From mobile apps to AI solutions, we transform ideas into reality.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a href="mailto:hello@markhorsystems.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span style={{ fontFamily: 'DM Sans, sans-serif' }}>hello@markhorsystems.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontFamily: 'DM Sans, sans-serif' }}>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Services
                </h3>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Company
                </h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Stay Updated
                </h3>
                <p className="text-gray-400 text-sm mb-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Subscribe to our newsletter for the latest updates.
                </p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              © {currentYear} Markhor Systems. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-gray-500 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-500 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
