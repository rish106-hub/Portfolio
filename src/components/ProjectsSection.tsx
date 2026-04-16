import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket } from 'lucide-react';

const products = [
  {
    title: "ARTH — India's Tax Gap Intelligence App",
    role: 'Product + Mobile Fintech Build',
    description:
      'Flutter Android app for Indian taxpayers for FY 2026-27 that identifies missed deductions, compares old vs new tax regimes, and delivers prioritised action cards plus a shareable summary. 12.96M profile permutations tested.',
    focus: ['Flutter', 'Dart', 'Fastify', 'Node.js', 'PostgreSQL', 'Firebase'],
    link: 'https://arth-website.vercel.app',
    github: 'https://github.com/rish106-hub/ARTH',
    image: '/arth-project.jpeg',
  },
  {
    title: 'NextHire — AI Resume Screening Platform',
    role: 'Product + AI Hiring Workflow',
    description:
      'AI-powered recruiter tool that shortlists candidates from resume PDFs against a job description with iterative criteria refinement in natural language, field-level scoring, and a human-in-the-loop preview loop powered by Gemini 2.5 Flash.',
    focus: ['Next.js 16', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Gemini 2.5'],
    link: 'https://github.com/rish106-hub/ats-frontend',
    github: 'https://github.com/rish106-hub/ats-frontend',
    image: '/nexthire-project.svg',
  },
  {
    title: 'CostSense — Autonomous Cost Intelligence',
    role: 'Product + Multi-Agent Systems',
    description:
      '9-agent choreography pipeline that detects enterprise spend anomalies in real time, scores them by financial impact via the AS/APS model, and auto-executes low-risk resolutions or routes high-stakes decisions to a CFO approval gate. Built for ET Gen AI Hackathon 2026.',
    focus: ['FastAPI', 'Python', 'Gemini 2.5 Flash', 'LangChain', 'pgvector', 'Streamlit'],
    link: 'https://github.com/rish106-hub/CostSense',
    github: 'https://github.com/rish106-hub/CostSense',
    image: '/costsense-project.svg',
  },
  {
    title: 'Zerodha MCP',
    role: 'Builder + Product Owner',
    description:
      'An AI agent and MCP server for simulated trading workflows on Zerodha, designed around usability, real-time decision support, and automation value.',
    focus: ['Zerodha SDK', 'Claude', 'MCP'],
    link: 'https://github.com/rish106-hub/Zerodha_mcp',
    github: 'https://github.com/rish106-hub/Zerodha_mcp',
    image: '/Coffee.jpeg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            <span className="heading-accent">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Four products that reflect how I approach fintech, AI workflows, hiring systems,
            and autonomous decision support from a PM-builder lens.
          </p>
          <a
            href="https://www.producthunt.com/@rishav_dewan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:opacity-80 transition-opacity"
          >
            Explore my Product Hunt profile
            <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              className="bg-white/40 rounded-xl overflow-hidden border border-primary/5 shadow-sm group card-hover-effect"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{product.role}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                      aria-label={`View ${product.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                      aria-label={`Open ${product.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 mb-5 text-sm leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.focus.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary/5 rounded-full text-xs flex items-center gap-1"
                    >
                      <Rocket size={12} />
                      {item}
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
