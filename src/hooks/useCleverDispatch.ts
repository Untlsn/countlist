import { useDispatch } from 'react-redux';
import { Actions, actions } from '@store';
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

const useCleverDispatch = () => {
  const dispatch = useDispatch();

  const self = <Payload>(callback: (actions: Actions) => ActionCreatorWithPayload<Payload>) => {
    const action = callback(actions);

    return (payload: Payload) => dispatch(action(payload));
  };

  self.no = (callback: (actions: Actions) => ActionCreatorWithoutPayload) => {
    const action = callback(actions);

    return () => dispatch(action());
  };

  return self;
};

export default useCleverDispatch;