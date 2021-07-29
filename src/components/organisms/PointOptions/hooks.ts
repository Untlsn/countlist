import { handleChange } from '~/helpers';
import { useSelector } from 'react-redux';
import { lists, mini } from '~/store/actions';
import useComposedDispatch from '~/hooks/useComposedDispatch';

export const useNameInput = (usedPoint: string, name: string) => {
  const changeName = useComposedDispatch()(lists.changeName);

  return {
    value: name,
    onChange: handleChange((newName) => changeName(
      { id: usedPoint, name: newName },
    )),
  };
};

const useAllPointData = (pointID: string) => useSelector(({ lists }) => {
  const list = lists.pointsRefs[pointID];
  return lists.lists[list].points[pointID];
});

export const usePointData = (id: string) => {
  const dispatch = useComposedDispatch();
  const change = dispatch(lists.changePoint);
  const remove = dispatch(lists.remove);
  const usePoint = dispatch(mini.usePoint);


  return {
    ...useAllPointData(id),
    change,
    hide: () => usePoint(undefined),
    remove: () => {
      usePoint(undefined);
      remove(id);
    },
  };
};