import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Summary</h2>
          <span className="section-rule" />
        </div>
        <div className="panel glass">
          <p className="about-text">
            Experienced IT and software engineering professional with over twelve years of expertise spanning software development, IT infrastructure, ERP integrations, database systems, and enterprise support. Comfortable moving between writing production code, administering the servers it runs on, and supporting the people who depend on both — with hands-on skill in Python, PHP, Java, Laravel, Oracle, MySQL, SAP Business One, and IT service management.
          </p>
        </div>
      </div>
    </section>
  );
};
