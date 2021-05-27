import React from 'react';
import { Provider } from 'react-redux';
import { OnlyChildren } from '@types';
import store from '@store';

const StoreProvider = ({ children }: OnlyChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;