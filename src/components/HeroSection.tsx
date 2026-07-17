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
      <motion.div
        className="hero-drop hero-drop--orange"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: -240, rotate: -28, scale: 0.72 }}
        animate={{ opacity: 1, y: 0, rotate: -12, scale: 1 }}
        transition={{ type: 'spring', stiffness: 115, damping: 12, delay: 0.22 }}
      >
        SHIP
      </motion.div>
      <motion.div
        className="hero-drop hero-drop--blue"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: -280, rotate: 26, scale: 0.68 }}
        animate={{ opacity: 1, y: 0, rotate: 9, scale: 1 }}
        transition={{ type: 'spring', stiffness: 108, damping: 13, delay: 0.3 }}
      >
        TEST
      </motion.div>
      <motion.div
        className="hero-drop hero-drop--mint"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: -190, rotate: -20, scale: 0.72 }}
        animate={{ opacity: 1, y: 0, rotate: 6, scale: 1 }}
        transition={{ type: 'spring', stiffness: 122, damping: 13, delay: 0.38 }}
      >
        LEARN
      </motion.div>
      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.34, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tag accent="mint">Available for ambitious teams</Tag>
          </motion.div>
          <motion.p
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            Product judgment. Technical direction. Real execution.
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28, skewY: 2 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            AI PRODUCT
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, x: -34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              BUILDER
            </motion.span>
          </motion.h1>
          <motion.p
            className="hero-summary"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            I turn ambiguous problems into usable AI systems and products, from recruiter workflows and
            voice assessment to fintech and developer tools.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
          <div className="hero-proof" aria-label="Reach and commercial outcomes">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.36, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <strong>5M+</strong>
              <span>potential product reach</span>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.36, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <strong>$40k</strong>
              <span>commercial value influenced</span>
            </motion.div>
          </div>
          <motion.p
            className="hero-impact-region"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
          >
            Work shipped across <strong>India</strong>, <strong>USA</strong>, <strong>France</strong> and <strong>UAE</strong>.
          </motion.p>
        </motion.div>

        <motion.div
          className="workbench"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={reduceMotion ? undefined : { y: -8, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 135, damping: 16, delay: 0.12 }}
          aria-label="Rishav Dewan, AI product builder"
        >
          <motion.div
            className="workbench-note workbench-note--build"
            initial={reduceMotion ? false : { opacity: 0, x: -24, y: 18, rotate: -14 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
            transition={{ duration: 0.42, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            BUILD
          </motion.div>
          <motion.div
            className="workbench-note workbench-note--product"
            initial={reduceMotion ? false : { opacity: 0, x: 24, y: -18, rotate: 12 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 7 }}
            transition={{ duration: 0.42, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            PRODUCT
          </motion.div>
          <motion.div
            className="workbench-note workbench-note--operate"
            initial={reduceMotion ? false : { opacity: 0, x: 28, y: 18, rotate: -10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
            transition={{ duration: 0.42, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            OPERATE
          </motion.div>
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
          <motion.div
            className="workbench-badge workbench-badge--status"
            initial={reduceMotion ? false : { opacity: 0, y: 36, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 130, damping: 15, delay: 0.7 }}
          >
            <span aria-hidden="true">●</span> Open to opportunities
          </motion.div>
          <motion.div
            className="workbench-badge workbench-badge--location"
            initial={reduceMotion ? false : { opacity: 0, x: 30, y: 20, rotate: 12 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 130, damping: 15, delay: 0.76 }}
          >
            📍 Delhi NCR
          </motion.div>
          <motion.div
            className="workbench-code"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, x: -34, y: 22, rotate: -6 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 130, damping: 15, delay: 0.68 }}
          >
            <span>IF</span> problem_is_messy
            <br />
            <span>THEN</span> make_it_testable
          </motion.div>
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
