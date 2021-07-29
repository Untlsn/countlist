import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointCircle, { PointCircleProps }  from './index';
import useBoolState from '~/hooks/useBoolState';

export default {
  title: 'Atoms/PointCircle',
} as Meta;


const Template: Story<PointCircleProps> = (props) => {
  const [checked, changeChecked] = useBoolState(props.checked);

  return <PointCircle checked={checked} onClick={changeChecked} />;
};

export const Default = Template.bind({});
Default.args = { checked: false };

export const Checked = Template.bind({});
Checked.args = { checked: true };