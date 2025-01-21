import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HIGHLIGHT_COLOR } from '../utils/colors';

interface MultiplicationExpressionProps {
  x: string | number;
  exponent: number;
  annotate?: boolean;
}

const MultiplicationExpression: React.FC<MultiplicationExpressionProps> = ({ x, exponent, annotate = false }) => {
  if (exponent === 0) return <span>1</span>;
  
  return (
    <motion.span 
      style={{ lineHeight: '2.5', display: 'inline-block' }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {Array(exponent).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && ' * '}
            <motion.span
              initial={{ scale: 0.5, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                delay: index * 0.1
              }}
              style={{ 
                position: 'relative', 
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                verticalAlign: 'middle'
              }}
            >
              <span>{x}</span>
              <AnimatePresence>
                {annotate && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      fontSize: '0.6em',
                      color: index === exponent - 1 ? HIGHLIGHT_COLOR : '#0066cc',
                      fontStyle: 'italic',
                      lineHeight: '1'
                    }}
                  >
                    ({index + 1})
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </motion.span>
  );
};

export default MultiplicationExpression; 