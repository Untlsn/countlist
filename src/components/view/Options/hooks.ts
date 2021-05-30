import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store';

export const useAddListFn = (listsNamesLength: number, changeSelected: (i: number) => void) => {
  const dispatch = useDispatch();

  return (name: string) => {
    if (name != '') dispatch(actions.lists.addList({
      name: name,
      points: [],
    }));
    changeSelected(listsNamesLength);
  };
};

export const useDataSelector = () => {
  const listsNames = useSelector(({ lists }) => lists)
    .map(({ name }) => name);
  const userName = useSelector(({ mini }) => mini.userName);
  return { listsNames, userName };
};