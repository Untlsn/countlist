import { actions } from '@store';
import { useDispatch } from 'react-redux';

const useSwitchOptions = () => {
  const dispatch = useDispatch();
  return () => dispatch(actions.mini.switchOptions());
};

export default useSwitchOptions;