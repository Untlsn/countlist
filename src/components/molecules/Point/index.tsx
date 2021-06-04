import React from 'react';
import * as S from './style';
import type { PointProps } from './types';

const Point = ({ checked, text, onClick }: PointProps) => {
  return (
    <S.Wrapper>
      <S.Flex onClick={onClick}>
        <S.Circle checked={checked}>
          {checked && <S.Check size={20} />}
        </S.Circle>
        <S.BigText>{text}</S.BigText>
      </S.Flex>
      <S.Ellipsis />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';