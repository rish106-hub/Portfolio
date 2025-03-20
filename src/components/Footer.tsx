
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
