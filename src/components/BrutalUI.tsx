import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Accent } from '@/data/portfolio';

type BrutalCardProps = HTMLAttributes<HTMLDivElement> & {
  accent?: Accent;
  interactive?: boolean;
  children: ReactNode;
};

export const BrutalCard = ({
  accent = 'yellow',
  interactive = true,
  className = '',
  children,
  ...props
}: BrutalCardProps) => (
  <div
    className={`brutal-card accent-${accent} ${interactive ? 'brutal-card--interactive' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Tag = ({ children, accent = 'yellow' }: { children: ReactNode; accent?: Accent }) => (
  <span className={`brutal-tag accent-${accent}`}>{children}</span>
);

export const SectionLabel = ({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) => (
  <header className="section-header" id={id}>
    {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
    <h2 className="section-label">{title}</h2>
    {description ? <p className="section-description">{description}</p> : null}
  </header>
);

type ExternalLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'dark';
  showIcon?: boolean;
};

export const ExternalLinkButton = ({
  variant = 'secondary',
  showIcon = false,
  className = '',
  children,
  ...props
}: ExternalLinkButtonProps) => (
  <a className={`brutal-button brutal-button--${variant} ${className}`} {...props}>
    <span>{children}</span>
    {showIcon ? <ArrowUpRight size={18} aria-hidden="true" /> : null}
  </a>
);

export const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985, filter: 'blur(5px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
