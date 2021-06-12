import React from 'react';
import { Meta, Story } from '@storybook/react';
import Point, { PointProps } from './index';
import { useBoolState } from '@hooks';

export default {
  title: 'Molecules/Point',
} as Meta;


const Template: Story<PointProps> = ({ checked: initCheck, text }) => {
  const [checked, changeCheck] = useBoolState(initCheck);
  return <Point checked={checked} text={text} onClick={() => changeCheck()} onEllipsisClick={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  text: 'Default',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  text: 'Checked',
};