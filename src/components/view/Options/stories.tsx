import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Options, { OptionsProps } from './index';

export default {
  title: 'View/Options',
} as Meta;


export const Default: Story<OptionsProps> = ({ selected: initSelect, ...props }) => {
  const [selected, changeSelected] = useState(initSelect);
  return <Options {...props} selected={selected} changeSelected={changeSelected} />;
};
Default.args = {
  userName: 'User Name',
  listNames: [
    'Point Name',
    'Another Point',
  ],
  selected: 1,
};