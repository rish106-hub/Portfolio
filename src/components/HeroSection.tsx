import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ExternalLinkButton, Tag } from './BrutalUI';
import { resumeOptions } from '@/data/portfolio';

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const [isResumeChooserOpen, setIsResumeChooserOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsResumeChooserOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-stripe hero-stripe--blue" aria-hidden="true" />
      <div className="hero-stripe hero-stripe--yellow" aria-hidden="true" />
      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tag accent="mint">Available for ambitious teams</Tag>
          <p className="hero-kicker">Product judgment. Technical direction. Real execution.</p>
          <h1>
            AI PRODUCT
            <span>BUILDER</span>
          </h1>
          <p className="hero-summary">
            I turn ambiguous problems into usable AI systems and products, from recruiter workflows and
            voice assessment to fintech and developer tools.
          </p>
          <div className="hero-actions">
            <ExternalLinkButton variant="primary" href="#work">
              See the work
            </ExternalLinkButton>
            <button
              className="brutal-button brutal-button--secondary"
              type="button"
              onClick={() => setIsResumeChooserOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isResumeChooserOpen}
            >
              Download resume
            </button>
          </div>
          <div className="hero-proof" aria-label="People reached through Rishav's work">
            <div>
              <strong>5M+</strong>
              <span>learner reach</span>
            </div>
            <div>
              <strong>2,000+</strong>
              <span>candidates screened through Mieru</span>
            </div>
            <div>
              <strong>850+</strong>
              <span>learners served through voice assessment</span>
            </div>
          </div>
          <p className="hero-impact-region">
            Work shipped across <strong>India</strong>, <strong>USA</strong>, <strong>France</strong>, and <strong>UAE</strong>.
          </p>
        </motion.div>

        <motion.div
          className="workbench"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Rishav Dewan, AI product builder"
        >
          <div className="workbench-note workbench-note--build">BUILD</div>
          <div className="workbench-note workbench-note--product">PRODUCT</div>
          <div className="workbench-note workbench-note--operate">OPERATE</div>
          <div className="portrait-frame">
            <div className="portrait-backdrop" aria-hidden="true" />
            <img
              src="/rishav-portrait.jpeg"
              alt="Rishav Dewan standing outdoors"
              width="906"
              height="1266"
              loading="eager"
            />
          </div>
          <div className="workbench-badge workbench-badge--status">
            <span aria-hidden="true">●</span> Open to opportunities
          </div>
          <div className="workbench-badge workbench-badge--location">📍 Delhi NCR</div>
          <div className="workbench-code" aria-hidden="true">
            <span>IF</span> problem_is_messy
            <br />
            <span>THEN</span> make_it_testable
          </div>
        </motion.div>
      </div>

      <a className="hero-scroll" href="#profile" aria-label="Continue to profile">
        <ArrowDown size={24} aria-hidden="true" />
      </a>

      {isResumeChooserOpen ? (
        <div className="resume-dialog-layer" role="presentation">
          <button
            className="resume-dialog-backdrop"
            type="button"
            aria-label="Close resume choices"
            onClick={() => setIsResumeChooserOpen(false)}
          />
          <motion.div
            className="resume-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="resume-dialog-close"
              type="button"
              onClick={() => setIsResumeChooserOpen(false)}
              aria-label="Close resume choices"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <p className="card-kicker">Choose your resume</p>
            <h2 id="resume-dialog-title">WHICH VERSION FITS?</h2>
            <p>Download the resume that matches the role you are considering.</p>
            <div className="resume-options">
              {resumeOptions.map((resume) => (
                <a key={resume.label} className="brutal-button brutal-button--primary" href={resume.href} target="_blank" rel="noreferrer">
                  {resume.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
