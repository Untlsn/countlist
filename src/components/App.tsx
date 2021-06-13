import React from 'react';
import Providers from '@providers';
import Home from '@view/Home';

const App = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  );
};

export default App;