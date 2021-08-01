import { useSelector } from 'react-redux';

export const usePointSelector = (pointID: string) => useSelector(({ lists }) => {
  const listID = lists.pointsRefs[pointID];
  const list = lists.lists[listID];
  return list?.points[pointID] ?? {};
});
export const useListsIDs = () => useSelector(({ lists }) => Object.keys(lists.lists));

export const useSelectedID = (type: 'point'|'list') => useSelector(
  ({ mini }) => type == 'list'
    ? mini.selectedList
    : mini.selectedPoint,
);

