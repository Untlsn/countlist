import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';

export const useAddListFn = (listsNamesLength: number, changeSelected: (i: number) => void) => {
  const addList = useCleverDispatch()(({ lists }) => lists.addList);

  return (name: string) => {
    if (name != '') addList({
      name,
      points: [],
    });
    changeSelected(listsNamesLength);
  };
};

export const useDataSelector = () => {
  const listsNames = useSelector(({ lists }) => lists)
    .map(({ name }) => name);
  const userName = useSelector(({ mini }) => mini.userName);
  return { listsNames, userName };
};