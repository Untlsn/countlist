import React from 'react';
import {Meta, Story} from '@storybook/react';
import ListPoint, { ListPointProps }  from './index';

export default {
  title: 'Molecules/ListPoint',
} as Meta;


const defaultProps = {
  name: 'List Name',
  selected: false,
};

const Template: Story<ListPointProps> = (props) => <ListPoint
  {...props}
  onClick={() => alert('List Point clicked')} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Selected = Template.bind({});
Selected.args = {
  ...defaultProps,
  selected: true,
};
