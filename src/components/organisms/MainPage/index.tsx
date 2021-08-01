import React from 'react';
import * as S from './style';
import { AddBar, Nav, Point } from '~/components/molecules';
import { useListShell } from '~/store/shells';
import { useSelectedID } from '~/store/selectors';


const MainPage = () => {
  const list = useListShell(useSelectedID('list')!);

  return (
    <S.Wrapper>
      <Nav name={list.unshell.name} dotMenu />
      <S.PointWrapper>
        {list.pointsIDs.map(id => <Point key={id} id={id} />)}
      </S.PointWrapper>
      <AddBar onCommit={list.addPoint} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types';