import React from 'react';
import './operands.css'

const operands = ({ onClick }) => {
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

export default operands;
