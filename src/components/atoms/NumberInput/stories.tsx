import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import NumberInput, { NumberInputProps }  from './index';

export default {
  title: 'Atoms/NumberInput',
} as Meta;


export const Default: Story<NumberInputProps> = ({ label, value: initValue }) => {
  const [value, onChange] = useState(initValue);

  return <NumberInput {...{ value, onChange, label }} />;
};
Default.args = {
  value: 0,
  label: 'Label',
};
