import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lightbulb, Megaphone, Users } from 'lucide-react';

const pillars = [
  {
    title: 'Category and Audience',
    description:
      'Arthakram is positioned around practical product thinking, career leverage, and operator-first learning for ambitious early builders.',
    icon: <Users size={22} />,
  },
  {
    title: 'Content and Systems',
    description:
      'I work on the content engine, audience understanding, and delivery systems that keep the platform useful, repeatable, and sharp.',
    icon: <Lightbulb size={22} />,
  },
  {
    title: 'Positioning and Growth',
    description:
      'The focus is not just community building. It is building a clear point of view, strong distribution, and long-term trust with the right audience.',
    icon: <Megaphone size={22} />,
  },
];

const ArthakramSection = () => {
  return (
    <section id="arthakram" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-primary font-semibold mb-4">
              Leadership Spotlight
            </p>
            <h2 className="section-heading max-w-xl">
              <span className="heading-accent">Building Arthakram</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Arthakram is where I operate most directly as a founder-minded product builder.
              It has pushed me to think in terms of audience, positioning, content systems,
              distribution, and retention, not just features. That operating context has made
              my product judgment sharper and more market-aware.
            </p>

            <a
              href="https://www.linkedin.com/company/arthakram/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Arthakram
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1hNGjKxQnCJyF17fkxA8EgL_TFYd45gIw/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 ml-0 md:ml-4 px-6 py-3 rounded-lg border border-primary/20 bg-background/70 text-foreground hover:border-primary/40 transition-colors"
            >
              What we do
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-primary/10 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                </div>
                <p className="text-foreground/75 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArthakramSection;
