import React from 'react';

interface EduRowItem {
  title: string;
  sub: string;
  year: string;
}

const degrees: EduRowItem[] = [
  {
    title: 'Master of Information Technology',
    sub: 'University of Colombo School of Computing (UCSC)',
    year: '2026',
  },
  {
    title: 'Professional Graduate Diploma in IT (MBCS)',
    sub: 'British Computer Society (BCS) · UK Level 6 Honours Equivalent',
    year: '2012',
  },
  {
    title: 'Diploma in Information Technology',
    sub: 'British Computer Society (BCS) · UK Level 5',
    year: '2010',
  },
  {
    title: 'Certificate in Information Technology',
    sub: 'British Computer Society (BCS)',
    year: '2008',
  },
];

const certifications: EduRowItem[] = [
  {
    title: 'Sun Certified Java Professional (SCJP)',
    sub: 'Sun Microsystems',
    year: '2010',
  },
  {
    title: 'Certificate in Web Development (PHP/MySQL)',
    sub: 'University of Colombo School of Computing (UCSC)',
    year: '2012',
  },
  {
    title: 'Certificate in Java EE',
    sub: 'University of Colombo School of Computing (UCSC)',
    year: '2010',
  },
  {
    title: 'Certificate in Java SE',
    sub: 'University of Colombo School of Computing (UCSC)',
    year: '2010',
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Education &amp; Certifications</h2>
          <span className="section-rule" />
        </div>
        <div className="edu-grid">
          {/* Academic Degrees */}
          <div className="edu-card glass">
            <div className="edu-card-head">
              <span className="edu-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 1.1 2.69 3 6 3s6-1.9 6-3v-5" />
                  <line x1="22" y1="10" x2="22" y2="16" />
                </svg>
              </span>
              <h3 className="edu-card-title">Academic Degrees</h3>
            </div>
            <div className="edu-rows">
              {degrees.map((item, idx) => (
                <div key={idx} className="edu-row">
                  <div className="edu-row-top">
                    <span className="edu-row-title">{item.title}</span>
                    <span className="edu-row-year">{item.year}</span>
                  </div>
                  <div className="edu-row-sub">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Certifications */}
          <div className="edu-card glass">
            <div className="edu-card-head">
              <span className="edu-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h3 className="edu-card-title">Technical Certifications</h3>
            </div>
            <div className="edu-rows">
              {certifications.map((item, idx) => (
                <div key={idx} className="edu-row">
                  <div className="edu-row-top">
                    <span className="edu-row-title">{item.title}</span>
                    <span className="edu-row-year">{item.year}</span>
                  </div>
                  <div className="edu-row-sub">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
