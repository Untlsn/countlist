import React from 'react';
import { BsFillTrashFill, CgRename } from 'react-icons/all';
import useBoolState from '~/hooks/useBoolState';
import { useSelector } from 'react-redux';
import { lists } from '~/store/actions';
import useComposedDispatch from '~/hooks/useComposedDispatch';

export const useNavData = () => {
  const [showConfirmation, changeShowConfirmation] = useBoolState();
  const [showRename, changeShowRename] = useBoolState();

  return {
    icons: [
      <BsFillTrashFill key='trash' />,
      <CgRename key='rename' />,
    ],
    events: [
      () => changeShowConfirmation.force(true),
      () => changeShowRename.force(true),
    ],
    texts: [
      'remove',
      'rename',
    ],
    portals: { showConfirmation, showRename },
    closePortal: {
      confirmation: () => changeShowConfirmation.force(false),
      rename: () => changeShowRename.force(false),
    },
  };
};

export const useSelectedList = () => {
  const dispatch = useComposedDispatch();
  const usedList = useSelector(({ mini }) => mini.usedList)!;

  const remove = dispatch(lists.remove);
  const rename = dispatch(lists.changeName);

  return {
    name: useSelector(({ lists }) => lists.lists[usedList].name),
    rename: (name: string) => rename({ id: usedList, name }),
    remove: () => remove(usedList),
  };
};