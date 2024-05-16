import React from 'react';
import ButtonSection from '../components/Buttons';

export default {
  title: 'Components/ButtonSection',
  component: ButtonSection,
};

// Template básico para el componente ButtonSection
const Template = (args) => <ButtonSection {...args} />;

// Historia para el componente ButtonSection con manejadores de clic de ejemplo
export const Default = Template.bind({});
Default.args = {
  handleNumberClick: (number) => alert(`Number clicked: ${number}`),
  handleOperatorClick: (operator) => alert(`Operator clicked: ${operator}`),
};
