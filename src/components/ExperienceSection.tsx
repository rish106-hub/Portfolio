import { MapPin } from 'lucide-react';
import { BrutalCard, Reveal, SectionLabel, Tag } from './BrutalUI';
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
                  <span>{experience.period}</span>
                  <span>
                    <MapPin size={15} aria-hidden="true" /> {experience.location}
                  </span>
                </div>
              </div>
              <div className="experience-body">
                <p className="experience-summary">{experience.summary}</p>
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="tag-row">
                {experience.stack.map((item) => (
                  <Tag key={item} accent={experience.accent}>
                    {item}
                  </Tag>
                ))}
              </div>
            </BrutalCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
