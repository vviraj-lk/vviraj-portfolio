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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 5-6 7 6 7"/><path d="m16 5 6 7-6 7"/></svg>
              </span>
              <span className="skill-title">Languages &amp; Frameworks</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">Python</span>
              <span className="skill-chip">PHP</span>
              <span className="skill-chip">Java</span>
              <span className="skill-chip">Laravel</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">HTML / CSS</span>
            </div>
          </div>

          {/* Databases & ERP */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>
              </span>
              <span className="skill-title">Databases &amp; ERP</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">Oracle Database</span>
              <span className="skill-chip">MySQL</span>
              <span className="skill-chip">Oracle APEX</span>
              <span className="skill-chip">SAP Business One</span>
            </div>
          </div>

          {/* Infrastructure & Networking */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="7" rx="1.5"/><rect x="2" y="14" width="20" height="7" rx="1.5"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>
              </span>
              <span className="skill-title">Infrastructure &amp; Networking</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">Windows Server</span>
              <span className="skill-chip">FortiGate</span>
              <span className="skill-chip">MikroTik</span>
              <span className="skill-chip">Helpdesk Management</span>
            </div>
          </div>

          {/* Tools & Practice */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l3.6-3.6a5 5 0 0 1-6.7 6.7l-6.6 6.6a2 2 0 0 1-2.8-2.8l6.6-6.6a5 5 0 0 1 6.7-6.7l-3.6 3.6a1 1 0 0 0 0 1.4Z"/></svg>
              </span>
              <span className="skill-title">Tools &amp; Practice</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">Jira</span>
              <span className="skill-chip">IT Service Management</span>
            </div>
          </div>

          {/* AI-Augmented Development */}
          <div className="skill-card glass">
            <div className="skill-head">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/></svg>
              </span>
              <span className="skill-title">AI-Augmented Development</span>
            </div>
            <div className="skill-chips">
              <span className="skill-chip">Cursor</span>
              <span className="skill-chip">VS Code</span>
              <span className="skill-chip">GitHub Copilot</span>
              <span className="skill-chip">Prompt-Driven Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
