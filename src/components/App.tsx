import React from 'react';
import Providers, { PreparedSuspense } from '@providers';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('@view/Home'));
const LogIn = React.lazy(() => import('@view/LogIn'));



const App = () => {
  const token = localStorage.getItem('user-token')!;

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
          <Route path='/'>{token
            ? <Redirect to='/home' />
            : <Redirect to='/login' />
          }</Route>
        </Switch>
      </Providers>
    </BrowserRouter>
  );
};

export default App;