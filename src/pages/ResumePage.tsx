import React, { useState } from 'react';
import { downloadDynamicResume, getTodayFormatted } from '../utils/pdfGenerator';

interface ResumePageProps {
  navigate: (path: string) => void;
  isLight: boolean;
  toggleTheme: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ navigate, isLight, toggleTheme }) => {
  const [viewMode, setViewMode] = useState<'web' | 'pdf'>('web');
  const [downloadStatus, setDownloadStatus] = useState<string>('');
  const today = getTodayFormatted();

  const handleDownload = async () => {
    setDownloadStatus('Generating...');
    await downloadDynamicResume((status) => {
      setDownloadStatus(status === 'Done' ? '' : status);
    });
  };

  return (
    <>
      <header className="top-bar">
        <div className="wrap">
          <div className="top-bar-inner glass">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="back-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Portfolio
            </a>
            <div className="action-group">
              <button
                className="btn-solid"
                onClick={handleDownload}
                style={{ cursor: 'pointer' }}
                title="Download PDF with today's date"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {downloadStatus ? downloadStatus : 'Download PDF'}
              </button>
              <button
                className="btn-line"
                onClick={() => setViewMode(viewMode === 'pdf' ? 'web' : 'pdf')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {viewMode === 'pdf' ? 'Web View' : 'Open PDF'}
              </button>
              <button className="btn-line" onClick={() => window.print()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}>
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print
              </button>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
                {isLight ? (
                  <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
                  </svg>
                ) : (
                  <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4.2" />
                    <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap">
          {/* View Mode Switcher */}
          <div style={{ textAlign: 'center' }}>
            <div className="view-tabs">
              <button
                className={`tab-btn ${viewMode === 'web' ? 'active' : ''}`}
                onClick={() => setViewMode('web')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 14, height: 14 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                Document View
              </button>
              <button
                className={`tab-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                onClick={() => setViewMode('pdf')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 14, height: 14 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Original PDF View
              </button>
            </div>
          </div>

          {/* DOCUMENT WEB VIEW */}
          {viewMode === 'web' && (
            <article className="resume-paper glass" id="web-view">
              <header className="resume-header">
                <h1 className="resume-name">
                  VAJIRA VIRAJ NANAYAKKARAWASM, <span style={{ fontSize: '0.85em', fontWeight: 600, color: 'var(--accent)' }}>MBCS</span>
                </h1>
                <div className="resume-headline">Senior Software Engineer | Systems Administrator | IT Operations &amp; Infrastructure Lead</div>
                <div className="resume-subhead">Master of Information Technology (UCSC), 2026 | BCS Professional Graduate Diploma in IT (MBCS)</div>
                <div className="resume-contacts">
                  <span>Kalutara, Sri Lanka</span>
                  <span>•</span>
                  <a href="tel:+94771666113">+94 77 166 6113</a>
                  <span>•</span>
                  <a href="mailto:vviraj.lk@gmail.com">vviraj.lk@gmail.com</a>
                  <span>•</span>
                  <a href="https://linkedin.com/in/vajira-viraj-nanayakkarawasam-9b447355" target="_blank" rel="noopener">
                    linkedin.com/in/vajira-viraj-nanayakkarawasam-9b447355
                  </a>
                </div>
              </header>

              {/* PROFESSIONAL SUMMARY */}
              <section className="resume-section">
                <h2 className="resume-section-title">Professional Summary</h2>
                <p className="summary-p">
                  IT professional with 12+ years of experience across software engineering, systems administration and IT operations. Senior Software Engineer (promoted January 2026) who delivered MIS reports and system enhancements on SAP Business One and Oracle APEX, acted as the de facto business analyst, and now builds web applications as a freelancer with Laravel, React and REST APIs, using Git, Docker, CI/CD pipelines and agentic AI-assisted workflows. Hands-on systems administrator across Windows Server, Active Directory, Microsoft 365 and Azure AD, firewalls and VPNs, VMware, backup and recovery, and structured cabling and server room practices. Led IT infrastructure maintenance and directed helpdesk operations, and managed IT procurement, vendors and IT budget forecasts. Completed a Master of Information Technology at the University of Colombo School of Computing (2026). Immediately available for Senior Software / AI-assisted engineering, System Administrator or IT Assistant Manager roles.
                </p>
              </section>

              {/* CORE COMPETENCIES */}
              <section className="resume-section">
                <h2 className="resume-section-title">Core Competencies</h2>
                <ul className="comp-list">
                  <li className="comp-item"><span className="comp-title">Software &amp; Web Development:</span> Python, PHP, Laravel, Java (SCJP), JavaScript, React, .NET, REST APIs, HTML, CSS, XML, Git, Docker, CI/CD Pipelines, CodeIgniter, WordPress</li>
                  <li className="comp-item"><span className="comp-title">AI-Augmented Engineering:</span> Agentic coding workflows (Cursor, Visual Studio Code), prompt-driven development, AI-powered debugging and code review</li>
                  <li className="comp-item"><span className="comp-title">ERP, Databases &amp; Business Systems:</span> SAP Business One (user administration, access permissions, reporting), Oracle APEX, Oracle Database, MySQL, SQL Developer, MIS Reporting</li>
                  <li className="comp-item"><span className="comp-title">Systems &amp; Infrastructure:</span> Windows Server &amp; Active Directory, Microsoft 365 &amp; Azure AD Administration, VMware Virtualization, Backup &amp; Recovery, NAS Storage, Patch Panels, Structured Cabling, Server Room Practices</li>
                  <li className="comp-item"><span className="comp-title">Networking &amp; Security:</span> Network Administration, Firewall and VPN Management (FortiGate, Mikrotik), VOIP Systems, CCTV System Coordination, IT Policy &amp; Security</li>
                  <li className="comp-item"><span className="comp-title">IT Operations &amp; Management:</span> Helpdesk/Service Desk Management, IT Procurement, Vendor and Supplier Coordination, IT Budget Forecasting, IT Asset Management &amp; Auditing (Snipe-IT), Jira, Spiceworks</li>
                  <li className="comp-item"><span className="comp-title">Business Analysis &amp; Delivery:</span> Business Requirements Gathering, Functional Specification Writing, Stakeholder Liaison, UI/UX Enhancement, Technical Documentation</li>
                </ul>
              </section>

              {/* PROFESSIONAL EXPERIENCE */}
              <section className="resume-section">
                <h2 className="resume-section-title">Professional Experience</h2>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">Freelance Web Developer — <span className="co">Self-employed</span></div>
                    <div className="exp-dates">August 2026 – Present</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Design and build web applications using Laravel and React, with REST APIs connecting the front end and back end</li>
                    <li>Use Git for version control across projects</li>
                    <li>Use agentic AI coding workflows (Cursor and Visual Studio Code) for development, debugging and code review</li>
                    <li>Containerize applications with Docker and set up CI/CD pipelines for automated testing and deployment, applying basic DevOps practices</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">Software Engineer / Senior Software Engineer — <span className="co">Douglas &amp; Sons (Pvt) Ltd</span></div>
                    <div className="exp-dates">August 2023 – August 2026</div>
                  </div>
                  <div className="exp-subdates">Promoted to Senior Software Engineer, January 2026</div>
                  <ul className="exp-bullets">
                    <li>Acted as the de facto business analyst for MIS and small internal system requirements in the absence of a dedicated BA function, gathering and documenting requirements directly from business stakeholders</li>
                    <li>Translated business and stakeholder requirements into functional specifications for reports and system enhancements built on SAP Business One and Oracle APEX</li>
                    <li>Liaised between business users and technical/development resources to scope, prioritize, and deliver MIS reports and small system enhancements</li>
                    <li>Enhanced UI/UX across internal systems and the corporate website based on gathered user requirements</li>
                    <li>Managed website updates and provided organization-wide IT support</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">IT Executive — <span className="co">Institute of Chartered Accountants of Sri Lanka</span></div>
                    <div className="exp-dates">April 2022 – August 2023</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Administered servers and firewalls to maintain system security and uptime</li>
                    <li>Managed Office 365 and Azure Active Directory administration, including user accounts, mailboxes, and access management</li>
                    <li>Administered and maintained the SAP Business One ERP system across the Institute's multiple academic divisions and campus locations, including user account and access permission management</li>
                    <li>Directed hardware and software procurement to keep IT infrastructure current and cost-effective</li>
                    <li>Managed the CMS-based corporate website, ensuring content accuracy and availability</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">IT Executive — <span className="co">Milvik Lanka (Pvt) Ltd (BIMA)</span></div>
                    <div className="exp-dates">January 2018 – April 2022</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Led IT infrastructure maintenance across the organization to minimize system downtime</li>
                    <li>Directed helpdesk operations, resolving hardware, software, and network issues for staff</li>
                    <li>Coordinated VOIP systems and VPN/firewall infrastructure to support secure, reliable communications</li>
                    <li>Coordinated with suppliers to arrange and maintain CCTV systems across office locations</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">IT Executive — <span className="co">Squiremech Engineering (Pvt) Ltd</span></div>
                    <div className="exp-dates">November 2016 – January 2018</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Implemented network solutions and managed IT needs across all company construction sites</li>
                    <li>Managed data processing, backup, and recovery for MS Office and CAD outputs, safeguarding business-critical data</li>
                    <li>Delivered networking, hardware, and software troubleshooting support across the organization</li>
                    <li>Reported on software/hardware needs and prepared monthly forecasts to support IT budgeting (Windows Server 2008, NAS environment)</li>
                    <li>Maintained the corporate WordPress website and configured email systems as required</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">IT Executive — <span className="co">Sithara Ltd</span></div>
                    <div className="exp-dates">July 2015 – April 2016</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Managed database, networking, and hardware operations, coordinating with software developers to implement new systems efficiently</li>
                    <li>Delivered software, hardware, and network troubleshooting support, and reported on IT needs to management</li>
                  </ul>
                </div>

                <div className="exp-block">
                  <div className="exp-header">
                    <div className="exp-role-co">Programmer — <span className="co">Central Industries PLC (Ltd)</span></div>
                    <div className="exp-dates">May 2013 – July 2015</div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Designed, analyzed, and maintained operations systems across factory, head office, and distributor databases (Oracle) and .NET applications</li>
                    <li>Built an online product distribution system (inventory control) using .NET and MySQL</li>
                    <li>Developed a helpdesk ticketing system with user-permission handling using PHP and MySQL</li>
                    <li>Created reporting tools for Marketing and Sales departments and support tools for system/user-permission management</li>
                    <li>Provided helpdesk support to distributors onsite and by phone, coordinating with distributors and internal teams to resolve system issues</li>
                  </ul>
                </div>
              </section>

              {/* EDUCATION & CERTIFICATIONS */}
              <section className="resume-section">
                <h2 className="resume-section-title">Education &amp; Certifications</h2>
                <ul className="edu-block">
                  <li><span className="edu-highlight">Master of Information Technology</span> — University of Colombo School of Computing (UCSC), 2026 — completed part-time while employed; transcript available on request</li>
                  <li><span className="edu-highlight">Professional Graduate Diploma in IT</span> — British Computer Society (BCS), 2012 — UK Level 6 Higher Education Qualification, formally recognized by BCS as the academic equivalent of a UK Bachelor's (Honours) degree in IT; basis for BCS Professional Membership (MBCS) — Advanced Database Management Systems, User Interface Design, Web Engineering, System Design Methods</li>
                  <li><span className="edu-highlight">Diploma in Information Technology</span> — BCS, 2010 — UK Level 5 Higher Education Qualification (academic equivalent of Year 2 of a UK Bachelor's degree) — Database Systems, Object-Oriented Programming, Computer Networks, Professional Issues in IT</li>
                  <li><span className="edu-highlight">Sun Certified Java Professional (SCJP)</span> — Sun Microsystems, 2010</li>
                  <li><span className="edu-highlight">Certificate in Java SE</span> — UCSC, 2010</li>
                  <li><span className="edu-highlight">Certificate in Java EE</span> — UCSC, 2010</li>
                  <li><span className="edu-highlight">Certificate in Web Development (PHP/MySQL)</span> — UCSC, 2012</li>
                  <li><span className="edu-highlight">Certificate in Information Technology</span> — BCS, 2008</li>
                </ul>
              </section>

              {/* REFERENCES */}
              <section className="resume-section">
                <h2 className="resume-section-title">References</h2>
                <div className="ref-grid">
                  <div className="ref-card">
                    <div className="ref-name">Mr. Mahesh Dharmasiriwardena</div>
                    <div className="ref-title">Aircraft Maintenance Engineer, SriLankan Airlines</div>
                    <div className="ref-detail">
                      Address: No. 31/30, London Place, Colombo 07, Sri Lanka<br />
                      Mobile: +94 71 681 4989
                    </div>
                  </div>
                  <div className="ref-card">
                    <div className="ref-name">Mr. Amil Senevirathne</div>
                    <div className="ref-title">Head of Audit Group, LAUGFS Holdings Limited</div>
                    <div className="ref-detail">
                      Address: 101, Maya Avenue, Colombo 00600, Sri Lanka<br />
                      Mobile: +94 70 352 3638 | Email: amil.usjp@gmail.com
                    </div>
                  </div>
                </div>
              </section>

              {/* DECLARATION */}
              <div className="declaration-box">
                <p className="declaration-text">I do hereby certify that the particulars furnished by me above are true &amp; correct.</p>
                <div className="declaration-sig">N.G.L. Vajira Viraj</div>
                <div className="declaration-date">
                  Date: <span>{today}</span>
                  <span className="live-badge" title="Automatically adjusted to the current viewing / download date">
                    <span className="live-dot" /> Dynamic Date Active
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* OFFICIAL PDF VIEW */}
          {viewMode === 'pdf' && (
            <div className="pdf-container show" id="pdf-view">
              <iframe className="pdf-frame" src="/resume.pdf" title="Vajira Viraj Resume PDF" />
            </div>
          )}
        </div>
      </main>
    </>
  );
};
