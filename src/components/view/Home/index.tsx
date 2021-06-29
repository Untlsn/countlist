import React, { useCallback, useEffect } from 'react';
import * as S from './style';
import { MainPage, Options, PointOptions, LoadingScreen } from '@organisms';
import { useBoolState } from '@hooks';
import { useSelector } from 'react-redux';
import { useConnect, useLocalData } from './hooks';


const Home = () => {
  const point = useSelector(({ mini }) => mini.usedPoint);
  const [initialized, changeInitialized] = useBoolState();
  const connect = useCallback(useConnect(changeInitialized), []);
  useLocalData();
  useEffect(connect, []);

  return initialized
    ? (
      <S.Wrapper>
        <Options />
        <MainPage />
        { point && <PointOptions /> }
      </S.Wrapper>
    )
    : <LoadingScreen />;
};

export default Home;