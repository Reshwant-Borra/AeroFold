'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonHover } from '@/lib/motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-body transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-background hover:bg-secondary/90',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    // Handle hash links (same page anchors)
    if (href.startsWith('#')) {
      return (
        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
          <a href={href} className={classes}>
            {children}
          </a>
        </motion.div>
      );
    }
    return (
      <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={buttonHover}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

