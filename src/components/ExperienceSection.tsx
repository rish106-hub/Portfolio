import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    position: 'Product Intern',
    company: 'Newton School (Incanus Technologies Pvt. Ltd.)',
    period: 'Mar 2026 - May 2026',
    location: 'Bangalore, Karnataka, India',
    description:
      'Worked on product strategy, learner research, and growth analytics for EdTech initiatives during a two-month internship that began on March 16, 2026.',
    achievements: [
      'Contributed to product roadmap definition and sprint planning for EdTech features at Newton School.',
      'Conducted user research and synthesized learner insights to identify onboarding drop-off points.',
      'Tracked growth KPIs and ran experiments to improve learner retention and engagement metrics.',
    ],
  },
  {
    position: 'Product and Growth Associate Intern',
    company: 'Enzo Lab | Product Design, UX/UI & Strategy Studio',
    period: 'Jul 2025 - Oct 2025',
    location: 'Delhi NCR, Haryana, India',
    description:
      'Working close to product and strategy leaders on research, growth inputs, and initiatives that sharpen my understanding of user needs and execution tradeoffs.',
    achievements: [
      'Drove homepage and funnel revamps across Scaler, ASU, Allen Digital, Wiom, Cintana Education, and Intellify, reducing conversion drop-offs and improving customer acquisition.',
      'Built the Product × People podcast workflow from content research to guest mapping.',
      "Scaled Enzo Lab's LinkedIn community by ~50% in 3 months.",
    ],
  },
  {
    position: "Founder's Office Intern",
    company: 'Rishihood University',
    period: 'Feb 2025 - Jul 2025',
    location: 'Delhi NCR, Haryana, India',
    description:
      'Worked on strategic initiatives with leadership teams, giving me hands-on exposure to problem discovery, cross-functional alignment, and high-context execution.',
    achievements: [
      'Led designing of a next-gen comms. curriculum for 700+ learners, aligning with industry standards.',
      'Improved learner outcomes and employability through measurable, results-driven initiatives.',
    ],
  },
  {
    position: 'Automation Intern',
    company: 'bnBeyond',
    period: 'Nov 2024 - Dec 2024',
    location: 'Remote, Dubai, UAE',
    description:
      'Built automation-led solutions while learning how operational bottlenecks, cost structures, and acquisition problems connect back to product and business decisions.',
    achievements: [
      'Increased fiscal efficiency by 20% within 15 days through structured frameworks.',
      'Raised guest acquisition rate from 5% to 15% in 25 days through targeted strategies.',
      'Reduced customer acquisition cost by 5% via effective cost management and process optimisation.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="heading-accent">Work Experience</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Each role has strengthened the same core muscle: translating ambiguity into product, growth, and execution outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((experience) => (
            <motion.div
              key={`${experience.company}-${experience.position}`}
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
                    Key Contributions
                  </h5>

                  <ul className="space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
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
