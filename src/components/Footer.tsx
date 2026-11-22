import React, { useState } from 'react';
import { downloadDynamicResume } from '../utils/pdfGenerator';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const [downloadStatus, setDownloadStatus] = useState<string>('');

  const handleDownload = async () => {
    setDownloadStatus('Generating...');
    await downloadDynamicResume((status) => {
      setDownloadStatus(status === 'Done' ? '' : status);
    });
  };

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-panel glass">
          <div>
            <h3 className="footer-title">Let's talk</h3>
            <p className="footer-sub">
              Open to conversations on software engineering, IT infrastructure, and ERP integration work.
            </p>
          </div>
          <div className="footer-actions">
            <a className="btn-line" href="mailto:vviraj.lk@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              Email
            </a>
            <a
              className="btn-line"
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                navigate('/resume');
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Resume
            </a>
            <button
              className="btn-line"
              onClick={handleDownload}
              style={{ cursor: 'pointer' }}
              title="Download PDF with today's date"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {downloadStatus ? downloadStatus : 'Download CV'}
            </button>
            <a
              className="btn-line"
              href="https://wa.me/94771666113?text=Hi%20Vajira,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener"
              style={{ borderColor: 'rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.33C16.32 14.2 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.53 14.62C13.39 14.78 13.24 14.81 13 14.68C12.75 14.56 11.95 14.3 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.21C9.83 11.1 9.97 10.92 10.09 10.78C10.22 10.64 10.26 10.53 10.34 10.37C10.43 10.2 10.38 10.06 10.32 9.93C10.26 9.81 9.76 8.58 9.56 8.08C9.36 7.59 9.15 7.66 9 7.65C8.86 7.64 8.7 7.64 8.53 7.64C8.36 7.64 8.09 7.7 7.86 7.95C7.63 8.2 7 8.79 7 9.99C7 11.19 7.88 12.35 8 12.51C8.13 12.68 9.72 15.13 12.16 16.18C12.74 16.43 13.19 16.58 13.54 16.69C14.12 16.88 14.65 16.85 15.07 16.79C15.54 16.72 16.52 16.2 16.72 15.61C16.93 15.03 16.93 14.53 16.87 14.43C16.81 14.33 16.65 14.26 16.57 14.33Z" />
              </svg>
              WhatsApp
            </a>
            <a className="btn-line" href="https://linkedin.com/in/vajira-viraj-nanayakkarawasam-9b447355" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
              </svg>
              LinkedIn
            </a>
            <a className="gh-btn" href="https://github.com/vviraj-lk" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              className="btn-solid"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/></svg>
              Send a message
            </a>
          </div>
        </div>
        <p className="copyright">&copy; 2026 Vajira Viraj Nanayakkarawasam — Colombo – Galle – Kalutara, Sri Lanka</p>
      </div>
    </footer>
  );
};
