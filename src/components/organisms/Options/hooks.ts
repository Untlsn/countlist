import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';

export const useAddListFn = () => {
  const addList = useCleverDispatch()(({ lists }) => lists.addList);

  return (name: string) => {
    if (name != '') addList({
      name: name,
    });
  };
};

export const useDataSelector = () => {
  const listsKeys = useSelector(({ lists }) => Object.keys(lists) || []);
  const userName = useSelector(({ mini }) => mini.userName);
  return { listsKeys, userName };
};