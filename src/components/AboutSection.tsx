import { BrutalCard, Reveal, SectionLabel, Tag } from './BrutalUI';
import { profileCards, proofPoints, skillGroups } from '@/data/portfolio';

const AboutSection = () => (
  <>
    <section id="profile" className="section section--paper">
      <div className="page-shell">
        <SectionLabel
          eyebrow="The short version"
          title="PROFILE"
          description="I sit between product, engineering, and operations. The job is to find the real constraint, make the system understandable, and get something useful into people’s hands."
        />
        <Reveal className="profile-grid">
          {profileCards.map((card) => (
            <BrutalCard key={card.title} accent={card.accent} className="profile-card">
              <span className="card-icon" aria-hidden="true">
                {card.icon}
              </span>
              <p className="card-kicker">{card.title}</p>
              <h3>{card.headline}</h3>
              <ul>
                {card.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </BrutalCard>
          ))}
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
                <span className="proof-icon" aria-hidden="true">
                  {proof.icon}
                </span>
                <p className="card-kicker">{proof.context}</p>
                <h3>{proof.title}</h3>
                <p>{proof.description}</p>
                <div className="tag-row">
                  {proof.tags.map((tag) => (
                    <Tag key={tag} accent={proof.accent}>
                      {tag}
                    </Tag>
                  ))}
                </div>
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
          eyebrow="Tools are supporting actors"
          title="BUILDER_STACK"
          description="Enough range to move from problem framing to a working prototype, then test whether the product deserves to exist."
        />
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.category}>
              <div className={`stack-group accent-${group.accent}`}>
                <h3>{group.category}</h3>
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
