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

export const usePointData = () => {
  const cleverDispatch = useCleverDispatch();
  const pointID = useSelector(({ mini }) => mini.usedPoint)!;

  const changeType = cleverDispatch(({ lists }) => lists.changeType);
  const type = useSelector(({ lists }) => lists.points[pointID].type);

  return {
    changeType: {
      check: () => changeType({ pointID, type: 'check' }),
      count: () => changeType({ pointID, type: 'count' }),
    },
    type,
  };
};