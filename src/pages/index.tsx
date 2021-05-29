import React from 'react';
import Providers from '@providers';
import MainPage from '@view/MainPage';
import Options from '@view/Options';
import styled from 'styled-components';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const StyledWrapper = styled.div`
  display: grid;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
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
  return (
    <StyledWrapper>
      <Options selected={0} changeSelected={() => {}} />
      <MainPage listName='temp name' rows={5} />
    </StyledWrapper>
  );
};

export default Wrapper;
