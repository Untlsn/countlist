import React from 'react';
import { Meta, Story } from '@storybook/react';
import BarRow, { BarRowProps } from './index';

export default {
  title: 'Atoms/BarRow',
} as Meta;


export const Default: Story<BarRowProps> = (props) => <BarRow { ...props } />;
Default.args = {
  rows: 5,
};