import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '@atoms/PointCircle';
import { useDataDispatch, usePointData } from '@molecules/Point/hooks';

const Point = ({ id }: PointProps) => {
  const { count, name } = usePointData(id);
  const { changeCount, usePoint } = useDataDispatch(id);


  return (
    <S.Wrapper>
      <S.Flex onClick={() => changeCount()}>
        <PointCircle checked={!!count} />
        <S.BigText>{name}</S.BigText>
      </S.Flex>
      <S.Ellipsis onClick={usePoint} />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';