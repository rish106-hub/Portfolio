import { ArrowUpRight, MapPin, Youtube } from 'lucide-react';
import { BrutalCard, NumericText, Reveal, SectionLabel, Tag } from './BrutalUI';
import { experiences } from '@/data/portfolio';

const ExperienceSection = () => (
  <section id="experience" className="section section--experience">
    <div className="page-shell">
      <SectionLabel
        eyebrow="Where the operating muscle came from"
        title="EXPERIENCE"
        description="A mix of AI evaluation, product building, growth work, founder’s-office execution, and automation."
      />

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`}>
            <BrutalCard accent={experience.accent} className="experience-card">
              <div className="experience-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="experience-heading">
                <div className="experience-company">
                  <div className={`company-logo company-logo--${experience.logoMode}`}>
                    <img
                      src={experience.logo}
                      alt={experience.logoAlt}
                      width={experience.logoMode === 'wordmark' ? 132 : 72}
                      height="72"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="card-kicker">{experience.role}</p>
                    <h3>{experience.company}</h3>
                  </div>
                </div>
                <div className="experience-meta">
                  <span><NumericText>{experience.period}</NumericText></span>
                  <span>
                    <MapPin size={15} aria-hidden="true" /> {experience.location}
                  </span>
                </div>
              </div>
              <div className="experience-body">
                <p className="experience-summary"><NumericText>{experience.summary}</NumericText></p>
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}><NumericText>{achievement}</NumericText></li>
                  ))}
                </ul>
              </div>
              <div className="tag-row">
                {experience.stack.map((item) => (
                  <Tag key={item} accent={experience.accent}>
                    <NumericText>{item}</NumericText>
                  </Tag>
                ))}
              </div>
              {experience.featureLinks?.length ? (
                <div className="experience-feature-links">
                  {experience.featureLinks.map((link) => (
                    <a
                      key={link.href}
                      className={`experience-feature-link experience-feature-link--${link.kind}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.kind === 'youtube' ? <Youtube size={28} aria-hidden="true" /> : <span aria-hidden="true">K</span>}
                      <span>
                        <small>{link.eyebrow}</small>
                        <strong>{link.label}</strong>
                      </span>
                      <ArrowUpRight size={22} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : null}
            </BrutalCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
