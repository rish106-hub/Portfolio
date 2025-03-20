
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Define loader animation variants
  const loaderVariants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 }
  };

  const logoVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      scale: 1.1, 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center mb-8"
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-4 relative"
              >
                <span className="text-primary">Rishav</span>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-primary/70"
                >
                  {" "}Dewan
                </motion.span>
              </motion.h1>

              <motion.div 
                className="h-1 w-0 bg-primary mx-auto rounded-full overflow-hidden"
                animate={{ width: ["0%", "80%", "30%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  times: [0, 0.4, 0.7, 1],
                  ease: "easeInOut" 
                }}
              />
            </motion.div>

            <motion.div 
              className="flex items-center justify-center gap-2"
              variants={loaderVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Loader2 size={20} className="animate-spin text-primary/70" />
              <p className="text-foreground/60 text-sm">Loading portfolio...</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <MouseFollower />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
