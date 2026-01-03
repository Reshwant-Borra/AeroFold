'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, prefersReducedMotion } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fade' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  className?: string;
}

export function Reveal({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion() || prefersReducedMotion();

  const variants = {
    fadeUp: shouldReduceMotion
      ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
      : fadeUp,
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    fadeInLeft: shouldReduceMotion
      ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
      : {
          hidden: { opacity: 0, x: -16 },
          show: { opacity: 1, x: 0 },
        },
    fadeInRight: shouldReduceMotion
      ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
      : {
          hidden: { opacity: 0, x: 16 },
          show: { opacity: 1, x: 0 },
        },
    scaleIn: shouldReduceMotion
      ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
      : {
          hidden: { opacity: 0, scale: 0.95 },
          show: { opacity: 1, scale: 1 },
        },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

