// src/components/Operators.jsx
import React from 'react';

const Operators = ({ onClick }) => {
  const operators = ['+', '-', '*', '/'];
  return (
    <div className="operators">
      {operators.map(operator => (
        <button key={operator} onClick={() => onClick(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
};

export default Operators;
