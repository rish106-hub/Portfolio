import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

// Experience data
const experiences = [
  {
    position: "Product and Growth Associate Intern",
    company: "Enzo Lab | Product Design, UX/UI & Strategy Studio",
    period: "Jul 2025 - current",
    location: "Delhi NCR, Haryana , India",
    description: "Worked closely with the founding team on strategic initiatives and project management. Contributed to academic planning and community engagement efforts.",
    achievements: [
      "Conducting in-depth market research and competitive analysis to identify user needs, product gaps, and actionable insights.",
      "Supporting growth strategy execution by tracking KPIs, improving engagement, and contributing to user acquisition campaigns.",
      "Collaborating cross-functionally with product, design, and content teams to drive innovation and streamline go-to-market efforts.",
    ]
  },
  {
    position: "Founder's Office Intern",
    company: "Rishihood University",
    period: "Feb 2025 - Jul 2025",
    location: "Delhi NCR, Haryana , India",
    description: "Worked closely with the founding team on strategic initiatives and project management. Contributed to academic planning and community engagement efforts.",
    achievements: [
      "Spearheaded the design and development of a next-generation communications curriculum for incoming learners, setting new benchmarks in education and hiring.",
      "Drove measurable improvements in learner performance and employability through outcome-focused initiatives."
    ]
  },
  {
    position: "Automation Intern",
    company: "bnBeyond",
    period: "Nov 2024 - Dec 2024",
    location: "Remote, Dubai, UAE",
    description: "Focused on developing automation solutions to improve business processes and workflow efficiency. Utilized Python and related technologies to build practical tools.",
    achievements: [
      "Optimized Fiscal Efficiency: Increased fiscal efficiency by 20% within 15 days through the implementation of structured frameworks.",
      "Boosted Guest Acquisition: Raised the company's guest acquisition rate from 5% to 15% within 25 days through targeted strategies.",
      "Reduced Acquisition Costs: Decreased customer acquisition costs by 5% through effective cost management and process optimization."
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="heading-accent">Professional Experience</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My journey through various roles that have shaped my skills and perspective.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-primary/5 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5">
                  <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
                  <h4 className="text-lg font-medium text-primary">{experience.company}</h4>
                  
                  <div className="flex items-center gap-2 mt-4 text-foreground/60">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 text-foreground/60">
                    <MapPin size={16} />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
                
                <div className="md:w-3/5">
                  <p className="text-foreground/80 mb-4">{experience.description}</p>
                  
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    Key Achievements
                  </h5>
                  
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => {
                      const [boldPart, ...rest] = achievement.split(':');
                      return (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            {rest.length > 0 ? (
                              <>
                                <strong>{boldPart}:</strong>
                                {rest.join(':')}
                              </>
                            ) : (
                              achievement
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
