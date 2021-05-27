import React from 'react';
import {Meta, Story} from '@storybook/react';
import AddBar, { AddBarProps }  from './index';

export default {
  title: 'Molecules/AddBar',
} as Meta;

const defaultProps = {
  placeholder: 'Placeholder',
  clear: false,
};

const Template: Story<AddBarProps> = (props) => <AddBar {...props} onCommit={alert} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  clear: false,
};
export const Clear = Template.bind({});
Clear.args = {
  ...defaultProps,
  clear: true,
};