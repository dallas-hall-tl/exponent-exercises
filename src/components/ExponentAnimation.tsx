import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HIGHLIGHT_COLOR } from '../utils/colors';

const ExponentAnimation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(window.clearTimeout);
    timeoutsRef.current = [];
  };

  const startAnimation = () => {
    clearTimeouts();
    setIsPlaying(true);
    setStep(0);

    const timeouts = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 1300),
      setTimeout(() => setStep(3), 2600)
    ];

    timeoutsRef.current = timeouts;
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{ 
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <AnimatePresence mode="wait">
          {step >= 1 && (
            <motion.div
              key="exponent"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#004d99'
              }}
            >
              3<sup style={{ color: HIGHLIGHT_COLOR }}>3</sup>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="equals"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ fontSize: '2rem', color: '#0066cc' }}
            >
              =
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="multiplication"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#004d99',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                lineHeight: '2.5'
              }}
            >
              {[0, 1, 2].map((index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.6 + 0.6 }}
                    >
                      *
                    </motion.span>
                  )}
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.6 }}
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <span>3</span>
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.6 + 0.3 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        fontSize: '0.6em',
                        color: index === 2 ? HIGHLIGHT_COLOR : '#0066cc',
                        fontStyle: 'italic',
                        lineHeight: '1'
                      }}
                    >
                      ({index + 1})
                    </motion.span>
                  </motion.span>
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={startAnimation}
        style={{
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          margin: '0 auto'
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        {isPlaying ? 'Replay' : 'Play'} Animation
      </motion.button>
    </div>
  );
};

export default ExponentAnimation; 