import React from 'react';
import useBoolState from '~/hooks/useBoolState';
import { createPoints } from './helpers';

export const useNavData = () => {
  const [showConfirmation, changeShowConfirmation] = useBoolState();
  const [showRename, changeShowRename] = useBoolState();

  return {
    createdPoints: createPoints(
      changeShowConfirmation.force,
      changeShowRename.force,
    ),
    portals: { showConfirmation, showRename },
    closePortal: {
      confirmation: () => changeShowConfirmation.force(false),
      rename: () => changeShowRename.force(false),
    },
  };
};