
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: 'https://github.com/username', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/username', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/username', label: 'Instagram' },
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

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="heading-accent">Get In Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <motion.div variants={itemVariants} className="bg-white/40 dark:bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary/5 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:contact@example.com" className="text-foreground/80 hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-foreground/80">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/40 dark:bg-foreground/5 backdrop-blur-sm rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                  aria-label={social.label}
                >
                  <div className="text-primary">
                    {social.icon}
                  </div>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
