
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: 'https://github.com/username', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/username', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/username', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="font-heading text-2xl font-bold">Rishav Dewan</a>
            <p className="mt-2 text-primary-foreground/80 max-w-md">
              Creating intelligent, beautiful, and user-centric digital experiences
              that merge technology with creativity.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm flex items-center gap-1">
            &copy; {currentYear} Rishav Dewan. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>using modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
