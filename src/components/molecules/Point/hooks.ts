import { useSelector } from 'react-redux';
import { lists, mini } from '~/store/actions';
import useComposedDispatch from '~/hooks/useComposedDispatch';

export const usePointData = (id: string) => {
  const list = useSelector(({ lists }) => lists.pointsRefs[id]);
  return useSelector(({ lists }) => lists.lists[list].points[id]);
};

export const useDataDispatch = (id: string) => {
  const composedDispatch = useComposedDispatch();
  const changePoint = composedDispatch(lists.changePoint);
  const usePoint = composedDispatch(mini.usePoint);

  return {
    changeCount: (count?: number) => changePoint({ id, count }),
    usePoint,
  };
};