
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Code } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: 'https://github.com/username', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/username', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/username', label: 'Instagram' },
];

const codingProfiles = [
  { label: 'LeetCode', href: 'https://leetcode.com/username', description: 'Problem solving and algorithms' },
  { label: 'CodeChef', href: 'https://codechef.com/users/username', description: 'Competitive programming' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/username', description: 'Advanced algorithmic challenges' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Coding Profiles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Code size={24} className="text-primary" />
              <h3 className="text-2xl font-heading font-bold">Coding Profiles</h3>
            </div>
            
            <div className="space-y-6">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block p-6 bg-white/40 dark:bg-foreground/5 backdrop-blur-sm rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold mb-2">{profile.label}</h4>
                  <p className="text-foreground/80 mb-3">{profile.description}</p>
                  <div className="text-sm text-primary flex items-center gap-2">
                    <span>View Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
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
              
              <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  );
};

export default ContactSection;
