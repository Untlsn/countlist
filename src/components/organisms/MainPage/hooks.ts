import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';

export const useData = (listID: string) => {
  const cleverDispatch = useCleverDispatch();

  const addPoint = cleverDispatch(
    ({ lists }) => lists.addPoint,
  );
  const usePoint = cleverDispatch(
    ({ mini }) => mini.usePoint,
  );
  const composition = useSelector(
    ({ lists }) => lists.lists[listID].composition,
  );

  return {
    addPoint: (name: string) => addPoint({ listID, name }),
    usePoint,
    composition,
  };
};