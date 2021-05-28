import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import BarRow from '@atoms/BarRow';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/MainPageNav';


const MainPage = ({ listName, rows }: MainPageProps) => {
  return (
    <S.Wrapper >
      <MainPageNav listName={listName} />
      <BarRow rows={rows} />
      <S.BottomFixed>
        <AddBar onCommit={() => {}} />
      </S.BottomFixed>
      <S.Shadow />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';