import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';

export const useRedux = () => {
  const cleverDispatch = useCleverDispatch();

  const listID = useSelector(({ mini }) => mini.usedList  || '0');

  const composition = useSelector(
  ({ lists }) => (lists.lists[listID])?.composition ?? [],
  );
  const name = useSelector(
    ({ lists }) => (lists.lists[listID])?.name ?? '(no-name)',
  );

  const addPoint = cleverDispatch(({ lists }) => lists.addPoint);

  return {
    addPoint: (name: string) => addPoint({ listID, name }),
    composition,
    name,
  };
};
