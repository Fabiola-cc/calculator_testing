import React from 'react';
import Operators from '../components/operators';
import { fn } from '@storybook/test'

export default {
  title: 'Calculator/Operators',
  component: Operators,
};

export const Default = {
  args: {
      onClick: fn()
  }
}