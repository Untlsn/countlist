import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import BarRow from '@atoms/BarRow';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/Nav';
import { useSelector } from 'react-redux';


const MainPage = ({ listName, rows }: MainPageProps) => {
  const isDark = useSelector(({ mini }) => mini.isDark);

  return (
    <S.Wrapper isDark={isDark}>
      <MainPageNav name={listName} dotMenu />
      <BarRow rows={rows} />
      <AddBar onCommit={() => {}} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';