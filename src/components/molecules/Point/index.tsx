import React from 'react';
import * as S from './style';
import type { PointProps } from './types';

const Point = ({ checked, text, onClick }: PointProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Circle checked={checked}>
        {checked && <S.Check size={20} />}
      </S.Circle>
      <S.BigText>{text}</S.BigText>
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';