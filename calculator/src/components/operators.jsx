import PropTypes from 'prop-types';
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

Operators.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Operators;
