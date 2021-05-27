import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MainPageNav, { MainPageNavProps }  from './index';

export default {
  title: 'Organisms/MainPageNav',
} as Meta;


export const Default: Story<MainPageNavProps> = (props) => (
  <MainPageNav {...props} />

);
Default.args = {
  listName: 'List Name',
};