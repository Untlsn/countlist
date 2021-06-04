import React from 'react';
import { Meta, Story } from '@storybook/react';
import CountBox, { CountBoxProps } from './index';

export default {
  title: 'Atoms/CountBox',
} as Meta;


const Default: Story<CountBoxProps> = (props) => <CountBox {...props} />;

export const Half = Default.bind({});
Half.args = {
  fill: .5,
};

export const Empty = Default.bind({});
Empty.args = {
  fill: 0,
};

export const Full = Default.bind({});
Full.args = {
  fill: 1,
};
