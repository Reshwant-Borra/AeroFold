'use client';

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUp, prefersReducedMotion } from '@/lib/motion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion() || prefersReducedMotion();

  const containerVariant = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : staggerContainer;

  const childVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariant}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariant}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

