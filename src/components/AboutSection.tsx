import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const education = [
  {
    period: '2024 - 2028',
    institution: 'B.Tech in Computer Science',
    details: 'Newton School of Technology',
  },
  {
    period: '2022 - 2024',
    institution: 'Higher Secondary',
    details: 'PURV International School',
  },
  {
    period: '2011 - 2022',
    institution: 'Matriculation',
    details: 'St. Xaviers School, Durgapur',
  },
];

const proofOfWork = [
  {
    label: 'Product Hunt',
    href: 'https://www.producthunt.com/@rishav_dewan',
    description: 'Products, launches, and public proof of execution.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishav-dewan/',
    description: 'Operator notes, growth work, and startup-facing product thinking.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rish106-hub',
    description: 'The build layer for product prototypes, AI systems, and working demos.',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@rishavdewan10',
    description: 'Long-form writing on product, systems, and market-facing ideas.',
  },
];

const socialProfiles = [
  { label: 'GitHub', href: 'https://github.com/rish106-hub', icon: <Github size={18} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishav-dewan/', icon: <Linkedin size={18} /> },
  { label: 'Product Hunt', href: 'https://www.producthunt.com/@rishav_dewan', icon: <Rocket size={18} /> },
  { label: 'Medium', href: 'https://medium.com/@rishavdewan10', icon: <BookOpen size={18} /> },
  { label: 'Email', href: 'mailto:rishavdewan10@gmail.com', icon: <Mail size={18} /> },
];

const skillGroups = [
  {
    category: 'Discovery',
    icon: <Target size={24} />,
    items: ['User research', 'Problem framing', 'JTBD thinking', 'Competitive analysis'],
  },
  {
    category: 'Strategy',
    icon: <BookOpen size={24} />,
    items: ['Market mapping', 'Positioning', 'Go-to-market support', 'Narrative building'],
  },
  {
    category: 'Execution',
    icon: <Workflow size={24} />,
    items: ['Roadmapping', 'Cross-functional collaboration', 'Experiment design', 'Launch planning'],
  },
  {
    category: 'Builder Stack',
    icon: <Rocket size={24} />,
    items: ['React', 'Next.js', 'Python', 'SQL', 'AI prototyping'],
  },
  {
    category: 'Growth',
    icon: <Users size={24} />,
    items: ['Engagement loops', 'Funnel thinking', 'Content-led growth', 'KPI tracking'],
  },
  {
    category: 'Leadership',
    icon: <Users size={24} />,
    items: ['Founder collaboration', 'Community building', 'Stakeholder communication', 'Ownership'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const AboutSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume-RISHAV DEWAN-20.pdf';
    link.download = 'Rishav_Dewan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-6 bg-background/80 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="heading-accent">Product Profile</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6">
            I bring a startup-style approach to product work: understand the user problem,
            identify the leverage point, align the narrative, and move fast enough to learn
            from the market. My work sits at the overlap of product, growth, and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10 lg:col-span-4"
          >
            <div className="bg-background/70 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">Education</h3>
              </div>

              <div className="space-y-6 pl-2">
                {education.map((item, index) => (
                  <motion.div
                    key={item.institution}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-1 font-medium text-sm text-foreground/60">{item.period}</div>
                    <h4 className="text-lg font-semibold mb-1">{item.institution}</h4>
                    <p className="text-foreground/80">{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-background/70 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Rocket size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">Proof of Work</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {proofOfWork.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group block p-4 bg-background/80 dark:bg-foreground/5 rounded-lg border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-foreground/70 text-sm mb-2">{item.description}</p>
                    <div className="text-sm text-primary flex items-center gap-1 opacity-80 group-hover:opacity-100">
                      <span>Open Link</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-background/70 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">Operating Style</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroups.map((skillGroup) => (
                  <motion.div
                    key={skillGroup.category}
                    variants={itemVariants}
                    className="bg-background/80 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{skillGroup.icon}</div>
                      <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-primary/5 hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <motion.div
                  variants={itemVariants}
                  className="bg-background/80 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialProfiles.map((profile) => (
                      <a
                        key={profile.label}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors"
                        aria-label={`Connect on ${profile.label}`}
                      >
                        {profile.icon}
                        <span className="text-sm font-medium">{profile.label}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-background/80 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center"
                >
                  <h4 className="text-lg font-semibold mb-4">Resume</h4>
                  <p className="text-sm text-foreground/70 mb-4 text-center">
                    A concise view of my product, growth, strategy, and execution work.
                  </p>
                  <Button onClick={handleDownloadResume} className="group flex items-center gap-2" size="lg">
                    <Download className="group-hover:translate-y-0.5 transition-transform" size={18} />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
