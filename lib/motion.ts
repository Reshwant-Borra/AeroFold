// Animation tokens and variants for Framer Motion

export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = {
  fast: 0.18,
  medium: 0.32,
  slow: 0.52,
} as const;
export const DISTANCE = {
  small: 8,
  base: 16,
  large: 24,
} as const;

// Check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Base variants
export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: DISTANCE.base,
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: DURATION.slow, 
      ease: EASE,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: DURATION.medium, 
      ease: EASE,
    },
  },
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -DISTANCE.base,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: DURATION.slow, 
      ease: EASE,
    },
  },
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: DISTANCE.base,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: DURATION.slow, 
      ease: EASE,
    },
  },
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: DURATION.medium, 
      ease: EASE,
    },
  },
};

// Stagger container variant
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.2,
    },
  },
};

// Page transition variants
export const pageTransition = {
  initial: { 
    opacity: 0, 
    x: 16,
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: DURATION.medium, 
      ease: EASE,
    },
  },
  exit: { 
    opacity: 0, 
    x: -16,
    transition: { 
      duration: DURATION.fast, 
      ease: EASE,
    },
  },
};

// Hover variants for cards
export const cardHover = {
  y: -DISTANCE.small,
  boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
  transition: { 
    duration: DURATION.fast, 
    ease: EASE,
  },
};

// Button hover variant
export const buttonHover = {
  scale: 1.03,
  transition: { 
    duration: DURATION.fast, 
    ease: EASE,
  },
};

