import React from 'react';
import * as S from './style';
import { AddBar, Nav, Point } from '@molecules';
import { useRedux } from '@organisms/MainPage/hooks';


const MainPage = () => {
  const { name, composition, addPoint } = useRedux();

  return (
    <S.Wrapper>
      <Nav name={name} dotMenu />
      <S.PointWrapper>
        {composition.map((id) => <Point key={id} id={id} />)}
      </S.PointWrapper>
      <AddBar onCommit={addPoint} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types';