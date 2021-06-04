import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Nav, { NavProps }  from './index';

export default {
  title: 'Organisms/Nav',
} as Meta;


const Template: Story<NavProps> = (props) => (
  <div style={{ backgroundColor: props.dotMenu ? '#687681' : undefined }}>
    <Nav {...props} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  id: 'Name@000',
};

export const WithDotMenu = Template.bind({});
WithDotMenu.args = {
  id: 'Name@000',
  dotMenu: true,
};