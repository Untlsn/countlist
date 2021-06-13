import { useSelector } from 'react-redux';
import useCleverDispatch from '@hooks/useCleverDispatch';

export const usePointData = (id: string) => ({
  type: useSelector(({ lists }) => lists.points[id].type),
  count: useSelector(({ lists }) => lists.points[id].count),
  name: useSelector(({ lists }) => lists.points[id].name),
  max: useSelector(({ lists }) => lists.points[id].max),
});

export const useDataDispatch = (id: string) => {
  const cleverDispatch = useCleverDispatch();

  const changeCount = cleverDispatch(({ lists }) => lists.changePointCount);
  const usePoint = cleverDispatch(({ mini }) => mini.usePoint);

  return {
    changeCount: (count?: number) => changeCount({ pointID: id, count }),
    usePoint: () => usePoint(id),
  };
};