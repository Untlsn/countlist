import React, { useState } from 'react';
import Providers from '@providers';
import MainPage from '@view/MainPage';
import Options from '@view/Options';
import styled from 'styled-components';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const StyledWrapper = styled.div<{ rightColumn: boolean }>`
  display: grid;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const Wrapper = () => {
  return (
    <Providers fonts={[robotoUrl]}>
      <Home />
    </Providers>
  );
};

const Home = () => {
  const [selected, changeSelected] = useState('');

  return (
    <StyledWrapper rightColumn={true}>
      <Options selected={selected} changeSelected={changeSelected} />
      <MainPage listID={selected || '(no-name)@000'} />
    </StyledWrapper>
  );
};

export default Wrapper;
