
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// Certification data
const certifications = [
  {
    title: 'Google Digital Marketing and E-Commerce Professional Certificate',
    issuer: 'Google',
    date: 'Dec 2024',
    link: 'https://www.credly.com/badges/a37ea25d-b4a6-4ac7-9087-2bd508f77037/linked_in_profile',
    image: '/Google_prof_DM.jpeg'
  },
  {
    title: 'Python for Data Science and AI ',
    issuer: 'IBM',
    date: 'November 2024',
    link: 'https://www.credly.com/badges/8c5ca7d7-6f65-4858-b739-9ff3e0a80d77/linked_in_profile',
    image: '/IBM.jpeg'
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM via Coursera',
    date: 'October 2022',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'August 2022',
    link: '#',
    image: '/placeholder.svg'
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

const CertificationsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            <span className="heading-accent">Certifications</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Professional qualifications and continued learning achievements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group bg-white/40 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-32 bg-secondary relative flex items-center justify-center p-4">
                <Award size={40} className="text-primary/40" />
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-2">{cert.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary">{cert.issuer}</span>
                  <span className="text-foreground/60">{cert.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
