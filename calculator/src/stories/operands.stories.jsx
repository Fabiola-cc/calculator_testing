import React from 'react';
import Operands from '../components/operands';
import { fn } from '@storybook/test'

export default {
  title: 'Calculator/operands',
  component: Operands,
};

export const Default = {
    args: {
        onClick: fn()
    }
}