
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hey there! I'm Rishav Dewan – a passionate tech enthusiast blending AI, automation, and modern web experiences!";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="hero-text mb-8 leading-tight">
            {text}
            <span className="inline-block w-1 h-6 bg-primary ml-1 animate-cursor-blink"></span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Creating intelligent, beautiful, and user-centric digital experiences
            that merge technology with creativity.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              Let's Connect
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border border-primary/20 rounded-lg transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              View My Work
            </a>
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
      
      {/* Background abstract shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
