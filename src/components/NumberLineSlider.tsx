import React, { CSSProperties, useState } from 'react';
import './NumberLineSlider.css';

interface NumberLineSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  stopPoint?: number;
}

const styles: Record<string, CSSProperties> = {
  container: {
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    position: 'relative' as const,
  },
  numberMarks: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
  }
};

const NumberLineSlider: React.FC<NumberLineSliderProps> = ({ min, max, value, onChange, stopPoint }) => {
  const marks = Array.from(
    { length: max - min + 1 },
    (_, i) => min + i
  );

  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (newValue: number) => {
    if (stopPoint !== undefined && newValue > stopPoint) {
      return;
    }
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        step={1}
        className="slider"
      />
      <div style={styles.numberMarks}>
        {marks.map((mark) => (
          <span key={mark} className="mark">
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NumberLineSlider; 