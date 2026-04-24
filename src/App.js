import React, { Suspense, lazy, useState, useEffect, startTransition } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import LoadingScreen from './components/LoadingScreen';
import AnnouncementBar from './components/AnnouncementBar';
import './App.css';

// Cached import promises so we can warm the cache (preload) before a user clicks
const homeImport = () => import('./pages/Home');
const servicesImport = () => import('./pages/Services');
const aboutImport = () => import('./pages/About');
const contactImport = () => import('./pages/Contact');
const reviewsImport = () => import('./pages/Reviews');
const teamImport = () => import('./pages/Team');

const Home = lazy(homeImport);
const Services = lazy(servicesImport);
const About = lazy(aboutImport);
const Contact = lazy(contactImport);
const Reviews = lazy(reviewsImport);
const Team = lazy(teamImport);

// Premium easing — Apple-style "decelerate on land".
// See: https://easings.net (easeOutExpo-like).
const EASE = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -6 },
};

const pageTransition = {
  duration: 0.28,
  ease: EASE,
};

/**
 * Wraps each route element. motion.div stays mounted until its exit
 * animation completes, which is exactly what AnimatePresence orchestrates.
 * No state-caching, no timers, no manual scroll — the framework handles it.
 */
const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={pageTransition}
    className="page-motion"
  >
    {children}
  </motion.div>
);

/**
 * Scroll to top AFTER enter animation begins, and only when a new page
 * mounts. Runs inside the mounted page so it fires at the correct time
 * (not during exit of previous page).
 */
const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Don't re-scroll on back/forward — browser restores the position naturally
    if (navType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, navType]);

  return null;
};

/**
 * Top progress bar that appears during transitions.
 * Uses AnimatePresence presence to know when a page is mounting.
 */
const RouteProgress = ({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        className="route-progress"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        aria-hidden="true"
      />
    )}
  </AnimatePresence>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track transition activity for the progress bar
  useEffect(() => {
    setIsTransitioning(true);
    const t = setTimeout(() => setIsTransitioning(false), 420);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <RouteProgress active={isTransitioning} />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageWrapper><Home /></PageWrapper>}
          />
          <Route
            path="/services"
            element={<PageWrapper><Services /></PageWrapper>}
          />
          <Route
            path="/about"
            element={<PageWrapper><About /></PageWrapper>}
          />
          <Route
            path="/reviews"
            element={<PageWrapper><Reviews /></PageWrapper>}
          />
          <Route
            path="/team"
            element={<PageWrapper><Team /></PageWrapper>}
          />
          <Route
            path="/contact"
            element={<PageWrapper><Contact /></PageWrapper>}
          />
          <Route
            path="*"
            element={<PageWrapper><Home /></PageWrapper>}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Preload every route once the browser is idle — after this,
  // every navigation is an instant memory-cached fade (no Suspense flash).
  useEffect(() => {
    const preload = () => {
      startTransition(() => {
        homeImport();
        servicesImport();
        aboutImport();
        contactImport();
        reviewsImport();
        teamImport();
      });
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preload, { timeout: 2500 });
      return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
    }
    const t = setTimeout(preload, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className="App" aria-hidden={loading}>
        <AnnouncementBar />
        <Header />
        <main>
          <Suspense fallback={<div className="page-loading" />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
