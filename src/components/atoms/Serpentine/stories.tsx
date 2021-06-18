import React from 'react';
import { Meta, Story } from '@storybook/react';
import Serpentine  from './index';

export default {
  title: 'Atoms/Serpentine',
} as Meta;


export const Default: Story<{ text: string }> = ({ text }) => <Serpentine>{text}</Serpentine>;

Default.args = {
  text: 'Login',
};

