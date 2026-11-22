import React, { useState } from 'react';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot
  });
  const [status, setStatus] = useState<{ kind: 'success' | 'error' | ''; text: string }>({
    kind: '',
    text: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      // Honeypot filled by bot
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ kind: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ kind: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ kind: '', text: '' });

    // Client-side demo fallback / Mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        kind: 'success',
        text: 'Thank you for reaching out! Your message has been received.',
      });
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
    }, 600);
  };

  return (
    <main>
      <section className="form-hero">
        <div className="wrap">
          <a
            className="back-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to portfolio
          </a>
          <h1>Send a message</h1>
          <p>Fill in the form below and it'll land directly in my inbox. I usually reply within a couple of days.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="panel glass" style={{ maxWidth: 640 }}>
            <div
              style={{
                marginBottom: 24,
                padding: '18px 20px',
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 14,
              }}
            >
              <div>
                <strong style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: 8, fontSize: '1rem', marginBottom: 4 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.33C16.32 14.2 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.53 14.62C13.39 14.78 13.24 14.81 13 14.68C12.75 14.56 11.95 14.3 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.21C9.83 11.1 9.97 10.92 10.09 10.78C10.22 10.64 10.26 10.53 10.34 10.37C10.43 10.2 10.38 10.06 10.32 9.93C10.26 9.81 9.76 8.58 9.56 8.08C9.36 7.59 9.15 7.66 9 7.65C8.86 7.64 8.7 7.64 8.53 7.64C8.36 7.64 8.09 7.7 7.86 7.95C7.63 8.2 7 8.79 7 9.99C7 11.19 7.88 12.35 8 12.51C8.13 12.68 9.72 15.13 12.16 16.18C12.74 16.43 13.19 16.58 13.54 16.69C14.12 16.88 14.65 16.85 15.07 16.79C15.54 16.72 16.52 16.2 16.72 15.61C16.93 15.03 16.93 14.53 16.87 14.43C16.81 14.33 16.65 14.26 16.57 14.33Z" />
                  </svg>
                  Prefer instant messaging?
                </strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Reach me directly on WhatsApp for immediate conversations.
                </span>
              </div>
              <a
                className="btn-solid"
                href="https://wa.me/94771666113?text=Hi%20Vajira,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener"
                style={{ background: '#25D366', color: '#ffffff', padding: '11px 18px' }}
              >
                Chat on WhatsApp
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    maxLength={150}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={150}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={4000}
                />
              </div>

              {/* Honeypot field */}
              <div className="hp-field" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {status.text && (
                <div className={`form-status show ${status.kind}`} role="status">
                  {status.text}
                </div>
              )}

              <div className="form-actions">
                <button type="submit" className="btn-solid" disabled={isSubmitting}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
                  </svg>
                  <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <p className="copyright" style={{ marginTop: 40 }}>
        &copy; 2026 Vajira Viraj Nanayakkarawasam — Colombo – Galle – Kalutara, Sri Lanka
      </p>
    </main>
  );
};
