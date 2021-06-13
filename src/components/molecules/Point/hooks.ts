import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';

export const usePointData = (id: string) => {
  const count = useSelector(
    ({ lists }) => lists.points[id].count,
  );
  const name = useSelector(
    ({ lists }) => lists.points[id].name,
  );

  return { count, name };
};

export const useDataDispatch = (id: string) => {
  const cleverDispatch = useCleverDispatch();

  const changeCount = cleverDispatch(({ lists }) => lists.changePointCount);
  const usePoint = cleverDispatch(({ mini }) => mini.usePoint);

  return {
    changeCount: (count?: number) => changeCount({ pointID: id, count }),
    usePoint: () => usePoint(id),
  };
};