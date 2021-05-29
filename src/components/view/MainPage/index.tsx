import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import BarRow from '@atoms/BarRow';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/Nav';


const MainPage = ({ listName, rows }: MainPageProps) => {
  return (
    <S.Wrapper >
      <MainPageNav name={listName} dotMenu />
      <BarRow rows={rows} />
      <AddBar onCommit={() => {}} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';