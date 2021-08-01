import { Point } from '~/store/ducks/lists/state.types';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { usePointSelector, useSelectedID } from '~/store/selectors';
import { lists, mini } from '~/store/actions';
import { Unshell } from '~/store/shells/unshell';

interface PointSell {
  change(payload: Partial<Point>): void
  remove(): void
  select(): void
  unselect(): void
  rename(name: string): void
  isSelected: boolean
}
export const usePointShell = (id: string): PointSell & Unshell<Point> => {
  const dispatch = useComposedDispatch();

  return {
    unshell: usePointSelector(id) ?? {},
    isSelected: useSelectedID('point') == id,
    change: (payload) => dispatch(lists.changePoint)({ ...payload, id }),
    remove: () => dispatch(lists.remove)(id),
    select: () => dispatch(mini.selectPoint)(id),
    rename: (name: string) => dispatch(lists.rename)({ name, id }),
    unselect: dispatch(mini.clearSelectPoint) as () => void,
  };
};