// src/components/Numbers.jsx
import React from 'react';
import './numbers.css'

const Numbers = ({ onClick }) => {
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '⁺/₋', '0', '.'];
  return (
    <div className="numbers">
      {numbers.map(number => (
        <button key={number} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
