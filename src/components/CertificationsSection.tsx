import { ArrowUpRight, Github } from 'lucide-react';
import { BrutalCard, ExternalLinkButton, NumericText, Reveal, SectionLabel, Tag } from './BrutalUI';
import { arthakramInstitutionalWins, arthakramPartners, credentials } from '@/data/portfolio';

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
              <li><NumericText>Worked on an 18% profit-margin supply-chain mandate for the Government of Lakshadweep.</NumericText></li>
              <li>Led partner work spanning Velectron Labs, Addictofree, Progience Technologies, and Almabase.</li>
              <li><NumericText>Coordinated 50+ members across consulting mandates, product work, and operator-led learning.</NumericText></li>
            </ul>
            <div className="institutional-wins" aria-label="Competition wins at partner institutions">
              <p className="card-kicker">Competition wins at</p>
              <div className="institutional-wins__logos">
                {arthakramInstitutionalWins.map((institution) => (
                  <a
                    key={institution.name}
                    href={institution.href}
                    target="_blank"
                    rel="noreferrer"
                    className="institutional-win"
                    title={institution.name}
                  >
                    <span className="institutional-win__logo-wrap">
                      <img
                        src={institution.logo}
                        alt={institution.logoAlt}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.hidden = true;
                        }}
                      />
                      <span className="institutional-win__fallback" aria-hidden="true">
                        {institution.fallbackMark}
                      </span>
                    </span>
                    <span>{institution.name}</span>
                  </a>
                ))}
              </div>
            </div>
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
                  {credential.badgeIcon === 'github' ? (
                    <span className="credential-badge-icon" aria-label="GitHub">
                      <Github size={29} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  ) : null}
                  {credential.logo ? (
                    <img className="credential-logo" src={credential.logo} alt={credential.logoAlt} loading="lazy" />
                  ) : null}
                  <Tag accent={credential.accent}>Verified proof</Tag>
                  <h3><NumericText>{credential.label}</NumericText></h3>
                  <p><NumericText>{credential.detail}</NumericText></p>
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
