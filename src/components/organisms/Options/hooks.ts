import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lists, mini } from '~/store/actions';
import _ from 'lodash';
import useComposedDispatch from '~/hooks/useComposedDispatch';

export const useDataSelector = () => {
  const listsKeys = useSelector(({ lists }) => Object.keys(lists.lists));
  const userName = useSelector(({ mini }) => mini.userName);
  const optionVisible = useSelector(({ mini }) => mini.optionVisible);

  return { listsKeys, userName, optionVisible };
};

export const useDataDispatch = () => {
  const dispatch = useComposedDispatch();

  return {
    addList: dispatch(lists.addList),
    switchOptions: dispatch(mini.switchOptions),
  };
};

export const useListEffect = (listsKeys: string[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mini.useList(_.last(listsKeys)!));
  }, [listsKeys.length]);
};