import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

const JourneyProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <div className="journey-progress" aria-hidden="true">
      <span>DISCOVERING_RISHAV</span>
      <div className="journey-progress__track">
        <motion.div className="journey-progress__fill" style={{ scaleX }} />
      </div>
      <span>END</span>
    </div>
  );
};

export default JourneyProgress;
