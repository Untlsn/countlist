import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CheckBox, { CheckBoxProps } from './index';

export default {
  title: 'Atoms/CheckBox',
} as Meta;

const Template: Story<CheckBoxProps> = ({ checked: initChecked, value }) => {

  const [checked, changeChecked] = useState(initChecked);
  return <CheckBox {...{ checked, changeChecked, value }} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  value: 'Default',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  value: 'Checked',
};