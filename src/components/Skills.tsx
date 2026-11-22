import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Skills</h2>
          <span className="section-rule" />
        </div>
        <div className="skills-grid">
          {/* Languages & Frameworks */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 5-6 7 6 7" />
                  <path d="m16 5 6 7-6 7" />
                </svg>
              </span>
              <span className="skill-title">Languages &amp; Frameworks</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c-2 0-3.5 1-3.5 3v2h7v1h-9c-2 0-3.5 1.5-3.5 4s1.5 4 3.5 4h1.5v-2.5c0-2 1.5-3.5 3.5-3.5h4c1.7 0 3-1.3 3-3V5c0-2-1.5-3-3.5-3h-3Zm-1 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                  <path d="M12 22c2 0 3.5-1 3.5-3v-2h-7v-1h9c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H16v2.5c0 2-1.5 3.5-3.5 3.5h-4c-1.7 0-3 1.3-3 3v1c0 2 1.5 3 3.5 3h3Zm1-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
                Python
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="12" rx="10" ry="5.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="5.5" transform="rotate(90 12 12)" />
                </svg>
                PHP
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3c-1 2 0 3-1 5-1.5 3 0 6 5 6s6.5-3 5-6c-1-2 0-3-1-5" />
                  <path d="M7 15c-1 1-1 2 1 2.5 3 .8 5 .8 8 0 2-.5 2-1.5 1-2.5" />
                  <path d="M6 19c-1 .6-1 1.6.5 2 3.5 1 8.5 1 12 0 1.5-.4 1.5-1.4.5-2" />
                </svg>
                Java
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v11.5a2.5 2.5 0 0 0 5 0V9" />
                  <path d="M6 3H4M6 3h2" />
                  <path d="M13 20l6-7-4-3 3-7" />
                </svg>
                Laravel
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 15.5c.3.8 1 1.3 2 1.3 1.2 0 2-.6 2-1.6 0-2.2-4-1.4-4-3.7 0-1 .8-1.7 2-1.7.9 0 1.5.4 1.9 1" />
                  <path d="M16.5 10v4.5a1.8 1.8 0 0 1-3.6 0" />
                </svg>
                JavaScript
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 4-1.5 16L12 21l5.5-1L16 4" />
                  <path d="M8.5 8h7l-.3 3H9l.2 2h5.6l-.4 4-3 1-3-1-.2-2" />
                </svg>
                HTML / CSS
              </span>
            </div>
          </div>

          {/* Databases & ERP */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                  <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
              </span>
              <span className="skill-title">Databases &amp; ERP</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                  <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
                Oracle Database
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                  <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
                MySQL
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 5-6 7 6 7" />
                  <path d="m16 5 6 7-6 7" />
                </svg>
                Oracle APEX
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.2" />
                  <rect x="14" y="3" width="7" height="7" rx="1.2" />
                  <rect x="3" y="14" width="7" height="7" rx="1.2" />
                  <rect x="14" y="14" width="7" height="7" rx="1.2" />
                </svg>
                SAP Business One
              </span>
            </div>
          </div>

          {/* Infrastructure & Networking */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="7" rx="1.5" />
                  <rect x="2" y="14" width="20" height="7" rx="1.5" />
                  <path d="M6 6.5h.01M6 17.5h.01" />
                </svg>
              </span>
              <span className="skill-title">Infrastructure &amp; Networking</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" />
                  <rect x="3" y="14" width="18" height="6" rx="1.5" />
                  <path d="M7 7h.01M7 17h.01" />
                </svg>
                Windows Server
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
                </svg>
                FortiGate
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="7" rx="1.5" />
                  <path d="M9 11V8M15 11V8" />
                  <path d="M7 8a5 5 0 0 1 10 0" />
                </svg>
                MikroTik
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                  <rect x="3" y="13" width="4" height="6" rx="1.5" />
                  <rect x="17" y="13" width="4" height="6" rx="1.5" />
                  <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
                </svg>
                Helpdesk Management
              </span>
            </div>
          </div>

          {/* Tools & Practice */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l3.6-3.6a5 5 0 0 1-6.7 6.7l-6.6 6.6a2 2 0 0 1-2.8-2.8l6.6-6.6a5 5 0 0 1 6.7-6.7l-3.6 3.6a1 1 0 0 0 0 1.4Z" />
                </svg>
              </span>
              <span className="skill-title">Tools &amp; Practice</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="5" height="16" rx="1.2" />
                  <rect x="9.5" y="4" width="5" height="10" rx="1.2" />
                  <rect x="16" y="4" width="5" height="13" rx="1.2" />
                </svg>
                Jira
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c.1.7.5 1.3 1.1 1.6H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
                </svg>
                IT Service Management
              </span>
            </div>
          </div>

          {/* AI-Augmented Development */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
                </svg>
              </span>
              <span className="skill-title">AI-Augmented Development</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3 19 10 12 12 10 19 5 3Z" />
                </svg>
                Cursor
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 5-6 7 6 7" />
                  <path d="m16 5 6 7-6 7" />
                  <path d="M13 3 11 21" />
                </svg>
                VS Code
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
                </svg>
                GitHub Copilot
              </span>
              <span className="skill-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12c0 4.4-4 8-9 8-1.2 0-2.3-.2-3.3-.6L4 21l1.3-4A8.4 8.4 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                </svg>
                Prompt-Driven Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
