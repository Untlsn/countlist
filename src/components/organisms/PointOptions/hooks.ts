import { useState } from 'react';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { handleKey, handleChange } from '@helpers';
import { useSelector } from 'react-redux';

export const useNameInput = () => {
  const usedPoint = useSelector(({ mini }) => mini.usedPoint)!;
  const initName = useSelector(({ lists }) => lists.points[usedPoint].name);
  const changeName = useCleverDispatch()(({ lists }) => lists.changeName);

  const [pointName, changePointName] = useState(initName);

  return {
    value: pointName,
    onChange: handleChange(changePointName),
    onKeyDown: handleKey(
      'Enter',
      () => changeName({ id: usedPoint, name: pointName }),
    ),
  };
};

const useAllPointData = (pointID: string) => {
  const type = useSelector(({ lists }) => lists.points[pointID].type);
  const max = useSelector(({ lists }) => lists.points[pointID].max);
  const count = useSelector(({ lists }) => lists.points[pointID].count);

  return { type, max, count };
};

export const usePointData = () => {
  const cleverDispatch = useCleverDispatch();
  const pointID = useSelector(({ mini }) => mini.usedPoint)!;
  const { type } = useAllPointData(pointID);

  const changeType = cleverDispatch(({ lists }) => lists.changeType);

  return {
    changeType: {
      check: () => changeType({ pointID, type: 'check' }),
      count: () => changeType({ pointID, type: 'count' }),
    },
    type,

  };
};