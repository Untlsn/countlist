import React, { useState } from 'react';
import { createPoints } from './helpers';

export const useNavData = () => {
  const [visibleMenu, setVisibleMenu] = useState<''|'confirm'|'rename'>('');

  return {
    createdPoints: createPoints(
      () => setVisibleMenu('confirm'),
      () => setVisibleMenu('rename'),
    ),
    visibleMenu,
    clearVisibleMenu: () => setVisibleMenu(''),
  };
};