import React from 'react';
import View from '../components/view';

export default {
  title: 'Calculator/View',
  component: View,
};

const Template = (args) => <View {...args} />;

export const WithResultTrue = Template.bind({});
WithResultTrue.args = {
  value: '1234567890', // Valor de ejemplo
  result: true,
};

export const WithResultFalse = Template.bind({});
WithResultFalse.args = {
  value: '1234567890', // Valor de ejemplo
  result: false,
};








