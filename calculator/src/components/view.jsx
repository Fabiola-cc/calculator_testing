import React from 'react';
import PropTypes from 'prop-types';
import './view.css';

const View = ({ value, result }) => {
    if (result) {
      if(value.length > 9 || value.includes('-')){
        value = 'ERROR'
      }
    }
    const displayValue = value.length > 9 ? value.slice(0, 9) : value;
    return <div className="view">{displayValue}</div>;
};

View.propTypes = {
  value: PropTypes.string.isRequired,
  result: PropTypes.bool.isRequired,
};

export default View;
