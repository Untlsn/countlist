import React from 'react';
import { Meta, Story } from '@storybook/react';
import CountPoint, { CountPointProps } from './index';

export default {
  title: 'Molecules/CountPoint',
} as Meta;


const Template: Story<CountPointProps> = (props) => <CountPoint {...props} />;

export const Half = Template.bind({});
Half.args = {
  text: 'Half',
  initFill: 5,
  maxFill: 10,
  onClick() {},
};

export const Empty = Template.bind({});
Empty.args = {
  text: 'Empty',
  initFill: 0,
  maxFill: 3,
  onClick() {},
};

export const Full = Template.bind({});
Full.args = {
  text: 'Full',
  initFill: 7,
  maxFill: 7,
  onClick() {},
};

