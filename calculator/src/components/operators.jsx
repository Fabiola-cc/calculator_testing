import React from 'react';
import './operators.css'

const Operators = ({ onClick }) => {
  const operators = ['+', '-', '*', '='];
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
