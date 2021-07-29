import React from 'react';
import { Meta, Story } from '@storybook/react';
import Point from './index';
import { useSelector } from 'react-redux';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { Point as StorePoint } from '~/store/ducks/lists/state.types';
import { lists, mini } from '~/store/actions';

export default {
  title: 'Molecules/Point',
} as Meta;

const useChangeFullPoint = (id: string, { type, max, count, name }: StorePoint) => {
  const composedDispatch = useComposedDispatch();


  composedDispatch(lists.changeType)({ id, type });
  composedDispatch(lists.changeName)({ id, name });
  composedDispatch(lists.changeMax)({ id, max });
  composedDispatch(lists.changeCount)({ id, count });
};

const Template: Story<StorePoint> = (point) => {
  if (point.type == 'check') point.max = 1;

  const id = useSelector(({ lists }) => Object.keys(lists.points)[0]);
  const composedDispatch = useComposedDispatch();

  composedDispatch(mini.usePoint)(id);
  useChangeFullPoint(id, point);

  return <Point id={id} />;
};

const typesForCheck = {
  count: {
    type: 'boolean',
    name: 'checked',
  },
};

export const Check = Template.bind({});
Check.args = {
  name: 'Check',
  type: 'check',
  count: 0,
};
Check.argTypes = typesForCheck;

export const Checked = Template.bind({});
Checked.args = {
  name: 'Checked',
  type: 'check',
  count: 1,
};
Checked.argTypes = typesForCheck;

export const Count = Template.bind({});
Count.args = {
  name: 'Count',
  type: 'count',
  max: 5,
  count: 0,
};

export const CountFull = Template.bind({});
CountFull.args = {
  name: 'CountFull',
  type: 'count',
  max: 5,
  count: 5,
};

