import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HIGHLIGHT_COLOR } from '../utils/colors';

interface ExponentDisplayProps {
  x: string | number;
  exponent: number;
}

const ExponentDisplay: React.FC<ExponentDisplayProps> = ({ x, exponent }) => {
  if (exponent === 0) return <span>1</span>;
  if (exponent === 1) return <span>{x}</span>;

  return (
    <motion.span
      style={{ 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#004d99',
        display: 'inline-block'
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <span>{x}</span>
      <AnimatePresence>
        <motion.sup
          key={exponent}
          style={{ 
            fontSize: '0.7em',
            color: HIGHLIGHT_COLOR,
            display: 'inline-block'
          }}
          initial={{ scale: 0.5, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          {exponent}
        </motion.sup>
      </AnimatePresence>
    </motion.span>
  );
};

export default ExponentDisplay; 