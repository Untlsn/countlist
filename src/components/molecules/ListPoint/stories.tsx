import React from 'react';
import type { Meta, Story } from '@storybook/react';
import ListPoint  from './index';
import { useSelector } from 'react-redux';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { lists, mini } from '~/store/actions';

export default {
  title: 'Molecules/ListPoint',
} as Meta;

interface Props {
  name: string
  selected: boolean
}

const Template: Story<Props> = ({ name, selected }) => {
  const id = useSelector(({ lists }) => Object.keys(lists.lists)[0]);

  const composedDispatch = useComposedDispatch();
  composedDispatch(lists.rename)({ id, name });
  composedDispatch(mini.selectList)(selected ? id : '');

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
