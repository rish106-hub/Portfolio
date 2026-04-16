import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

const highlights = [
  {
    label: 'PM Lens',
    value: 'Discovery to execution',
  },
  {
    label: 'Focus',
    value: 'AI-native product systems',
  },
  {
    label: 'Leadership',
    value: 'Arthakram',
  },
];

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Product Management • Growth • Strategy
          </motion.div>

          <h1 className="hero-text mt-8 mb-6 leading-tight max-w-4xl">Product, Growth, Execution</h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            I work on startup-focused products across AI, fintech, hiring, and growth systems,
            with hands-on experience in research, strategy, funnels, and shipping.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              View Product Work
            </button>
            <a
              href="https://www.producthunt.com/@rishav_dewan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-primary/20 rounded-lg transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 duration-300 inline-flex items-center gap-2"
            >
              Product Hunt Profile
              <ExternalLink size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary/10 bg-background/70 backdrop-blur-sm p-5 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about">
          <ArrowDown size={24} />
        </a>
      </motion.div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
