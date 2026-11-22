import React, { useState } from 'react';
import { downloadDynamicResume, getTodayFormatted } from '../utils/pdfGenerator';

interface HeroProps {
  navigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const [downloadStatus, setDownloadStatus] = useState<string>('');
  const today = getTodayFormatted();

  const handleDownload = async () => {
    setDownloadStatus('Generating...');
    await downloadDynamicResume((status) => {
      setDownloadStatus(status === 'Done' ? '' : status);
    });
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-panel glass">
          <div>
            <div className="eyebrow-row">
              <span className="dot-live" />
              Colombo – Galle – Kalutara, Sri Lanka
            </div>
            <h1 className="name">
              Vajira Viraj<br />Nanayakkarawasam
            </h1>
            <p className="role-line">
              Technical Operations Engineer | Software Engineer | Production Support, Incident Handling &amp; Troubleshooting
            </p>
            <p className="lede">
              Building and maintaining the systems enterprises run on — from ERP integrations and database platforms to the infrastructure and helpdesk operations behind them.
            </p>
            <div className="hero-actions">
              <a
                className="btn-solid"
                href="/resume"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/resume');
                }}
                style={{ textDecoration: 'none' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                View Resume
              </a>
              <button
                className="btn-line"
                onClick={handleDownload}
                style={{ cursor: 'pointer' }}
                title="Download PDF with today's date"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {downloadStatus ? downloadStatus : 'Download CV (PDF)'}
              </button>
              <span className="live-date-pill" style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-2)', display: 'inline-block' }} />
                Auto-dated: <span>{today}</span>
              </span>
            </div>
            <div className="contact-row">
              <a href="mailto:vviraj.lk@gmail.com" className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>vviraj.lk@gmail.com</span>
              </a>
              <a href="tel:+94771666113" className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+94 77 166 6113</span>
              </a>
              <a href="https://linkedin.com/in/vajira-viraj-nanayakkarawasam-9b447355" target="_blank" rel="noopener" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="photo-frame">
              <img className="photo-img" src="/profile.webp" alt="Vajira Viraj Nanayakkarawasam" />
            </div>

            {/* Terminal Status Card */}
            <div className="terminal-card glass">
              <div className="terminal-header">
                <span className="terminal-title">
                  <span className="terminal-prompt">&gt;_</span> vvn.profile.status
                </span>
                <span className="terminal-status">ONLINE · 2026</span>
              </div>
              <div className="terminal-cli">
                <span className="terminal-arrow">&gt;</span>
                <span className="terminal-cursor" />
              </div>
              <div className="terminal-grid">
                <div className="term-stat-card">
                  <div className="term-stat-val term-val-gold">12+ Yrs</div>
                  <div className="term-stat-sub">Dual-Track IT</div>
                </div>
                <div className="term-stat-card">
                  <div className="term-stat-val">M.I.T. '26</div>
                  <div className="term-stat-sub">UCSC Colombo</div>
                </div>
                <div className="term-stat-card">
                  <div className="term-stat-val">MBCS</div>
                  <div className="term-stat-sub">BCS UK Level 6</div>
                </div>
                <div className="term-stat-card">
                  <div className="term-stat-val">SCJP</div>
                  <div className="term-stat-sub">Sun Microsystems</div>
                </div>
              </div>
              <div className="term-stat-row">
                <div className="term-stat-val term-val-blue">7 Roles</div>
                <div className="term-stat-date">2013 – Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
