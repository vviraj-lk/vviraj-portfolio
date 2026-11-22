import React from 'react';

interface TimelineItem {
  role: string;
  company: string;
  dates: string;
  desc: string;
}

const timelineData: TimelineItem[] = [
  {
    role: 'Software Engineer',
    company: 'Douglas & Sons Pvt Ltd',
    dates: 'Aug 2023 — Aug 2026',
    desc: 'Implemented warranty and barcode management improvements, automated SMS/email notifications, and developed MIS reporting solutions integrated with SAP B1 and Oracle APEX, alongside ongoing IT support.',
  },
  {
    role: 'Full-Time Postgraduate Study',
    company: 'University of Colombo School of Computing (UCSC)',
    dates: 'Aug 2023 — Aug 2025',
    desc: 'Completed a Master of Information Technology in (2026).',
  },
  {
    role: 'IT Executive',
    company: 'CA Sri Lanka',
    dates: 'Apr 2022 — Aug 2023',
    desc: 'Managed IT operations, procurement, server administration, firewall management, and CMS-based website maintenance.',
  },
  {
    role: 'IT Executive',
    company: 'Milvik Lanka (BIMA)',
    dates: 'Jan 2018 — Apr 2022',
    desc: 'Led IT infrastructure, VPN and firewall administration, VOIP coordination, and helpdesk operations.',
  },
  {
    role: 'IT Executive',
    company: 'Squiremech Engineering',
    dates: 'Nov 2016 — Jan 2018',
    desc: 'Delivered networking, hardware, and software troubleshooting across company construction sites, managed backup/recovery for business-critical data, and maintained the corporate WordPress website and email systems.',
  },
  {
    role: 'IT Executive',
    company: 'Sithara Ltd',
    dates: 'Jul 2015 — Apr 2016',
    desc: 'Managed database, networking, and hardware operations, coordinating with developers on new system rollouts, plus company website maintenance and IT needs reporting (Oracle on Windows Server 2003).',
  },
  {
    role: 'Programmer',
    company: 'Central Industries PLC',
    dates: 'May 2013 — Jul 2015',
    desc: 'Developed inventory and ticketing systems using .NET, PHP, MySQL, and Oracle technologies.',
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
          <span className="section-rule" />
        </div>
        <div className="panel glass">
          <div className="timeline">
            {timelineData.map((item, idx) => (
              <div key={idx} className="tl-item">
                <span className="tl-dot" />
                <div className="tl-head">
                  <div>
                    <span className="tl-role">{item.role}</span> · <span className="tl-company">{item.company}</span>
                  </div>
                  <div className="tl-dates">{item.dates}</div>
                </div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
