
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isClickable = 
          e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.classList.contains('mouse-hover-area');
        
        setIsHovering(isClickable);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      ref={followerRef}
      className="fixed top-0 left-0 w-6 h-6 bg-primary/10 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 2 : 1,
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        position: 'fixed',
        top: -3,
        left: -3,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;
