const compose = <A, R>(fn1: (payload: A) => R) => <T>(fn2: (payload: T) => A) => {
  return (payload: T) => fn1(fn2(payload));
};

export default compose;