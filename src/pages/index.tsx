import React from 'react';
import Providers from '@providers';
import { useDispatch } from 'react-redux';
import { actions } from '@store';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const Wrapper = () => {
  return (
    <Providers fonts={[robotoUrl]}>
      <Home />
    </Providers>
  );
};

const Home = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(actions.mini.switchTheme());

  return (
    <>
      <div>Hello World!</div>
      <button onClick={onClick}>Change theme</button>
    </>
  );
};

export default Wrapper;
