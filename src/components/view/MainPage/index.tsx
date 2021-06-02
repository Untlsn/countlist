import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import AddBar from '@molecules/AddBar';
import Nav from '@organisms/Nav';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';
import Point from '@molecules/Point';


const MainPage = ({ listID }: MainPageProps) => {
  const cleverDispatch = useCleverDispatch();

  const addPoint = cleverDispatch(
    ({ lists }) => lists.addPoint,
  );
  const togglePointCheck = cleverDispatch(
    ({ lists }) => lists.togglePointCheck,
  );

  const points = useSelector(
    ({ lists }) => Object.entries(lists[listID] || {}),
  ).map(
    ([id, { check }]) => <Point
      key={id}
      text={id.split('@')[0]}
      onClick={() => togglePointCheck({
        listID,
        pointID: id,
        check: !check,
      })}
      checked={check} />,
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
          data: { check: false },
        });
      }} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';