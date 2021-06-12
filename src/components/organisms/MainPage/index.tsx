import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import { AddBar, Nav, Point } from '@molecules';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';


const MainPage = ({ listID }: MainPageProps) => {
  const cleverDispatch = useCleverDispatch();

  const addPoint = cleverDispatch(
    ({ lists }) => lists.addPoint,
  );
  const togglePointCheck = cleverDispatch(
    ({ lists }) => lists.togglePointCheck,
  );
  const usePoint = cleverDispatch(
    ({ mini }) => mini.usePoint,
  );

  const points = useSelector(
    ({ lists }) => Object.entries(lists[listID] || {}),
  ).map(
    ([pointID, point]) => <Point
      key={pointID}
      text={pointID.split('@')[0]}
      onClick={() => togglePointCheck({
        listID,
        pointID,
        check: !point.count,
      })}
      checked={!!point.count}
      onEllipsisClick={() => usePoint({ listID, pointID })} />,
  );


  return (
    <S.Wrapper>
      <Nav id={listID} dotMenu />
      <S.PointWrapper>
        {points}
      </S.PointWrapper>
      <AddBar onCommit={(name) => {
        addPoint({
          listID,
          name,
        });
      }} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types';