import React from 'react';
import Operands from '../components/operands';
import { fn } from '@storybook/test'

export default {
  title: 'Calculator/operands',
  component: Operands,
};

const Template = (args) => <Operands {...args} />;

export const Default = {
    args: {
        onClick: fn()
    }
}