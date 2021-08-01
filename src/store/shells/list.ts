import { List } from '~/store/ducks/lists/state.types';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { useSelector } from 'react-redux';
import { lists, mini } from '~/store/actions';
import { Unshell } from '~/store/shells/unshell';
import { useSelectedID } from '~/store/selectors';

interface ListShell {
  pointsIDs: string[]
  isSelected: boolean
  addPoint(name: string): void
  rename(name: string): void
  remove(): void
  select(): void
}

export const useListShell = (id: string): ListShell & Unshell<List> => {
  const dispatch = useComposedDispatch();
  const unshell = useSelector(
    ({ lists }) => lists.lists[id],
  ) ?? {};

  return {
    unshell,
    isSelected: useSelectedID('list') == id,
    pointsIDs: Object.keys(unshell.points ?? {}),
    addPoint: (name) => dispatch(lists.addPoint)({ name, list: id }),
    rename: (name) => dispatch(lists.rename)({ id, name }),
    remove: () => dispatch(lists.remove)(id),
    select: () => dispatch(mini.selectList)(id),
  };
};