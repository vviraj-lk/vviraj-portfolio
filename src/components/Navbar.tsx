import React, { useState } from 'react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  isLight: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, isLight, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (path.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="site-nav">
      <div className="wrap">
        <div className="nav-inner glass">
          <a href="/" onClick={(e) => handleNav(e, '/')} className="brand">
            <span className="brand-mark">VN</span>
            <span className="brand-name">Vajira&nbsp;Nanayakkarawasam</span>
          </a>
          <div className="nav-right">
            <nav className="nav-links">
              <a href="#about" onClick={(e) => handleNav(e, '#about')}>About</a>
              <a href="#experience" onClick={(e) => handleNav(e, '#experience')}>Experience</a>
              <a href="#skills" onClick={(e) => handleNav(e, '#skills')}>Skills</a>
              <a href="#education" onClick={(e) => handleNav(e, '#education')}>Education</a>
              <a href="/resume" onClick={(e) => handleNav(e, '/resume')} className={currentPath === '/resume' ? 'active' : ''}>Resume</a>
              <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className={currentPath === '/contact' ? 'active' : ''}>Contact</a>
            </nav>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
              {isLight ? (
                <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
                </svg>
              ) : (
                <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
                </svg>
              )}
            </button>

            <a className="gh-btn" href="https://github.com/vviraj-lk" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>

            <button
              className="nav-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </div>

        <nav className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => handleNav(e, '#about')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>
            About
          </a>
          <a href="#experience" onClick={(e) => handleNav(e, '#experience')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M2 13h20"/></svg>
            Experience
          </a>
          <a href="#skills" onClick={(e) => handleNav(e, '#skills')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 5-6 7 6 7"/><path d="m16 5 6 7-6 7"/></svg>
            Skills
          </a>
          <a href="#education" onClick={(e) => handleNav(e, '#education')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.69 3 6 3s6-1.9 6-3v-5"/></svg>
            Education
          </a>
          <a href="/resume" onClick={(e) => handleNav(e, '/resume')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Resume
          </a>
          <a href="/contact" onClick={(e) => handleNav(e, '/contact')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
