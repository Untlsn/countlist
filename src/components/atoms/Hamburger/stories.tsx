import React from 'react';
import type { Meta } from '@storybook/react';
import Hamburger  from './index';

export default {
  title: 'Atoms/Hamburger',
} as Meta;


export const Default = () => <Hamburger onClick={() => alert('Hamburger click')} />;