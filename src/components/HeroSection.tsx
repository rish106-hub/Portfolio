import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ExternalLinkButton, Tag } from './BrutalUI';
import { resumeHref } from '@/data/portfolio';

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

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
            <ExternalLinkButton variant="secondary" href={resumeHref} download="Rishav_Dewan_Resume.pdf">
              Download resume
            </ExternalLinkButton>
          </div>
          <div className="hero-proof" aria-label="Portfolio highlights">
            <div>
              <strong>5M+</strong>
              <span>people-scale org footprint</span>
            </div>
            <div>
              <strong>550K+</strong>
              <span>Veeam customer organizations</span>
            </div>
            <div>
              <strong>17</strong>
              <span>merged open-source PRs</span>
            </div>
          </div>
          <p className="hero-proof-note">Organization-wide scale, not a claim that every person used my work.</p>
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
    </section>
  );
};

export default HeroSection;
