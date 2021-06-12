import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '@atoms/PointCircle';

const Point = ({ checked, text, onClick, onEllipsisClick }: PointProps) => {
  return (
    <S.Wrapper>
      <S.Flex onClick={onClick}>
        <PointCircle checked={checked} />
        <S.BigText>{text}</S.BigText>
      </S.Flex>
      <S.Ellipsis onClick={onEllipsisClick} />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';