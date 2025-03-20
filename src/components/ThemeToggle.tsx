
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center p-2 rounded-full transition-colors",
        theme === 'dark' ? 'bg-secondary/50' : 'bg-primary/5',
        className
      )}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={20} className="text-foreground" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={20} className="text-foreground" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
