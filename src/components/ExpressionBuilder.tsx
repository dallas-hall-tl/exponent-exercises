import React, { useState } from 'react';
import NumberLineSlider from './NumberLineSlider';
import MultiplicationExpression from './MultiplicationExpression';
import ExponentDisplay from './ExponentDisplay';

const ExpressionBuilder: React.FC = () => {
  const [x, setX] = useState<string>('2');
  const [exponent, setExponent] = useState<number>(1);
  const [showAnnotations, setShowAnnotations] = useState<boolean>(true);

  return (
    <div style={{ 
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '10px',
          color: '#0066cc',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Enter a number (x):
          <input
            type="text"
            value={x}
            onChange={(e) => setX(e.target.value)}
            style={{
              marginLeft: '10px',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '2px solid #0066cc',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '10px',
          color: '#0066cc',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Select exponent:
        </label>
        <NumberLineSlider
          min={1}
          max={10}
          value={exponent}
          onChange={setExponent}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'flex',
          alignItems: 'center',
          color: '#0066cc',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}>
          <input
            type="checkbox"
            checked={showAnnotations}
            onChange={(e) => setShowAnnotations(e.target.checked)}
            style={{
              marginRight: '8px',
              width: '16px',
              height: '16px',
              cursor: 'pointer'
            }}
          />
          Show position numbers
        </label>
      </div>

      <div style={{ 
        marginTop: '1.5rem',
        padding: '1.5rem',
        backgroundColor: '#f0f7ff',
        borderRadius: '8px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#004d99',
        textAlign: 'center',
        border: '2px solid #cce0ff',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <ExponentDisplay x={x} exponent={exponent} />
        <span style={{ fontSize: '1rem', color: '#0066cc' }}>=</span>
        <MultiplicationExpression x={x} exponent={exponent} annotate={showAnnotations} />
      </div>
    </div>
  );
};

export default ExpressionBuilder; 