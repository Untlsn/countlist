import React from 'react';
import * as S from './style';
import MainPageNav from '@organisms/MainPageNav';
import type { MainPageProps } from './types';
import BarRow from '@atoms/BarRow';
import AddBar from '@molecules/AddBar';

const MainPage = ({ listName, rows }: MainPageProps) => {
  return (
    <S.Wrapper>
      <MainPageNav listName={listName} />
      <BarRow rows={rows} />
      <AddBar onCommit={() => {}} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';