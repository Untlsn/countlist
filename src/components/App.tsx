import React from 'react';
import Providers from '@providers';
import Home from '@view/Home';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const App = () => {
  return (
    <Providers fonts={[robotoUrl]}>
      <Home />
    </Providers>
  );
};

export default App;