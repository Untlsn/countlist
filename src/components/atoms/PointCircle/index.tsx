import React from 'react';
import * as S from './style';
import type { PointCircleProps } from './types';

const PointCircle = ({ checked, onClick }: PointCircleProps) => {
  return (
    <S.Circle checked={checked} onClick={onClick}>
      {checked && <S.Check size={20} />}
    </S.Circle>
  );
};

export default PointCircle;
export type { PointCircleProps } from './types';