
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
