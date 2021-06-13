import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '@atoms/PointCircle';
import { usePointData } from '@molecules/Point/hooks';

const Point = ({ id }: PointProps) => {
  const { count, name } = usePointData(id);

  return (
    <S.Wrapper>
      <S.Flex onClick={() => {}}>
        <PointCircle checked={!!count} />
        <S.BigText>{name}</S.BigText>
      </S.Flex>
      <S.Ellipsis onClick={() => {}} />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';