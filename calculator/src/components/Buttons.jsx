import React from 'react';
import './Buttons.css'
import Operands from './operands'
import Operators from './operators'

const ButtonSection = () => {
  return (
    <div className="buttons">
      <Operands/>
      <Operators/>
    </div>
  );
};

export default ButtonSection;