import { useState } from 'react';
import useCleverDispatch from '@hooks/useCleverDispatch';
import type { UsedPoint } from '@store/ducks/mini/types';
import { getParts } from './helpers';
import { handleKey, handleChange } from '@helpers';

export const useNameInput = ({ pointID, listID }: UsedPoint) => {
  const changeName = useCleverDispatch()(
    ({ lists }) => lists.changeName,
  );

  const [initName] = getParts(pointID);

  const [pointName, changePointName] = useState(initName);

  return {
    value: pointName,
    onChange: handleChange(changePointName),
    onKeyDown: handleKey(
      'Enter',
      () => changeName({ listID, pointID, name: pointName }),
    ),
  };
};