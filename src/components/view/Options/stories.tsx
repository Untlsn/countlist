import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Options, { OptionsProps } from './index';
import { useDispatch } from 'react-redux';
import { actions } from '@store';
import { Dispatch } from 'redux';

interface StoreProps {
  listNames: string[],
  userName: string,
}

export default {
  title: 'View/Options',
} as Meta;

const changeLists = (dispatch: Dispatch, listNames: string[]) => {
  const lists = listNames.map(name => ({ name, points: [] }));
  dispatch(actions.lists.changeLists(lists));
};

export const Default: Story<OptionsProps & StoreProps> = (props) => {
  const { listNames, selected: initSelect, userName } = props;
  const [selected, changeSelected] = useState(initSelect);
  const dispatch = useDispatch();
  changeLists(dispatch, listNames);
  dispatch(actions.mini.changeUserName(userName));

  return <Options selected={selected} changeSelected={changeSelected} />;
};
Default.args = {
  userName: 'User Name',
  listNames: [
    'Point Name',
    'Another Point',
  ],
  selected: 1,
};