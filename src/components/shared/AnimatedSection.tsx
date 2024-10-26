import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction: {
    initial_x: number;
    initial_y: number;
    duration?: number;
  };
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of the section visible to trigger
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction.initial_x, y: direction.initial_y }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: direction.initial_x, y: direction.initial_y }
      }
      transition={{ duration: direction.duration ? direction.duration : 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
