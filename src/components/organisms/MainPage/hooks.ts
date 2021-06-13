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
    ({ lists }) => {
      const list = lists.lists[listID] || {};
      return list?.composition || [];
    },
  );

  return {
    addPoint: (name: string) => addPoint({ listID, name }),
    usePoint,
    composition,
  };
};