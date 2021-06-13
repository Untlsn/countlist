import React from 'react';
import * as S from './style';
import { AddBar, Nav, Point } from '@molecules';
import { useData } from '@organisms/MainPage/hooks';
import { useSelector } from 'react-redux';


const MainPage = () => {
  const listID = useSelector(
    ({ mini }) => mini.usedList,
  ) || '0';

  const name = useSelector(
    ({ lists }) => {
      const list = lists.lists[listID];
      return list?.name ?? '(no-name)';
    },
  );

  const { addPoint, composition } = useData(listID);

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