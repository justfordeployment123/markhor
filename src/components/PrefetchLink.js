import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

/**
 * Map of routes → dynamic imports.
 * Matches the lazy imports in App.js. When the user hovers or focuses
 * a link, we call the matching import() which webpack-caches the chunk,
 * so by the time they click, the route is already in memory.
 */
const PRELOAD_MAP = {
  '/':         () => import('../pages/Home'),
  '/services': () => import('../pages/Services'),
  '/about':    () => import('../pages/About'),
  '/reviews':  () => import('../pages/Reviews'),
  '/team':     () => import('../pages/Team'),
  '/contact':  () => import('../pages/Contact'),
};

/**
 * Drop-in replacement for react-router-dom's Link with two upgrades:
 *
 *   1. On hover/focus, preloads the route's JS chunk (perceived-instant navigation).
 *   2. Passes `viewTransition` to react-router-dom v7 so browsers that
 *      support the View Transitions API get the native compositor-thread
 *      cross-fade in addition to Motion's AnimatePresence fallback.
 */
const PrefetchLink = ({ to, children, onMouseEnter, onFocus, ...rest }) => {
  const preload = useCallback(() => {
    if (typeof to !== 'string') return;
    const fn = PRELOAD_MAP[to];
    if (fn) fn();
  }, [to]);

  const handleMouseEnter = (e) => {
    preload();
    onMouseEnter && onMouseEnter(e);
  };

  const handleFocus = (e) => {
    preload();
    onFocus && onFocus(e);
  };

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      viewTransition
      {...rest}
    >
      {children}
    </Link>
  );
};

export default PrefetchLink;
