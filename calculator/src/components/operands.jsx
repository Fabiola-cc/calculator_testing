import PropTypes from 'prop-types';
import React from 'react';
import './operands.css'

const operands = ({ onClick, activeKey }) => {
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '⁺/₋', '0', '.'];
  return (
    <div className="numbers">
      {numbers.map(number => (
        <button key={number} onClick={() => onClick(number)}
        className={activeKey === number ? 'active' : ''}>
          {number}
        </button>
      ))}
    </div>
  );
};

operands.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default operands;
