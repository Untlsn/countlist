import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import EditPoint, { EditPointProps } from './index';

export default {
  title: 'Molecules/EditPoint',
} as Meta;

const Template: Story<EditPointProps> = (props) => {
  const [value, changeValue] = useState(props.value);
  const [checked, changeCheck] = useState(props.checked);
  const dynamicProps = { value, changeValue, checked, changeCheck };

  return <EditPoint {...props} {...dynamicProps} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 'Point',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  value: 'Point Checked',
  checked: true,
};