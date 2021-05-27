import React from 'react';
import StoreProvider from './StoreProvider';
import StyleProvider, { StyleProviderProps } from './StyleProvider';

const CombineProvider = ({ children, fonts }: StyleProviderProps) => {
  return (
    <StoreProvider>
      <StyleProvider fonts={fonts}>
        {children}
      </StyleProvider>
    </StoreProvider>
  );
};

export default CombineProvider;