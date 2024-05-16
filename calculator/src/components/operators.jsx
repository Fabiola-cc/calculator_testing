import PropTypes from 'prop-types';
import React from 'react';
import './operators.css'

const Operators = ({ onClick, activeKey }) => {
  const operators = ['+', '-', '*', '='];
  return (
    <div className="operators">
      {operators.map(operator => (
        <button key={operator} onClick={() => onClick(operator)}
        className={activeKey === operator ? 'active' : ''}>
          {operator}
        </button>
      ))}
    </div>
  );
};

Operators.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeKey: PropTypes.string
};

export default Operators;
