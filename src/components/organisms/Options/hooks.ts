import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';
import * as _ from 'lodash';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { menu } from './data';

export const useDataSelector = () => {
  const listsKeys = useSelector(({ lists }) => Object.keys(lists.lists));
  const userName = useSelector(({ mini }) => mini.userName);
  const optionVisible = useSelector(({ mini }) => mini.optionVisible);

  return { listsKeys, userName, optionVisible };
};

export const useDataDispatch = () => {
  const cleverDispatch = useCleverDispatch();

  const switchOptions = cleverDispatch.no(({ mini }) => mini.switchOptions);
  const addList = cleverDispatch(({ lists }) => lists.addList);

  return {
    addList,
    switchOptions,
  };
};

export const useListEffect = (listsKeys: string[]) => {
  const useList = useCleverDispatch()(({ mini }) => mini.useList);

  useEffect(() => {
    useList(_.last(listsKeys)!);
  }, [listsKeys.length]);
};

export const useMenu = () => {
  const history = useHistory();

  return {
    ...menu,
    actions: [
      () => {
        localStorage.setItem('user_id', '');
        history.push('/login');
      },
    ],
  } as typeof menu;
};