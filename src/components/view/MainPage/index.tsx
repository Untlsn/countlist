import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/Nav';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';
import Point from '@molecules/Point';


const MainPage = ({ listID }: MainPageProps) => {
  const addPoint = useCleverDispatch()(
    ({ lists }) => lists.addPoint,
  );

  const points = useSelector(
    ({ lists }) => Object.entries(lists[listID] || {}),
  );


  return (
    <S.Wrapper>
      <MainPageNav name={listID} dotMenu />
      <S.PointWrapper>
        {points.map(
          ([id, { check }]) => <Point
            key={id}
            text={id.split('@')[0]}
            onClick={() => {}}
            checked={check} />,
        )}
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