import { ArrowUpRight } from 'lucide-react';
import { BrutalCard, ExternalLinkButton, NumericText, Reveal, SectionLabel, Tag } from './BrutalUI';
import { ownershipStories, profileCards, proofPoints, skillGroups } from '@/data/portfolio';

const AboutSection = () => (
  <>
    <section id="profile" className="section section--paper">
      <div className="page-shell">
        <SectionLabel
          eyebrow="The short version"
          title="PROFILE"
          description="I work across product definition, technical delivery, and operating cadence. The job is to identify the real constraint, make the decision system understandable, and ship something that can be measured."
        />
        <Reveal className="profile-grid">
          {profileCards.map((card) => (
            <BrutalCard key={card.title} accent={card.accent} className="profile-card">
              {card.logo ? (
                <div className="profile-mark">
                  <img src={card.logo} alt={card.logoAlt ?? ''} loading="lazy" />
                </div>
              ) : (
                <span className="card-icon" aria-hidden="true">
                  {card.icon}
                </span>
              )}
              <p className="card-kicker">{card.title}</p>
              <h3>{card.headline}</h3>
              <ul>
                {card.lines.map((line) => (
                  <li key={line}><NumericText>{line}</NumericText></li>
                ))}
              </ul>
            </BrutalCard>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="impact-section" aria-labelledby="ownership-ledger-title">
      <div className="page-shell">
        <Reveal className="impact-ledger">
          <div className="impact-total">
            <p className="card-kicker">Built. Changed. Measured.</p>
            <strong>6</strong>
            <h2 id="ownership-ledger-title">outcomes where I owned the work</h2>
            <p>
              Six systems and mandates where I shaped the product, operating model, or measurable result.
            </p>
          </div>
          <div className="impact-org-grid">
            {ownershipStories.map((story) => {
              const content = (
                <>
                  <div className="impact-org__brand">
                    <span>{story.eyebrow}</span>
                    <img src={story.logo} alt={story.logoAlt} loading="lazy" />
                  </div>
                  <div className="impact-org__metric">
                    <b>{story.metric}</b>
                    <span>{story.metricLabel}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <p><NumericText>{story.description}</NumericText></p>
                  {story.href ? <ArrowUpRight size={19} aria-hidden="true" /> : null}
                </>
              );

              return story.href ? (
                <a
                  key={story.title}
                  className={`impact-org impact-org--story accent-${story.accent}`}
                  href={story.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${story.title}: ${story.metric} ${story.metricLabel}`}
                >
                  {content}
                </a>
              ) : (
                <article key={story.title} className={`impact-org impact-org--story accent-${story.accent}`}>
                  {content}
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>

    <section id="work" className="section section--work">
      <div className="page-shell">
        <SectionLabel
          eyebrow="Four systems, four real constraints"
          title="WORK_I’M_PROUD_OF"
          description="The strongest thread through my work is not a specific stack. It is turning a vague, high-context problem into a system people can inspect, use, and improve."
        />
        <div className="proof-grid">
          {proofPoints.map((proof) => (
            <Reveal key={proof.title}>
              <BrutalCard accent={proof.accent} className="proof-card">
                {proof.invitation ? <span className="proof-invitation">{proof.invitation}</span> : null}
                <span className="proof-icon" aria-hidden="true">
                  {proof.icon}
                </span>
                <p className="card-kicker">{proof.context}</p>
                <h3>{proof.title}</h3>
                <p><NumericText>{proof.description}</NumericText></p>
                <div className="tag-row">
                  {proof.tags.map((tag) => (
                    <Tag key={tag} accent={proof.accent}>
                      <NumericText>{tag}</NumericText>
                    </Tag>
                  ))}
                </div>
                {proof.links?.map((link) => (
                  <ExternalLinkButton
                    key={link.href}
                    className="proof-source"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    showIcon
                  >
                    {link.label}
                  </ExternalLinkButton>
                ))}
              </BrutalCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--stack" aria-labelledby="stack-title">
      <div className="page-shell">
        <SectionLabel
          id="stack-title"
          eyebrow="A practical operating toolkit"
          title="BUILDER_STACK"
          description="Six distinct capability areas used in sequence: define the problem, measure behavior, build the workflow, evaluate AI, analyze the business, and keep delivery moving."
        />
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.category}>
              <div className={`stack-group accent-${group.accent}`}>
                <h3>{group.category}</h3>
                <p>{group.description}</p>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <Tag key={item} accent={group.accent}>
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutSection;
