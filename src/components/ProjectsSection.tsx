import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'Email Spam Filter',
    description: 'Machine learning-based email classification system that automatically detects and filters spam emails with high accuracy.',
    techStack: ['Python', 'Flask', 'GenAI', 'Machine Learning'],
    github: 'https://github.com/rish106-hub/EmailSpamFilter',
    image: '/Email-spam.jpeg'
  },
  {
    title: 'University Website Clone',
    description: 'A responsive clone of a university website with modern UI elements and user-friendly navigation.',
    techStack: ['HTML', 'CSS', 'Git', 'Vercel'],
    github: 'https://github.com/rish106-hub/rish106-hub.github.io.git',
    demo: 'https://rish106-hub-github-io.vercel.app',
    image: '/University_clone.jpeg'
  },
  {
    title: 'ShopScore ',
    description: 'A modern, responsive ecommerce website with smooth animations and interactive elements.',
    techStack: ['HTML', 'CSS', 'JavaScript' , 'React' , 'Git'],
    github: 'https://github.com/rish106-hub/ShopScore_Capstone_Sem_2',
    demo: 'https://shop-score-capstone-sem-2.vercel.app',
    image: '/Shopscore.jpeg'
  },
  {
    title: 'Zerodha MCP',
    description: 'An AI Agent and MCP server made on Zerodha to automate and simulate real-time trading operations.',
    techStack: ['Zerodha SDK', 'Claude', 'MCP'],
    github: 'https://github.com/rish106-hub/Zerodha_mcp',
    demo: 'https://github.com/rish106-hub/Zerodha_mcp',
    image: '/Coffee.jpeg'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="heading-accent">My Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore my recent work spanning web development, AI, and more.
            Each project represents my commitment to creating impactful solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/40 rounded-xl overflow-hidden border border-primary/5 shadow-sm group card-hover-effect"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                />
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-neutral-900/80 border border-gray-300 dark:border-gray-700 rounded-full shadow-md hover:scale-110 transition-transform"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} className="text-black dark:text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-neutral-900/80 border border-gray-300 dark:border-gray-700 rounded-full shadow-md hover:scale-110 transition-transform"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={20} className="text-black dark:text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/5 rounded-full text-xs flex items-center gap-1"
                    >
                      <Code size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
