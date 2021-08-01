import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mini } from '~/store/actions';
import _ from 'lodash';
import { useListsIDs } from '~/store/selectors';

export const useListEffect = () => {
  const dispatch = useDispatch();
  const listsIDs = useListsIDs();

  useEffect(() => {
    dispatch(mini.selectList(_.last(listsIDs)!));
  }, [listsIDs.length]);

  return listsIDs;
};