
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Users, ThumbsUp, BookOpen, Trophy, GitBranch, ExternalLink } from 'lucide-react';

// Education Timeline data
const education = [
  {
    period: '2022 - 2024',
    institution: 'B.Tech in Computer Science',
    details: 'Newton School of Technology'
  },
  {
    period: '2022 - 2024',
    institution: 'High School',
    details: 'PURV International School'
  },
  {
    period: '2011 - 2022',
    institution: 'Matriculation',
    details: 'St. Xaviers School, Durgapur'
  }
];

// Coding Profiles data
const codingProfiles = [
  { label: 'LeetCode', href: 'https://leetcode.com/username', description: 'Problem solving and algorithms' },
  { label: 'CodeChef', href: 'https://codechef.com/users/username', description: 'Competitive programming' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/username', description: 'Advanced algorithmic challenges' },
];

// Skills data
const skills = [
  { 
    category: 'Programming', 
    icon: <Code size={24} />,
    items: ['HTML', 'CSS', 'JavaScript', 'Python'] 
  },
  { 
    category: 'Version Control', 
    icon: <GitBranch size={24} />,
    items: ['Git', 'Mercurial'] 
  },
  { 
    category: 'Soft Skills', 
    icon: <Users size={24} />,
    items: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'] 
  },
  { 
    category: 'Others', 
    icon: <ThumbsUp size={24} />,
    items: ['Social Media', 'Content Creation', 'UI/UX Design'] 
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

const AboutSection = () => {
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
            <span className="heading-accent">About Me</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A passionate tech enthusiast with a love for building innovative solutions 
            and exploring the intersection of technology and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education and Coding Profiles Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10 lg:col-span-5"
          >
            {/* Education Timeline */}
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
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-1 font-medium text-sm text-foreground/60">
                      {item.period}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.institution}</h4>
                    <p className="text-foreground/80">{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Coding Profiles */}
            <div className="bg-background/70 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Code size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">Coding Profiles</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group block p-4 bg-background/80 dark:bg-foreground/5 rounded-lg border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{profile.label}</h4>
                    <p className="text-foreground/70 text-sm mb-2">{profile.description}</p>
                    <div className="text-sm text-primary flex items-center gap-1 opacity-80 group-hover:opacity-100">
                      <span>View Profile</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-background/70 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Trophy size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">Skills & Expertise</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    variants={itemVariants}
                    className="bg-background/80 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {skillGroup.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1.5 bg-primary/5 hover:bg-primary/10 rounded-full text-sm font-medium transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
