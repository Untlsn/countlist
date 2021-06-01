import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/Nav';


const MainPage = ({ listName }: MainPageProps) => {
  return (
    <S.Wrapper>
      <MainPageNav name={listName} dotMenu />
      <div />
      <AddBar onCommit={() => {}} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';