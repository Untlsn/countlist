import { useDispatch } from 'react-redux';
import compose from '~/helpers/compose';

const useComposedDispatch = () => {
  const dispatch = useDispatch();

  return compose<any, void>(dispatch);
};

export default useComposedDispatch;