import React from 'react';
import * as S from './style';
import { AddBar, Nav, Point } from '~/components/molecules';
import { useRedux } from './hooks';


const MainPage = () => {
  const { name, points, addPoint } = useRedux();

  return (
    <S.Wrapper>
      <Nav name={name} dotMenu />
      <S.PointWrapper>
        {points.map(id => <Point key={id} id={id} />)}
      </S.PointWrapper>
      <AddBar onCommit={addPoint} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types';