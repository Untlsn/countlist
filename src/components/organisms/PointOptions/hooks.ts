import useCleverDispatch from '@hooks/useCleverDispatch';
import { handleChange } from '@helpers';
import { useSelector } from 'react-redux';

export const useNameInput = (usedPoint: string) => {
  const name = useSelector(({ lists }) => lists.points[usedPoint]?.name);
  const changeName = useCleverDispatch()(({ lists }) => lists.changeName);

  return {
    value: name,
    onChange: handleChange((newName) => changeName({ id: usedPoint, name: newName })),
  };
};

const useAllPointData = (pointID: string) => {
  const type = useSelector(({ lists }) => lists.points[pointID]?.type);
  const max = useSelector(({ lists }) => lists.points[pointID]?.max);
  const count = useSelector(({ lists }) => lists.points[pointID]?.count);

  return { type, max, count };
};

export const usePointData = (id: string) => {
  const cleverDispatch = useCleverDispatch();

  const changeType = cleverDispatch(({ lists }) => lists.changeType);
  const changeCount = cleverDispatch(({ lists }) => lists.changeCount);
  const changeMax = cleverDispatch(({ lists }) => lists.changeMax);
  const remove = cleverDispatch(({ lists }) => lists.remove);
  const usePoint = cleverDispatch(({ mini }) => mini.usePoint);


  return {
    ...useAllPointData(id),
    changeType: {
      check: () => changeType({ id, type: 'check' }),
      count: () => changeType({ id, type: 'count' }),
    },
    changeCount: (count: number) => changeCount({ id, count }),
    changeMax: (max: number) => changeMax({ id, max }),
    hide: () => usePoint(undefined),
    remove: () => {
      usePoint(undefined);
      remove(id);
    },
  };
};