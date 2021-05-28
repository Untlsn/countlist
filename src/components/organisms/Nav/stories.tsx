import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MainPageNav, { MainPageNavProps }  from './index';

export default {
  title: 'Organisms/Nav',
} as Meta;


const Template: Story<MainPageNavProps> = (props) => (
  <MainPageNav {...props} />
);
export const Default = Template.bind({});
Default.args = {
  name: 'Name',
};

export const WithDotMenu = Template.bind({});
WithDotMenu.args = {
  name: 'Name',
  dotMenu: true,
};