import React from 'react';
import type { Meta, Story } from '@storybook/react';
import ListPoint  from './index';
import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';
import data from './stories.data';

export default {
  title: 'Molecules/ListPoint',
} as Meta;

interface Props {
  name: string
  selected: boolean
}

const Template: Story<Props> = ({ name, selected }) => {
  useCleverDispatch()(({ lists }) => lists.initLists)(data);
  const id = useSelector(({ lists }) => Object.keys(lists.lists)[0]);

  const cleverDispatch = useCleverDispatch();
  cleverDispatch(({ lists }) => lists.changeName)({ id, name });
  cleverDispatch(({ mini }) => mini.useList)(selected ? id : '');

  return <ListPoint id={id} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'selected',
  selected: true,
};
