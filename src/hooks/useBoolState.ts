import {useState} from 'react';
type useBoolResult<T> = [
  T,
  (force?: boolean) => void
]

const useBoolState = (initialState?: boolean): useBoolResult<boolean> => {
  const [value, changeValue] = useState(initialState == true);
  return [
    value,
    (force) => changeValue(old => force ?? !old)
  ];
};
useBoolState.replace = <T>(trueRep: T, falseRep: T, initialState?: boolean): useBoolResult<T> => {
  const [bool, changeBool] = useBoolState(initialState);
  return [
    bool ? trueRep : falseRep,
    changeBool
  ];
};
export default useBoolState;
