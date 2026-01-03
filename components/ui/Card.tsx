'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from '@/lib/motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? cardHover : undefined}
      className={`rounded-card bg-surface p-6 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

