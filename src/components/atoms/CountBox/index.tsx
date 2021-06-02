import React from 'react';
import * as S from './style';
import type { CountBoxProps } from './types';

const CountBox = ({ fill }: CountBoxProps) => {
  if (fill != 1) fill = fill % 1;
  const empty = 1 - fill;

  return (
    <S.Wrapper>
      <S.Empty size={empty} />
      <S.Fill size={fill} />
    </S.Wrapper>
  );
};

export default CountBox;
export type { CountBoxProps } from './types.d';