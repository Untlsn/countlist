import React from 'react';
import * as S from './style';
import { MainPage, Options, PointOptions } from '~/components/organisms';
import { useSelectedID } from '~/store/selectors';

const Home = () => {
  const point = useSelectedID('point');
  return (
    <S.Wrapper>
      <Options />
      <MainPage />
      { point && <PointOptions /> }
    </S.Wrapper>
  );
};

export default Home;