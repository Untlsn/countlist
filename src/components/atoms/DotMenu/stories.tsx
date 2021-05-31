import React from 'react';
import type { Meta } from '@storybook/react';
import DotMenu  from './index';

export default {
  title: 'Atoms/DotMenu',
} as Meta;


export const Default = () => <DotMenu onClick={() => alert('Dot Menu Clicked')} />;