import { useSelector } from 'react-redux';

export const useSelectedListCheck = () => useSelector(
  ({ mini, lists }) => !!(mini.usedList && lists.lists[mini.usedList]),
);