import React from 'react';
import StoreProvider from './StoreProvider';
import StyleProvider from './StyleProvider';
import { OnlyChildren } from '@types';

const CombineProvider = ({ children }: OnlyChildren) => {
  return (
    <StoreProvider>
      <StyleProvider>
        {children}
      </StyleProvider>
    </StoreProvider>
  );
};

export default CombineProvider;