import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import { AddBar, Nav, Point } from '@molecules';
import { useData } from '@organisms/MainPage/hooks';


const MainPage = ({ listID }: MainPageProps) => {
  const { addPoint, composition } = useData(listID);

  return (
    <S.Wrapper>
      <Nav id={listID} dotMenu />
      <S.PointWrapper>
        {composition.map((id) => <Point key={id} id={id} />)}
      </S.PointWrapper>
      <AddBar onCommit={addPoint} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types';