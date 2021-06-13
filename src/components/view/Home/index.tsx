import React from 'react';
import * as S from './style';
import Options from '@organisms/Options';
import MainPage from '@organisms/MainPage';
import PointOptions from '@organisms/PointOptions';
import { useSelector } from 'react-redux';

const Home = () => {
  const point = useSelector(
    ({ mini }) => mini.usedPoint,
  );

  return (
    <S.Wrapper rightColumn={true}>
      <Options />
      <MainPage />
      {point && <PointOptions {...point} />}
    </S.Wrapper>
  );
};

export default Home;