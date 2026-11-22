import React, { useState, useEffect } from 'react';
import { WaveBackground } from './components/WaveBackground';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ResumePage } from './pages/ResumePage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path.includes('contact')) return '/contact';
    if (path.includes('resume')) return '/resume';
    return '/';
  });

  const [isLight, setIsLight] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'light';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    } else {
      document.documentElement.removeAttribute('data-theme');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    }
  }, [isLight]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('contact')) setCurrentPath('/contact');
      else if (path.includes('resume')) setCurrentPath('/resume');
      else setCurrentPath('/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    if (path.includes('contact')) setCurrentPath('/contact');
    else if (path.includes('resume')) setCurrentPath('/resume');
    else setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      <WaveBackground />
      {currentPath !== '/resume' && (
        <Navbar
          currentPath={currentPath}
          navigate={navigate}
          isLight={isLight}
          toggleTheme={toggleTheme}
        />
      )}
      {currentPath === '/' && <HomePage navigate={navigate} />}
      {currentPath === '/contact' && <ContactPage navigate={navigate} />}
      {currentPath === '/resume' && (
        <ResumePage navigate={navigate} isLight={isLight} toggleTheme={toggleTheme} />
      )}
      <FloatingWhatsApp />
    </>
  );
};
