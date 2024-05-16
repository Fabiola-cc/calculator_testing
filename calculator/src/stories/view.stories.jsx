import React from 'react';
import View from '../components/View';

export default {
  title: 'Calculator/View',
  component: View,
};

const Template = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '123456789012345', // Cadena larga para probar el recorte
  result: true
};
