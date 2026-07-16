import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Reveal, SectionLabel } from './BrutalUI';
import { socialLinks } from '@/data/portfolio';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const subject = String(form.get('subject') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('Add your name, email, and message first.');
      return;
    }

    const lines = [
      `Hi Rishav, I’m ${name}.`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : '',
      '',
      message,
    ].filter((line, index, values) => line || (index > 0 && values[index - 1]));
    const params = new URLSearchParams({ text: lines.join('\n') });
    const whatsappUrl = `https://wa.me/919749452397?${params.toString()}`;

    setStatus('Opening WhatsApp with your message.');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="page-shell">
        <SectionLabel
          eyebrow="A useful conversation beats networking theatre"
          title="GET_IN_TOUCH"
          description="If you are building in AI, fintech, education, developer tools, or a messy category that needs sharper product thinking, send the context."
        />

        <div className="contact-layout">
          <Reveal className="social-grid">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`social-card accent-${link.accent}`}
              >
                <span className="social-icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.handle}</small>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span aria-hidden="true">✉</span>
                <div>
                  <p className="card-kicker">Start with the problem</p>
                  <h3>Send a message</h3>
                </div>
              </div>
              <div className="form-grid">
                <label>
                  Your name *
                  <input name="name" autoComplete="name" required placeholder="Name" />
                </label>
                <label>
                  Email *
                  <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                </label>
              </div>
              <label>
                Subject
                <input name="subject" placeholder="What are you building?" />
              </label>
              <label>
                Message *
                <textarea name="message" required rows={6} placeholder="The useful context, constraints, and what you need." />
              </label>
              <p className="form-note">This opens WhatsApp. Nothing is stored on this site.</p>
              <button className="brutal-button brutal-button--primary form-submit" type="submit">
                Open in WhatsApp <Send size={18} aria-hidden="true" />
              </button>
              <p className="form-status" aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
