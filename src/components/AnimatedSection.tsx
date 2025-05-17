'use client';

import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';

export interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}; 