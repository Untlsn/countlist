import React, { useEffect } from 'react';
import * as S from './style';
import { MainPage, Options, PointOptions, LoadingScreen } from '@organisms';
import { useBoolState, useCleverDispatch } from '@hooks';
import { List, Point } from '@store/ducks/lists/state.types';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as R from 'ramda';


const Home = () => {
  const point = useSelector(({ mini }) => mini.usedPoint);

  const cleverDispatch = useCleverDispatch();
  const initLists = cleverDispatch(({ lists }) => lists.initLists);
  const initPoints = cleverDispatch(({ lists }) => lists.initPoints);
  const changeUserName = cleverDispatch(({ mini }) => mini.changeUserName);
  const userID = useSelector(({ mini }) => mini.userID);

  const [initialized, changeInitialized] = useBoolState();
  const history = useHistory();

  useEffect(() => {
    axios
      .post('/api/get-lists', userID)
      .then(({ data }) => {
        changeUserName(data.userName);
        return JSON.parse(data.lists) as Record<string, List>;
      })
      .then((lists) => {
        initLists(lists);
        changeInitialized();
        const allPoints: string[] = [];
        R.forEachObjIndexed(({ composition }) => allPoints.push(...composition), lists);
        return allPoints;
      })
      .then((points) => {
        axios
          .post('/api/get-points', points)
          .then(({ data }) => data as Record<string, Point>)
          .then(initPoints)
          .catch(console.log);
      })
      .catch(() => history.push('/login'));
  }, []);


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