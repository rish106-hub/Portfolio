import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let minimumTimer: number | undefined;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - startedAt;
      minimumTimer = window.setTimeout(() => setIsLoading(false), Math.max(0, 700 - elapsed));
    };

    const onLoad = () => finish();
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', onLoad, { once: true });

    const maximumTimer = window.setTimeout(finish, 1800);

    return () => {
      window.removeEventListener('load', onLoad);
      if (minimumTimer) window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.35 }}
            role="status"
            aria-live="polite"
          >
            <div className="loader-sticker">BUILDING THE USEFUL PART</div>
            <motion.div
              className="loader-name"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span>RISHAV</span>
              <strong>DEWAN</strong>
            </motion.div>
            <div className="loader-track" aria-hidden="true">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: reduceMotion ? 0.05 : 1.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p>Loading portfolio...</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
