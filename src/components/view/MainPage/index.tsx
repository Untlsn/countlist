import React from 'react';
import * as S from './style';
import type { MainPageProps } from './types';
import AddBar from '@molecules/AddBar';
import MainPageNav from '@organisms/Nav';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';
import Point from '@molecules/Point';


const MainPage = ({ listName }: MainPageProps) => {
  const addPoint = useCleverDispatch()(
    ({ lists }) => lists.addPoint,
  );
  const points = useSelector(
    ({ lists }) => lists.find(({ name }) => name == listName)?.points,
  ) || [];


  return (
    <S.Wrapper>
      <MainPageNav name={listName} dotMenu />
      <S.PointWrapper>
        {points.map(
          ({ name, check }) => <Point key={name} text={name} onClick={() => {}} checked={check} />,
        )}
      </S.PointWrapper>
      <AddBar onCommit={(name) => {
        addPoint({
          name: listName,
          newPoint: {
            name,
            check: false,
          },
        });
      }} />
    </S.Wrapper>
  );
};

export default MainPage;
export type { MainPageProps } from './types.d';