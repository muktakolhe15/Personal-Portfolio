import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Reveal
 * Compositor-only scroll fade-in animation (opacity + translateY) with once:true
 * so content stays accessible and performant.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
