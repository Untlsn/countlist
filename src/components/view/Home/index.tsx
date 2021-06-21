import React, { useEffect } from 'react';
import * as S from './style';
import { MainPage, Options, PointOptions, LoadingScreen } from '@organisms';
import { useBoolState, useCleverDispatch } from '@hooks';
import { ListsState } from '@store/ducks/lists/state.types';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Home = () => {
  const point = useSelector(({ mini }) => mini.usedPoint);

  const cleverDispatch = useCleverDispatch();
  const initLists = cleverDispatch(({ lists }) => lists.init);
  const changeUserName = cleverDispatch(({ mini }) => mini.changeUserName);

  const [initialized, changeInitialized] = useBoolState();
  const history = useHistory();

  useEffect(() => {
    const id = prompt('Log you id'); // login placeholder

    axios
      .get(`/api/get-lists?id=${id}`)
      .then(({ data }) => {
        changeUserName(data.userName);
        return data.lists as ListsState;
      })
      .then(initLists)
      .then(changeInitialized)
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