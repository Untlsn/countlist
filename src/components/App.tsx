import React from 'react';
import Providers, { PreparedSuspense } from '@providers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@view/Home'));
const LogIn = React.lazy(() => import('@view/LogIn'));



const App = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Switch>
          <Route path='/home'>
            <PreparedSuspense Component={Home} />
          </Route>
          <Route path='/login'>
            <PreparedSuspense Component={LogIn} />
          </Route>
        </Switch>
      </Providers>
    </BrowserRouter>
  );
};

export default App;