import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import NumberLineSlider from './NumberLineSlider';
import MultiplicationExpression from './MultiplicationExpression';
import ExponentDisplay from './ExponentDisplay';

interface ExponentPracticeProps {
  x: string | number;
  targetExponent: number;
}

const ExponentPractice: React.FC<ExponentPracticeProps> = ({ x, targetExponent }) => {
  const [userExponent, setUserExponent] = useState<number>(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const isCorrect = userExponent === targetExponent;

  useEffect(() => {
    if (isCorrect) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isCorrect]);

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {showConfetti && (
        <Confetti
          width={600}
          height={400}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          initialVelocityY={20}
          style={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}

      <div style={{
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#0066cc',
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}>
        Show me <ExponentDisplay x={x} exponent={targetExponent} /> using multiplication
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <NumberLineSlider
          min={1}
          max={10}
          value={userExponent}
          onChange={setUserExponent}
          stopPoint={targetExponent}
        />
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f0f7ff',
        borderRadius: '8px',
        textAlign: 'center',
        border: '2px solid',
        borderColor: isCorrect ? '#4CAF50' : '#cce0ff',
        transition: 'border-color 0.3s'
      }}>
        <MultiplicationExpression 
          x={x} 
          exponent={userExponent} 
          annotate={true}
        />
      </div>

      {isCorrect && (
        <div style={{
          marginTop: '1rem',
          textAlign: 'center',
          color: '#4CAF50',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Correct! ✨
        </div>
      )}
    </div>
  );
};

export default ExponentPractice; 