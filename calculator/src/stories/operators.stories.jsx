import React from 'react';
import Operators from '../components/operators';

export default {
  title: 'Calculator/Operators',
  component: Operators,
};

const Template = (args) => <Operators {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: (operator) => console.log(operator),
};
