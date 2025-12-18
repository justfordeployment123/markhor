import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import MagicCursor from './components/MagicCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Team from './pages/Team';
import './App.css';
import logoImg from './assets/markhor_logo.png';

// Page transition wrapper
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransitionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
};

// Loading screen component
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'exit' : ''}`}>
      <div className="loading-content">
        {/* Logo Animation */}
        {/* Logo Animation */}
        <div className="loading-logo">
          <div className="logo-mark">
            <img
              src={logoImg}
              alt="Markhor Systems"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="logo-text">
            <span className="logo-name">MARKHOR</span>
            <span className="logo-tagline">Systems</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-percentage">{progress}%</div>
      </div>

      {/* Animated Background Elements */}
      <div className="loading-bg-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </div>
  );
};

// Main App Content
const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <MagicCursor />
      <Header />
      <main>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <AppContent />
        )}
      </div>
    </Router>
  );
}

export default App;
