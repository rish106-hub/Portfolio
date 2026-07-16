import { Github } from 'lucide-react';
import { BrutalCard, ExternalLinkButton, Reveal, SectionLabel, Tag } from './BrutalUI';
import { projects, secondaryProjects } from '@/data/portfolio';

const ProjectsSection = () => (
  <section id="projects" className="section section--projects">
    <div className="page-shell">
      <SectionLabel
        eyebrow="Selected builds"
        title="FEATURED_PROJECTS"
        description="Four products that show different parts of the same practice: understand the user, make the decision logic explicit, and ship the smallest system that proves the point."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <BrutalCard accent={project.accent} className="project-card">
              <div className="project-image-wrap">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <span className={`project-stamp accent-${project.accent}`}>{project.role}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <Tag key={tag} accent={project.accent}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className="project-actions">
                  <ExternalLinkButton href={project.github} target="_blank" rel="noreferrer" showIcon>
                    <Github size={18} aria-hidden="true" /> GitHub
                  </ExternalLinkButton>
                  {project.live ? (
                    <ExternalLinkButton
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      showIcon
                    >
                      Open project
                    </ExternalLinkButton>
                  ) : null}
                </div>
              </div>
            </BrutalCard>
          </Reveal>
        ))}
      </div>

      <div className="secondary-projects">
        <p className="secondary-projects__label">More proof of work</p>
        {secondaryProjects.map((project) => (
          <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="mini-project">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <Tag key={tag} accent={project.accent}>
                  {tag}
                </Tag>
              ))}
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
