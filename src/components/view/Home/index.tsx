import React from 'react';
import * as S from './style';
import { MainPage, Options, PointOptions } from '@organisms';
import { useSelector } from 'react-redux';

const Home = () => {
  const point = useSelector(
    ({ mini }) => mini.usedPoint,
  );

  return (
    <S.Wrapper rightColumn={true}>
      <Options />
      <MainPage />
      {point && <PointOptions />}
    </S.Wrapper>
  );
};

export default Home;