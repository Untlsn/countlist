import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';

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