import { useSelector } from 'react-redux';
import { lists } from '~/store/actions';
import useComposedDispatch from '~/hooks/useComposedDispatch';

export const useRedux = () => {
  const list = useSelector(({ mini }) => mini.usedList  || '0');
  const { points, name } = useSelector(
    ({ lists }) => {
      const { points = {}, name = '(no-name)' } = lists.lists[list] ?? {};
      return {
        name,
        points: Object.keys(points),
      };
    },
  );
  const addPoint = useComposedDispatch()(lists.addPoint);

  return {
    addPoint: (name: string) => addPoint({ list, name }),
    points,
    name,
  };
};
