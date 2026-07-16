import { ArrowUpRight } from 'lucide-react';
import { BrutalCard, ExternalLinkButton, Reveal, SectionLabel, Tag } from './BrutalUI';
import { arthakramPartners, credentials } from '@/data/portfolio';

const CertificationsSection = () => (
  <section id="credentials" className="section section--credentials">
    <div className="page-shell">
      <SectionLabel
        eyebrow="Evidence beyond the case study"
        title="PROOF_&_RECOGNITION"
        description="Open-source work, structured learning, and a student community built around practical product thinking."
      />

      <div className="credentials-layout">
        <Reveal>
          <BrutalCard accent="orange" className="leadership-card">
            <div className="leadership-logo">
              <img src="/organization-logos/arthakram.png" alt="Arthakram logo" width="200" height="200" loading="lazy" />
            </div>
            <p className="card-kicker">Former President | December 2025 - July 2026</p>
            <h3>Led Arthakram</h3>
            <p>
              I led a 50+ member product and consulting club through client mandates, product work, case
              competitions, and operator-led learning. The point was practical output, not another campus title.
            </p>
            <ul className="leadership-work">
              <li>Worked on an 18% profit-margin supply-chain mandate for the Government of Lakshadweep.</li>
              <li>Led partner work spanning Velectron Labs, Addictofree, Progience Technologies, and Almabase.</li>
              <li>Won competitions during my term at Masters' Union, BITS Pilani School of Business, and NSUT.</li>
              <li>Coordinated 50+ members across consulting mandates, product work, and operator-led learning.</li>
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

        <div className="credentials-proof-column">
          <div className="credential-grid">
            {credentials.map((credential) => {
              const content = (
                <>
                  {credential.logo ? (
                    <img className="credential-logo" src={credential.logo} alt={credential.logoAlt} loading="lazy" />
                  ) : null}
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

          <div className="partner-proof-card">
            <p className="card-kicker">Organization-level work</p>
            <h3>Arthakram partner network</h3>
            <p>Organizations engaged through Arthakram’s product, consulting, research, and execution work.</p>
            <div className="partner-logos" aria-label="Arthakram partner organizations">
              {arthakramPartners.map((partner) => {
                const mark = (
                  <>
                    <img src={partner.logo} alt={partner.logoAlt} loading="lazy" />
                    <span>{partner.name}</span>
                  </>
                );

                return 'href' in partner && partner.href ? (
                  <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" title={partner.name}>
                    {mark}
                  </a>
                ) : (
                  <div key={partner.name} className="partner-logo-tile">
                    {mark}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
