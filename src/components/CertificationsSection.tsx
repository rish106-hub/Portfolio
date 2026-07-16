import { ArrowUpRight } from 'lucide-react';
import { BrutalCard, ExternalLinkButton, Reveal, SectionLabel, Tag } from './BrutalUI';
import { credentials } from '@/data/portfolio';

const CertificationsSection = () => (
  <section id="credentials" className="section section--credentials">
    <div className="page-shell">
      <SectionLabel
        eyebrow="Evidence beyond the case study"
        title="PROOF_&_RECOGNITION"
        description="Open-source work, structured learning, competition wins, and a student community built around practical product thinking."
      />

      <div className="credentials-layout">
        <Reveal>
          <BrutalCard accent="orange" className="leadership-card">
            <p className="card-kicker">Former President | December 2025 - July 2026</p>
            <h3>Led Arthakram</h3>
            <p>
              I led a 50+ member product and consulting club through client mandates, product work, case
              competitions, and operator-led learning. The point was practical output, not another campus title.
            </p>
            <ul className="leadership-work">
              <li>Worked on an 18% profit-margin supply-chain mandate for the Government of Lakshadweep.</li>
              <li>Contributed to Apollo MedSkills work that produced a 7% traffic uplift and 13% conversion improvement.</li>
              <li>Worked with Electron Labs on product thinking for Aadi.</li>
            </ul>
            <div className="leadership-stats">
              <div>
                <strong>50+</strong>
                <span>members</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>mandates</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>wins</span>
              </div>
            </div>
            <ExternalLinkButton
              href="https://www.linkedin.com/company/arthakram/"
              target="_blank"
              rel="noreferrer"
              variant="dark"
              showIcon
            >
              View Arthakram
            </ExternalLinkButton>
          </BrutalCard>
        </Reveal>

        <div className="credential-grid">
          {credentials.map((credential) => {
            const content = (
              <>
                <Tag accent={credential.accent}>Verified proof</Tag>
                <h3>{credential.label}</h3>
                <p>{credential.detail}</p>
                {credential.href ? <ArrowUpRight size={22} aria-hidden="true" /> : null}
              </>
            );

            return credential.href ? (
              <a
                key={credential.label}
                href={credential.href}
                target="_blank"
                rel="noreferrer"
                className={`credential-card accent-${credential.accent}`}
              >
                {content}
              </a>
            ) : (
              <div key={credential.label} className={`credential-card accent-${credential.accent}`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
